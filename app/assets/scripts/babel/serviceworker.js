'use strict';

// ServiceWorker

var myCache = 'myCache';

self.addEventListener('install', function () {
    event.waitUntil(caches.open(myCache).then(function (cache) {
        return cache.addAll(['/index.html', '/temp/assets/styles/styles.css']);
    }));
});

self.addEventListener('fetch', function (event) {
    return event.respondWith(caches.open(myCache).then(function (cache) {
        return cache.match(event.request);
    }));
});