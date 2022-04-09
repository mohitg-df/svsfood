'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6d6ccb268facceb218f0e48398254a8c",
"assets/assets/allfood.jpg": "bf3b39e1c482f910ed7db7e70d45fc2f",
"assets/assets/beverages/blue-ocean.jpg": "de2c43f4823d2ad017e7bb626317d720",
"assets/assets/beverages/bubblegum-shake.jpg": "7c31434eac60854d278f5198f9bce435",
"assets/assets/beverages/cold-coffe.jpg": "a608d6bdf60d6aac00af6f21b2109413",
"assets/assets/beverages/oreo-shake.jpg": "c2fffec15a0c503f7d4a1637068d468f",
"assets/assets/beverages/pineapple-shake.jpg": "48f825b193394329a71f9a7429099fad",
"assets/assets/beverages/strawberry-shake.jpg": "c1de5870d744faf8f99039023bc2861f",
"assets/assets/beverages/virgin-mojito.jpg": "2cb147dc6afc2a29f7e054652a82f26a",
"assets/assets/burger/allo-tikki-burger.jpg": "95c03edc84bf7ced857841aa6353eaf0",
"assets/assets/burger/chili-lava-burger.jpg": "8b918ae7f759f4d79d84d5abcbcbeaa0",
"assets/assets/burger/maharaja-burger.jpg": "0558b581c7f2ec48b45d15d48c3d9a8b",
"assets/assets/burger/makhani-burger.jpg": "34e75dd91577ad0f6994190a7622a0a6",
"assets/assets/burger/paneer-burger.jpg": "da6641420b78450bab2ed025872e07d5",
"assets/assets/burger/supreme-burger.jpg": "714d5e502b36e1c6dab3eafda610bd32",
"assets/assets/burger/tandoor-burger.jpg": "23d41284304e9f1fac10a8c260d30af1",
"assets/assets/fries/chesse-pakode.jpg": "3de4acd87f5a5e65dc35764208047cc6",
"assets/assets/fries/chessey-fries.jpg": "f48eec636b7fffe29e3c3dc043a673c1",
"assets/assets/fries/italian-fries.jpg": "e5c45d9f6d523ab7c79ff220a30149fa",
"assets/assets/fries/peri-peri-fries.jpg": "e0eabd403e3cbb6437c90c16065c90cd",
"assets/assets/fries/salted-fries.jpg": "e5c45d9f6d523ab7c79ff220a30149fa",
"assets/assets/fries/veggie-strix.jpg": "f20128791454d5002514d4c7bb05e26a",
"assets/assets/garlicbread/loaf-chesse.jpg": "fc74d141aa065bb53415224d0009146f",
"assets/assets/garlicbread/stuff-chessy.jpeg": "63b3fa59cbd625a84ae45313dbfd5e06",
"assets/assets/garlicbread/stuff-corn.jpg": "f48eec636b7fffe29e3c3dc043a673c1",
"assets/assets/garlicbread/stuff-supreme.jpg": "63b3fa59cbd625a84ae45313dbfd5e06",
"assets/assets/homepage1.jpg": "a09009b8f441601acfce7c3f5309b1ef",
"assets/assets/homepage2.jpg": "8df8741418300a40888358ebeb73e247",
"assets/assets/logo.png": "31034ef388c7216f72f3086befb27038",
"assets/assets/mobile_logo.png": "fb5c58afcac0537c933cb53872a7a82d",
"assets/assets/naan/chapata.jpg": "f35318d531f145d1c0d70e0a83128707",
"assets/assets/naan/cheese-chapata-naan.jpg": "f35318d531f145d1c0d70e0a83128707",
"assets/assets/naan/triangle-puff.jpg": "86743235c546785236cef838c025f025",
"assets/assets/other/chocho-lava-cake.jpg": "6c7f3cb4b63063f2a6ccab79d156776b",
"assets/assets/other/mineral-water.jpg": "34e901e1c943a57b621a42ebb7958d79",
"assets/assets/pizza/all-pizza.jpg": "c6fd08a85af7c572a11f11151b2d5d37",
"assets/assets/pizza/golden-corn-pizza.jpg": "aa5ece67b4d0ec77f54db8a526c7200b",
"assets/assets/pizza/margrita-pizza.jpg": "142dbe246482ebe23ae51644cd9122a7",
"assets/assets/pizza/pepe-paneer-pizza.jpg": "e5c3b30281966bd15449459047053c08",
"assets/assets/pizza/veggie-loaded-pizza.jpg": "226c2b0e1fcd852de1281c11eec85759",
"assets/assets/tastemakerdips/burger.jpg": "56a35d722a5d8d7439f3665f7d452941",
"assets/assets/tastemakerdips/chilli.jpg": "a7e49604fc4a25dbad4595e25bf14a1a",
"assets/assets/tastemakerdips/liquid.jpg": "7316ec41eb1ddfd44a444894275be9aa",
"assets/assets/tastemakerdips/mayonies.jpg": "3fe42652103de44184a325aade9268f2",
"assets/assets/tastemakerdips/tandoori.jpg": "56a35d722a5d8d7439f3665f7d452941",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "a3645eba564c74625b06fb8d7bcdfd7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3c8362ef2aa1f02522d454b7911c280",
"/": "e3c8362ef2aa1f02522d454b7911c280",
"main.dart.js": "8196bd701656a953860782f7e514ed88",
"manifest.json": "c48a32958a7689e39c59ee291b314c42",
"version.json": "47468cd203bff89d4ec3b02d4db156a5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
