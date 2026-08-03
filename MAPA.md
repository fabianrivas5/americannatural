# Mapa de `index.html`

> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:
> ```bash
> node scripts/mapa.js
> ```

Estado: **8525 líneas**, **283 funciones**, **58 secciones**, 108 usos de `innerHTML`, 327 handlers inline.

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
| 3479 | Phase 4: country distribution & simulator | 7 |
| 3628 | end Phase 4 | 1 |
| 3644 | FILTERS | 6 |
| 3720 | DASHBOARD | 0 |
| 3721 | HOME / INICIO EJECUTIVO | 20 |
| 4187 | WEEKLY HISTORY | 5 |
| 4280 | EXCEL UPLOAD (Phase 5) | 11 |
| 4541 | COMPARADOR | 2 |
| 4634 | KANBAN | 16 |
| 5126 | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO | 9 |
| 5448 | CREATIVO MODAL | 0 |
| 5455 | Angle management | 3 |
| 5498 | Punto de dolor | 3 |
| 5531 | Multi-file upload | 5 |
| 5596 | Referencias del creador (inspiración, no creativo final) | 7 |
| 5721 | STAGE LOGIC | 13 |
| 6462 | 🔴 ROJO — parar urgente | 0 |
| 6488 | 🟢 VERDE — va bien | 0 |
| 6502 | 🟡 AMARILLO — observar | 2 |
| 6536 | Fuentes de datos | 0 |
| 6560 | Helpers visuales | 0 |
| 6573 | 1. EVALUACIÓN DE RENTABILIDAD | 0 |
| 6621 | 2. EVALUACIÓN DE TRÁFICO | 0 |
| 6673 | 3. DIAGNÓSTICO CREATIVO | 0 |
| 6685 | 4. MÉTRICAS FALTANTES | 0 |
| 6694 | 5. RESUMEN EJECUTIVO y ACCIÓN | 0 |
| 6833 | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS | 13 |
| 7263 | RECURSOS OPERATIVOS | 7 |
| 7433 | Pixel CRUD | 3 |
| 7462 | Landing CRUD | 1 |
| 7484 | Copies por landing (máx 5) | 10 |
| 7596 | Recurso CRUD | 3 |
| 7623 | Enfoques creativos | 4 |
| 7666 | Equipo | 5 |
| 7733 | Puntos de dolor | 3 |
| 7761 | Pixel/Landing en formulario de creativo | 3 |
| 7782 | COST CAP | 12 |
| 8099 | CONFIG | 1 |
| 8128 | DIAGNÓSTICO | 2 |
| 8182 | AD ACCOUNTS | 10 |
| 8316 | SAVE PROJECT | 4 |
| 8350 | INIT | 2 |
| 8421 | USER MANAGEMENT | 5 |

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
- `_updateSelBar()` — línea 3236, 19 líneas
- `toggleProductSelect(id, checked)` — línea 3255, 7 líneas
- `toggleAllProducts(checked)` — línea 3262, 9 líneas
- `clearProductSelection()` — línea 3271, 11 líneas
- `deleteSelectedProducts()` — línea 3282, 22 líneas
- `_initProductDrag(tbody)` — línea 3304, 25 líneas
- `_ensureUniqueProductIds()` — línea 3329, 10 líneas
- `renderProducts()` — línea 3339, 42 líneas
- `async uploadProductImg(id, input)` — línea 3381, 9 líneas
- `duplicateProduct(id)` — línea 3390, 11 líneas
- `recalc()` — línea 3401, 80 líneas

### Phase 4: country distribution & simulator

- `getEcuadorShare()` — línea 3481, 11 líneas
- `renderCountryDist(gfTotal, pedidos)` — línea 3492, 50 líneas
- `updateCountry(id, field, val)` — línea 3542, 5 líneas
- `updateDistMethod(val)` — línea 3547, 5 líneas
- `updateManualPct(id, val)` — línea 3552, 4 líneas
- `populateSimProduct()` — línea 3556, 7 líneas
- `runSimulator()` — línea 3563, 67 líneas

