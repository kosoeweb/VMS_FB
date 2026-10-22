// Service Worker - Simple Pass-through (Firestore requests များကို မပိတ်ဆို့ရန်)
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Firebase / Firestore API ခေါ်ဆိုမှုများကို Service Worker က လုံးဝမထိန်းချုပ်ဘဲ တိုက်ရိုက်သွားခွင့်ပြုရန်
  if (e.request.url.includes('firestore.googleapis.com') || e.request.url.includes('firebase')) {
    return;
  }
  
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
