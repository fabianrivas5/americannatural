# Mapa de `index.html`

> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:
> ```bash
> node scripts/mapa.js
> ```

Estado: **8447 líneas**, **282 funciones**, **58 secciones**, 108 usos de `innerHTML`, 327 handlers inline.

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
| 3052 | NAV | 1 |
| 3077 | STORAGE UPLOAD | 1 |
| 3091 | LOGO | 7 |
| 3155 | GASTOS FIJOS | 5 |
| 3182 | PRODUCTS | 15 |
| 3412 | Phase 4: country distribution & simulator | 7 |
| 3561 | end Phase 4 | 1 |
| 3577 | FILTERS | 6 |
| 3653 | DASHBOARD | 0 |
| 3654 | HOME / INICIO EJECUTIVO | 20 |
| 4120 | WEEKLY HISTORY | 5 |
| 4213 | EXCEL UPLOAD (Phase 5) | 11 |
| 4474 | COMPARADOR | 2 |
| 4567 | KANBAN | 16 |
| 5059 | VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO | 9 |
| 5381 | CREATIVO MODAL | 0 |
| 5388 | Angle management | 3 |
| 5431 | Punto de dolor | 3 |
| 5464 | Multi-file upload | 5 |
| 5529 | Referencias del creador (inspiración, no creativo final) | 7 |
| 5654 | STAGE LOGIC | 13 |
| 6384 | 🔴 ROJO — parar urgente | 0 |
| 6410 | 🟢 VERDE — va bien | 0 |
| 6424 | 🟡 AMARILLO — observar | 2 |
| 6458 | Fuentes de datos | 0 |
| 6482 | Helpers visuales | 0 |
| 6495 | 1. EVALUACIÓN DE RENTABILIDAD | 0 |
| 6543 | 2. EVALUACIÓN DE TRÁFICO | 0 |
| 6595 | 3. DIAGNÓSTICO CREATIVO | 0 |
| 6607 | 4. MÉTRICAS FALTANTES | 0 |
| 6616 | 5. RESUMEN EJECUTIVO y ACCIÓN | 0 |
| 6755 | VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS | 13 |
| 7185 | RECURSOS OPERATIVOS | 7 |
| 7355 | Pixel CRUD | 3 |
| 7384 | Landing CRUD | 1 |
| 7406 | Copies por landing (máx 5) | 10 |
| 7518 | Recurso CRUD | 3 |
| 7545 | Enfoques creativos | 4 |
| 7588 | Equipo | 5 |
| 7655 | Puntos de dolor | 3 |
| 7683 | Pixel/Landing en formulario de creativo | 3 |
| 7704 | COST CAP | 12 |
| 8021 | CONFIG | 1 |
| 8050 | DIAGNÓSTICO | 2 |
| 8104 | AD ACCOUNTS | 10 |
| 8238 | SAVE PROJECT | 4 |
| 8272 | INIT | 2 |
| 8343 | USER MANAGEMENT | 5 |

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
- `loadState()` — línea 2912, 36 líneas
- `showToast(msg, type='success')` — línea 2948, 9 líneas
- `_stripBlobs(obj)` — línea 2957, 11 líneas
- `_autoSnapshot()` — línea 2968, 25 líneas
- `_leanState(src, aggressive)` — línea 2993, 13 líneas
- `_persistLocal()` — línea 3006, 10 líneas
- `async persistState()` — línea 3016, 27 líneas
- `calcDirty()` — línea 3043, 5 líneas
- `uid()` — línea 3048, 5 líneas

### NAV

- `showTab(name)` — línea 3053, 26 líneas

### STORAGE UPLOAD

- `async _uploadToStorage(file, folder)` — línea 3079, 13 líneas

### LOGO

- `async uploadLogo(input)` — línea 3092, 9 líneas
- `applyLogo()` — línea 3101, 9 líneas
- `updateCompanyName(v)` — línea 3110, 7 líneas
- `async uploadLoginLogo(input)` — línea 3117, 10 líneas
- `removeLoginLogo()` — línea 3127, 6 líneas
- `applyLoginLogo()` — línea 3133, 13 líneas
- `applyLoginScreenState()` — línea 3146, 10 líneas

### GASTOS FIJOS

