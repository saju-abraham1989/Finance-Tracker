
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('finance-cache').then(function(cache) {
            return cache.addAll([
                './updated_finance_tracker_pwa.html',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