### end Phase 4

- `updateDashCascade(price,mv,md,me,mop,cpao)` — línea 3630, 17 líneas

### FILTERS

- `getFilteredHistory()` — línea 3647, 13 líneas
- `isFilterActive()` — línea 3660, 4 líneas
- `applyFilters()` — línea 3664, 11 líneas
- `resetFilters()` — línea 3675, 8 líneas
- `setPreset(p)` — línea 3683, 21 líneas
- `updateFilterSelects()` — línea 3704, 30 líneas

### HOME / INICIO EJECUTIVO

- `_metaPeriodStart(periodo)` — línea 3734, 7 líneas
- `_stageAtInPeriod(c, stage, start)` — línea 3741, 6 líneas
- `_metaProgress(meta)` — línea 3747, 36 líneas
- `_homeRange()` — línea 3783, 12 líneas
- `_inHomeRange(iso, r)` — línea 3795, 7 líneas
- `onHomeDateChange()` — línea 3802, 9 líneas
- `_escaladoDefaults()` — línea 3811, 4 líneas
- `getEscaladoStrategy()` — línea 3815, 1 líneas
- `getEscaladoCandidates()` — línea 3816, 27 líneas
- `renderHome()` — línea 3843, 143 líneas
- `openMetaForm()` — línea 3986, 22 líneas
- `saveMeta()` — línea 4008, 18 líneas
- `deleteMeta(id)` — línea 4026, 7 líneas
- `renderConfigMetas()` — línea 4033, 16 líneas
- `renderEscaladoStrategyForm()` — línea 4049, 34 líneas
- `saveEscaladoStrategy()` — línea 4083, 16 líneas
- `renderDashboard()` — línea 4099, 33 líneas
- `renderRevenueChart(hist)` — línea 4132, 17 líneas
- `renderPedidosChart(hist)` — línea 4149, 19 líneas
- `renderSemaforo()` — línea 4168, 20 líneas

### WEEKLY HISTORY

- `saveSemana()` — línea 4188, 27 líneas
- `renderHistory()` — línea 4215, 26 líneas
- `deleteSemana(id)` — línea 4241, 5 líneas
- `clearHistory()` — línea 4246, 5 líneas
- `renderHistoryCharts()` — línea 4251, 52 líneas

### EXCEL UPLOAD (Phase 5)

- `handleXlFile(input)` — línea 4303, 4 líneas
- `handleXlDrop(e)` — línea 4307, 9 líneas
- `processXlFile(file)` — línea 4316, 21 líneas
- `loadSheetByIdx(i)` — línea 4337, 7 líneas
- `xlMatchField(cellStr)` — línea 4344, 8 líneas
- `analyzeSheet(sheetName, data)` — línea 4352, 18 líneas
- `renderKVMapper(sheetName, data)` — línea 4370, 19 líneas
- `renderTabularMapper(sheetName, data, headerRowIdx, dataRows)` — línea 4389, 46 líneas
- `applyTabularMap()` — línea 4435, 29 líneas
- `renderConfirmForm(sheetName, det)` — línea 4464, 46 líneas
- `saveFromXl()` — línea 4510, 32 líneas

### COMPARADOR

- `populateCompareSelects()` — línea 4542, 16 líneas
- `compareWeeks()` — línea 4558, 90 líneas

### KANBAN

