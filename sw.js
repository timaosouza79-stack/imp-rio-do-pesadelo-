const CACHE_NAME = 'pesadelos-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/fundo_castelo.jpg',
  './assets/caixa_pandora.png',
  './assets/pandora.png',
  './assets/chucky.jpg',
  './assets/chuckypeao.png',
  './assets/jasonpeao.png',
  './assets/freddypeao.png',
  './assets/annabelle.png',
  './assets/annabellepeao.png',
  './assets/jason_icon.png',
  './assets/freddy_icon.png',
  './assets/annabelle_icon.png',
];

// Instala e faz cache dos assets principais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Estratégia: Cache First → Network Fallback
self.addEventListener('fetch', event => {
  // Ignora requisições não-GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Só cacheia respostas válidas
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline fallback para páginas HTML
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
