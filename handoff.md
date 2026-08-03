# Handoff — American Natural (plataforma operativa de trafficking)

_Última actualización: 2026-07-29 (verificación del fix de guardado + auditoría completa + Sprints 1 y 2)._

> **Lee primero la §8** si vienes a continuar: ahí está la auditoría de toda la herramienta,
> qué se arregló ya y qué queda pendiente, en orden.

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
- **Fix de guardado (commit `406041d`): verificado en producción, ver §6.**
- **Fix de productos (esta sesión):** `updateProduct` ya no convierte el nombre a número (vaciar el nombre lo volvía `0`, un nombre "39" lo volvía número → rompía `c.product===p.name` y el selector del modal). `loadState` repara nombres corrompidos a número. Selector de producto del modal defensivo (filtra nombres vacíos; conserva productos eliminados marcados). `removeProduct` ahora confirma y avisa cuántos creativos/landings quedan huérfanos. Tests: 5 nuevos en `scripts/test.js` (100 OK total).

**Pendiente / no hecho:**
- Realtime instantáneo requiere activar la tabla `app_state` en Supabase → Database → Replication (opcional; el polling de 20s ya cubre).
- Miniaturas base64: viven en el estado en memoria y en localStorage. **Corrección respecto al handoff anterior: NO llegan a la nube** — `_stripBlobs` convierte a `null` todo string que empiece con `data:` antes de guardar (verificado en runtime). El peso base64 solo afecta la cuota de localStorage, no el payload de Supabase.
- **Nuevo vector de crecimiento identificado: `metaBreakdown`** (desglose de adsets/anuncios de campañas sincronizadas). No se recorta en ningún punto del payload de nube ni en `_leanState` agresivo. Ver §6 y §7.
- Desglose por adset/anuncio individual dentro de una campaña sincronizada con un solo Campaign ID: solo disponible vía el drilldown, no como filas separadas en la tabla principal.

## 3. Archivos y estado en git
- `index.html` — lo que sirve Vercel.
- `Calculadora_American_Natural.html` — fuente de trabajo. **Ya está versionado en git** (desde el commit `0461813`); es byte-idéntico a `index.html`. Mantener los dos sincronizados con `cp`.
- `.gitignore` — ignora `._*` y `.DS_Store` (la basura de macOS en el disco externo que rompía `git push`).
- Untracked a propósito: PDFs, `.xlsm`, `SEMANA MEJOR/`, `.claude/` — son datos pesados, no código.
- `/Users/faboair/supabase/functions/meta-sync/index.ts`: (sesiones previas) trae `effective_status` de campaña/adset/anuncio y desglose. Ya desplegado.

Funciones clave (buscar **por nombre**, no por número de línea — el archivo se edita seguido y los números quedan obsoletos):
- `_stripBlobs` — elimina strings `data:` (base64) de forma recursiva.
- `_autoSnapshot` — snapshot sin `versions`/`metaSyncHistory`/`metaBreakdown`; cap 3 manuales + 2 autos.
- `_leanState(src, aggressive)` — copia liviana; en modo agresivo suelta snapshots auto e historiales. No muta el original (verificado).
- `persistState` / `_persistLocal` — `_persistLocal` es la escritura síncrona a localStorage (la única que sobrevive al cierre de la pestaña).
- `saveToCloud` — recorte del payload en 2 escalones (>500KB → 2 manuales + 1 auto; >900KB → soltar todos los snapshots) + cap de `metaSyncHistory` a 5 en el payload de nube.
- `_MERGE_LIST_KEYS` — `versions` NO está en la lista, así que los snapshots de la nube no se re-mergean al estado local.
- Bloques nuevos (2026-07-29): "REGISTRO DE ERRORES" (`logError`) y "SEGURIDAD" (`esc`/`escJs`/`safeUrl`/`safeSrc`), ambos cerca del inicio del `<script>`. `requireAdmin` y `_stripPasswords` junto a `currentUser`.

## 4. Intentos fallidos (no repetir)
- Leer `app_state` en Supabase con el anon key vía REST (`curl .../rest/v1/app_state`) → devuelve `[]` por RLS (solo lectura autenticada). No sirve para inspeccionar datos de nube desde terminal, ni para medir el peso real del payload.
- Primer intento de parchear la Edge Function con `python3` usando ruta relativa `supabase/functions/...` desde `~/supabase` → `FileNotFoundError`; se resolvió usando ruta absoluta `/Users/faboair/supabase/functions/meta-sync/index.ts`.
- Preview local con `python3 -m http.server` en la carpeta del proyecto → `PermissionError: Operation not permitted` (disco externo). Existe `.claude/launch.json` apuntando a ese server, pero **no funciona** — no insistir.
  - **Alternativa que sí funciona:** verificar contra el deploy real (`https://americannatural.vercel.app/`) con el Browser pane, y ejecutar funciones puras del bundle con `javascript_tool`. Sin login no se puede probar `saveToCloud` end-to-end.
