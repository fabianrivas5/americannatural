import numpy as np, wave
SR=44100; D=103.4; n=int(SR*D); t=np.arange(n)/SR; rng=np.random.default_rng(7)
mus=np.zeros(n); fx=np.zeros(n)
def f(m): return 440*2**((m-69)/12)
bpm=90; beat=60/bpm; bar=beat*4
# chord progression i-VI-III-VII in D minor (midi roots)
prog=[[50,53,57],[46,50,53],[53,57,60],[48,52,55]]
def add(buf,start,sig):
    i=int(start*SR); j=min(n,i+len(sig)); 
    if i<n: buf[i:j]+=sig[:j-i]
def tone(freq,dur,harm=(1,.5,.33,.25),att=0.01,rel=0.3,vib=0):
    tt=np.arange(int(dur*SR))/SR; s=np.zeros_like(tt)
    for k,a in enumerate(harm,1): s+=a*np.sin(2*np.pi*freq*k*tt+vib*np.sin(2*np.pi*5*tt))
    env=np.minimum(1,tt/att)*np.exp(-tt/rel); return s*env
# drone pad with slow swells, chord changes every 2 bars
seg=bar*2
for ci in range(int(D/seg)+1):
    ch=prog[ci%4]; st=ci*seg
    for m in [ch[0]-12,ch[0]-24]+ch:
        tt=np.arange(int((seg+1)*SR))/SR
        s=sum(a*np.sin(2*np.pi*f(m)*k*tt+0.3*np.sin(2*np.pi*0.2*tt)) for k,a in enumerate((1,.35,.18,.08),1))
        env=np.minimum(1,tt/1.2)*np.minimum(1,np.maximum(0,(seg+1-tt)/1.0))
        add(mus,st,s*env*(0.10 if m<45 else 0.05))
    # pulsing low strings (eighths)
    for e in range(int(seg/(beat/2))):
        m=ch[0]-12 if e%2==0 else ch[0]
        add(mus,st+e*beat/2,tone(f(m),beat/2,harm=(1,.6,.4,.3,.2),att=0.015,rel=0.12)*0.09)
    # sparse piano melody
    mel=[ch[2]+12,ch[1]+12,ch[0]+12,ch[1]+12]
    for b,m in enumerate(mel):
        add(mus,st+b*beat*2,tone(f(m),2.5,harm=(1,.4,.15,.05),att=0.005,rel=0.9)*0.07)
# intensity curve: softer under explanation, build to reveals
inten=np.interp(t,[0,7,8,20,33,34.9,36,53,64,79,89,91.6,103.4],[1,.8,.7,.75,1,1,.8,.75,.8,.85,1,1,.9])
mus*=inten
# booms
def boom(st,amp=1):
    tt=np.arange(int(1.8*SR))/SR; fr=60*np.exp(-tt*2)+32
    s=np.sin(2*np.pi*np.cumsum(fr)/SR)*np.exp(-tt*2.2); s+=rng.standard_normal(len(tt))*np.exp(-tt*30)*0.3
    add(fx,st,s*0.55*amp)
def noise_band(dur,lo,hi):
    m=int(dur*SR); x=rng.standard_normal(m); X=np.fft.rfft(x); fr=np.fft.rfftfreq(m,1/SR); X[(fr<lo)|(fr>hi)]=0; return np.fft.irfft(X,m)
def whoosh(st,dur=0.45,amp=1):
    s=noise_band(dur,600,5000); tt=np.arange(len(s))/SR; env=np.sin(np.pi*tt/dur)**2; s=s/np.abs(s).max(); add(fx,st-dur*0.5,s*env*0.14*amp)
def riser(end,dur=2.0):
    s=noise_band(dur,1500,9000); s/=np.abs(s).max(); tt=np.arange(len(s))/SR; add(fx,end-dur,s*(tt/dur)**3*0.22)
    add(fx,end-dur,tone(f(62),dur,harm=(1,.5,.3),att=dur*0.9,rel=99)*0.06)
blocks=[0,8.22,20.72,34.91,53.99,64.70,79.59,91.64]
subs=[2.0,3.6,12.3,16.6,26.6,32.0,36.9,42.7,46.8,49.0,58.7,62.3,68.6,71.8,76.2,82.7,89.8,93.8,95.6,100.8]
for b in blocks: boom(b, 1.2 if b in (0,34.91,91.64) else 0.9)
boom(34.9,1.3); boom(89.8,1.1)
for s in subs+blocks[1:]: whoosh(s)
riser(34.9); riser(89.8,1.6); riser(8.2,1.2)
# hits on "DORMIDA" and stamp moments
for s in [6.46,10.6,25.1,52.72,94.6]: boom(s,0.6)
out=mus*0.9+fx
# fade out end
out*=np.interp(t,[0,0.05,D-1.5,D],[0,1,1,0])
out/=np.abs(out).max()*1.05
st=np.stack([out,out],1)
# slight stereo width on pad via delay
st[:,1]=np.roll(out,int(0.012*SR))
pcm=(st*32767).astype(np.int16)
w=wave.open('musica.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes()); w.close()
print('ok',D)
