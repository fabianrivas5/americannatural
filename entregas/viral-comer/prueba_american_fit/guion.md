# Prueba completa · American Fit · video explicativo 9:16 (≈42 s) · aperturas A y B

> Encargo típico de la skill: "video viral commerce de American Fit, ángulo barriga inflada, COD Ecuador, voz hombre".
> Es una **prueba técnica**: el ángulo y los datos de producto son supuestos tomados de la skill `copywriting-american-natural` (ejemplo American Fit: sen, fibra prebiótica, magnesio, vitamina C, té matcha; 60 cápsulas). No hay foto real de frasco ni de etiqueta, ni oferta confirmada → esos campos van `PENDIENTE` y el video se rotula **FOTO REAL PENDIENTE**.
> Los tiempos son **PREVISTOS** (2,65 palabras/s, ritmo medido en la toma real de ElevenLabs de la apertura A: 9 palabras en 3,39 s). La toma no se pudo descargar en este entorno (dominio `elevenlabsusercontent.com` bloqueado), así que todo se recalcula con la voz real con `correr_prueba.sh` + `VOZ_REAL=1`.

## 1. Entrevista (respuestas usadas en la prueba)
| # | Pregunta | Respuesta | Estado |
|---|---|---|---|
| 1 | Producto + foto + etiqueta | American Fit · sin foto | **PENDIENTE foto de frasco y etiqueta** |
| 2 | País / moneda | Ecuador · USD | perfil |
| 3 | Ángulo | barriga inflada aunque comas poco → intestino lento | supuesto de prueba |
| 4 | Avatar | mujer 28–45, come poco, se siente hinchada, ya probó "tomar más agua" | supuesto |
| 5 | Dolor + 2 secundarios | barriga inflada · gases · pantalón que no cierra | supuesto |
| 6 | Mecanismo | intestino lento → se acumula → gases y pesadez; necesita fibra + estímulo | supuesto (ver V1, V4) |
| 7 | Pruebas | ninguna aportada → no se usan cifras ni testimonios | — |
| 8 | Oferta COD | pago contra entrega | **PENDIENTE precio y condiciones** |
| 9 | CTA | WhatsApp | perfil |
| 10 | Duración / voz | 40–45 s · hombre latino (ElevenLabs "Gael", alternativa es-EC-LuisNeural) | — |
| 11 | Estilo | B (azul marino tipo diagrama) | — |
| 12 | Música / efectos | sin música · efectos del banco | perfil |

## 2. Verificación del guion
| Id | Escena | Afirmación | Tipo | Fuente | Veredicto | Corrección |
|---|---|---|---|---|---|---|
| V1 | C1–C2 | intestino lento → se acumula, gases, pesadez | mecanismo | conocimiento general de estreñimiento; **fuente primaria no consultada en esta prueba** (sugerida: NIDDK, "Symptoms & Causes of Constipation") | requiere matiz | se dice "te sientes pesado", no "engordas"; nada de "grasa" |
| V2 | C6 | contiene sen, fibra prebiótica, magnesio, vitamina C y té matcha | producto-contenido | skill copywriting-american-natural (ejemplo) | **PENDIENTE** foto de etiqueta | no se renderiza como final sin la etiqueta |
| V3 | C5, C7 | 60 cápsulas; frasco de aluminio con marca | producto-cantidad / envase | idem + regla de CTA de la skill (frasco de aluminio) | **PENDIENTE** foto | — |
| V4 | C4 | "fibra para tu flora y un empujón" | mecanismo | la fibra prebiótica alimenta bacterias intestinales; el sen es un laxante estimulante | requiere matiz | antes: "fibra que lo alimente y un empujón **suave**" → se quitó "suave" (no verificable) y "lo alimente" → "para tu flora" |
| V5 | C8 | "pagas cuando lo recibes en tu casa" | entrega/pago | regla COD de la skill | **PENDIENTE** confirmación vigente para Ecuador | si no se confirma, C8 pasa a "Pídelo contra entrega" sin "en tu casa" |
| — | borrador | "te lo enviamos a todo Ecuador" | país/entrega | sin fuente | sin evidencia | **eliminado** del guion |

## 3. Dos aperturas (mismo cuerpo C1–C9)
| Apertura | Tipo | Voz | Fotograma 0 | 0–1 s | 1–3 s | Subtítulos | Sonido | Portada |
|---|---|---|---|---|---|---|---|---|
| **A** | pregunta que rompe una creencia | ¿Comes poco y aun así tu barriga amanece inflada? (9 palabras · 4,20 s previsto; toma real ElevenLabs 3,39 s) | silueta frontal + plato pequeño | plato se encoge en «poco» (0,50 s) | flecha a la barriga (2,38 s) · barriga se infla con rebote en «inflada» (3,14 s) | ¿Comes **poco** y aun así / tu barriga amanece **inflada?** | `sube-1.ogg` entrada 3,045 s (pico 0,094 → 3,139 s), −12 dB | t = 3,3 s: barriga inflada + «inflada?» |
| **B** | mira esto (se resuelve en pantalla) | Si llevas días sin ir al baño, mira esto. (9 palabras · 4,42 s previsto) | silueta + calendario "3 DÍAS" | calendario pasa hojas en «días» (0,88 s) | icono baño tachado (1,8 s) · flecha (2,6 s) · zoom entra al abdomen en «esto» (3,36 s) | Si llevas **días** sin / ir al baño, mira **esto.** | `tic-2.ogg` 0,874 s −14 dB · `whoosh-largo-1.ogg` entrada 3,073 s (pico 0,286 → 3,36 s), −10 dB | t = 3,5 s: zoom al abdomen + «esto» |

