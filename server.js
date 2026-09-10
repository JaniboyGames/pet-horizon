import express from "express";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import nodemailer from "nodemailer";
import { fileURLToPath } from "node:url";
const __filename=fileURLToPath(import.meta.url),__dirname=path.dirname(__filename);
const mailer = createMailer();


function createMailer(){
  const url=process.env.SMTP_URL||'';
  const host=process.env.SMTP_HOST||'';
  const user=process.env.SMTP_USER||'';
  const pass=process.env.SMTP_PASS||'';
  if(url) return nodemailer.createTransport(url);
  if(host&&user&&pass) return nodemailer.createTransport({host,port:Number(process.env.SMTP_PORT||465),secure:String(process.env.SMTP_SECURE||'true')==='true',auth:{user,pass}});
  return null;
}
async function sendOtpEmail(email,code){
  if(!mailer) throw new Error('SMTP_NOT_CONFIGURED');
  const from=process.env.MAIL_FROM||process.env.SMTP_USER;
  await mailer.sendMail({
    from, to:email, subject:'Dein Pet Horizon Login-Code',
    text:`Dein Pet Horizon Login-Code ist: ${code}\n\nDer Code ist 10 Minuten gültig. Wenn du diese Anmeldung nicht gestartet hast, kannst du diese E-Mail ignorieren.`,
    html:`<div style="font-family:Arial,sans-serif;background:#f5f7fb;padding:30px"><div style="max-width:520px;margin:auto;background:#fff;border-radius:18px;padding:28px;border:1px solid #e6e9ef"><h2 style="margin:0 0 10px">Pet Horizon</h2><p>Dein einmaliger Login-Code:</p><div style="font-size:34px;font-weight:900;letter-spacing:8px;background:#fff3e8;color:#ff7a18;padding:18px;text-align:center;border-radius:14px">${code}</div><p style="color:#667085">Der Code ist 10 Minuten gültig.</p></div></div>`
  });
}

const app=express(),PORT=Number(process.env.PORT||3000),GAME_API_KEY=process.env.GAME_API_KEY||"CHANGE_ME",ADMIN_KEY=process.env.ADMIN_KEY||"CHANGE_ME",ROBLOX_CLIENT_ID=process.env.ROBLOX_CLIENT_ID||"",ROBLOX_CLIENT_SECRET=process.env.ROBLOX_CLIENT_SECRET||"",ROBLOX_REDIRECT_URI=process.env.ROBLOX_REDIRECT_URI||`http://localhost:${PORT}/auth/roblox/callback`,DB=path.join(__dirname,"data.json"),PUBLIC=path.join(__dirname,"public"),CONTENT_DB=path.join(__dirname,"content.json");
// Security baseline: strict headers, small JSON bodies, no framework fingerprints and a lightweight in-memory rate limiter.
app.disable('x-powered-by');
app.use((req,res,next)=>{res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-Frame-Options','SAMEORIGIN');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=()');res.setHeader('Cross-Origin-Opener-Policy','same-origin-allow-popups');if(process.env.NODE_ENV==='production')res.setHeader('Strict-Transport-Security','max-age=31536000; includeSubDomains');next()});
const rateBuckets=new Map();
function rateLimit(limit,windowMs){return (req,res,next)=>{const key=(req.ip||'unknown')+'|'+req.path;const now=Date.now();let b=rateBuckets.get(key);if(!b||now-b.start>windowMs)b={start:now,count:0};b.count++;rateBuckets.set(key,b);if(b.count>limit)return res.status(429).json({success:false,message:'Zu viele Anfragen. Bitte kurz warten.'});next()}}
app.use(express.json({limit:"128kb"}));
app.use((req,res,next)=>{if(req.path.startsWith('/api/'))res.setHeader('Cache-Control','no-store');if(['POST','PUT','PATCH','DELETE'].includes(req.method)&&req.headers.origin){const expected=`${req.protocol}://${req.get('host')}`;if(req.headers.origin!==expected)return res.status(403).json({success:false,message:'Cross-site Anfrage blockiert.'})}next()});
app.use(express.static(PUBLIC,{etag:true,maxAge:'1h'}));

