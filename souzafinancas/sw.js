// ============================================================
// sw.js — Service Worker · Souza Finanças
// ============================================================

const CACHE_NAME = 'souzafinancas-v2';

const ARQUIVOS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/data.js',
  '/js/storage.js',
  '/js/chart.js',
  '/js/app.js',
  '/manifest.json',
];

// Instalar: cachear tudo
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARQUIVOS))
  );
  self.skipWaiting();
});

// Ativar: apagar caches antigas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
