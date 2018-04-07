// ServiceWorker

var CACHE_NAME = 'RedditDev';
var urlsToCache = [
	'/',
  '/index.html'
];
self.addEventListener('install', function(event) {
  // install files needed offline
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
		console.log(urlsToCache)
        return cache.addAll(urlsToCache);
      })
	  .catch(function(err) {
		  console.log(err);
	  })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // check all the caches in the browser and find
    // out whether our request is in any of them
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          // if we are here, that means there's a match
          //return the response stored in browser
          return response;
        }
        // no match in cache, use the network instead
        return fetch(event.request);
      }
    )
  );
});