// Roblox thumbnail proxy: the browser cannot use rbxassetid:// directly.
// We resolve the real Roblox asset thumbnail server-side and redirect to Roblox CDN.
const thumbCache = new Map();
app.get("/api/music/:id", async (req, res) => {
  const id = String(req.params.id || "").match(/^\d+$/)?.[0];
  if (!id) return res.status(400).send("Invalid audio id");
  try {
    const r = await fetch(`https://assetdelivery.roblox.com/v1/asset/?id=${id}`, { redirect: "follow" });
    if (!r.ok || !r.body) return res.status(404).send("Roblox audio unavailable");
    res.setHeader("Content-Type", r.headers.get("content-type") || "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=3600");
    if (r.headers.get("content-length")) res.setHeader("Content-Length", r.headers.get("content-length"));
    const reader = r.body.getReader();
    res.on("close", () => reader.cancel().catch(() => {}));
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
  } catch (e) {
    res.status(502).send("Roblox audio proxy error");
  }
});

app.get("/api/pet-thumbnail/:id", async (req, res) => {
  const id = String(req.params.id || "");
  if (!/^\d+$/.test(id)) return res.status(400).send("Invalid asset id");
  const cached = thumbCache.get(id);
  if (cached && cached.expires > Date.now()) return res.redirect(cached.url);
  try {
    const r = await fetch(`https://thumbnails.roblox.com/v1/assets?assetIds=${id}&size=420x420&format=Png&isCircular=false`);
    if (r.ok) {
      const data = await r.json();
      const url = data?.data?.[0]?.imageUrl;
      if (url) { thumbCache.set(id, { url, expires: Date.now() + 10 * 60 * 1000 }); return res.redirect(url); }
    }
    // Some older/legacy Roblox assets are not returned by the modern thumbnail API.
    return res.redirect(`https://www.roblox.com/asset-thumbnail/image?assetId=${id}&width=420&height=420&format=png`);
  } catch {
    return res.redirect(`https://www.roblox.com/asset-thumbnail/image?assetId=${id}&width=420&height=420&format=png`);
  }
});
function read(){try{return JSON.parse(fs.readFileSync(DB,"utf8"))}catch{return {codes:[],redeemed:{},clans:[]}}}
function write(d){fs.writeFileSync(DB,JSON.stringify(d,null,2))}
function norm(v){return typeof v==="string"?v.trim().toUpperCase():""}
function auth(req,key){return !!key&&key!=="CHANGE_ME"&&req.get("x-api-key")===key}
function usable(c){return !!c?.active&&(!c.expiresAt||Date.now()<=new Date(c.expiresAt).getTime())}
function safe(c,rank=null){return {rank,id:String(c.id??c.ClanId??""),tag:String(c.tag??c.Tag??"CLAN"),name:String(c.name??c.Name??c.Tag??"Clan"),description:String(c.description??c.Desc??""),thumb:String(c.thumb??c.Thumb??""),country:String(c.country??c.Country??""),points:Number(c.points??c.Points??0),diamonds:Number(c.diamonds??c.Diamonds??0),members:Number(c.members??c.MemberCount??(c.Members?Object.keys(c.Members).length:0)),maxMembers:Number(c.maxMembers??c.MaxMembers??0),level:Number(c.level??c.Level??c.Upgrades?.ClanLevel?.Tier??1),updatedAt:c.updatedAt??c.UpdatedAt??null}}

