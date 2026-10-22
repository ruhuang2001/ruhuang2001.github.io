async (page) => {
 const results=[]; const errors=[]; const failures=[]; const externalErrors=[];
 page.on('pageerror',e=>{const item={url:page.url(),message:e.message,stack:e.stack};if(e.stack?.includes('https://www.clarity.ms/'))externalErrors.push(item);else errors.push(item)});
 page.on('response',r=>{if(r.status()>=400&&r.url().startsWith('http://127.0.0.1:18768'))failures.push({url:r.url(),status:r.status()})});
 for(const deck of ['aigc-dev','from-chat-to-agent']){
  const base='http://127.0.0.1:18768/talks/'+deck+'/';const total=deck==='aigc-dev'?17:22;const states=[];
  for(let n=1;n<=total;n++){
   await page.goto(base+(deck==='aigc-dev'?n:'#/'+n));
   const slide=page.locator('.slidev-page-'+n);await slide.waitFor({state:'visible'});
   await page.waitForTimeout(250);
   const state=await slide.evaluate(el=>({text:el.innerText,images:[...el.querySelectorAll('img')].map(x=>({src:x.getAttribute('src'),ok:x.complete&&x.naturalWidth>0})),videos:[...el.querySelectorAll('video')].map(x=>({src:x.currentSrc,error:x.error?.code,ready:x.readyState})),clicks:el.querySelectorAll('.slidev-vclick-target').length}));
   if(state.images.some(i=>!i.ok))throw Error('Broken image '+deck+'/'+n);
   await page.screenshot({path:'output/playwright/security/after/'+deck+'-'+n+'.png'});states.push({n,...state});
  }
  await page.goto(base+(deck==='aigc-dev'?'1':'#/1'));await page.locator('.slidev-page-1').waitFor({state:'visible'});await page.keyboard.press('ArrowRight');await page.locator('.slidev-page-2').waitFor({state:'visible'});await page.keyboard.press('ArrowLeft');await page.locator('.slidev-page-1').waitFor({state:'visible'});
  if(deck==='from-chat-to-agent'){await page.goto(base+'#/14');await page.locator('.slidev-page-14').waitFor({state:'visible'});await page.keyboard.press('ArrowRight');await page.waitForTimeout(200);if(!page.url().includes('clicks=1'))throw Error('Click reveal did not advance');}
  await page.reload();await page.locator('.slidev-layout').first().waitFor({state:'attached'});
  results.push({deck,states,navigation:true,reload:true});
 }
 if(errors.length||failures.length)throw Error(JSON.stringify({errors,failures}));
 return {results,errors,failures,externalErrors};
}
