self.addEventListener('fetch', function(event) {
    if (/puppysad.jpg$/.test(event.request.url)) {
        event.respondWith(fetch(event.request.url.substring(0, event.request.url.length - 12) + 'puppyhappy.jpg'));
    }
});