const robloxStates=new Map();
const sessions=new Map();
const playerIndex=new Map();
const accountSessions=new Map();
const pendingOtps=new Map();
const accountsFile=path.join(__dirname,'accounts.json');
function readAccounts(){try{return JSON.parse(fs.readFileSync(accountsFile,'utf8'))}catch{return {accounts:[]}}}
function writeAccounts(d){fs.writeFileSync(accountsFile,JSON.stringify(d,null,2))}
function sessionIdFromReq(req){const m=/ph_session=([^;]+)/.exec(req.headers.cookie||'');return m&&m[1]}
function currentAccount(req){const sid=sessionIdFromReq(req),s=sid&&accountSessions.get(sid);if(!s)return null;if(s.expiresAt&&s.expiresAt<Date.now()){accountSessions.delete(sid);return null}return s}
async function hashPassword(password,salt){return new Promise((resolve,reject)=>crypto.scrypt(password,salt,64,(e,k)=>e?reject(e):resolve(k.toString('hex'))))}
function setSession(res,session){const sid=crypto.randomBytes(32).toString('hex');accountSessions.set(sid,{...session,createdAt:Date.now(),lastSeen:Date.now(),expiresAt:Date.now()+7*24*60*60*1000});res.setHeader('Set-Cookie',`ph_session=${sid}; HttpOnly; SameSite=Lax; Path=/; ${process.env.NODE_ENV==='production'?'Secure;':''}`);return sid}
function clearSession(res,req){const sid=sessionIdFromReq(req);if(sid){accountSessions.delete(sid);sessions.delete(sid)}res.setHeader('Set-Cookie',`ph_session=; Max-Age=0; HttpOnly; SameSite=Lax; Path=/; ${process.env.NODE_ENV==='production'?'Secure;':''}`)}
function requireAccount(req,res,next){const a=currentAccount(req);if(!a)return res.status(401).json({success:false,message:'Anmeldung erforderlich.'});a.lastSeen=Date.now();next()}
function requireAdmin(req,res,next){const a=currentAccount(req);const db=a&&readAccounts().accounts.find(x=>x.id===a.accountId);if(!a||!db||db.role!=='admin')return res.status(403).json({success:false,message:'Nur Administratoren dürfen diese Funktion nutzen.'});a.role=db.role;a.lastSeen=Date.now();next()}
function requireCreator(req,res,next){const a=currentAccount(req);const db=a&&readAccounts().accounts.find(x=>x.id===a.accountId);if(!a||!db||!['creator','admin'].includes(db.role))return res.status(403).json({success:false,message:'Nur freigegebene Content Creator dürfen Links einreichen.'});a.role=db.role;a.lastSeen=Date.now();next()}
function readContent(){try{return JSON.parse(fs.readFileSync(CONTENT_DB,'utf8'))}catch{return {videos:[],announcements:[]}}}
function writeContent(d){fs.writeFileSync(CONTENT_DB,JSON.stringify(d,null,2))}
function validHttpUrl(v){try{const u=new URL(String(v));return ['https:','http:'].includes(u.protocol)&&u.hostname.length>0}catch{return false}}
function cleanText(v,max){return String(v??'').trim().replace(/[<>]/g,'').slice(0,max)}
function audit(action,meta={}){try{const d=readContent();d.audit=Array.isArray(d.audit)?d.audit:[];d.audit.unshift({id:crypto.randomUUID(),action,meta,time:new Date().toISOString()});d.audit=d.audit.slice(0,200);writeContent(d)}catch{}}
function issueOtp(req,res,accountId,email){const code=String(crypto.randomInt(100000,1000000));if(!mailer)return res.status(503).json({success:false,message:'E-Mail-Versand ist noch nicht eingerichtet. SMTP konfigurieren.'});const challenge=crypto.randomBytes(24).toString('hex');return sendOtpEmail(email,code).then(()=>{pendingOtps.set(challenge,{accountId,code,expires:Date.now()+10*60*1000,attempts:0,email});res.json({success:true,requires2fa:true,challenge,message:'Der 6-stellige Bestätigungscode wurde per E-Mail gesendet.'})}).catch(e=>{console.error('[JaniboyGames] Email error:',e.message);res.status(502).json({success:false,message:'Der E-Mail-Code konnte nicht gesendet werden.'})})}

