#!/usr/bin/env node
// Genera MAPA.md: índice navegable de index.html.
// Se regenera, no se edita a mano:   node scripts/mapa.js
//
// Existe porque el archivo tiene ~8400 líneas y 280+ funciones: sin un índice se
// pierde más tiempo buscando que arreglando. Al ser generado no queda obsoleto en
// silencio — se vuelve a correr y ya.
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const SRC = path.join(RAIZ, 'index.html');
const OUT = path.join(RAIZ, 'MAPA.md');

const txt = fs.readFileSync(SRC, 'utf8');
const lineas = txt.split('\n');

// Secciones marcadas con comentarios de bloque (// ── TÍTULO ── o // ===== TÍTULO =====)
const secciones = [];
lineas.forEach((l, i) => {
  const m = l.match(/^\s*\/\/\s*[─=—-]{2,}\s*(.+?)\s*[─=—-]{2,}\s*$/);
  if (m && m[1].length > 2) secciones.push({ linea: i + 1, titulo: m[1].trim() });
});

// Funciones de nivel superior
const funciones = [];
lineas.forEach((l, i) => {
  const m = l.match(/^(async )?function ([A-Za-z_$][\w$]*)\s*\(([^)]*)\)/);
  if (m) funciones.push({ linea: i + 1, nombre: m[2], args: m[3].trim(), async: !!m[1] });
});
funciones.forEach((f, k) => {
  f.largo = (k + 1 < funciones.length ? funciones[k + 1].linea : lineas.length) - f.linea;
});

// Elementos con id (para saber dónde vive cada panel)
const paneles = [];
lineas.forEach((l, i) => {
  const m = l.match(/<div[^>]*\bclass="panel"[^>]*\bid="([^"]+)"|<div[^>]*\bid="([^"]+)"[^>]*\bclass="panel"/);
  if (m) paneles.push({ linea: i + 1, id: m[1] || m[2] });
});

const enSeccion = ln => {
  let s = null;
  for (const sec of secciones) if (sec.linea <= ln) s = sec.titulo; else break;
  return s || '(sin sección)';
};

const grupos = new Map();
for (const f of funciones) {
  const s = enSeccion(f.linea);
  if (!grupos.has(s)) grupos.set(s, []);
  grupos.get(s).push(f);
}

const L = [];
L.push('# Mapa de `index.html`');
L.push('');
L.push('> Generado por `scripts/mapa.js` — **no editar a mano**. Para actualizarlo:');
L.push('> ```bash');
L.push('> node scripts/mapa.js');
L.push('> ```');
L.push('');
L.push(`Estado: **${lineas.length} líneas**, **${funciones.length} funciones**, `
  + `**${secciones.length} secciones**, ${(txt.match(/innerHTML/g) || []).length} usos de \`innerHTML\`, `
  + `${(txt.match(/on[a-z]+="/g) || []).length} handlers inline.`);
L.push('');
L.push('Los números de línea cambian con cada edición: sirven para orientarse, pero **busca por nombre**.');
L.push('');

L.push('## Paneles de la interfaz');
L.push('');
L.push('| Panel | Línea |');
L.push('|---|---|');
for (const p of paneles) L.push(`| \`#${p.id}\` | ${p.linea} |`);
L.push('');

L.push('## Secciones');
L.push('');
L.push('| Línea | Sección | Funciones |');
L.push('|---|---|---|');
for (const s of secciones) {
  const n = (grupos.get(s.titulo) || []).length;
  L.push(`| ${s.linea} | ${s.titulo} | ${n} |`);
}
L.push('');

L.push('## Funciones más largas');
L.push('');
L.push('Candidatas naturales si algún día se parte el archivo. Hoy no se tocan: funcionan y el riesgo de romperlas supera la ganancia.');
L.push('');
L.push('| Líneas | Función | Sección |');
L.push('|---|---|---|');
for (const f of [...funciones].sort((a, b) => b.largo - a.largo).slice(0, 15)) {
  L.push(`| ${f.largo} | \`${f.nombre}()\` | ${enSeccion(f.linea)} |`);
}
L.push('');

L.push('## Índice de funciones por sección');
L.push('');
for (const [sec, fns] of grupos) {
  L.push(`### ${sec}`);
  L.push('');
  for (const f of fns.sort((a, b) => a.linea - b.linea)) {
    const args = f.args.length > 40 ? f.args.slice(0, 40) + '…' : f.args;
    L.push(`- \`${f.async ? 'async ' : ''}${f.nombre}(${args})\` — línea ${f.linea}, ${f.largo} líneas`);
  }
  L.push('');
}

L.push('## Índice alfabético');
L.push('');
const alfa = [...funciones].sort((a, b) => a.nombre.localeCompare(b.nombre));
L.push(alfa.map(f => `\`${f.nombre}\` (${f.linea})`).join(' · '));
L.push('');

fs.writeFileSync(OUT, L.join('\n'));
console.log(`✅ MAPA.md generado: ${funciones.length} funciones en ${secciones.length} secciones, ${paneles.length} paneles`);
