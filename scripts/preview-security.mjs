import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { resolve, extname } from 'node:path'
const root=resolve(process.argv[2]||'output/playwright/security/site')
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.jpeg':'image/jpeg','.pdf':'application/pdf','.mov':'video/quicktime','.mp4':'video/mp4','.woff2':'font/woff2','.json':'application/json'}
createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost');let path=resolve(root,'.'+decodeURIComponent(url.pathname))
  if(!path.startsWith(root+'/')&&path!==root){res.writeHead(403).end();return}
  let info=await stat(path).catch(()=>null)
  if(info?.isDirectory()){path=resolve(path,'index.html');info=await stat(path).catch(()=>null)}
  if(!info&&!extname(url.pathname)){const match=url.pathname.match(new RegExp('^/talks/([^/]+)'));if(match){path=resolve(root,'talks',match[1],'index.html');info=await stat(path).catch(()=>null)}}
  if(!info){res.writeHead(404).end();return}
  res.writeHead(200,{'Content-Type':mime[extname(path).toLowerCase()]||'application/octet-stream','Cache-Control':'no-store'});createReadStream(path).pipe(res)
 }catch(error){res.writeHead(500).end(error.message)}
}).listen(18768,'127.0.0.1',()=>console.log('Security preview http://127.0.0.1:18768'))