- `renderGastos()` — línea 3156, 11 líneas
- `addGasto()` — línea 3167, 5 líneas
- `removeGasto(id)` — línea 3172, 4 líneas
- `updateGasto(id, val)` — línea 3176, 4 líneas
- `totalGastosFijos()` — línea 3180, 3 líneas

### PRODUCTS

- `loadDefaultProducts()` — línea 3183, 1 líneas
- `clearProducts()` — línea 3184, 1 líneas
- `addProduct()` — línea 3185, 4 líneas
- `removeProduct(id)` — línea 3189, 1 líneas
- `updateProduct(id, field, val)` — línea 3190, 7 líneas
- `_updateSelBar()` — línea 3197, 16 líneas
- `toggleProductSelect(id, checked)` — línea 3213, 5 líneas
- `toggleAllProducts(checked)` — línea 3218, 10 líneas
- `clearProductSelection()` — línea 3228, 11 líneas
- `deleteSelectedProducts()` — línea 3239, 13 líneas
- `_initProductDrag(tbody)` — línea 3252, 24 líneas
- `renderProducts()` — línea 3276, 38 líneas
- `async uploadProductImg(id, input)` — línea 3314, 9 líneas
- `duplicateProduct(id)` — línea 3323, 11 líneas
- `recalc()` — línea 3334, 80 líneas

### Phase 4: country distribution & simulator

- `getEcuadorShare()` — línea 3414, 11 líneas
- `renderCountryDist(gfTotal, pedidos)` — línea 3425, 50 líneas
- `updateCountry(id, field, val)` — línea 3475, 5 líneas
- `updateDistMethod(val)` — línea 3480, 5 líneas
- `updateManualPct(id, val)` — línea 3485, 4 líneas
- `populateSimProduct()` — línea 3489, 7 líneas
- `runSimulator()` — línea 3496, 67 líneas

### end Phase 4

- `updateDashCascade(price,mv,md,me,mop,cpao)` — línea 3563, 17 líneas

### FILTERS

- `getFilteredHistory()` — línea 3580, 13 líneas
- `isFilterActive()` — línea 3593, 4 líneas
- `applyFilters()` — línea 3597, 11 líneas
- `resetFilters()` — línea 3608, 8 líneas
- `setPreset(p)` — línea 3616, 21 líneas
- `updateFilterSelects()` — línea 3637, 30 líneas

### HOME / INICIO EJECUTIVO

- `_metaPeriodStart(periodo)` — línea 3667, 7 líneas
- `_stageAtInPeriod(c, stage, start)` — línea 3674, 6 líneas
- `_metaProgress(meta)` — línea 3680, 36 líneas
- `_homeRange()` — línea 3716, 12 líneas
- `_inHomeRange(iso, r)` — línea 3728, 7 líneas
- `onHomeDateChange()` — línea 3735, 9 líneas
- `_escaladoDefaults()` — línea 3744, 4 líneas
- `getEscaladoStrategy()` — línea 3748, 1 líneas
- `getEscaladoCandidates()` — línea 3749, 27 líneas
- `renderHome()` — línea 3776, 143 líneas
- `openMetaForm()` — línea 3919, 22 líneas
- `saveMeta()` — línea 3941, 18 líneas
- `deleteMeta(id)` — línea 3959, 7 líneas
- `renderConfigMetas()` — línea 3966, 16 líneas
- `renderEscaladoStrategyForm()` — línea 3982, 34 líneas
- `saveEscaladoStrategy()` — línea 4016, 16 líneas
- `renderDashboard()` — línea 4032, 33 líneas
- `renderRevenueChart(hist)` — línea 4065, 17 líneas
- `renderPedidosChart(hist)` — línea 4082, 19 líneas
- `renderSemaforo()` — línea 4101, 20 líneas

### WEEKLY HISTORY

- `saveSemana()` — línea 4121, 27 líneas
- `renderHistory()` — línea 4148, 26 líneas
- `deleteSemana(id)` — línea 4174, 5 líneas
- `clearHistory()` — línea 4179, 5 líneas
- `renderHistoryCharts()` — línea 4184, 52 líneas

### EXCEL UPLOAD (Phase 5)

