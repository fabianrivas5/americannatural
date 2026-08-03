# Mapa de `index.html`

> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:
> ```bash
> node scripts/mapa.js
> ```

Estado: **8538 líneas**, **284 funciones**, **58 secciones**, 108 usos de `innerHTML`, 327 handlers inline.

Los números de línea cambian con cada edición: sirven para orientarse, pero **busca por nombre**.

## Paneles de la interfaz

| Panel | Línea |
|---|---|
| `#panel-home` | 564 |
| `#panel-calc` | 715 |
| `#panel-semanal` | 824 |
| `#panel-creativos` | 922 |
| `#panel-costcap` | 1057 |
| `#panel-recursos` | 1169 |
| `#panel-config` | 1363 |

## Secciones

| Línea | Sección | Funciones |
|---|---|---|
| 1943 | SUPABASE | 0 |
| 1948 | REGISTRO DE ERRORES | 3 |
| 1996 | SEGURIDAD: escape de HTML y validación de URLs | 10 |
| 2291 | MERGE POR CAMPO (3 bandas) | 11 |
| 2526 | ROLE PERMISSIONS | 4 |
| 2582 | SINCRONIZACIÓN MULTIUSUARIO EN TIEMPO REAL | 4 |
| 2651 | LOGIN FORM HELPERS | 2 |
| 2669 | SUPABASE AUTH ACTIONS | 5 |
| 2770 | AUTH STATE LISTENER | 3 |
| 2819 | STATE | 13 |
| 3066 | NAV | 1 |
| 3091 | STORAGE UPLOAD | 1 |
| 3105 | LOGO | 7 |
| 3169 | GASTOS FIJOS | 5 |
| 3196 | PRODUCTS | 17 |
| 3492 | Phase 4: country distribution & simulator | 7 |
| 3641 | end Phase 4 | 1 |
| 3657 | FILTERS | 6 |
| 3733 | DASHBOARD | 0 |
| 3734 | HOME / INICIO EJECUTIVO | 20 |
| 4200 | WEEKLY HISTORY | 5 |
| 4293 | EXCEL UPLOAD (Phase 5) | 11 |
| 4554 | COMPARADOR | 2 |
| 4647 | KANBAN | 16 |
| 5139 | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO | 9 |
| 5461 | CREATIVO MODAL | 0 |
| 5468 | Angle management | 3 |
| 5511 | Punto de dolor | 3 |
| 5544 | Multi-file upload | 5 |
| 5609 | Referencias del creador (inspiración, no creativo final) | 7 |
| 5734 | STAGE LOGIC | 13 |
| 6475 | 🔴 ROJO — parar urgente | 0 |
| 6501 | 🟢 VERDE — va bien | 0 |
| 6515 | 🟡 AMARILLO — observar | 2 |
| 6549 | Fuentes de datos | 0 |
| 6573 | Helpers visuales | 0 |
| 6586 | 1. EVALUACIÓN DE RENTABILIDAD | 0 |
| 6634 | 2. EVALUACIÓN DE TRÁFICO | 0 |
| 6686 | 3. DIAGNÓSTICO CREATIVO | 0 |
| 6698 | 4. MÉTRICAS FALTANTES | 0 |
| 6707 | 5. RESUMEN EJECUTIVO y ACCIÓN | 0 |
| 6846 | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS | 13 |
| 7276 | RECURSOS OPERATIVOS | 7 |
| 7446 | Pixel CRUD | 3 |
| 7475 | Landing CRUD | 1 |
| 7497 | Copies por landing (máx 5) | 10 |
| 7609 | Recurso CRUD | 3 |
| 7636 | Enfoques creativos | 4 |
| 7679 | Equipo | 5 |
| 7746 | Puntos de dolor | 3 |
| 7774 | Pixel/Landing en formulario de creativo | 3 |
| 7795 | COST CAP | 12 |
| 8112 | CONFIG | 1 |
| 8141 | DIAGNÓSTICO | 2 |
| 8195 | AD ACCOUNTS | 10 |
| 8329 | SAVE PROJECT | 4 |
| 8363 | INIT | 2 |
| 8434 | USER MANAGEMENT | 5 |

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
| 112 | `openCreativoModal()` | STAGE LOGIC |
| 104 | `renderCreativosTable()` | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO |
| 95 | `saveToCloud()` | MERGE POR CAMPO (3 bandas) |
| 91 | `openDetailModal()` | STAGE LOGIC |
| 90 | `compareWeeks()` | COMPARADOR |
| 88 | `showCampaignDrilldown()` | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS |
| 87 | `syncAllMetrics()` | STAGE LOGIC |
| 84 | `renderGroupedView()` | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO |
| 82 | `renderCostCapSummary()` | COST CAP |

