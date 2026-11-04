# Construye timeline.json: palabras (con texto de pantalla), subtítulos (2-5 palabras) y escenas.
import json, re
raw = open("palabras_raw.txt", encoding="utf-8").read().strip().split("|")
W = []
for r in raw:
    t, a, b = r.rsplit(" ", 2); W.append({"voz": t, "inicio_ms": round(float(a)*1000), "fin_ms": round(float(b)*1000)})
# Texto en pantalla: números en cifra y nombre de marca
def merge(i, n, txt):
    W[i]["pantalla"] = txt; W[i]["fin_ms"] = W[i+n-1]["fin_ms"]
    for k in range(1, n): W[i+k]["pantalla"] = None
for w in W: w["pantalla"] = w["voz"]
for i, w in enumerate(W):
    v = w["voz"]
    if v == "noventa": merge(i, 3, "90%")
    if v == "treinta" and W[i+2]["voz"].startswith("cinco"): merge(i, 3, "35,")
    if v == "tres,": w["pantalla"] = "3,"
    if v == "cuatro": w["pantalla"] = "4"
    if v == "siete": w["pantalla"] = "7"
    if v == "veinte": w["pantalla"] = "20"
    if v == "Seven": merge(i, 3, "7 DAYS CLEANSE")
tok = [dict(texto=w["pantalla"], i=w["inicio_ms"], f=w["fin_ms"]) for w in W if w["pantalla"]]
# Subtítulos: cortar en puntuación fuerte, máx 4 palabras (marca cuenta como 1), o pausa > 280 ms
# Subtítulos: frases cortadas en puntuación y repartidas en bloques parejos de 2-4 palabras (5 si cabe)
import math
claus, cur = [], []
for t in tok:
    cur.append(t)
    if re.search(r"[.,:?!\"]$", t["texto"]) and not re.match(r"^\d+,$", t["texto"]): claus.append(cur); cur = []
if cur: claus.append(cur)
# unir cláusulas de 1 palabra a la siguiente/anterior
m, k = [], 0
while k < len(claus):
    c = claus[k]
    if len(c) == 1 and k+1 < len(claus) and len(claus[k+1]) + 1 <= 5: claus[k+1] = c + claus[k+1]
    elif len(c) == 1 and m and len(m[-1]) + 1 <= 5: m[-1] = m[-1] + c
    else: m.append(c)
    k += 1
bloques = []
for c in m:
    n = len(c); k = 1 if n <= 5 else math.ceil(n / 4); base, extra = divmod(n, k); p = 0
    for j in range(k):
        sz = base + (1 if j < extra else 0); bloques.append(c[p:p+sz]); p += sz
subs = []
for k, b in enumerate(bloques):
    nxt = bloques[k+1][0]["i"] if k+1 < len(bloques) else b[-1]["f"] + 900
    subs.append({"inicio_ms": b[0]["i"], "fin_ms": nxt, "palabras": b})
KEY = {"piedra","NO","estreñimiento","error","90%","tapón","concreto","35","colon","empuja","peristaltismo","pudre","endurece","agua","fibra","magnesio","volumen","YA","pegada","mueve","raíz","3","4","días","Inflamadas","dolor","liviana","regular","seco","fuerza","empujar","grande","café","ayunas","bloqueado","7","7 DAYS CLEANSE","noche","reactivar","empuje","duermes","LIMPIA","original","contra","entrega","20","frascos","caca","bolitas","duras"}
for s in subs:
    for p in s["palabras"]:
        p["clave"] = re.sub(r"[^\wñáéíóúÁÉÍÓÚ% ]", "", p["texto"]) in KEY
# Escenas (8 pasos del guion), inicio = primera palabra
ESC = [("hook",0),("bucle",4.64),("contexto",14.0),("valor",24.24),("prueba",36.16),("refuerzo",48.16),("cierre",57.84),("cta",70.16)]
dur = 80.48 + 0.9
escenas = [{"id":n,"inicio":s,"fin":(ESC[k+1][1] if k+1 < len(ESC) else dur)} for k,(n,s) in enumerate(ESC)]
json.dump({"duracion_s": dur, "fps": 30, "palabras": W, "subtitulos": subs, "escenas": escenas}, open("timeline.json","w",encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(W), len(subs)); [print(round(s["inicio_ms"]/1000,2), " ".join(p["texto"] for p in s["palabras"])) for s in subs[:200]]
