/* V25: complete, instant Light/Dark theme system */
(function(){
  const KEY='ph-theme';
  const LIGHT='light';
  const DARK='dark';
  const getTheme=()=>localStorage.getItem(KEY)==='light'?LIGHT:DARK;

  function syncTheme(theme){
    const t=theme===LIGHT?LIGHT:DARK;
    document.documentElement.setAttribute('data-theme',t);
    document.documentElement.classList.toggle('theme-light',t===LIGHT);
    document.documentElement.classList.toggle('theme-dark',t===DARK);
    document.body?.classList.toggle('light-theme',t===LIGHT);
    document.body?.classList.toggle('dark-theme',t===DARK);
    document.documentElement.style.colorScheme=t;
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content',t===LIGHT?'#eef7ff':'#07111c');
  }

  function applyTheme(){syncTheme(getTheme());}

  window.setTheme=function(){
    const next=getTheme()===LIGHT?DARK:LIGHT;
    localStorage.setItem(KEY,next);
    syncTheme(next);
    if(typeof window.openSettings==='function') window.openSettings();
  };

  // Apply before/after the first render so dynamically created pages inherit the same theme.
  applyTheme();
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyTheme,{once:true});
  window.addEventListener('storage',e=>{if(e.key===KEY)syncTheme(e.newValue===LIGHT?LIGHT:DARK)});
})();