## Índice de funciones por sección

### REGISTRO DE ERRORES

- `logError(origen, err, extra)` — línea 1955, 26 líneas
- `getErrorLog()` — línea 1981, 3 líneas
- `clearErrorLog()` — línea 1984, 19 líneas

### SEGURIDAD: escape de HTML y validación de URLs

- `esc(v)` — línea 2003, 12 líneas
- `escJs(v)` — línea 2015, 12 líneas
- `safeUrl(v)` — línea 2027, 12 líneas
- `safeSrc(v)` — línea 2039, 9 líneas
- `_mergeDefaultUsers(usersList)` — línea 2048, 26 líneas
- `_itemScore(it)` — línea 2074, 14 líneas
- `_dataScore(s)` — línea 2088, 20 líneas
- `_perdidaAnormal(cloud, local)` — línea 2108, 13 líneas
- `async syncFromCloud(force = false, pushOnNewer = false)` — línea 2121, 74 líneas
- `startAutoSync()` — línea 2195, 112 líneas

### MERGE POR CAMPO (3 bandas)

- `_hash(v)` — línea 2307, 8 líneas
- `_huellaLista(arr)` — línea 2315, 14 líneas
- `_guardarBase(s)` — línea 2329, 7 líneas
- `_leerBase()` — línea 2336, 7 líneas
- `_mergeItem(local, cloud, base, cloudWins, etiqueta)` — línea 2343, 27 líneas
- `_mergeArraysById(localArr, cloudArr, cloudWins = false, b…)` — línea 2370, 32 líneas
- `_reportarConflictos(origen)` — línea 2402, 9 líneas
- `markDeleted(id)` — línea 2411, 12 líneas
- `async saveToCloud()` — línea 2423, 95 líneas
- `_markPendingUpload(on)` — línea 2518, 4 líneas
- `_hasPendingUpload()` — línea 2522, 19 líneas

### ROLE PERMISSIONS

- `requireAdmin(accion)` — línea 2541, 11 líneas
- `_stripPasswords(usersList)` — línea 2552, 11 líneas
- `_getUserProfile(email)` — línea 2563, 6 líneas
- `_enterApp(profile)` — línea 2569, 18 líneas

### SINCRONIZACIÓN MULTIUSUARIO EN TIEMPO REAL

- `_setSyncStatus(txt, color)` — línea 2587, 8 líneas
- `_safePullFromCloud(reason)` — línea 2595, 14 líneas
- `startRealtimeSync()` — línea 2609, 34 líneas
- `_showLoginScreen()` — línea 2643, 9 líneas

### LOGIN FORM HELPERS

- `showLoginForm(e)` — línea 2652, 7 líneas
- `showForgotPassword(e)` — línea 2659, 11 líneas

### SUPABASE AUTH ACTIONS

- `async doLogin()` — línea 2670, 24 líneas
- `async doLogout()` — línea 2694, 8 líneas
- `async applySession()` — línea 2702, 26 líneas
- `async doForgotPassword()` — línea 2728, 17 líneas
- `async doUpdatePassword()` — línea 2745, 42 líneas

### AUTH STATE LISTENER

- `updateUserBadge()` — línea 2787, 14 líneas
- `applyRoleTabs()` — línea 2801, 9 líneas
- `canAccess(tab)` — línea 2810, 10 líneas

### STATE

- `defaultState()` — línea 2820, 53 líneas
- `defaultProducts()` — línea 2873, 15 líneas
- `defaultHistory()` — línea 2888, 13 líneas
- `defaultSemaforo()` — línea 2901, 15 líneas
- `loadState()` — línea 2916, 46 líneas
- `showToast(msg, type='success')` — línea 2962, 9 líneas
- `_stripBlobs(obj)` — línea 2971, 11 líneas
- `_autoSnapshot()` — línea 2982, 25 líneas
- `_leanState(src, aggressive)` — línea 3007, 13 líneas
- `_persistLocal()` — línea 3020, 10 líneas
- `async persistState()` — línea 3030, 27 líneas
- `calcDirty()` — línea 3057, 5 líneas
- `uid()` — línea 3062, 5 líneas

