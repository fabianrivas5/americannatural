# Recorta el frasco quitando el fondo blanco (flood fill desde bordes) -> PNG con alfa y sombra limpia
import sys
from PIL import Image, ImageFilter, ImageChops
import numpy as np
from collections import deque
src, dst = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB"); a = np.asarray(im).astype(int)
h, w, _ = a.shape
bg = (a.min(axis=2) > 232) & ((a.max(axis=2) - a.min(axis=2)) < 18)
mask = np.zeros((h, w), bool); q = deque()
for x in range(w):
    for y in (0, h-1):
        if bg[y, x]: mask[y, x] = True; q.append((y, x))
for y in range(h):
    for x in (0, w-1):
        if bg[y, x] and not mask[y, x]: mask[y, x] = True; q.append((y, x))
while q:
    y, x = q.popleft()
    for dy, dx in ((1,0),(-1,0),(0,1),(0,-1)):
        ny, nx = y+dy, x+dx
        if 0 <= ny < h and 0 <= nx < w and bg[ny, nx] and not mask[ny, nx]:
            mask[ny, nx] = True; q.append((ny, nx))
alpha = Image.fromarray(((~mask)*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
out = im.convert("RGBA"); out.putalpha(alpha)
out = out.crop(out.getbbox()); out.save(dst); print(out.size)
