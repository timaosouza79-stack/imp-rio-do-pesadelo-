const CACHE_NAME = 'pesadelos-v97';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './tabuleiro.json',
  './manifest.json',
  './assets/audiodados.mp3',
  './assets/som comprar.mp3',
  './assets/somaluguel.mp3',
  './assets/som_pandora.wav',
  './assets/somprisao.mp3',
  './assets/somportal.mp3'
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
    // Excluir vídeos da interceptação do Service Worker para permitir HTTP Range Requests (206 Partial Content) nativos do navegador
    const lowerPath = url.pathname.toLowerCase();
    if (lowerPath.endsWith('.mp4') || lowerPath.endsWith('.mov') || lowerPath.endsWith('.webm') || event.request.headers.has('range')) {
      return; // Bypasses Service Worker, allowing native browser streaming
    }

    // Cache First para mídias grandes (imagens, áudios)
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