### NAV

- `showTab(name)` — línea 3067, 26 líneas

### STORAGE UPLOAD

- `async _uploadToStorage(file, folder)` — línea 3093, 13 líneas

### LOGO

- `async uploadLogo(input)` — línea 3106, 9 líneas
- `applyLogo()` — línea 3115, 9 líneas
- `updateCompanyName(v)` — línea 3124, 7 líneas
- `async uploadLoginLogo(input)` — línea 3131, 10 líneas
- `removeLoginLogo()` — línea 3141, 6 líneas
- `applyLoginLogo()` — línea 3147, 13 líneas
- `applyLoginScreenState()` — línea 3160, 10 líneas

### GASTOS FIJOS

- `renderGastos()` — línea 3170, 11 líneas
- `addGasto()` — línea 3181, 5 líneas
- `removeGasto(id)` — línea 3186, 4 líneas
- `updateGasto(id, val)` — línea 3190, 4 líneas
- `totalGastosFijos()` — línea 3194, 3 líneas

### PRODUCTS

- `loadDefaultProducts()` — línea 3197, 1 líneas
- `clearProducts()` — línea 3198, 1 líneas
- `addProduct()` — línea 3199, 4 líneas
- `removeProduct(id)` — línea 3203, 24 líneas
- `updateProduct(id, field, val)` — línea 3227, 11 líneas
- `_updateSelBar()` — línea 3238, 19 líneas
- `toggleProductSelect(id, checked)` — línea 3257, 7 líneas
- `toggleAllProducts(checked)` — línea 3264, 9 líneas
- `clearProductSelection()` — línea 3273, 11 líneas
- `deleteSelectedProducts()` — línea 3284, 22 líneas
- `_initProductDrag(tbody)` — línea 3306, 28 líneas
- `_normalizeProductIds(arr)` — línea 3334, 16 líneas
- `_ensureUniqueProductIds()` — línea 3350, 2 líneas
- `renderProducts()` — línea 3352, 42 líneas
- `async uploadProductImg(id, input)` — línea 3394, 9 líneas
- `duplicateProduct(id)` — línea 3403, 11 líneas
- `recalc()` — línea 3414, 80 líneas

### Phase 4: country distribution & simulator

- `getEcuadorShare()` — línea 3494, 11 líneas
- `renderCountryDist(gfTotal, pedidos)` — línea 3505, 50 líneas
- `updateCountry(id, field, val)` — línea 3555, 5 líneas
- `updateDistMethod(val)` — línea 3560, 5 líneas
- `updateManualPct(id, val)` — línea 3565, 4 líneas
- `populateSimProduct()` — línea 3569, 7 líneas
- `runSimulator()` — línea 3576, 67 líneas

### end Phase 4

- `updateDashCascade(price,mv,md,me,mop,cpao)` — línea 3643, 17 líneas

### FILTERS

- `getFilteredHistory()` — línea 3660, 13 líneas
- `isFilterActive()` — línea 3673, 4 líneas
- `applyFilters()` — línea 3677, 11 líneas
- `resetFilters()` — línea 3688, 8 líneas
- `setPreset(p)` — línea 3696, 21 líneas
- `updateFilterSelects()` — línea 3717, 30 líneas

### HOME / INICIO EJECUTIVO

- `_metaPeriodStart(periodo)` — línea 3747, 7 líneas
- `_stageAtInPeriod(c, stage, start)` — línea 3754, 6 líneas
- `_metaProgress(meta)` — línea 3760, 36 líneas
- `_homeRange()` — línea 3796, 12 líneas
- `_inHomeRange(iso, r)` — línea 3808, 7 líneas
- `onHomeDateChange()` — línea 3815, 9 líneas
- `_escaladoDefaults()` — línea 3824, 4 líneas
- `getEscaladoStrategy()` — línea 3828, 1 líneas
- `getEscaladoCandidates()` — línea 3829, 27 líneas
- `renderHome()` — línea 3856, 143 líneas
- `openMetaForm()` — línea 3999, 22 líneas
- `saveMeta()` — línea 4021, 18 líneas
- `deleteMeta(id)` — línea 4039, 7 líneas
- `renderConfigMetas()` — línea 4046, 16 líneas
- `renderEscaladoStrategyForm()` — línea 4062, 34 líneas
- `saveEscaladoStrategy()` — línea 4096, 16 líneas
- `renderDashboard()` — línea 4112, 33 líneas
- `renderRevenueChart(hist)` — línea 4145, 17 líneas
- `renderPedidosChart(hist)` — línea 4162, 19 líneas
- `renderSemaforo()` — línea 4181, 20 líneas

