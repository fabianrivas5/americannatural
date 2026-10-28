const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
 fs.mkdirSync('frames',{recursive:true});
 const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1080,height:1920}});
 await p.goto('file://'+process.cwd()+'/video.html'); await p.waitForTimeout(600);
 const N=Math.round(20.1926*30); // 606
 for(let i=0;i<N;i++){const t=i/30; await p.evaluate(t=>render(t),t);
  await p.screenshot({path:`frames/f_${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:93});}
 await b.close(); console.log('frames',N);
})();