- Git `commit`/`push` arrojaba `non-monotonic index .git/objects/pack/._pack-*.idx` por archivos AppleDouble (`._*`) del disco externo (SSK Drive). El commit/push igual completaba; se limpió con `find .git -name '._*' -delete`.

## 5. Próximos pasos
1. ~~Confirmar que Vercel desplegó el commit `406041d`.~~ ✅ **Hecho** — el HTML servido por `americannatural.vercel.app` es byte-idéntico (MD5 `82d1244...`) al local, y local == `origin/main` == `88ab321`. La app carga sin errores de consola.
2. **[Requiere el equipo, no se puede automatizar sin credenciales]** En cada computadora: recargar con Cmd+Shift+R. Entrar, mover una etapa y **Guardar** (ese primer guardado recorta la nube de ~2.6MB a tamaño sano). Refrescar y verificar que la etapa se quedó. Tras guardar, revisar la consola: debe aparecer `Cloud saved ok ... | payload: NNNkB` — anotar ese número, es la medida real del peso de la nube.
3. (Opcional) Activar Realtime: Supabase → Database → Replication → agregar tabla `app_state` a la publicación `supabase_realtime`.
4. **Vigilar `metaBreakdown`** (reemplaza al ítem anterior sobre base64, que resultó no aplicar a la nube). Si el `payload: NNNkB` del paso 2 supera ~900KB, el siguiente escalón de recorte a implementar es soltar `metaBreakdown` en `saveToCloud` (es dato re-obtenible: se vuelve a traer al sincronizar la campaña). Ver números en §6.
5. Flujo de trabajo del repo: editar `index.html` → `node scripts/test.js` (debe dar 95 OK) → `cp index.html Calculadora_American_Natural.html` → `node scripts/mapa.js` → commitear los tres. Si el cambio toca render o escape, pasar también `scripts/test-dom.js` en el navegador. El `.gitignore` ya evita el error non-monotonic; si reaparece, `find .git -name '._*' -delete`.

## 6. Verificación del fix de guardado (esta sesión)
Se extrajeron las funciones reales de `index.html` y se ejecutaron en Node contra estados sintéticos con la forma real del proyecto (creativos con `thumb` base64, `metaSyncHistory` de 20 entradas, `metaBreakdown` de 6 conjuntos × 5 anuncios, y snapshots gordos):

| Escenario | Payload sin recorte | Payload a la nube | Datos preservados |
|---|---|---|---|
| 100 creativos + 8 snapshots | 5644 KB | **365 KB** | 100/100 creativos |
| 400 creativos + 20 snapshots | 53230 KB | **1463 KB** ⚠️ | 400/400 creativos |

- El recorte **nunca descarta creativos ni datos reales** — solo snapshots (respaldo) e historial de sync.
- `_autoSnapshot` no infla el estado: tras 10 guardados seguidos el estado bajó de 9552KB a 6385KB y `versions` quedó en 5. No hay anidamiento de snapshots dentro de snapshots.
- `_leanState(state, true)` (fallback cuando localStorage se llena): 5644KB → 941KB, elimina base64 e historiales, conserva los 100 creativos.
- En el runtime desplegado: `_leanState` no muta el objeto original, elimina base64 y deja 1 sola versión en modo agresivo. Sin errores de consola, `sb` (Supabase) inicializado, login renderizando.
- ⚠️ **Límite encontrado:** con ~400 creativos que tengan `metaBreakdown` de campaña, el payload queda en ~1.4MB aun soltando *todos* los snapshots, porque `metaBreakdown` no se recorta en ningún escalón. Ese es el techo actual del diseño.

## 7. Fix propuesto (no implementado — esperar dato del paso 2)
En `saveToCloud`, después del escalón de 900KB (línea ~2114), añadir un tercer escalón:

```js
if (roughSize > 1200000) {
  // Paso 3: soltar metaBreakdown — es dato re-obtenible al sincronizar la campaña
  stateToSave.creativos = (stateToSave.creativos||[]).map(({ metaBreakdown, ...c }) => c);
  roughSize = JSON.stringify(stateToSave).length;
  console.warn('Payload muy grande — metaBreakdown omitido del guardado en nube');
}
```

