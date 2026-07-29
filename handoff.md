# Handoff — American Natural (plataforma operativa de trafficking)

_Última actualización: 2026-07-29 (sesión de verificación del fix de guardado)._

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
- `index.html` — **único archivo de app versionado en git**. Es lo que sirve Vercel.
- `Calculadora_American_Natural.html` — fuente de trabajo, **NO está en git** (untracked). Hoy es byte-idéntico a `index.html` (mismo MD5). Ojo: si el disco externo falla, solo sobrevive `index.html`.
- Tracked en el repo: únicamente `index.html` y `handoff.md`. Todo lo demás (PDFs, xlsm, `SEMANA MEJOR/`, `.claude/`) está untracked.
- `/Users/faboair/supabase/functions/meta-sync/index.ts`: (sesiones previas) trae `effective_status` de campaña/adset/anuncio y desglose. Ya desplegado.

Funciones clave del fix de guardado (líneas de `index.html`):
- `_stripBlobs` (2530) — elimina strings `data:` (base64) de forma recursiva.
- `_autoSnapshot` (2541) — snapshot sin `versions`/`metaSyncHistory`/`metaBreakdown`; cap 3 manuales + 2 autos.
- `_leanState(src, aggressive)` (2565) — copia liviana; en modo agresivo suelta snapshots auto e historiales. No muta el original (verificado).
- `persistState` (2577) — escritura a localStorage con reintento liviano si se llena.
- `saveToCloud` — recorte del payload en 2 escalones (2101: >500KB → 2 manuales + 1 auto; 2109: >900KB → soltar todos los snapshots) + cap de `metaSyncHistory` a 5 en el payload de nube (2094).
- Cap de `metaSyncHistory` a 8 en los 3 puntos de sync (2010, 5733, 5849).
- `_MERGE_LIST_KEYS` (2034) — `versions` NO está en la lista, así que los snapshots de la nube no se re-mergean al estado local.

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
5. Flujo de trabajo del repo: editar `Calculadora_American_Natural.html`, validar sintaxis con JavaScriptCore, `cp` a `index.html`, luego `git add index.html && git commit && git push origin main` (limpiar `._*` de `.git` si reaparece el error non-monotonic).

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
