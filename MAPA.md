# Mapa de `index.html`

> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:
> ```bash
> node scripts/mapa.js
> ```

Estado: **8493 líneas**, **282 funciones**, **58 secciones**, 108 usos de `innerHTML`, 327 handlers inline.

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
| 3060 | NAV | 1 |
| 3085 | STORAGE UPLOAD | 1 |
| 3099 | LOGO | 7 |
| 3163 | GASTOS FIJOS | 5 |
| 3190 | PRODUCTS | 15 |
| 3447 | Phase 4: country distribution & simulator | 7 |
| 3596 | end Phase 4 | 1 |
| 3612 | FILTERS | 6 |
| 3688 | DASHBOARD | 0 |
| 3689 | HOME / INICIO EJECUTIVO | 20 |
| 4155 | WEEKLY HISTORY | 5 |
| 4248 | EXCEL UPLOAD (Phase 5) | 11 |
| 4509 | COMPARADOR | 2 |
| 4602 | KANBAN | 16 |
| 5094 | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO | 9 |
| 5416 | CREATIVO MODAL | 0 |
| 5423 | Angle management | 3 |
| 5466 | Punto de dolor | 3 |
| 5499 | Multi-file upload | 5 |
| 5564 | Referencias del creador (inspiración, no creativo final) | 7 |
| 5689 | STAGE LOGIC | 13 |
| 6430 | 🔴 ROJO — parar urgente | 0 |
| 6456 | 🟢 VERDE — va bien | 0 |
| 6470 | 🟡 AMARILLO — observar | 2 |
| 6504 | Fuentes de datos | 0 |
| 6528 | Helpers visuales | 0 |
| 6541 | 1. EVALUACIÓN DE RENTABILIDAD | 0 |
| 6589 | 2. EVALUACIÓN DE TRÁFICO | 0 |
| 6641 | 3. DIAGNÓSTICO CREATIVO | 0 |
| 6653 | 4. MÉTRICAS FALTANTES | 0 |
| 6662 | 5. RESUMEN EJECUTIVO y ACCIÓN | 0 |
| 6801 | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS | 13 |
| 7231 | RECURSOS OPERATIVOS | 7 |
| 7401 | Pixel CRUD | 3 |
| 7430 | Landing CRUD | 1 |
| 7452 | Copies por landing (máx 5) | 10 |
| 7564 | Recurso CRUD | 3 |
| 7591 | Enfoques creativos | 4 |
| 7634 | Equipo | 5 |
| 7701 | Puntos de dolor | 3 |
| 7729 | Pixel/Landing en formulario de creativo | 3 |
| 7750 | COST CAP | 12 |
| 8067 | CONFIG | 1 |
| 8096 | DIAGNÓSTICO | 2 |
| 8150 | AD ACCOUNTS | 10 |
| 8284 | SAVE PROJECT | 4 |
| 8318 | INIT | 2 |
| 8389 | USER MANAGEMENT | 5 |

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
- `loadState()` — línea 2912, 44 líneas
- `showToast(msg, type='success')` — línea 2956, 9 líneas
- `_stripBlobs(obj)` — línea 2965, 11 líneas
- `_autoSnapshot()` — línea 2976, 25 líneas
- `_leanState(src, aggressive)` — línea 3001, 13 líneas
- `_persistLocal()` — línea 3014, 10 líneas
- `async persistState()` — línea 3024, 27 líneas
- `calcDirty()` — línea 3051, 5 líneas
- `uid()` — línea 3056, 5 líneas

### NAV

- `showTab(name)` — línea 3061, 26 líneas

### STORAGE UPLOAD

- `async _uploadToStorage(file, folder)` — línea 3087, 13 líneas

### LOGO

- `async uploadLogo(input)` — línea 3100, 9 líneas
- `applyLogo()` — línea 3109, 9 líneas
- `updateCompanyName(v)` — línea 3118, 7 líneas
- `async uploadLoginLogo(input)` — línea 3125, 10 líneas
- `removeLoginLogo()` — línea 3135, 6 líneas
- `applyLoginLogo()` — línea 3141, 13 líneas
- `applyLoginScreenState()` — línea 3154, 10 líneas

### GASTOS FIJOS