- `setDatePreset(preset)` — línea 4648, 9 líneas
- `getDateRange()` — línea 4657, 18 líneas
- `getFilteredCreativos(opts)` — línea 4675, 41 líneas
- `populateCreativoFilterProduct()` — línea 4716, 21 líneas
- `renderKanban()` — línea 4737, 139 líneas
- `dragCard(e, id)` — línea 4876, 1 líneas
- `validateStageTransition(c, toStatus)` — línea 4877, 79 líneas
- `dropCard(e, colId)` — línea 4956, 16 líneas
- `showValidationBanner(missing, colLabel)` — línea 4972, 29 líneas
- `moveCard(id, toStatus)` — línea 5001, 46 líneas
- `_metaStatusInfo(raw)` — línea 5047, 13 líneas
- `_fmtDateTime(iso)` — línea 5060, 6 líneas
- `_daysSince(iso)` — línea 5066, 12 líneas
- `openCampaignCreativoModal()` — línea 5078, 26 líneas
- `onTestTypeChange()` — línea 5104, 12 líneas
- `_stampStageChange(c, toStatus)` — línea 5116, 11 líneas

### VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO

- `renderGroupedView()` — línea 5127, 84 líneas
- `_groupRecommendation(g, t, nivel)` — línea 5211, 16 líneas
- `setColSort(key)` — línea 5227, 14 líneas
- `_crFilterMatch(c)` — línea 5241, 8 líneas
- `renderCreativosTable()` — línea 5249, 104 líneas
- `renderCreativosSummary()` — línea 5353, 32 líneas
- `renderRankings()` — línea 5385, 60 líneas
- `getStatusCls(s)` — línea 5445, 1 líneas
- `getStatusLabel(s)` — línea 5446, 10 líneas

### Angle management

- `populateAngleSel(current)` — línea 5456, 19 líneas
- `onAngleSel(sel)` — línea 5475, 10 líneas
- `addAngleFromModal()` — línea 5485, 14 líneas

### Punto de dolor

- `populatePainSel(current)` — línea 5499, 13 líneas
- `onPainSel(sel)` — línea 5512, 6 líneas
- `addPainFromModal()` — línea 5518, 14 líneas

### Multi-file upload

- `loadCreativoFiles(input)` — línea 5532, 24 líneas
- `removeCreativoFile(idx)` — línea 5556, 7 líneas
- `renderFilesGrid()` — línea 5563, 22 líneas
- `loadCreativoFile(input)` — línea 5585, 4 líneas
- `clearCreativoThumb()` — línea 5589, 8 líneas

### Referencias del creador (inspiración, no creativo final)

- `addRefLink()` — línea 5597, 10 líneas
- `loadCreativoRefs(input)` — línea 5607, 18 líneas
- `removeCreativoRef(idx)` — línea 5625, 5 líneas
- `detectPlatform(url)` — línea 5630, 10 líneas
- `renderRefsGrid()` — línea 5640, 26 líneas
- `showThumbPreview(src, type, name)` — línea 5666, 14 líneas
- `previewCreativoLink()` — línea 5680, 63 líneas

### STAGE LOGIC

- `onStageChange()` — línea 5743, 59 líneas
- `renderModalFlowActions()` — línea 5802, 36 líneas
- `moveThenClose(toStatus)` — línea 5838, 69 líneas
- `openDetailModal(id)` — línea 5907, 91 líneas
- `openCreativoModal(id)` — línea 5998, 112 líneas
- `autoCalcRevenue()` — línea 6110, 15 líneas
- `getProductCpaTargets(productName)` — línea 6125, 16 líneas
- `getBaseName(productName)` — línea 6141, 4 líneas
- `getTrafficCpaTargets(productName)` — línea 6145, 41 líneas
- `async syncAllMetrics()` — línea 6186, 87 líneas
- `async syncMetaMetrics()` — línea 6273, 116 líneas
- `calcCreativoProfit()` — línea 6389, 50 líneas
- `crSemaforo(m, targets)` — línea 6439, 81 líneas

### 🟡 AMARILLO — observar

- `crDecision(m, targets)` — línea 6520, 7 líneas
- `showCreativoAnalysis(id)` — línea 6527, 308 líneas

### VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS

