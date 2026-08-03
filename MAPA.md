# Mapa de `index.html`

> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:
> ```bash
> node scripts/mapa.js
> ```

Estado: **8510 líneas**, **283 funciones**, **58 secciones**, 108 usos de `innerHTML`, 327 handlers inline.

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
| 2289 | MERGE POR CAMPO (3 bandas) | 11 |
| 2522 | ROLE PERMISSIONS | 4 |
| 2578 | SINCRONIZACIÓN MULTIUSUARIO EN TIEMPO REAL | 4 |
| 2647 | LOGIN FORM HELPERS | 2 |
| 2665 | SUPABASE AUTH ACTIONS | 5 |
| 2766 | AUTH STATE LISTENER | 3 |
| 2815 | STATE | 13 |
| 3064 | NAV | 1 |
| 3089 | STORAGE UPLOAD | 1 |
| 3103 | LOGO | 7 |
| 3167 | GASTOS FIJOS | 5 |
| 3194 | PRODUCTS | 16 |
| 3464 | Phase 4: country distribution & simulator | 7 |
| 3613 | end Phase 4 | 1 |
| 3629 | FILTERS | 6 |
| 3705 | DASHBOARD | 0 |
| 3706 | HOME / INICIO EJECUTIVO | 20 |
| 4172 | WEEKLY HISTORY | 5 |
| 4265 | EXCEL UPLOAD (Phase 5) | 11 |
| 4526 | COMPARADOR | 2 |
| 4619 | KANBAN | 16 |
| 5111 | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO | 9 |
| 5433 | CREATIVO MODAL | 0 |
| 5440 | Angle management | 3 |
| 5483 | Punto de dolor | 3 |
| 5516 | Multi-file upload | 5 |
| 5581 | Referencias del creador (inspiración, no creativo final) | 7 |
| 5706 | STAGE LOGIC | 13 |
| 6447 | 🔴 ROJO — parar urgente | 0 |
| 6473 | 🟢 VERDE — va bien | 0 |
| 6487 | 🟡 AMARILLO — observar | 2 |
| 6521 | Fuentes de datos | 0 |
| 6545 | Helpers visuales | 0 |
| 6558 | 1. EVALUACIÓN DE RENTABILIDAD | 0 |
| 6606 | 2. EVALUACIÓN DE TRÁFICO | 0 |
| 6658 | 3. DIAGNÓSTICO CREATIVO | 0 |
| 6670 | 4. MÉTRICAS FALTANTES | 0 |
| 6679 | 5. RESUMEN EJECUTIVO y ACCIÓN | 0 |
| 6818 | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS | 13 |
| 7248 | RECURSOS OPERATIVOS | 7 |
| 7418 | Pixel CRUD | 3 |
| 7447 | Landing CRUD | 1 |
| 7469 | Copies por landing (máx 5) | 10 |
| 7581 | Recurso CRUD | 3 |
| 7608 | Enfoques creativos | 4 |
| 7651 | Equipo | 5 |
| 7718 | Puntos de dolor | 3 |
| 7746 | Pixel/Landing en formulario de creativo | 3 |
| 7767 | COST CAP | 12 |
| 8084 | CONFIG | 1 |
| 8113 | DIAGNÓSTICO | 2 |
| 8167 | AD ACCOUNTS | 10 |
| 8301 | SAVE PROJECT | 4 |
| 8335 | INIT | 2 |
| 8406 | USER MANAGEMENT | 5 |

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
| 93 | `saveToCloud()` | MERGE POR CAMPO (3 bandas) |
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
- `async syncFromCloud(force = false, pushOnNewer = false)` — línea 2121, 72 líneas
- `startAutoSync()` — línea 2193, 112 líneas

### MERGE POR CAMPO (3 bandas)

