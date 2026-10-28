import numpy as np, wave
sr=44100; D=20.3; n=int(sr*D); t=np.arange(n)/sr
rng=np.random.default_rng(3)
bpm=112; beat=60/bpm
out=np.zeros(n)
def add(sig,start):
    i=int(start*sr); j=min(n,i+len(sig))
    if i<n: out[i:j]+=sig[:j-i]
def env(L,a=0.005,d=8): 
    x=np.arange(L)/sr; return np.minimum(x/a,1)*np.exp(-x*d)
# kick
def kick():
    L=int(.25*sr); x=np.arange(L)/sr; f=45+110*np.exp(-x*30); return np.sin(2*np.pi*np.cumsum(f)/sr)*np.exp(-x*14)
def hat(): 
    L=int(.06*sr); return rng.standard_normal(L)*env(L,0.001,60)*0.25
def clap():
    L=int(.18*sr); return rng.standard_normal(L)*env(L,0.002,22)*0.35
def tone(f,L,d=6,h=(1,.5,.25)):
    x=np.arange(L)/sr; s=sum(a*np.sin(2*np.pi*f*(k+1)*x) for k,a in enumerate(h)); return s*env(L,0.004,d)
nb=int(D/beat)+1
chords=[(220,261.6,329.6),(174.6,220,261.6),(196,246.9,293.7),(164.8,207.7,246.9)]  # Am F G E
bass=[110,87.3,98,82.4]
for b in range(nb):
    T=b*beat; bar=(b//4)%4
    add(kick()*0.9,T)
    if b%2==1: add(clap(),T)
    add(hat(),T+beat/2)
    add(hat()*0.6,T+beat/4); add(hat()*0.6,T+3*beat/4)
    add(tone(bass[bar],int(beat*sr*0.9),5,(1,.4))*0.55,T)
    add(tone(bass[bar],int(beat*sr*0.4),9,(1,.4))*0.45,T+beat*0.5)
    # arpeggio pluck
    ch=chords[bar]
    for k in range(2):
        add(tone(ch[(b*2+k)%3]*2,int(beat*sr*0.5),12,(1,.3,.1))*0.22,T+k*beat/2)
# sfx whooshes at scene changes
def whoosh(L=0.35):
    N=int(L*sr); x=np.linspace(0,1,N); s=rng.standard_normal(N)
    k=np.cumsum(s); s=np.diff(k,prepend=0)
    # bandpass sweep by mixing lowpassed noise
    from scipy.signal import butter,lfilter
    b,a=butter(2,[300/(sr/2),4500/(sr/2)],'band'); s=lfilter(b,a,rng.standard_normal(N))
    return s*np.sin(np.pi*x)**2*0.5
for st in [2.95,5.45,8.7,12.3,17.0]: add(whoosh(),st-0.12)
out=np.tanh(out*1.1); out/=np.abs(out).max()
fade=np.minimum(1,(D-t)/0.6); out*=fade
pcm=(out*0.9*32767).astype(np.int16)
with wave.open('music.wav','wb') as w: w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes(pcm.tobytes())
print('ok')