- `_rowToMetrics(r)` — línea 6835, 9 líneas
- `_rowStats(r)` — línea 6844, 7 líneas
- `_miniMetricsRow(g)` — línea 6851, 7 líneas
- `async syncCampaignFromDrill(id, btnEl)` — línea 6858, 61 líneas
- `showCampaignDrilldown(id)` — línea 6919, 88 líneas
- `showSemaforoTooltip(e)` — línea 7007, 41 líneas
- `semDot(m, size=14)` — línea 7048, 6 líneas
- `validateIdeaSave()` — línea 7054, 34 líneas
- `saveCreativo()` — línea 7088, 136 líneas
- `duplicateCreativo(id)` — línea 7224, 18 líneas
- `_stripForClone(c)` — línea 7242, 10 líneas
- `deleteCreativo(id)` — línea 7252, 5 líneas
- `closeModal(id)` — línea 7257, 12 líneas

### RECURSOS OPERATIVOS

- `switchRecTab(tab)` — línea 7269, 9 líneas
- `renderRecursos()` — línea 7278, 10 líneas
- `_renderRecPixelsOnly()` — línea 7288, 24 líneas
- `_recFilters()` — línea 7312, 9 líneas
- `_renderRecAccountsPixels()` — línea 7321, 32 líneas
- `_renderRecLandings()` — línea 7353, 48 líneas
- `_renderRecRecursos()` — línea 7401, 33 líneas

### Pixel CRUD

- `openPixelModal(id, preAccountId)` — línea 7434, 17 líneas
- `savePixel()` — línea 7451, 9 líneas
- `deletePixel(id)` — línea 7460, 3 líneas

### Landing CRUD

- `openLandingModal(id)` — línea 7463, 22 líneas

### Copies por landing (máx 5)

- `_renderLdCopies(copies)` — línea 7485, 18 líneas
- `_collectLdCopies()` — línea 7503, 9 líneas
- `addLdCopy()` — línea 7512, 6 líneas
- `removeLdCopy(i)` — línea 7518, 9 líneas
- `copyToClipboard(txt)` — línea 7527, 5 líneas
- `renderLandingSuggest()` — línea 7532, 36 líneas
- `copyLandingCopy(landingId, idx)` — línea 7568, 5 líneas
- `copyLandingSeg(landingId)` — línea 7573, 5 líneas
- `saveLanding()` — línea 7578, 16 líneas
- `deleteLanding(id)` — línea 7594, 3 líneas

### Recurso CRUD

- `openRecursoModal(id)` — línea 7597, 15 líneas
- `saveRecurso()` — línea 7612, 9 líneas
- `deleteRecurso(id)` — línea 7621, 4 líneas

### Enfoques creativos

- `_renderRecEnfoques()` — línea 7625, 16 líneas
- `openEnfoqueModal(id)` — línea 7641, 9 líneas
- `saveEnfoque(e)` — línea 7650, 10 líneas
- `deleteEnfoque(id)` — línea 7660, 12 líneas

### Equipo

- `_renderRecEquipo()` — línea 7672, 16 líneas
- `openTeamModal(id)` — línea 7688, 15 líneas
- `deleteTeamMember(id)` — línea 7703, 6 líneas
- `populateTeamSelects()` — línea 7709, 22 líneas
- `updateProdStatusBadge()` — línea 7731, 3 líneas

### Puntos de dolor

- `_renderRecDolores()` — línea 7734, 10 líneas
- `openDolorModal()` — línea 7744, 11 líneas
- `deleteDolorItem(idx)` — línea 7755, 7 líneas

### Pixel/Landing en formulario de creativo

- `populateCrPixels(adAccountId)` — línea 7762, 8 líneas
- `onCrPixelChange()` — línea 7770, 7 líneas
- `onCrAdAccountChange()` — línea 7777, 6 líneas

### COST CAP

- `calcCostCap()` — línea 7783, 8 líneas
- `addCostCapRow()` — línea 7791, 11 líneas
- `sendToCostCap(creativoId)` — línea 7802, 36 líneas
- `renderLinkedCreativos()` — línea 7838, 26 líneas
- `ccDecision(r, be)` — línea 7864, 16 líneas
- `renderEscaladoSugeridos()` — línea 7880, 21 líneas
- `renderCostCaps()` — línea 7901, 58 líneas
- `renderCostCapSummary(be, avgPrice)` — línea 7959, 82 líneas
- `updateCC(i, field, val)` — línea 8041, 3 líneas
- `deleteCC(i)` — línea 8044, 2 líneas
- `exportCCToCSV()` — línea 8046, 14 líneas
- `renderJBSteps()` — línea 8060, 40 líneas