- `_hash(v)` — línea 2305, 8 líneas
- `_huellaLista(arr)` — línea 2313, 14 líneas
- `_guardarBase(s)` — línea 2327, 7 líneas
- `_leerBase()` — línea 2334, 7 líneas
- `_mergeItem(local, cloud, base, cloudWins, etiqueta)` — línea 2341, 27 líneas
- `_mergeArraysById(localArr, cloudArr, cloudWins = false, b…)` — línea 2368, 32 líneas
- `_reportarConflictos(origen)` — línea 2400, 9 líneas
- `markDeleted(id)` — línea 2409, 12 líneas
- `async saveToCloud()` — línea 2421, 93 líneas
- `_markPendingUpload(on)` — línea 2514, 4 líneas
- `_hasPendingUpload()` — línea 2518, 19 líneas

### ROLE PERMISSIONS

- `requireAdmin(accion)` — línea 2537, 11 líneas
- `_stripPasswords(usersList)` — línea 2548, 11 líneas
- `_getUserProfile(email)` — línea 2559, 6 líneas
- `_enterApp(profile)` — línea 2565, 18 líneas

### SINCRONIZACIÓN MULTIUSUARIO EN TIEMPO REAL

- `_setSyncStatus(txt, color)` — línea 2583, 8 líneas
- `_safePullFromCloud(reason)` — línea 2591, 14 líneas
- `startRealtimeSync()` — línea 2605, 34 líneas
- `_showLoginScreen()` — línea 2639, 9 líneas

### LOGIN FORM HELPERS

- `showLoginForm(e)` — línea 2648, 7 líneas
- `showForgotPassword(e)` — línea 2655, 11 líneas

### SUPABASE AUTH ACTIONS

- `async doLogin()` — línea 2666, 24 líneas
- `async doLogout()` — línea 2690, 8 líneas
- `async applySession()` — línea 2698, 26 líneas
- `async doForgotPassword()` — línea 2724, 17 líneas
- `async doUpdatePassword()` — línea 2741, 42 líneas

### AUTH STATE LISTENER

- `updateUserBadge()` — línea 2783, 14 líneas
- `applyRoleTabs()` — línea 2797, 9 líneas
- `canAccess(tab)` — línea 2806, 10 líneas

### STATE

- `defaultState()` — línea 2816, 53 líneas
- `defaultProducts()` — línea 2869, 15 líneas
- `defaultHistory()` — línea 2884, 13 líneas
- `defaultSemaforo()` — línea 2897, 15 líneas
- `loadState()` — línea 2912, 48 líneas
- `showToast(msg, type='success')` — línea 2960, 9 líneas
- `_stripBlobs(obj)` — línea 2969, 11 líneas
- `_autoSnapshot()` — línea 2980, 25 líneas
- `_leanState(src, aggressive)` — línea 3005, 13 líneas
- `_persistLocal()` — línea 3018, 10 líneas
- `async persistState()` — línea 3028, 27 líneas
- `calcDirty()` — línea 3055, 5 líneas
- `uid()` — línea 3060, 5 líneas

### NAV

- `showTab(name)` — línea 3065, 26 líneas

### STORAGE UPLOAD

- `async _uploadToStorage(file, folder)` — línea 3091, 13 líneas

### LOGO

- `async uploadLogo(input)` — línea 3104, 9 líneas
- `applyLogo()` — línea 3113, 9 líneas
- `updateCompanyName(v)` — línea 3122, 7 líneas
- `async uploadLoginLogo(input)` — línea 3129, 10 líneas
- `removeLoginLogo()` — línea 3139, 6 líneas
- `applyLoginLogo()` — línea 3145, 13 líneas
- `applyLoginScreenState()` — línea 3158, 10 líneas

### GASTOS FIJOS

- `renderGastos()` — línea 3168, 11 líneas
- `addGasto()` — línea 3179, 5 líneas
- `removeGasto(id)` — línea 3184, 4 líneas
- `updateGasto(id, val)` — línea 3188, 4 líneas
- `totalGastosFijos()` — línea 3192, 3 líneas

### PRODUCTS

