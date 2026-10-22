import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { mkdirSync, writeFileSync, realpathSync } from 'node:fs'
import { resolve } from 'node:path'
const results=[]
for (const deck of ['aigc-dev','from-chat-to-agent']) {
 const req=createRequire(resolve('talks',deck,'package.json'))
 const cli=realpathSync(resolve('talks',deck,'node_modules/@slidev/cli/package.json'))
 const cliReq=createRequire(cli)
 const braces=createRequire(cliReq.resolve('fast-glob')).resolve('micromatch')
 const bracesPath=createRequire(braces).resolve('braces')
 const imagePath=createRequire(cliReq.resolve('pptxgenjs')).resolve('image-size')
 const cases={
  'normal-glob':`const b=require(${JSON.stringify(bracesPath)});if(b.expand('slides/{one,two}.md').join(',')!=='slides/one.md,slides/two.md')throw Error('glob mismatch')`,
  'deep-braces':`const b=require(${JSON.stringify(bracesPath)});try{b('{'.repeat(2000)+'a'+',b}'.repeat(2000));throw Error('accepted')}catch(e){if(e.code!=='ERR_BRACES_DEPTH')throw e}`,
  'normal-png':`const mod=require(${JSON.stringify(imagePath)});const s=mod.imageSize||mod;const b=Buffer.from('89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c489','hex');if(s(b).width!==1)throw Error('PNG mismatch')`,
  'zero-icns':`const mod=require(${JSON.stringify(imagePath)});const s=mod.imageSize||mod;const b=Buffer.alloc(24);b.write('icns');b.writeUInt32BE(24,4);b.write('ic07',8);try{s(b);throw Error('accepted')}catch(e){if(!e.message.includes('ICNS'))throw e}`,
  'zero-jxl':`const mod=require(${JSON.stringify(imagePath)});const s=mod.imageSize||mod;const b=Buffer.alloc(32);b.write('JXL ',4);b.write('ftyp',12);b.write('jxl ',16);try{s(b)}catch(e){if(!(e instanceof Error))throw e}`,
  'zero-heif':`const mod=require(${JSON.stringify(imagePath)});const s=mod.imageSize||mod;const b=Buffer.alloc(32);b.write('ftyp',4);b.write('heic',8);try{s(b)}catch(e){if(!(e instanceof Error))throw e}`
 }
 for(const [name,code] of Object.entries(cases)){
  const r=spawnSync(process.execPath,['-e',code],{timeout:3000,encoding:'utf8'});
  results.push({deck,name,pass:r.status===0&&!r.error,status:r.status,error:r.error?.message,stderr:r.stderr});
 }
}
mkdirSync('output/playwright/security',{recursive:true})
writeFileSync('output/playwright/security/mitigations.json',JSON.stringify(results,null,2)+'\n')
console.log(JSON.stringify(results,null,2))
if(results.some(r=>!r.pass))process.exitCode=1