- `renderGastos()` — línea 3164, 11 líneas
- `addGasto()` — línea 3175, 5 líneas
- `removeGasto(id)` — línea 3180, 4 líneas
- `updateGasto(id, val)` — línea 3184, 4 líneas
- `totalGastosFijos()` — línea 3188, 3 líneas

### PRODUCTS

- `loadDefaultProducts()` — línea 3191, 1 líneas
- `clearProducts()` — línea 3192, 1 líneas
- `addProduct()` — línea 3193, 4 líneas
- `removeProduct(id)` — línea 3197, 24 líneas
- `updateProduct(id, field, val)` — línea 3221, 11 líneas
- `_updateSelBar()` — línea 3232, 16 líneas
- `toggleProductSelect(id, checked)` — línea 3248, 5 líneas
- `toggleAllProducts(checked)` — línea 3253, 10 líneas
- `clearProductSelection()` — línea 3263, 11 líneas
- `deleteSelectedProducts()` — línea 3274, 13 líneas
- `_initProductDrag(tbody)` — línea 3287, 24 líneas
- `renderProducts()` — línea 3311, 38 líneas
- `async uploadProductImg(id, input)` — línea 3349, 9 líneas
- `duplicateProduct(id)` — línea 3358, 11 líneas
- `recalc()` — línea 3369, 80 líneas

### Phase 4: country distribution & simulator

- `getEcuadorShare()` — línea 3449, 11 líneas
- `renderCountryDist(gfTotal, pedidos)` — línea 3460, 50 líneas
- `updateCountry(id, field, val)` — línea 3510, 5 líneas
- `updateDistMethod(val)` — línea 3515, 5 líneas
- `updateManualPct(id, val)` — línea 3520, 4 líneas
- `populateSimProduct()` — línea 3524, 7 líneas
- `runSimulator()` — línea 3531, 67 líneas

### end Phase 4

- `updateDashCascade(price,mv,md,me,mop,cpao)` — línea 3598, 17 líneas

### FILTERS

- `getFilteredHistory()` — línea 3615, 13 líneas
- `isFilterActive()` — línea 3628, 4 líneas
- `applyFilters()` — línea 3632, 11 líneas
- `resetFilters()` — línea 3643, 8 líneas
- `setPreset(p)` — línea 3651, 21 líneas
- `updateFilterSelects()` — línea 3672, 30 líneas

### HOME / INICIO EJECUTIVO

- `_metaPeriodStart(periodo)` — línea 3702, 7 líneas
- `_stageAtInPeriod(c, stage, start)` — línea 3709, 6 líneas
- `_metaProgress(meta)` — línea 3715, 36 líneas
- `_homeRange()` — línea 3751, 12 líneas
- `_inHomeRange(iso, r)` — línea 3763, 7 líneas
- `onHomeDateChange()` — línea 3770, 9 líneas
- `_escaladoDefaults()` — línea 3779, 4 líneas
- `getEscaladoStrategy()` — línea 3783, 1 líneas
- `getEscaladoCandidates()` — línea 3784, 27 líneas
- `renderHome()` — línea 3811, 143 líneas
- `openMetaForm()` — línea 3954, 22 líneas
- `saveMeta()` — línea 3976, 18 líneas
- `deleteMeta(id)` — línea 3994, 7 líneas
- `renderConfigMetas()` — línea 4001, 16 líneas
- `renderEscaladoStrategyForm()` — línea 4017, 34 líneas
- `saveEscaladoStrategy()` — línea 4051, 16 líneas
- `renderDashboard()` — línea 4067, 33 líneas
- `renderRevenueChart(hist)` — línea 4100, 17 líneas
- `renderPedidosChart(hist)` — línea 4117, 19 líneas
- `renderSemaforo()` — línea 4136, 20 líneas

### WEEKLY HISTORY

- `saveSemana()` — línea 4156, 27 líneas
- `renderHistory()` — línea 4183, 26 líneas
- `deleteSemana(id)` — línea 4209, 5 líneas
- `clearHistory()` — línea 4214, 5 líneas
- `renderHistoryCharts()` — línea 4219, 52 líneas

### EXCEL UPLOAD (Phase 5)

