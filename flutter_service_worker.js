'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f99ccdbb42660a115afe9073bc1d135e",
"livescorebest/version.json": "f99ccdbb42660a115afe9073bc1d135e",
"livescorebest/index.html": "aac6433e3175515e4be17730a7475381",
"/": "7f4f9c6af0ef637ccec343ba351f6648",
"livescorebest/LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"livescorebest/CNAME": "c78b7fd04e3e5a8a14683e761571e0d9",
"livescorebest/main.dart.js": "c9fe950e7fa4aa9b1517a8cf4fc68c09",
"livescorebest/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"livescorebest/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"livescorebest/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"livescorebest/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"livescorebest/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"livescorebest/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"livescorebest/manifest.json": "463aac07fbe2bcdea41dd0f7bf6126eb",
"livescorebest/.git/config": "7543e81e1c1d73421a611bc29ce4e277",
"livescorebest/.git/objects/51/1f244caee5c22b4a664aa20a1978cc9bf2c046": "1143736449b217c00872f448d5115260",
"livescorebest/.git/objects/fd/5a305201dc152656a50648554cb21486190ed7": "840c17875326ca4fffac33b9c5d8aff4",
"livescorebest/.git/objects/pack/pack-063dd11270603e354af707f787d4f4daf3fad0ad.pack": "56a39078960c5528d7a6e58af2e8ae87",
"livescorebest/.git/objects/pack/pack-063dd11270603e354af707f787d4f4daf3fad0ad.idx": "59db747c9313dff8d66485108392a629",
"livescorebest/.git/objects/17/0b302f95f0f8c81a32f4d8ce249b1ee2c47d67": "9f0384d888a67e5c8ae30582b38dca44",
"livescorebest/.git/objects/3a/b4f24d995a538c8f8b5de2e8f5be73e62c3843": "fb6c6f921b6fcab1a9f0ee682c84f94b",
"livescorebest/.git/objects/71/0fa6fd8b3c7026d05f3141d70156a6e7c7e7bd": "1d9f7e66eae8d7b8543a19499c7ece6e",
"livescorebest/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"livescorebest/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"livescorebest/.git/logs/HEAD": "ddeb29df11a9fb183acdb89e7a22d297",
"livescorebest/.git/logs/refs/heads/main": "ddeb29df11a9fb183acdb89e7a22d297",
"livescorebest/.git/logs/refs/remotes/origin/HEAD": "93ca2d7ce681f82c7ccb1b1d7fddf2c1",
"livescorebest/.git/logs/refs/remotes/origin/main": "91c67f054503c0d10d3b276857d2efcc",
"livescorebest/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"livescorebest/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"livescorebest/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"livescorebest/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"livescorebest/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"livescorebest/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"livescorebest/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"livescorebest/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"livescorebest/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"livescorebest/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"livescorebest/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"livescorebest/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"livescorebest/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"livescorebest/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"livescorebest/.git/refs/heads/main": "9e3ca1d717532cf1c677591d4ffcbe4a",
"livescorebest/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"livescorebest/.git/refs/remotes/origin/main": "9e3ca1d717532cf1c677591d4ffcbe4a",
"livescorebest/.git/index": "d3baf85e4dbdb0e0b9e9c790ba1e8706",
"livescorebest/.git/packed-refs": "76854f340cca678b34f8b75aaa30b9a7",
"livescorebest/.git/COMMIT_EDITMSG": "6d7fce9fee471194aa8b5b6e47267f03",
"livescorebest/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"livescorebest/assets/AssetManifest.json": "11793464a20debafe1cdab5b46078eb5",
"livescorebest/assets/NOTICES": "f6bf02409ab7119e92f5d2377b8a1e5f",
"livescorebest/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"livescorebest/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"livescorebest/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"livescorebest/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"livescorebest/assets/shaders/ink_sparkle.frag": "196c74553a049f07998cb05114a28e51",
"livescorebest/assets/lib/assets/images/premium-black.png": "842f9be1b838f478932245f3457c939c",
"livescorebest/assets/lib/assets/images/banner.png": "28695f9038c62b7457d23182c6142d64",
"livescorebest/assets/lib/assets/images/banner2.jpeg": "c34c07307968d7c5a76d465bc1535e83",
"livescorebest/assets/lib/assets/images/premium-white.png": "2f083b4e272d92452ff92b4d159ec983",
"livescorebest/assets/lib/assets/images/1024x500.png": "e559272620d48b36707666677cb86407",
"livescorebest/assets/lib/assets/images/premium.png": "2449f8c0df6b042238bb188151c9389f",
"livescorebest/assets/lib/assets/images/premium.jpg": "59711918d6774a76e89408a47cc0481b",
"livescorebest/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"livescorebest/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"livescorebest/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"livescorebest/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"livescorebest/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"index.html": "7f4f9c6af0ef637ccec343ba351f6648",
"main.dart.js": "0c45bd4d70295a1f0722241de244ee25",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "463aac07fbe2bcdea41dd0f7bf6126eb",
"assets/AssetManifest.json": "11793464a20debafe1cdab5b46078eb5",
"assets/NOTICES": "f6bf02409ab7119e92f5d2377b8a1e5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "196c74553a049f07998cb05114a28e51",
"assets/lib/assets/images/premium-black.png": "842f9be1b838f478932245f3457c939c",
"assets/lib/assets/images/banner.png": "28695f9038c62b7457d23182c6142d64",
"assets/lib/assets/images/banner2.jpeg": "c34c07307968d7c5a76d465bc1535e83",
"assets/lib/assets/images/premium-white.png": "2f083b4e272d92452ff92b4d159ec983",
"assets/lib/assets/images/1024x500.png": "e559272620d48b36707666677cb86407",
"assets/lib/assets/images/premium.png": "2449f8c0df6b042238bb188151c9389f",
"assets/lib/assets/images/premium.jpg": "59711918d6774a76e89408a47cc0481b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
