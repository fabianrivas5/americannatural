# Handoff — American Natural (plataforma operativa de trafficking)

## 1. Objetivo
Plataforma web (SPA de un solo archivo HTML) para gestionar el flujo de creativos publicitarios de ecommerce COD: pipeline por etapas, testeo con métricas de Meta Ads, performance por creativo/campaña, metas, estrategia de escalado y recursos compartidos por el equipo. Resultado esperado: centro de mando multiusuario, con datos sincronizados en la nube en tiempo real.

## 2. Estado actual
**Funciona:**
- Login (Supabase Auth) con roles admin/tester/editor y pestañas por rol.
- Pipeline kanban: idea → producción → listo → testeo → validado → escalando → rechazado, con botones de avance por etapa.
- Sync de métricas Meta (Edge Function `meta-sync`): por Ad ID (individual) o Campaign ID (campaña, con desglose de conjuntos/anuncios y `effective_status`).
- Performance de creativos y campañas: solo testeados, orden por rendimiento, orden por columna, encabezado fijo, columna Profit, link del anuncio, drilldown de campaña 3 niveles.
- Home ejecutivo (rendimiento por persona, métricas, pendientes por testear, mis pendientes, alertas, metas).
- Metas y estrategia de escalado en Config (solo admin). Recomendación manual de escalado.
- Landings con hasta 5 copies (formato simple: copy completo + título + descripción) y público objetivo; botón copiar/editar rápido.
- Recursos compartidos entre todos los usuarios (merge multiusuario + tombstones).
- Sincronización multiusuario: Supabase Realtime + polling de respaldo cada 20s + indicador de estado.
- **Fix de esta sesión:** guardado ya no se revierte por payload gigante (recorte de snapshots/historial).

**Pendiente / no hecho:**
- Realtime instantáneo requiere activar la tabla `app_state` en Supabase → Database → Replication (opcional; el polling de 20s ya cubre).
- Archivos/miniaturas pesados aún viven dentro del estado (base64) en vez de solo en Supabase Storage — mejora futura para reducir peso permanentemente.
- Desglose por adset/anuncio individual dentro de una campaña sincronizada con un solo Campaign ID: solo disponible vía el drilldown, no como filas separadas en la tabla principal.

## 3. Archivos y cambios
- `Calculadora_American_Natural.html` (fuente principal) e `index.html` (copia idéntica que sirve Vercel):
  - `_autoSnapshot`: tope agresivo de snapshots (máx 3 manuales + 2 autos) y snapshot liviano sin `metaSyncHistory`/`metaBreakdown`.
  - Nuevo `_leanState(src, aggressive)`: copia liviana del estado (sin base64; en modo agresivo sin snapshots ni historial).
  - `persistState`: escritura robusta a localStorage con reintento liviano si se llena.
  - `saveToCloud`: recorte garantizado del payload (500KB → 900KB → soltar snapshots) + cap de `metaSyncHistory` a 5 por creativo en el payload de nube.
  - Cap de `metaSyncHistory` reducido de 20 a 8 en los 3 puntos de sync.
- `/Users/faboair/supabase/functions/meta-sync/index.ts`: (sesiones previas) trae `effective_status` de campaña/adset/anuncio y desglose. Ya desplegado.
- `handoff.md`: creado en esta sesión.

## 4. Intentos fallidos
- Leer `app_state` en Supabase con el anon key vía REST (`curl .../rest/v1/app_state`) → devuelve `[]` por RLS (solo lectura autenticada). No sirve para inspeccionar datos de nube desde terminal.
- Primer intento de parchear la Edge Function con `python3` usando ruta relativa `supabase/functions/...` desde `~/supabase` → `FileNotFoundError`; se resolvió usando ruta absoluta `/Users/faboair/supabase/functions/meta-sync/index.ts`.
- Preview local con `python3 -m http.server` en la carpeta del proyecto → `PermissionError: Operation not permitted` (carpeta en disco externo/Downloads con permisos restringidos). No usar server local para verificar; se valida con JavaScriptCore (`jsc --check-syntax` vía `checkSyntax`).
- Git `commit`/`push` arrojaba `non-monotonic index .git/objects/pack/._pack-*.idx` por archivos AppleDouble (`._*`) del disco externo (SSK Drive). El commit/push igual completaba; se limpió con `find .git -name '._*' -delete`.

## 5. Próximos pasos
1. Confirmar que Vercel desplegó el commit `406041d` (americannatural.vercel.app).
2. En cada computadora: recargar con Cmd+Shift+R. Entrar, mover una etapa y **Guardar** (ese primer guardado recorta la nube de ~2.6MB a tamaño sano). Refrescar y verificar que la etapa se quedó.
3. (Opcional) Activar Realtime: Supabase → Database → Replication → agregar tabla `app_state` a la publicación `supabase_realtime`.
4. (Mejora futura, si el peso vuelve a crecer) Mover miniaturas/archivos base64 de los creativos a Supabase Storage y guardar solo URLs en el estado.
5. Flujo de trabajo del repo: editar `Calculadora_American_Natural.html`, validar sintaxis con JavaScriptCore, `cp` a `index.html`, luego `git add index.html && git commit && git push origin main` (limpiar `._*` de `.git` si reaparece el error non-monotonic).