### CONFIG

- `renderConfig()` — línea 8100, 29 líneas

### DIAGNÓSTICO

- `renderErrorLog()` — línea 8129, 42 líneas
- `copiarErrorLog()` — línea 8171, 14 líneas

### AD ACCOUNTS

- `renderAdAccounts()` — línea 8185, 19 líneas
- `openAdAccountModal(id)` — línea 8204, 12 líneas
- `saveAdAccount()` — línea 8216, 18 líneas
- `deleteAdAccount(id)` — línea 8234, 6 líneas
- `renderVersions()` — línea 8240, 14 líneas
- `saveVersion()` — línea 8254, 8 líneas
- `restoreVersion(id)` — línea 8262, 11 líneas
- `deleteVersion(id)` — línea 8273, 5 líneas
- `renderSemaforoConfig()` — línea 8278, 11 líneas
- `renderGlossary()` — línea 8289, 28 líneas

### SAVE PROJECT

- `saveProject()` — línea 8317, 5 líneas
- `exportJSON()` — línea 8322, 8 líneas
- `importJSON(input)` — línea 8330, 14 líneas
- `resetAll()` — línea 8344, 7 líneas

### INIT

- `init()` — línea 8351, 45 líneas
- `_isDirty()` — línea 8396, 26 líneas

### USER MANAGEMENT

- `renderUsersList()` — línea 8422, 27 líneas
- `openUserModal(id)` — línea 8449, 38 líneas
- `editUser(id)` — línea 8487, 2 líneas
- `saveUser()` — línea 8489, 24 líneas
- `deleteUser(id)` — línea 8513, 12 líneas

## Índice alfabético

