import numpy as np, wave, json
from scipy.signal import butter,lfilter
sr=44100; D=52.6; n=int(sr*D); out=np.zeros(n); rng=np.random.default_rng(11)
def add(sig,t,g=1.0):
    i=int(t*sr); j=min(n,i+len(sig))
    if 0<=i<n: out[i:j]+=sig[:j-i]*g
def X(L): return np.arange(int(L*sr))/sr
def env(x,a,d): return np.minimum(x/a,1)*np.exp(-x*d)
def bp(x,lo,hi): b,a=butter(2,[lo/(sr/2),hi/(sr/2)],'band'); return lfilter(b,a,x)
def pop():  x=X(.12); f=300+900*np.exp(-x*40); return np.sin(2*np.pi*np.cumsum(f)/sr)*env(x,.002,30)*.8
def ding(f=1318,L=.6): x=X(L); return (np.sin(2*np.pi*f*x)+.4*np.sin(2*np.pi*f*2*x)+.15*np.sin(2*np.pi*f*3*x))*env(x,.003,7)*.6
def thud(): x=X(.35); f=110*np.exp(-x*8)+45; return np.sin(2*np.pi*np.cumsum(f)/sr)*env(x,.002,9)+rng.standard_normal(len(x))*env(x,.001,60)*.25
def buzz(L=.28): x=X(L); return np.sign(np.sin(2*np.pi*140*x))*env(x,.005,5)*.35
def swoosh(L=.4): x=X(L); s=bp(rng.standard_normal(len(x)),400,5000)*np.sin(np.pi*x/L)**2; return s*.6
def click(): x=X(.03); return rng.standard_normal(len(x))*env(x,.0005,150)*.5
def slap(): x=X(.12); return bp(rng.standard_normal(len(x)),600,3500)*env(x,.001,35)*.7
def coin(): x=X(.35); return (np.sin(2*np.pi*1568*x)*np.exp(-x*14)+np.sin(2*np.pi*2093*x)*np.exp(-x*10)*(x>.04))*env(x,.001,1)*.35
def msg(): return np.concatenate([ding(1175,.18)[:int(.12*sr)],ding(1568,.5)])*.7
def vib(L=.9): x=X(L); return np.sign(np.sin(2*np.pi*95*x))*(0.5+0.5*np.sign(np.sin(2*np.pi*9*x)))*.25*np.minimum(1,(L-x)/.1)
def clack(): x=X(.09); return (np.sin(2*np.pi*1900*x)*env(x,.001,70)+rng.standard_normal(len(x))*env(x,.001,90)*.5)*.6
def capop(): x=X(.2); f=180+500*np.exp(-x*30); return np.sin(2*np.pi*np.cumsum(f)/sr)*env(x,.002,16)*.9+bp(rng.standard_normal(len(x)),2000,8000)*env(x,.01,14)*.25
def sparkle(): return sum(np.pad(ding(f,.35),(int(i*.05*sr),0))[:int(.6*sr)] if False else 0 for i,f in enumerate([2093])) if False else ding(2349,.35)*.35
def tick(): x=X(.05); return np.sin(2*np.pi*900*x)*env(x,.001,90)*.5
EVENTS=[]; LAST=[None]
def _wrap(nm):
    g=globals()[nm]
    def f(*a,**k):
        r=g(*a,**k); LAST[0]=nm; return r
    globals()[nm]=f
for _n in ['pop','ding','thud','buzz','swoosh','click','slap','coin','msg','vib','clack','capop','sparkle','tick']: _wrap(_n)
_add0=add
def add(sig,t,g=1.0):
    EVENTS.append((round(t,3),LAST[0])); _add0(sig,t,g)

import json
d=json.load(open('data.json'))
def ring():
    return np.concatenate([ding(2093,.07)[:int(.07*sr)] for _ in range(4)])*.8
_wrap_ring=ring
for y in d['yt']:
    add(pop(),y['s'],.55); add(swoosh(.22),max(0,y['s']-0.05),.35)
# 1 gancho
for k in range(5): add(ring(),0.05+k*0.45,.5)
for i in range(6): add(pop(),1.0+i*0.45,.25)
add(pop(),2.6,.6); add(buzz(.25),2.6,.35)
# 2 autoridad
add(swoosh(.5),7.79,.6); add(pop(),7.79,.6)
for i,ts in enumerate([0.55,0.8,1.05]):
    add(clack(),7.79+ts+0.4,.9); add(clack(),7.79+ts+1.0,.5)
add(swoosh(.45),10.0,.6); add(buzz(.3),10.7,.7); add(thud(),11.2,.9); add(pop(),11.6,.5); add(ding(1318,.6),13.55,.7)
# 3 agitación
add(swoosh(.45),16.95,.6); add(buzz(.3),17.45,.6); add(slap(),17.85,.6); add(capop(),18.65,1.0)
add(swoosh(.35),20.4,.7); add(thud(),20.4,.6); add(buzz(.45),20.7,.45)
for i in range(3): add(tick(),21.0+i*0.5,.5)
add(swoosh(.35),24.1,.7); add(thud(),24.1,.6); add(pop(),24.3,.6); add(slap(),24.6,.6); add(pop(),25.1,.6); add(swoosh(.6),24.6,.4); add(buzz(.3),26.0,.6)
# 4 mecanismo
add(swoosh(.5),28.75,.6)
for i in range(3): add(ding(1046+i*262,.5),28.95+i*0.25,.6)
for i in range(3): add(pop(),30.0+i*0.9,.6); add(tick(),30.0+i*0.9,.5)
for i,t in enumerate([32.71,34.68,38.03]): add(ding(1318+i*196,.7),t,.7); add(sparkle(),t+0.1,.6); add(pop(),t,.5)
add(swoosh(.4),40.19,.6); add(pop(),40.19,.6); add(pop(),40.4,.5); add(ding(1568,.8),40.6,.7)
# 5 transformación
add(swoosh(.5),42.13,.6); add(swoosh(.4),42.3,.4)
for i in range(6): add(sparkle(),44.1+i*0.06,.6)
add(ding(2093,.9),44.1,.6); add(ding(1318,.5),45.1,.6)
for i in range(10): add(sparkle(),42.63+i*0.05,.25)
# 6 cta
add(pop(),47.39,.7); add(swoosh(.4),47.39,.5); add(pop(),49.0,.6)
for i in range(13): add(click(),49.3+i*0.8/13,.6)
add(ding(1318,.5),50.4,.7); add(click(),50.4,.8); add(ding(1760,.8),50.65,.5)
out=np.tanh(out*.9); out/=max(1e-6,np.abs(out).max())
with wave.open('sfx.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes((out*.9*32767).astype(np.int16).tobytes())
json.dump(sorted([[max(0,a),b or 'ring'] for a,b in EVENTS]),open('events.json','w')); print('ok',len(EVENTS))
