const CACHE='pet-horizon-jbg-v31';
const CORE=['/','/index.html','/style.css','/app.js','/v22.js','/v24.js','/v25.js','/v26.js','/v28.js','/v31.js','/manifest.webmanifest','/assets/janiboygames-logo.png','/assets/header-pet.png','/assets/news-event.png','/videos.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request))); });
