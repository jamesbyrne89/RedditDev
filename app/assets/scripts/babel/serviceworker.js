'use strict';

// ServiceWorker

var myCache = 'myCache';

self.addEventListener('install', function () {
	event.waitUntil(caches.open(myCache).then(function (cache) {
		return cache.addAll(['/index.html', '/temp/assets/styles/styles.css']);
	}));
});

// self.addEventListener('fetch', event => event.respondWith(caches.open(myCache)
// .then(cache => cache.match(event.request))));

window.addEventListener('load', function () {
	function updateOnlineStatus(event) {
		console.log(event);
		if (navigator.online) {
			console.log('Currently online');
		} else {
			console.log('currently offline');
		}
	}

	window.addEventListener('online', updateOnlineStatus);
	window.addEventListener('offline', updateOnlineStatus);
});