### WEEKLY HISTORY

- `saveSemana()` — línea 4201, 27 líneas
- `renderHistory()` — línea 4228, 26 líneas
- `deleteSemana(id)` — línea 4254, 5 líneas
- `clearHistory()` — línea 4259, 5 líneas
- `renderHistoryCharts()` — línea 4264, 52 líneas

### EXCEL UPLOAD (Phase 5)

- `handleXlFile(input)` — línea 4316, 4 líneas
- `handleXlDrop(e)` — línea 4320, 9 líneas
- `processXlFile(file)` — línea 4329, 21 líneas
- `loadSheetByIdx(i)` — línea 4350, 7 líneas
- `xlMatchField(cellStr)` — línea 4357, 8 líneas
- `analyzeSheet(sheetName, data)` — línea 4365, 18 líneas
- `renderKVMapper(sheetName, data)` — línea 4383, 19 líneas
- `renderTabularMapper(sheetName, data, headerRowIdx, dataRows)` — línea 4402, 46 líneas
- `applyTabularMap()` — línea 4448, 29 líneas
- `renderConfirmForm(sheetName, det)` — línea 4477, 46 líneas
- `saveFromXl()` — línea 4523, 32 líneas

### COMPARADOR

- `populateCompareSelects()` — línea 4555, 16 líneas
- `compareWeeks()` — línea 4571, 90 líneas

### KANBAN

- `setDatePreset(preset)` — línea 4661, 9 líneas
- `getDateRange()` — línea 4670, 18 líneas
- `getFilteredCreativos(opts)` — línea 4688, 41 líneas
- `populateCreativoFilterProduct()` — línea 4729, 21 líneas
- `renderKanban()` — línea 4750, 139 líneas
- `dragCard(e, id)` — línea 4889, 1 líneas
- `validateStageTransition(c, toStatus)` — línea 4890, 79 líneas
- `dropCard(e, colId)` — línea 4969, 16 líneas
- `showValidationBanner(missing, colLabel)` — línea 4985, 29 líneas
- `moveCard(id, toStatus)` — línea 5014, 46 líneas
- `_metaStatusInfo(raw)` — línea 5060, 13 líneas
- `_fmtDateTime(iso)` — línea 5073, 6 líneas
- `_daysSince(iso)` — línea 5079, 12 líneas
- `openCampaignCreativoModal()` — línea 5091, 26 líneas
- `onTestTypeChange()` — línea 5117, 12 líneas
- `_stampStageChange(c, toStatus)` — línea 5129, 11 líneas

### VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO

- `renderGroupedView()` — línea 5140, 84 líneas
- `_groupRecommendation(g, t, nivel)` — línea 5224, 16 líneas
- `setColSort(key)` — línea 5240, 14 líneas
- `_crFilterMatch(c)` — línea 5254, 8 líneas
- `renderCreativosTable()` — línea 5262, 104 líneas
- `renderCreativosSummary()` — línea 5366, 32 líneas
- `renderRankings()` — línea 5398, 60 líneas
- `getStatusCls(s)` — línea 5458, 1 líneas
- `getStatusLabel(s)` — línea 5459, 10 líneas

### Angle management

- `populateAngleSel(current)` — línea 5469, 19 líneas
- `onAngleSel(sel)` — línea 5488, 10 líneas
- `addAngleFromModal()` — línea 5498, 14 líneas

### Punto de dolor

- `populatePainSel(current)` — línea 5512, 13 líneas
- `onPainSel(sel)` — línea 5525, 6 líneas
- `addPainFromModal()` — línea 5531, 14 líneas

### Multi-file upload

- `loadCreativoFiles(input)` — línea 5545, 24 líneas
- `removeCreativoFile(idx)` — línea 5569, 7 líneas
- `renderFilesGrid()` — línea 5576, 22 líneas
- `loadCreativoFile(input)` — línea 5598, 4 líneas
- `clearCreativoThumb()` — línea 5602, 8 líneas

### Referencias del creador (inspiración, no creativo final)

