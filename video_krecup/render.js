const {chromium}=require('playwright');const {spawn}=require('child_process');
const N=3096,K=4,dir=__dirname;
async function worker(w){const a=Math.floor(N*w/K),b=Math.floor(N*(w+1)/K);
 const ff=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-pix_fmt','yuv420p','-crf','18','-preset','veryfast','-r','30',dir+'/seg'+w+'.mp4']);
 const br=await chromium.launch();const p=await br.newPage({viewport:{width:1080,height:1920}});await p.goto('file://'+dir+'/index.html');await p.evaluate(()=>window.ready);
 for(let f=a;f<b;f++){const d=await p.evaluate(([f])=>{render(f/30,f);return document.getElementById('c').toDataURL('image/jpeg',0.93).split(',')[1]},[f]);
  if(!ff.stdin.write(Buffer.from(d,'base64')))await new Promise(r=>ff.stdin.once('drain',r));if(f%200==0)console.log('w'+w,f)}
 ff.stdin.end();await new Promise(r=>ff.on('close',r));await br.close()}
Promise.all([0,1,2,3].map(worker)).then(()=>console.log('done'));
