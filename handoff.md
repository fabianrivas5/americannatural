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
5. Flujo de trabajo del repo (actualizado): editar `index.html`, validar sintaxis (`node --check` sobre el `<script>` extraído), `cp index.html Calculadora_American_Natural.html`, y commitear **los dos**. El `.gitignore` ya evita el error non-monotonic; si reaparece, `find .git -name '._*' -delete`.

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

### ⚠️ Pendiente — lo importante que queda

1. **#1 Lost update en edición concurrente (el más grande).** `_mergeArraysById` (`index.html`) reemplaza el **objeto entero por id**, no campo por campo, y `creativos` está en `_CLOUD_WINS_KEYS`. Si dos personas editan campos distintos del mismo creativo dentro de la ventana de 20s, un cambio desaparece sin aviso. Arreglo: merge por campo con timestamp por campo, o al menos detectar el choque y avisar. Es el problema central de una herramienta multiusuario.
2. **RLS en Supabase (acción del usuario, no del código).** Mientras cualquier usuario autenticado pueda escribir la fila `app_state`, `requireAdmin()` es solo defensa en profundidad: se puede saltar desde la consola y un editor puede reescribir su propio rol. La seguridad real son las políticas RLS. Hay que definir en Supabase quién puede escribir `app_state`, idealmente moviendo roles a su propia tabla.
3. **#6 Techo de `metaBreakdown`** — ver §6 y §7, sin cambios: sigue esperando el número real de `payload: NNNkB`.
4. **#10 Mantenibilidad**: ~8100 líneas y 202 handlers inline en un archivo. No es un bug, pero multiplica el costo de todo lo demás.

### Cómo verificar sin poder entrar a la app

Sin credenciales no se puede probar el flujo real, pero sí todo lo demás — y esto resultó **imprescindible**:
la prueba de inyección en el DOM encontró 5 sinks de XSS que ningún `grep` detectó (los `<option>` de los
filtros, `${c.product||''}`, y un `' · '+c.format` concatenado dentro de un ternario).

- Abrir `file:///Volumes/SSK%20Drive/Estrategia%20de%20Trafficker/index.html` en el navegador y ejecutar
  las funciones de render con datos maliciosos, comprobando `img[src="q"]`, `a[href^="javascript:"]` y un
  contador global de XSS. **No** usar `python3 -m http.server` (ver §4).
- Validar sintaxis extrayendo el `<script>` y pasándole `node --check`.
- Scripts de prueba en el scratchpad de la sesión: `test_seguridad.js` (33 casos) y `test_trim.js`
  (regresión del fix de payload; extrae las funciones **por nombre**, no por número de línea).