- `handleXlFile(input)` — línea 4271, 4 líneas
- `handleXlDrop(e)` — línea 4275, 9 líneas
- `processXlFile(file)` — línea 4284, 21 líneas
- `loadSheetByIdx(i)` — línea 4305, 7 líneas
- `xlMatchField(cellStr)` — línea 4312, 8 líneas
- `analyzeSheet(sheetName, data)` — línea 4320, 18 líneas
- `renderKVMapper(sheetName, data)` — línea 4338, 19 líneas
- `renderTabularMapper(sheetName, data, headerRowIdx, dataRows)` — línea 4357, 46 líneas
- `applyTabularMap()` — línea 4403, 29 líneas
- `renderConfirmForm(sheetName, det)` — línea 4432, 46 líneas
- `saveFromXl()` — línea 4478, 32 líneas

### COMPARADOR

- `populateCompareSelects()` — línea 4510, 16 líneas
- `compareWeeks()` — línea 4526, 90 líneas

### KANBAN

- `setDatePreset(preset)` — línea 4616, 9 líneas
- `getDateRange()` — línea 4625, 18 líneas
- `getFilteredCreativos(opts)` — línea 4643, 41 líneas
- `populateCreativoFilterProduct()` — línea 4684, 21 líneas
- `renderKanban()` — línea 4705, 139 líneas
- `dragCard(e, id)` — línea 4844, 1 líneas
- `validateStageTransition(c, toStatus)` — línea 4845, 79 líneas
- `dropCard(e, colId)` — línea 4924, 16 líneas
- `showValidationBanner(missing, colLabel)` — línea 4940, 29 líneas
- `moveCard(id, toStatus)` — línea 4969, 46 líneas
- `_metaStatusInfo(raw)` — línea 5015, 13 líneas
- `_fmtDateTime(iso)` — línea 5028, 6 líneas
- `_daysSince(iso)` — línea 5034, 12 líneas
- `openCampaignCreativoModal()` — línea 5046, 26 líneas
- `onTestTypeChange()` — línea 5072, 12 líneas
- `_stampStageChange(c, toStatus)` — línea 5084, 11 líneas

### VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO

- `renderGroupedView()` — línea 5095, 84 líneas
- `_groupRecommendation(g, t, nivel)` — línea 5179, 16 líneas
- `setColSort(key)` — línea 5195, 14 líneas
- `_crFilterMatch(c)` — línea 5209, 8 líneas
- `renderCreativosTable()` — línea 5217, 104 líneas
- `renderCreativosSummary()` — línea 5321, 32 líneas
- `renderRankings()` — línea 5353, 60 líneas
- `getStatusCls(s)` — línea 5413, 1 líneas
- `getStatusLabel(s)` — línea 5414, 10 líneas

### Angle management

- `populateAngleSel(current)` — línea 5424, 19 líneas
- `onAngleSel(sel)` — línea 5443, 10 líneas
- `addAngleFromModal()` — línea 5453, 14 líneas

### Punto de dolor

- `populatePainSel(current)` — línea 5467, 13 líneas
- `onPainSel(sel)` — línea 5480, 6 líneas
- `addPainFromModal()` — línea 5486, 14 líneas

### Multi-file upload

- `loadCreativoFiles(input)` — línea 5500, 24 líneas
- `removeCreativoFile(idx)` — línea 5524, 7 líneas
- `renderFilesGrid()` — línea 5531, 22 líneas
- `loadCreativoFile(input)` — línea 5553, 4 líneas
- `clearCreativoThumb()` — línea 5557, 8 líneas

### Referencias del creador (inspiración, no creativo final)

- `addRefLink()` — línea 5565, 10 líneas
- `loadCreativoRefs(input)` — línea 5575, 18 líneas
- `removeCreativoRef(idx)` — línea 5593, 5 líneas
- `detectPlatform(url)` — línea 5598, 10 líneas
- `renderRefsGrid()` — línea 5608, 26 líneas
- `showThumbPreview(src, type, name)` — línea 5634, 14 líneas
- `previewCreativoLink()` — línea 5648, 63 líneas

### STAGE LOGIC

