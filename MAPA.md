# Mapa de `index.html`

> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:
> ```bash
> node scripts/mapa.js
> ```

Estado: **8384 líneas**, **282 funciones**, **58 secciones**, 108 usos de `innerHTML`, 327 handlers inline.

Los números de línea cambian con cada edición: sirven para orientarse, pero **busca por nombre**.

## Paneles de la interfaz

| Panel | Línea |
|---|---|
| `#panel-home` | 501 |
| `#panel-calc` | 652 |
| `#panel-semanal` | 761 |
| `#panel-creativos` | 859 |
| `#panel-costcap` | 994 |
| `#panel-recursos` | 1106 |
| `#panel-config` | 1300 |

## Secciones

| Línea | Sección | Funciones |
|---|---|---|
| 1880 | SUPABASE | 0 |
| 1885 | REGISTRO DE ERRORES | 3 |
| 1933 | SEGURIDAD: escape de HTML y validación de URLs | 10 |
| 2226 | MERGE POR CAMPO (3 bandas) | 11 |
| 2459 | ROLE PERMISSIONS | 4 |
| 2515 | SINCRONIZACIÓN MULTIUSUARIO EN TIEMPO REAL | 4 |
| 2584 | LOGIN FORM HELPERS | 2 |
| 2602 | SUPABASE AUTH ACTIONS | 5 |
| 2703 | AUTH STATE LISTENER | 3 |
| 2752 | STATE | 13 |
| 2989 | NAV | 1 |
| 3014 | STORAGE UPLOAD | 1 |
| 3028 | LOGO | 7 |
| 3092 | GASTOS FIJOS | 5 |
| 3119 | PRODUCTS | 15 |
| 3349 | Phase 4: country distribution & simulator | 7 |
| 3498 | end Phase 4 | 1 |
| 3514 | FILTERS | 6 |
| 3590 | DASHBOARD | 0 |
| 3591 | HOME / INICIO EJECUTIVO | 20 |
| 4057 | WEEKLY HISTORY | 5 |
| 4150 | EXCEL UPLOAD (Phase 5) | 11 |
| 4411 | COMPARADOR | 2 |
| 4504 | KANBAN | 16 |
| 4996 | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO | 9 |
| 5318 | CREATIVO MODAL | 0 |
| 5325 | Angle management | 3 |
| 5368 | Punto de dolor | 3 |
| 5401 | Multi-file upload | 5 |
| 5466 | Referencias del creador (inspiración, no creativo final) | 7 |
| 5591 | STAGE LOGIC | 13 |
| 6321 | 🔴 ROJO — parar urgente | 0 |
| 6347 | 🟢 VERDE — va bien | 0 |
| 6361 | 🟡 AMARILLO — observar | 2 |
| 6395 | Fuentes de datos | 0 |
| 6419 | Helpers visuales | 0 |
| 6432 | 1. EVALUACIÓN DE RENTABILIDAD | 0 |
| 6480 | 2. EVALUACIÓN DE TRÁFICO | 0 |
| 6532 | 3. DIAGNÓSTICO CREATIVO | 0 |
| 6544 | 4. MÉTRICAS FALTANTES | 0 |
| 6553 | 5. RESUMEN EJECUTIVO y ACCIÓN | 0 |
| 6692 | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS | 13 |
| 7122 | RECURSOS OPERATIVOS | 7 |
| 7292 | Pixel CRUD | 3 |
| 7321 | Landing CRUD | 1 |
| 7343 | Copies por landing (máx 5) | 10 |
| 7455 | Recurso CRUD | 3 |
| 7482 | Enfoques creativos | 4 |
| 7525 | Equipo | 5 |
| 7592 | Puntos de dolor | 3 |
| 7620 | Pixel/Landing en formulario de creativo | 3 |
| 7641 | COST CAP | 12 |
| 7958 | CONFIG | 1 |
| 7987 | DIAGNÓSTICO | 2 |
| 8041 | AD ACCOUNTS | 10 |
| 8175 | SAVE PROJECT | 4 |
| 8209 | INIT | 2 |
| 8280 | USER MANAGEMENT | 5 |

## Funciones más largas

Candidatas naturales si algún día se parte el archivo. Hoy no se tocan: funcionan y el riesgo de romperlas supera la ganancia.

