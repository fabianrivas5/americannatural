// ============================================================================
//  Pruebas de inyección sobre el DOM real.
//
//  CÓMO SE USA
//    1. Abre la app: el index.html local en el navegador, o
//       https://americannatural.vercel.app/ (no hace falta iniciar sesión).
//    2. Abre la consola (Cmd+Option+J en Chrome).
//    3. Pega TODO este archivo y pulsa Enter.
//
//  POR QUÉ EXISTE
//  Estas son las pruebas que en su día encontraron 5 puntos de XSS que ningún
//  grep detectó: los <option> de los filtros, un ${c.product||''} y un
//  ' · '+c.format concatenado dentro de un ternario. Buscar patrones en el
//  código no basta — hay que renderizar de verdad y mirar el DOM resultante.
//
//  NO GUARDA NADA EN LA NUBE: solo escribe la variable `state` en memoria y
//  llama a funciones de render. Al terminar, recarga la página y listo.
// ============================================================================
(() => {
  const R = [];
  let ok = 0, fail = 0;
  const t = (desc, cond, detalle) => {
    cond ? ok++ : fail++;
    R.push((cond ? '✅ ' : '❌ ') + desc + (cond ? '' : '\n     → ' + (detalle || '')));
  };

  const requeridas = ['esc', 'safeUrl', 'safeSrc', 'escJs', 'defaultState', 'renderKanban',
                      'logError', 'requireAdmin', '_mergeArraysById', '_perdidaAnormal'];
  const faltan = requeridas.filter(f => typeof window[f] !== 'function');
  if (faltan.length) {
    console.log('%c✗ Esta versión no tiene: ' + faltan.join(', ') +
                '\n  ¿Estás en la app correcta y actualizada? (Cmd+Shift+R)', 'color:#b91c1c');
    return;
  }

  const guardado = { state: window.state, currentUser: window.currentUser };

  try {
    // ── Payloads ────────────────────────────────────────────────────────────
    window.__xss = 0;
    const P = '<img src=qqq onerror="window.__xss++">';   // inyección de etiqueta
    const A = '" onmouseover="window.__xss++';            // ruptura de atributo
    const J = 'javascript:window.__xss++';                // URL ejecutable

    state = defaultState();
    state.tombstones = [];
    currentUser = { id: 'u1', name: 'Admin' + P, email: 'a@b.c', role: 'admin' };

    state.creativos = [{
      id: 'e1', status: 'testeo', decision: 'red', name: P + 'Crea', link: J, adLink: J,
      hook: P + 'hook' + A, publico: P, guion: P, comments: P, resp: P, respTesteo: P,
      angle: P, painPoint: P, tipoCreativo: P, product: P, format: P, metaCampaignName: P,
      metrics: { presup: 100, gasto: 50, ventas: 5, cpa: 10, ctr: 2, revenue: 200,
                 compras: 5, objetivoCampana: P },
      files: [], refs: [], date: '2026-07-01', testeoAt: Date.now(),
    }];
    state.recursos   = [{ id: 'r1', name: P, desc: P, url: J, type: 'link', product: P, resp: P, country: P }];
    state.landings   = [{ id: 'l1', name: P, url: J, angle: P, copies: [{ titulo: P, descripcion: P, texto: P }] }];
    state.products   = [{ id: 'p1', name: P + A, price: 10, cost: 3, qty: 1, mix: 100, img: J }];
    state.users      = [{ id: 'u1', name: P, email: P, role: 'admin', active: true }];
    state.costCaps   = [{ id: 'cc1', campaign: P, adset: P, creativo: P, hook: P, product: P,
                          publico: P, bid: 1, presup: 10, gasto: 5, ventas: 1, cpa: 5,
                          revenue: 20, resultado: P }];
    state.adAccounts = [{ id: 'a1', name: P, accountId: '123', country: P }];
    state.pixels     = [{ id: 'px1', name: P, pixelId: '456' }];
    state.enfoques   = [{ id: 'en1', name: P, desc: P }];

    // ── Renderizar todo ─────────────────────────────────────────────────────
    const errores = [];
    const RENDERS = ['renderKanban', 'renderHome', 'renderDashboard', 'renderCreativosTable',
      'renderRankings', 'renderRecursos', 'renderProducts', 'renderCostCaps', 'renderCostCapSummary',
      'renderUsersList', 'renderAdAccounts', 'renderCreativosSummary', 'renderGroupedView',
      'renderSemaforo', 'renderVersions', 'renderConfig', 'renderGastos', 'renderCountryDist',
      'renderHistory', 'renderEscaladoSugeridos', 'renderErrorLog'];
    for (const f of RENDERS) {
      try { if (typeof window[f] === 'function') window[f](); }
      catch (e) { errores.push(f + ': ' + e.message); }
    }

    t('ningún render falla con datos hostiles', errores.length === 0, errores.join(' | '));
    t('no se ejecutó nada inyectado', window.__xss === 0, 'el contador quedó en ' + window.__xss);

    const inyectadas = [...document.querySelectorAll('img[src="qqq"]')].map(i => {
      let p = i, cadena = [];
      for (let k = 0; k < 4 && p; k++) { cadena.push((p.tagName || '').toLowerCase() + (p.id ? '#' + p.id : '')); p = p.parentElement; }
      return cadena.join(' < ');
    });
    t('no quedó ninguna etiqueta inyectada en el DOM', inyectadas.length === 0,
      'aparecieron en: ' + inyectadas.join(' ;; '));

    const urls = [...document.querySelectorAll('a[href],img[src],video[src],iframe[src]')]
      .map(e => e.getAttribute('href') || e.getAttribute('src'));
    t('ninguna URL javascript: llegó al DOM',
      urls.filter(h => /^javascript:/i.test(h || '')).length === 0,
      urls.filter(h => /^javascript:/i.test(h || '')).join(' | '));
    t('no se inyectó ningún manejador de eventos',
      document.querySelectorAll('[onmouseover]').length === 0);

    // ── Y ahora con datos normales: que no se rompa la visualización ─────────
    state.creativos = [{
      id: 'ok', status: 'testeo', decision: 'green', name: 'Gomitas "Sabor & Salud" — v2',
      link: 'https://drive.google.com/file/d/1abc', adLink: 'https://facebook.com/ads/123',
      hook: '¿Tu niño no come? 🍬', publico: 'Mamás 25-45', resp: 'Ana María', respTesteo: 'Luis',
      angle: 'Dolor/Problema', painPoint: 'Falta de apetito', tipoCreativo: 'UGC',
      product: 'Apetito Kids', format: '9:16', comments: '', guion: '',
      metrics: { presup: 120, gasto: 120, ventas: 14, cpa: 8.5, ctr: 2.4, revenue: 420, compras: 14 },
      files: [], refs: [], date: '2026-07-10', testeoAt: Date.now(),
    }];
    state.recursos = [{ id: 'r1', name: 'Brief & Guía', desc: 'Plantilla', url: 'drive.google.com/x', type: 'link' }];
    for (const f of RENDERS) { try { window[f] && window[f](); } catch (e) {} }

    const fila = document.querySelector('#creativos-body td:nth-child(2)');
    const textoFila = fila ? fila.textContent : '';
    t('los caracteres especiales se ven tal cual', /Sabor & Salud/.test(textoFila),
      'la celda mostró: ' + textoFila.slice(0, 70));
    t('no se ven entidades HTML sueltas en pantalla',
      !/&(amp|quot|lt|gt|#39);/.test(document.body.innerText),
      'aparece una entidad sin decodificar en el texto visible');

    const enlaces = [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href'));
    t('los enlaces legítimos pasan intactos',
      enlaces.some(h => h === 'https://drive.google.com/file/d/1abc'), enlaces.slice(0, 5).join(' | '));
    t('un dominio sin esquema se corrige a https',
      enlaces.some(h => h === 'https://drive.google.com/x'), enlaces.slice(0, 8).join(' | '));

    // ── Permisos ────────────────────────────────────────────────────────────
    clearErrorLog();
    currentUser.role = 'editor';
    t('un editor no pasa la comprobación de admin', requireAdmin('prueba') === false);
    t('el intento queda registrado', getErrorLog().some(e => e.origen === 'permisos'));
    currentUser.role = 'admin';
    t('un admin sí pasa', requireAdmin('prueba') === true);

    // ── Registro de errores ─────────────────────────────────────────────────
    clearErrorLog();
    for (let i = 0; i < 10; i++) logError('repetido', new Error('mismo fallo'));
    t('los errores repetidos se agrupan en una fila', getErrorLog().length === 1,
      'quedaron ' + getErrorLog().length + ' filas');
    t('y se cuenta cuántas veces', getErrorLog()[0].veces === 10, 'veces=' + getErrorLog()[0].veces);
    logError('distinto', new Error('otro'));
    t('los errores distintos no se agrupan', getErrorLog().length === 2);
    clearErrorLog();
    for (let i = 0; i < 80; i++) logError('m' + i, new Error('e'));
    t('el registro nunca supera las 50 filas', getErrorLog().length <= 50, 'hay ' + getErrorLog().length);

    clearErrorLog();
    logError('<img src=qqq onerror="window.__xss++">', new Error('<script>alert(1)</script>'));
    renderErrorLog();
    t('el propio visor de errores escapa su contenido',
      document.querySelectorAll('#errlog-list img[src="qqq"]').length === 0);
    clearErrorLog();

    // ── Guardado al cerrar ──────────────────────────────────────────────────
    const dot = document.getElementById('save-dot');
    if (dot) {
      const real = window.saveToCloud;
      let llamadas = 0;
      window.saveToCloud = async () => { llamadas++; return true; };
      dot.classList.add('dirty');
      const ev = new Event('beforeunload', { cancelable: true });
      window.dispatchEvent(ev);
      t('al cerrar NO se intenta guardar en la nube (el fetch se abortaría)', llamadas === 0);
      t('al cerrar se avisa al usuario', ev.defaultPrevented === true);
      t('al cerrar se marca la subida pendiente', _hasPendingUpload() === true);
      localStorage.removeItem(PENDING_KEY);
      dot.classList.remove('dirty');
      const ev2 = new Event('beforeunload', { cancelable: true });
      window.dispatchEvent(ev2);
      t('sin cambios pendientes NO molesta al cerrar', ev2.defaultPrevented === false);
      window.saveToCloud = real;
    }

    // ── Diagnóstico ─────────────────────────────────────────────────────────
    localStorage.setItem(PAYLOAD_KEY, JSON.stringify({ kb: 365, ts: Date.now(), creativos: 100, snapshots: 2 }));
    renderErrorLog();
    let resumen = document.getElementById('diag-resumen');
    t('el panel muestra el peso del último guardado', /365 KB/.test(resumen.textContent), resumen.textContent.slice(0, 90));
    localStorage.setItem(PAYLOAD_KEY, JSON.stringify({ kb: 1300, ts: Date.now(), creativos: 500, snapshots: 0 }));
    renderErrorLog();
    t('y avisa cuando el payload obliga a recortar',
      /desglose de campaña/.test(document.getElementById('diag-resumen').textContent));
    localStorage.removeItem(PAYLOAD_KEY);

    // ── Sección solo para admin ─────────────────────────────────────────────
    renderConfig();
    const verAdmin = document.getElementById('sec-diagnostico').style.display !== 'none';
    currentUser.role = 'editor';
    renderConfig();
    const verEditor = document.getElementById('sec-diagnostico').style.display !== 'none';
    t('el admin ve Diagnóstico', verAdmin === true);
    t('un editor no ve Diagnóstico', verEditor === false);

  } catch (e) {
    R.push('❌ ERROR INESPERADO: ' + e.message + '\n' + (e.stack || '').split('\n')[1]);
    fail++;
  } finally {
    try { clearErrorLog(); localStorage.removeItem(PENDING_KEY); localStorage.removeItem(PAYLOAD_KEY); } catch (_) {}
    window.state = guardado.state;
    window.currentUser = guardado.currentUser;
  }

  console.log('%c' + R.join('\n'), 'font-family:monospace;line-height:1.6');
  console.log('%c' + (fail ? '✗ ' + fail + ' FALLARON · ' + ok + ' pasaron' : '✓ ' + ok + ' pruebas OK'),
              'font-weight:bold;font-size:14px;color:' + (fail ? '#b91c1c' : '#15803d'));
  console.log('%cRecarga la página para dejar la app como estaba.', 'color:#666');
  return fail ? '✗ ' + fail + ' fallaron' : '✓ ' + ok + ' OK';
})();
