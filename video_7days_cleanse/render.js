// Captura determinista cuadro a cuadro: node render.js preview t1 t2 ... | node render.js full <workers>
const { chromium } = require('playwright');
const { spawn, execSync } = require('child_process');
const fs = require('fs'); const http = require('http'); const path = require('path');
const TL = JSON.parse(fs.readFileSync('timeline.json', 'utf8')); const FPS = 30;
const MIME = { '.html': 'text/html', '.json': 'application/json', '.png': 'image/png', '.woff2': 'font/woff2' };
function serve() { return new Promise(r => { const s = http.createServer((q, res) => { const f = path.join(__dirname, decodeURIComponent(q.url.split('?')[0])); fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); res.end(d); }); }).listen(0, () => r(s)); }); }
async function page(browser, port) { const p = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 }); p.on('pageerror', e => console.error('ERR', e.message)); await p.goto(`http://127.0.0.1:${port}/render.html`); await p.waitForFunction(() => window.READY === true); return p; }
(async () => {
  const mode = process.argv[2]; const srv = await serve(); const port = srv.address().port; const browser = await chromium.launch();
  if (mode === 'preview') {
    fs.mkdirSync('preview', { recursive: true }); const p = await page(browser, port);
    for (const t of process.argv.slice(3).map(Number)) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `preview/f_${t.toFixed(2)}.jpg`, type: 'jpeg', quality: 80 }); }
  } else {
    const N = Number(process.argv[3] || 4); const total = Math.ceil(TL.duracion_s * FPS); fs.mkdirSync('segs', { recursive: true });
    const per = Math.ceil(total / N); const t0 = Date.now();
    await Promise.all(Array.from({ length: N }, async (_, k) => {
      const a = k * per, b = Math.min(total, a + per); const p = await page(browser, port);
      const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '17', '-preset', 'veryfast', '-r', String(FPS), `segs/s${k}.mp4`]);
      for (let f = a; f < b; f++) { await p.evaluate(t => render(t), f / FPS); const buf = await p.screenshot({ type: 'jpeg', quality: 95 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); if (k === 0 && f % 150 === 0) console.log(`frame ${f}/${b} ${((Date.now() - t0) / 1000).toFixed(0)}s`); }
      ff.stdin.end(); await new Promise(r => ff.on('close', r));
    }));
    fs.writeFileSync('segs/lista.txt', Array.from({ length: N }, (_, k) => `file 's${k}.mp4'`).join('\n'));
    execSync('ffmpeg -y -loglevel error -f concat -safe 0 -i segs/lista.txt -c copy video_mudo.mp4'); console.log('listo', total, 'cuadros', ((Date.now() - t0) / 1000).toFixed(0) + 's');
  }
  await browser.close(); srv.close();
})();