- `onStageChange()` — línea 5711, 59 líneas
- `renderModalFlowActions()` — línea 5770, 36 líneas
- `moveThenClose(toStatus)` — línea 5806, 69 líneas
- `openDetailModal(id)` — línea 5875, 91 líneas
- `openCreativoModal(id)` — línea 5966, 112 líneas
- `autoCalcRevenue()` — línea 6078, 15 líneas
- `getProductCpaTargets(productName)` — línea 6093, 16 líneas
- `getBaseName(productName)` — línea 6109, 4 líneas
- `getTrafficCpaTargets(productName)` — línea 6113, 41 líneas
- `async syncAllMetrics()` — línea 6154, 87 líneas
- `async syncMetaMetrics()` — línea 6241, 116 líneas
- `calcCreativoProfit()` — línea 6357, 50 líneas
- `crSemaforo(m, targets)` — línea 6407, 81 líneas

### 🟡 AMARILLO — observar

- `crDecision(m, targets)` — línea 6488, 7 líneas
- `showCreativoAnalysis(id)` — línea 6495, 308 líneas

### VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS

- `_rowToMetrics(r)` — línea 6803, 9 líneas
- `_rowStats(r)` — línea 6812, 7 líneas
- `_miniMetricsRow(g)` — línea 6819, 7 líneas
- `async syncCampaignFromDrill(id, btnEl)` — línea 6826, 61 líneas
- `showCampaignDrilldown(id)` — línea 6887, 88 líneas
- `showSemaforoTooltip(e)` — línea 6975, 41 líneas
- `semDot(m, size=14)` — línea 7016, 6 líneas
- `validateIdeaSave()` — línea 7022, 34 líneas
- `saveCreativo()` — línea 7056, 136 líneas
- `duplicateCreativo(id)` — línea 7192, 18 líneas
- `_stripForClone(c)` — línea 7210, 10 líneas
- `deleteCreativo(id)` — línea 7220, 5 líneas
- `closeModal(id)` — línea 7225, 12 líneas

### RECURSOS OPERATIVOS

- `switchRecTab(tab)` — línea 7237, 9 líneas
- `renderRecursos()` — línea 7246, 10 líneas
- `_renderRecPixelsOnly()` — línea 7256, 24 líneas
- `_recFilters()` — línea 7280, 9 líneas
- `_renderRecAccountsPixels()` — línea 7289, 32 líneas
- `_renderRecLandings()` — línea 7321, 48 líneas
- `_renderRecRecursos()` — línea 7369, 33 líneas

### Pixel CRUD

- `openPixelModal(id, preAccountId)` — línea 7402, 17 líneas
- `savePixel()` — línea 7419, 9 líneas
- `deletePixel(id)` — línea 7428, 3 líneas

### Landing CRUD

- `openLandingModal(id)` — línea 7431, 22 líneas

### Copies por landing (máx 5)

- `_renderLdCopies(copies)` — línea 7453, 18 líneas
- `_collectLdCopies()` — línea 7471, 9 líneas
- `addLdCopy()` — línea 7480, 6 líneas
- `removeLdCopy(i)` — línea 7486, 9 líneas
- `copyToClipboard(txt)` — línea 7495, 5 líneas
- `renderLandingSuggest()` — línea 7500, 36 líneas
- `copyLandingCopy(landingId, idx)` — línea 7536, 5 líneas
- `copyLandingSeg(landingId)` — línea 7541, 5 líneas
- `saveLanding()` — línea 7546, 16 líneas
- `deleteLanding(id)` — línea 7562, 3 líneas

### Recurso CRUD

- `openRecursoModal(id)` — línea 7565, 15 líneas
- `saveRecurso()` — línea 7580, 9 líneas
- `deleteRecurso(id)` — línea 7589, 4 líneas

### Enfoques creativos

- `_renderRecEnfoques()` — línea 7593, 16 líneas
- `openEnfoqueModal(id)` — línea 7609, 9 líneas
- `saveEnfoque(e)` — línea 7618, 10 líneas
- `deleteEnfoque(id)` — línea 7628, 12 líneas

### Equipo

- `_renderRecEquipo()` — línea 7640, 16 líneas
- `openTeamModal(id)` — línea 7656, 15 líneas
- `deleteTeamMember(id)` — línea 7671, 6 líneas
- `populateTeamSelects()` — línea 7677, 22 líneas
- `updateProdStatusBadge()` — línea 7699, 3 líneas

### Puntos de dolor

