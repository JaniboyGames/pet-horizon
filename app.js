const PETS = [
  {name:'Huge Octopus',rarity:'Legendary',movement:'Walking',image:'rbxassetid://15591217690',golden:'rbxassetid://15591331233',huge:true},
  {name:'Red Panda',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15591216836',golden:'rbxassetid://15591330308'},
  {name:'Huge Pony Hydra',rarity:'Legendary',movement:'Flying',image:'rbxassetid://15591220775',golden:'rbxassetid://15591334460',huge:true},
  {name:'Mascot Lion',rarity:'Common',movement:'Walking',image:'rbxassetid://15591214703',golden:'rbxassetid://15591327968'},
  {name:'Mascot Bird',rarity:'Common',movement:'Flying',image:'rbxassetid://15591218470',golden:'rbxassetid://15591331738'},
  {name:'Pixel Cat',rarity:'Common',movement:'Walking',image:'rbxassetid://15627304657',golden:'rbxassetid://15627305082'},
  {name:'Pixel Dog',rarity:'Common',movement:'Walking',image:'rbxassetid://15627304577',golden:'rbxassetid://15627304943'},
  {name:'Pixel Shark',rarity:'Uncommon',movement:'Flying',image:'rbxassetid://15627304467',golden:'rbxassetid://15627304859'},
  {name:'Pixel Dragon',rarity:'Rare',movement:'Flying',image:'rbxassetid://15627305299',golden:'rbxassetid://15627305248'},
  {name:'Huge Pixel Dragon',rarity:'Legendary',movement:'Flying',image:'rbxassetid://15627304740',golden:'rbxassetid://15627305161',huge:true},
  {name:'Huge Cat',rarity:'Legendary',movement:'Walking',image:'rbxassetid://15591219240',golden:'rbxassetid://15591332500',huge:true},
  {name:'Rage Dragon',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15663696805',golden:'rbxassetid://15663697041'},
  {name:'Gamer Bear',rarity:'Common',movement:'Walking',image:'rbxassetid://15656606990',golden:'rbxassetid://15656607186'},
  {name:'Wizard Cat',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15656605617',golden:'rbxassetid://15656605875'},
  {name:'Cyborg Dragon',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15656606055',golden:'rbxassetid://15656606188'},
  {name:'Huge Magma Dominus',rarity:'Legendary',movement:'Flying',image:'rbxassetid://15656606302',golden:'rbxassetid://15656606436',huge:true},
  {name:'Huge Pixel Dominus',rarity:'Legendary',movement:'Flying',image:'rbxassetid://15656606604',golden:'rbxassetid://15656606840',huge:true},
  {name:'Chilly Tiger',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15683745900',golden:'rbxassetid://15683745758'},
  {name:'Octo Artist',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15683744302',golden:'rbxassetid://15683744505'},
  {name:'Evil Spider',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15683745108',golden:'rbxassetid://15683745233'},
  {name:'Neon Phoenix',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15683744667',golden:'rbxassetid://15683744877'},
  {name:'Huge Royal Eye',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15683745380',golden:'rbxassetid://15683745572',huge:true},
  {name:'Baby Block',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15684428454',golden:'rbxassetid://15684428631'},
  {name:'Huge Hydra',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15684297459',golden:'rbxassetid://15684297603',huge:true},
  {name:'Developer Rick',rarity:'Mythic',movement:'Flying',image:'rbxassetid://12917362894',golden:'rbxassetid://12917363309',huge:true},
  {name:'Purple Baby Block',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15707248287',golden:'rbxassetid://15684428631'},
  {name:'Blue Baby Block',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15821889817',golden:'rbxassetid://15684428631'},
  {name:'Huge Techno Boss',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15711864739',golden:'rbxassetid://15711864454',huge:true},
  {name:'Huge Frost Titan',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15712111332',golden:'rbxassetid://15712111117',huge:true},
  {name:'Miner Dog',rarity:'Common',movement:'Walking',image:'rbxassetid://15719010131',golden:'rbxassetid://15719010288'},
  {name:'Miner Cat',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15719010470',golden:'rbxassetid://15719010678'},
  {name:'Miner Bear',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15719010809',golden:'rbxassetid://15719010941'},
  {name:'Cave Spider',rarity:'Rare',movement:'Walking',image:'rbxassetid://15719011150',golden:'rbxassetid://15719011054'},
  {name:'Crystal Dragon',rarity:'Epic',movement:'Flying',image:'rbxassetid://15719011272',golden:'rbxassetid://15719011406'},
  {name:'Huge Crystal Boss',rarity:'Legendary',movement:'Flying',image:'rbxassetid://15719011536',golden:'rbxassetid://15719011656',huge:true},
  {name:'Builder Dog',rarity:'Common',movement:'Walking',image:'rbxassetid://15719013866',golden:'rbxassetid://15719013970'},
  {name:'Builder Cat',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15719014087',golden:'rbxassetid://15719014256'},
  {name:'Bling Dog',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15719014412',golden:'rbxassetid://15719014507'},
  {name:'Boss Tiger',rarity:'Rare',movement:'Walking',image:'rbxassetid://15719014641',golden:'rbxassetid://15719014791'},
  {name:'Bling Cat',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15719014905',golden:'rbxassetid://15719015030',huge:false,value:null,demand:null},
  {name:'Huge Monkey Chef',rarity:'Legendary',movement:'Walking',image:'rbxassetid://15719015164',golden:'rbxassetid://15719015371',huge:true},
  {name:'Santa Cat',rarity:'Common',movement:'Walking',image:'rbxassetid://15719016952',golden:'rbxassetid://15719017659'},
  {name:'Santa Bee',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15719017141',golden:'rbxassetid://15719017929'},
  {name:'Huge Techno TV',rarity:'Legendary',movement:'Walking',image:'rbxassetid://15719018359',golden:'rbxassetid://15719018487',huge:true},
  {name:'Gingerbread Cat',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15719015597',golden:'rbxassetid://15719015500'},
  {name:'Gingerbread Elephant',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15719015705',golden:'rbxassetid://15719015939'},
  {name:'Gingerbread Monkey',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15719016070',golden:'rbxassetid://15719015826'},
  {name:'Gingerbread Tiger',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15719016194',golden:'rbxassetid://15719016418'},
  {name:'Huge Gingerbread Dominus',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15719016589',golden:'rbxassetid://15719016739',huge:true},
  {name:'Huge Warrior',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15820408537',golden:'rbxassetid://15820408706',huge:true},
  {name:'Huge Yeti',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15820407674',golden:'rbxassetid://15820407912',huge:true},
  {name:'Huge Toucan',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15820408148',golden:'rbxassetid://15820408319',huge:true},
  {name:'2026 Squirrel',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15820425115',golden:'rbxassetid://15820425392'},
  {name:'2026 Cat',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15820425593',golden:'rbxassetid://15820425772'},
  {name:'2026 Cow',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15820425949',golden:'rbxassetid://15820426139'},
  {name:'2026 Monkey',rarity:'Exclusive',movement:'Walking',image:'rbxassetid://15820426300',golden:'rbxassetid://15820426456'},
  {name:'Huge 2026 Dominus',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15820426631',golden:'rbxassetid://15820426861',huge:true},
  {name:'Pizza Elephant',rarity:'Common',movement:'Walking',image:'rbxassetid://15820457377',golden:'rbxassetid://15820457653'},
  {name:'Pizza Cat',rarity:'Common',movement:'Walking',image:'rbxassetid://15820457957',golden:'rbxassetid://15820458209'},
  {name:'Pizza Flamingo',rarity:'Uncommon',movement:'Walking',image:'rbxassetid://15820456378',golden:'rbxassetid://15820456542'},
  {name:'Pizza Parrot',rarity:'Rare',movement:'Flying',image:'rbxassetid://15820456709',golden:'rbxassetid://15820456896'},
  {name:'Huge Pizza Chef',rarity:'Exclusive',movement:'Flying',image:'rbxassetid://15820457025',golden:'rbxassetid://15820457149',huge:true}
 ];
window.PETS=PETS;

// Pet Horizon internal values: NOT Robux and not real money.
// Only Huge and Exclusive pets receive a value; normal pets stay unvalued.
const PET_VALUES = {
  'Huge Octopus': 2500, 'Huge Pony Hydra': 3200, 'Huge Pixel Dragon': 4500, 'Huge Cat': 2800,
  'Huge Magma Dominus': 5000, 'Huge Pixel Dominus': 4200, 'Huge Royal Eye': 3600, 'Huge Hydra': 3400,
  'Developer Rick': 6000, 'Huge Techno Boss': 3900, 'Huge Frost Titan': 4800, 'Huge Crystal Boss': 3000,
  'Huge Monkey Chef': 2600, 'Huge Techno TV': 3100,
  'Huge Gingerbread Dominus': 3700, 'Huge Warrior': 4100, 'Huge Yeti': 3300, 'Huge Toucan': 2900,
  'Huge 2026 Dominus': 4400, 'Huge Pizza Chef': 2700,
  'Rage Dragon': 650, 'Wizard Cat': 550, 'Cyborg Dragon': 700, 'Chilly Tiger': 500,
  'Octo Artist': 600, 'Evil Spider': 450, 'Neon Phoenix': 800, 'Baby Block': 350,
  'Purple Baby Block': 375, 'Blue Baby Block': 375, 'Gingerbread Cat': 400,
  'Gingerbread Elephant': 425, 'Gingerbread Monkey': 450, 'Gingerbread Tiger': 475,
  '2026 Squirrel': 525, '2026 Cat': 525, '2026 Cow': 550, '2026 Monkey': 575
};
const PET_DEMAND = {
  'Huge Octopus': 84, 'Huge Pony Hydra': 71, 'Huge Pixel Dragon': 92, 'Huge Cat': 88,
  'Huge Magma Dominus': 76, 'Huge Pixel Dominus': 81, 'Huge Royal Eye': 79, 'Huge Hydra': 73,
  'Developer Rick': 95, 'Huge Techno Boss': 74, 'Huge Frost Titan': 89, 'Huge Crystal Boss': 68,
  'Huge Monkey Chef': 72, 'Huge Techno TV': 75, 'Huge Gingerbread Dominus': 80,
  'Huge Warrior': 86, 'Huge Yeti': 78, 'Huge Toucan': 69, 'Huge 2026 Dominus': 90, 'Huge Pizza Chef': 70
};
PETS.forEach(p => { if (p.huge || p.rarity === 'Exclusive') { p.value = PET_VALUES[p.name] ?? null; p.demand = PET_DEMAND[p.name] ?? null; } });
const VALUE_LABEL = 'VALUE / TOKENS';

const WORLDS = [
 {id:1,name:'Spawn',mult:1,cost:0,currency:'Coins',unlocked:true,accent:'lime',pet:'Mascot Lion'},
 {id:2,name:'Desert',mult:2,cost:2500,currency:'Coins',accent:'sand',pet:'Red Panda'},
 {id:3,name:'Forest',mult:5,cost:15000,currency:'Coins',accent:'green',pet:'Gamer Bear'},
 {id:4,name:'Mine',mult:7,cost:50000,currency:'Coins',accent:'stone',pet:'Miner Cat'},
 {id:5,name:'Ice',mult:9,cost:250000,currency:'Coins',accent:'ice',pet:'Huge Frost Titan'},
 {id:6,name:'Ocean',mult:11,cost:1000000,currency:'Coins',accent:'blue',pet:'Pixel Shark'},
 {id:7,name:'Farm',mult:13,cost:2500000,currency:'Coins',accent:'farm',pet:'Pizza Cat'},
 {id:8,name:'Circus',mult:15,cost:5500000,currency:'Coins',accent:'pink',pet:'Huge Pony Hydra'},
 {id:9,name:'Construction',mult:17,cost:10000000,currency:'Coins',accent:'yellow',pet:'Builder Cat'},
 {id:10,name:'Void',mult:20,cost:15000000,currency:'Coins',accent:'void',pet:'Huge Pixel Dragon'},
 {id:11,name:'Hell',mult:22,cost:50000000,currency:'Coins',accent:'red',pet:'Huge Magma Dominus'},
 {id:12,name:'Heaven',mult:25,cost:75000000,currency:'Coins',accent:'gold',pet:'Neon Phoenix'},
 {id:13,name:'Lovers',mult:27,cost:250000000,currency:'Coins',accent:'rose',pet:'Huge Royal Eye'},
 {id:14,name:'Pirate',mult:30,cost:500000000,currency:'Coins',accent:'ocean',pet:'Huge Octopus'},
 {id:15,name:'Chinese',mult:32,cost:1500000000,currency:'Coins',accent:'crimson',pet:'Huge Warrior'}
];
const EGGS = [
 {name:'Art Egg',cost:'—',currency:'',world:'Special',zone:'—',type:'special',drops:[]},
 {name:'Basic Egg',cost:250,currency:'Coins',world:'Spawn',zone:1,type:'hatchable',drops:[]},
 {name:'Circus Egg',cost:250000,currency:'Coins',world:'Circus',zone:8,type:'hatchable',drops:[]},
 {name:'Desert Egg',cost:1500,currency:'Coins',world:'Desert',zone:2,type:'hatchable',drops:[]},
 {name:'Farm Egg',cost:50000,currency:'Coins',world:'Farm',zone:7,type:'hatchable',drops:[]},
 {name:'Forest Egg',cost:5000,currency:'Coins',world:'Forest',zone:3,type:'hatchable',drops:[]},
 {name:'Huge Egg',cost:'—',currency:'',world:'Special',zone:'—',type:'special',drops:[]},
 {name:'Ice Egg',cost:10000,currency:'Coins',world:'Ice',zone:5,type:'hatchable',drops:[]},
 {name:'Lovers Egg',cost:50000000,currency:'Coins',world:'Lovers',zone:13,type:'hatchable',drops:[]},
 {name:'Ocean Egg',cost:25000,currency:'Coins',world:'Ocean',zone:6,type:'hatchable',drops:[]},
 {name:'Pirate Egg',cost:75000000,currency:'Coins',world:'Pirate',zone:1,type:'hatchable',drops:[]},
 {name:'S1 Egg',cost:'—',currency:'',world:'S1',zone:'—',type:'inactive',drops:[]},
 {name:'Secret Egg',cost:2500,currency:'Diamonds',world:'Spawn',zone:'—',type:'hatchable',drops:[]},
 {name:'Void Egg',cost:5000000,currency:'Coins',world:'Void',zone:10,type:'hatchable',drops:[]}
];

const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const imgUrl=id=>{const n=String(id||'').match(/\d+/);return n?`/api/pet-thumbnail/${n[0]}`:''};
const fmt=n=>typeof n==='number'?new Intl.NumberFormat('de-DE').format(n):n;
const petByName=n=>PETS.find(p=>p.name.toLowerCase()===String(n).toLowerCase());
function petImage(p){if(!p?.image)return '';const n=String(p.image).match(/\d+/)?.[0]||'';const primary=imgUrl(p.image);const fallback=n?`https://www.roblox.com/asset-thumbnail/image?assetId=${n}&width=420&height=420&format=png`:'';return `<div class="pet-image-wrap" data-asset="${n}"><img src="${primary}" alt="${esc(p.name)}" loading="eager" decoding="async" data-fallback="${fallback}" onerror="petImgError(this)"><span class="image-loading">LOADING</span><button class="img-retry" onclick="retryPetImage(event,this)">↻</button></div>`}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove('show'),1800)}
let audioOn=localStorage.getItem('ph-sound')!=='off';
if(!localStorage.getItem('ph-volume')) localStorage.setItem('ph-volume','15');
let musicPlayer=null, currentTrack=0, musicTimer=null, masterVolume=Number(localStorage.getItem('ph-volume')||15)/100;
const ROBLOX_MUSIC_IDS=['117314599439697','1838660966','9047842993','9047838186','9047835457'];
const ROBLOX_MUSIC_URLS=ROBLOX_MUSIC_IDS.map(id=>`/api/music/${id}`);
function ensureMusicPlayer(){
  if(musicPlayer)return musicPlayer;
  musicPlayer=document.createElement('audio'); musicPlayer.id='phMusic'; musicPlayer.preload='auto'; window.__phMusic=musicPlayer; musicPlayer.volume=masterVolume; musicPlayer.loop=false;
  musicPlayer.addEventListener('ended',()=>{currentTrack=(currentTrack+1)%ROBLOX_MUSIC_URLS.length; playRobloxTrack();});
  musicPlayer.addEventListener('error',()=>{setTimeout(()=>{currentTrack=(currentTrack+1)%ROBLOX_MUSIC_URLS.length;if(audioOn)playRobloxTrack();},350);});
  document.body.appendChild(musicPlayer); return musicPlayer;
}
function playRobloxTrack(){if(!audioOn)return;const a=ensureMusicPlayer();if(a.src && !a.paused && a.readyState>0)return;a.src=ROBLOX_MUSIC_URLS[currentTrack];a.volume=masterVolume;const p=a.play();if(p?.catch)p.catch(()=>toast('Musik kann im Browser nicht automatisch starten – einmal auf 🔊 klicken.'));}
function startMusic(){if(!audioOn)return;const a=ensureMusicPlayer();if(!a.src || a.paused){playRobloxTrack();}}
function stopMusic(){if(musicPlayer){musicPlayer.pause();musicPlayer.currentTime=0;}}
let soundContext=null;
function ensureSoundContext(){if(!soundContext){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;soundContext=new AC();}if(soundContext.state==='suspended')soundContext.resume().catch(()=>{});return soundContext;}
function tone(freq=520,dur=.045,type='sine',gain=.018){const ctx=ensureSoundContext();if(!ctx)return;const osc=ctx.createOscillator(),g=ctx.createGain();osc.type=type;osc.frequency.setValueAtTime(freq,ctx.currentTime);g.gain.setValueAtTime(0.0001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(Math.max(.0001,gain),ctx.currentTime+.006);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+dur);osc.connect(g);g.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+dur+.01);}
function uiHover(){tone(720,.028,'sine',.008);}
function uiClick(){tone(520,.05,'sine',.014);}
function uiSuccess(){tone(660,.06,'triangle',.018);setTimeout(()=>tone(880,.07,'triangle',.015),55);}
function bindSounds(){
  $$('.btn,.play,.chip,.world-card,.pet-card,.egg-card,.sort,.copy,.quick,.action-card,.showcase-pet,.scene-action,.text-btn,.account-link,.icon-btn,.sound,.toggle-setting,.app-install-btn,.login-tab,.select-pet-btn').forEach(e=>{
    if(e.dataset.soundBound)return;e.dataset.soundBound='1';
    e.addEventListener('mouseenter',()=>{if(audioOn)uiHover()},{passive:true});
    e.addEventListener('click',()=>{if(audioOn)uiClick()});
  });
}
window.addEventListener('pointerdown',()=>{if(audioOn)startMusic();},{once:true});
function worldArt(w){const p=petByName(w.pet);return `<div class="world-art ${w.accent}"><div class="sun"></div><div class="world-badge">${String(w.id).padStart(2,'0')}</div><div class="world-pet">${petImage(p)}</div><div class="art-ground"></div></div>`}
function worldCard(w){return `<a class="world-card" href="#worlds/${w.id}">${worldArt(w)}<div class="world-info"><div><small>WORLD ${String(w.id).padStart(2,'0')}</small><h3>${esc(w.name)}</h3><span>${w.unlocked?'Unlocked':fmt(w.cost)+' '+w.currency}</span></div><strong>×${w.mult}</strong></div></a>`}
function petCard(p){
  const valued = Boolean(p.huge || p.rarity === 'Exclusive');
  const value=p.value??null, demand=p.demand??null;
  const kind=p.huge?'HUGE':p.rarity==='Exclusive'?'EXCLUSIVE':p.rarity.toUpperCase();
  const safeName=esc(p.name).replace(/'/g,"\\'");
  const hasValue=valued && value!==null;
  const valueText=hasValue?`${fmt(value)} TOKENS`:'';
  const demandText=valued && demand!==null?`${demand}% WANTED`:'';
  return `<article class="pet-card ${p.huge?'pet-kind-huge':''}" data-name="${esc(p.name)}" onclick="openPet('${safeName}')">
    <div class="pet-pic"><b class="pet-kind ${p.huge?'kind-huge':p.rarity==='Exclusive'?'kind-exclusive':''}">${kind}</b>${petImage(p)}</div>
    <div class="pet-meta">
      <small>${esc(p.rarity)}</small>
      <h3>${esc(p.name)}</h3>
      <span>${esc(p.movement)}${p.huge?' • Huge Pet':''}</span>
      <div class="pet-card-footer">
        <div class="pet-value-block">${valueText?`<b>${valueText}</b>`:'<b class="no-value">NO VALUE</b>'}${demandText?`<em>${demandText}</em>`:''}</div>
        <button class="select-pet-btn ${selectedPets.includes(p.name)?'selected':''}" onclick="togglePetSelection('${safeName}',event)">${selectedPets.includes(p.name)?'✓ AUSGEWÄHLT':'AUSWÄHLEN'}</button>
      </div>
    </div>
  </article>`
}

function renderMonthlyVoteSection(){
  const monthName=new Intl.DateTimeFormat('de-DE',{month:'long',year:'numeric'}).format(new Date());
  return `<section class="section monthly-section monthly-v28" id="monthly"><div class="monthly-wrap"><div class="monthly-heading"><div><span class="monthly-kicker">⭐ MONTHLY HUGE VOTE</span><h2>PET DES MONATS</h2><p>Jeden Monat treten vier echte Huge Pets zufällig ausgewählt gegeneinander an. Die Prozentwerte stammen aus echten Community-Stimmen.</p></div><span class="monthly-date">${esc(monthName).toUpperCase()}</span></div><div id="monthlyFeatureV28"><div class="monthly-loading">MONATLICHE AUSWAHL WIRD GELADEN…</div></div></div></section>`;
}

function renderHome(){
  const featured=['Huge Pixel Dragon','Miner Cat','Neon Phoenix','Huge Octopus'].map(petByName).filter(Boolean);
  const spotlight=featured[0]||PETS[0];
  const scenePets=featured.slice(0,4);
  $('#app').innerHTML=`<main>
    <section class="hero hero-home alive-hero">
      <div class="ambient"><i class="wind w1"></i><i class="wind w2"></i><i class="wind w3"></i><i class="leaf l1">🍃</i><i class="leaf l2">🍃</i><i class="leaf l3">🍂</i><i class="cloud-float cf1"></i><i class="cloud-float cf2"></i></div>
      <div class="hero-left">
        <div class="crumb">🐾 PET HORIZON <span>•</span> ROBLOX GAME HUB</div>
        <h1>PLAY.<br><em>COLLECT. EXPLORE.</em></h1>
        <p>Dein Pet Horizon Hub mit den echten Pets, Welten, Eggs, Codes und der Roblox-Clan-Rangliste.</p>
        <div class="actions"><a class="btn primary" href="#pets">PETS ENTDECKEN</a><a class="btn" href="#worlds">WELTEN ÖFFNEN</a></div>
        <div class="quick-row"><button class="quick" onclick="homeRandomPet()">🎲 Random Pet</button><button class="quick" onclick="homeRandomEgg()">🥚 Random Egg</button><a class="quick" href="#clans">🏆 Live Clans</a><button class="quick" onclick="refreshSiteData()">↻ Aktualisieren</button></div>
      </div>
      <div class="game-preview live-preview">
        <div class="hud"><span>WORLD 01</span><b>SPAWN</b><span>×1</span></div>
        <div class="preview-scene">
          <div class="scene-sky"></div><div class="cloud c1"></div><div class="cloud c2"></div><div class="cloud c3"></div>
          <div class="grass grass-a"></div><div class="grass grass-b"></div>
          <div class="scene-pet-runner">${petImage(petByName('Mascot Lion'))}</div>
          <div class="coin coin1">●</div><div class="coin coin2">●</div><div class="coin coin3">●</div>
          <div class="scene-label">MASCOT LION <span>• LIVE PREVIEW</span></div>
          <button class="scene-action" onclick="homePetAction()">PET ANSEHEN</button>
        </div>
        <div class="preview-bottom"><span>🐾 ROBLOX ASSET</span><span id="clanStatus">● CLANS LADEN…</span></div>
      </div>
    </section>

    <section class="stats"><div><b>${WORLDS.length}</b><span>WORLDS</span></div><div><b>${PETS.length}</b><span>PETS</span></div><div><b>${EGGS.length}</b><span>EGGS</span></div><div><b id="homeClanCount">—</b><span>LIVE CLANS</span></div></section>

    <section class="section home-actions-section"><div class="section-title"><div><small>QUICK PLAY</small><h2>WAS MÖCHTEST DU MACHEN?</h2></div><span class="section-note">Kleine Aktionen für mehr Leben auf der Startseite</span></div>
      <div class="action-grid home-actions">
        <button class="action-card action-button" onclick="homeRandomPet()"><b>🎲</b><strong>Random Pet</strong><span>Öffnet ein zufälliges echtes Pet aus deinem Index</span></button>
        <button class="action-card action-button" onclick="homeRandomEgg()"><b>🥚</b><strong>Random Egg</strong><span>Springt direkt zu einem echten Ei</span></button>
        <button class="action-card action-button" onclick="openPetShowcase()"><b>✨</b><strong>Pet Showcase</strong><span>Wechselt automatisch durch deine Pets</span></button>
        <button class="action-card action-button" onclick="refreshSiteData()"><b>↻</b><strong>Live aktualisieren</strong><span>Clans und Codes erneut von der API laden</span></button>
      </div>
    </section>

    ${renderMonthlyVoteSection()}

    <section class="section news-section"><div class="section-title"><div><small>JANIBOYGAMES NEWS</small><h2>NEWS & UPDATES</h2></div><span class="section-note">Alle neuen Neuigkeiten an einem Ort</span></div>
      <div class="news-layout"><article class="news-feature"><img src="/assets/news-event.png" alt="Pet Horizon News"><div class="news-feature-copy"><span class="news-tag">NEW • FEATURE</span><h3>Pet Horizon News</h3><p>Hier erscheinen künftig neue Events, Updates, neue Pets, Welten, Codes und wichtige Ankündigungen von JaniboyGames.</p><button class="btn primary" onclick="showNewsToast()">NEWS ANSEHEN</button></div></article>
      <div class="news-list"><article><span>UPDATE</span><b>Neue Pets & Inhalte</b><small>Neue Einträge können direkt im Pet Index auftauchen.</small></article><article><span>EVENT</span><b>Neue Events</b><small>Event-Ankündigungen und besondere Aktionen werden hier gesammelt.</small></article><article><span>JANIBOYGAMES</span><b>Website Updates</b><small>Design, Funktionen und Verbesserungen werden hier angekündigt.</small></article></div></div>
    </section>

    <section class="section"><div class="section-title"><div><small>PROGRESSION</small><h2>WORLDS</h2></div><a href="#worlds">ALLE ANSEHEN →</a></div><div class="world-grid">${WORLDS.slice(0,6).map(worldCard).join('')}</div></section>

    <section class="dark"><div class="section-title"><div><small>PET INDEX</small><h2>FEATURED PETS</h2></div><a href="#pets">ALLE PETS →</a></div><div class="pet-grid featured">${featured.map(p=>petCard(p)).join('')}</div></section>

    <section class="section spotlight-section"><div class="section-title"><div><small>DEINE SAMMLUNG</small><h2>SPOTLIGHT</h2></div><button class="text-btn" onclick="homeRandomPet()">ZUFÄLLIGES PET →</button></div>
      <div class="spotlight-card"><div class="spotlight-image">${petImage(spotlight)}</div><div class="spotlight-copy"><small>${esc(spotlight.rarity)}</small><h2>${esc(spotlight.name)}</h2><p>${esc(spotlight.movement)}${spotlight.huge?' • Huge Pet':''}</p><div class="spotlight-actions"><button class="btn primary" onclick="openPet('${esc(spotlight.name).replace(/'/g,"\\'")}')">PET ANSEHEN</button><button class="btn" onclick="toggleHomeFavorite('${esc(spotlight.name).replace(/'/g,"\\'")}',this)">☆ FAVORIT</button></div></div></div>
    </section>

    <section class="section account-section"><div class="section-title"><div><small>JANIBOYGAMES ACCOUNT</small><h2>ROBLOX VERBINDEN</h2></div><span class="section-note">Sicher über Roblox OAuth</span></div><div class="account-card"><div><b>Dein Konto</b><p>Mit einem JaniboyGames-Konto kannst du später deine Website-Daten speichern. Die Roblox-Verknüpfung sollte über Roblox OAuth laufen – niemals über Passwort oder Cookie.</p></div><button class="btn primary" onclick="connectRoblox()">ROBLOX VERBINDEN</button></div></section>

    <section class="section"><div class="section-title"><div><small>LIVE DATA</small><h2>CLAN STATUS</h2></div><a href="#clans">RANGLISTE ÖFFNEN →</a></div><div class="live-status-card"><div><b id="homeClanStatusTitle">Clans werden geladen…</b><span id="homeClanStatusText">Die Rangliste zeigt ausschließlich Clans, die dein Roblox-Spiel synchronisiert.</span></div><button class="btn" onclick="refreshSiteData()">↻ AKTUALISIEREN</button></div></section>
  </main>`;
  bindSounds();
  loadHomeClanStatus();

  updateMonthlyVotes();
}
async function loadHomeClanStatus(){
  try{const r=await fetch('/api/clans?sort=points');const d=await r.json();const count=Number(d.total||0);if($('#homeClanCount'))$('#homeClanCount').textContent=count; if($('#clanStatus'))$('#clanStatus').textContent=count?`● ${count} CLANS LIVE`:'● NOCH KEINE CLANS'; if($('#homeClanStatusTitle'))$('#homeClanStatusTitle').textContent=count?`${count} echte Roblox-Clans synchronisiert`:'Zur Zeit noch keine Clans enthalten'; if($('#homeClanStatusText'))$('#homeClanStatusText').textContent=count?'Die Einträge kommen aus dem Clan-DataStore deines Roblox-Spiels.':'Sobald dein Roblox-Server echte Clans synchronisiert, erscheinen sie hier automatisch. Es werden keine Demo-Clans angezeigt.';}catch{if($('#homeClanCount'))$('#homeClanCount').textContent='—';if($('#clanStatus'))$('#clanStatus').textContent='● API OFFLINE';if($('#homeClanStatusTitle'))$('#homeClanStatusTitle').textContent='Clan-API nicht erreichbar';}}
function homePetAction(){openPet('Mascot Lion');}
function homeRandomPet(){const p=PETS[Math.floor(Math.random()*PETS.length)];openPet(p.name);toast(`Pet: ${p.name}`);beep(780,.08,'triangle')}
function homeRandomEgg(){const e=EGGS.filter(x=>x.type==='hatchable')[Math.floor(Math.random()*EGGS.filter(x=>x.type==='hatchable').length)];openEgg(e.name);toast(`Egg: ${e.name}`);uiSuccess()}
function toggleHomeFavorite(name,btn){let f=JSON.parse(localStorage.getItem('ph-favs')||'[]');if(f.includes(name)){f=f.filter(x=>x!==name);btn.textContent='☆ FAVORIT';toast('Pet entfernt')}else{f.push(name);btn.textContent='★ FAVORIT';toast('Pet gespeichert')}localStorage.setItem('ph-favs',JSON.stringify(f));uiSuccess()}

function petImgError(img){const box=img.closest('.pet-image-wrap');const fallback=img.dataset.fallback;if(fallback && img.dataset.tried!=='1'){img.dataset.tried='1';img.src=fallback;return}box?.classList.add('broken')}
function retryPetImage(ev,btn){ev?.stopPropagation();const box=btn.closest('.pet-image-wrap');const id=box?.dataset.asset;if(!id)return;const img=box.querySelector('img');box.classList.remove('broken');if(img){img.dataset.tried='0';img.src=`/api/pet-thumbnail/${id}?retry=${Date.now()}`}}
function startHomeShowcase(pets){window._showcasePets=pets;window._showcaseIndex=0;clearInterval(window._showcaseTimer);window._showcaseTimer=setInterval(()=>{if(location.hash.replace('#','')!=='home')return;showHomePet((window._showcaseIndex+1)%pets.length)},5000)}
function showHomePet(index){const pets=window._showcasePets||[];if(!pets.length)return;window._showcaseIndex=index%pets.length;$$('.showcase-pet').forEach((b,i)=>b.classList.toggle('active',i===window._showcaseIndex));const p=pets[window._showcaseIndex];if(p){uiSuccess()}}
function openPetShowcase(){const p=(window._showcasePets||PETS).slice(window._showcaseIndex||0, (window._showcaseIndex||0)+1)[0]||PETS[0];openPet(p.name);uiSuccess()}
async function refreshSiteData(){uiClick();toast('Live-Daten werden aktualisiert…');if(location.hash==='#clans')return refreshClans?.();if(location.hash==='#codes')return renderCodes();await loadHomeClanStatus();toast('Aktualisiert ✓')}
function globalSearch(){const q=($('#globalSearch')?.value||'').trim().toLowerCase();if(!q)return;const p=PETS.find(x=>x.name.toLowerCase().includes(q));const w=WORLDS.find(x=>x.name.toLowerCase().includes(q));const e=EGGS.find(x=>x.name.toLowerCase().includes(q));if(p){location.hash='#pets';setTimeout(()=>{const i=$('#petSearch');if(i){i.value=q;i.dispatchEvent(new Event('input'))}},0)}else if(w)location.hash=`#worlds/${w.id}`;else if(e){location.hash='#eggs';setTimeout(()=>{const i=$('#eggSearch');if(i){i.value=q;i.dispatchEvent(new Event('input'))}},0)}else toast('Nichts gefunden')}

function renderWorlds(){ $('#app').innerHTML=`<main class="page"><div class="page-head"><small>PROGRESSION</small><h1>WORLDS</h1><p>Every area from your Roblox area configuration, with the exact multiplier and gate cost.</p></div><div class="world-grid all">${WORLDS.map(worldCard).join('')}</div></main>`;bindSounds() }
function renderWorldDetail(id){const w=WORLDS.find(x=>x.id===Number(id));if(!w)return renderWorlds();const p=petByName(w.pet);$('#app').innerHTML=`<main class="page"><a class="back" href="#worlds">← BACK TO WORLDS</a><section class="world-detail"><div>${worldArt(w)}</div><div class="world-detail-copy"><small>WORLD ${String(w.id).padStart(2,'0')}</small><h1>${esc(w.name)}</h1><div class="big-mult">×${w.mult}<span>AREA MULTIPLIER</span></div><div class="detail-grid"><div><small>UNLOCK</small><b>${w.unlocked?'FREE':fmt(w.cost)}</b><span>${w.unlocked?'Unlocked by default':w.currency}</span></div><div><small>FEATURED PET</small><b>${esc(p?.name||'—')}</b><span>${esc(p?.rarity||'—')}</span></div><div><small>AREA ID</small><b>#${w.id}</b><span>Roblox configuration</span></div></div><div class="detail-actions"><a class="btn primary" href="#pets">VIEW PETS</a><button class="btn" onclick="copyText('${esc(w.name)} world • ×${w.mult} • ${w.unlocked?'Free':fmt(w.cost)+' '+w.currency}')">COPY INFO</button></div></div></section></main>`;bindSounds()}
function renderPets(){
  $('#app').innerHTML=`<main class="page"><div class="page-head"><small>COLLECTION</small><h1>PETS</h1><p>Sortiert nach Pet-Art. Huge und Exclusive können einen internen Pet-Horizon-Value haben. Normale Pets wie die Bling Cat bleiben ohne Value.</p></div>
  <div class="toolbar pet-toolbar"><input id="petSearch" placeholder="Pet suchen..."><div class="chips pet-type-tabs"><button class="chip active" data-f="all">ALLE</button><button class="chip" data-f="huge">HUGE</button><button class="chip" data-f="Exclusive">EXCLUSIVE</button><button class="chip" data-f="favorites">★ FAVORITEN</button></div><select id="petSort"><option value="name">A–Z</option><option value="rarity">SELTENHEIT</option><option value="huge">HUGE ZUERST</option><option value="value">VALUE</option></select></div>
  <div class="collection-bar"><span id="petCount">${PETS.length} Pets</span><button class="text-btn" onclick="homeRandomPet()">🎲 ZUFALL</button></div><div id="selectionBar" class="selection-bar"></div>
  <div class="pet-type-section"><div class="type-heading"><h2>Huge Pets</h2><span>Nur Huge</span></div><div id="hugeGrid" class="pet-grid"></div></div>
  <div class="pet-type-section"><div class="type-heading"><h2>Exclusive Pets</h2><span>Nur Exclusive</span></div><div id="exclusiveGrid" class="pet-grid"></div></div>
  <div class="pet-type-section"><div class="type-heading"><h2>Weitere Pets</h2><span>Keine Value</span></div><div id="normalGrid" class="pet-grid"></div></div></main>`;
  const draw=()=>{
    const q=$('#petSearch').value.toLowerCase(),f=$('.chip.active')?.dataset.f||'all',s=$('#petSort').value;
    let a=PETS.filter(p=>!q||p.name.toLowerCase().includes(q));
    if(f==='favorites'){const favs=JSON.parse(localStorage.getItem('ph-favs')||'[]');a=a.filter(p=>favs.includes(p.name));}
    else if(f==='huge')a=a.filter(p=>p.huge);
    else if(f==='Exclusive')a=a.filter(p=>p.rarity==='Exclusive');
    const rank=(x,y)=>s==='rarity'?String(y.rarity).localeCompare(x.rarity)||x.name.localeCompare(y.name):s==='huge'?(Number(y.huge)-Number(x.huge))||x.name.localeCompare(y.name):s==='value'?(Number(y.value||0)-Number(x.value||0))||x.name.localeCompare(y.name):x.name.localeCompare(y.name);
    a.sort(rank);$('#petCount').textContent=`${a.length} Pets`;
    const renderGrid=(sel,arr)=>{$(sel).innerHTML=arr.length?arr.map(p=>petCard(p)).join(''):'<div class="empty">Keine Pets in dieser Kategorie.</div>';};
    renderGrid('#hugeGrid',a.filter(p=>p.huge));renderGrid('#exclusiveGrid',a.filter(p=>!p.huge&&p.rarity==='Exclusive'));renderGrid('#normalGrid',a.filter(p=>!p.huge&&p.rarity!=='Exclusive'));renderSelectionBar();bindSounds();
  };
  $('#petSearch').oninput=draw;$('#petSort').onchange=draw;$$('.chip').forEach(b=>b.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');uiClick();draw()});draw();
}

let selectedPets = JSON.parse(localStorage.getItem('ph-selected-pets')||'[]').filter(n=>petByName(n));
function saveSelected(){localStorage.setItem('ph-selected-pets',JSON.stringify(selectedPets));}
function selectedValue(){return selectedPets.reduce((sum,n)=>{const p=petByName(n);return sum+((p?.huge||p?.rarity==='Exclusive')?Number(p.value||0):0)},0)}
function togglePetSelection(name, ev){ ev?.stopPropagation(); const p=petByName(name); if(!p)return; const i=selectedPets.indexOf(name); if(i>=0){selectedPets.splice(i,1);saveSelected();toast(`${p.name} abgewählt`)} else {if(selectedPets.length>=3){toast('Maximal 3 Pets auswählen');tone(180,.08,'sine',.006);return} selectedPets.push(name);saveSelected();toast(`${p.name} ausgewählt`);uiSuccess()} renderPets(); }
function renderSelectionBar(){ const bar=$('#selectionBar'); if(!bar)return; bar.innerHTML=`<div><b>${selectedPets.length}/3 PETS AUSGEWÄHLT</b><span>Gesamtwert: ${fmt(selectedValue())} Tokens</span></div><div class="selected-mini">${selectedPets.map(n=>`<button onclick="togglePetSelection('${esc(n).replace(/'/g,"\\'")} ',event)">${esc(n)} ×</button>`).join('')}</div>`; }

function openPet(name){
  const p=petByName(name);if(!p)return;
  const favs=JSON.parse(localStorage.getItem('ph-favs')||'[]');const fav=favs.includes(p.name);
  $('#modal')?.remove();
  const value=p.value??p.tokens??null;
  document.body.insertAdjacentHTML('beforeend',`<div id="modal" class="modal"><div class="modal-box pet-detail-modal"><button class="modal-x" onclick="closeModal()">×</button><div class="modal-pet">${petImage(p)}</div><div class="pet-detail-copy"><small>${esc(p.rarity)}</small><h2>${esc(p.name)}</h2><p>${esc(p.movement)}${p.huge?' • Huge Pet':''}</p><div class="pet-stats"><div><b>${(p.huge||p.rarity==='Exclusive')&&value!==null?fmt(value):'—'}</b><span>VALUE / TOKENS</span></div><div><b>${p.huge?'YES':'NO'}</b><span>HUGE</span></div><div><b>${(p.huge||p.rarity==='Exclusive')&&p.demand!=null?p.demand+'%':'—'}</b><span>WANT / DEMAND</span></div></div><p class="data-note">Tokens sind eine kleine interne Pet-Horizon-Währung. Sie sind keine Robux und haben keinen Echtgeldwert. Nur Huge und Exclusive Pets bekommen Werte.</p><div class="modal-actions"><button class="btn primary" onclick="toggleFav('${esc(p.name).replace(/'/g,"\\'")}',this)">${fav?'★ FAVORITED':'☆ FAVORITE'}</button><button class="btn" onclick="copyText('${esc(p.name)}')">COPY NAME</button></div></div></div></div>`);
  uiClick();
}
function toggleFav(name,btn){let f=JSON.parse(localStorage.getItem('ph-favs')||'[]');if(f.includes(name))f=f.filter(x=>x!==name);else f.push(name);localStorage.setItem('ph-favs',JSON.stringify(f));btn.textContent=f.includes(name)?'★ FAVORITED':'☆ FAVORITE';toast(f.includes(name)?'Pet favorited':'Removed from favorites');uiSuccess()}
function closeModal(){document.querySelector('#modal')?.remove();tone(350,.04,'sine',.004)}
function renderEggs(){const eggs=EGGS;$('#app').innerHTML=`<main class="page"><div class="page-head"><small>HATCHING</small><h1>EGGS</h1><p>Open an egg to see its status and try the small website hatch animation.</p></div><div class="toolbar"><input id="eggSearch" placeholder="Search an egg..."><div class="chips"><button class="chip active" data-f="all">ALL</button><button class="chip" data-f="hatchable">HATCHABLE</button><button class="chip" data-f="special">SPECIAL</button><button class="chip" data-f="inactive">S1</button></div></div><div id="eggGrid" class="egg-grid">${eggs.map(eggCard).join('')}</div></main>`;const draw=()=>{const q=$('#eggSearch').value.toLowerCase(),f=$('.chip.active')?.dataset.f||'all';$('#eggGrid').innerHTML=eggs.filter(e=>(!q||e.name.toLowerCase().includes(q))&&(f==='all'||e.type===f)).map(eggCard).join('')};$('#eggSearch').oninput=draw;$$('.chip').forEach(b=>b.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');draw();uiClick()});bindSounds()}
function eggCard(e){
  return `<article class="egg-card" onclick="openEgg('${esc(e.name).replace(/'/g,"\\'")}')"><div class="egg-pic ${e.type}"><div class="egg-visual"><span>🥚</span></div></div><div class="egg-info"><small>${e.type==='inactive'?'NOT ACTIVE':e.type==='special'?'SPECIAL':esc(e.world)}</small><h3>${esc(e.name)}</h3><span>${e.cost==='—'?'Special':fmt(e.cost)+' '+esc(e.currency)}</span><em>${e.drops?.length?e.drops.length+' DROPS':'DROP-DATEN NICHT HINTERLEGT'}</em></div><b>›</b></article>`
}
function openEgg(name){
  const e=EGGS.find(x=>x.name===name);if(!e)return;
  const drops=Array.isArray(e.drops)?e.drops:[];
  document.body.insertAdjacentHTML('beforeend',`<div id="modal" class="modal"><div class="modal-box egg-modal"><button class="modal-x" onclick="closeModal()">×</button><div class="hatch-stage ${esc(e.world||'void')}"><div class="hatch-egg">🥚</div></div><small>${e.type==='inactive'?'NOT ACTIVE':e.type==='special'?'SPECIAL':esc(e.world)}</small><h2>${esc(e.name)}</h2><p>${e.cost==='—'?'Special egg':fmt(e.cost)+' '+esc(e.currency)}</p><div class="egg-drop-panel"><div class="drop-head"><b>DROP LIST</b><span>${drops.length?'ECHTE GAME-DATEN':'NO DROP DATA'}</span></div>${drops.length?drops.map(d=>`<div class="drop-row"><span>${esc(d.name??d.pet??'Pet')}</span><strong>${esc(d.chance??d.weight??'—')}</strong></div>`).join(''):`<div class="drop-empty">Für dieses Ei sind in den aktuell gelieferten Website-Daten noch keine Drops/Chancen hinterlegt. Deshalb werden hier bewusst keine Pets oder erfundenen Prozentwerte angezeigt.</div>`}</div><div class="modal-actions"><button class="btn primary" ${e.type!=='hatchable'?'disabled':''} onclick="hatch('${esc(e.name).replace(/'/g,"\\'")}')">HATCH</button><button class="btn" onclick="closeModal()">CLOSE</button></div></div></div>`);
  uiClick();
}
function hatch(name){const e=EGGS.find(x=>x.name===name);if(!e||e.type!=='hatchable'){toast('This egg is not hatchable');return}const egg=document.querySelector('.hatch-egg');egg?.classList.add('shake');setTimeout(()=>{const pet=(PETS[Math.floor(Math.random()*PETS.length)]);const stage=document.querySelector('.hatch-stage');if(stage){stage.innerHTML=`<div style="font-size:72px;padding:20px">${petImage(pet)}</div><h3>${pet.name}</h3><p>${pet.rarity}</p>`;}toast(`You hatched ${pet.name}!`);uiSuccess()},650)}
async function renderClans(){
  $('#app').innerHTML=`<main class="page"><div class="page-head"><small>LIVE RANGLISTE</small><h1>CLANS</h1><p>Nur echte Einträge aus deinem Roblox-Spiel. Es werden niemals Demo- oder erfundene Clans angezeigt.</p></div><div class="real-only"><b>● ROBLOX GAME DATA</b><span>Quelle: Clan-Sync deines Spiels</span><button class="btn" onclick="refreshClans()">↻ AKTUALISIEREN</button></div><div class="toolbar clanbar"><input id="clanSearch" placeholder="Clan oder Tag suchen..."><button class="sort active" data-s="points">POINTS</button><button class="sort" data-s="diamonds">DIAMONDS</button></div><div id="clans" class="clans"><div class="loading">Roblox-Clans werden geladen…</div></div></main>`;
  let sort='points',search='';
  async function draw(){try{const r=await fetch(`/api/clans?sort=${sort}&search=${encodeURIComponent(search)}&_=${Date.now()}`);if(!r.ok)throw new Error();const d=await r.json();const rows=d.clans||[];$('#clans').innerHTML=rows.length?rows.map(c=>`<article class="clan-row" onclick="toast('[${esc(c.tag)}] ${esc(c.name)}')"><div class="clan-rank">#${c.rank}</div>${c.thumb?`<img class="clan-thumb" src="${esc(c.thumb)}" alt="">`:'<div class="clan-thumb clan-thumb-empty">🏆</div>'}<div><strong>[${esc(c.tag)}] ${esc(c.name)}</strong><span>LVL ${c.level} • ${c.members}/${c.maxMembers||'?'} MEMBERS${c.country?' • '+esc(c.country):''}</span></div><strong>${fmt(sort==='diamonds'?c.diamonds:c.points)}</strong><span>${sort.toUpperCase()}</span></article>`).join(''):'<div class="empty no-clans"><b>Zur Zeit noch keine Clans enthalten</b><span>Sobald echte Clans aus Roblox synchronisiert wurden, erscheinen sie automatisch hier.</span></div>'}catch{$('#clans').innerHTML='<div class="empty no-clans"><b>Zur Zeit noch keine Clans enthalten</b><span>Die Website zeigt keine Demo-Clans. Prüfe die Roblox-Synchronisierung oder den API-Server.</span></div>'}}
  window.refreshClans=()=>draw();$('#clanSearch').oninput=e=>{search=e.target.value;draw()};$$('.sort').forEach(b=>b.onclick=()=>{$$('.sort').forEach(x=>x.classList.remove('active'));b.classList.add('active');sort=b.dataset.s;uiClick();draw()});draw();bindSounds()
}

async function renderAccount(){
  $('#app').innerHTML=`<main class="page account-page"><div class="page-head"><small>JANIBOYGAMES ACCOUNT</small><h1>MEIN KONTO</h1><p>Ein modernes Login-Fenster mit E-Mail-Code und sicherem Passwortschutz.</p></div><div id="accountPanel" class="account-panel"><div class="loading">Konto wird geladen…</div></div></main>`;
  try{
    const r=await fetch('/api/account/me');const d=await r.json();
    if(!d.loggedIn){
      $('#accountPanel').innerHTML=`<div class="login-shell"><div class="login-brand"><img src="/assets/janiboygames-logo.png" alt="JaniboyGames"><span>Pet Horizon Account</span></div><div class="login-tabs"><button class="login-tab active" data-mode="login" type="button">ANMELDEN</button><button class="login-tab" data-mode="register" type="button">KONTO ERSTELLEN</button></div><div class="login-body"><form id="loginForm" class="login-form" onsubmit="accountAuth(event,'login')"><label>E-Mail<input name="email" id="authEmail" type="email" autocomplete="email" required placeholder="Deine E-Mail-Adresse"></label><label>Passwort<input name="password" id="authPassword" type="password" autocomplete="current-password" required minlength="8" placeholder="Passwort"></label><button class="btn primary login-submit" type="submit">ANMELDEN</button><p class="login-note">Du bekommst anschließend einen 6-stelligen Code per E-Mail.</p></form><form id="registerForm" class="login-form hidden" onsubmit="accountAuth(event,'register')"><label>E-Mail<input name="email" id="regEmail" type="email" autocomplete="email" required placeholder="Deine E-Mail-Adresse"></label><label>Passwort<input name="password" id="regPassword" type="password" autocomplete="new-password" required minlength="8" placeholder="Mindestens 8 Zeichen"></label><button class="btn primary login-submit" type="submit">KONTO ERSTELLEN</button><p class="login-note">Nach der Erstellung bestätigen wir deine E-Mail mit einem Code.</p></form><div id="otpBox"></div></div><div class="login-footer">Sicherer Zugang · JaniboyGames</div></div>`;
      $$('.login-tab').forEach(tab=>tab.onclick=()=>{const mode=tab.dataset.mode;$$('.login-tab').forEach(x=>x.classList.toggle('active',x===tab));$('#loginForm').classList.toggle('hidden',mode!=='login');$('#registerForm').classList.toggle('hidden',mode!=='register');uiClick()});
      return;
    }
    const inv=await fetch('/api/player-index');const data=inv.ok?await inv.json():{pets:[]};const ids=data.pets||[];
    const owned=PETS.filter(p=>ids.some(id=>String(id).toLowerCase()===p.name.toLowerCase()||String(id)===String(p.image).replace('rbxassetid://','')));
    const shown=owned.length?owned.map(p=>petCard(p)).join(''):`<div class="empty"><b>${ids.length?ids.length+' synchronisierte IDs gefunden':'Noch keine synchronisierten Pets'}</b><span>Dein Roblox-Spiel muss den Index mit /api/player-index/sync senden.</span></div>`;
    $('#accountPanel').innerHTML=`<div class="account-card big"><div class="account-avatar">${esc((d.user?.email||'JB').slice(0,2).toUpperCase())}</div><div><small>JANIBOYGAMES</small><h2>${esc(d.user?.email||'Konto')}</h2><p>${d.robloxUser?`Roblox: ${esc(d.robloxUser.name)} · User ID ${esc(d.robloxUser.userId)}`:'Roblox noch nicht verbunden'}<br>Letzter Sync: ${esc(data.updatedAt||'noch nicht')}</p></div><div class="account-actions"><button class="btn primary" onclick="connectRoblox()">${d.robloxUser?'ROBLOX VERBUNDEN':'ROBLOX VERBINDEN'}</button><button class="btn" onclick="location.reload()">↻ AKTUALISIEREN</button></div></div><section class="account-inventory"><div class="section-title"><div><small>DEIN ROBLOX-SPIEL-INDEX</small><h2>${owned.length} ERKANNTE PETS</h2></div><span class="section-note">Nur dein Game-Sync</span></div><div class="pet-grid">${shown}</div></section>`;bindSounds();
  }catch{$('#accountPanel').innerHTML='<div class="empty">Account-API nicht erreichbar.</div>'}
}
async function accountAuth(ev,mode){ev.preventDefault();const f=new FormData(ev.currentTarget);const email=String(f.get('email')||'').trim();const password=String(f.get('password')||'');const submit=ev.currentTarget.querySelector('button[type=submit]');if(submit){submit.disabled=true;submit.textContent='BITTE WARTEN…'}try{const r=await fetch('/api/auth/'+mode,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});const d=await r.json();toast(d.message||'');if(d.requires2fa){document.querySelector('#otpBox').innerHTML=`<div class="otp-panel"><div class="otp-icon">✉</div><h2>E-Mail bestätigen</h2><p>Wir haben einen 6-stelligen Code an <b>${esc(email)}</b> gesendet.</p><form onsubmit="verifyOtp(event)"><input id="otpCode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" required placeholder="000000"><button class="btn primary login-submit">CODE BESTÄTIGEN</button></form><button class="resend" type="button" onclick="resendOtp('${esc(mode)}')">Code erneut senden</button></div>`;document.querySelector('#otpCode')?.focus();}else if(d.success)location.reload();}finally{if(submit){submit.disabled=false;submit.textContent=mode==='login'?'ANMELDEN':'KONTO ERSTELLEN'}}}
async function verifyOtp(ev){ev.preventDefault();const code=$('#otpCode').value;const r=await fetch('/api/auth/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code})});const d=await r.json();toast(d.message||'');if(d.success)location.reload();}
async function resendOtp(mode){const form=document.querySelector(mode==='login'?'#loginForm':'#registerForm');if(form)await accountAuth({preventDefault:()=>{},currentTarget:form},mode)}

function renderCodes(){$('#app').innerHTML=`<main class="page"><div class="page-head"><small>REWARDS</small><h1>CODES</h1><p>Copy active codes directly from the Pet Horizon API.</p></div><div id="codes" class="codes"><div class="loading">Loading...</div></div></main>`;fetch('/api/codes').then(r=>r.json()).then(cs=>{$('#codes').innerHTML=cs.map(c=>`<article class="code-row"><div><small>ACTIVE</small><h3>${esc(c.code)}</h3></div><strong>${esc(c.reward)}</strong><button class="copy" onclick="copyText('${esc(c.code)}')">COPY</button></article>`).join('')||'<div class="empty">No active codes.</div>';bindSounds()}).catch(()=>$('#codes').innerHTML='<div class="empty">API is not connected.</div>')}
function copyText(text){navigator.clipboard?.writeText(text);toast('Copied ✓');uiSuccess()}
function connectRoblox(){window.location.href='/auth/roblox'}


let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;});
async function installApp(){
  if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return;}
  if(/iphone|ipad|ipod/i.test(navigator.userAgent)){toast('Auf iPhone: Teilen → Zum Home-Bildschirm');return;}
  if(/android/i.test(navigator.userAgent)){toast('Im Browser-Menü „App installieren“ auswählen');return;}
  toast('Windows: Im Browser-Menü „App installieren“ auswählen');
}
function showNewsToast(){toast('News-Bereich geöffnet ✓');}
function openSettings(){
  $('#settingsModal')?.remove();
  const dark=(document.documentElement.getAttribute('data-theme')||localStorage.getItem('ph-theme')||'dark')!=='light'; const vol=Number(localStorage.getItem('ph-volume')||15);
  document.body.insertAdjacentHTML('beforeend',`<div id="settingsModal" class="modal"><div class="modal-box settings-modal"><button class="modal-x" onclick="closeSettings()">×</button><img class="settings-logo" src="/assets/janiboygames-logo.png" alt="JaniboyGames"><h2>SETTINGS</h2><div class="setting-row"><div><b>Design</b><span>Heller oder dunkler Modus</span></div><button class="toggle-setting" onclick="setTheme()">${dark?'🌙 DARK':'☀️ LIGHT'}</button></div><div class="setting-row"><div><b>Music</b><span>Hintergrundmusik ein/aus</span></div><button class="toggle-setting" onclick="toggleMusicSetting()">${audioOn?'🔊 AN':'🔇 AUS'}</button></div><label class="volume-control"><b>Music volume <span id="volumeLabel">${vol}%</span></b><input id="volumeRange" type="range" min="0" max="100" value="${vol}" oninput="setVolume(this.value)"></label><div class="settings-links"><a href="#account" onclick="closeSettings()">👤 Mein JaniboyGames-Konto</a><a href="#pets" onclick="closeSettings()">🐾 3 Pets auswählen</a><button class="app-install-btn" onclick="installApp()">📲 APP INSTALLIEREN</button><div class="install-platforms"><div class="install-platform"><b>🪟 WINDOWS</b><span>Chrome/Edge → Installieren</span></div><div class="install-platform"><b>🤖 ANDROID</b><span>Browser-Menü → App installieren</span></div><div class="install-platform"><b>🍎 IPHONE</b><span>Teilen → Zum Home-Bildschirm</span></div></div><div class="install-hint">Die Website ist als PWA aufgebaut. Dadurch kann sie auf Windows, Android und iPhone wie eine App installiert und separat gestartet werden.</div></div></div></div>`);
}
function closeSettings(){ $('#settingsModal')?.remove(); }
function setTheme(){const current=localStorage.getItem('ph-theme')==='light'?'light':'dark';const next=current==='light'?'dark':'light';localStorage.setItem('ph-theme',next);document.documentElement.setAttribute('data-theme',next);document.documentElement.style.colorScheme=next;document.body.classList.toggle('light-theme',next==='light');openSettings();window.dispatchEvent(new CustomEvent('ph-theme-change',{detail:next}));}
function setVolume(v){const n=Math.max(0,Math.min(100,Number(v)));masterVolume=n/100;localStorage.setItem('ph-volume',String(n));if(musicPlayer)musicPlayer.volume=masterVolume;$('#volumeLabel').textContent=n+'%';}
function toggleMusicSetting(){audioOn=!audioOn;localStorage.setItem('ph-sound',audioOn?'on':'off');$('#soundBtn').textContent=audioOn?'🔊':'🔇';if(audioOn)startMusic();else stopMusic();openSettings();}
function applySavedSettings(){const theme=localStorage.getItem('ph-theme')==='light'?'light':'dark';document.documentElement.setAttribute('data-theme',theme);document.documentElement.style.colorScheme=theme;document.body.classList.toggle('light-theme',theme==='light');masterVolume=Number(localStorage.getItem('ph-volume')||15)/100;if(musicPlayer)musicPlayer.volume=masterVolume;}

function render(){const h=location.hash.replace('#','').split('/');const r=h[0]||'home';if(r==='home')renderHome();else if(r==='worlds'&&h[1])renderWorldDetail(h[1]);else if(r==='worlds')renderWorlds();else if(r==='pets')renderPets();else if(r==='eggs')renderEggs();else if(r==='clans')renderClans();else if(r==='codes')renderCodes();else if(r==='account')renderAccount();else renderHome();window.scrollTo(0,0)}
$('#soundBtn').onclick=()=>{audioOn=!audioOn;localStorage.setItem('ph-sound',audioOn?'on':'off');$('#soundBtn').textContent=audioOn?'🔊':'🔇';if(audioOn){startMusic();uiSuccess()}else stopMusic()};$('#soundBtn').textContent=audioOn?'🔊':'🔇';if(audioOn&&localStorage.getItem('ph-sound')==='on'){/* music waits for first user interaction */}window.openPet=openPet;window.closeModal=closeModal;window.toggleFav=toggleFav;window.openEgg=openEgg;window.hatch=hatch;window.copyText=copyText;window.homePetAction=homePetAction;window.homeRandomPet=homeRandomPet;window.homeRandomEgg=homeRandomEgg;window.toggleHomeFavorite=toggleHomeFavorite;window.petImgError=petImgError;window.retryPetImage=retryPetImage;window.showHomePet=showHomePet;window.openPetShowcase=openPetShowcase;window.refreshSiteData=refreshSiteData;window.globalSearch=globalSearch;window.connectRoblox=connectRoblox;window.accountAuth=accountAuth;window.verifyOtp=verifyOtp;window.togglePetSelection=togglePetSelection;window.openSettings=openSettings;window.closeSettings=closeSettings;window.setTheme=setTheme;window.setVolume=setVolume;window.toggleMusicSetting=toggleMusicSetting;window.addEventListener('hashchange',render);applySavedSettings();render();
if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(()=>{});


