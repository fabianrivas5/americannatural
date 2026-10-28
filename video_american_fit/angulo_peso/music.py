import numpy as np, wave
from scipy.signal import butter,lfilter
sr=44100; D=36.8; n=int(sr*D); t=np.arange(n)/sr
rng=np.random.default_rng(7); out=np.zeros(n)
def add(sig,start,g=1.0):
    i=int(start*sr); j=min(n,i+len(sig))
    if 0<=i<n: out[i:j]+=sig[:j-i]*g
def env(L,a=0.005,d=8): x=np.arange(L)/sr; return np.minimum(x/a,1)*np.exp(-x*d)
def lp(x,fc): b,a=butter(2,fc/(sr/2),'low'); return lfilter(b,a,x)
def saw(f,L): x=np.arange(L)/sr; return 2*((x*f)%1)-1
def tone(f,L,d=6,h=(1,.5,.25)): x=np.arange(L)/sr; return sum(a*np.sin(2*np.pi*f*(k+1)*x) for k,a in enumerate(h))*env(L,0.004,d)
def kick(): L=int(.25*sr); x=np.arange(L)/sr; f=45+110*np.exp(-x*30); return np.sin(2*np.pi*np.cumsum(f)/sr)*np.exp(-x*14)
def hat(): L=int(.06*sr); return rng.standard_normal(L)*env(L,0.001,60)*0.25
def clap(): L=int(.18*sr); return rng.standard_normal(L)*env(L,0.002,22)*0.35
SW=14.3   # cambio de tensión a esperanza
# ---------- TENSIÓN (0 – SW): Dm, drone grave, latido, reloj, cuerdas disonantes ----------
L=int(SW*sr); x=np.arange(L)/sr
drone=lp(saw(73.4,L)*0.5+saw(110,L)*0.3,400)*(0.5+0.5*np.minimum(x/5,1))
trem=(0.6+0.4*np.sin(2*np.pi*5.5*x))
vio=(np.sin(2*np.pi*587*x)+np.sin(2*np.pi*622*x))*0.05*np.minimum(x/8,1)*trem   # D5 + Eb5 (choque)
add(drone*0.55+vio,0)
hb=60/76
for k in range(int(SW/hb)+1):
    T=k*hb
    add(kick()*0.55,T); add(kick()*0.35,T+0.26)
for k in range(int(SW/0.5)):
    add(hat()*0.9,k*0.5+0.25)
# riser final
Lr=int(2.2*sr); xr=np.linspace(0,1,Lr); nz=lp(rng.standard_normal(Lr),5000)*xr**2*0.5
add(nz,SW-2.2)
# impacto + silencio breve
Li=int(1.2*sr); xi=np.arange(Li)/sr; add(np.sin(2*np.pi*(50*np.exp(-xi*3))*xi*3)*np.exp(-xi*3)*0.9+rng.standard_normal(Li)*np.exp(-xi*6)*0.25,SW)
# ---------- ESPERANZA (SW – fin): C Am F G, beat, pad, campanas ----------
bpm=108; beat=60/bpm
chords=[(261.6,329.6,392),(220,261.6,329.6),(174.6,220,261.6),(196,246.9,293.7)]
bass=[65.4,55,43.65,49]
b0=int((D-SW)/beat)+1
for b in range(b0):
    T=SW+b*beat; bar=(b//4)%4; ch=chords[bar]
    add(kick()*0.9,T)
    if b%2==1: add(clap(),T)
    add(hat(),T+beat/2); add(hat()*0.6,T+beat/4); add(hat()*0.6,T+3*beat/4)
    add(tone(bass[bar]*2,int(beat*sr*0.9),5,(1,.4))*0.55,T)
    add(tone(bass[bar]*2,int(beat*sr*0.4),9,(1,.4))*0.4,T+beat*0.5)
    for k in range(2): add(tone(ch[(b*2+k)%3]*2,int(beat*sr*0.5),12,(1,.3,.1))*0.22,T+k*beat/2)
    if b%4==0:
        Lp=int(beat*4*sr)
        pad=sum(lp(saw(f,Lp),1800) for f in ch)*0.12*np.minimum(np.arange(Lp)/sr/0.4,1)*np.exp(-np.arange(Lp)/sr*0.35)
        add(pad,T)
# campanas esperanzadoras desde 28.8 (cierre)
mel=[523.3,659.3,784,1046.5,784,659.3,784,1046.5]
for i,f in enumerate(mel*3):
    T=28.8+i*beat/2
    if T<D-0.5: add(tone(f,int(.8*sr),5,(1,.35,.12))*0.28,T)
# acorde final largo
Lf=int(3.2*sr); xf=np.arange(Lf)/sr
fin=sum(np.sin(2*np.pi*f*xf)*0.22 for f in (261.6,329.6,392,523.3))*np.exp(-xf*0.7)
add(fin,D-3.4)
# whooshes en cambios de escena
def whoosh(L=0.35):
    N=int(L*sr); xx=np.linspace(0,1,N); b,a=butter(2,[300/(sr/2),4500/(sr/2)],'band'); return lfilter(b,a,rng.standard_normal(N))*np.sin(np.pi*xx)**2*0.5
for st in [4.3,9.5,14.3,21.7,28.8]: add(whoosh(),st-0.12)
out=np.tanh(out*1.05); out/=np.abs(out).max()
out*=np.minimum(1,(D-t)/0.8)
pcm=(out*0.9*32767).astype(np.int16)
with wave.open('music.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes(pcm.tobytes())
print('ok')
