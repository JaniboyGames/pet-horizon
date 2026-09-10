(function(){
  'use strict';
  const $=s=>document.querySelector(s);
  const esc28=s=>typeof esc==='function'?esc(s):String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  // One source of truth for the theme. This fixes the old mismatch between html[data-theme]
  // and body.light-theme, which was responsible for white leftovers after switching.
  function applyTheme28(theme){
    theme=theme==='light'?'light':'dark';
    document.documentElement.setAttribute('data-theme',theme);
    document.documentElement.style.colorScheme=theme;
    document.body.classList.toggle('light-theme',theme==='light');
    localStorage.setItem('ph-theme',theme);
    document.querySelectorAll('[data-theme-dependent]').forEach(el=>el.dataset.activeTheme=theme);
    window.dispatchEvent(new CustomEvent('ph-theme-change',{detail:theme}));
  }
  window.setTheme=function(){
    const current=document.documentElement.getAttribute('data-theme')==='light'?'light':'dark';
    applyTheme28(current==='light'?'dark':'light');
    if(typeof openSettings==='function')openSettings();
  };
  applyTheme28(localStorage.getItem('ph-theme')==='light'?'light':'dark');

  // Monthly Huge selection + real community votes.
  let monthlyState=null;
  function petByName28(name){return Array.isArray(window.PETS)?window.PETS.find(p=>String(p.name).toLowerCase()===String(name).toLowerCase()):null}
  function renderMonthly28(data){
    monthlyState=data;
    // The monthly feature is deliberately Huge-only. Unknown/non-Huge entries are never shown.
    const candidates=(data.candidates||[])
      .map(x=>({...x,pet:petByName28(x.name)}))
      .filter(x=>x.pet && x.pet.huge)
      .slice(0,4);
    if(!candidates.length){
      $('#monthlyFeatureV28').innerHTML='<div class="monthly-empty-v29">Keine Huge Pets für die Monatswahl verfügbar.</div>';
      return;
    }
    const leader=candidates.reduce((a,b)=>Number(b.votes||0)>Number(a.votes||0)?b:a,candidates[0]);
    const leaderPct=Number(leader.percent||0);
    const totalVotes=Number(data.totalVotes||0);
    const monthLabel=String(data.key||'').replace('-', ' / ');
    const winner=`<div class="monthly-v29-hero">
      <div class="monthly-v29-art"><div class="monthly-v29-glow"></div><div class="monthly-v29-ring"></div>${petImage(leader.pet)}<div class="monthly-v29-badge">⭐ ${tr28('AKTUELLER FAVORIT')}</div></div>
      <div class="monthly-v29-copy">
        <div class="monthly-v29-top"><span>${tr28('PET DES MONATS')}</span><b>${esc28(monthLabel)}</b></div>
        <h3>${esc28(leader.pet.name)}</h3>
        <div class="monthly-v29-tags"><span>HUGE</span><span>${esc28(leader.pet.rarity||'HUGE')}</span><span>${esc28(leader.pet.movement||'')}</span></div>
        <p>${tr28('Der aktuelle Favorit der Community. Die vier Huge Pets werden jeden Monat neu ausgewählt und die Rangfolge wird nur durch echte Stimmen bestimmt.')}</p>
        <div class="monthly-v29-score"><strong>${leaderPct}%</strong><span>${tr28('DER AKTUELLEN STIMMEN')}</span></div>
        <div class="monthly-v29-progress"><i style="width:${Math.max(0,Math.min(100,leaderPct))}%"></i></div>
        <a class="btn primary" href="#pets">PET IM INDEX ANSEHEN <span>→</span></a>
      </div>
    </div>`;
    const cards=candidates.map((x,index)=>{
      const pct=Number(x.percent||0),votes=Number(x.votes||0),active=x.name===leader.name;
      return `<article class="monthly-v29-card${active?' is-leader':''}">
        <div class="monthly-v29-card-art">${petImage(x.pet)}<span>HUGE</span><em>#${index+1}</em></div>
        <div class="monthly-v29-card-body">
          <small>${tr28('HUGE PET')}</small><h4>${esc28(x.pet.name)}</h4>
          <div class="monthly-v29-vote-row"><strong>${pct}%</strong><span>${votes} ${tr28(votes===1?'Stimme':'Stimmen')}</span></div>
          <div class="monthly-v29-bar"><i style="width:${Math.max(0,Math.min(100,pct))}%"></i></div>
          <button class="btn primary monthly-vote-btn" data-name="${esc28(x.name)}">${tr28('ABSTIMMEN')} <span>→</span></button>
        </div>
      </article>`;
    }).join('');
    $('#monthlyFeatureV28').innerHTML=`<div class="monthly-v29-layout">${winner}
      <div class="monthly-v29-vote-head"><div><small>${tr28('COMMUNITY VOTE')}</small><h3>${tr28('WÄHLE DEIN HUGE PET')}</h3></div><strong>${totalVotes} ${tr28('STIMMEN GESAMT')}</strong></div>
      <div class="monthly-v29-grid">${cards}</div>
      <div class="monthly-v29-foot"><span>🔒 ${tr28('Die Prozentwerte werden nur aus echten abgegebenen Stimmen berechnet. Ohne Stimmen steht jeder Kandidat bei 0%.')}</span><b>4 HUGE PETS • ${esc28(monthLabel)}</b></div>
    </div>`;
    document.querySelectorAll('.monthly-vote-btn').forEach(btn=>btn.addEventListener('click',()=>voteMonthly28(btn.dataset.name)));
    if(typeof bindSounds==='function')bindSounds();
  }

  async function loadMonthly28(){
    const box=$('#monthlyFeatureV28'); if(!box)return;
    try{const r=await fetch('/api/monthly?_='+Date.now(),{cache:'no-store'});const d=await r.json();if(!r.ok||!d.success)throw 0;renderMonthly28(d)}
    catch{box.innerHTML='<div class="monthly-empty-v28">Die Monatswahl konnte gerade nicht geladen werden.</div>'}
  }
  async function voteMonthly28(name){
    const btns=[...document.querySelectorAll('.monthly-vote-btn')];btns.forEach(b=>b.disabled=true);
    try{const r=await fetch('/api/monthly-vote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name})});const d=await r.json();toast(d.message||'');if(d.success)renderMonthly28(d);else if(d.candidates)renderMonthly28(d)}catch{toast('Abstimmung konnte nicht gespeichert werden.')}finally{btns.forEach(b=>b.disabled=false)}
  }
  window.loadMonthly28=loadMonthly28;

  // V29 music lock: clicks/navigation must never intentionally stop the background music.
  let musicWatchBound=false;
  let musicWanted=localStorage.getItem('ph-sound')!=='off';
  function musicAllowed(){return localStorage.getItem('ph-sound')!=='off' && musicWanted}
  function musicVolume(){return Math.max(0,Math.min(100,Number(localStorage.getItem('ph-volume')||15)))/100}
  function repairMusic29(){
    const a=window.__phMusic || document.getElementById('phMusic');
    if(!a || !musicAllowed() || document.hidden)return;
    a.volume=musicVolume();
    if(!a.src){
      const urls=window.ROBLOX_MUSIC_URLS || (typeof ROBLOX_MUSIC_URLS!=='undefined'?ROBLOX_MUSIC_URLS:[]);
      if(urls.length){
        const idx=typeof currentTrack==='number'?currentTrack:0;
        a.src=urls[idx%urls.length];
        a.preload='auto';
      }
    }
    if(a.paused){
      const resumeTime=Number(a.dataset.phResumeTime||0);
      if(resumeTime>0 && isFinite(resumeTime) && Math.abs((a.currentTime||0)-resumeTime)>1){try{a.currentTime=resumeTime}catch(e){}}
      const playPromise=a.play();
      if(playPromise?.catch)playPromise.catch(()=>{});
    }
  }
  function bindMusic29(){
    const a=document.getElementById('phMusic');
    if(!a){setTimeout(bindMusic29,250);return}
    if(window.__phMusic!==a){
      window.__phMusic=a;
      a.preload='auto';
      a.volume=musicVolume();
    }
    if(musicWatchBound)return;
    musicWatchBound=true;
    const remember=()=>{if(!a.paused)a.dataset.phResumeTime=String(a.currentTime||0)};
    const recover=()=>{remember();if(musicAllowed()&&!document.hidden)setTimeout(repairMusic29,180)};
    ['stalled','waiting','error','emptied','abort','suspend'].forEach(ev=>a.addEventListener(ev,recover));
    a.addEventListener('pause',()=>{
      remember();
      if(musicAllowed()&&!document.hidden)setTimeout(repairMusic29,80);
    });
    a.addEventListener('play',()=>{a.dataset.phResumeTime=String(a.currentTime||0)});
    a.addEventListener('timeupdate',remember);
    a.addEventListener('loadedmetadata',()=>{a.volume=musicVolume()});
    a.addEventListener('ended',()=>setTimeout(repairMusic29,100));
  }
  window.addEventListener('pointerdown',()=>{musicWanted=musicAllowed();bindMusic29();repairMusic29()},{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeout(repairMusic29,120)});
  window.addEventListener('ph-theme-change',()=>setTimeout(bindMusic29,30));
  const musicKeeper=setInterval(()=>{bindMusic29();repairMusic29()},1500);
  // Always use 15% as the new default. Existing user-selected values are preserved.
  if(!localStorage.getItem('ph-v29-volume-default')){localStorage.setItem('ph-volume','15');localStorage.setItem('ph-v29-volume-default','1')}
  if(Number(localStorage.getItem('ph-volume'))>100 || Number.isNaN(Number(localStorage.getItem('ph-volume'))))localStorage.setItem('ph-volume','15');

  // Strong translation pass for V28-specific UI. Existing V24 translations remain the base layer.
  const V28T={
    'PET DES MONATS':['PET DES MONATS','PET OF THE MONTH','MASCOTA DEL MES','PET DU MOIS','PET DEL MESE','PET MIESIĄCA'],
    'WÄHLE DEIN HUGE PET':['WÄHLE DEIN HUGE PET','CHOOSE YOUR HUGE PET','ELIGE TU HUGE PET','CHOISIS TON HUGE PET','SCEGLI IL TUO HUGE PET','WYBIERZ SWÓJ HUGE PET'],
    'AKTUELLER FAVORIT':['AKTUELLER FAVORIT','CURRENT FAVORITE','FAVORITO ACTUAL','FAVORI ACTUEL','PREFERITO ATTUALE','AKTUALNY FAWORYT'],
    'COMMUNITY VOTE':['COMMUNITY VOTE','COMMUNITY VOTE','VOTACIÓN DE LA COMUNIDAD','VOTE DE LA COMMUNAUTÉ','VOTO DELLA COMMUNITY','GŁOSOWANIE SPOŁECZNOŚCI'],
    'ABSTIMMEN':['ABSTIMMEN','VOTE','VOTAR','VOTER','VOTA','GŁOSUJ'],
    'STIMMEN GESAMT':['STIMMEN GESAMT','TOTAL VOTES','VOTOS TOTALES','VOTES TOTAUX','VOTI TOTALI','ŁĄCZNIE GŁOSÓW'],
    'HUGE PET':['HUGE PET','HUGE PET','HUGE PET','HUGE PET','HUGE PET','HUGE PET'],
    'DER AKTUELLEN STIMMEN':['DER AKTUELLEN STIMMEN','OF CURRENT VOTES','DE LOS VOTOS ACTUALES','DES VOTES ACTUELS','DEI VOTI ATTUALI','AKTUALNYCH GŁOSÓW'],
    'MONTHLY HUGE VOTE':['MONTHLY HUGE VOTE','MONTHLY HUGE VOTE','VOTACIÓN MENSUAL DE HUGE','VOTE MENSUEL DES HUGE','VOTO MENSILE DEGLI HUGE','MIESIĘCZNE GŁOSOWANIE HUGE'],
    'Jeden Monat treten vier echte Huge Pets zufällig ausgewählt gegeneinander an. Die Prozentwerte stammen aus echten Community-Stimmen.':['Jeden Monat treten vier echte Huge Pets zufällig ausgewählt gegeneinander an. Die Prozentwerte stammen aus echten Community-Stimmen.','Every month, four real Huge Pets are randomly selected. Percentages come from real community votes.','Cada mes se seleccionan cuatro Huge Pets reales al azar. Los porcentajes provienen de votos reales de la comunidad.','Chaque mois, quatre Huge Pets réels sont sélectionnés au hasard. Les pourcentages proviennent de vrais votes de la communauté.','Ogni mese vengono selezionati casualmente quattro Huge Pet reali. Le percentuali provengono dai voti reali della community.','Co miesiąc losowane są cztery prawdziwe Huge Pety. Procenty pochodzą z prawdziwych głosów społeczności.'],
    'Der aktuelle Favorit aus der monatlichen Huge-Wahl. Die Auswahl wird jeden Monat neu und zufällig zusammengestellt.':['Der aktuelle Favorit aus der monatlichen Huge-Wahl. Die Auswahl wird jeden Monat neu und zufällig zusammengestellt.','The current favorite in the monthly Huge vote. The selection is randomized again every month.','El favorito actual de la votación mensual de Huge. La selección se vuelve a aleatorizar cada mes.','Le favori actuel du vote mensuel des Huge. La sélection est renouvelée aléatoirement chaque mois.','Il preferito attuale della votazione mensile degli Huge. La selezione viene randomizzata ogni mese.','Aktualny faworyt miesięcznego głosowania Huge. Wybór jest losowany na nowo co miesiąc.'],
    'DER AKTUELLEN STIMMEN':['DER AKTUELLEN STIMMEN','OF CURRENT VOTES','DE LOS VOTOS ACTUALES','DES VOTES ACTUELS','DEI VOTI ATTUALI','AKTUALNYCH GŁOSÓW'],
    'Die Prozentwerte werden nur aus echten abgegebenen Stimmen berechnet. Ohne Stimmen steht jeder Kandidat bei 0%.':['Die Prozentwerte werden nur aus echten abgegebenen Stimmen berechnet. Ohne Stimmen steht jeder Kandidat bei 0%.','Percentages are calculated only from real submitted votes. With no votes, every candidate is at 0%.','Los porcentajes se calculan solo con votos reales. Sin votos, cada candidato está al 0%.','Les pourcentages sont calculés uniquement à partir de vrais votes. Sans vote, chaque candidat est à 0 %.','Le percentuali sono calcolate solo dai voti reali. Senza voti, ogni candidato è allo 0%.','Procenty są obliczane wyłącznie na podstawie prawdziwych głosów. Bez głosów każdy kandydat ma 0%.'],
    'Stimme':['Stimme','Vote','Voto','Vote','Voto','Głos'],
    'Stimmen':['Stimmen','Votes','Votos','Votes','Voti','Głosy']
  };
  function tr28(s){const l=['de','en','es','fr','it','pl'].indexOf(localStorage.getItem('ph-lang')||'de');const row=V28T[s];return row?(row[l<0?0:l]||row[0]):(window.trV24?window.trV24(s):s)}
  window.trV28=tr28;

  // Re-render the monthly section whenever the home route is rendered.
  const oldRender=window.render;
  if(typeof oldRender==='function'){
    window.render=function(){oldRender();if((location.hash.replace('#','').split('/')[0]||'home')==='home')setTimeout(loadMonthly28,0)};
    try{render=window.render}catch(e){}
  }
  // Fix the page immediately if the current route is home.
  if((location.hash.replace('#','').split('/')[0]||'home')==='home')setTimeout(loadMonthly28,50);
})();