- `handleXlFile(input)` — línea 4236, 4 líneas
- `handleXlDrop(e)` — línea 4240, 9 líneas
- `processXlFile(file)` — línea 4249, 21 líneas
- `loadSheetByIdx(i)` — línea 4270, 7 líneas
- `xlMatchField(cellStr)` — línea 4277, 8 líneas
- `analyzeSheet(sheetName, data)` — línea 4285, 18 líneas
- `renderKVMapper(sheetName, data)` — línea 4303, 19 líneas
- `renderTabularMapper(sheetName, data, headerRowIdx, dataRows)` — línea 4322, 46 líneas
- `applyTabularMap()` — línea 4368, 29 líneas
- `renderConfirmForm(sheetName, det)` — línea 4397, 46 líneas
- `saveFromXl()` — línea 4443, 32 líneas

### COMPARADOR

- `populateCompareSelects()` — línea 4475, 16 líneas
- `compareWeeks()` — línea 4491, 90 líneas

### KANBAN

- `setDatePreset(preset)` — línea 4581, 9 líneas
- `getDateRange()` — línea 4590, 18 líneas
- `getFilteredCreativos(opts)` — línea 4608, 41 líneas
- `populateCreativoFilterProduct()` — línea 4649, 21 líneas
- `renderKanban()` — línea 4670, 139 líneas
- `dragCard(e, id)` — línea 4809, 1 líneas
- `validateStageTransition(c, toStatus)` — línea 4810, 79 líneas
- `dropCard(e, colId)` — línea 4889, 16 líneas
- `showValidationBanner(missing, colLabel)` — línea 4905, 29 líneas
- `moveCard(id, toStatus)` — línea 4934, 46 líneas
- `_metaStatusInfo(raw)` — línea 4980, 13 líneas
- `_fmtDateTime(iso)` — línea 4993, 6 líneas
- `_daysSince(iso)` — línea 4999, 12 líneas
- `openCampaignCreativoModal()` — línea 5011, 26 líneas
- `onTestTypeChange()` — línea 5037, 12 líneas
- `_stampStageChange(c, toStatus)` — línea 5049, 11 líneas

### VISTA JERÁRQUICA: CAMPAÑA / ADSET / ANUNCIO

- `renderGroupedView()` — línea 5060, 84 líneas
- `_groupRecommendation(g, t, nivel)` — línea 5144, 16 líneas
- `setColSort(key)` — línea 5160, 14 líneas
- `_crFilterMatch(c)` — línea 5174, 8 líneas
- `renderCreativosTable()` — línea 5182, 104 líneas
- `renderCreativosSummary()` — línea 5286, 32 líneas
- `renderRankings()` — línea 5318, 60 líneas
- `getStatusCls(s)` — línea 5378, 1 líneas
- `getStatusLabel(s)` — línea 5379, 10 líneas

### Angle management

- `populateAngleSel(current)` — línea 5389, 19 líneas
- `onAngleSel(sel)` — línea 5408, 10 líneas
- `addAngleFromModal()` — línea 5418, 14 líneas

### Punto de dolor

- `populatePainSel(current)` — línea 5432, 13 líneas
- `onPainSel(sel)` — línea 5445, 6 líneas
- `addPainFromModal()` — línea 5451, 14 líneas

### Multi-file upload

- `loadCreativoFiles(input)` — línea 5465, 24 líneas
- `removeCreativoFile(idx)` — línea 5489, 7 líneas
- `renderFilesGrid()` — línea 5496, 22 líneas
- `loadCreativoFile(input)` — línea 5518, 4 líneas
- `clearCreativoThumb()` — línea 5522, 8 líneas

### Referencias del creador (inspiración, no creativo final)

- `addRefLink()` — línea 5530, 10 líneas
- `loadCreativoRefs(input)` — línea 5540, 18 líneas
- `removeCreativoRef(idx)` — línea 5558, 5 líneas
- `detectPlatform(url)` — línea 5563, 10 líneas
- `renderRefsGrid()` — línea 5573, 26 líneas
- `showThumbPreview(src, type, name)` — línea 5599, 14 líneas
- `previewCreativoLink()` — línea 5613, 63 líneas

### STAGE LOGIC