app.get('/auth/roblox',(req,res)=>{
  if(!ROBLOX_CLIENT_ID)return safeReturn(res,'Setze ROBLOX_CLIENT_ID und ROBLOX_REDIRECT_URI im Server-Setup.');
  const state=crypto.randomBytes(24).toString('hex');robloxStates.set(state,Date.now()+5*60*1000);
  const url=new URL('https://apis.roblox.com/oauth/v1/authorize');
  url.searchParams.set('client_id',ROBLOX_CLIENT_ID);url.searchParams.set('redirect_uri',ROBLOX_REDIRECT_URI);url.searchParams.set('scope','openid profile');url.searchParams.set('response_type','code');url.searchParams.set('state',state);url.searchParams.set('nonce',crypto.randomBytes(16).toString('hex'));
  res.redirect(url.toString());
});
app.get('/auth/roblox/callback',async(req,res)=>{
  const {code,state}=req.query;if(!code||!state||!robloxStates.has(state)||robloxStates.get(state)<Date.now())return res.status(400).send('Invalid OAuth state.');robloxStates.delete(state);
  if(!ROBLOX_CLIENT_ID||!ROBLOX_CLIENT_SECRET)return safeReturn(res,'Roblox OAuth ist noch nicht konfiguriert.');
  try{
    const body=new URLSearchParams({grant_type:'authorization_code',code:String(code),client_id:ROBLOX_CLIENT_ID,client_secret:ROBLOX_CLIENT_SECRET,redirect_uri:ROBLOX_REDIRECT_URI});
    const tokenRes=await fetch('https://apis.roblox.com/oauth/v1/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});
    if(!tokenRes.ok)throw new Error('Token exchange failed');const token=await tokenRes.json();
    const userRes=await fetch('https://apis.roblox.com/oauth/v1/userinfo',{headers:{Authorization:`Bearer ${token.access_token}`}});if(!userRes.ok)throw new Error('Userinfo failed');const user=await userRes.json();
    const sid=crypto.randomBytes(32).toString('hex');sessions.set(sid,{userId:String(user.sub),name:user.name||user.preferred_username||'Roblox User',picture:user.picture||null,createdAt:Date.now()});
    res.setHeader('Set-Cookie',`ph_session=${sid}; HttpOnly; SameSite=Lax; Path=/; ${process.env.NODE_ENV==='production'?'Secure;':''}`);res.redirect('/#account');
  }catch{safeReturn(res,'Roblox konnte die Anmeldung nicht abschließen.');}
});
app.get('/api/account/me',(req,res)=>{const a=currentAccount(req);if(!a)return res.json({loggedIn:false});const d=readAccounts().accounts.find(x=>x.id===a.accountId);if(!d)return res.json({loggedIn:false});res.json({loggedIn:true,user:{email:d.email,role:d.role||'user',verified:!!d.verified,creatorApproved:d.role==='creator'||d.role==='admin'},robloxUser:a.robloxUser||null});});
app.post('/api/auth/register',rateLimit(8,15*60*1000),async(req,res)=>{const email=String(req.body?.email||'').trim().toLowerCase(),password=String(req.body?.password||'');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||password.length<8)return res.status(400).json({success:false,message:'E-Mail oder Passwort ungültig.'});const d=readAccounts();if(d.accounts.some(x=>x.email===email))return res.status(409).json({success:false,message:'Konto existiert bereits.'});const salt=crypto.randomBytes(16).toString('hex');const hash=await hashPassword(password,salt);const id=crypto.randomUUID();d.accounts.push({id,email,salt,passwordHash:hash,role:'user',verified:false,createdAt:new Date().toISOString()});writeAccounts(d);return issueOtp(req,res,id,email);});
app.post('/api/auth/login',rateLimit(10,15*60*1000),async(req,res)=>{const email=String(req.body?.email||'').trim().toLowerCase(),password=String(req.body?.password||'');const d=readAccounts(),a=d.accounts.find(x=>x.email===email);if(!a)return res.status(401).json({success:false,message:'Login fehlgeschlagen.'});const hash=await hashPassword(password,a.salt);if(!crypto.timingSafeEqual(Buffer.from(hash,'hex'),Buffer.from(a.passwordHash,'hex')))return res.status(401).json({success:false,message:'Login fehlgeschlagen.'});return issueOtp(req,res,a.id,a.email);});
app.post('/api/auth/verify',rateLimit(15,15*60*1000),(req,res)=>{const challenge=String(req.body?.challenge||''),code=String(req.body?.code||'').trim();const p=pendingOtps.get(challenge);if(!p||p.expires<Date.now())return res.status(400).json({success:false,message:'Code falsch oder abgelaufen.'});if(++p.attempts>6){pendingOtps.delete(challenge);return res.status(429).json({success:false,message:'Zu viele falsche Codes. Bitte neuen Code anfordern.'});}if(!/^\d{6}$/.test(code)||code!==p.code)return res.status(400).json({success:false,message:'Code falsch oder abgelaufen.'});pendingOtps.delete(challenge);const db=readAccounts(),a=db.accounts.find(x=>x.id===p.accountId);if(!a)return res.status(400).json({success:false,message:'Konto nicht gefunden.'});a.verified=true;writeAccounts(db);setSession(res,{accountId:a.id,email:a.email,role:a.role||'user',robloxUser:null});audit('login',{email:a.email,role:a.role||'user'});res.json({success:true,message:'E-Mail bestätigt und erfolgreich angemeldet.'});});
app.post('/api/auth/logout',(req,res)=>{clearSession(res,req);res.json({success:true})});