- `_renderRecDolores()` — línea 7702, 10 líneas
- `openDolorModal()` — línea 7712, 11 líneas
- `deleteDolorItem(idx)` — línea 7723, 7 líneas

### Pixel/Landing en formulario de creativo

- `populateCrPixels(adAccountId)` — línea 7730, 8 líneas
- `onCrPixelChange()` — línea 7738, 7 líneas
- `onCrAdAccountChange()` — línea 7745, 6 líneas

### COST CAP

- `calcCostCap()` — línea 7751, 8 líneas
- `addCostCapRow()` — línea 7759, 11 líneas
- `sendToCostCap(creativoId)` — línea 7770, 36 líneas
- `renderLinkedCreativos()` — línea 7806, 26 líneas
- `ccDecision(r, be)` — línea 7832, 16 líneas
- `renderEscaladoSugeridos()` — línea 7848, 21 líneas
- `renderCostCaps()` — línea 7869, 58 líneas
- `renderCostCapSummary(be, avgPrice)` — línea 7927, 82 líneas
- `updateCC(i, field, val)` — línea 8009, 3 líneas
- `deleteCC(i)` — línea 8012, 2 líneas
- `exportCCToCSV()` — línea 8014, 14 líneas
- `renderJBSteps()` — línea 8028, 40 líneas

### CONFIG

- `renderConfig()` — línea 8068, 29 líneas

### DIAGNÓSTICO

- `renderErrorLog()` — línea 8097, 42 líneas
- `copiarErrorLog()` — línea 8139, 14 líneas

### AD ACCOUNTS

- `renderAdAccounts()` — línea 8153, 19 líneas
- `openAdAccountModal(id)` — línea 8172, 12 líneas
- `saveAdAccount()` — línea 8184, 18 líneas
- `deleteAdAccount(id)` — línea 8202, 6 líneas
- `renderVersions()` — línea 8208, 14 líneas
- `saveVersion()` — línea 8222, 8 líneas
- `restoreVersion(id)` — línea 8230, 11 líneas
- `deleteVersion(id)` — línea 8241, 5 líneas
- `renderSemaforoConfig()` — línea 8246, 11 líneas
- `renderGlossary()` — línea 8257, 28 líneas

### SAVE PROJECT

- `saveProject()` — línea 8285, 5 líneas
- `exportJSON()` — línea 8290, 8 líneas
- `importJSON(input)` — línea 8298, 14 líneas
- `resetAll()` — línea 8312, 7 líneas

### INIT

- `init()` — línea 8319, 45 líneas
- `_isDirty()` — línea 8364, 26 líneas

### USER MANAGEMENT

- `renderUsersList()` — línea 8390, 27 líneas
- `openUserModal(id)` — línea 8417, 38 líneas
- `editUser(id)` — línea 8455, 2 líneas
- `saveUser()` — línea 8457, 24 líneas
- `deleteUser(id)` — línea 8481, 12 líneas

## Índice alfabético