| Líneas | Función | Sección |
|---|---|---|
| 308 | `showCreativoAnalysis()` | 🟡 AMARILLO — observar |
| 143 | `renderHome()` | HOME / INICIO EJECUTIVO |
| 139 | `renderKanban()` | KANBAN |
| 136 | `saveCreativo()` | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS |
| 116 | `syncMetaMetrics()` | STAGE LOGIC |
| 112 | `startAutoSync()` | SEGURIDAD: escape de HTML y validación de URLs |
| 104 | `renderCreativosTable()` | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO |
| 101 | `openCreativoModal()` | STAGE LOGIC |
| 93 | `saveToCloud()` | MERGE POR CAMPO (3 bandas) |
| 91 | `openDetailModal()` | STAGE LOGIC |
| 90 | `compareWeeks()` | COMPARADOR |
| 88 | `showCampaignDrilldown()` | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS |
| 87 | `syncAllMetrics()` | STAGE LOGIC |
| 84 | `renderGroupedView()` | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO |
| 82 | `renderCostCapSummary()` | COST CAP |

## Índice de funciones por sección

### REGISTRO DE ERRORES

- `logError(origen, err, extra)` — línea 1892, 26 líneas
- `getErrorLog()` — línea 1918, 3 líneas
- `clearErrorLog()` — línea 1921, 19 líneas

### SEGURIDAD: escape de HTML y validación de URLs

- `esc(v)` — línea 1940, 12 líneas
- `escJs(v)` — línea 1952, 12 líneas
- `safeUrl(v)` — línea 1964, 12 líneas
- `safeSrc(v)` — línea 1976, 9 líneas
- `_mergeDefaultUsers(usersList)` — línea 1985, 26 líneas
- `_itemScore(it)` — línea 2011, 14 líneas
- `_dataScore(s)` — línea 2025, 20 líneas
- `_perdidaAnormal(cloud, local)` — línea 2045, 13 líneas
- `async syncFromCloud(force = false, pushOnNewer = false)` — línea 2058, 72 líneas
- `startAutoSync()` — línea 2130, 112 líneas

### MERGE POR CAMPO (3 bandas)

- `_hash(v)` — línea 2242, 8 líneas
- `_huellaLista(arr)` — línea 2250, 14 líneas
- `_guardarBase(s)` — línea 2264, 7 líneas
- `_leerBase()` — línea 2271, 7 líneas
- `_mergeItem(local, cloud, base, cloudWins, etiqueta)` — línea 2278, 27 líneas
- `_mergeArraysById(localArr, cloudArr, cloudWins = false, b…)` — línea 2305, 32 líneas
- `_reportarConflictos(origen)` — línea 2337, 9 líneas
- `markDeleted(id)` — línea 2346, 12 líneas
- `async saveToCloud()` — línea 2358, 93 líneas
- `_markPendingUpload(on)` — línea 2451, 4 líneas
- `_hasPendingUpload()` — línea 2455, 19 líneas

### ROLE PERMISSIONS

- `requireAdmin(accion)` — línea 2474, 11 líneas
- `_stripPasswords(usersList)` — línea 2485, 11 líneas
- `_getUserProfile(email)` — línea 2496, 6 líneas
- `_enterApp(profile)` — línea 2502, 18 líneas

### SINCRONIZACIÓN MULTIUSUARIO EN TIEMPO REAL

- `_setSyncStatus(txt, color)` — línea 2520, 8 líneas
- `_safePullFromCloud(reason)` — línea 2528, 14 líneas
- `startRealtimeSync()` — línea 2542, 34 líneas
- `_showLoginScreen()` — línea 2576, 9 líneas

### LOGIN FORM HELPERS

- `showLoginForm(e)` — línea 2585, 7 líneas
- `showForgotPassword(e)` — línea 2592, 11 líneas

### SUPABASE AUTH ACTIONS

- `async doLogin()` — línea 2603, 24 líneas
- `async doLogout()` — línea 2627, 8 líneas
- `async applySession()` — línea 2635, 26 líneas
- `async doForgotPassword()` — línea 2661, 17 líneas
- `async doUpdatePassword()` — línea 2678, 42 líneas

### AUTH STATE LISTENER

- `updateUserBadge()` — línea 2720, 14 líneas
- `applyRoleTabs()` — línea 2734, 9 líneas
- `canAccess(tab)` — línea 2743, 10 líneas

### STATE

