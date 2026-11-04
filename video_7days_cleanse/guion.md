# 7 Days Cleanse — Video 9:16 (versión B, guion completo)

- Formato: 1080×1920, 30 fps, H.264 yuv420p + AAC 192k. Duración: 81,4 s (voz real 80,48 s + 0,9 s de cola).
- Voz: ElevenLabs, "Daniela" (español latino neutro, mujer), modelo eleven_v4, toma 1 (80,4 s).
  Flow: https://elevenlabs.io/app/flows/uKgEnIHHQrtFlPGTj7YI
- Tiempos por palabra: transcripción ElevenLabs Scribe → `palabras_raw.txt` → `timeline.json`.
- Estilo B: azul marino tipo diagrama, ilustración vectorial original, grano sutil, zoom continuo.

| # | Tiempo | Voz en off | Texto en pantalla | Micro-eventos |
|---|---|---|---|---|
| 1 Gancho | 0,00–4,64 | Si tu caca sale en bolitas duras como piedra, NO es estreñimiento. | SÍNDROME DE CACA DE PIEDRA | Mujer pujando → colon con bolitas (1,0 s) → caen con golpe en "piedra" (2,24) → sello NO (3,04) → "estreñimiento" tachado (3,56) |
| 2 Bucle | 4,64–14,00 | Hay un error que el 90% comete en las mañanas… Quédate hasta el final porque te muestro cuál es. | El error que te está bloqueando | Doctora → STOP (4,96) → contador 90% (5,6) → sol + café (7,36) → bloque TAPÓN cae (9,56) → candado "¿cuál es?" (10,96) → flecha (12,48) |
| 3 Contexto | 14,00–24,24 | Después de los 35, tu colon ya no empuja. Se llama peristaltismo… se pudre y se endurece. | 6 METROS DE INTESTINO BLOQUEADO | 35+ (14,64) → tubo de pasta se aprieta y se suelta (16,64) → colon con flechas de peristaltismo (18,08) → freno, flechas rojas (20,08) → se acumula (21,44) → olor (22,4) → se vuelve piedra gris (23,2) |
| 4 Valor | 24,24–36,16 | Y por eso no te sirve tomar más agua, más fibra o magnesio… No ataca la raíz. | AGUA ✗ FIBRA ✗ MAGNESIO ✗ | X roja sincronizada a cada palabra → piedra crece con fibra (30,8) → PEGADA (32,16) → flecha no la mueve (33,52) → diana "la raíz" ✗ (34,56) |
| 5 Prueba | 36,16–48,16 | Tengo pacientes que pasaban 3, 4 días sin ir… "doctora, por fin me siento liviana y regular". | 3, 4 DÍAS SIN IR AL BAÑO → "Por fin me siento liviana" + TESTIMONIO REAL | Calendario tachado (3 y 4 en su palabra) → mujer inflamada + dolor → colon reactivado (42,16) → chat que se escribe (44,64) → mujer feliz + frasco real |
| 6 Refuerzo | 48,16–57,84 | Entiende esto: no es que tu cuerpo esté seco… ese tapón se hace más grande. | NO ES FALTA DE AGUA. ES FALTA DE EMPUJE. | Gota ✗ (50,72) → batería baja (52,88) → alerta (54,8) → tapón crece con pulso rojo (55,92) |
| 7 Cierre | 57,84–70,16 | ¿El error de la mañana? Tomar café y fibra en ayunas… 7 Days Cleanse en la noche… mientras duermes. | ¿EL ERROR DE LA MAÑANA? → TRUCO DE 7 SEGUNDOS: 7 DAYS CLEANSE | Café ✗ / fibra ✗ / candado → noche, cronómetro 7s (63,76) → entra el frasco (65,36) → cápsulas + agua (66,48) → colon con flechas verdes (67,6) → zzz (69,28) |
| 8 CTA | 70,16–81,38 | Si llevas días inflamada… comenta la palabra LIMPIA… pago contra entrega. Solo quedan 20 frascos hoy. | Comenta LIMPIA · Pago Contra Entrega | Doctora señala abajo (73,36) → burbuja LIMPIA (74,48) → sello ORIGINAL frasco de aluminio (76,4) → botón PAGO CONTRA ENTREGA (77,04) → QUEDAN 20 FRASCOS (78,52) |

Pendiente de decisión de Gabo (se dejó tal cual el guion): "90%", "Testimonio real" y "Solo quedan 20 frascos".

## Reproducir
```
python3 recorte.py <foto_producto> assets/frasco.png
python3 timeline.py
python3 musica.py
node render.js full 4        # -> video_mudo.mp4
./mezcla.sh assets/voz.mp3   # -> video_final_9x16.mp4
```