**Costo:** los demás usuarios pierden el drilldown de campaña hasta que alguien vuelva a sincronizar esa campaña. Por eso no se implementó de forma preventiva: primero hay que saber el peso real (paso 2). Si el payload real está en 300–500KB, no hace falta tocar nada.

---

## 8. Auditoría de la herramienta (2026-07-29) y estado de los arreglos

Auditoría del archivo completo (7921 líneas originales, 263 funciones). Se listaron 10 problemas
ordenados por impacto/esfuerzo. **Sprints 1 y 2 ya implementados y verificados.**

### ✅ Sprint 1 — commit `0461813`

| # | Problema | Qué se hizo |
|---|---|---|
| 2 | **XSS almacenado**: 104 `innerHTML`, 202 `onclick`, 0 funciones de escape. `c.link`/`c.adLink`/`r.url` iban directos a `href=`, así que un `javascript:` guardado se ejecutaba en el navegador de todo el equipo. | `esc()`, `escJs()`, `safeUrl()`, `safeSrc()` en `index.html` (bloque "SEGURIDAD"). Aplicados a ~170 sitios. |
| 3 | **`beforeunload` no guardaba**: llamaba a `persistState()`, cuyo `fetch` el navegador aborta al cerrar. Parecía guardar sin hacerlo. | `visibilitychange`→`hidden` guarda de verdad; `beforeunload` escribe localStorage, marca `PENDING_KEY` y avisa al usuario; al arrancar se sube lo pendiente **antes** de `syncFromCloud`. |
| 7 | CDNs sin SRI ni versión fija. | `integrity` + `crossorigin` en los 3. supabase-js fijado a **2.111.0** (estaba en `@2`, flotante). |
| 9 | Fuente sin versionar; `._*` rompiendo git. | `Calculadora_American_Natural.html` versionado + `.gitignore` para `._*`/`.DS_Store`. |

### ✅ Sprint 2 — commit siguiente

| # | Problema | Qué se hizo |
|---|---|---|
| 8 | Fallos invisibles: 0 `window.onerror`, 4 `catch` vacíos. Ante un "no me guardó" no había rastro. | `logError()` con tope de 50 y agrupación de repetidos; captura de `error`/`unhandledrejection`; 12 fallos críticos conectados; **visor en Config → 🩺 Diagnóstico** (solo admin) con botón de copiar. |
| 5 | `_dataScore` solo contaba longitudes y omitía `metas`/`team`/`costCaps`/`users`/etc. No detectaba un vaciado de contenido. | `_dataScore` ahora pesa elementos **y** su contenido sobre 15 listas. Nuevo `_perdidaAnormal()` con umbral (>25% del total, o una lista que pierde más de la mitad) para no bloquear ediciones normales. Avisa por toast y queda en el registro. |
| 4 | Roles solo cosméticos (`display:none`). | `requireAdmin()` en las acciones (`saveUser`, `deleteUser`, `saveMeta`, `deleteMeta`, `saveEscaladoStrategy`); los intentos quedan registrados. |
| — | **Hallazgo nuevo durante #4: contraseñas en texto plano** en `state.users`, dentro de la fila `app_state` que lee todo el equipo. No autenticaban nada (el login real es `sb.auth.signInWithPassword`). | Campo eliminado del formulario; `_stripPasswords()` las borra al cargar y al guardar, así que **se limpian solas** de la nube en el primer guardado. La migración de `team` ya no siembra `pw:'cambiar123'`. |

### ✅ #1 — Lost update en edición concurrente (commit `merge por campo`)

Era el problema central de la herramienta: `_mergeArraysById` reemplazaba el **objeto entero por id**,
así que si dos personas editaban campos distintos del mismo creativo dentro de la ventana de sync, el
objeto ganador pisaba al otro y un cambio desaparecía sin aviso.

**Cómo se resolvió — merge a 3 bandas.** Para decidir bien no basta con saber quién guardó último: hay
que saber **quién cambió qué**, y eso exige un punto de comparación. Se guarda una huella (hash por
campo) del último estado que este navegador tuvo en común con la nube:

- solo yo cambié el campo → gana lo mío
- solo el otro lo cambió → gana lo suyo
- los dos lo cambiaron → conflicto real: se aplica `cloudWins` **y se avisa** (toast + registro)