- `defaultState()` — línea 2753, 53 líneas
- `defaultProducts()` — línea 2806, 15 líneas
- `defaultHistory()` — línea 2821, 13 líneas
- `defaultSemaforo()` — línea 2834, 15 líneas
- `loadState()` — línea 2849, 36 líneas
- `showToast(msg, type='success')` — línea 2885, 9 líneas
- `_stripBlobs(obj)` — línea 2894, 11 líneas
- `_autoSnapshot()` — línea 2905, 25 líneas
- `_leanState(src, aggressive)` — línea 2930, 13 líneas
- `_persistLocal()` — línea 2943, 10 líneas
- `async persistState()` — línea 2953, 27 líneas
- `calcDirty()` — línea 2980, 5 líneas
- `uid()` — línea 2985, 5 líneas

### NAV

- `showTab(name)` — línea 2990, 26 líneas

### STORAGE UPLOAD

- `async _uploadToStorage(file, folder)` — línea 3016, 13 líneas

### LOGO

- `async uploadLogo(input)` — línea 3029, 9 líneas
- `applyLogo()` — línea 3038, 9 líneas
- `updateCompanyName(v)` — línea 3047, 7 líneas
- `async uploadLoginLogo(input)` — línea 3054, 10 líneas
- `removeLoginLogo()` — línea 3064, 6 líneas
- `applyLoginLogo()` — línea 3070, 13 líneas
- `applyLoginScreenState()` — línea 3083, 10 líneas

### GASTOS FIJOS

- `renderGastos()` — línea 3093, 11 líneas
- `addGasto()` — línea 3104, 5 líneas
- `removeGasto(id)` — línea 3109, 4 líneas
- `updateGasto(id, val)` — línea 3113, 4 líneas
- `totalGastosFijos()` — línea 3117, 3 líneas

### PRODUCTS

- `loadDefaultProducts()` — línea 3120, 1 líneas
- `clearProducts()` — línea 3121, 1 líneas
- `addProduct()` — línea 3122, 4 líneas
- `removeProduct(id)` — línea 3126, 1 líneas
- `updateProduct(id, field, val)` — línea 3127, 7 líneas
- `_updateSelBar()` — línea 3134, 16 líneas
- `toggleProductSelect(id, checked)` — línea 3150, 5 líneas
- `toggleAllProducts(checked)` — línea 3155, 10 líneas
- `clearProductSelection()` — línea 3165, 11 líneas
- `deleteSelectedProducts()` — línea 3176, 13 líneas
- `_initProductDrag(tbody)` — línea 3189, 24 líneas
- `renderProducts()` — línea 3213, 38 líneas
- `async uploadProductImg(id, input)` — línea 3251, 9 líneas
- `duplicateProduct(id)` — línea 3260, 11 líneas
- `recalc()` — línea 3271, 80 líneas

### Phase 4: country distribution & simulator

- `getEcuadorShare()` — línea 3351, 11 líneas
- `renderCountryDist(gfTotal, pedidos)` — línea 3362, 50 líneas
- `updateCountry(id, field, val)` — línea 3412, 5 líneas
- `updateDistMethod(val)` — línea 3417, 5 líneas
- `updateManualPct(id, val)` — línea 3422, 4 líneas
- `populateSimProduct()` — línea 3426, 7 líneas
- `runSimulator()` — línea 3433, 67 líneas

### end Phase 4

- `updateDashCascade(price,mv,md,me,mop,cpao)` — línea 3500, 17 líneas

### FILTERS

- `getFilteredHistory()` — línea 3517, 13 líneas
- `isFilterActive()` — línea 3530, 4 líneas
- `applyFilters()` — línea 3534, 11 líneas
- `resetFilters()` — línea 3545, 8 líneas
- `setPreset(p)` — línea 3553, 21 líneas
- `updateFilterSelects()` — línea 3574, 30 líneas

### HOME / INICIO EJECUTIVO

- `_metaPeriodStart(periodo)` — línea 3604, 7 líneas
- `_stageAtInPeriod(c, stage, start)` — línea 3611, 6 líneas
- `_metaProgress(meta)` — línea 3617, 36 líneas
- `_homeRange()` — línea 3653, 12 líneas
- `_inHomeRange(iso, r)` — línea 3665, 7 líneas
- `onHomeDateChange()` — línea 3672, 9 líneas
- `_escaladoDefaults()` — línea 3681, 4 líneas
- `getEscaladoStrategy()` — línea 3685, 1 líneas
- `getEscaladoCandidates()` — línea 3686, 27 líneas
- `renderHome()` — línea 3713, 143 líneas
- `openMetaForm()` — línea 3856, 22 líneas
- `saveMeta()` — línea 3878, 18 líneas
- `deleteMeta(id)` — línea 3896, 7 líneas
- `renderConfigMetas()` — línea 3903, 16 líneas
- `renderEscaladoStrategyForm()` — línea 3919, 34 líneas
- `saveEscaladoStrategy()` — línea 3953, 16 líneas
- `renderDashboard()` — línea 3969, 33 líneas
- `renderRevenueChart(hist)` — línea 4002, 17 líneas
- `renderPedidosChart(hist)` — línea 4019, 19 líneas
- `renderSemaforo()` — línea 4038, 20 líneas

