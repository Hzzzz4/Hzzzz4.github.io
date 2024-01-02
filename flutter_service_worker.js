'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "21335f9807a2592cb834167d8c859c92",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "76791dbedce75015b7a57cc66ec3b92d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e42610d3dc724fd019f1e3cf2f40544",
".git/logs/refs/heads/main": "bd116b6e8e1542bb5826dbd070eec701",
".git/logs/refs/remotes/origin/main": "ea354092de82c7666b95fabc0d628703",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/d4de096e7b952d30a8b9b739519c33cb4a28fd": "00a53f15679a430757b7301a5530951f",
".git/objects/17/04ab9d80b0c5769a2aee9753215dbb1a67dcac": "f9d2b6eb16bbb846b411d8e966f77807",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/24/b3b8dd53ab3bf006764e363ed76ef32cb81451": "ccd525c929f652458dcd57324a68cd6d",
".git/objects/26/9ef75a47207d8f2b2695f933f057d382fc6535": "9335e0af8996b2be0950100da2400ec1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/dc068ed0e8aee21246a8e41c400911212229d0": "acc6fa036b59587e04f047aa3aa709d4",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/31/80d40d7f21e92a729a0870fa90cc4e79bcb255": "a9b2e72eabef2caae9026233624b9325",
".git/objects/33/ae605ba8ce027be8ac458edfb0c609c59c41f7": "6021312c3d92025e17d347c34a32f496",
".git/objects/34/84b33ec78b60f75e0871d41ed4b7d0416d199c": "4d24b92b5f2c457a343b45a351734623",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/96f610ce461b9fe98457bca0747e1d385c9250": "c9ba2cd042bcebc255bcb4c739489943",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/d098140040583491814c461ada18758c337623": "065d4c241b3a2b6bcac99c5f52a51c3d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7228d3c629f278b60e1555b157d91e25844e95": "c7c7593c0a0da61f8b21a17210c046bd",
".git/objects/47/d3a8aa92729ce1cba462b5e483f209f6e17680": "aec3856d98f9d5070cb22ccb9670d609",
".git/objects/4a/3c364e31343db31568512e2b0f50e0a3d9ce0f": "078b0f1bac218cdf41cc12113963a70f",
".git/objects/50/c6ccd5b80d12faa91a57f7db3faec2935c996a": "58dde46bee6f780a889dc80582aab438",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5b/0199c8f49e36ba02cb8ff2fbecc6e3683c3651": "fbe0bbfd3169bda43918091a4265992c",
".git/objects/5d/a1db7d88f08585e7880c6f7d52923e9f4434f8": "d712c866b3cfa6a56e6a366a07507866",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/182fe9a4fecf8ae24fbdd1246e22de3005dbc8": "d6eb316640758ed8d19eb0cabe39f7c1",
".git/objects/6f/275869f2b52cc258522697d0908213fdc3a0c7": "fa833ed8e13121db7e528c0e45b9a2ce",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/5c0dbe35a24b926c53ce472f1f1273a41cee8d": "ded45c4daa99b53b8efac47670f02a67",
".git/objects/78/5090b736acb639c0e1117cc3dcc8bdcf6463e9": "db74bba4c236caf8e91f6076d7e4c1ad",
".git/objects/7f/ccfa42409137e71403d1656a16e74a89d1fdc4": "9ee3cf07a42aed7b5a759544ff3bdccd",
".git/objects/80/b2bcd8581cf6212c95e84a3cda78e72e396a57": "51956fe79540d07c9947464a71333501",
".git/objects/82/9ae56a963d4d541220759f71f4238a7a10fddb": "7ea12db3c569fd73666cd34cea4678d8",
".git/objects/86/b181b3544a4a86f9716e7e6c3934d7cf956c2a": "d0a1145c095a2bd38540107e582799a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8fb0484f07895992fb3d1de788ec12e8010c15": "c7a0cc1d82cc4c95f055a65269daf09d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/98/9431d74435b76b0883a552b1b531764841d334": "174a226a26346824988b1b013a736854",
".git/objects/a3/cf58a1f3c6bc7bd6a3ccb3da421f3c0dad265f": "8217f4d17c6b99164c2755450c67f3a7",
".git/objects/a7/fc64df33403453f8696a64536f7950efb685cf": "8eb2c90bb749ef6482824cfee378976d",
".git/objects/ab/3d1263ac5a6847a9dad6aec03d7f32ece00c10": "a0c248ce24e61ab15752005dd0bba7a4",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/9004da876527e832ab6396c30d1138624603f2": "7d2d43f06ed8cc2216f95170a135e346",
".git/objects/b1/e8040479b52466cfe2cd82e6eb702608e6d27a": "eaeb405fb79f8491de73dd9e0a823930",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c2220cd342ea1f294c42c58eb1665373fe3bdb": "8933bbfc11a7ea04a28352d543c1cd4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/34a9eff9902f3d93fe0d29d9eb7c195f11197b": "44b4d94ea3512c28ff936460dfc65ddd",
".git/objects/c9/7767d696500f8cbd9e648a341bc420a793d098": "ab2efd4e6a633cbadbe4298fe98730df",
".git/objects/d1/7c0180729e014412937423e54d4a370ad1435e": "5e69309a91a14c288952f5ff09af269b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/1567574de8b145de4288da4e8a918dfab44543": "ba4c3e8d7de20267ee1a1703c8de7b04",
".git/objects/db/9d512cf8f3e3061dacb1597ce7b1fe4810fb03": "9128858008e55ea54481262d190b7e01",
".git/objects/e0/250b66f9734b9c2150b5bd2a8806d773ea9f5c": "95ea5e1ac5a7e1437a4a6ff501f6d748",
".git/objects/e0/5640bd2173e000bc68f85d5be284138678c185": "3104dd3259b0295e5f32baca8261185d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/effd503c5ae0c7dfcd2c9d7fdb0819805dd611": "a6ea7cdd7eaea97f3423435fa3c92241",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ee119f72fb96395665213f7da91aed7f46bfda": "9a2a9c3db5ee7984838bb6ec33472584",
".git/objects/ee/1e86145e496e678ef8628c8a34dae09a4e6964": "1dc94c1eba9367a2a9e510aa38ffd538",
".git/objects/fc/969c2233c2331c66da6e21058deb9e04dae957": "3e02752759233ed62310a515287d5666",
".git/objects/fe/ea621456ea6c1d04893a8a8f5661bc416ccc2f": "d6b8bdb5ec1e4677bbfa91953ee73552",
".git/refs/heads/main": "ae71d9d5753f60b68148815549c1de6f",
".git/refs/remotes/origin/main": "ae71d9d5753f60b68148815549c1de6f",
"assets/AssetManifest.bin": "863f7e087a3e6acd3e749c783d70ad8c",
"assets/AssetManifest.json": "1fefe58b25de6cb68d451379ee92d422",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/images/business1.jpg": "f39ecec5779e0c8e328b4a5368891b1d",
"assets/images/business2.jpg": "5030ace3d547529f66c563d7113f7e90",
"assets/images/business3.jpg": "00935f1098dd1a702315aadf7c4aad5c",
"assets/images/girl.jpeg": "cdad057d8a3aed4cdc4affe7da7c91bc",
"assets/images/health1.jpg": "81f720f6a9841f38b1e485e584043ade",
"assets/images/health2.jpg": "1e6c38b35d619bc4e7253db33c97573a",
"assets/images/health3.jpg": "4726df9cbe36efb0a93f86fb0c98df22",
"assets/images/novel1.jpg": "ec6c3e008c2c1e78a6aa596242bb24ea",
"assets/images/novel2.jpg": "cbd195c5374dbbf47b07c9f2b6614010",
"assets/images/novel3.webp": "583852cca0f2c147858a1e45b74148eb",
"assets/images/novel4.jpg": "0d98e1e6ec91eac83450f65fc26c0e42",
"assets/images/novel5.jpg": "873c86dd67e3b31405f2522ca155433a",
"assets/images/science1.jpg": "4edcdce390e4a18562fd035feab6dd61",
"assets/images/science2.jpg": "7de1bff58751aab58c9ca08c1855195e",
"assets/images/science3.jpg": "55a54068fe00c6a5052780c548e3483c",
"assets/images/science4.jpg": "72649f30cb28d9758d3d2934cfb99264",
"assets/images/science5.jpg": "cc52fee43525190021794dc52d4bb306",
"assets/images/science6.jpg": "bf13b175bec3b3f62f8bd9bb14c3d985",
"assets/NOTICES": "cf1758fad699770074960af68d16f6c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
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
"index.html": "b0105d3a93be5b5042630e88c0405313",
"/": "b0105d3a93be5b5042630e88c0405313",
"main.dart.js": "e7a4f9bc9a8556504acea2612a31c666",
"manifest.json": "11b1a0cd3317a09fcf85c52b417079c7",
"version.json": "7e5803437682d71e69891469cd349171"};
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
