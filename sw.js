// Pour publier une mise à jour : change le numéro de version ci-dessous.
var C="carnet-v1",FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(C).then(function(c){return c.addAll(FILES)}));
  self.skipWaiting();
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(k){
    return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}));
  }));
  self.clients.claim();
});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(function(hit){
    var net=fetch(e.request).then(function(res){
      if(res&&res.ok){var copy=res.clone();caches.open(C).then(function(c){c.put(e.request,copy)})}
      return res;
    }).catch(function(){return hit||caches.match("index.html")});
    return hit||net;
  }));
});