### WEEKLY HISTORY

- `saveSemana()` — línea 4058, 27 líneas
- `renderHistory()` — línea 4085, 26 líneas
- `deleteSemana(id)` — línea 4111, 5 líneas
- `clearHistory()` — línea 4116, 5 líneas
- `renderHistoryCharts()` — línea 4121, 52 líneas

### EXCEL UPLOAD (Phase 5)

- `handleXlFile(input)` — línea 4173, 4 líneas
- `handleXlDrop(e)` — línea 4177, 9 líneas
- `processXlFile(file)` — línea 4186, 21 líneas
- `loadSheetByIdx(i)` — línea 4207, 7 líneas
- `xlMatchField(cellStr)` — línea 4214, 8 líneas
- `analyzeSheet(sheetName, data)` — línea 4222, 18 líneas
- `renderKVMapper(sheetName, data)` — línea 4240, 19 líneas
- `renderTabularMapper(sheetName, data, headerRowIdx, dataRows)` — línea 4259, 46 líneas
- `applyTabularMap()` — línea 4305, 29 líneas
- `renderConfirmForm(sheetName, det)` — línea 4334, 46 líneas
- `saveFromXl()` — línea 4380, 32 líneas

### COMPARADOR

- `populateCompareSelects()` — línea 4412, 16 líneas
- `compareWeeks()` — línea 4428, 90 líneas

### KANBAN

- `setDatePreset(preset)` — línea 4518, 9 líneas
- `getDateRange()` — línea 4527, 18 líneas
- `getFilteredCreativos(opts)` — línea 4545, 41 líneas
- `populateCreativoFilterProduct()` — línea 4586, 21 líneas
- `renderKanban()` — línea 4607, 139 líneas
- `dragCard(e, id)` — línea 4746, 1 líneas
- `validateStageTransition(c, toStatus)` — línea 4747, 79 líneas
- `dropCard(e, colId)` — línea 4826, 16 líneas
- `showValidationBanner(missing, colLabel)` — línea 4842, 29 líneas
- `moveCard(id, toStatus)` — línea 4871, 46 líneas
- `_metaStatusInfo(raw)` — línea 4917, 13 líneas
- `_fmtDateTime(iso)` — línea 4930, 6 líneas
- `_daysSince(iso)` — línea 4936, 12 líneas
- `openCampaignCreativoModal()` — línea 4948, 26 líneas
- `onTestTypeChange()` — línea 4974, 12 líneas
- `_stampStageChange(c, toStatus)` — línea 4986, 11 líneas

### VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO

- `renderGroupedView()` — línea 4997, 84 líneas
- `_groupRecommendation(g, t, nivel)` — línea 5081, 16 líneas
- `setColSort(key)` — línea 5097, 14 líneas
- `_crFilterMatch(c)` — línea 5111, 8 líneas
- `renderCreativosTable()` — línea 5119, 104 líneas
- `renderCreativosSummary()` — línea 5223, 32 líneas
- `renderRankings()` — línea 5255, 60 líneas
- `getStatusCls(s)` — línea 5315, 1 líneas
- `getStatusLabel(s)` — línea 5316, 10 líneas

### Angle management

- `populateAngleSel(current)` — línea 5326, 19 líneas
- `onAngleSel(sel)` — línea 5345, 10 líneas
- `addAngleFromModal()` — línea 5355, 14 líneas

### Punto de dolor

- `populatePainSel(current)` — línea 5369, 13 líneas
- `onPainSel(sel)` — línea 5382, 6 líneas
- `addPainFromModal()` — línea 5388, 14 líneas

### Multi-file upload

- `loadCreativoFiles(input)` — línea 5402, 24 líneas
- `removeCreativoFile(idx)` — línea 5426, 7 líneas
- `renderFilesGrid()` — línea 5433, 22 líneas
- `loadCreativoFile(input)` — línea 5455, 4 líneas
- `clearCreativoThumb()` — línea 5459, 8 líneas

