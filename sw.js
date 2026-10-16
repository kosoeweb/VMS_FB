self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Offline အလုပ်လုပ်နိုင်ရန်နှင့် PWA Install Prompt ပေါ်လာစေရန် ရည်ရွယ်သည်
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});