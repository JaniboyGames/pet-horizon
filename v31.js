(function(){
  'use strict';
  const VOLUME_KEY='ph-volume';
  const MIGRATION_KEY='ph-v31-volume-default';
  const STATE_KEY='ph-music-state-v31';

  // V31: set the new default to 10% once. Manual volume changes afterwards are preserved.
  try{
    if(!localStorage.getItem(MIGRATION_KEY)){
      localStorage.setItem(VOLUME_KEY,'10');
      localStorage.setItem(MIGRATION_KEY,'1');
    }
    const n=Number(localStorage.getItem(VOLUME_KEY));
    if(!Number.isFinite(n)||n<0||n>100) localStorage.setItem(VOLUME_KEY,'10');
  }catch{}

  function volume(){
    const n=Number(localStorage.getItem(VOLUME_KEY)||10);
    return Math.max(0,Math.min(100,Number.isFinite(n)?n:10))/100;
  }
  function audio(){return window.__phMusic||document.getElementById('phMusic');}

  function saveMusicState(){
    const a=audio();
    if(!a)return;
    try{
      sessionStorage.setItem(STATE_KEY,JSON.stringify({
        src:a.src||'', currentTime:Number.isFinite(a.currentTime)?a.currentTime:0,
        track:(typeof currentTrack==='number'?currentTrack:0), wasPlaying:!a.paused
      }));
    }catch{}
  }
  function readMusicState(){
    try{return JSON.parse(sessionStorage.getItem(STATE_KEY)||'null')}catch{return null}
  }

  function restoreMusic(){
    const a=audio();
    if(!a)return false;
    a.volume=volume();
    const state=readMusicState();
    if(!state)return false;
    if(state.src && (!a.src || a.src!==state.src)) a.src=state.src;
    if(Number.isFinite(state.currentTime)&&state.currentTime>0){
      const set=()=>{try{if(Math.abs((a.currentTime||0)-state.currentTime)>0.5)a.currentTime=state.currentTime}catch{}};
      if(a.readyState>=1)set(); else a.addEventListener('loadedmetadata',set,{once:true});
    }
    if(state.track!=null && typeof currentTrack==='number') currentTrack=Number(state.track)||0;
    return !!state.wasPlaying;
  }

  function keepMusicAlive(){
    const a=audio();
    if(!a)return;
    a.volume=volume();
    // A normal button click must never pause the music. If another script/browser event
    // pauses it while music is enabled, resume it without resetting the current position.
    if(localStorage.getItem('ph-sound')==='off')return;
    if(a.paused && !document.hidden){
      const p=a.play();
      if(p?.catch)p.catch(()=>{});
    }
  }

  // Persist position before page reloads (language changes/account refresh/etc.).
  window.addEventListener('pagehide',saveMusicState,{capture:true});
  window.addEventListener('beforeunload',saveMusicState,{capture:true});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) saveMusicState();
    else setTimeout(()=>{restoreMusic();keepMusicAlive()},100);
  });

  // Capture the first user interaction. This also satisfies browser autoplay policies.
  window.addEventListener('pointerdown',()=>{
    const a=audio();
    if(!a)return;
    const wasPlaying=restoreMusic();
    if(localStorage.getItem('ph-sound')!=='off'){
      const p=a.play();
      if(p?.catch)p.catch(()=>{});
    }
    if(wasPlaying) setTimeout(keepMusicAlive,80);
  },{passive:true,capture:true});

  // Keep the current player reference and volume synchronized with the settings UI.
  const oldSetVolume=window.setVolume;
  window.setVolume=function(v){
    if(typeof oldSetVolume==='function')oldSetVolume(v);
    const n=Math.max(0,Math.min(100,Number(v)||0));
    try{localStorage.setItem(VOLUME_KEY,String(n))}catch{}
    const a=audio();if(a)a.volume=n/100;
  };

  // Fix the common case where a navigation/render leaves the audio element paused.
  setTimeout(()=>{restoreMusic();keepMusicAlive()},120);
  setInterval(()=>{restoreMusic();keepMusicAlive()},2000);

  // Small bug fix: selected-pet buttons must not append an accidental trailing space to names.
  if(typeof window.togglePetSelection==='function'){
    const original=window.togglePetSelection;
    window.togglePetSelection=function(name,ev){return original(String(name).trim(),ev)};
  }
})();
