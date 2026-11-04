# Música de fondo original (pad + arpegio suave) y efectos (whoosh/golpe/pop), todo sintetizado.
import numpy as np, json, wave
SR=48000; TL=json.load(open('timeline.json')); D=TL['duracion_s']; N=int(D*SR); t=np.arange(N)/SR
def note(m): return 440*2**((m-69)/12)
chords=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]]  # Am F C G
bar=2.4; mus=np.zeros(N)
for k in range(int(D/bar)+1):
    a=int(k*bar*SR); b=min(N,int((k+1)*bar*SR)+SR//2); 
    if a>=N: break
    tt=np.arange(b-a)/SR; env=np.minimum(1,tt/0.6)*np.exp(-np.maximum(0,tt-bar)*4)
    for m in chords[k%4]:
        for det in (-0.12,0,0.12):
            mus[a:b]+=0.05*env*np.sin(2*np.pi*note(m)*2**(det/12)*tt)
    # arpegio en corcheas
    arp=chords[k%4]+[chords[k%4][0]+12]
    for j in range(8):
        s=a+int(j*bar/8*SR); e=min(N,s+int(0.5*SR)); 
        if s>=N: break
        u=np.arange(e-s)/SR; f=note(arp[j%4]+12)
        mus[s:e]+=0.035*np.exp(-u*7)*(np.sin(2*np.pi*f*u)+0.3*np.sin(4*np.pi*f*u))
    # bajo
    s=a; e=min(N,a+int(bar*SR)); u=np.arange(e-s)/SR
    mus[s:e]+=0.07*np.exp(-u*1.2)*np.sin(2*np.pi*note(chords[k%4][0]-12)*u)
mus*=np.minimum(1,t/1.0)*np.minimum(1,(D-t)/1.5)
fx=np.zeros(N); rng=np.random.default_rng(3)
def add(at,sig):
    a=int(at*SR); b=min(N,a+len(sig)); fx[a:b]+=sig[:b-a]
def whoosh(d=0.45):
    n=int(d*SR); u=np.arange(n)/n; w=rng.normal(0,1,n); 
    # filtro paso-bajo variable simple
    y=np.zeros(n); alpha=0.02+0.25*np.sin(np.pi*u); acc=0
    for i in range(n): acc+=alpha[i]*(w[i]-acc); y[i]=acc
    return 0.5*y*np.sin(np.pi*u)**2
def thud(): u=np.arange(int(0.35*SR))/SR; return 0.6*np.exp(-u*14)*np.sin(2*np.pi*(90-50*u)*u)
def pop(f=880): u=np.arange(int(0.18*SR))/SR; return 0.22*np.exp(-u*25)*np.sin(2*np.pi*f*(1+u*2)*u)
for e in TL['escenas'][1:]: add(e['inicio']-0.22, whoosh())
for at in (2.24,3.04,10.0): add(at, thud())
for at,f in ((65.36,990),(74.48,880),(77.04,1180),(78.52,660)): add(at, pop(f))
def wr(name,x):
    x=np.clip(x,-1,1); st=np.stack([x,x],1); 
    with wave.open(name,'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((st*32767).astype('<i2').tobytes())
wr('assets/musica.wav', mus/np.max(np.abs(mus))*0.9); wr('assets/fx.wav', fx/np.max(np.abs(fx))*0.8); print('ok', D)