- `loadDefaultProducts()` — línea 3195, 1 líneas
- `clearProducts()` — línea 3196, 1 líneas
- `addProduct()` — línea 3197, 4 líneas
- `removeProduct(id)` — línea 3201, 24 líneas
- `updateProduct(id, field, val)` — línea 3225, 11 líneas
- `_updateSelBar()` — línea 3236, 16 líneas
- `toggleProductSelect(id, checked)` — línea 3252, 5 líneas
- `toggleAllProducts(checked)` — línea 3257, 10 líneas
- `clearProductSelection()` — línea 3267, 11 líneas
- `deleteSelectedProducts()` — línea 3278, 13 líneas
- `_initProductDrag(tbody)` — línea 3291, 25 líneas
- `_ensureUniqueProductIds()` — línea 3316, 10 líneas
- `renderProducts()` — línea 3326, 40 líneas
- `async uploadProductImg(id, input)` — línea 3366, 9 líneas
- `duplicateProduct(id)` — línea 3375, 11 líneas
- `recalc()` — línea 3386, 80 líneas

### Phase 4: country distribution & simulator

- `getEcuadorShare()` — línea 3466, 11 líneas
- `renderCountryDist(gfTotal, pedidos)` — línea 3477, 50 líneas
- `updateCountry(id, field, val)` — línea 3527, 5 líneas
- `updateDistMethod(val)` — línea 3532, 5 líneas
- `updateManualPct(id, val)` — línea 3537, 4 líneas
- `populateSimProduct()` — línea 3541, 7 líneas
- `runSimulator()` — línea 3548, 67 líneas

### end Phase 4

- `updateDashCascade(price,mv,md,me,mop,cpao)` — línea 3615, 17 líneas

### FILTERS

- `getFilteredHistory()` — línea 3632, 13 líneas
- `isFilterActive()` — línea 3645, 4 líneas
- `applyFilters()` — línea 3649, 11 líneas
- `resetFilters()` — línea 3660, 8 líneas
- `setPreset(p)` — línea 3668, 21 líneas
- `updateFilterSelects()` — línea 3689, 30 líneas

### HOME / INICIO EJECUTIVO

- `_metaPeriodStart(periodo)` — línea 3719, 7 líneas
- `_stageAtInPeriod(c, stage, start)` — línea 3726, 6 líneas
- `_metaProgress(meta)` — línea 3732, 36 líneas
- `_homeRange()` — línea 3768, 12 líneas
- `_inHomeRange(iso, r)` — línea 3780, 7 líneas
- `onHomeDateChange()` — línea 3787, 9 líneas
- `_escaladoDefaults()` — línea 3796, 4 líneas
- `getEscaladoStrategy()` — línea 3800, 1 líneas
- `getEscaladoCandidates()` — línea 3801, 27 líneas
- `renderHome()` — línea 3828, 143 líneas
- `openMetaForm()` — línea 3971, 22 líneas
- `saveMeta()` — línea 3993, 18 líneas
- `deleteMeta(id)` — línea 4011, 7 líneas
- `renderConfigMetas()` — línea 4018, 16 líneas
- `renderEscaladoStrategyForm()` — línea 4034, 34 líneas
- `saveEscaladoStrategy()` — línea 4068, 16 líneas
- `renderDashboard()` — línea 4084, 33 líneas
- `renderRevenueChart(hist)` — línea 4117, 17 líneas
- `renderPedidosChart(hist)` — línea 4134, 19 líneas
- `renderSemaforo()` — línea 4153, 20 líneas

### WEEKLY HISTORY

- `saveSemana()` — línea 4173, 27 líneas
- `renderHistory()` — línea 4200, 26 líneas
- `deleteSemana(id)` — línea 4226, 5 líneas
- `clearHistory()` — línea 4231, 5 líneas
- `renderHistoryCharts()` — línea 4236, 52 líneas

### EXCEL UPLOAD (Phase 5)

- `handleXlFile(input)` — línea 4288, 4 líneas
- `handleXlDrop(e)` — línea 4292, 9 líneas
- `processXlFile(file)` — línea 4301, 21 líneas
- `loadSheetByIdx(i)` — línea 4322, 7 líneas
- `xlMatchField(cellStr)` — línea 4329, 8 líneas
- `analyzeSheet(sheetName, data)` — línea 4337, 18 líneas
- `renderKVMapper(sheetName, data)` — línea 4355, 19 líneas
- `renderTabularMapper(sheetName, data, headerRowIdx, dataRows)` — línea 4374, 46 líneas
- `applyTabularMap()` — línea 4420, 29 líneas
- `renderConfirmForm(sheetName, det)` — línea 4449, 46 líneas
- `saveFromXl()` — línea 4495, 32 líneas

