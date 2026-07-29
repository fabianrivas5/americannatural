-- ============================================================================
--  American Natural — Seguridad en Supabase (RLS + protección de roles)
--  Ejecutar en Supabase → SQL Editor. Cada paso indica su riesgo y su rollback.
--
--  POR QUÉ HACE FALTA
--  La app guarda TODO el estado en una sola fila de `app_state`. Los roles
--  (admin/tester/editor) viven dentro de ese mismo JSON. Si cualquier usuario
--  autenticado puede escribir esa fila, puede reescribir su propio rol y
--  volverse admin. El `requireAdmin()` que hay en el código es defensa en
--  profundidad: evita clics accidentales, pero se salta desde la consola del
--  navegador. La frontera real es esta.
--
--  IMPORTANTE — NADA DE ESTO SE PUDO PROBAR CONTRA TU PROYECTO.
--  No hay acceso al dashboard desde donde se escribió este archivo. Ejecuta
--  paso por paso, verificando entre uno y otro, y ten a mano el rollback.
--  El paso 3 es el único con riesgo real de bloquear guardados: hazlo último y
--  con alguien del equipo probando en paralelo.
-- ============================================================================


-- ────────────────────────────────────────────────────────────────────────────
-- PASO 0 — DIAGNÓSTICO (solo lectura, no cambia nada). Ejecuta esto primero
-- y guarda el resultado: es el "antes" al que volver si algo se tuerce.
-- ────────────────────────────────────────────────────────────────────────────

-- ¿Está RLS activo en app_state?
select relname as tabla, relrowsecurity as rls_activo, relforcerowsecurity as rls_forzado
from pg_class where relname = 'app_state';

-- ¿Qué políticas existen hoy?
select schemaname, tablename, policyname, cmd, roles, qual, with_check
from pg_policies where tablename = 'app_state';

-- ¿Qué usuarios hay en Auth? (los UUID que necesitarás en el paso 2)
select id, email, created_at, last_sign_in_at
from auth.users order by created_at;


-- ────────────────────────────────────────────────────────────────────────────
-- PASO 1 — RLS BÁSICO EN app_state.  Riesgo: BAJO
-- Objetivo: que solo usuarios autenticados lean y escriban. Bloquea el acceso
-- con la anon key desde fuera de la app (hoy la anon key está publicada en el
-- HTML, como es normal, así que esto no es opcional).
-- ────────────────────────────────────────────────────────────────────────────

alter table public.app_state enable row level security;

-- Se borran primero por si ya existen con el mismo nombre (idempotente).
drop policy if exists "app_state lectura autenticada"   on public.app_state;
drop policy if exists "app_state insercion autenticada" on public.app_state;
drop policy if exists "app_state update autenticado"    on public.app_state;

create policy "app_state lectura autenticada"
  on public.app_state for select
  to authenticated using (true);

-- La app usa upsert(), que necesita INSERT y UPDATE.
create policy "app_state insercion autenticada"
  on public.app_state for insert
  to authenticated with check (org = 'americannatural');

create policy "app_state update autenticado"
  on public.app_state for update
  to authenticated using (org = 'americannatural')
  with check (org = 'americannatural');

-- Nadie borra la fila del estado desde la app: no se crea política de DELETE,
-- así que queda prohibido por defecto.

-- OJO: activar RLS no elimina políticas que ya existieran con otro nombre, y una
-- política antigua más permisiva seguiría abriendo la puerta. Vuelve a ejecutar la
-- consulta del PASO 0 y borra a mano lo que no reconozcas:
--   drop policy "<nombre que salga en pg_policies>" on public.app_state;

-- VERIFICAR: entra a la app con un usuario normal, mueve una etapa y guarda.
-- Debe funcionar igual que antes. Si falla, mira la consola del navegador
-- (Config → 🩺 Diagnóstico registra el error exacto).
-- ROLLBACK PASO 1:
--   alter table public.app_state disable row level security;


-- ────────────────────────────────────────────────────────────────────────────
-- PASO 2 — TABLA DE ADMINS.  Riesgo: BAJO (solo crea una tabla)
-- Hace falta una fuente de verdad de "quién es admin" que viva FUERA del JSON
-- que todos pueden escribir. Sin esto, el paso 3 no tiene contra qué comparar.
-- ────────────────────────────────────────────────────────────────────────────

create table if not exists public.app_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nota    text,
  creado  timestamptz not null default now()
);

alter table public.app_admins enable row level security;

-- Todos los autenticados pueden LEER quién es admin (la app podría usarlo).
drop policy if exists "app_admins lectura autenticada" on public.app_admins;
create policy "app_admins lectura autenticada"
  on public.app_admins for select to authenticated using (true);

-- Nadie escribe esta tabla desde la app: sin políticas de insert/update/delete,
-- solo se toca desde el SQL Editor (service_role). Esa es justamente la idea.

-- >>> SEMBRAR LOS ADMINS REALES <<<
-- Sustituye los correos por los que de verdad deban ser admin. Toma los UUID
-- de auth.users, NO los inventes.
insert into public.app_admins (user_id, nota)
select id, email from auth.users
where email in (
  'fabianrivas5@hotmail.com',
  'novedadestv1969@gmail.com'
  -- añade aquí los demás admins
)
on conflict (user_id) do nothing;

-- VERIFICAR: debe devolver una fila por cada admin esperado.
select a.user_id, u.email from public.app_admins a join auth.users u on u.id = a.user_id;

-- ROLLBACK PASO 2:
--   drop table if exists public.app_admins;