`_autoSnapshot` (2976) · `_collectLdCopies` (7471) · `_crFilterMatch` (5209) · `_dataScore` (2088) · `_daysSince` (5034) · `_enterApp` (2565) · `_escaladoDefaults` (3779) · `_fmtDateTime` (5028) · `_getUserProfile` (2559) · `_groupRecommendation` (5179) · `_guardarBase` (2327) · `_hash` (2305) · `_hasPendingUpload` (2518) · `_homeRange` (3751) · `_huellaLista` (2313) · `_inHomeRange` (3763) · `_initProductDrag` (3287) · `_isDirty` (8364) · `_itemScore` (2074) · `_leanState` (3001) · `_leerBase` (2334) · `_markPendingUpload` (2514) · `_mergeArraysById` (2368) · `_mergeDefaultUsers` (2048) · `_mergeItem` (2341) · `_metaPeriodStart` (3702) · `_metaProgress` (3715) · `_metaStatusInfo` (5015) · `_miniMetricsRow` (6819) · `_perdidaAnormal` (2108) · `_persistLocal` (3014) · `_recFilters` (7280) · `_renderLdCopies` (7453) · `_renderRecAccountsPixels` (7289) · `_renderRecDolores` (7702) · `_renderRecEnfoques` (7593) · `_renderRecEquipo` (7640) · `_renderRecLandings` (7321) · `_renderRecPixelsOnly` (7256) · `_renderRecRecursos` (7369) · `_reportarConflictos` (2400) · `_rowStats` (6812) · `_rowToMetrics` (6803) · `_safePullFromCloud` (2591) · `_setSyncStatus` (2583) · `_showLoginScreen` (2639) · `_stageAtInPeriod` (3709) · `_stampStageChange` (5084) · `_stripBlobs` (2965) · `_stripForClone` (7210) · `_stripPasswords` (2548) · `_updateSelBar` (3232) · `_uploadToStorage` (3087) · `addAngleFromModal` (5453) · `addCostCapRow` (7759) · `addGasto` (3175) · `addLdCopy` (7480) · `addPainFromModal` (5486) · `addProduct` (3193) · `addRefLink` (5565) · `analyzeSheet` (4320) · `applyFilters` (3632) · `applyLoginLogo` (3141) · `applyLoginScreenState` (3154) · `applyLogo` (3109) · `applyRoleTabs` (2797) · `applySession` (2698) · `applyTabularMap` (4403) · `autoCalcRevenue` (6078) · `calcCostCap` (7751) · `calcCreativoProfit` (6357) · `calcDirty` (3051) · `canAccess` (2806) · `ccDecision` (7832) · `clearCreativoThumb` (5557) · `clearErrorLog` (1984) · `clearHistory` (4214) · `clearProducts` (3192) · `clearProductSelection` (3263) · `closeModal` (7225) · `compareWeeks` (4526) · `copiarErrorLog` (8139) · `copyLandingCopy` (7536) · `copyLandingSeg` (7541) · `copyToClipboard` (7495) · `crDecision` (6488) · `crSemaforo` (6407) · `defaultHistory` (2884) · `defaultProducts` (2869) · `defaultSemaforo` (2897) · `defaultState` (2816) · `deleteAdAccount` (8202) · `deleteCC` (8012) · `deleteCreativo` (7220) · `deleteDolorItem` (7723) · `deleteEnfoque` (7628) · `deleteLanding` (7562) · `deleteMeta` (3994) · `deletePixel` (7428) · `deleteRecurso` (7589) · `deleteSelectedProducts` (3274) · `deleteSemana` (4209) · `deleteTeamMember` (7671) · `deleteUser` (8481) · `deleteVersion` (8241) · `detectPlatform` (5598) · `doForgotPassword` (2724) · `doLogin` (2666) · `doLogout` (2690) · `doUpdatePassword` (2741) · `dragCard` (4844) · `dropCard` (4924) · `duplicateCreativo` (7192) · `duplicateProduct` (3358) · `editUser` (8455) · `esc` (2003) · `escJs` (2015) · `exportCCToCSV` (8014) · `exportJSON` (8290) · `getBaseName` (6109) · `getDateRange` (4625) · `getEcuadorShare` (3449) · `getErrorLog` (1981) · `getEscaladoCandidates` (3784) · `getEscaladoStrategy` (3783) · `getFilteredCreativos` (4643) · `getFilteredHistory` (3615) · `getProductCpaTargets` (6093) · `getStatusCls` (5413) · `getStatusLabel` (5414) · `getTrafficCpaTargets` (6113) · `handleXlDrop` (4275) · `handleXlFile` (4271) · `importJSON` (8298) · `init` (8319) · `isFilterActive` (3628) · `loadCreativoFile` (5553) · `loadCreativoFiles` (5500) · `loadCreativoRefs` (5575) · `loadDefaultProducts` (3191) · `loadSheetByIdx` (4305) · `loadState` (2912) · `logError` (1955) · `markDeleted` (2409) · `moveCard` (4969) · `moveThenClose` (5806) · `onAngleSel` (5443) · `onCrAdAccountChange` (7745) · `onCrPixelChange` (7738) · `onHomeDateChange` (3770) · `onPainSel` (5480) · `onStageChange` (5711) · `onTestTypeChange` (5072) · `openAdAccountModal` (8172) · `openCampaignCreativoModal` (5046) · `openCreativoModal` (5966) · `openDetailModal` (5875) · `openDolorModal` (7712) · `openEnfoqueModal` (7609) · `openLandingModal` (7431) · `openMetaForm` (3954) · `openPixelModal` (7402) · `openRecursoModal` (7565) · `openTeamModal` (7656) · `openUserModal` (8417) · `persistState` (3024) · `populateAngleSel` (5424) · `populateCompareSelects` (4510) · `populateCreativoFilterProduct` (4684) · `populateCrPixels` (7730) · `populatePainSel` (5467) · `populateSimProduct` (3524) · `populateTeamSelects` (7677) · `previewCreativoLink` (5648) · `processXlFile` (4284) · `recalc` (3369) · `removeCreativoFile` (5524) · `removeCreativoRef` (5593) · `removeGasto` (3180) · `removeLdCopy` (7486) · `removeLoginLogo` (3135) · `removeProduct` (3197) · `renderAdAccounts` (8153) · `renderConfig` (8068) · `renderConfigMetas` (4001) · `renderConfirmForm` (4432) · `renderCostCaps` (7869) · `renderCostCapSummary` (7927) · `renderCountryDist` (3460) · `renderCreativosSummary` (5321) · `renderCreativosTable` (5217) · `renderDashboard` (4067) · `renderErrorLog` (8097) · `renderEscaladoStrategyForm` (4017) · `renderEscaladoSugeridos` (7848) · `renderFilesGrid` (5531) · `renderGastos` (3164) · `renderGlossary` (8257) · `renderGroupedView` (5095) · `renderHistory` (4183) · `renderHistoryCharts` (4219) · `renderHome` (3811) · `renderJBSteps` (8028) · `renderKanban` (4705) · `renderKVMapper` (4338) · `renderLandingSuggest` (7500) · `renderLinkedCreativos` (7806) · `renderModalFlowActions` (5770) · `renderPedidosChart` (4117) · `renderProducts` (3311) · `renderRankings` (5353) · `renderRecursos` (7246) · `renderRefsGrid` (5608) · `renderRevenueChart` (4100) · `renderSemaforo` (4136) · `renderSemaforoConfig` (8246) · `renderTabularMapper` (4357) · `renderUsersList` (8390) · `renderVersions` (8208) · `requireAdmin` (2537) · `resetAll` (8312) · `resetFilters` (3643) · `restoreVersion` (8230) · `runSimulator` (3531) · `safeSrc` (2039) · `safeUrl` (2027) · `saveAdAccount` (8184) · `saveCreativo` (7056) · `saveEnfoque` (7618) · `saveEscaladoStrategy` (4051) · `saveFromXl` (4478) · `saveLanding` (7546) · `saveMeta` (3976) · `savePixel` (7419) · `saveProject` (8285) · `saveRecurso` (7580) · `saveSemana` (4156) · `saveToCloud` (2421) · `saveUser` (8457) · `saveVersion` (8222) · `semDot` (7016) · `sendToCostCap` (7770) · `setColSort` (5195) · `setDatePreset` (4616) · `setPreset` (3651) · `showCampaignDrilldown` (6887) · `showCreativoAnalysis` (6495) · `showForgotPassword` (2655) · `showLoginForm` (2648) · `showSemaforoTooltip` (6975) · `showTab` (3061) · `showThumbPreview` (5634) · `showToast` (2956) · `showValidationBanner` (4940) · `startAutoSync` (2193) · `startRealtimeSync` (2605) · `switchRecTab` (7237) · `syncAllMetrics` (6154) · `syncCampaignFromDrill` (6826) · `syncFromCloud` (2121) · `syncMetaMetrics` (6241) · `toggleAllProducts` (3253) · `toggleProductSelect` (3248) · `totalGastosFijos` (3188) · `uid` (3056) · `updateCC` (8009) · `updateCompanyName` (3118) · `updateCountry` (3510) · `updateDashCascade` (3598) · `updateDistMethod` (3515) · `updateFilterSelects` (3672) · `updateGasto` (3184) · `updateManualPct` (3520) · `updateProdStatusBadge` (7699) · `updateProduct` (3221) · `updateUserBadge` (2783) · `uploadLoginLogo` (3125) · `uploadLogo` (3100) · `uploadProductImg` (3349) · `validateIdeaSave` (7022) · `validateStageTransition` (4845) · `xlMatchField` (4312)
