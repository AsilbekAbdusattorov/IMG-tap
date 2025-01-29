const CACHE_NAME = 'image-gallery-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img0.jpg',
  '/img1-a.jpg',
  '/img1-b.jpg',
  '/img1.jpg',
  '/tap1.jpg',
  '/tap2-1.jpg',
  '/tap2-2.jpg',
  '/tap2-3.jpg',
  '/tap2-3a.jpg',
  '/tap2-3b.jpg',
  '/tap2-4.jpg',
  '/tap2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets');
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
