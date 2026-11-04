# Cambios · video-viral-commerce-9x16 (Viral Comer) · 2026-11-04

Base: SKILL.md anterior (68 líneas, un solo archivo). Se conservan nombre, propósito, reglas de oro, estructura de 5 tramos medida en 4 reels, entrevista de 12 preguntas (añadida foto de etiqueta), pipeline determinista `render(t)`, formato 1080×1920 30 fps H.264+AAC y control de calidad. Fuente de las mejoras: dossier "Mejorar Viral Comer" (PDF + Recursos_Viral_Comer.zip).

| Fase | Antes | Ahora |
|---|---|---|
| Perfil | se preguntaba todo en cada pieza | `plantillas/perfil.md`: preferencias fijas separadas de supuestos de la pieza; la entrevista salta lo ya respondido |
| Estrategia y calendario | — | 3–5 pilares, banco de 30 ganchos, 3 métricas con denominador; `scripts/calendario.py` → ICS + HTML de 4 semanas (estado publicado) |
| Investigación | "no inventar" | `plantillas/investigacion.md`: idea que el espectador cuenta, causa→consecuencia, fuente primaria, 2 fuentes para cifras, evidencia en contra, descartes; producto solo desde etiqueta/ficha |
| Verificación del guion | — | tabla por escena: se sostiene / requiere matiz / sin evidencia; contenido, cantidad, precio, país y entrega por separado |
| Ganchos | 1 gancho | **2 aperturas A/B** con el mismo cuerpo, duración ±0,3 s (`voz.py comparar`), fotograma 0 y portada por variante |
| Storyboard | tabla libre | `storyboard.json` con función, palabra clave, acción visible, encuadre, transición, evidencia, eventos y sonidos anclados a palabras → `planos.md` por segundos |
| Dirección visual y continuidad | estilos A/B | guía de recursos por necesidad (escala, proceso, cifra, antes/después…); `shared` para frasco, paleta y luz; corte/continuidad/fundido; subtítulo nunca tapa sujeto/etiqueta |
| Voz | edge-tts | + importar ElevenLabs/Scribe/Whisper/SRT, + tiempos PREVISTOS sin voz, + ensamblar segmentos (el cuerpo se genera una vez) |
| Subtítulos | descritos | generados desde el texto del guion + tiempos de voz (alineación tolerante), 2–5 palabras, sin cortar en "y/el/a", resaltado, posición arriba/abajo, `.srt` + `.json` |
| Diseño sonoro | "whooshes sutiles" | **banco de 142 OGG CC0** conectado al catálogo; por efecto: archivo real, palabra/gesto, t objetivo, sync (pico), entrada = t − pico, salida/recorte con fundido, nivel vs voz, motivo, origen → `hoja_sonido.md/.tsv`; `sonidos.py` buscar/info/colocar/verificar; aviso de nombres engañosos (caja = registradora, timbre = bicicleta) |
| Mezcla | ffmpeg genérico | `mezclar.py`: niveles relativos medidos, música solo con derechos + ducking, −14 LUFS / ≤ −1 dBTP en dos pasadas + limitador, versiones mono y teléfono, informe |
| Render | descrito | `plantillas/render_base.html` (capa común + dibujos por tipo) + `scripts/render.mjs` (Playwright, vista previa por segundos, portada, CRF 20 con tope 6 Mb/s) |
| Revisión y exportación | checklist | `revisar.py`: formato, faststart, duración, tramos estáticos > 2 s, R128, fotogramas en cada palabra clave con zona segura + hoja de contacto, tabla de correcciones con segundo; entregables por variante + copy |
| Sincronía real | — | `recursos/nitidez_pico.tsv` (+ `sonidos.py nitidez`): 71/142 pistas sin golpe dominante, con aviso automático; anclas con `desfase`; `medir_sincronia.py` mide el pico de cada efecto en el MP4 exportado |
| Cambio de narración | manual | re-correr voz → ensamblar → plan_audio: subtítulos y efectos se mueven; un ancla que ya no existe falla con mensaje |

Recursos añadidos (con créditos y licencias): `recursos/sonidos/` (142 OGG + CREDITOS.md, CC0), `recursos/catalogo_sonidos.tsv`, `recursos/tipografias/` (DM Sans, Big Shoulders Display, OFL), `recursos/mapa/` (Natural Earth, dominio público), `recursos/SHA256SUMS.txt`.

Cambio de criterio explícito: la música por defecto pasa de "suave −22 dB" a "sin música salvo pista con derechos y origen" (el banco no trae música).

Prueba completa: `ejemplos/american_fit/` (guion con verificación y dos aperturas, storyboard, planos por segundo, subtítulos, hoja de sonido, revisión final y `correr_prueba.sh`).
