# Revisión final · prueba American Fit · aperturas A y B

Archivos revisados: `video_final_9x16_A.mp4` (41,733 s · 25,1 MB) y `video_final_9x16_B.mp4` (41,964 s · 25,6 MB), renderizados con `scripts/render.mjs` desde `plantillas/render_base.html`. Informes completos: `salidas_A/revision/revision.md`, `salidas_B/revision/revision.md`.

> Estado: **borrador técnico, no entregable a pauta.** Faltan la voz real (tiempos PREVISTOS, audio de voz en silencio), la foto real del frasco y la etiqueta (marcador "FOTO REAL PENDIENTE") y la confirmación de la oferta COD (V2, V3, V5 de `guion.md`).

## 1. Técnica (automático, `revisar.py`), igual en A y B
| Control | A | B |
|---|---|---|
| 1080×1920 · 30 fps · H.264 yuv420p · AAC · faststart | ✔ | ✔ |
| Duración = voz ±0,1 s | 41,733 vs 41,744 ✔ | 41,964 vs 41,964 ✔ |
| Tramos estáticos > 2 s | ninguno ✔ | ninguno ✔ |
| Peso | 4,8 Mb/s ✔ | 4,9 Mb/s ✔ |
| Sonoridad / pico real | no aplica sin voz (−26 LUFS) · −6,0 dBTP | idem |
| Sincronía medida de efectos con golpe (`medir_sincronia.py`) | máx 4,0 ms ✔ | máx 4,0 ms ✔ |
| Aperturas comparables (`voz.py comparar`) | 4,196 s | 4,416 s · Δ 0,220 s ✔ |

## 2. Registro de correcciones (visual + sonido)
| Segundo | Se oye | Se ve | Defecto | Corrección | Estado |
|---|---|---|---|---|---|
| 0–4,4 (B) | apertura B | — | B duraba 1,35 s más que A (no comparables) | B: «Si llevas días sin ir al baño, mira esto.» (9 palabras) | ✔ Δ 0,220 s |
| 4,5 · 14,4 · 34,2 | — | — | huecos de 2,1–2,6 s sin micro-evento (A1, C7, C8) | eventos en «barriga», «cápsulas», «hoy», «recibes» | ✔ 0 avisos |
| 13,73 | «…ya no cierra» | pantalón tapado por el subtítulo | choque sujeto/subtítulo | pantalón sube a y=700 | ✔ re-revisado |
| 29,6 | «…té matcha» | lista de ingredientes llega a x=1020 | entra en la franja de botones | lista desde x=430, ancho 480, fuente 44 | ✔ |
| 32,5 | «…aluminio» | contador "60" y "CÁPSULAS" tapados por el frasco | solapamiento | contador arriba, frasco 380 px, zoom 1,15 | ✔ |
| 35,6 | «…pagas…» | rótulo PAGAS AL RECIBIR bajo el subtítulo | rótulo ilegible | rótulo a y=1615 (dentro de zona segura) | ✔ |
| 40,0 | «WhatsApp» | texto de la burbuja se sale | desborde | burbuja 330 px, fuente 38, celular a x=690 | ✔ |
| todo | — | grano solo en ¼ de pantalla | canvas sin estirar | `width/height:100%` | ✔ |
| todo | — | MP4 de 77 MB (14,8 Mb/s) | grano por cuadro dispara el bitrate | grano a 15 Hz y alfa 0,07; CRF 20 + tope 6 Mb/s | ✔ 25 MB |
| 8,60 | «atrapado» | intestino y LENTO en x > 940 | franja de botones | tubo a escala 0,84, centrado en x=500 | ✔ re-revisado |
| 13,69 | «cierra» | — | `cremallera-2.ogg` medido −127,5 ms tras exportar (textura sin golpe, nitidez 0,89) | `enganche-1.ogg` (nitidez 15,5) | ✔ +1,8 ms |
| 21,08 · 21,74 · 38,0 · 39,2 · 3,14 | varios | — | pistas con pico poco definido (`deslizar-1`, `whoosh-2`, `puerta-1`, `burbuja-1`, `sube-2`) | `deslizar-2`, `swish-1`, `puerta-2`, `pop-2`, `sube-1` | ✔ |
| 38,0 | «…en tu casa» | puerta | `timbre-2.ogg` es timbre de **bicicleta** (origen) | `puerta-2.ogg` | ✔ |
| 23,39 | «American **Fit**» | frasco tapado por el subtítulo | choque sujeto/subtítulo | C5 con subtítulo arriba | ✔ |
| 22,97–23,47 | «American Fit» | frasco | golpe 0,26 s después del contacto; luego, frasco fuera de cuadro en la palabra clave | frasco entra en «American Fit» −0,15 s; golpe en −0,03 s (contacto) | ✔ golpe a 22,942 s, frasco visible en 23,01 |

## 3. Fotogramas en palabra clave (A)
`salidas_A/revision/hoja_contacto.jpg`: «inflada» 3,14 · «atrapado» 8,56 · «cierra» 13,69 · «falta» 15,58 · «empujón» 21,08 · «American Fit» 22,97 · «sen» 25,84 · «aluminio» 32,38 · «pagas» 35,40 · «WhatsApp» 39,18. En todos, la imagen muestra la palabra en ese instante, nada sale de la zona segura y el subtítulo no tapa el sujeto.

## 4. Pendiente para cerrar la pieza
1. Voz real: descargar las tomas de ElevenLabs (o edge-tts fuera de este entorno), transcribir con tiempos por palabra, `voz.py importar` → `VOZ_REAL=1 bash correr_prueba.sh` → render → `revisar.py`. Con la voz real: sonoridad −14 LUFS, prueba mono/teléfono del CTA y aperturas ±0,3 s.
2. Foto del frasco recortada (`--frasco`) y foto legible de la etiqueta → cerrar V2/V3.
3. Precio, condiciones y alcance del COD en Ecuador → cerrar V5.
4. Escucha humana de voz + efectos juntos (este entorno no reproduce audio; la sincronía se midió por forma de onda).