- `addRefLink()` — línea 5610, 10 líneas
- `loadCreativoRefs(input)` — línea 5620, 18 líneas
- `removeCreativoRef(idx)` — línea 5638, 5 líneas
- `detectPlatform(url)` — línea 5643, 10 líneas
- `renderRefsGrid()` — línea 5653, 26 líneas
- `showThumbPreview(src, type, name)` — línea 5679, 14 líneas
- `previewCreativoLink()` — línea 5693, 63 líneas

### STAGE LOGIC

- `onStageChange()` — línea 5756, 59 líneas
- `renderModalFlowActions()` — línea 5815, 36 líneas
- `moveThenClose(toStatus)` — línea 5851, 69 líneas
- `openDetailModal(id)` — línea 5920, 91 líneas
- `openCreativoModal(id)` — línea 6011, 112 líneas
- `autoCalcRevenue()` — línea 6123, 15 líneas
- `getProductCpaTargets(productName)` — línea 6138, 16 líneas
- `getBaseName(productName)` — línea 6154, 4 líneas
- `getTrafficCpaTargets(productName)` — línea 6158, 41 líneas
- `async syncAllMetrics()` — línea 6199, 87 líneas
- `async syncMetaMetrics()` — línea 6286, 116 líneas
- `calcCreativoProfit()` — línea 6402, 50 líneas
- `crSemaforo(m, targets)` — línea 6452, 81 líneas

### 🟡 AMARILLO — observar

- `crDecision(m, targets)` — línea 6533, 7 líneas
- `showCreativoAnalysis(id)` — línea 6540, 308 líneas

### VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS

- `_rowToMetrics(r)` — línea 6848, 9 líneas
- `_rowStats(r)` — línea 6857, 7 líneas
- `_miniMetricsRow(g)` — línea 6864, 7 líneas
- `async syncCampaignFromDrill(id, btnEl)` — línea 6871, 61 líneas
- `showCampaignDrilldown(id)` — línea 6932, 88 líneas
- `showSemaforoTooltip(e)` — línea 7020, 41 líneas
- `semDot(m, size=14)` — línea 7061, 6 líneas
- `validateIdeaSave()` — línea 7067, 34 líneas
- `saveCreativo()` — línea 7101, 136 líneas
- `duplicateCreativo(id)` — línea 7237, 18 líneas
- `_stripForClone(c)` — línea 7255, 10 líneas
- `deleteCreativo(id)` — línea 7265, 5 líneas
- `closeModal(id)` — línea 7270, 12 líneas

### RECURSOS OPERATIVOS

- `switchRecTab(tab)` — línea 7282, 9 líneas
- `renderRecursos()` — línea 7291, 10 líneas
- `_renderRecPixelsOnly()` — línea 7301, 24 líneas
- `_recFilters()` — línea 7325, 9 líneas
- `_renderRecAccountsPixels()` — línea 7334, 32 líneas
- `_renderRecLandings()` — línea 7366, 48 líneas
- `_renderRecRecursos()` — línea 7414, 33 líneas

### Pixel CRUD

- `openPixelModal(id, preAccountId)` — línea 7447, 17 líneas
- `savePixel()` — línea 7464, 9 líneas
- `deletePixel(id)` — línea 7473, 3 líneas

### Landing CRUD

- `openLandingModal(id)` — línea 7476, 22 líneas

### Copies por landing (máx 5)

- `_renderLdCopies(copies)` — línea 7498, 18 líneas
- `_collectLdCopies()` — línea 7516, 9 líneas
- `addLdCopy()` — línea 7525, 6 líneas
- `removeLdCopy(i)` — línea 7531, 9 líneas
- `copyToClipboard(txt)` — línea 7540, 5 líneas
- `renderLandingSuggest()` — línea 7545, 36 líneas
- `copyLandingCopy(landingId, idx)` — línea 7581, 5 líneas
- `copyLandingSeg(landingId)` — línea 7586, 5 líneas
- `saveLanding()` — línea 7591, 16 líneas
- `deleteLanding(id)` — línea 7607, 3 líneas

### Recurso CRUD

- `openRecursoModal(id)` — línea 7610, 15 líneas
- `saveRecurso()` — línea 7625, 9 líneas
- `deleteRecurso(id)` — línea 7634, 4 líneas

### Enfoques creativos

- `_renderRecEnfoques()` — línea 7638, 16 líneas
- `openEnfoqueModal(id)` — línea 7654, 9 líneas
- `saveEnfoque(e)` — línea 7663, 10 líneas
- `deleteEnfoque(id)` — línea 7673, 12 líneas