- `onStageChange()` — línea 5676, 59 líneas
- `renderModalFlowActions()` — línea 5735, 36 líneas
- `moveThenClose(toStatus)` — línea 5771, 69 líneas
- `openDetailModal(id)` — línea 5840, 91 líneas
- `openCreativoModal(id)` — línea 5931, 101 líneas
- `autoCalcRevenue()` — línea 6032, 15 líneas
- `getProductCpaTargets(productName)` — línea 6047, 16 líneas
- `getBaseName(productName)` — línea 6063, 4 líneas
- `getTrafficCpaTargets(productName)` — línea 6067, 41 líneas
- `async syncAllMetrics()` — línea 6108, 87 líneas
- `async syncMetaMetrics()` — línea 6195, 116 líneas
- `calcCreativoProfit()` — línea 6311, 50 líneas
- `crSemaforo(m, targets)` — línea 6361, 81 líneas

### 🟡 AMARILLO — observar

- `crDecision(m, targets)` — línea 6442, 7 líneas
- `showCreativoAnalysis(id)` — línea 6449, 308 líneas

### VISTA DE CAMPAÑA: CAMPAÑA → CONJUNTOS → ANUNCIOS

- `_rowToMetrics(r)` — línea 6757, 9 líneas
- `_rowStats(r)` — línea 6766, 7 líneas
- `_miniMetricsRow(g)` — línea 6773, 7 líneas
- `async syncCampaignFromDrill(id, btnEl)` — línea 6780, 61 líneas
- `showCampaignDrilldown(id)` — línea 6841, 88 líneas
- `showSemaforoTooltip(e)` — línea 6929, 41 líneas
- `semDot(m, size=14)` — línea 6970, 6 líneas
- `validateIdeaSave()` — línea 6976, 34 líneas
- `saveCreativo()` — línea 7010, 136 líneas
- `duplicateCreativo(id)` — línea 7146, 18 líneas
- `_stripForClone(c)` — línea 7164, 10 líneas
- `deleteCreativo(id)` — línea 7174, 5 líneas
- `closeModal(id)` — línea 7179, 12 líneas

### RECURSOS OPERATIVOS

- `switchRecTab(tab)` — línea 7191, 9 líneas
- `renderRecursos()` — línea 7200, 10 líneas
- `_renderRecPixelsOnly()` — línea 7210, 24 líneas
- `_recFilters()` — línea 7234, 9 líneas
- `_renderRecAccountsPixels()` — línea 7243, 32 líneas
- `_renderRecLandings()` — línea 7275, 48 líneas
- `_renderRecRecursos()` — línea 7323, 33 líneas

### Pixel CRUD

- `openPixelModal(id, preAccountId)` — línea 7356, 17 líneas
- `savePixel()` — línea 7373, 9 líneas
- `deletePixel(id)` — línea 7382, 3 líneas

### Landing CRUD

- `openLandingModal(id)` — línea 7385, 22 líneas

### Copies por landing (máx 5)

- `_renderLdCopies(copies)` — línea 7407, 18 líneas
- `_collectLdCopies()` — línea 7425, 9 líneas
- `addLdCopy()` — línea 7434, 6 líneas
- `removeLdCopy(i)` — línea 7440, 9 líneas
- `copyToClipboard(txt)` — línea 7449, 5 líneas
- `renderLandingSuggest()` — línea 7454, 36 líneas
- `copyLandingCopy(landingId, idx)` — línea 7490, 5 líneas
- `copyLandingSeg(landingId)` — línea 7495, 5 líneas
- `saveLanding()` — línea 7500, 16 líneas
- `deleteLanding(id)` — línea 7516, 3 líneas

### Recurso CRUD

- `openRecursoModal(id)` — línea 7519, 15 líneas
- `saveRecurso()` — línea 7534, 9 líneas
- `deleteRecurso(id)` — línea 7543, 4 líneas

### Enfoques creativos

- `_renderRecEnfoques()` — línea 7547, 16 líneas
- `openEnfoqueModal(id)` — línea 7563, 9 líneas
- `saveEnfoque(e)` — línea 7572, 10 líneas
- `deleteEnfoque(id)` — línea 7582, 12 líneas

### Equipo

- `_renderRecEquipo()` — línea 7594, 16 líneas
- `openTeamModal(id)` — línea 7610, 15 líneas
- `deleteTeamMember(id)` — línea 7625, 6 líneas
- `populateTeamSelects()` — línea 7631, 22 líneas
- `updateProdStatusBadge()` — línea 7653, 3 líneas

