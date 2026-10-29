# Krec'UP — Video viral 9:16 (guion final locutado)

Voz: Juan (Higgsfield, seed_audio) · Música: drama sintetizada por código · 1080×1920 · 30 fps · ~103 s

| # | Bloque | Tiempo | Voz en off |
|---|---|---|---|
| 1 | Hook | 0:00–0:08 | Si eres el más bajito de tu grupo, no es tu genética. Es que tu hormona de crecimiento está DORMIDA. (Texto grande: ¿HGH APAGADA?) |
| 2 | Bucle abierto | 0:08–0:20 | Te voy a mostrar por qué tu cuerpo puede dejar de crecer antes de tiempo, y qué están haciendo muchos jóvenes para no desperdiciar su desarrollo. Quédate hasta el final, porque al final te digo cómo lo consiguen. |
| 3 | Contexto rápido | 0:21–0:35 | Mira, después de la pubertad tu producción de HGH cae en picada. Si duermes mal, comes mal y no tienes los precursores correctos, nunca maximizas tu estatura real. |
| 4 | Desarrollo / Valor | 0:35–0:54 | Por eso crearon Krec'UP. Combina L-Arginina, que es un aminoácido precursor clave para estimular la producción natural de hormona de crecimiento, más Zinc, que es esencial para el desarrollo óseo y físico. No te alarga el hueso por arte de magia: le da a tu cuerpo lo que necesita para que tu propia genética llegue al 100%. |
| 5 | Prueba social | 0:54–1:04 | Por eso cada vez más jóvenes combinan suplementación, sueño y ejercicio mientras todavía están creciendo. Y se está volviendo viral. |
| 6 | Reforzamiento | 1:05–1:19 | Entiende esto: no es que cambies tu ADN. Es que dejas de sabotear tu crecimiento, y por fin le das a tu cuerpo el combustible para crecer, imponer más respeto y transformar tu presencia. |
| 7 | Cierre del bucle | 1:20–1:31 | Entonces, ¿cómo activas esa HGH dormida? Con precursores como L-Arginina + Zinc, 8 horas de sueño profundo y estímulos como colgarte y entrenar. Krec'UP es justo esa base. |
| 8 | CTA | 1:32–1:43 | Si quieres probar el protocolo completo, comenta la palabra CRECER y te mando cómo se toma correctamente y dónde conseguirlo original en tu ciudad. Guarda este video porque lo van a borrar. |

Cambios acordados frente al guion original: bloque 2 (sin "después de los 18 / volver a activar") y bloque 5 (sin casos de 3–7 cm, 1.70→1.76 ni "farmacias", por no estar documentados).

## Reproducir
1. `node render.js` → `seg0..3.mp4` (Playwright, 4 workers) y concatenar.
2. `python3 music.py` → `musica.wav`.
3. Mezcla: voz + música (−22 dB con ducking) → `video_final_9x16.mp4`.
