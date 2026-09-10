(function(){
  'use strict';

  const LANGS={
    de:{flag:'🇩🇪',name:'Deutsch'},en:{flag:'🇬🇧',name:'English'},es:{flag:'🇪🇸',name:'Español'},fr:{flag:'🇫🇷',name:'Français'},it:{flag:'🇮🇹',name:'Italiano'},pl:{flag:'🇵🇱',name:'Polski'}
  };
  const PHRASES={
    'Home':['Home','Home','Inicio','Accueil','Home','Start'],
    'Worlds':['Worlds','Worlds','Mundos','Mondes','Mondi','Światy'],
    'Pets':['Pets','Pets','Mascotas','Animaux','Animali','Pety'],
    'Eggs':['Eggs','Eggs','Huevos','Œufs','Uova','Jaja'],
    'Clans':['Clans','Clans','Clanes','Clans','Clan','Klany'],
    'Codes':['Codes','Codes','Códigos','Codes','Codici','Kody'],
    'Videos':['Videos','Videos','Vídeos','Vidéos','Video','Filmy'],
    'Konto':['Konto','Account','Cuenta','Compte','Account','Konto'],
    'LOGIN':['LOGIN','LOGIN','INICIAR SESIÓN','CONNEXION','ACCESSO','LOGOWANIE'],
    'PLAY':['PLAY','PLAY','JUGAR','JOUER','GIOCA','GRAJ'],
    'PET HORIZON • YOUR PETS. YOUR PROGRESS.':['PET HORIZON • YOUR PETS. YOUR PROGRESS.','PET HORIZON • YOUR PETS. YOUR PROGRESS.','PET HORIZON • TUS MASCOTAS. TU PROGRESO.','PET HORIZON • VOS PETS. VOTRE PROGRESSION.','PET HORIZON • I TUOI PET. I TUOI PROGRESSI.','PET HORIZON • TWOJE PETY. TWÓJ POSTĘP.'],
    'PET HORIZON HUB':['PET HORIZON HUB','PET HORIZON HUB','CENTRO PET HORIZON','HUB PET HORIZON','HUB PET HORIZON','CENTRUM PET HORIZON'],
    'ROBLOX GAME HUB':['ROBLOX GAME HUB','ROBLOX GAME HUB','CENTRO DEL JUEGO ROBLOX','HUB DU JEU ROBLOX','HUB GIOCHI ROBLOX','CENTRUM GRY ROBLOX'],
    'PLAY.':['PLAY.','PLAY.','JUEGA.','JOUE.','GIOCA.','GRAJ.'],
    'COLLECT. EXPLORE.':['COLLECT. EXPLORE.','COLLECT. EXPLORE.','COLECCIONA. EXPLORA.','COLLECTE. EXPLORE.','COLLEZIONA. ESPLORA.','ZBIERAJ. ODKRYWAJ.'],
    'PETS ENTDECKEN':['PETS ENTDECKEN','DISCOVER PETS','DESCUBRIR MASCOTAS','DÉCOUVRIR LES PETS','SCOPRI I PET','ODKRYJ PETY'],
    'WELTEN ÖFFNEN':['WELTEN ÖFFNEN','OPEN WORLDS','ABRIR MUNDOS','OUVRIR LES MONDES','APRI I MONDI','OTWÓRZ ŚWIATY'],
    'Random Pet':['Random Pet','Random Pet','Mascota aleatoria','Pet aléatoire','Pet casuale','Losowy pet'],
    'Random Egg':['Random Egg','Random Egg','Huevo aleatorio','Œuf aléatoire','Uovo casuale','Losowe jajo'],
    'Live Clans':['Live Clans','Live Clans','Clanes en vivo','Clans en direct','Clan live','Klany na żywo'],
    'Aktualisieren':['Aktualisieren','Refresh','Actualizar','Actualiser','Aggiorna','Odśwież'],
    'PET DES MONATS':['PET DES MONATS','PET OF THE MONTH','MASCOTA DEL MES','PET DU MOIS','PET DEL MESE','PET MIESIĄCA'],
    'PET AUSWÄHLEN':['PET AUSWÄHLEN','SELECT PET','ELEGIR MASCOTA','CHOISIR LE PET','SCEGLI PET','WYBIERZ PETA'],
    'SETTINGS':['SETTINGS','SETTINGS','AJUSTES','PARAMÈTRES','IMPOSTAZIONI','USTAWIENIA'],
    'Design':['Design','Design','Diseño','Design','Design','Wygląd'],
    'Heller oder dunkler Modus':['Heller oder dunkler Modus','Light or dark mode','Modo claro u oscuro','Mode clair ou sombre','Modalità chiara o scura','Jasny lub ciemny motyw'],
    'Music':['Music','Music','Música','Musique','Musica','Muzyka'],
    'Hintergrundmusik ein/aus':['Hintergrundmusik ein/aus','Background music on/off','Música de fondo activada/desactivada','Musique de fond activée/désactivée','Musica di sottofondo attiva/disattiva','Muzyka w tle wł./wył.'],
    'Music volume':['Music volume','Music volume','Volumen de música','Volume de la musique','Volume musica','Głośność muzyki'],
    'Language':['Language','Language','Idioma','Langue','Lingua','Język'],
    'APP INSTALLIEREN':['APP INSTALLIEREN','INSTALL APP','INSTALAR APP','INSTALLER L’APP','INSTALLA APP','ZAINSTALUJ APLIKACJĘ'],
    '3 Pets auswählen':['3 Pets auswählen','Choose 3 pets','Elegir 3 mascotas','Choisir 3 pets','Scegli 3 pet','Wybierz 3 pety'],
    'EGGS':['EGGS','EGGS','HUEVOS','ŒUFS','UOVA','JAJA'],
    'PETS':['PETS','PETS','MASCOTAS','PETS','PET','PETY'],
    'WORLDS':['WORLDS','WORLDS','MUNDOS','MONDES','MONDI','ŚWIATY'],
    'CODES':['CODES','CODES','CÓDIGOS','CODES','CODICI','KODY'],
    'CLANS':['CLANS','CLANS','CLANES','CLANS','CLAN','KLANY'],
    'Videos':['Videos','Videos','Vídeos','Vidéos','Video','Filmy'],
    'CONTENT CREATOR':['CONTENT CREATOR','CONTENT CREATORS','CREADORES DE CONTENIDO','CRÉATEURS DE CONTENU','CREATOR','TWÓRCY'],
    'TRAILER':['TRAILER','TRAILER','TRÁILER','BANDE-ANNONCE','TRAILER','TRAILER'],
    'GAME TRAILER':['GAME TRAILER','GAME TRAILER','TRÁILER DEL JUEGO','BANDE-ANNONCE DU JEU','TRAILER DEL GIOCO','TRAILER GRY'],
    'TRAILER ANSEHEN':['TRAILER ANSEHEN','WATCH TRAILER','VER TRÁILER','REGARDER LA BANDE-ANNONCE','GUARDA TRAILER','OBEJRZYJ TRAILER'],
    'Noch kein Trailer hinterlegt.':['Noch kein Trailer hinterlegt.','No trailer has been added yet.','Todavía no hay tráiler.','Aucune bande-annonce n’a encore été ajoutée.','Nessun trailer è stato ancora aggiunto.','Nie dodano jeszcze trailera.'],
    'Creator Videos':['Creator Videos','Creator Videos','Vídeos de creadores','Vidéos des créateurs','Video dei creator','Filmy twórców'],
    'Noch keine Creator-Videos hinterlegt.':['Noch keine Creator-Videos hinterlegt.','No creator videos have been added yet.','Todavía no hay vídeos de creadores.','Aucune vidéo de créateur n’a encore été ajoutée.','Nessun video dei creator è stato ancora aggiunto.','Nie dodano jeszcze filmów twórców.'],
    'ECHTE VIDEOS':['ECHTE VIDEOS','REAL VIDEOS','VÍDEOS REALES','VRAIES VIDÉOS','VIDEO REALI','PRAWDZIWE FILMY'],
    'Nur echte Pet Horizon Videos werden hier angezeigt.':['Nur echte Pet Horizon Videos werden hier angezeigt.','Only real Pet Horizon videos are shown here.','Aquí solo se muestran vídeos reales de Pet Horizon.','Seules les vraies vidéos Pet Horizon sont affichées ici.','Qui vengono mostrati solo video reali di Pet Horizon.','Tutaj wyświetlane są tylko prawdziwe filmy Pet Horizon.'],
    'NOCH NICHT VERFÜGBAR':['NOCH NICHT VERFÜGBAR','NOT AVAILABLE YET','AÚN NO DISPONIBLE','PAS ENCORE DISPONIBLE','NON ANCORA DISPONIBILE','JESZCZE NIEDOSTĘPNE'],
    'ÖFFNEN':['ÖFFNEN','OPEN','ABRIR','OUVRIR','APRI','OTWÓRZ']
  };
  const alias={};
  Object.entries(PHRASES).forEach(([key,vals])=>vals.forEach((v,i)=>{if(v)alias[v]={key,i}}));
  function lang(){return localStorage.getItem('ph-lang')||'de'}
  function tr(s){const row=PHRASES[s];return row?row[['de','en','es','fr','it','pl'].indexOf(lang())]||row[0]:s}
  function translateText(text){
    if(!text||!text.trim())return text;
    const lead=text.match(/^\s*/)?.[0]||'', trail=text.match(/\s*$/)?.[0]||'';
    const core=text.trim();
    if(alias[core]) return lead+PHRASES[alias[core].key][['de','en','es','fr','it','pl'].indexOf(lang())]+trail;
    let out=core;
    Object.entries(alias).sort((a,b)=>b[0].length-a[0].length).forEach(([src,meta])=>{
      if(out.includes(src)) out=out.split(src).join(PHRASES[meta.key][['de','en','es','fr','it','pl'].indexOf(lang())]);
    });
    return lead+out+trail;
  }
  function applyTranslations(){
    const root=document.body; document.documentElement.lang=lang();
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{if(n.parentElement?.closest('script,style,textarea'))return; const next=translateText(n.nodeValue); if(next!==n.nodeValue)n.nodeValue=next;});
    document.querySelectorAll('input[placeholder]').forEach(el=>{el.placeholder=translateText(el.placeholder)});
    document.querySelectorAll('[title]').forEach(el=>{el.title=translateText(el.title)});
    document.querySelectorAll('.lang-option').forEach(el=>el.classList.toggle('active',el.dataset.lang===lang()));
  }
  window.setLanguageV24=function(l){if(!LANGS[l])return;localStorage.setItem('ph-lang',l);location.reload()};
  window.trV24=tr;

  function ytId(url){
    const s=String(url||'').trim();
    const m=s.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
    return m?m[1]:'';
  }
  function videoCard(v){
    const id=ytId(v.url); if(!id)return '';
    const title=esc(v.title||'Pet Horizon Video'); const creator=esc(v.creator||'Content Creator');
    return `<article class="creator-video-card"><div class="creator-video-thumb"><img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${title}" loading="lazy"><button class="video-play" onclick="openVideoV24('${id}','${title.replace(/'/g,"\\'")}','${creator.replace(/'/g,"\\'")}')">▶</button></div><div class="creator-video-info"><small>${creator}</small><h3>${title}</h3><button class="btn" onclick="openVideoV24('${id}','${title.replace(/'/g,"\\'")}','${creator.replace(/'/g,"\\'")}')">${tr('ÖFFNEN')}</button></div></article>`;
  }
  window.openVideoV24=function(id,title,creator){
    document.querySelector('#videoModalV24')?.remove();
    document.body.insertAdjacentHTML('beforeend',`<div id="videoModalV24" class="modal"><div class="modal-box video-modal"><button class="modal-x" onclick="document.querySelector('#videoModalV24')?.remove()">×</button><div class="video-frame"><iframe src="https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><small>${esc(creator)}</small><h2>${esc(title)}</h2></div></div>`);
    if(typeof uiClick==='function')uiClick();
  };
  window.renderVideosV24=async function(){
    let data={trailer:null,creators:[]};
    try{const r=await fetch('/videos.json?x='+Date.now());if(r.ok)data=await r.json();}catch(e){}
    const trailer=data.trailer&&ytId(data.trailer.url)?data.trailer:null;
    const creators=Array.isArray(data.creators)?data.creators.filter(v=>ytId(v.url)):[];
    const trailerHtml=trailer?`<div class="trailer-player"><iframe src="https://www.youtube.com/embed/${ytId(trailer.url)}?rel=0" title="${esc(trailer.title||'Pet Horizon Trailer')}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><div class="video-meta"><small>${trailer.label||tr('GAME TRAILER')}</small><h2>${esc(trailer.title||'Pet Horizon Trailer')}</h2><p>${esc(trailer.description||tr('Nur echte Pet Horizon Videos werden hier angezeigt.'))}</p></div>`:`<div class="video-empty"><div class="video-empty-icon">▶</div><b>${tr('NOCH NICHT VERFÜGBAR')}</b><span>${tr('Noch kein Trailer hinterlegt.')}</span></div>`;
    const creatorHtml=creators.length?creators.map(videoCard).join(''):`<div class="video-empty compact"><div class="video-empty-icon">🎬</div><b>${tr('NOCH NICHT VERFÜGBAR')}</b><span>${tr('Noch keine Creator-Videos hinterlegt.')}</span></div>`;
    $('#app').innerHTML=`<main class="page videos-page"><div class="page-head"><small>${tr('CONTENT CREATOR')}</small><h1>${tr('Videos')}</h1><p>${tr('Nur echte Pet Horizon Videos werden hier angezeigt.')}</p></div><section class="trailer-section"><div class="section-title"><div><small>${tr('TRAILER')}</small><h2>${tr('GAME TRAILER')}</h2></div></div><div class="trailer-card">${trailerHtml}</div></section><section class="creator-section"><div class="section-title"><div><small>${tr('CONTENT CREATOR')}</small><h2>${tr('Creator Videos')}</h2></div><span class="section-note">${tr('ECHTE VIDEOS')}</span></div><div class="creator-video-grid">${creatorHtml}</div></section></main>`;
    if(typeof bindSounds==='function')bindSounds();
    setTimeout(applyTranslations,0);
  };

  /* Settings language buttons: keep the existing V22 settings design but make switching reliable. */
  const oldOpenSettings=window.openSettings;
  window.openSettings=function(){
    if(typeof oldOpenSettings==='function') oldOpenSettings();
    setTimeout(()=>{
      document.querySelectorAll('.lang-option').forEach((el,i)=>{
        const code=['de','en','es','fr','it','pl'][i];
        el.dataset.lang=code;
        el.onclick=()=>window.setLanguageV24(code);
      });
      applyTranslations();
    },0);
  };
  try{openSettings=window.openSettings}catch(e){}

  const oldRender=window.render;
  window.render=function(){
    const r=(location.hash.replace('#','').split('/')[0]||'home');
    if(r==='videos') return window.renderVideosV24();
    const result=oldRender?.();
    setTimeout(applyTranslations,0);
    return result;
  };
  try{render=window.render}catch(e){}
  window.addEventListener('hashchange',()=>setTimeout(applyTranslations,20));
  setTimeout(applyTranslations,100);
})();