La huella vive en `localStorage` (`an_sync_base_v1`), **no** en `app_state`: es por dispositivo y en la
fila compartida solo engordaría el payload. Se refresca tras cada guardado y cada sincronización
exitosos — eso es lo que evita que un cambio viejo siga contando como "mío" y gane para siempre.

Funciones: `_hash`, `_huellaLista`, `_guardarBase`, `_leerBase`, `_mergeItem`, `_reportarConflictos`.
Sin huella previa (primer arranque tras el deploy) cae al comportamiento anterior y se autocorrige en
el primer guardado.

**Limitación conocida:** los objetos anidados (`metrics`, `fallos`) se tratan como **un solo campo**. Si
dos personas sincronizan métricas del mismo creativo a la vez, gana una y se avisa. Es aceptable porque
ambas vienen de Meta; si algún día molesta, hay que bajar un nivel más en `_mergeItem`.

### ✅ #6 — Techo de `metaBreakdown` (cerrado)

Se añadió un **tercer escalón** al recorte de `saveToCloud`: por encima de 1.2 MB suelta
`metaBreakdown` (el desglose de conjuntos/anuncios), que es el único bloque grande que quedaba y es
**re-obtenible** — vuelve a bajarse al sincronizar esa campaña. El caso extremo que antes se quedaba
en 1463 KB ahora cierra en 280 KB **sin perder un solo creativo**.

Solo se activa cuando el guardado ya está en riesgo. Verificado en 6 tamaños:

| Creativos | Payload | Desglose |
|---|---|---|
| 100 | 181 KB | conservado |
| 250 | 451 KB | conservado |
| 400 | 722 KB | conservado |
| 700 | 170 KB | soltado |
| 1000 | 242 KB | soltado |
| 2000 | 486 KB | soltado |

**Y ya no hace falta esperar el número de nadie:** el peso del último guardado se muestra en
**Config → 🩺 Diagnóstico**, con color y diagnóstico en texto (sano / se omiten snapshots / se recorta
el desglose). Eso cierra el bloqueo que arrastraba §7.

### ✅ #10 — Mantenibilidad (decidido, no refactorizado)

**El refactor grande no se hizo, a propósito.** Partir el archivo o sustituir los 327 handlers inline
es mucho riesgo sobre código que funciona, y sin poder entrar a la app no hay forma de verificar que no
se rompió nada. La ganancia sería estética; el riesgo, real.

Lo que sí se hizo es atacar el costo verdadero, que era **no poder orientarse** en 8400 líneas:
`scripts/mapa.js` genera `MAPA.md` con los paneles, las 58 secciones, el índice de funciones por
sección y un alfabético. Al ser generado no se queda obsoleto en silencio:

```bash
node scripts/mapa.js
```

Los helpers críticos ya quedaron agrupados en bloques comentados al inicio del `<script>`
(REGISTRO DE ERRORES, SEGURIDAD, MERGE POR CAMPO), que era la otra mitad de la propuesta.

Si algún día se aborda el refactor, `MAPA.md` lista las funciones más largas: `showCreativoAnalysis`
(~534 líneas), `renderKanban` (~357), `renderHome` (~269) son las candidatas naturales.

### 🔐 RLS en Supabase — SQL listo, PENDIENTE DE APLICAR (requiere tu dashboard)

Está todo escrito en **`supabase/rls.sql`**, en 5 pasos, cada uno con su nivel de riesgo, su
verificación y su rollback. **No se pudo probar contra el proyecto real** (no hay acceso al dashboard
desde la sesión, y leer `app_state` con la anon key devuelve `[]` por RLS — ver §4). Ejecutar paso a
paso, verificando entre uno y otro.

- **Paso 0** — diagnóstico de solo lectura: RLS activo, políticas existentes, UUID de `auth.users`.
- **Paso 1** (riesgo bajo) — RLS en `app_state`: solo autenticados leen/escriben, sin política de DELETE.
- **Paso 2** (riesgo bajo) — tabla `app_admins`: la fuente de verdad de quién es admin, **fuera** del
  JSON que todos pueden escribir. Sin políticas de escritura: solo se toca desde el SQL Editor.
- **Paso 3** (riesgo MEDIO) — trigger que impide la auto-promoción. El detalle que lo hace viable: la
  app reescribe `users` en cada guardado, así que comparar el array completo bloquearía a todo el
  equipo. Se compara **solo el mapa {email: rol}** — cambiar un nombre o limpiar contraseñas no lo
  altera; cambiar un rol o añadir un usuario sí. Lleva documentado un falso positivo conocido
  relacionado con `_mergeDefaultUsers()`.