### COMPARADOR

- `populateCompareSelects()` — línea 4527, 16 líneas
- `compareWeeks()` — línea 4543, 90 líneas

### KANBAN

- `setDatePreset(preset)` — línea 4633, 9 líneas
- `getDateRange()` — línea 4642, 18 líneas
- `getFilteredCreativos(opts)` — línea 4660, 41 líneas
- `populateCreativoFilterProduct()` — línea 4701, 21 líneas
- `renderKanban()` — línea 4722, 139 líneas
- `dragCard(e, id)` — línea 4861, 1 líneas
- `validateStageTransition(c, toStatus)` — línea 4862, 79 líneas
- `dropCard(e, colId)` — línea 4941, 16 líneas
- `showValidationBanner(missing, colLabel)` — línea 4957, 29 líneas
- `moveCard(id, toStatus)` — línea 4986, 46 líneas
- `_metaStatusInfo(raw)` — línea 5032, 13 líneas
- `_fmtDateTime(iso)` — línea 5045, 6 líneas
- `_daysSince(iso)` — línea 5051, 12 líneas
- `openCampaignCreativoModal()` — línea 5063, 26 líneas
- `onTestTypeChange()` — línea 5089, 12 líneas
- `_stampStageChange(c, toStatus)` — línea 5101, 11 líneas

### VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO

- `renderGroupedView()` — línea 5112, 84 líneas
- `_groupRecommendation(g, t, nivel)` — línea 5196, 16 líneas
- `setColSort(key)` — línea 5212, 14 líneas
- `_crFilterMatch(c)` — línea 5226, 8 líneas
- `renderCreativosTable()` — línea 5234, 104 líneas
- `renderCreativosSummary()` — línea 5338, 32 líneas
- `renderRankings()` — línea 5370, 60 líneas
- `getStatusCls(s)` — línea 5430, 1 líneas
- `getStatusLabel(s)` — línea 5431, 10 líneas

### Angle management

- `populateAngleSel(current)` — línea 5441, 19 líneas
- `onAngleSel(sel)` — línea 5460, 10 líneas
- `addAngleFromModal()` — línea 5470, 14 líneas

### Punto de dolor

- `populatePainSel(current)` — línea 5484, 13 líneas
- `onPainSel(sel)` — línea 5497, 6 líneas
- `addPainFromModal()` — línea 5503, 14 líneas

### Multi-file upload

- `loadCreativoFiles(input)` — línea 5517, 24 líneas
- `removeCreativoFile(idx)` — línea 5541, 7 líneas
- `renderFilesGrid()` — línea 5548, 22 líneas
- `loadCreativoFile(input)` — línea 5570, 4 líneas
- `clearCreativoThumb()` — línea 5574, 8 líneas

### Referencias del creador (inspiración, no creativo final)

- `addRefLink()` — línea 5582, 10 líneas
- `loadCreativoRefs(input)` — línea 5592, 18 líneas
- `removeCreativoRef(idx)` — línea 5610, 5 líneas
- `detectPlatform(url)` — línea 5615, 10 líneas
- `renderRefsGrid()` — línea 5625, 26 líneas
- `showThumbPreview(src, type, name)` — línea 5651, 14 líneas
- `previewCreativoLink()` — línea 5665, 63 líneas

### STAGE LOGIC

- `onStageChange()` — línea 5728, 59 líneas
- `renderModalFlowActions()` — línea 5787, 36 líneas
- `moveThenClose(toStatus)` — línea 5823, 69 líneas
- `openDetailModal(id)` — línea 5892, 91 líneas
- `openCreativoModal(id)` — línea 5983, 112 líneas
- `autoCalcRevenue()` — línea 6095, 15 líneas
- `getProductCpaTargets(productName)` — línea 6110, 16 líneas
- `getBaseName(productName)` — línea 6126, 4 líneas
- `getTrafficCpaTargets(productName)` — línea 6130, 41 líneas
- `async syncAllMetrics()` — línea 6171, 87 líneas
- `async syncMetaMetrics()` — línea 6258, 116 líneas
- `calcCreativoProfit()` — línea 6374, 50 líneas
- `crSemaforo(m, targets)` — línea 6424, 81 líneas