`_autoSnapshot` (2980) · `_collectLdCopies` (7503) · `_crFilterMatch` (5241) · `_dataScore` (2088) · `_daysSince` (5066) · `_ensureUniqueProductIds` (3329) · `_enterApp` (2565) · `_escaladoDefaults` (3811) · `_fmtDateTime` (5060) · `_getUserProfile` (2559) · `_groupRecommendation` (5211) · `_guardarBase` (2327) · `_hash` (2305) · `_hasPendingUpload` (2518) · `_homeRange` (3783) · `_huellaLista` (2313) · `_inHomeRange` (3795) · `_initProductDrag` (3304) · `_isDirty` (8396) · `_itemScore` (2074) · `_leanState` (3005) · `_leerBase` (2334) · `_markPendingUpload` (2514) · `_mergeArraysById` (2368) · `_mergeDefaultUsers` (2048) · `_mergeItem` (2341) · `_metaPeriodStart` (3734) · `_metaProgress` (3747) · `_metaStatusInfo` (5047) · `_miniMetricsRow` (6851) · `_perdidaAnormal` (2108) · `_persistLocal` (3018) · `_recFilters` (7312) · `_renderLdCopies` (7485) · `_renderRecAccountsPixels` (7321) · `_renderRecDolores` (7734) · `_renderRecEnfoques` (7625) · `_renderRecEquipo` (7672) · `_renderRecLandings` (7353) · `_renderRecPixelsOnly` (7288) · `_renderRecRecursos` (7401) · `_reportarConflictos` (2400) · `_rowStats` (6844) · `_rowToMetrics` (6835) · `_safePullFromCloud` (2591) · `_setSyncStatus` (2583) · `_showLoginScreen` (2639) · `_stageAtInPeriod` (3741) · `_stampStageChange` (5116) · `_stripBlobs` (2969) · `_stripForClone` (7242) · `_stripPasswords` (2548) · `_updateSelBar` (3236) · `_uploadToStorage` (3091) · `addAngleFromModal` (5485) · `addCostCapRow` (7791) · `addGasto` (3179) · `addLdCopy` (7512) · `addPainFromModal` (5518) · `addProduct` (3197) · `addRefLink` (5597) · `analyzeSheet` (4352) · `applyFilters` (3664) · `applyLoginLogo` (3145) · `applyLoginScreenState` (3158) · `applyLogo` (3113) · `applyRoleTabs` (2797) · `applySession` (2698) · `applyTabularMap` (4435) · `autoCalcRevenue` (6110) · `calcCostCap` (7783) · `calcCreativoProfit` (6389) · `calcDirty` (3055) · `canAccess` (2806) · `ccDecision` (7864) · `clearCreativoThumb` (5589) · `clearErrorLog` (1984) · `clearHistory` (4246) · `clearProducts` (3196) · `clearProductSelection` (3271) · `closeModal` (7257) · `compareWeeks` (4558) · `copiarErrorLog` (8171) · `copyLandingCopy` (7568) · `copyLandingSeg` (7573) · `copyToClipboard` (7527) · `crDecision` (6520) · `crSemaforo` (6439) · `defaultHistory` (2884) · `defaultProducts` (2869) · `defaultSemaforo` (2897) · `defaultState` (2816) · `deleteAdAccount` (8234) · `deleteCC` (8044) · `deleteCreativo` (7252) · `deleteDolorItem` (7755) · `deleteEnfoque` (7660) · `deleteLanding` (7594) · `deleteMeta` (4026) · `deletePixel` (7460) · `deleteRecurso` (7621) · `deleteSelectedProducts` (3282) · `deleteSemana` (4241) · `deleteTeamMember` (7703) · `deleteUser` (8513) · `deleteVersion` (8273) · `detectPlatform` (5630) · `doForgotPassword` (2724) · `doLogin` (2666) · `doLogout` (2690) · `doUpdatePassword` (2741) · `dragCard` (4876) · `dropCard` (4956) · `duplicateCreativo` (7224) · `duplicateProduct` (3390) · `editUser` (8487) · `esc` (2003) · `escJs` (2015) · `exportCCToCSV` (8046) · `exportJSON` (8322) · `getBaseName` (6141) · `getDateRange` (4657) · `getEcuadorShare` (3481) · `getErrorLog` (1981) · `getEscaladoCandidates` (3816) · `getEscaladoStrategy` (3815) · `getFilteredCreativos` (4675) · `getFilteredHistory` (3647) · `getProductCpaTargets` (6125) · `getStatusCls` (5445) · `getStatusLabel` (5446) · `getTrafficCpaTargets` (6145) · `handleXlDrop` (4307) · `handleXlFile` (4303) · `importJSON` (8330) · `init` (8351) · `isFilterActive` (3660) · `loadCreativoFile` (5585) · `loadCreativoFiles` (5532) · `loadCreativoRefs` (5607) · `loadDefaultProducts` (3195) · `loadSheetByIdx` (4337) · `loadState` (2912) · `logError` (1955) · `markDeleted` (2409) · `moveCard` (5001) · `moveThenClose` (5838) · `onAngleSel` (5475) · `onCrAdAccountChange` (7777) · `onCrPixelChange` (7770) · `onHomeDateChange` (3802) · `onPainSel` (5512) · `onStageChange` (5743) · `onTestTypeChange` (5104) · `openAdAccountModal` (8204) · `openCampaignCreativoModal` (5078) · `openCreativoModal` (5998) · `openDetailModal` (5907) · `openDolorModal` (7744) · `openEnfoqueModal` (7641) · `openLandingModal` (7463) · `openMetaForm` (3986) · `openPixelModal` (7434) · `openRecursoModal` (7597) · `openTeamModal` (7688) · `openUserModal` (8449) · `persistState` (3028) · `populateAngleSel` (5456) · `populateCompareSelects` (4542) · `populateCreativoFilterProduct` (4716) · `populateCrPixels` (7762) · `populatePainSel` (5499) · `populateSimProduct` (3556) · `populateTeamSelects` (7709) · `previewCreativoLink` (5680) · `processXlFile` (4316) · `recalc` (3401) · `removeCreativoFile` (5556) · `removeCreativoRef` (5625) · `removeGasto` (3184) · `removeLdCopy` (7518) · `removeLoginLogo` (3139) · `removeProduct` (3201) · `renderAdAccounts` (8185) · `renderConfig` (8100) · `renderConfigMetas` (4033) · `renderConfirmForm` (4464) · `renderCostCaps` (7901) · `renderCostCapSummary` (7959) · `renderCountryDist` (3492) · `renderCreativosSummary` (5353) · `renderCreativosTable` (5249) · `renderDashboard` (4099) · `renderErrorLog` (8129) · `renderEscaladoStrategyForm` (4049) · `renderEscaladoSugeridos` (7880) · `renderFilesGrid` (5563) · `renderGastos` (3168) · `renderGlossary` (8289) · `renderGroupedView` (5127) · `renderHistory` (4215) · `renderHistoryCharts` (4251) · `renderHome` (3843) · `renderJBSteps` (8060) · `renderKanban` (4737) · `renderKVMapper` (4370) · `renderLandingSuggest` (7532) · `renderLinkedCreativos` (7838) · `renderModalFlowActions` (5802) · `renderPedidosChart` (4149) · `renderProducts` (3339) · `renderRankings` (5385) · `renderRecursos` (7278) · `renderRefsGrid` (5640) · `renderRevenueChart` (4132) · `renderSemaforo` (4168) · `renderSemaforoConfig` (8278) · `renderTabularMapper` (4389) · `renderUsersList` (8422) · `renderVersions` (8240) · `requireAdmin` (2537) · `resetAll` (8344) · `resetFilters` (3675) · `restoreVersion` (8262) · `runSimulator` (3563) · `safeSrc` (2039) · `safeUrl` (2027) · `saveAdAccount` (8216) · `saveCreativo` (7088) · `saveEnfoque` (7650) · `saveEscaladoStrategy` (4083) · `saveFromXl` (4510) · `saveLanding` (7578) · `saveMeta` (4008) · `savePixel` (7451) · `saveProject` (8317) · `saveRecurso` (7612) · `saveSemana` (4188) · `saveToCloud` (2421) · `saveUser` (8489) · `saveVersion` (8254) · `semDot` (7048) · `sendToCostCap` (7802) · `setColSort` (5227) · `setDatePreset` (4648) · `setPreset` (3683) · `showCampaignDrilldown` (6919) · `showCreativoAnalysis` (6527) · `showForgotPassword` (2655) · `showLoginForm` (2648) · `showSemaforoTooltip` (7007) · `showTab` (3065) · `showThumbPreview` (5666) · `showToast` (2960) · `showValidationBanner` (4972) · `startAutoSync` (2193) · `startRealtimeSync` (2605) · `switchRecTab` (7269) · `syncAllMetrics` (6186) · `syncCampaignFromDrill` (6858) · `syncFromCloud` (2121) · `syncMetaMetrics` (6273) · `toggleAllProducts` (3262) · `toggleProductSelect` (3255) · `totalGastosFijos` (3192) · `uid` (3060) · `updateCC` (8041) · `updateCompanyName` (3122) · `updateCountry` (3542) · `updateDashCascade` (3630) · `updateDistMethod` (3547) · `updateFilterSelects` (3704) · `updateGasto` (3188) · `updateManualPct` (3552) · `updateProdStatusBadge` (7731) · `updateProduct` (3225) · `updateUserBadge` (2783) · `uploadLoginLogo` (3129) · `uploadLogo` (3104) · `uploadProductImg` (3381) · `validateIdeaSave` (7054) · `validateStageTransition` (4877) · `xlMatchField` (4344)