### Puntos de dolor

- `_renderRecDolores()` — línea 7656, 10 líneas
- `openDolorModal()` — línea 7666, 11 líneas
- `deleteDolorItem(idx)` — línea 7677, 7 líneas

### Pixel/Landing en formulario de creativo

- `populateCrPixels(adAccountId)` — línea 7684, 8 líneas
- `onCrPixelChange()` — línea 7692, 7 líneas
- `onCrAdAccountChange()` — línea 7699, 6 líneas

### COST CAP

- `calcCostCap()` — línea 7705, 8 líneas
- `addCostCapRow()` — línea 7713, 11 líneas
- `sendToCostCap(creativoId)` — línea 7724, 36 líneas
- `renderLinkedCreativos()` — línea 7760, 26 líneas
- `ccDecision(r, be)` — línea 7786, 16 líneas
- `renderEscaladoSugeridos()` — línea 7802, 21 líneas
- `renderCostCaps()` — línea 7823, 58 líneas
- `renderCostCapSummary(be, avgPrice)` — línea 7881, 82 líneas
- `updateCC(i, field, val)` — línea 7963, 3 líneas
- `deleteCC(i)` — línea 7966, 2 líneas
- `exportCCToCSV()` — línea 7968, 14 líneas
- `renderJBSteps()` — línea 7982, 40 líneas

### CONFIG

- `renderConfig()` — línea 8022, 29 líneas

### DIAGNÓSTICO

- `renderErrorLog()` — línea 8051, 42 líneas
- `copiarErrorLog()` — línea 8093, 14 líneas

### AD ACCOUNTS

- `renderAdAccounts()` — línea 8107, 19 líneas
- `openAdAccountModal(id)` — línea 8126, 12 líneas
- `saveAdAccount()` — línea 8138, 18 líneas
- `deleteAdAccount(id)` — línea 8156, 6 líneas
- `renderVersions()` — línea 8162, 14 líneas
- `saveVersion()` — línea 8176, 8 líneas
- `restoreVersion(id)` — línea 8184, 11 líneas
- `deleteVersion(id)` — línea 8195, 5 líneas
- `renderSemaforoConfig()` — línea 8200, 11 líneas
- `renderGlossary()` — línea 8211, 28 líneas

### SAVE PROJECT

- `saveProject()` — línea 8239, 5 líneas
- `exportJSON()` — línea 8244, 8 líneas
- `importJSON(input)` — línea 8252, 14 líneas
- `resetAll()` — línea 8266, 7 líneas

### INIT

- `init()` — línea 8273, 45 líneas
- `_isDirty()` — línea 8318, 26 líneas

### USER MANAGEMENT

- `renderUsersList()` — línea 8344, 27 líneas
- `openUserModal(id)` — línea 8371, 38 líneas
- `editUser(id)` — línea 8409, 2 líneas
- `saveUser()` — línea 8411, 24 líneas
- `deleteUser(id)` — línea 8435, 12 líneas

## Índice alfabético