### 🟡 AMARILLO — observar

- `crDecision(m, targets)` — línea 6505, 7 líneas
- `showCreativoAnalysis(id)` — línea 6512, 308 líneas

### VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS

- `_rowToMetrics(r)` — línea 6820, 9 líneas
- `_rowStats(r)` — línea 6829, 7 líneas
- `_miniMetricsRow(g)` — línea 6836, 7 líneas
- `async syncCampaignFromDrill(id, btnEl)` — línea 6843, 61 líneas
- `showCampaignDrilldown(id)` — línea 6904, 88 líneas
- `showSemaforoTooltip(e)` — línea 6992, 41 líneas
- `semDot(m, size=14)` — línea 7033, 6 líneas
- `validateIdeaSave()` — línea 7039, 34 líneas
- `saveCreativo()` — línea 7073, 136 líneas
- `duplicateCreativo(id)` — línea 7209, 18 líneas
- `_stripForClone(c)` — línea 7227, 10 líneas
- `deleteCreativo(id)` — línea 7237, 5 líneas
- `closeModal(id)` — línea 7242, 12 líneas

### RECURSOS OPERATIVOS

- `switchRecTab(tab)` — línea 7254, 9 líneas
- `renderRecursos()` — línea 7263, 10 líneas
- `_renderRecPixelsOnly()` — línea 7273, 24 líneas
- `_recFilters()` — línea 7297, 9 líneas
- `_renderRecAccountsPixels()` — línea 7306, 32 líneas
- `_renderRecLandings()` — línea 7338, 48 líneas
- `_renderRecRecursos()` — línea 7386, 33 líneas

### Pixel CRUD

- `openPixelModal(id, preAccountId)` — línea 7419, 17 líneas
- `savePixel()` — línea 7436, 9 líneas
- `deletePixel(id)` — línea 7445, 3 líneas

### Landing CRUD

- `openLandingModal(id)` — línea 7448, 22 líneas

### Copies por landing (máx 5)

- `_renderLdCopies(copies)` — línea 7470, 18 líneas
- `_collectLdCopies()` — línea 7488, 9 líneas
- `addLdCopy()` — línea 7497, 6 líneas
- `removeLdCopy(i)` — línea 7503, 9 líneas
- `copyToClipboard(txt)` — línea 7512, 5 líneas
- `renderLandingSuggest()` — línea 7517, 36 líneas
- `copyLandingCopy(landingId, idx)` — línea 7553, 5 líneas
- `copyLandingSeg(landingId)` — línea 7558, 5 líneas
- `saveLanding()` — línea 7563, 16 líneas
- `deleteLanding(id)` — línea 7579, 3 líneas

### Recurso CRUD

- `openRecursoModal(id)` — línea 7582, 15 líneas
- `saveRecurso()` — línea 7597, 9 líneas
- `deleteRecurso(id)` — línea 7606, 4 líneas

### Enfoques creativos

- `_renderRecEnfoques()` — línea 7610, 16 líneas
- `openEnfoqueModal(id)` — línea 7626, 9 líneas
- `saveEnfoque(e)` — línea 7635, 10 líneas
- `deleteEnfoque(id)` — línea 7645, 12 líneas

### Equipo

- `_renderRecEquipo()` — línea 7657, 16 líneas
- `openTeamModal(id)` — línea 7673, 15 líneas
- `deleteTeamMember(id)` — línea 7688, 6 líneas
- `populateTeamSelects()` — línea 7694, 22 líneas
- `updateProdStatusBadge()` — línea 7716, 3 líneas

### Puntos de dolor

- `_renderRecDolores()` — línea 7719, 10 líneas
- `openDolorModal()` — línea 7729, 11 líneas
- `deleteDolorItem(idx)` — línea 7740, 7 líneas

### Pixel/Landing en formulario de creativo

- `populateCrPixels(adAccountId)` — línea 7747, 8 líneas
- `onCrPixelChange()` — línea 7755, 7 líneas
- `onCrAdAccountChange()` — línea 7762, 6 líneas

