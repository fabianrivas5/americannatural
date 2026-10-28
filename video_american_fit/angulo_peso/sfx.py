import numpy as np, wave, json
from scipy.signal import butter,lfilter
sr=44100; D=35.6; n=int(sr*D); out=np.zeros(n); rng=np.random.default_rng(11)
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
ev=json.load(open('ev.json'))
# textos amarillos: pop + pequeño swoosh
for t in ev['yt']:
    add(pop(),t,.55); add(swoosh(.22),t-0.05,.35)
# S1
add(swoosh(.5),0.0,.6); add(buzz(.3),2.0,.7); add(ding(880,.3),2.2,.5)
# S2
add(swoosh(.4),4.3,.6); add(pop(),4.4,.6)
for i in range(15):
    t=4.3+0.6+i*0.28
    if t<9.4: add(tick(),t,.55)
for t in (5.2,6.0,6.8): add(slap(),t,.7)
# S3
add(vib(.9),9.5,.9)
for t in (9.75,10.7,11.5): add(msg(),t,.6)
for t in (11.0,11.35,11.7): add(thud(),t,.5)
for i in range(7): add(coin(),12.5+i*.13,.6)
add(pop(),11.7,.6)
# S4
add(swoosh(.5),14.3,.6); add(pop(),14.3,.7)
add(capop(),17.65,1.0); add(swoosh(.3),17.4,.5); add(pop(),17.8,.6)
for i,ts in enumerate([ev['c'][0]-0.15,ev['c'][0]+0.45,ev['c'][0]+1.05]):
    add(clack(),ts+.3,.9); add(clack(),ts+.42,.5); add(ding(1568+i*260,.45),ts+.3,.4)
for i in range(3): add(ding(1760,.3),ev['c'][1]+i*0.9,.3)
# S5
add(swoosh(.5),21.7,.6)
for i in range(3): add(pop(),22.6+i*.15,.45)
add(ding(1175,.4),22.2,.45); add(buzz(.28),22.7,.6); add(thud(),22.9,.8)
for i in range(3): add(pop(),23.45+i*.22,.6); add(ding(1318+i*220,.5),23.9+i*.22,.55)
add(swoosh(.4),24.5,.5); add(pop(),24.55,.7); add(ding(1568,.7),25.0,.7); add(click(),25.0,.7)
add(swoosh(.4),26.5,.5); add(pop(),26.5,.6); add(buzz(.35),26.8,.8); add(thud(),26.8,.9)
# S6
add(swoosh(.5),28.8,.6)
for i in range(9): add(sparkle(),29.1+i*.05+ (i%3)*.35,.5)
add(ding(1318,.5),33.2,.7); add(click(),33.2,.8); add(ding(1760,.8),33.45,.5)
out=np.tanh(out*.9); out/=max(1e-6,np.abs(out).max())
with wave.open('sfx.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes((out*.9*32767).astype(np.int16).tobytes())
print('ok')
