const CACHE_NAME = "questoes-pontos-fracos-v7";
const ASSETS = [
  "./",
  "./index.html",
  "./app-tablet-offline.html",
  "./styles.css",
  "./app.js",
  "./questoes-exemplo.txt",
  "./bancos/sistemas_digitais_simulados_11_a_15_limpo.txt",
  "./bancos/sistemas_digitais_100_questoes_novas_extremo.txt",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
