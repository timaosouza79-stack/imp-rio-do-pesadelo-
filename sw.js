const CACHE_NAME = 'pesadelos-v27';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './tabuleiro.json',
  './manifest.json'
];

// Instala e força atualização imediata
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Ativa e deleta TODOS os caches antigos para forçar atualização
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        if (k !== CACHE_NAME) {
          console.log('🗑️ Deletando cache antigo:', k);
          return caches.delete(k);
        }
      }))
    )
  );
  self.clients.claim();
});

// Estratégia: NETWORK FIRST para código (HTML, JS, CSS, JSON)
// Garante que qualquer atualização no Vercel seja baixada INSTANTANEAMENTE.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isCodeFile = url.pathname.endsWith('.html') || 
                     url.pathname.endsWith('.js') || 
                     url.pathname.endsWith('.css') || 
                     url.pathname.endsWith('.json') ||
                     url.pathname === '/' ||
                     url.pathname.endsWith('/');

  if (isCodeFile) {
    // Network First: Busca do servidor (Vercel) primeiro. Se estiver sem net, usa o cache.
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        return caches.match(event.request);
      })
    );
  } else {
    // Cache First para mídias grandes (imagens, áudios, vídeos)
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});