app.post('/api/player-index/sync',(req,res)=>{if(!auth(req,GAME_API_KEY))return res.status(401).json({success:false,message:'Unauthorized'});const userId=String(req.body?.userId||'');if(!/^\d+$/.test(userId)||!Array.isArray(req.body?.pets))return res.status(400).json({success:false,message:'userId and pets are required'});playerIndex.set(userId,{pets:req.body.pets.slice(0,1000),updatedAt:new Date().toISOString()});res.json({success:true,count:req.body.pets.length});});
app.get('/api/player-index',(req,res)=>{const acc=currentAccount(req);const m=/ph_session=([^;]+)/.exec(req.headers.cookie||'');const oauth=m&&sessions.get(m[1]);const s=acc?.robloxUser||oauth;if(!s)return res.status(401).json({success:false,message:'Roblox verbinden'});const data=playerIndex.get(String(s.userId))||{pets:[],updatedAt:null};res.json({success:true,robloxUser:s,pets:data.pets,updatedAt:data.updatedAt});});

app.get("/api/health",(_,r)=>r.json({ok:true,name:"Pet Horizon API",version:"13.0",time:new Date().toISOString()}));
app.get("/api/codes",(_,r)=>r.json(read().codes.filter(usable).map(c=>({code:c.code,reward:c.reward,active:c.active,expiresAt:c.expiresAt??null}))));
app.get("/api/clans",(q,r)=>{const d=read(),sort=q.query.sort==="diamonds"?"diamonds":"points",search=String(q.query.search||"").toLowerCase();let a=(d.clans||[]).map(c=>safe(c));if(search)a=a.filter(c=>(c.name+" "+c.tag).toLowerCase().includes(search));a.sort((x,y)=>sort==="diamonds"?y.diamonds-x.diamonds:y.points-x.points);r.json({success:true,sort,total:a.length,source:"roblox-game-sync",clans:a.map((c,i)=>({...c,rank:i+1}))})});
app.get("/api/clans/:id",(q,r)=>{const c=(read().clans||[]).find(x=>String(x.id??x.ClanId)===String(q.params.id));if(!c)return r.status(404).json({success:false});r.json({success:true,clan:safe(c)})});
app.post("/api/clans/sync",(q,r)=>{if(!auth(q,GAME_API_KEY))return r.status(401).json({success:false,message:"Unauthorized"});if(!Array.isArray(q.body?.clans))return r.status(400).json({success:false,message:"clans must be an array"});const clans=q.body.clans.slice(0,300).map(c=>({id:String(c.id??c.ClanId??crypto.randomUUID()),tag:String(c.tag??c.Tag??"CLAN").slice(0,8),name:String(c.name??c.Name??c.Tag??"Clan").slice(0,40),description:String(c.description??c.Desc??"").slice(0,200),thumb:String(c.thumb??c.Thumb??"").slice(0,200),country:String(c.country??c.Country??"").slice(0,8),points:Number(c.points??c.Points??0),diamonds:Number(c.diamonds??c.Diamonds??0),members:Number(c.members??c.MemberCount??0),maxMembers:Number(c.maxMembers??c.MaxMembers??0),level:Number(c.level??c.Level??1),updatedAt:new Date().toISOString()}));const d=read();d.clans=clans;write(d);r.json({success:true,count:clans.length,source:"roblox-game-sync",updatedAt:new Date().toISOString()})});
const MONTHLY_HUGES=[
  'Huge Octopus','Huge Pony Hydra','Huge Pixel Dragon','Huge Cat','Huge Magma Dominus','Huge Pixel Dominus','Huge Royal Eye','Huge Hydra','Developer Rick','Huge Techno Boss','Huge Frost Titan','Huge Crystal Boss','Huge Monkey Chef','Huge Techno TV','Huge Gingerbread Dominus','Huge Warrior','Huge Yeti','Huge Toucan','Huge 2026 Dominus','Huge Pizza Chef'
];
function monthlyKey(){const d=new Date();return `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}`}
function monthlyCandidates(key){
  const pool=MONTHLY_HUGES.slice(), out=[]; let seed=crypto.createHash('sha256').update('pet-horizon-monthly|'+key).digest(); let i=0;
  while(pool.length && out.length<4){const n=seed[i%seed.length]+(seed[(i+7)%seed.length]<<8)+i*31;const idx=Math.abs(n)%pool.length;out.push(pool.splice(idx,1)[0]);i++;seed=crypto.createHash('sha256').update(seed).digest()}
  return out;
}
function monthlyData(){
  const d=readContent();d.monthlyVotes=d.monthlyVotes&&typeof d.monthlyVotes==='object'?d.monthlyVotes:{};const key=monthlyKey();let m=d.monthlyVotes[key];
  if(!m||!Array.isArray(m.candidates)||m.candidates.length!==4){m={candidates:monthlyCandidates(key),votes:{},voters:{},createdAt:new Date().toISOString()};for(const n of m.candidates)m.votes[n]=0;d.monthlyVotes[key]=m;writeContent(d)}
  const total=Object.values(m.votes||{}).reduce((a,b)=>a+Number(b||0),0);
  return {key,candidates:m.candidates.map(name=>({name,votes:Number(m.votes?.[name]||0),percent:total?Math.round(Number(m.votes?.[name]||0)/total*1000)/10:0})),totalVotes:total};
}
app.get('/api/monthly',rateLimit(30,60*1000),(req,res)=>res.json({success:true,...monthlyData()}));
app.post('/api/monthly-vote',rateLimit(12,15*60*1000),(req,res)=>{
  const name=String(req.body?.name||'').trim(), key=monthlyKey(), info=monthlyData();if(!info.candidates.some(x=>x.name===name))return res.status(400).json({success:false,message:'Dieses Huge Pet ist diesen Monat nicht zur Wahl.'});
  const d=readContent(),m=d.monthlyVotes[key];const account=currentAccount(req);const raw=account?`account:${account.accountId}`:`ip:${req.ip||req.socket.remoteAddress||'unknown'}`;const voter=crypto.createHash('sha256').update(`${process.env.VOTE_SALT||'change-this-vote-salt'}|${raw}|${key}`).digest('hex');m.voters=m.voters||{};
  if(m.voters[voter])return res.status(409).json({success:false,message:'Du hast diesen Monat bereits abgestimmt.',...monthlyData()});
  m.votes[name]=Number(m.votes[name]||0)+1;m.voters[voter]=name;writeContent(d);audit('monthly_vote',{month:key,candidate:name});res.json({success:true,message:'Stimme gespeichert ✓',...monthlyData()});
});
app.get('/api/videos',(req,res)=>{const d=readContent();res.json({success:true,trailer:d.videos.find(v=>v.type==='trailer'&&v.status==='approved')||null,creators:d.videos.filter(v=>v.type==='creator'&&v.status==='approved').map(v=>({id:v.id,url:v.url,title:v.title,creator:v.creator}))})});
app.post('/api/creator/videos',rateLimit(12,15*60*1000),requireCreator,(req,res)=>{const url=String(req.body?.url||'').trim(),title=cleanText(req.body?.title||'',100);if(!validHttpUrl(url)||!/^https?:\/\//i.test(url))return res.status(400).json({success:false,message:'Ungültiger Link.'});if(!title)return res.status(400).json({success:false,message:'Titel fehlt.'});const a=currentAccount(req),d=readContent();d.videos=Array.isArray(d.videos)?d.videos:[];const v={id:crypto.randomUUID(),type:'creator',url,title,creator:a.email,status:'pending',submittedBy:a.accountId,createdAt:new Date().toISOString()};d.videos.push(v);writeContent(d);audit('creator_video_submitted',{videoId:v.id,accountId:a.accountId});res.status(201).json({success:true,message:'Link wurde zur Prüfung eingereicht. Erst nach deiner Freigabe erscheint er öffentlich.'});});
app.get('/api/admin/overview',requireAdmin,(req,res)=>{const a=readAccounts(),c=readContent(),d=read();res.json({success:true,stats:{accounts:a.accounts.length,creators:a.accounts.filter(x=>x.role==='creator').length,pendingCreators:a.accounts.filter(x=>x.creatorRequested).length,pendingVideos:(c.videos||[]).filter(x=>x.status==='pending').length,approvedVideos:(c.videos||[]).filter(x=>x.status==='approved').length,codes:(d.codes||[]).length,clans:(d.clans||[]).length},security:{sessions:accountSessions.size,otpChallenges:pendingOtps.size}})});
app.get('/api/admin/accounts',requireAdmin,(req,res)=>{const d=readAccounts();res.json({success:true,accounts:d.accounts.map(x=>({id:x.id,email:x.email,role:x.role||'user',verified:!!x.verified,creatorRequested:!!x.creatorRequested,createdAt:x.createdAt}))})});
app.post('/api/admin/accounts/:id/creator',requireAdmin,(req,res)=>{const d=readAccounts(),a=d.accounts.find(x=>x.id===String(req.params.id));if(!a)return res.status(404).json({success:false});const approved=req.body?.approved===true;a.role=approved?'creator':'user';a.creatorRequested=false;writeAccounts(d);audit(approved?'creator_approved':'creator_revoked',{accountId:a.id});res.json({success:true,role:a.role})});
app.post('/api/account/request-creator',requireAccount,(req,res)=>{const me=currentAccount(req);const d=readAccounts(),a=d.accounts.find(x=>x.id===me.accountId);if(!a)return res.status(404).json({success:false});a.creatorRequested=true;writeAccounts(d);audit('creator_requested',{accountId:a.id});res.json({success:true,message:'Anfrage an den Administrator gesendet.'})});
app.delete('/api/admin/accounts/:id',requireAdmin,(req,res)=>{const d=readAccounts(),idx=d.accounts.findIndex(x=>x.id===String(req.params.id));if(idx<0)return res.status(404).json({success:false});if(d.accounts[idx].role==='admin')return res.status(400).json({success:false,message:'Admin-Konten können hier nicht gelöscht werden.'});const removed=d.accounts.splice(idx,1)[0];for(const [sid,s] of accountSessions){if(s.accountId===removed.id)accountSessions.delete(sid)}writeAccounts(d);audit('account_deleted',{accountId:removed.id});res.json({success:true})});
app.get('/api/admin/videos',requireAdmin,(req,res)=>{const d=readContent();res.json({success:true,videos:(d.videos||[]).sort((a,b)=>String(b.createdAt).localeCompare(String(a.createdAt)))})});
app.post('/api/admin/videos/:id/status',requireAdmin,(req,res)=>{const status=['approved','rejected','pending'].includes(req.body?.status)?req.body.status:null;if(!status)return res.status(400).json({success:false});const d=readContent(),v=(d.videos||[]).find(x=>x.id===String(req.params.id));if(!v)return res.status(404).json({success:false});v.status=status;v.reviewedAt=new Date().toISOString();writeContent(d);audit('video_'+status,{videoId:v.id});res.json({success:true})});
app.post('/api/admin/videos',requireAdmin,(req,res)=>{const type=req.body?.type==='trailer'?'trailer':'creator',url=String(req.body?.url||'').trim(),title=cleanText(req.body?.title||'',100),creator=cleanText(req.body?.creator||'JaniboyGames',80);if(!validHttpUrl(url)||!title)return res.status(400).json({success:false,message:'Titel oder URL ungültig.'});const d=readContent();d.videos=Array.isArray(d.videos)?d.videos:[];if(type==='trailer')d.videos=d.videos.filter(v=>v.type!=='trailer');d.videos.push({id:crypto.randomUUID(),type,url,title,creator,status:'approved',submittedBy:'admin',createdAt:new Date().toISOString(),reviewedAt:new Date().toISOString()});writeContent(d);audit('admin_video_added',{type});res.json({success:true})});
app.delete('/api/admin/videos/:id',requireAdmin,(req,res)=>{const d=readContent(),before=(d.videos||[]).length;d.videos=(d.videos||[]).filter(v=>v.id!==String(req.params.id));if(d.videos.length===before)return res.status(404).json({success:false});writeContent(d);audit('video_deleted',{videoId:req.params.id});res.json({success:true})});
app.get('/api/admin/audit',requireAdmin,(req,res)=>{const d=readContent();res.json({success:true,audit:(d.audit||[]).slice(0,100)})});
app.post('/api/admin/logout-all',requireAdmin,(req,res)=>{const me=currentAccount(req);for(const [sid,s] of accountSessions){if(s.accountId===me.accountId)continue;accountSessions.delete(sid)}audit('logout_all',{admin:me.accountId});res.json({success:true})});

app.post("/api/admin/codes",requireAdmin,(q,r)=>{const code=norm(q.body?.code),reward=q.body?.reward;if(!code||!reward)return r.status(400).json({success:false});const d=read();if(d.codes.some(x=>x.code===code))return r.status(409).json({success:false});const e={id:crypto.randomUUID(),code,reward,active:q.body.active!==false,expiresAt:q.body.expiresAt||null};d.codes.push(e);write(d);r.status(201).json({success:true,code:e})});
app.delete("/api/admin/codes/:code",requireAdmin,(q,r)=>{const d=read(),e=d.codes.find(x=>x.code===norm(q.params.code));if(!e)return r.status(404).json({success:false});e.active=false;write(d);r.json({success:true})});
app.get("/api/load",(q,r)=>{if(!auth(q,GAME_API_KEY))return r.status(401).json({success:false});const id=String(q.query.user_id||"");if(!/^\d+$/.test(id))return r.status(400).json({success:false});r.json((read().redeemed[id]||[]).map(code=>({code})))});
app.get("/api/redeem",(q,r)=>{if(!auth(q,GAME_API_KEY))return r.status(401).json({success:false});const id=String(q.query.user_id||""),code=norm(q.query.code);if(!/^\d+$/.test(id)||!code)return r.status(400).json({success:false});const d=read(),e=d.codes.find(x=>x.code===code);if(!usable(e))return r.json({success:false,message:"This code is invalid or expired! ❌"});d.redeemed[id]??=[];if(d.redeemed[id].includes(code))return r.json({success:false,message:"This code was already redeemed! ❌"});d.redeemed[id].push(code);write(d);r.json({success:true,message:"Code redeemed successfully! 🎁",reward:e.reward})});
app.use((req,res,next)=>req.method==="GET"&&!req.path.startsWith("/api/")?res.sendFile(path.join(PUBLIC,"index.html")):next());
function ensureOwnerAdmin(){const email=String(process.env.ADMIN_EMAIL||'janseibt16@gmail.com').trim().toLowerCase();const d=readAccounts();d.accounts=Array.isArray(d.accounts)?d.accounts:[];if(!d.accounts.some(x=>x.email===email)){console.warn('[SECURITY] Owner admin account is missing. Add it through the deployment bootstrap or restore accounts.json.')}}
ensureOwnerAdmin();
if(process.env.NODE_ENV==='production' && (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) && !process.env.SMTP_URL) console.warn('[SECURITY] SMTP is not configured; email verification/login cannot complete.');
app.listen(PORT,()=>console.log(`Pet Horizon on http://localhost:${PORT}`));