`_autoSnapshot` (2968) · `_collectLdCopies` (7425) · `_crFilterMatch` (5174) · `_dataScore` (2088) · `_daysSince` (4999) · `_enterApp` (2565) · `_escaladoDefaults` (3744) · `_fmtDateTime` (4993) · `_getUserProfile` (2559) · `_groupRecommendation` (5144) · `_guardarBase` (2327) · `_hash` (2305) · `_hasPendingUpload` (2518) · `_homeRange` (3716) · `_huellaLista` (2313) · `_inHomeRange` (3728) · `_initProductDrag` (3252) · `_isDirty` (8318) · `_itemScore` (2074) · `_leanState` (2993) · `_leerBase` (2334) · `_markPendingUpload` (2514) · `_mergeArraysById` (2368) · `_mergeDefaultUsers` (2048) · `_mergeItem` (2341) · `_metaPeriodStart` (3667) · `_metaProgress` (3680) · `_metaStatusInfo` (4980) · `_miniMetricsRow` (6773) · `_perdidaAnormal` (2108) · `_persistLocal` (3006) · `_recFilters` (7234) · `_renderLdCopies` (7407) · `_renderRecAccountsPixels` (7243) · `_renderRecDolores` (7656) · `_renderRecEnfoques` (7547) · `_renderRecEquipo` (7594) · `_renderRecLandings` (7275) · `_renderRecPixelsOnly` (7210) · `_renderRecRecursos` (7323) · `_reportarConflictos` (2400) · `_rowStats` (6766) · `_rowToMetrics` (6757) · `_safePullFromCloud` (2591) · `_setSyncStatus` (2583) · `_showLoginScreen` (2639) · `_stageAtInPeriod` (3674) · `_stampStageChange` (5049) · `_stripBlobs` (2957) · `_stripForClone` (7164) · `_stripPasswords` (2548) · `_updateSelBar` (3197) · `_uploadToStorage` (3079) · `addAngleFromModal` (5418) · `addCostCapRow` (7713) · `addGasto` (3167) · `addLdCopy` (7434) · `addPainFromModal` (5451) · `addProduct` (3185) · `addRefLink` (5530) · `analyzeSheet` (4285) · `applyFilters` (3597) · `applyLoginLogo` (3133) · `applyLoginScreenState` (3146) · `applyLogo` (3101) · `applyRoleTabs` (2797) · `applySession` (2698) · `applyTabularMap` (4368) · `autoCalcRevenue` (6032) · `calcCostCap` (7705) · `calcCreativoProfit` (6311) · `calcDirty` (3043) · `canAccess` (2806) · `ccDecision` (7786) · `clearCreativoThumb` (5522) · `clearErrorLog` (1984) · `clearHistory` (4179) · `clearProducts` (3184) · `clearProductSelection` (3228) · `closeModal` (7179) · `compareWeeks` (4491) · `copiarErrorLog` (8093) · `copyLandingCopy` (7490) · `copyLandingSeg` (7495) · `copyToClipboard` (7449) · `crDecision` (6442) · `crSemaforo` (6361) · `defaultHistory` (2884) · `defaultProducts` (2869) · `defaultSemaforo` (2897) · `defaultState` (2816) · `deleteAdAccount` (8156) · `deleteCC` (7966) · `deleteCreativo` (7174) · `deleteDolorItem` (7677) · `deleteEnfoque` (7582) · `deleteLanding` (7516) · `deleteMeta` (3959) · `deletePixel` (7382) · `deleteRecurso` (7543) · `deleteSelectedProducts` (3239) · `deleteSemana` (4174) · `deleteTeamMember` (7625) · `deleteUser` (8435) · `deleteVersion` (8195) · `detectPlatform` (5563) · `doForgotPassword` (2724) · `doLogin` (2666) · `doLogout` (2690) · `doUpdatePassword` (2741) · `dragCard` (4809) · `dropCard` (4889) · `duplicateCreativo` (7146) · `duplicateProduct` (3323) · `editUser` (8409) · `esc` (2003) · `escJs` (2015) · `exportCCToCSV` (7968) · `exportJSON` (8244) · `getBaseName` (6063) · `getDateRange` (4590) · `getEcuadorShare` (3414) · `getErrorLog` (1981) · `getEscaladoCandidates` (3749) · `getEscaladoStrategy` (3748) · `getFilteredCreativos` (4608) · `getFilteredHistory` (3580) · `getProductCpaTargets` (6047) · `getStatusCls` (5378) · `getStatusLabel` (5379) · `getTrafficCpaTargets` (6067) · `handleXlDrop` (4240) · `handleXlFile` (4236) · `importJSON` (8252) · `init` (8273) · `isFilterActive` (3593) · `loadCreativoFile` (5518) · `loadCreativoFiles` (5465) · `loadCreativoRefs` (5540) · `loadDefaultProducts` (3183) · `loadSheetByIdx` (4270) · `loadState` (2912) · `logError` (1955) · `markDeleted` (2409) · `moveCard` (4934) · `moveThenClose` (5771) · `onAngleSel` (5408) · `onCrAdAccountChange` (7699) · `onCrPixelChange` (7692) · `onHomeDateChange` (3735) · `onPainSel` (5445) · `onStageChange` (5676) · `onTestTypeChange` (5037) · `openAdAccountModal` (8126) · `openCampaignCreativoModal` (5011) · `openCreativoModal` (5931) · `openDetailModal` (5840) · `openDolorModal` (7666) · `openEnfoqueModal` (7563) · `openLandingModal` (7385) · `openMetaForm` (3919) · `openPixelModal` (7356) · `openRecursoModal` (7519) · `openTeamModal` (7610) · `openUserModal` (8371) · `persistState` (3016) · `populateAngleSel` (5389) · `populateCompareSelects` (4475) · `populateCreativoFilterProduct` (4649) · `populateCrPixels` (7684) · `populatePainSel` (5432) · `populateSimProduct` (3489) · `populateTeamSelects` (7631) · `previewCreativoLink` (5613) · `processXlFile` (4249) · `recalc` (3334) · `removeCreativoFile` (5489) · `removeCreativoRef` (5558) · `removeGasto` (3172) · `removeLdCopy` (7440) · `removeLoginLogo` (3127) · `removeProduct` (3189) · `renderAdAccounts` (8107) · `renderConfig` (8022) · `renderConfigMetas` (3966) · `renderConfirmForm` (4397) · `renderCostCaps` (7823) · `renderCostCapSummary` (7881) · `renderCountryDist` (3425) · `renderCreativosSummary` (5286) · `renderCreativosTable` (5182) · `renderDashboard` (4032) · `renderErrorLog` (8051) · `renderEscaladoStrategyForm` (3982) · `renderEscaladoSugeridos` (7802) · `renderFilesGrid` (5496) · `renderGastos` (3156) · `renderGlossary` (8211) · `renderGroupedView` (5060) · `renderHistory` (4148) · `renderHistoryCharts` (4184) · `renderHome` (3776) · `renderJBSteps` (7982) · `renderKanban` (4670) · `renderKVMapper` (4303) · `renderLandingSuggest` (7454) · `renderLinkedCreativos` (7760) · `renderModalFlowActions` (5735) · `renderPedidosChart` (4082) · `renderProducts` (3276) · `renderRankings` (5318) · `renderRecursos` (7200) · `renderRefsGrid` (5573) · `renderRevenueChart` (4065) · `renderSemaforo` (4101) · `renderSemaforoConfig` (8200) · `renderTabularMapper` (4322) · `renderUsersList` (8344) · `renderVersions` (8162) · `requireAdmin` (2537) · `resetAll` (8266) · `resetFilters` (3608) · `restoreVersion` (8184) · `runSimulator` (3496) · `safeSrc` (2039) · `safeUrl` (2027) · `saveAdAccount` (8138) · `saveCreativo` (7010) · `saveEnfoque` (7572) · `saveEscaladoStrategy` (4016) · `saveFromXl` (4443) · `saveLanding` (7500) · `saveMeta` (3941) · `savePixel` (7373) · `saveProject` (8239) · `saveRecurso` (7534) · `saveSemana` (4121) · `saveToCloud` (2421) · `saveUser` (8411) · `saveVersion` (8176) · `semDot` (6970) · `sendToCostCap` (7724) · `setColSort` (5160) · `setDatePreset` (4581) · `setPreset` (3616) · `showCampaignDrilldown` (6841) · `showCreativoAnalysis` (6449) · `showForgotPassword` (2655) · `showLoginForm` (2648) · `showSemaforoTooltip` (6929) · `showTab` (3053) · `showThumbPreview` (5599) · `showToast` (2948) · `showValidationBanner` (4905) · `startAutoSync` (2193) · `startRealtimeSync` (2605) · `switchRecTab` (7191) · `syncAllMetrics` (6108) · `syncCampaignFromDrill` (6780) · `syncFromCloud` (2121) · `syncMetaMetrics` (6195) · `toggleAllProducts` (3218) · `toggleProductSelect` (3213) · `totalGastosFijos` (3180) · `uid` (3048) · `updateCC` (7963) · `updateCompanyName` (3110) · `updateCountry` (3475) · `updateDashCascade` (3563) · `updateDistMethod` (3480) · `updateFilterSelects` (3637) · `updateGasto` (3176) · `updateManualPct` (3485) · `updateProdStatusBadge` (7653) · `updateProduct` (3190) · `updateUserBadge` (2783) · `uploadLoginLogo` (3117) · `uploadLogo` (3092) · `uploadProductImg` (3314) · `validateIdeaSave` (6976) · `validateStageTransition` (4810) · `xlMatchField` (4277)
