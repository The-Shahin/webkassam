'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "002193e771c59d6d24c2fbb213ff0166",
"assets/AssetManifest.smcbin": "e564ad3d2d0afa8c1849c4c8984ffda3",
"assets/assets/dummy/arrow-transfer-rectangle.png": "f3b8ac2b4ac4a320971540600a1d70b5",
"assets/assets/dummy/dummy1.png": "a273b9c29094f5f550a7cbdbf036aa70",
"assets/assets/dummy/dummy2.png": "4b3005782b0afa8ef9f376ae45f43d26",
"assets/assets/dummy/dummy3.png": "30e353a6299b6fb3cae7fba4b301eb74",
"assets/assets/dummy/dummy4.png": "c5eee21cb45fc9cb5941f85ba09265c9",
"assets/assets/dummy/endPayment.png": "f6ad9c4586fd0a3aa9538bd4316d10a1",
"assets/assets/dummy/gemini.png": "06df48fafe18fb0beca39889d6b0a81e",
"assets/assets/dummy/money-arrow-right.png": "64e89879538199eb3d4a966ebfe6242c",
"assets/assets/dummy/plus-rectangle.png": "038c2119ddbcacf01939499271f9ec01",
"assets/assets/dummy/topDummy1.png": "8f802da44863aead580338cf33ed5a11",
"assets/assets/dummy/topDummy2.png": "81aaf39a59ef3fca46b385636680b196",
"assets/assets/dummy/topDummy3.png": "8f35e7335f12aaf102afd2c1619bf372",
"assets/assets/icons/132767-loading-bar.json": "e16d410fcefc39ad9d3f07dc1a788680",
"assets/assets/icons/18776-progress-dots-blue.json": "f3452e9009f334962b052a328b0e009a",
"assets/assets/icons/auto.png": "1498c0359b2455a31e2a04e9e150d8ca",
"assets/assets/icons/backImage.png": "49ebe14bac21264fac38a42c40c0dd3e",
"assets/assets/icons/bank.png": "af4408de8bf4048b17f7ec4b7a273442",
"assets/assets/icons/bar-chart.png": "bc5ffede008cd4e9c49fc49e44b618ed",
"assets/assets/icons/bell.png": "e89080fabd635ecd9f16287f77c2678d",
"assets/assets/icons/bonus.png": "fbbf48aedd46a4a17160c182b2358aea",
"assets/assets/icons/calendar1.png": "f9457d99d91867e2c15307b3304d84e2",
"assets/assets/icons/call.png": "a603180d46f6f3b630adb5cb2f685319",
"assets/assets/icons/card.png": "8eb5b69b03c6073c2eafe56f231a5d82",
"assets/assets/icons/cashback.png": "40fb848eb860872d408dffca8303da43",
"assets/assets/icons/chat.png": "2eab34ed6a37a66dc613b3534f534496",
"assets/assets/icons/check-failure.png": "1fc692ba70854a468cb880fc959c216b",
"assets/assets/icons/check-success.png": "11c91a65fdd83ac0f03dcb04c880000d",
"assets/assets/icons/coin.png": "646119b1ad54b2544e20496093a5e4eb",
"assets/assets/icons/deal.png": "b374d1dc007f7aa0f2358d6502cc6e16",
"assets/assets/icons/face-id.png": "9d558a8d8140699afe874539420ee15e",
"assets/assets/icons/government.png": "31ef04c8993a90f7f89cf60975ba004c",
"assets/assets/icons/home.png": "e0717fba50cd8402dadd9be99a32ff77",
"assets/assets/icons/icon.png": "ac47dce715236b268e7afd7631f8f78d",
"assets/assets/icons/image-edit.png": "61f4dafcee01c19c87fabfaaad2720c9",
"assets/assets/icons/info.png": "8053425380367d111fefc2e0646c04e1",
"assets/assets/icons/instagram.png": "0c23f1de152d2323ae0033c31e11d2f3",
"assets/assets/icons/linkedln.png": "c070d2b74f14c63101a0ce38722533f4",
"assets/assets/icons/logout.png": "9e97ed1d3c3cf06f75979e7d62bf81a6",
"assets/assets/icons/money-change.png": "5c6aa9da17c704f3cb9e46807749f25e",
"assets/assets/icons/money-income.png": "d32e2dde177de0907da4122c3e393735",
"assets/assets/icons/money-profit.png": "dfa3f8abc76692030b9374de96d5120e",
"assets/assets/icons/navigation.png": "639186f64f582bda2d42ecc98f962418",
"assets/assets/icons/new-logo.png": "dfd228deaf0da0351511b4ad7fe2e909",
"assets/assets/icons/notepad.png": "a31ef99c3e983a570115adac30b15d3d",
"assets/assets/icons/pay.png": "9211eae1e8cb2f110b15db2880446855",
"assets/assets/icons/person.png": "1f17946de544b332a8d3299db31ce96b",
"assets/assets/icons/person2.png": "d1760effb79ffeb6590363e38c6eb001",
"assets/assets/icons/personal.png": "c559b1df6b1f2440f18ca7da7085cda0",
"assets/assets/icons/pieChart.png": "4e2c24788196b935476445dd2a54d48e",
"assets/assets/icons/plus.png": "5664358f456b606c5c6107d17f4fac33",
"assets/assets/icons/property.png": "0b6034187661926e657c58ed61b5a7b7",
"assets/assets/icons/qrCode.png": "ee9ac2d4084ccea5269d6688c737ec7d",
"assets/assets/icons/scan.png": "0ed21bb37f8687b94dc851c5595d4726",
"assets/assets/icons/scanner.png": "7ced4757e896d862fe8062b1ce050b8d",
"assets/assets/icons/security.png": "8c9d01c96d17ac069181f8d5abe84ef9",
"assets/assets/icons/setting.png": "a24972dca02f9354ec5f1a1cf6ca8563",
"assets/assets/icons/share.png": "64591500834dfbed97df8661b952c789",
"assets/assets/icons/statistics.png": "666888f28a6f4ffda4be47dfec551e85",
"assets/assets/icons/swipe-up-animation.json": "232ae8a0339886e9c771e2b527f190e0",
"assets/assets/icons/swipe-up.json": "973316a8e78c869c89de166300b94eb1",
"assets/assets/icons/template.png": "65cea4d67aad8ad7f16184bfd4e59774",
"assets/assets/icons/terminal.png": "4c40972c1e6136a539556d1e53dd6d30",
"assets/assets/icons/trophy.png": "623ea6b87631c43dd18f09a8e275ec78",
"assets/assets/icons/user_clicked.png": "654079a4484c75c119ca72e75b2aefe4",
"assets/assets/icons/whatsapp.png": "800353cc1bde5303ef58a5dc91f4d891",
"assets/assets/icons/widgets.png": "8d4ee109817324b7f4a0a9794c6c2eae",
"assets/assets/images/3-right-arrow.png": "a7ae5c3cbfe59a5b5ed09381efa70e1f",
"assets/assets/images/az.png": "d280e786917a67c5a481ff2ef62c100e",
"assets/assets/images/azercell.png": "0fb22121564325a158758c9fef31c47d",
"assets/assets/images/coffe.png": "c68fbad5b89a37c895426ae4033b2118",
"assets/assets/images/eu.png": "26cb0146afa8030a7ce8ea431179ef88",
"assets/assets/images/fingerprint.png": "f448ed59d4e4b8af1b2d7168ab06af72",
"assets/assets/images/gb.png": "d55a4ed7b48e1d5a27d87fe6e0c2f234",
"assets/assets/images/logo.png": "08a52c53a38ff6ef37ceecb66da16c1b",
"assets/assets/images/onBoardingFront1.png": "d0b948a031b514f0b18ad7a2bd23b8fa",
"assets/assets/images/onBoardingFront2.png": "e2463253964ec12c8ccdaf5fcf0f59be",
"assets/assets/images/onBoardingFront3.png": "b176a62de6bd5510d051c4f002f9a0ce",
"assets/assets/images/ru.png": "82136eb34125a157103cd1fc8f2378c9",
"assets/assets/images/success.png": "2ed1fb8a20929e7267259b051fa92fc8",
"assets/assets/images/tr.png": "702ab1a0aeb9e04576adba9b73e6bf9e",
"assets/assets/images/usa.png": "88024955018ddc2ba4a90c45d83fe620",
"assets/assets/translations/az.json": "9fabc6ef42aa990980df586a30375d86",
"assets/assets/translations/en.json": "40d8efcc17ec7106d6ef7abf553527c2",
"assets/assets/translations/ru.json": "cd85038aa7d4b38fc78a4d436be8968e",
"assets/assets/translations/tr.json": "8b0c0996777d9378e32a7069d5861b4c",
"assets/assets/web/app-store.png": "b436feb4adbee7ddcee4762b55abd8d5",
"assets/assets/web/facebook4.png": "311e69e84850fb59396c535c34a6ff73",
"assets/assets/web/google.png": "f9030d26dbb0cae157901741e3ebcb03",
"assets/assets/web/instagram3.png": "42d1d7ac2825416c6eddca7620a09edd",
"assets/assets/web/linkedin3.png": "7c2b84867f5f660cfc09f91c9906fe76",
"assets/assets/web/play-store.png": "b4c9f8666bbeeb94a7d81d697945d68f",
"assets/assets/web/qr-code.png": "7edcd13fd1b276581856f7c941c9fd92",
"assets/assets/web/sizedBox.png": "a940b61b5d2b0d9f53ebdf5cb12d9746",
"assets/assets/web/step1.png": "c949128e367640cdfaf313d56783596b",
"assets/assets/web/step2.png": "9a3f68683e30a17a4e31591cbe626ed8",
"assets/assets/web/step3.png": "b52b4c808c1076ae9514e0f809d7a345",
"assets/assets/web/step4.png": "a93c5610a66fad7e32af10b877dbb656",
"assets/FontManifest.json": "be0d22c6734ba7cc029cb427f18f2aba",
"assets/fonts/MaterialIcons-Regular.otf": "f33c4e0ac649c26acaec026bc0ed36ed",
"assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "3569deebad64eece00202c8f8fa57484",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8f09cbebd31db7272f7b6b04c732abe3",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "627164a72a2e2d210f9a1e251a4d3a82",
"/": "627164a72a2e2d210f9a1e251a4d3a82",
"main.dart.js": "9b5d0a229c5111eac6903824183301ae",
"manifest.json": "c6ebdab868a1756cf7a62de4d27124e2",
"version.json": "eefd736a0c31156651c920f5cda07a72"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