Comparabilidad: `voz.py comparar` → A 4,196 s · B 4,416 s · diferencia **0,220 s ≤ 0,3 s ✔** (previsto; se repite con la voz real). La primera versión de B («…mira lo que pasa adentro», 12 palabras) daba 1,35 s de diferencia y se acortó.

## 4. Guion (cuerpo común)
| # | Función | Voz en off (frase exacta) | Qué se ve | Evidencia |
|---|---|---|---|---|
| C1 | mecanismo | Cuando tu intestino va lento, lo que comes se queda atrapado. | corte transversal; bolitas se frenan y chocan | V1 |
| C2 | mecanismo | Se acumulan gases, te sientes pesado y el pantalón ya no cierra. | burbujas · pesa "KG" · botón que no llega | V1 |
| C3 | puente | ¿Entonces qué le falta a tu intestino? | signo de pregunta cae | — |
| C4 | mecanismo | Necesita dos cosas: fibra para tu flora y un empujón. | pantalla dividida FIBRA / EMPUJÓN | V4 |
| C5 | producto | Por eso existe American Fit, de American Natural. | frasco entra con rebote | V3 |
| C6 | prueba | Trae sen, fibra prebiótica, magnesio, vitamina C y té matcha. | 5 etiquetas salen del frasco | V2 |
| C7 | prueba | Sesenta cápsulas, en frasco de aluminio con su marca. | contador 0→60 · macro del frasco | V3 |
| C8 | CTA | Pídelo hoy y pagas cuando lo recibes en tu casa. | PÍDELO HOY · puerta · PAGAS AL RECIBIR · caja llega | V5 |
| C9 | CTA | Escríbenos por WhatsApp y separa el tuyo. | la silueta del gancho con el celular (rima con la apertura) | — |

## 5. Voz
- Elegida: ElevenLabs **Gael – Engaging Spanish Ads & News Pro** (`Grm7wn944wkvnkstb6Ep`), modelo `eleven_multilingual_v2`. Se probó primero solo la frase del gancho A (2 tomas: 3,39 s y 3,76 s, 49 créditos cada una). Alternativa gratuita: `edge-tts es-EC-LuisNeural +0%` (bloqueada en este entorno).
- Segmentos: `apertura_A`, `apertura_B`, `cuerpo` (el cuerpo se genera una vez). Pausa entre apertura y cuerpo 0,25 s.
- Para pasar a voz real: descargar las tomas, transcribir con tiempos por palabra (Scribe) y
  `voz.py importar --audio cuerpo.mp3 --palabras scribe.json --texto-archivo cuerpo.txt --salida voz/cuerpo`, luego `VOZ_REAL=1 bash correr_prueba.sh`.

## 6. Planos por segundo, subtítulos y sonido
Generados por los scripts (no escritos a mano):
- Apertura A: `salidas_A/planos.md` (escenas, micro-eventos, subtítulos) · `salidas_A/hoja_sonido.md` · `salidas_A/subtitulos.srt` · `salidas_A/timeline.json`
- Apertura B: `salidas_B/…`

Hoja de sonido de la apertura A (generada desde `salidas_A/timeline.json`; en B el cuerpo es idéntico desplazado +0,220 s y B1 usa `tic-2.ogg` en «días» y `whoosh-largo-1.ogg` en «esto»):

