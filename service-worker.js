const CACHE_NAME = "order-app-cache-v1";
const urlsToCache = [
  "/pos-system/",
  "/pos-system/index1.html",
  "/pos-system/manifest.json",
  "/pos-system/icon.png"
];


// 安裝時快取檔案
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// 攔截請求，優先回傳快取
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