-- ────────────────────────────────────────────────────────────────────────────
-- PASO 3 — IMPEDIR LA AUTO-PROMOCIÓN.  Riesgo: MEDIO — LEE ESTO ENTERO
--
-- El problema de diseño: la app reescribe el array `users` en CADA guardado
-- (normaliza usuarios por defecto, limpia contraseñas heredadas, etc.). Un
-- trigger que compare el array completo bloquearía los guardados de todo el
-- equipo por cambios inofensivos.
--
-- Por eso se compara SOLO el mapa {email: rol}. Cambiar un nombre, desactivar
-- a alguien o limpiar contraseñas no lo altera; cambiar un rol o añadir un
-- usuario nuevo sí — que es exactamente lo que se quiere restringir.
-- ────────────────────────────────────────────────────────────────────────────

-- Extrae {email: rol} del estado, ignorando todo lo demás.
-- Se usa jsonb_exists() en vez del operador `?` a propósito: hay clientes SQL que
-- interpretan el `?` como marcador de parámetro y rompen la función al pegarla.
create or replace function public.an_roles_map(d jsonb)
returns jsonb language sql immutable as $$
  select coalesce(
    jsonb_object_agg(lower(u->>'email'), u->>'role')
      filter (where jsonb_exists(u, 'email') and u->>'email' is not null),
    '{}'::jsonb)
  from jsonb_array_elements(coalesce(d->'users', '[]'::jsonb)) u;
$$;

-- Comprueba la función ANTES de conectarla a un trigger:
--   select public.an_roles_map('{"users":[{"email":"A@b.c","role":"admin"},
--                                        {"email":"d@e.f","role":"editor"}]}'::jsonb);
--   -- esperado: {"a@b.c": "admin", "d@e.f": "editor"}
--   select public.an_roles_map('{}'::jsonb);            -- esperado: {}
--   select public.an_roles_map('{"users":[]}'::jsonb);  -- esperado: {}

create or replace function public.an_proteger_roles()
returns trigger language plpgsql security definer
set search_path = public as $$
begin
  if public.an_roles_map(new.data) is distinct from public.an_roles_map(old.data)
     and not exists (select 1 from public.app_admins where user_id = auth.uid())
  then
    raise exception
      'Solo un admin puede cambiar roles o añadir usuarios (usuario: %)', auth.uid()
      using hint = 'Pide a un admin que haga el cambio desde Config → Usuarios.';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_an_proteger_roles on public.app_state;
create trigger trg_an_proteger_roles
  before update on public.app_state
  for each row execute function public.an_proteger_roles();

-- FALSO POSITIVO CONOCIDO, léelo antes de ejecutar:
-- `_mergeDefaultUsers()` en index.html FUERZA el rol de los usuarios por defecto
-- (admin@americannatural.com, fabianrivas5@hotmail.com, novedadestv1969@gmail.com)
-- a 'admin' en cada carga. Si alguna vez se degrada a uno de ellos desde Config,
-- la siguiente carga de CUALQUIER usuario intentará devolverlo a admin, y a un no
-- admin el trigger le bloqueará el guardado. Mientras esos tres sigan como admin,
-- el mapa de roles no cambia y no hay problema. Si algún día hay que degradar a
-- uno, quítalo también de la lista `users` de `defaultState()` en index.html.

-- VERIFICAR, EN ESTE ORDEN:
--   1) Con un usuario NO admin: entrar, mover una etapa, guardar → debe funcionar.
--      Si falla con "Solo un admin puede cambiar roles", el trigger está saltando
--      por un cambio inofensivo: haz el ROLLBACK y reporta el caso antes de insistir.
--   2) Con un admin: Config → Usuarios → cambiar un rol y guardar → debe funcionar.
--   3) Con un NO admin, desde la consola del navegador, intentar promoverse:
--        state.users.find(u => u.email === 'su@correo').role = 'admin'; persistState()
--      → debe fallar y quedar registrado en Config → 🩺 Diagnóstico.
--
-- ROLLBACK PASO 3 (inmediato, no pierde datos):
--   drop trigger if exists trg_an_proteger_roles on public.app_state;


-- ────────────────────────────────────────────────────────────────────────────
-- PASO 4 — STORAGE (archivos y miniaturas).  Riesgo: BAJO
-- La app sube archivos con sb.storage.from(BUCKET).upload() y luego usa
-- getPublicUrl(). Ajusta el nombre del bucket si no coincide con STORAGE_BUCKET
-- en index.html.
-- ────────────────────────────────────────────────────────────────────────────

-- Comprobar primero qué buckets existen y si son públicos:
select id, name, public from storage.buckets;

-- Solo usuarios autenticados suben; la lectura se deja pública porque la app
-- usa getPublicUrl() para mostrar las miniaturas.
-- Sustituye 'creativos' por el bucket real antes de ejecutar.
drop policy if exists "storage subida autenticada" on storage.objects;
create policy "storage subida autenticada"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'creativos');

drop policy if exists "storage lectura publica" on storage.objects;
create policy "storage lectura publica"
  on storage.objects for select to public
  using (bucket_id = 'creativos');

-- ROLLBACK PASO 4:
--   drop policy if exists "storage subida autenticada" on storage.objects;
--   drop policy if exists "storage lectura publica"    on storage.objects;


-- ============================================================================
--  LIMITACIÓN QUE QUEDA EN PIE
--  Aun con todo esto, cualquier usuario autenticado puede escribir el resto del
--  estado compartido (creativos, metas, recursos…). Es inherente al diseño de
--  "una fila para todo" y no se arregla con políticas: haría falta partir el
--  estado en tablas por entidad, con su propia RLS. Es un rediseño grande.
--  Lo que sí cierra este archivo es el escalado de privilegios, que es lo que
--  convierte a un editor en admin.
-- ============================================================================