### Referencias del creador (inspiración, no creativo final)

- `addRefLink()` — línea 5467, 10 líneas
- `loadCreativoRefs(input)` — línea 5477, 18 líneas
- `removeCreativoRef(idx)` — línea 5495, 5 líneas
- `detectPlatform(url)` — línea 5500, 10 líneas
- `renderRefsGrid()` — línea 5510, 26 líneas
- `showThumbPreview(src, type, name)` — línea 5536, 14 líneas
- `previewCreativoLink()` — línea 5550, 63 líneas

### STAGE LOGIC

- `onStageChange()` — línea 5613, 59 líneas
- `renderModalFlowActions()` — línea 5672, 36 líneas
- `moveThenClose(toStatus)` — línea 5708, 69 líneas
- `openDetailModal(id)` — línea 5777, 91 líneas
- `openCreativoModal(id)` — línea 5868, 101 líneas
- `autoCalcRevenue()` — línea 5969, 15 líneas
- `getProductCpaTargets(productName)` — línea 5984, 16 líneas
- `getBaseName(productName)` — línea 6000, 4 líneas
- `getTrafficCpaTargets(productName)` — línea 6004, 41 líneas
- `async syncAllMetrics()` — línea 6045, 87 líneas
- `async syncMetaMetrics()` — línea 6132, 116 líneas
- `calcCreativoProfit()` — línea 6248, 50 líneas
- `crSemaforo(m, targets)` — línea 6298, 81 líneas

### 🟡 AMARILLO — observar

- `crDecision(m, targets)` — línea 6379, 7 líneas
- `showCreativoAnalysis(id)` — línea 6386, 308 líneas

### VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS

- `_rowToMetrics(r)` — línea 6694, 9 líneas
- `_rowStats(r)` — línea 6703, 7 líneas
- `_miniMetricsRow(g)` — línea 6710, 7 líneas
- `async syncCampaignFromDrill(id, btnEl)` — línea 6717, 61 líneas
- `showCampaignDrilldown(id)` — línea 6778, 88 líneas
- `showSemaforoTooltip(e)` — línea 6866, 41 líneas
- `semDot(m, size=14)` — línea 6907, 6 líneas
- `validateIdeaSave()` — línea 6913, 34 líneas
- `saveCreativo()` — línea 6947, 136 líneas
- `duplicateCreativo(id)` — línea 7083, 18 líneas
- `_stripForClone(c)` — línea 7101, 10 líneas
- `deleteCreativo(id)` — línea 7111, 5 líneas
- `closeModal(id)` — línea 7116, 12 líneas

### RECURSOS OPERATIVOS

- `switchRecTab(tab)` — línea 7128, 9 líneas
- `renderRecursos()` — línea 7137, 10 líneas
- `_renderRecPixelsOnly()` — línea 7147, 24 líneas
- `_recFilters()` — línea 7171, 9 líneas
- `_renderRecAccountsPixels()` — línea 7180, 32 líneas
- `_renderRecLandings()` — línea 7212, 48 líneas
- `_renderRecRecursos()` — línea 7260, 33 líneas

### Pixel CRUD

- `openPixelModal(id, preAccountId)` — línea 7293, 17 líneas
- `savePixel()` — línea 7310, 9 líneas
- `deletePixel(id)` — línea 7319, 3 líneas

### Landing CRUD

- `openLandingModal(id)` — línea 7322, 22 líneas

### Copies por landing (máx 5)

- `_renderLdCopies(copies)` — línea 7344, 18 líneas
- `_collectLdCopies()` — línea 7362, 9 líneas
- `addLdCopy()` — línea 7371, 6 líneas
- `removeLdCopy(i)` — línea 7377, 9 líneas
- `copyToClipboard(txt)` — línea 7386, 5 líneas
- `renderLandingSuggest()` — línea 7391, 36 líneas
- `copyLandingCopy(landingId, idx)` — línea 7427, 5 líneas
- `copyLandingSeg(landingId)` — línea 7432, 5 líneas
- `saveLanding()` — línea 7437, 16 líneas
- `deleteLanding(id)` — línea 7453, 3 líneas

### Recurso CRUD

- `openRecursoModal(id)` — línea 7456, 15 líneas
- `saveRecurso()` — línea 7471, 9 líneas
- `deleteRecurso(id)` — línea 7480, 4 líneas

### Enfoques creativos

