# Viral Comer (`video-viral-commerce-9x16`): versión mejorada

- `video-viral-commerce-9x16.zip`: la skill lista para cargar en Claude (Ajustes → Capacidades → Skills → Subir). Trae una carpeta con `SKILL.md` en la raíz y 223 archivos, entre ellos los 142 sonidos OGG con sus créditos.
- `RESUMEN_CAMBIOS.md`: qué cambió en cada fase, comparado con el SKILL.md anterior.
- `prueba_american_fit/`: la prueba completa con un encargo típico. Contiene el guion con la verificación y las dos aperturas, el storyboard, los planos por segundo, los subtítulos, la hoja de sonido con archivos reales, las portadas, las hojas de contacto y la revisión final.

Los MP4 de la prueba (`video_final_9x16_A.mp4` y `_B.mp4`, unos 25 MB cada uno) no se suben al repositorio. Para regenerarlos desde la skill descomprimida:

```bash
bash video-viral-commerce-9x16/ejemplos/american_fit/correr_prueba.sh ./video_american_fit
```

Después, el render y la revisión: los comandos están en `SKILL.md`, Paso 3.

Estado de la prueba: es un borrador técnico. Los tiempos son previstos, porque no se pudo descargar la voz real. El frasco aparece como "FOTO REAL PENDIENTE" y la oferta COD está sin confirmar.