### COST CAP

- `calcCostCap()` — línea 7768, 8 líneas
- `addCostCapRow()` — línea 7776, 11 líneas
- `sendToCostCap(creativoId)` — línea 7787, 36 líneas
- `renderLinkedCreativos()` — línea 7823, 26 líneas
- `ccDecision(r, be)` — línea 7849, 16 líneas
- `renderEscaladoSugeridos()` — línea 7865, 21 líneas
- `renderCostCaps()` — línea 7886, 58 líneas
- `renderCostCapSummary(be, avgPrice)` — línea 7944, 82 líneas
- `updateCC(i, field, val)` — línea 8026, 3 líneas
- `deleteCC(i)` — línea 8029, 2 líneas
- `exportCCToCSV()` — línea 8031, 14 líneas
- `renderJBSteps()` — línea 8045, 40 líneas

### CONFIG

- `renderConfig()` — línea 8085, 29 líneas

### DIAGNÓSTICO

- `renderErrorLog()` — línea 8114, 42 líneas
- `copiarErrorLog()` — línea 8156, 14 líneas

### AD ACCOUNTS

- `renderAdAccounts()` — línea 8170, 19 líneas
- `openAdAccountModal(id)` — línea 8189, 12 líneas
- `saveAdAccount()` — línea 8201, 18 líneas
- `deleteAdAccount(id)` — línea 8219, 6 líneas
- `renderVersions()` — línea 8225, 14 líneas
- `saveVersion()` — línea 8239, 8 líneas
- `restoreVersion(id)` — línea 8247, 11 líneas
- `deleteVersion(id)` — línea 8258, 5 líneas
- `renderSemaforoConfig()` — línea 8263, 11 líneas
- `renderGlossary()` — línea 8274, 28 líneas

### SAVE PROJECT

- `saveProject()` — línea 8302, 5 líneas
- `exportJSON()` — línea 8307, 8 líneas
- `importJSON(input)` — línea 8315, 14 líneas
- `resetAll()` — línea 8329, 7 líneas

### INIT

- `init()` — línea 8336, 45 líneas
- `_isDirty()` — línea 8381, 26 líneas

### USER MANAGEMENT

- `renderUsersList()` — línea 8407, 27 líneas
- `openUserModal(id)` — línea 8434, 38 líneas
- `editUser(id)` — línea 8472, 2 líneas
- `saveUser()` — línea 8474, 24 líneas
- `deleteUser(id)` — línea 8498, 12 líneas

## Índice alfabético