### Equipo

- `_renderRecEquipo()` — línea 7685, 16 líneas
- `openTeamModal(id)` — línea 7701, 15 líneas
- `deleteTeamMember(id)` — línea 7716, 6 líneas
- `populateTeamSelects()` — línea 7722, 22 líneas
- `updateProdStatusBadge()` — línea 7744, 3 líneas

### Puntos de dolor

- `_renderRecDolores()` — línea 7747, 10 líneas
- `openDolorModal()` — línea 7757, 11 líneas
- `deleteDolorItem(idx)` — línea 7768, 7 líneas

### Pixel/Landing en formulario de creativo

- `populateCrPixels(adAccountId)` — línea 7775, 8 líneas
- `onCrPixelChange()` — línea 7783, 7 líneas
- `onCrAdAccountChange()` — línea 7790, 6 líneas

### COST CAP

- `calcCostCap()` — línea 7796, 8 líneas
- `addCostCapRow()` — línea 7804, 11 líneas
- `sendToCostCap(creativoId)` — línea 7815, 36 líneas
- `renderLinkedCreativos()` — línea 7851, 26 líneas
- `ccDecision(r, be)` — línea 7877, 16 líneas
- `renderEscaladoSugeridos()` — línea 7893, 21 líneas
- `renderCostCaps()` — línea 7914, 58 líneas
- `renderCostCapSummary(be, avgPrice)` — línea 7972, 82 líneas
- `updateCC(i, field, val)` — línea 8054, 3 líneas
- `deleteCC(i)` — línea 8057, 2 líneas
- `exportCCToCSV()` — línea 8059, 14 líneas
- `renderJBSteps()` — línea 8073, 40 líneas

### CONFIG

- `renderConfig()` — línea 8113, 29 líneas

### DIAGNÓSTICO

- `renderErrorLog()` — línea 8142, 42 líneas
- `copiarErrorLog()` — línea 8184, 14 líneas

### AD ACCOUNTS

- `renderAdAccounts()` — línea 8198, 19 líneas
- `openAdAccountModal(id)` — línea 8217, 12 líneas
- `saveAdAccount()` — línea 8229, 18 líneas
- `deleteAdAccount(id)` — línea 8247, 6 líneas
- `renderVersions()` — línea 8253, 14 líneas
- `saveVersion()` — línea 8267, 8 líneas
- `restoreVersion(id)` — línea 8275, 11 líneas
- `deleteVersion(id)` — línea 8286, 5 líneas
- `renderSemaforoConfig()` — línea 8291, 11 líneas
- `renderGlossary()` — línea 8302, 28 líneas

### SAVE PROJECT

- `saveProject()` — línea 8330, 5 líneas
- `exportJSON()` — línea 8335, 8 líneas
- `importJSON(input)` — línea 8343, 14 líneas
- `resetAll()` — línea 8357, 7 líneas

### INIT

- `init()` — línea 8364, 45 líneas
- `_isDirty()` — línea 8409, 26 líneas

### USER MANAGEMENT

- `renderUsersList()` — línea 8435, 27 líneas
- `openUserModal(id)` — línea 8462, 38 líneas
- `editUser(id)` — línea 8500, 2 líneas
- `saveUser()` — línea 8502, 24 líneas
- `deleteUser(id)` — línea 8526, 12 líneas

## Índice alfabético

