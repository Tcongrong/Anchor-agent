/* eslint-disable */
/***
 * @file sw
 */

const CACHE_VERSION = 20251013;
const CACHE_NAME = 'cache_v_' + CACHE_VERSION;
const CACHE_URLS = [];

function precachel() {
  return caches.open(CACHE_NAME).then(function (c) {
    return c.addAll(CACHE_URLS);
  });
}

function clearCache() {
  return caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== CACHE_NAME) {
        caches.delete(key);
      }
    });
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(precachel().then(self.skipWaiting));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(Promise.all([clearCache(), self.clients.claim()]));
});

self.addEventListener('fetch', async (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.origin) {
    return;
  }

  if (/\.js$/.test(event.request.url) || /\.css$/.test(event.request.url)) {
    event.respondWith(
      caches.match(event.request).then(
        (cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetchWithRetry(event.request, 3);
        },
        () => {
          return fetchWithRetry(event.request, 3);
        },
      ),
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    }),
  );
});

async function fetchWithRetry(request, maxRetries) {
  let response;
  for (let i = 0; i < maxRetries; i++) {
    try {
      if (i > 0) {
        console.log(`retry ${i}: ${request.url}`);
      }
      response = await fetch(request);
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.warn(`Fetch attempt ${i + 1} failed:`, error);
    }

    // 等待一段时间后重试
    if (i < maxRetries - 1) {
      await new Promise((resolve) => setTimeout(resolve, 300 * Math.pow(2, i)));
    }
  }
  return response;
}
