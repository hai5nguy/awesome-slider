/* eslint-disable */

this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('AwesomeSlider').then(function(cache) {
        return cache.addAll([
          'index.html',
          'bundle.js'
        ]);
      })
    );
  });
  
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
}