`_autoSnapshot` (2980) · `_collectLdCopies` (7488) · `_crFilterMatch` (5226) · `_dataScore` (2088) · `_daysSince` (5051) · `_ensureUniqueProductIds` (3316) · `_enterApp` (2565) · `_escaladoDefaults` (3796) · `_fmtDateTime` (5045) · `_getUserProfile` (2559) · `_groupRecommendation` (5196) · `_guardarBase` (2327) · `_hash` (2305) · `_hasPendingUpload` (2518) · `_homeRange` (3768) · `_huellaLista` (2313) · `_inHomeRange` (3780) · `_initProductDrag` (3291) · `_isDirty` (8381) · `_itemScore` (2074) · `_leanState` (3005) · `_leerBase` (2334) · `_markPendingUpload` (2514) · `_mergeArraysById` (2368) · `_mergeDefaultUsers` (2048) · `_mergeItem` (2341) · `_metaPeriodStart` (3719) · `_metaProgress` (3732) · `_metaStatusInfo` (5032) · `_miniMetricsRow` (6836) · `_perdidaAnormal` (2108) · `_persistLocal` (3018) · `_recFilters` (7297) · `_renderLdCopies` (7470) · `_renderRecAccountsPixels` (7306) · `_renderRecDolores` (7719) · `_renderRecEnfoques` (7610) · `_renderRecEquipo` (7657) · `_renderRecLandings` (7338) · `_renderRecPixelsOnly` (7273) · `_renderRecRecursos` (7386) · `_reportarConflictos` (2400) · `_rowStats` (6829) · `_rowToMetrics` (6820) · `_safePullFromCloud` (2591) · `_setSyncStatus` (2583) · `_showLoginScreen` (2639) · `_stageAtInPeriod` (3726) · `_stampStageChange` (5101) · `_stripBlobs` (2969) · `_stripForClone` (7227) · `_stripPasswords` (2548) · `_updateSelBar` (3236) · `_uploadToStorage` (3091) · `addAngleFromModal` (5470) · `addCostCapRow` (7776) · `addGasto` (3179) · `addLdCopy` (7497) · `addPainFromModal` (5503) · `addProduct` (3197) · `addRefLink` (5582) · `analyzeSheet` (4337) · `applyFilters` (3649) · `applyLoginLogo` (3145) · `applyLoginScreenState` (3158) · `applyLogo` (3113) · `applyRoleTabs` (2797) · `applySession` (2698) · `applyTabularMap` (4420) · `autoCalcRevenue` (6095) · `calcCostCap` (7768) · `calcCreativoProfit` (6374) · `calcDirty` (3055) · `canAccess` (2806) · `ccDecision` (7849) · `clearCreativoThumb` (5574) · `clearErrorLog` (1984) · `clearHistory` (4231) · `clearProducts` (3196) · `clearProductSelection` (3267) · `closeModal` (7242) · `compareWeeks` (4543) · `copiarErrorLog` (8156) · `copyLandingCopy` (7553) · `copyLandingSeg` (7558) · `copyToClipboard` (7512) · `crDecision` (6505) · `crSemaforo` (6424) · `defaultHistory` (2884) · `defaultProducts` (2869) · `defaultSemaforo` (2897) · `defaultState` (2816) · `deleteAdAccount` (8219) · `deleteCC` (8029) · `deleteCreativo` (7237) · `deleteDolorItem` (7740) · `deleteEnfoque` (7645) · `deleteLanding` (7579) · `deleteMeta` (4011) · `deletePixel` (7445) · `deleteRecurso` (7606) · `deleteSelectedProducts` (3278) · `deleteSemana` (4226) · `deleteTeamMember` (7688) · `deleteUser` (8498) · `deleteVersion` (8258) · `detectPlatform` (5615) · `doForgotPassword` (2724) · `doLogin` (2666) · `doLogout` (2690) · `doUpdatePassword` (2741) · `dragCard` (4861) · `dropCard` (4941) · `duplicateCreativo` (7209) · `duplicateProduct` (3375) · `editUser` (8472) · `esc` (2003) · `escJs` (2015) · `exportCCToCSV` (8031) · `exportJSON` (8307) · `getBaseName` (6126) · `getDateRange` (4642) · `getEcuadorShare` (3466) · `getErrorLog` (1981) · `getEscaladoCandidates` (3801) · `getEscaladoStrategy` (3800) · `getFilteredCreativos` (4660) · `getFilteredHistory` (3632) · `getProductCpaTargets` (6110) · `getStatusCls` (5430) · `getStatusLabel` (5431) · `getTrafficCpaTargets` (6130) · `handleXlDrop` (4292) · `handleXlFile` (4288) · `importJSON` (8315) · `init` (8336) · `isFilterActive` (3645) · `loadCreativoFile` (5570) · `loadCreativoFiles` (5517) · `loadCreativoRefs` (5592) · `loadDefaultProducts` (3195) · `loadSheetByIdx` (4322) · `loadState` (2912) · `logError` (1955) · `markDeleted` (2409) · `moveCard` (4986) · `moveThenClose` (5823) · `onAngleSel` (5460) · `onCrAdAccountChange` (7762) · `onCrPixelChange` (7755) · `onHomeDateChange` (3787) · `onPainSel` (5497) · `onStageChange` (5728) · `onTestTypeChange` (5089) · `openAdAccountModal` (8189) · `openCampaignCreativoModal` (5063) · `openCreativoModal` (5983) · `openDetailModal` (5892) · `openDolorModal` (7729) · `openEnfoqueModal` (7626) · `openLandingModal` (7448) · `openMetaForm` (3971) · `openPixelModal` (7419) · `openRecursoModal` (7582) · `openTeamModal` (7673) · `openUserModal` (8434) · `persistState` (3028) · `populateAngleSel` (5441) · `populateCompareSelects` (4527) · `populateCreativoFilterProduct` (4701) · `populateCrPixels` (7747) · `populatePainSel` (5484) · `populateSimProduct` (3541) · `populateTeamSelects` (7694) · `previewCreativoLink` (5665) · `processXlFile` (4301) · `recalc` (3386) · `removeCreativoFile` (5541) · `removeCreativoRef` (5610) · `removeGasto` (3184) · `removeLdCopy` (7503) · `removeLoginLogo` (3139) · `removeProduct` (3201) · `renderAdAccounts` (8170) · `renderConfig` (8085) · `renderConfigMetas` (4018) · `renderConfirmForm` (4449) · `renderCostCaps` (7886) · `renderCostCapSummary` (7944) · `renderCountryDist` (3477) · `renderCreativosSummary` (5338) · `renderCreativosTable` (5234) · `renderDashboard` (4084) · `renderErrorLog` (8114) · `renderEscaladoStrategyForm` (4034) · `renderEscaladoSugeridos` (7865) · `renderFilesGrid` (5548) · `renderGastos` (3168) · `renderGlossary` (8274) · `renderGroupedView` (5112) · `renderHistory` (4200) · `renderHistoryCharts` (4236) · `renderHome` (3828) · `renderJBSteps` (8045) · `renderKanban` (4722) · `renderKVMapper` (4355) · `renderLandingSuggest` (7517) · `renderLinkedCreativos` (7823) · `renderModalFlowActions` (5787) · `renderPedidosChart` (4134) · `renderProducts` (3326) · `renderRankings` (5370) · `renderRecursos` (7263) · `renderRefsGrid` (5625) · `renderRevenueChart` (4117) · `renderSemaforo` (4153) · `renderSemaforoConfig` (8263) · `renderTabularMapper` (4374) · `renderUsersList` (8407) · `renderVersions` (8225) · `requireAdmin` (2537) · `resetAll` (8329) · `resetFilters` (3660) · `restoreVersion` (8247) · `runSimulator` (3548) · `safeSrc` (2039) · `safeUrl` (2027) · `saveAdAccount` (8201) · `saveCreativo` (7073) · `saveEnfoque` (7635) · `saveEscaladoStrategy` (4068) · `saveFromXl` (4495) · `saveLanding` (7563) · `saveMeta` (3993) · `savePixel` (7436) · `saveProject` (8302) · `saveRecurso` (7597) · `saveSemana` (4173) · `saveToCloud` (2421) · `saveUser` (8474) · `saveVersion` (8239) · `semDot` (7033) · `sendToCostCap` (7787) · `setColSort` (5212) · `setDatePreset` (4633) · `setPreset` (3668) · `showCampaignDrilldown` (6904) · `showCreativoAnalysis` (6512) · `showForgotPassword` (2655) · `showLoginForm` (2648) · `showSemaforoTooltip` (6992) · `showTab` (3065) · `showThumbPreview` (5651) · `showToast` (2960) · `showValidationBanner` (4957) · `startAutoSync` (2193) · `startRealtimeSync` (2605) · `switchRecTab` (7254) · `syncAllMetrics` (6171) · `syncCampaignFromDrill` (6843) · `syncFromCloud` (2121) · `syncMetaMetrics` (6258) · `toggleAllProducts` (3257) · `toggleProductSelect` (3252) · `totalGastosFijos` (3192) · `uid` (3060) · `updateCC` (8026) · `updateCompanyName` (3122) · `updateCountry` (3527) · `updateDashCascade` (3615) · `updateDistMethod` (3532) · `updateFilterSelects` (3689) · `updateGasto` (3188) · `updateManualPct` (3537) · `updateProdStatusBadge` (7716) · `updateProduct` (3225) · `updateUserBadge` (2783) · `uploadLoginLogo` (3129) · `uploadLogo` (3104) · `uploadProductImg` (3366) · `validateIdeaSave` (7039) · `validateStageTransition` (4862) · `xlMatchField` (4329)
