'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f99ccdbb42660a115afe9073bc1d135e",
"livescorebest/version.json": "3271fdea53e22f0aebdf6ff58a3c6fd5",
"livescorebest/splash/img/light-2x.png": "f2c5200253b653f176dd96b0fd624a18",
"livescorebest/splash/img/dark-4x.png": "2d4a649bf73fc58d53945a52ab13140a",
"livescorebest/splash/img/light-3x.png": "3207faf850a8b57b98ac28c47f700612",
"livescorebest/splash/img/dark-3x.png": "3207faf850a8b57b98ac28c47f700612",
"livescorebest/splash/img/light-4x.png": "2d4a649bf73fc58d53945a52ab13140a",
"livescorebest/splash/img/dark-2x.png": "f2c5200253b653f176dd96b0fd624a18",
"livescorebest/splash/img/dark-1x.png": "21dd65813dd44287125ab1b44e9c6916",
"livescorebest/splash/img/light-1x.png": "21dd65813dd44287125ab1b44e9c6916",
"livescorebest/splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"livescorebest/splash/style.css": "051d090817004f223014d935c4396f01",
"livescorebest/index.html": "09fb6bfb6fad5b7526bff64e2a82af53",
"/": "f9b8d1d5072c83fe06d93b789746fdc7",
"livescorebest/LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"livescorebest/CNAME": "c78b7fd04e3e5a8a14683e761571e0d9",
"livescorebest/main.dart.js": "289ff279e13db67843c6d4d74bbbe9f0",
"livescorebest/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"livescorebest/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"livescorebest/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"livescorebest/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"livescorebest/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"livescorebest/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"livescorebest/manifest.json": "463aac07fbe2bcdea41dd0f7bf6126eb",
"livescorebest/.git/config": "9dec202903f4127d9e42c07870a6c8f4",
"livescorebest/.git/objects/95/d2fce68cc0f68e90a75bf1dd35547bc1da8335": "49a13d2fe8c03d682a1c40a54b98da8a",
"livescorebest/.git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
"livescorebest/.git/objects/9b/75158f3de2a996b6fab42e9e033459e407824d": "e5cb939d9c11724b366371dd92edd95a",
"livescorebest/.git/objects/6a/6c47227fefaa2df2f077075b8323faade3cacc": "827a891ed3d719f057fef9c33fa06be2",
"livescorebest/.git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
"livescorebest/.git/objects/58/b3e32c0a53c0058a57402a7d382b857753f3ad": "6f3a9b448ba73b4f4a4584e2de972a5a",
"livescorebest/.git/objects/34/9ae294de0c5a7deaa6cc6f4972feebd5a4f19a": "6eaf8f6cfd6e847c5d677abb714b7dcd",
"livescorebest/.git/objects/9d/01db72d5f2257cf2d9d286c8d09fd1cdf35a0a": "703c38dbf387da08df1e1ad029c6d2ca",
"livescorebest/.git/objects/02/f265ea2e8f1dc8366aeafcccfde03f330b4796": "617d7474419f5ace2aee4f6c268d46ca",
"livescorebest/.git/objects/a3/6e88260e33f288e6f9d3e01a5514f649dcf3c4": "26df922137ebd47258ed7bee9e60a1bd",
"livescorebest/.git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
"livescorebest/.git/objects/b3/f2614fd4be4dddedbca9e07f0e0f84f5fa1aaa": "e53c4ac53ad2877f6b6670c7f00efbc4",
"livescorebest/.git/objects/b4/95f6a8a4485bb414c8b9658b3530651b68ee85": "c1a258f789a549401c3793313c4f6927",
"livescorebest/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"livescorebest/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"livescorebest/.git/objects/f3/10a3082d8671d155353cd3d495dbab31904cc8": "23fc9b692994d48b0210ae71fa671ce6",
"livescorebest/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"livescorebest/.git/objects/eb/f5fd492b94f06f78f1d783e6fac985b3ff27ea": "b619e6f8b84b97c749e2311ae835e7de",
"livescorebest/.git/objects/c0/6b2f9c0ef7c27a8d990b103a983f81fd603db7": "94cfadab413053082ab7900b145ae15e",
"livescorebest/.git/objects/fd/567afb84edf071f4ce348d25e6e6ea8740e78f": "c1a62272a6012d7a03410ac68b87b1b9",
"livescorebest/.git/objects/pack/pack-bc9efe0be0a8b787c8b4da7edff7ce637b4bbf92.pack": "ffc474238d16f65a1c4e58b127fce21b",
"livescorebest/.git/objects/pack/pack-bc9efe0be0a8b787c8b4da7edff7ce637b4bbf92.idx": "a53d24acbb6acf6567f616fa11d36cfe",
"livescorebest/.git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
"livescorebest/.git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
"livescorebest/.git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
"livescorebest/.git/objects/17/e306e4f8bd09895cdefe9be4b6761b2c1bc772": "e7ac2cdecc1d61aed0e0323e8089a2d3",
"livescorebest/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"livescorebest/.git/objects/8a/1f4c9c10edb02822d0a7168f10228311ec81fe": "24e963eb636d0d11e831516e95f385e2",
"livescorebest/.git/objects/21/0436541b5d2d2cf7b08c9636323d3cf6903770": "48faaa1920a8aa4d874e99fce1f748c9",
"livescorebest/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"livescorebest/.git/objects/6b/87179352f2b52b41143578298067afb73c938d": "fa7150a9e79cc8097152db032168a35a",
"livescorebest/.git/objects/31/46a4e1fdd317357b82305cfd5c65c269b2f0f3": "b72b635dd2f6231d5edd24f0deb60516",
"livescorebest/.git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
"livescorebest/.git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
"livescorebest/.git/objects/5e/c5b87c6dbcbc06fa7b8136974cfdb1213fc4a2": "c195583afcd1a2fb14edf951317d495a",
"livescorebest/.git/objects/01/4aefeb34e0b5836044e288d1c4e0cd0f4ab9bd": "8473cfb85b2d00a17900588977701bc1",
"livescorebest/.git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
"livescorebest/.git/objects/a7/2bc9ce18b2d25281f024cec79d89d1156fb15c": "effaaac1b3ac5a22bb85fe04f6fa8283",
"livescorebest/.git/objects/af/9577dce5ec8641107b656361c129da50eccef3": "d41885eb9bc94aeb912c5ed83b900481",
"livescorebest/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"livescorebest/.git/objects/a8/41b65b8de36fa1552fd5e81fe7beb4ccc9b263": "c23aaed8993851ada1ee5c2ba1360f32",
"livescorebest/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"livescorebest/.git/objects/b0/402279cf4c647a2022c113d1645528c8c2eb8a": "c887afe60cf73b9c50797907a8290fc9",
"livescorebest/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"livescorebest/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"livescorebest/.git/objects/c3/a588f941cc243eaf693215bd5c1d0e15b8ad53": "bad4bcc529c180ab34bc780190589fa0",
"livescorebest/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"livescorebest/.git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
"livescorebest/.git/objects/f7/a7722971478559ead3900af0b0e1eb97f121d0": "dedeb4c0b89e3baff790db5f3f2ca1f2",
"livescorebest/.git/objects/e9/e372930a66957de204a99db689870b6be4df67": "7038074df998b488f67a827fcd4e9b27",
"livescorebest/.git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
"livescorebest/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"livescorebest/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"livescorebest/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
"livescorebest/.git/objects/15/cb4409cb225c34a0777880f6422c7aa630181a": "14732658ba8dde0a475cac2abaef9fc5",
"livescorebest/.git/objects/12/38b45227dd9473190ae5e921aafd726827ad86": "479142959e7732f9e8f6d4c752146b00",
"livescorebest/.git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
"livescorebest/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"livescorebest/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"livescorebest/.git/logs/HEAD": "ba6fd566316ed1a0d55616ad8b63e2e4",
"livescorebest/.git/logs/refs/heads/main": "ba6fd566316ed1a0d55616ad8b63e2e4",
"livescorebest/.git/logs/refs/remotes/origin/HEAD": "f837a7c43abfceb5248b5bf7a4a17486",
"livescorebest/.git/logs/refs/remotes/origin/main": "0962fa3e61692e145d63075151b93fd5",
"livescorebest/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"livescorebest/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"livescorebest/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"livescorebest/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"livescorebest/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"livescorebest/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"livescorebest/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"livescorebest/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"livescorebest/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"livescorebest/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"livescorebest/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"livescorebest/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"livescorebest/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"livescorebest/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"livescorebest/.git/refs/heads/main": "053b0fa4670c63ef6fcd43058c946cec",
"livescorebest/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"livescorebest/.git/refs/remotes/origin/main": "053b0fa4670c63ef6fcd43058c946cec",
"livescorebest/.git/index": "3a03e7268d3d53f102b4b3a4dd85957f",
"livescorebest/.git/packed-refs": "ba94e40e3b6b073deeb0427c5e52114b",
"livescorebest/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"livescorebest/.git/FETCH_HEAD": "95f367cf56a076480d41389dd69f0fc7",
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
"splash/img/light-2x.png": "f2c5200253b653f176dd96b0fd624a18",
"splash/img/dark-4x.png": "2d4a649bf73fc58d53945a52ab13140a",
"splash/img/light-3x.png": "3207faf850a8b57b98ac28c47f700612",
"splash/img/dark-3x.png": "3207faf850a8b57b98ac28c47f700612",
"splash/img/light-4x.png": "2d4a649bf73fc58d53945a52ab13140a",
"splash/img/dark-2x.png": "f2c5200253b653f176dd96b0fd624a18",
"splash/img/dark-1x.png": "21dd65813dd44287125ab1b44e9c6916",
"splash/img/light-1x.png": "21dd65813dd44287125ab1b44e9c6916",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "051d090817004f223014d935c4396f01",
"index.html": "f9b8d1d5072c83fe06d93b789746fdc7",
"main.dart.js": "aec88ab7fc4b80e15e41461d90302c7c",
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
