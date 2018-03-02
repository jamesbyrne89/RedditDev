// ServiceWorker

var myCache = 'myCache'

self.addEventListener('install', () => {
    event.waitUntil(caches.open(myCache)
    .then((cache) => cache.addAll([ '/index.html', '/temp/assets/styles/styles.css' ])))
})

// self.addEventListener('fetch', event => event.respondWith(caches.open(myCache)
// .then(cache => cache.match(event.request))));