- **Paso 4** (riesgo bajo) — políticas de Storage para el bucket de archivos.

Lo que **no** arregla: cualquier autenticado seguirá pudiendo escribir el resto del estado compartido
(creativos, metas, recursos). Eso es inherente al diseño de "una fila para todo" y solo se resuelve
partiendo el estado en tablas por entidad con su propia RLS — un rediseño grande, no una política.

### ⚠️ Lo único que queda

1. **Aplicar `supabase/rls.sql`** (arriba). Es acción tuya en el dashboard y es la última frontera de
   seguridad real: hasta que esté, `requireAdmin()` solo evita clics accidentales.
2. **Confirmar el peso real del payload** entrando a la app y mirando Config → 🩺 Diagnóstico. Con el
   escalón 3 ya no hay riesgo de que el guardado falle por peso, pero el número dice si el estado está
   creciendo más de lo esperado.
3. **Refactor de `index.html`** — decidido que no compensa hoy (ver #10). Si el archivo sigue creciendo
   o entra gente nueva al proyecto, reconsiderarlo empezando por `showCreativoAnalysis`.

### Notas de la sesión

- **El umbral de `_perdidaAnormal` se calibró en dos pasos.** La primera versión pesaba cada elemento
  ×10, y con elementos de pocos campos ese peso fijo diluía la señal de contenido: un vaciado total no
  llegaba al umbral. Ahora el elemento suma 1 y manda el contenido — la desaparición de elementos ya la
  cubre la regla por lista. Verificado en ambas direcciones (detecta 4 tipos de pérdida real, no bloquea
  4 tipos de edición normal).
- **`grep` dejó de responder sobre `index.html`** a mitad de sesión: devolvía vacío con código 1 pese a
  que el contenido estaba intacto (`iconv` confirmó UTF-8 válido y `node` leyó todo sin problema). Si
  vuelve a pasar, buscar con node en vez de perder tiempo diagnosticando:

  ```bash
  node -e "const L=require('fs').readFileSync('index.html','utf8').split(String.fromCharCode(10)); L.forEach((l,i)=>{ if(/PATRON/.test(l)) console.log((i+1)+': '+l.trim()) })"
  ```

- **Deuda menor detectada, no tocada:** en `persistState`, el bloque de `_pendingCloudData` tiene la
  condición al revés respecto a su comentario y nunca llega a aplicarse en ningún sitio. Hoy es
  inofensivo (`saveToCloud` re-consulta la nube y mergea antes de escribir), pero es código muerto que
  confunde al leer el flujo de sincronización.

### Cómo verificar los cambios

**Antes de commitear cualquier cambio en `index.html`, ejecuta:**

```bash
node scripts/test.js
```

95 pruebas sobre el código real de `index.html` (extraído **por nombre de función**, no por número de
línea, para que no se rompan al editar el archivo). Cubren: escape de HTML y validación de URLs, los 3
escalones del recorte de payload, el merge por campo con sus escenarios de edición concurrente, el
umbral de pérdida de datos, las contraseñas fuera del estado, y que el bundle compile con SRI en los 3
CDN. Salen en rojo si algo se rompe y el proceso termina con código 1.

**La suite está verificada contra regresiones reales:** se rompieron 8 cosas a propósito en
`index.html` (dejar pasar `javascript:`, quitar el escape de comillas, borrar el escalón 3, volver al
merge por objeto entero, desactivar la detección de pérdida, quitar un SRI, volver a `supabase-js@2`
flotante, y devolver las contraseñas al estado) y **las 8 fueron detectadas**.

**Además, las pruebas de inyección sobre el DOM** — las que en su día encontraron 5 puntos de XSS que
ningún `grep` detectó (los `<option>` de los filtros, un `${c.product||''}` y un `' · '+c.format`
concatenado dentro de un ternario):

1. Abre `index.html` en el navegador (o https://americannatural.vercel.app/ — no hace falta sesión).
2. Abre la consola y pega el contenido de `scripts/test-dom.js`.
3. 25 pruebas. No guarda nada en la nube; recarga y la app queda como estaba.

Buscar patrones en el código **no basta** para este archivo: hay que renderizar de verdad y mirar el
DOM resultante.

**Preview local:** no usar `python3 -m http.server` (ver §4). Se abre el archivo con `file://` o se
verifica contra el deploy real.