`_autoSnapshot` (2982) · `_collectLdCopies` (7516) · `_crFilterMatch` (5254) · `_dataScore` (2088) · `_daysSince` (5079) · `_ensureUniqueProductIds` (3350) · `_enterApp` (2569) · `_escaladoDefaults` (3824) · `_fmtDateTime` (5073) · `_getUserProfile` (2563) · `_groupRecommendation` (5224) · `_guardarBase` (2329) · `_hash` (2307) · `_hasPendingUpload` (2522) · `_homeRange` (3796) · `_huellaLista` (2315) · `_inHomeRange` (3808) · `_initProductDrag` (3306) · `_isDirty` (8409) · `_itemScore` (2074) · `_leanState` (3007) · `_leerBase` (2336) · `_markPendingUpload` (2518) · `_mergeArraysById` (2370) · `_mergeDefaultUsers` (2048) · `_mergeItem` (2343) · `_metaPeriodStart` (3747) · `_metaProgress` (3760) · `_metaStatusInfo` (5060) · `_miniMetricsRow` (6864) · `_normalizeProductIds` (3334) · `_perdidaAnormal` (2108) · `_persistLocal` (3020) · `_recFilters` (7325) · `_renderLdCopies` (7498) · `_renderRecAccountsPixels` (7334) · `_renderRecDolores` (7747) · `_renderRecEnfoques` (7638) · `_renderRecEquipo` (7685) · `_renderRecLandings` (7366) · `_renderRecPixelsOnly` (7301) · `_renderRecRecursos` (7414) · `_reportarConflictos` (2402) · `_rowStats` (6857) · `_rowToMetrics` (6848) · `_safePullFromCloud` (2595) · `_setSyncStatus` (2587) · `_showLoginScreen` (2643) · `_stageAtInPeriod` (3754) · `_stampStageChange` (5129) · `_stripBlobs` (2971) · `_stripForClone` (7255) · `_stripPasswords` (2552) · `_updateSelBar` (3238) · `_uploadToStorage` (3093) · `addAngleFromModal` (5498) · `addCostCapRow` (7804) · `addGasto` (3181) · `addLdCopy` (7525) · `addPainFromModal` (5531) · `addProduct` (3199) · `addRefLink` (5610) · `analyzeSheet` (4365) · `applyFilters` (3677) · `applyLoginLogo` (3147) · `applyLoginScreenState` (3160) · `applyLogo` (3115) · `applyRoleTabs` (2801) · `applySession` (2702) · `applyTabularMap` (4448) · `autoCalcRevenue` (6123) · `calcCostCap` (7796) · `calcCreativoProfit` (6402) · `calcDirty` (3057) · `canAccess` (2810) · `ccDecision` (7877) · `clearCreativoThumb` (5602) · `clearErrorLog` (1984) · `clearHistory` (4259) · `clearProducts` (3198) · `clearProductSelection` (3273) · `closeModal` (7270) · `compareWeeks` (4571) · `copiarErrorLog` (8184) · `copyLandingCopy` (7581) · `copyLandingSeg` (7586) · `copyToClipboard` (7540) · `crDecision` (6533) · `crSemaforo` (6452) · `defaultHistory` (2888) · `defaultProducts` (2873) · `defaultSemaforo` (2901) · `defaultState` (2820) · `deleteAdAccount` (8247) · `deleteCC` (8057) · `deleteCreativo` (7265) · `deleteDolorItem` (7768) · `deleteEnfoque` (7673) · `deleteLanding` (7607) · `deleteMeta` (4039) · `deletePixel` (7473) · `deleteRecurso` (7634) · `deleteSelectedProducts` (3284) · `deleteSemana` (4254) · `deleteTeamMember` (7716) · `deleteUser` (8526) · `deleteVersion` (8286) · `detectPlatform` (5643) · `doForgotPassword` (2728) · `doLogin` (2670) · `doLogout` (2694) · `doUpdatePassword` (2745) · `dragCard` (4889) · `dropCard` (4969) · `duplicateCreativo` (7237) · `duplicateProduct` (3403) · `editUser` (8500) · `esc` (2003) · `escJs` (2015) · `exportCCToCSV` (8059) · `exportJSON` (8335) · `getBaseName` (6154) · `getDateRange` (4670) · `getEcuadorShare` (3494) · `getErrorLog` (1981) · `getEscaladoCandidates` (3829) · `getEscaladoStrategy` (3828) · `getFilteredCreativos` (4688) · `getFilteredHistory` (3660) · `getProductCpaTargets` (6138) · `getStatusCls` (5458) · `getStatusLabel` (5459) · `getTrafficCpaTargets` (6158) · `handleXlDrop` (4320) · `handleXlFile` (4316) · `importJSON` (8343) · `init` (8364) · `isFilterActive` (3673) · `loadCreativoFile` (5598) · `loadCreativoFiles` (5545) · `loadCreativoRefs` (5620) · `loadDefaultProducts` (3197) · `loadSheetByIdx` (4350) · `loadState` (2916) · `logError` (1955) · `markDeleted` (2411) · `moveCard` (5014) · `moveThenClose` (5851) · `onAngleSel` (5488) · `onCrAdAccountChange` (7790) · `onCrPixelChange` (7783) · `onHomeDateChange` (3815) · `onPainSel` (5525) · `onStageChange` (5756) · `onTestTypeChange` (5117) · `openAdAccountModal` (8217) · `openCampaignCreativoModal` (5091) · `openCreativoModal` (6011) · `openDetailModal` (5920) · `openDolorModal` (7757) · `openEnfoqueModal` (7654) · `openLandingModal` (7476) · `openMetaForm` (3999) · `openPixelModal` (7447) · `openRecursoModal` (7610) · `openTeamModal` (7701) · `openUserModal` (8462) · `persistState` (3030) · `populateAngleSel` (5469) · `populateCompareSelects` (4555) · `populateCreativoFilterProduct` (4729) · `populateCrPixels` (7775) · `populatePainSel` (5512) · `populateSimProduct` (3569) · `populateTeamSelects` (7722) · `previewCreativoLink` (5693) · `processXlFile` (4329) · `recalc` (3414) · `removeCreativoFile` (5569) · `removeCreativoRef` (5638) · `removeGasto` (3186) · `removeLdCopy` (7531) · `removeLoginLogo` (3141) · `removeProduct` (3203) · `renderAdAccounts` (8198) · `renderConfig` (8113) · `renderConfigMetas` (4046) · `renderConfirmForm` (4477) · `renderCostCaps` (7914) · `renderCostCapSummary` (7972) · `renderCountryDist` (3505) · `renderCreativosSummary` (5366) · `renderCreativosTable` (5262) · `renderDashboard` (4112) · `renderErrorLog` (8142) · `renderEscaladoStrategyForm` (4062) · `renderEscaladoSugeridos` (7893) · `renderFilesGrid` (5576) · `renderGastos` (3170) · `renderGlossary` (8302) · `renderGroupedView` (5140) · `renderHistory` (4228) · `renderHistoryCharts` (4264) · `renderHome` (3856) · `renderJBSteps` (8073) · `renderKanban` (4750) · `renderKVMapper` (4383) · `renderLandingSuggest` (7545) · `renderLinkedCreativos` (7851) · `renderModalFlowActions` (5815) · `renderPedidosChart` (4162) · `renderProducts` (3352) · `renderRankings` (5398) · `renderRecursos` (7291) · `renderRefsGrid` (5653) · `renderRevenueChart` (4145) · `renderSemaforo` (4181) · `renderSemaforoConfig` (8291) · `renderTabularMapper` (4402) · `renderUsersList` (8435) · `renderVersions` (8253) · `requireAdmin` (2541) · `resetAll` (8357) · `resetFilters` (3688) · `restoreVersion` (8275) · `runSimulator` (3576) · `safeSrc` (2039) · `safeUrl` (2027) · `saveAdAccount` (8229) · `saveCreativo` (7101) · `saveEnfoque` (7663) · `saveEscaladoStrategy` (4096) · `saveFromXl` (4523) · `saveLanding` (7591) · `saveMeta` (4021) · `savePixel` (7464) · `saveProject` (8330) · `saveRecurso` (7625) · `saveSemana` (4201) · `saveToCloud` (2423) · `saveUser` (8502) · `saveVersion` (8267) · `semDot` (7061) · `sendToCostCap` (7815) · `setColSort` (5240) · `setDatePreset` (4661) · `setPreset` (3696) · `showCampaignDrilldown` (6932) · `showCreativoAnalysis` (6540) · `showForgotPassword` (2659) · `showLoginForm` (2652) · `showSemaforoTooltip` (7020) · `showTab` (3067) · `showThumbPreview` (5679) · `showToast` (2962) · `showValidationBanner` (4985) · `startAutoSync` (2195) · `startRealtimeSync` (2609) · `switchRecTab` (7282) · `syncAllMetrics` (6199) · `syncCampaignFromDrill` (6871) · `syncFromCloud` (2121) · `syncMetaMetrics` (6286) · `toggleAllProducts` (3264) · `toggleProductSelect` (3257) · `totalGastosFijos` (3194) · `uid` (3062) · `updateCC` (8054) · `updateCompanyName` (3124) · `updateCountry` (3555) · `updateDashCascade` (3643) · `updateDistMethod` (3560) · `updateFilterSelects` (3717) · `updateGasto` (3190) · `updateManualPct` (3565) · `updateProdStatusBadge` (7744) · `updateProduct` (3227) · `updateUserBadge` (2787) · `uploadLoginLogo` (3131) · `uploadLogo` (3106) · `uploadProductImg` (3394) · `validateIdeaSave` (7067) · `validateStageTransition` (4890) · `xlMatchField` (4357)
