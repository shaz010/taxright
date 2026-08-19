// TaxRight 2024 — Service Worker
// Strategy: Cache-first for app shell, network-first for CDN assets

const CACHE = 'taxright-v34';
const APP_SHELL = [
  '/taxright/',
  '/taxright/index.html',
  '/taxright/manifest.json',
  '/taxright/apple-touch-icon.png',
  '/taxright/icons/icon-512.png',
];

// ── Install: pre-cache the app shell ──────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// ── Activate: clean up old caches ─────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch: serve from cache, fall back to network ─────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // CDN resources (Chart.js, Google Fonts) — network first, cache fallback
  if (url.hostname.includes('cdnjs') || url.hostname.includes('google')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // App shell — cache first, network fallback
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(event.request, clone));
        return res;
      });
    })
  );
});
