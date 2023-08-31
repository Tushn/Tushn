var staticCacheName = "pwa";
 
self.addEventListener("install", function (e) {
	console.log("eita")
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
		console.log("euta")
      return cache.addAll(["/"]);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});