- `_renderRecEnfoques()` — línea 7484, 16 líneas
- `openEnfoqueModal(id)` — línea 7500, 9 líneas
- `saveEnfoque(e)` — línea 7509, 10 líneas
- `deleteEnfoque(id)` — línea 7519, 12 líneas

### Equipo

- `_renderRecEquipo()` — línea 7531, 16 líneas
- `openTeamModal(id)` — línea 7547, 15 líneas
- `deleteTeamMember(id)` — línea 7562, 6 líneas
- `populateTeamSelects()` — línea 7568, 22 líneas
- `updateProdStatusBadge()` — línea 7590, 3 líneas

### Puntos de dolor

- `_renderRecDolores()` — línea 7593, 10 líneas
- `openDolorModal()` — línea 7603, 11 líneas
- `deleteDolorItem(idx)` — línea 7614, 7 líneas

### Pixel/Landing en formulario de creativo

- `populateCrPixels(adAccountId)` — línea 7621, 8 líneas
- `onCrPixelChange()` — línea 7629, 7 líneas
- `onCrAdAccountChange()` — línea 7636, 6 líneas

### COST CAP

- `calcCostCap()` — línea 7642, 8 líneas
- `addCostCapRow()` — línea 7650, 11 líneas
- `sendToCostCap(creativoId)` — línea 7661, 36 líneas
- `renderLinkedCreativos()` — línea 7697, 26 líneas
- `ccDecision(r, be)` — línea 7723, 16 líneas
- `renderEscaladoSugeridos()` — línea 7739, 21 líneas
- `renderCostCaps()` — línea 7760, 58 líneas
- `renderCostCapSummary(be, avgPrice)` — línea 7818, 82 líneas
- `updateCC(i, field, val)` — línea 7900, 3 líneas
- `deleteCC(i)` — línea 7903, 2 líneas
- `exportCCToCSV()` — línea 7905, 14 líneas
- `renderJBSteps()` — línea 7919, 40 líneas

### CONFIG

- `renderConfig()` — línea 7959, 29 líneas

### DIAGNÓSTICO

- `renderErrorLog()` — línea 7988, 42 líneas
- `copiarErrorLog()` — línea 8030, 14 líneas

### AD ACCOUNTS

- `renderAdAccounts()` — línea 8044, 19 líneas
- `openAdAccountModal(id)` — línea 8063, 12 líneas
- `saveAdAccount()` — línea 8075, 18 líneas
- `deleteAdAccount(id)` — línea 8093, 6 líneas
- `renderVersions()` — línea 8099, 14 líneas
- `saveVersion()` — línea 8113, 8 líneas
- `restoreVersion(id)` — línea 8121, 11 líneas
- `deleteVersion(id)` — línea 8132, 5 líneas
- `renderSemaforoConfig()` — línea 8137, 11 líneas
- `renderGlossary()` — línea 8148, 28 líneas

### SAVE PROJECT

- `saveProject()` — línea 8176, 5 líneas
- `exportJSON()` — línea 8181, 8 líneas
- `importJSON(input)` — línea 8189, 14 líneas
- `resetAll()` — línea 8203, 7 líneas

### INIT

- `init()` — línea 8210, 45 líneas
- `_isDirty()` — línea 8255, 26 líneas

### USER MANAGEMENT

- `renderUsersList()` — línea 8281, 27 líneas
- `openUserModal(id)` — línea 8308, 38 líneas
- `editUser(id)` — línea 8346, 2 líneas
- `saveUser()` — línea 8348, 24 líneas
- `deleteUser(id)` — línea 8372, 12 líneas

## Índice alfabético

