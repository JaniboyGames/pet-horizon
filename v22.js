/* Pet Horizon V22 patch: real egg drops, no hatch simulation, language selector, robust pet images. */
(function(){
  const LANGS={
    de:{flag:'🇩🇪',name:'Deutsch'},en:{flag:'🇬🇧',name:'English'},es:{flag:'🇪🇸',name:'Español'},fr:{flag:'🇫🇷',name:'Français'},it:{flag:'🇮🇹',name:'Italiano'},pl:{flag:'🇵🇱',name:'Polski'}
  };
  const T={
    de:{'Home':'Home','Worlds':'Welten','Pets':'Pets','Eggs':'Eier','Clans':'Clans','Codes':'Codes','LOGIN':'LOGIN','PLAY':'SPIELEN','SETTINGS':'EINSTELLUNGEN','Design':'Design','Heller oder dunkler Modus':'Heller oder dunkler Modus','Music':'Musik','Hintergrundmusik ein/aus':'Hintergrundmusik ein/aus','Music volume':'Musiklautstärke','APP INSTALLIEREN':'APP INSTALLIEREN','Language':'Sprache','Sprache':'Sprache','3 Pets auswählen':'3 Pets auswählen','PET DES MONATS':'PET DES MONATS','EGGS':'EIER','HATCHING':'EIER','DROP LIST':'PET-LISTE','NO DROP DATA':'NOCH NICHT BEKANNT','REAL GAME DATA':'ECHTE IN-GAME-DATEN','SEARCH AN EGG...':'EI SUCHEN...','ALL':'ALLE','HATCHABLE':'VERFÜGBAR','SPECIAL':'SPEZIAL','NOT ACTIVE':'NICHT AKTIV','NOCH NICHT BEKANNT':'NOCH NICHT BEKANNT','Für dieses Ei sind in den aktuell gelieferten Website-Daten noch keine Drops/Chancen hinterlegt. Deshalb werden hier bewusst keine Pets oder erfundenen Prozentwerte angezeigt.':'Für dieses Ei sind aktuell keine echten In-Game-Daten zu Pets oder Chancen verfügbar. Deshalb werden keine Werte erfunden.'},
    en:{'Home':'Home','Worlds':'Worlds','Pets':'Pets','Eggs':'Eggs','Clans':'Clans','Codes':'Codes','LOGIN':'LOGIN','PLAY':'PLAY','SETTINGS':'SETTINGS','Design':'Design','Heller oder dunkler Modus':'Light or dark mode','Music':'Music','Hintergrundmusik ein/aus':'Background music on/off','Music volume':'Music volume','APP INSTALLIEREN':'INSTALL APP','Language':'Language','Sprache':'Language','3 Pets auswählen':'Select 3 pets','PET DES MONATS':'PET OF THE MONTH','EGGS':'EGGS','HATCHING':'EGGS','DROP LIST':'PET LIST','NO DROP DATA':'NOT YET KNOWN','REAL GAME DATA':'REAL IN-GAME DATA','SEARCH AN EGG...':'SEARCH AN EGG...','ALL':'ALL','HATCHABLE':'AVAILABLE','SPECIAL':'SPECIAL','NOT ACTIVE':'NOT ACTIVE','NOCH NICHT BEKANNT':'NOT YET KNOWN','Für dieses Ei sind in den aktuell gelieferten Website-Daten noch keine Drops/Chancen hinterlegt. Deshalb werden hier bewusst keine Pets oder erfundenen Prozentwerte angezeigt.':'No real in-game pet or chance data is currently available for this egg. No values are invented.'},
    es:{'Home':'Inicio','Worlds':'Mundos','Pets':'Mascotas','Eggs':'Huevos','Clans':'Clanes','Codes':'Códigos','LOGIN':'INICIAR SESIÓN','PLAY':'JUGAR','SETTINGS':'AJUSTES','Design':'Diseño','Heller oder dunkler Modus':'Modo claro u oscuro','Music':'Música','Hintergrundmusik ein/aus':'Música de fondo activada/desactivada','Music volume':'Volumen de música','APP INSTALLIEREN':'INSTALAR APP','Language':'Idioma','Sprache':'Idioma','3 Pets auswählen':'Elegir 3 mascotas','PET DES MONATS':'MASCOTA DEL MES','EGGS':'HUEVOS','HATCHING':'HUEVOS','DROP LIST':'LISTA DE MASCOTAS','NO DROP DATA':'AÚN NO SE CONOCE','REAL GAME DATA':'DATOS REALES DEL JUEGO','SEARCH AN EGG...':'BUSCAR UN HUEVO...','ALL':'TODOS','HATCHABLE':'DISPONIBLE','SPECIAL':'ESPECIAL','NOT ACTIVE':'INACTIVO','NOCH NICHT BEKANNT':'AÚN NO SE CONOCE'},
    fr:{'Home':'Accueil','Worlds':'Mondes','Pets':'Pets','Eggs':'Œufs','Clans':'Clans','Codes':'Codes','LOGIN':'CONNEXION','PLAY':'JOUER','SETTINGS':'PARAMÈTRES','Design':'Design','Heller oder dunkler Modus':'Mode clair ou sombre','Music':'Musique','Hintergrundmusik ein/aus':'Musique de fond activée/désactivée','Music volume':'Volume de la musique','APP INSTALLIEREN':'INSTALLER L’APP','Language':'Langue','Sprache':'Langue','3 Pets auswählen':'Choisir 3 pets','PET DES MONATS':'PET DU MOIS','EGGS':'ŒUFS','HATCHING':'ŒUFS','DROP LIST':'LISTE DES PETS','NO DROP DATA':'PAS ENCORE CONNU','REAL GAME DATA':'VRAIES DONNÉES DU JEU','SEARCH AN EGG...':'RECHERCHER UN ŒUF...','ALL':'TOUS','HATCHABLE':'DISPONIBLE','SPECIAL':'SPÉCIAL','NOT ACTIVE':'INACTIF','NOCH NICHT BEKANNT':'PAS ENCORE CONNU'},
    it:{'Home':'Home','Worlds':'Mondi','Pets':'Pet','Eggs':'Uova','Clans':'Clan','Codes':'Codici','LOGIN':'ACCEDI','PLAY':'GIOCA','SETTINGS':'IMPOSTAZIONI','Design':'Design','Heller oder dunkler Modus':'Modalità chiara o scura','Music':'Musica','Hintergrundmusik ein/aus':'Musica di sottofondo','Music volume':'Volume musica','APP INSTALLIEREN':'INSTALLA APP','Language':'Lingua','Sprache':'Lingua','3 Pets auswählen':'Scegli 3 pet','PET DES MONATS':'PET DEL MESE','EGGS':'UOVA','HATCHING':'UOVA','DROP LIST':'LISTA PET','NO DROP DATA':'NON ANCORA NOTO','REAL GAME DATA':'DATI REALI DEL GIOCO','SEARCH AN EGG...':'CERCA UN UOVO...','ALL':'TUTTI','HATCHABLE':'DISPONIBILE','SPECIAL':'SPECIALE','NOT ACTIVE':'INATTIVO','NOCH NICHT BEKANNT':'NON ANCORA NOTO'},
    pl:{'Home':'Start','Worlds':'Światy','Pets':'Pety','Eggs':'Jaja','Clans':'Klany','Codes':'Kody','LOGIN':'LOGOWANIE','PLAY':'GRAJ','SETTINGS':'USTAWIENIA','Design':'Wygląd','Heller oder dunkler Modus':'Jasny lub ciemny motyw','Music':'Muzyka','Hintergrundmusik ein/aus':'Muzyka w tle wł./wył.','Music volume':'Głośność muzyki','APP INSTALLIEREN':'ZAINSTALUJ APLIKACJĘ','Language':'Język','Sprache':'Język','3 Pets auswählen':'Wybierz 3 pety','PET DES MONATS':'PET MIESIĄCA','EGGS':'JAJA','HATCHING':'JAJA','DROP LIST':'LISTA PETÓW','NO DROP DATA':'JESZCZE NIEZNANE','REAL GAME DATA':'PRAWDZIWE DANE Z GRY','SEARCH AN EGG...':'SZUKAJ JAJA...','ALL':'WSZYSTKIE','HATCHABLE':'DOSTĘPNE','SPECIAL':'SPECJALNE','NOT ACTIVE':'NIEAKTYWNE','NOCH NICHT BEKANNT':'JESZCZE NIEZNANE'}
  };
  function lang(){return localStorage.getItem('ph-lang')||'de'}
  function tr(s){const l=lang();return T[l]?.[s]||s}
  function translateVisibleUI(){
    const l=lang(); document.documentElement.lang=l;
    document.querySelectorAll('input[placeholder]').forEach(el=>{if(T[l]?.[el.placeholder])el.placeholder=T[l][el.placeholder]});
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); const nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(n=>{const raw=n.nodeValue?.trim(); if(raw&&T[l]?.[raw]) n.nodeValue=n.nodeValue.replace(raw,T[l][raw]);});
    document.querySelectorAll('[data-lang-name]').forEach(el=>el.textContent=LANGS[l].name);
  }
  window.setLanguage=function(l){if(!LANGS[l])return;localStorage.setItem('ph-lang',l);location.reload()};

  /* Replace pet image rendering with a server thumbnail first, legacy fallback second. */
  window.petImage=function(p){
    if(!p?.image)return '';
    const n=String(p.image).match(/\d+/)?.[0]||'';
    const primary=n?`/api/pet-thumbnail/${n}?v=22`:'';
    const fallback=n?`https://www.roblox.com/asset-thumbnail/image?assetId=${n}&width=420&height=420&format=png`:'';
    return `<div class="pet-image-wrap" data-asset="${n}"><img src="${primary}" alt="${esc(p.name)}" loading="eager" decoding="async" data-fallback="${fallback}" onload="this.closest('.pet-image-wrap')?.classList.add('loaded')" onerror="petImgError(this)"><span class="image-loading">LOADING</span><button class="img-retry" onclick="retryPetImage(event,this)" aria-label="Retry image">↻</button></div>`;
  };
  window.petImgError=function(img){
    const box=img.closest('.pet-image-wrap'); const fallback=img.dataset.fallback||'';
    if(fallback && img.dataset.tried!=='1'){img.dataset.tried='1';img.src=fallback;return;}
    box?.classList.add('broken');
  };
  window.retryPetImage=function(ev,btn){
    ev?.preventDefault();ev?.stopPropagation(); const box=btn.closest('.pet-image-wrap'); const id=box?.dataset.asset; const img=box?.querySelector('img');
    if(img&&id){img.dataset.tried='0';box.classList.remove('broken','loaded');img.src=`/api/pet-thumbnail/${id}?retry=${Date.now()}`;}
  };

  /* Eggs: informational only. There is NO hatch simulation/button. */
  window.eggCardV22=function(e){
    const known=Array.isArray(e.drops)&&e.drops.length>0;
    return `<article class="egg-card" onclick="openEgg('${esc(e.name).replace(/'/g,"\\'")}')"><div class="egg-pic ${e.type}"><div class="egg-visual"><span>🥚</span></div></div><div class="egg-info"><small>${e.type==='inactive'?tr('NOT ACTIVE'):e.type==='special'?tr('SPECIAL'):esc(e.world)}</small><h3>${esc(e.name)}</h3><span>${e.cost==='—'?'Special':fmt(e.cost)+' '+esc(e.currency)}</span><em>${known?knownCount(e.drops):tr('NOCH NICHT BEKANNT')}</em></div><b>›</b></article>`;
  };
  function knownCount(d){return `${d.length} ${lang()==='de'?'PETS':'PETS'}`}
  window.renderEggsV22=function(){
    const eggs=EGGS;
    $('#app').innerHTML=`<main class="page"><div class="page-head"><small>${tr('HATCHING')}</small><h1>${tr('EGGS')}</h1><p class="real-eggs-note">${tr('REAL GAME DATA')} • Diese Seite zeigt ausschließlich echte, synchronisierte In-Game-Angaben. Wenn Pet-Pools oder Chancen fehlen, steht hier ${tr('NOCH NICHT BEKANNT')}.</p></div><div class="real-only egg-real-banner"><b>● ${tr('REAL GAME DATA')}</b><span>Keine erfundenen Pets und keine erfundenen Chancen.</span></div><div class="toolbar"><input id="eggSearch" placeholder="SEARCH AN EGG..."><div class="chips"><button class="chip active" data-f="all">${tr('ALL')}</button><button class="chip" data-f="hatchable">${tr('HATCHABLE')}</button><button class="chip" data-f="special">${tr('SPECIAL')}</button><button class="chip" data-f="inactive">S1</button></div></div><div id="eggGrid" class="egg-grid">${eggs.map(window.eggCardV22).join('')}</div></main>`;
    const draw=()=>{const q=($('#eggSearch')?.value||'').toLowerCase(),f=$('.chip.active')?.dataset.f||'all';$('#eggGrid').innerHTML=eggs.filter(e=>(!q||e.name.toLowerCase().includes(q))&&(f==='all'||e.type===f)).map(window.eggCardV22).join('')};
    $('#eggSearch').oninput=draw; $$('.chip').forEach(b=>b.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');draw();uiClick()}); bindSounds();
  };
  window.openEggV22=function(name){
    const e=EGGS.find(x=>x.name===name); if(!e)return; const drops=Array.isArray(e.drops)?e.drops:[];
    const rows=drops.length?drops.map(d=>`<div class="drop-row"><span>${esc(d.name??d.pet??'Pet')}</span><strong>${esc(d.chance??d.weight??'—')}</strong></div>`).join(''):`<div class="drop-empty"><b>${tr('NOCH NICHT BEKANNT')}</b><span>Für dieses Ei liegen aktuell keine echten In-Game-Pet-Daten oder Chancen vor. Es werden bewusst keine Werte erfunden.</span></div>`;
    document.body.insertAdjacentHTML('beforeend',`<div id="modal" class="modal"><div class="modal-box egg-modal"><button class="modal-x" onclick="closeModal()">×</button><div class="hatch-stage ${esc(e.world||'void')}"><div class="hatch-egg">🥚</div></div><small>${e.type==='inactive'?tr('NOT ACTIVE'):e.type==='special'?tr('SPECIAL'):esc(e.world)}</small><h2>${esc(e.name)}</h2><p>${e.cost==='—'?'Special egg':fmt(e.cost)+' '+esc(e.currency)}</p><div class="egg-drop-panel"><div class="drop-head"><b>${tr('DROP LIST')}</b><span>${drops.length?tr('REAL GAME DATA'):tr('NOCH NICHT BEKANNT')}</span></div>${rows}</div><div class="real-data-foot">${tr('REAL GAME DATA')} • Nur synchronisierte In-Game-Daten werden angezeigt.</div><div class="modal-actions"><button class="btn" onclick="closeModal()">CLOSE</button></div></div></div>`);
    uiClick();
  };
  window.hatchV22=function(){toast(tr('NOCH NICHT BEKANNT'));};

  /* Settings with flag language selector. */
  window.openSettingsV22=function(){
    $('#settingsModal')?.remove(); const dark=localStorage.getItem('ph-theme')!=='light'; const vol=Number(localStorage.getItem('ph-volume')||25); const current=lang();
    const flags=Object.entries(LANGS).map(([code,x])=>`<button class="lang-option ${code===current?'active':''}" onclick="setLanguage('${code}')"><span>${x.flag}</span><b>${x.name}</b>${code===current?'<em>✓</em>':''}</button>`).join('');
    document.body.insertAdjacentHTML('beforeend',`<div id="settingsModal" class="modal"><div class="modal-box settings-modal"><button class="modal-x" onclick="closeSettings()">×</button><img class="settings-logo" src="/assets/janiboygames-logo.png" alt="JaniboyGames"><h2>${tr('SETTINGS')}</h2><div class="setting-row"><div><b>${tr('Design')}</b><span>${tr('Heller oder dunkler Modus')}</span></div><button class="toggle-setting" onclick="setTheme()">${dark?'🌙 DARK':'☀️ LIGHT'}</button></div><div class="setting-row"><div><b>${tr('Music')}</b><span>${tr('Hintergrundmusik ein/aus')}</span></div><button class="toggle-setting" onclick="toggleMusicSetting()">${audioOn?'🔊 AN':'🔇 AUS'}</button></div><label class="volume-control"><b>${tr('Music volume')} <span id="volumeLabel">${vol}%</span></b><input id="volumeRange" type="range" min="0" max="100" value="${vol}" oninput="setVolume(this.value)"></label><div class="language-setting"><div class="language-title"><b>🌐 ${tr('Language')}</b><span>Wähle eine Sprache mit Flagge – die Oberfläche wird automatisch angepasst.</span></div><div class="language-grid">${flags}</div></div><div class="settings-links"><a href="#account" onclick="closeSettings()">👤 Mein JaniboyGames-Konto</a><a href="#pets" onclick="closeSettings()">🐾 ${tr('3 Pets auswählen')}</a><button class="app-install-btn" onclick="installApp()">📲 ${tr('APP INSTALLIEREN')}</button></div></div></div>`);
    translateVisibleUI();
  };

  /* Keep all values data-driven: if a pet has no explicit real value, show unknown. */
  if(Array.isArray(window.PETS)) window.PETS.forEach(p=>{if(p.value===undefined)p.value=null;if(p.demand===undefined)p.demand=null});

  /* Rewire functions and rerender once after this patch loads. */
  window.renderEggs=window.renderEggsV22;
  window.openEgg=window.openEggV22;
  window.hatch=window.hatchV22;
  window.openSettings=window.openSettingsV22;
  try{ renderEggs=window.renderEggsV22; openEgg=window.openEggV22; hatch=window.hatchV22; openSettings=window.openSettingsV22; }catch(e){}
  const oldRender=window.render;
  if(typeof oldRender==='function'){
    window.render=function(){oldRender();setTimeout(translateVisibleUI,0)};
    try{render=window.render}catch(e){}
  }
  window.addEventListener('DOMContentLoaded',()=>setTimeout(translateVisibleUI,50));
  setTimeout(()=>{try{window.render?.()}catch(e){} translateVisibleUI()},0);
})();
