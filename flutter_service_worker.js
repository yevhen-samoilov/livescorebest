'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0885b559ffa16331fcdce1f02a947f67",
"splash/img/light-background.png": "746f308d12814c83bba3b2b08af71ff6",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "78accff22beb7ef068999d99adff10b6",
"index.html": "84f87775c7ba3690c5d8cf5e8ea4eeb1",
"/": "84f87775c7ba3690c5d8cf5e8ea4eeb1",
"main.dart.js": "104118920e0db805ccefc70758744dc3",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "e7427c03d08b06024519127c79426f8d",
"icons/Icon-192.png": "62186084b47ff41379ed1c5fdd3904fb",
"icons/Icon-maskable-192.png": "62186084b47ff41379ed1c5fdd3904fb",
"icons/Icon-maskable-512.png": "1914e76b2ad3d46dda1f93cbafe40a17",
"icons/Icon-512.png": "1914e76b2ad3d46dda1f93cbafe40a17",
"manifest.json": "95fa4677823688a855aa939c6386c21b",
"assets/AssetManifest.json": "598bb774af3820c02abdd088ad550c80",
"assets/NOTICES": "d6adedc118a68d7acbc690a41f4fa9e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "196c74553a049f07998cb05114a28e51",
"assets/lib/assets/images/bg_footer_welcome.svg": "ff2b8ce649c45b9c472e968f0dc5fa83",
"assets/lib/assets/images/ok.png": "37d1f9ab9fad39983b58aae986b58e0a",
"assets/lib/assets/images/logo_crypto_bitcoin.png": "47423caf6bc7a3b30116fd0cc8698579",
"assets/lib/assets/images/logo_crypto_tron.png": "96627e01c0213a8cb03c511c48ae83cf",
"assets/lib/assets/images/graffic.png": "184b767c6224a4fbba478eaa7c7122dd",
"assets/lib/assets/images/logo_crypto_payeer.png": "97d1ea9b53244ee3505c947391899bd2",
"assets/lib/assets/images/hello.png": "746f308d12814c83bba3b2b08af71ff6",
"assets/lib/assets/images/logo_crypto_usdt.png": "f0590b3430d1d419f6746c8c60c7df38",
"assets/lib/assets/images/logo_crypto_decimal.png": "12c24697cb074c05c7b4f0f5242080d6",
"assets/lib/assets/images/512x512.png": "4a5cce8a3f841326454977cb544851ee",
"assets/lib/assets/images/ref.png": "0fa4db3fffc42367f194ad37eabaf76f",
"assets/lib/assets/images/graffic.svg": "02eb83672b3b8b1fd7323a3095d4964e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/hand-left.svg": "471bbeee2b35182ba925f2103c7b7925",
"assets/assets/images/ball.svg": "e4bd2d3539a22942d9f587d652111a67",
"assets/assets/images/hand-right.svg": "ae1410dbbe4f392fb5ea7e30bd9c6e56",
"assets/assets/images/bg.svg": "fb16be57ff064d01ff96c284356fa565",
"assets/assets/images/logo.jpg": "f193f5b5abee62ad8cb94713d5014ad5",
"assets/assets/images/logo.png": "fbcf1eebe21e9b3b2077708548c939fa",
"assets/assets/images/cup.svg": "e5903baaafc73bd30251b1bbc9fa3fb2",
"assets/assets/images/logo.svg": "54be8c4e75f2de27d813573f2e6e6a00",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