`_autoSnapshot` (2905) · `_collectLdCopies` (7362) · `_crFilterMatch` (5111) · `_dataScore` (2025) · `_daysSince` (4936) · `_enterApp` (2502) · `_escaladoDefaults` (3681) · `_fmtDateTime` (4930) · `_getUserProfile` (2496) · `_groupRecommendation` (5081) · `_guardarBase` (2264) · `_hash` (2242) · `_hasPendingUpload` (2455) · `_homeRange` (3653) · `_huellaLista` (2250) · `_inHomeRange` (3665) · `_initProductDrag` (3189) · `_isDirty` (8255) · `_itemScore` (2011) · `_leanState` (2930) · `_leerBase` (2271) · `_markPendingUpload` (2451) · `_mergeArraysById` (2305) · `_mergeDefaultUsers` (1985) · `_mergeItem` (2278) · `_metaPeriodStart` (3604) · `_metaProgress` (3617) · `_metaStatusInfo` (4917) · `_miniMetricsRow` (6710) · `_perdidaAnormal` (2045) · `_persistLocal` (2943) · `_recFilters` (7171) · `_renderLdCopies` (7344) · `_renderRecAccountsPixels` (7180) · `_renderRecDolores` (7593) · `_renderRecEnfoques` (7484) · `_renderRecEquipo` (7531) · `_renderRecLandings` (7212) · `_renderRecPixelsOnly` (7147) · `_renderRecRecursos` (7260) · `_reportarConflictos` (2337) · `_rowStats` (6703) · `_rowToMetrics` (6694) · `_safePullFromCloud` (2528) · `_setSyncStatus` (2520) · `_showLoginScreen` (2576) · `_stageAtInPeriod` (3611) · `_stampStageChange` (4986) · `_stripBlobs` (2894) · `_stripForClone` (7101) · `_stripPasswords` (2485) · `_updateSelBar` (3134) · `_uploadToStorage` (3016) · `addAngleFromModal` (5355) · `addCostCapRow` (7650) · `addGasto` (3104) · `addLdCopy` (7371) · `addPainFromModal` (5388) · `addProduct` (3122) · `addRefLink` (5467) · `analyzeSheet` (4222) · `applyFilters` (3534) · `applyLoginLogo` (3070) · `applyLoginScreenState` (3083) · `applyLogo` (3038) · `applyRoleTabs` (2734) · `applySession` (2635) · `applyTabularMap` (4305) · `autoCalcRevenue` (5969) · `calcCostCap` (7642) · `calcCreativoProfit` (6248) · `calcDirty` (2980) · `canAccess` (2743) · `ccDecision` (7723) · `clearCreativoThumb` (5459) · `clearErrorLog` (1921) · `clearHistory` (4116) · `clearProducts` (3121) · `clearProductSelection` (3165) · `closeModal` (7116) · `compareWeeks` (4428) · `copiarErrorLog` (8030) · `copyLandingCopy` (7427) · `copyLandingSeg` (7432) · `copyToClipboard` (7386) · `crDecision` (6379) · `crSemaforo` (6298) · `defaultHistory` (2821) · `defaultProducts` (2806) · `defaultSemaforo` (2834) · `defaultState` (2753) · `deleteAdAccount` (8093) · `deleteCC` (7903) · `deleteCreativo` (7111) · `deleteDolorItem` (7614) · `deleteEnfoque` (7519) · `deleteLanding` (7453) · `deleteMeta` (3896) · `deletePixel` (7319) · `deleteRecurso` (7480) · `deleteSelectedProducts` (3176) · `deleteSemana` (4111) · `deleteTeamMember` (7562) · `deleteUser` (8372) · `deleteVersion` (8132) · `detectPlatform` (5500) · `doForgotPassword` (2661) · `doLogin` (2603) · `doLogout` (2627) · `doUpdatePassword` (2678) · `dragCard` (4746) · `dropCard` (4826) · `duplicateCreativo` (7083) · `duplicateProduct` (3260) · `editUser` (8346) · `esc` (1940) · `escJs` (1952) · `exportCCToCSV` (7905) · `exportJSON` (8181) · `getBaseName` (6000) · `getDateRange` (4527) · `getEcuadorShare` (3351) · `getErrorLog` (1918) · `getEscaladoCandidates` (3686) · `getEscaladoStrategy` (3685) · `getFilteredCreativos` (4545) · `getFilteredHistory` (3517) · `getProductCpaTargets` (5984) · `getStatusCls` (5315) · `getStatusLabel` (5316) · `getTrafficCpaTargets` (6004) · `handleXlDrop` (4177) · `handleXlFile` (4173) · `importJSON` (8189) · `init` (8210) · `isFilterActive` (3530) · `loadCreativoFile` (5455) · `loadCreativoFiles` (5402) · `loadCreativoRefs` (5477) · `loadDefaultProducts` (3120) · `loadSheetByIdx` (4207) · `loadState` (2849) · `logError` (1892) · `markDeleted` (2346) · `moveCard` (4871) · `moveThenClose` (5708) · `onAngleSel` (5345) · `onCrAdAccountChange` (7636) · `onCrPixelChange` (7629) · `onHomeDateChange` (3672) · `onPainSel` (5382) · `onStageChange` (5613) · `onTestTypeChange` (4974) · `openAdAccountModal` (8063) · `openCampaignCreativoModal` (4948) · `openCreativoModal` (5868) · `openDetailModal` (5777) · `openDolorModal` (7603) · `openEnfoqueModal` (7500) · `openLandingModal` (7322) · `openMetaForm` (3856) · `openPixelModal` (7293) · `openRecursoModal` (7456) · `openTeamModal` (7547) · `openUserModal` (8308) · `persistState` (2953) · `populateAngleSel` (5326) · `populateCompareSelects` (4412) · `populateCreativoFilterProduct` (4586) · `populateCrPixels` (7621) · `populatePainSel` (5369) · `populateSimProduct` (3426) · `populateTeamSelects` (7568) · `previewCreativoLink` (5550) · `processXlFile` (4186) · `recalc` (3271) · `removeCreativoFile` (5426) · `removeCreativoRef` (5495) · `removeGasto` (3109) · `removeLdCopy` (7377) · `removeLoginLogo` (3064) · `removeProduct` (3126) · `renderAdAccounts` (8044) · `renderConfig` (7959) · `renderConfigMetas` (3903) · `renderConfirmForm` (4334) · `renderCostCaps` (7760) · `renderCostCapSummary` (7818) · `renderCountryDist` (3362) · `renderCreativosSummary` (5223) · `renderCreativosTable` (5119) · `renderDashboard` (3969) · `renderErrorLog` (7988) · `renderEscaladoStrategyForm` (3919) · `renderEscaladoSugeridos` (7739) · `renderFilesGrid` (5433) · `renderGastos` (3093) · `renderGlossary` (8148) · `renderGroupedView` (4997) · `renderHistory` (4085) · `renderHistoryCharts` (4121) · `renderHome` (3713) · `renderJBSteps` (7919) · `renderKanban` (4607) · `renderKVMapper` (4240) · `renderLandingSuggest` (7391) · `renderLinkedCreativos` (7697) · `renderModalFlowActions` (5672) · `renderPedidosChart` (4019) · `renderProducts` (3213) · `renderRankings` (5255) · `renderRecursos` (7137) · `renderRefsGrid` (5510) · `renderRevenueChart` (4002) · `renderSemaforo` (4038) · `renderSemaforoConfig` (8137) · `renderTabularMapper` (4259) · `renderUsersList` (8281) · `renderVersions` (8099) · `requireAdmin` (2474) · `resetAll` (8203) · `resetFilters` (3545) · `restoreVersion` (8121) · `runSimulator` (3433) · `safeSrc` (1976) · `safeUrl` (1964) · `saveAdAccount` (8075) · `saveCreativo` (6947) · `saveEnfoque` (7509) · `saveEscaladoStrategy` (3953) · `saveFromXl` (4380) · `saveLanding` (7437) · `saveMeta` (3878) · `savePixel` (7310) · `saveProject` (8176) · `saveRecurso` (7471) · `saveSemana` (4058) · `saveToCloud` (2358) · `saveUser` (8348) · `saveVersion` (8113) · `semDot` (6907) · `sendToCostCap` (7661) · `setColSort` (5097) · `setDatePreset` (4518) · `setPreset` (3553) · `showCampaignDrilldown` (6778) · `showCreativoAnalysis` (6386) · `showForgotPassword` (2592) · `showLoginForm` (2585) · `showSemaforoTooltip` (6866) · `showTab` (2990) · `showThumbPreview` (5536) · `showToast` (2885) · `showValidationBanner` (4842) · `startAutoSync` (2130) · `startRealtimeSync` (2542) · `switchRecTab` (7128) · `syncAllMetrics` (6045) · `syncCampaignFromDrill` (6717) · `syncFromCloud` (2058) · `syncMetaMetrics` (6132) · `toggleAllProducts` (3155) · `toggleProductSelect` (3150) · `totalGastosFijos` (3117) · `uid` (2985) · `updateCC` (7900) · `updateCompanyName` (3047) · `updateCountry` (3412) · `updateDashCascade` (3500) · `updateDistMethod` (3417) · `updateFilterSelects` (3574) · `updateGasto` (3113) · `updateManualPct` (3422) · `updateProdStatusBadge` (7590) · `updateProduct` (3127) · `updateUserBadge` (2720) · `uploadLoginLogo` (3054) · `uploadLogo` (3029) · `uploadProductImg` (3251) · `validateIdeaSave` (6913) · `validateStageTransition` (4747) · `xlMatchField` (4214)