| Escena | Archivo real | Activador · gesto | t objetivo | Sync en pista | Entrada → salida | Nivel vs voz | Nitidez | Motivo |
|---|---|---|---|---|---|---|---|---|
| A1 | `recursos/sonidos/sube-1.ogg` | palabra «inflada» · la barriga se infla | 3,139 | 0,094 | 3,045 → 3,290 | -12 dB pico | 2.27 | barrido corto ascendente («Swoosh 1» de D4XX procesado) = algo que se hincha; golpe claro (nitidez 2,3) en la palabra que nombra el dolor |
| C1 | `recursos/sonidos/golpe-suave-1.ogg` | palabra «atrapado» · las bolitas chocan y se detienen | 8,560 | 0,006 | 8,554 → 9,084 | -12 dB pico | 2.71 | golpe blando = tapón, sin dramatizar |
| C2 | `recursos/sonidos/burbujas-1.ogg` | palabra «gases» · burbujas de gas suben | 10,072 | 0,000 | 10,072 → 11,424 ✂ | -14 dB pico | 1.47 | textura de burbujas mientras se ven: sin golpe definido, entra con la palabra (sync 0) y se corta con fundido antes de 'pesado' |
| C2 | `recursos/sonidos/enganche-1.ogg` | palabra «cierra» · el botón intenta enganchar y rebota | 13,688 | 0,036 | 13,652 → 13,872 | -12 dB pico | 15.51 | enganche metálico seco = el botón que no cierra (la cremallera era una textura sin golpe: no sincronizaba) |
| C3 | — | solo voz | — | — | — | — | — | la pregunta puente necesita aire |
| C4 | `recursos/sonidos/whoosh-1.ogg` | +0.00 s desde inicio de escena · corte a pantalla dividida | 17,367 | 0,097 | 17,270 → 17,589 | -12 dB pico | 1.88 | barrido corto que anticipa el corte de diagrama a paneles |
| C4 | `recursos/sonidos/pop-1.ogg` | palabra «fibra» · icono de fibra aparece | 18,819 | 0,010 | 18,809 → 19,030 | -12 dB pico | 3.78 | pop = aparición de un icono |
| C4 | `recursos/sonidos/deslizar-2.ogg` | palabra «empujón» · la flecha empuja la bolita | 21,083 | 0,459 | 20,624 → 21,424 | -12 dB pico | 1.76 | deslizamiento metálico con golpe claro acompaña el empujón |
| C5 | `recursos/sonidos/swish-1.ogg` | +0.00 s desde inicio de escena · corte al producto | 21,740 | 0,037 | 21,703 → 21,936 | -10 dB pico | 58.22 | barrido seco (nitidez alta) marca el corte de problema a solución |
| C5 | `recursos/sonidos/golpe-seco-1.ogg` | palabra «Fit» +0.12 s · el frasco toca el suelo (primer contacto del rebote) | 23,470 | 0,009 | 23,461 → 23,909 | -10 dB pico | 9.67 | peso real del frasco al tocar el suelo |
| C6 | `recursos/sonidos/clic-1.ogg` | palabra «sen» · aparece la etiqueta 1 | 25,837 | 0,017 | 25,820 → 25,979 | -14 dB pico | 25.76 | clic = marcador en pantalla |
| C6 | `recursos/sonidos/clic-2.ogg` | palabra «magnesio» · aparece la etiqueta 3 | 27,409 | 0,021 | 27,388 → 27,573 | -14 dB pico | 16.96 | variante del clic para no repetir idéntico |
| C6 | `recursos/sonidos/clic-1.ogg` | palabra «matcha» · aparece la etiqueta 5 | 29,515 | 0,017 | 29,498 → 29,657 | -14 dB pico | 25.76 | cierra la lista con el mismo lenguaje |
| C7 | `recursos/sonidos/metal-2.ogg` | palabra «aluminio» · reflejo metálico recorre el frasco | 32,380 | 0,002 | 32,378 → 32,737 | -12 dB pico | 13.42 | toque metálico real = aluminio, identifica el original |
| C8 | `recursos/sonidos/puerta-2.ogg` | palabra «casa» fin · la puerta se abre y aparece la caja | 38,005 | 0,212 | 37,793 → 38,455 | -14 dB pico | 2.27 | puerta real (Kenney «rpg audio», golpe claro) después de la frase de pago, sin taparla: entrega en casa |
| C9 | `recursos/sonidos/pop-2.ogg` | palabra «WhatsApp» · aparece la burbuja de chat | 39,177 | 0,004 | 39,173 → 39,278 | -14 dB pico | 65.41 | pop corto y nítido de mensaje, antes de la acción final |

Cambios de sonido hechos durante la prueba:
- Por **origen**, no por nombre: `timbre-2.ogg` es un timbre de **bicicleta** → puerta; en la plantilla `caja-2.ogg` es una **caja registradora** → `papel-2.ogg`.
- Por **nitidez del pico** (medido en el MP4 exportado: `cremallera-2.ogg` cayó −127,5 ms): `cremallera-2` → `enganche-1`, `deslizar-1` → `deslizar-2`, `whoosh-2` → `swish-1`, `puerta-1` → `puerta-2`, `burbuja-1` → `pop-2`, `sube-2` → `sube-1`; `burbujas-1` (textura) queda con `sync 0`.
- Por **sincronía con el gesto**: el frasco empieza a caer en «American Fit» −0,15 s y toca el suelo 0,12 s después; el golpe se ancla a «American Fit» −0,03 s, así el producto ya está en cuadro cuando se nombra (1.ª corrección: golpe en «Fit», 0,26 s tarde; 2.ª: frasco fuera de cuadro en la palabra clave).

## 7. Revisión final
Ver `revision_final.md` (técnica automática de los dos MP4, fotogramas en cada palabra clave y registro de correcciones con segundo).
