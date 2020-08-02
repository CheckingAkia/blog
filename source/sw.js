'use strict';

importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
});
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: 'css-cache',
    })
);
workbox.routing.registerRoute(
    // Cache JS files
    /.*\.js/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: 'js-cache',
    })
);
workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://img\-pixiv\.cyfan\.top/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'gravatar-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);

workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://pixiv\.cyfan\.top/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'gravatar-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);
workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://img\.cyfan\.top/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'img-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);
workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://assets\.cyfan\.top/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'assets-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);
workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://blog\.cyfan\.top/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'blog-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);
workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://cdn\.staticfile\.org/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'staticfile-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);
workbox.routing.registerRoute(
    // Cache gravatar files
    new RegExp('https://cdn\.jsdelivr\.net/'),
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'jsdelivr-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of 30 Days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        })
      ],
    })
);
routing.registerRoute(
    new RegExp('^https://(.*)googlesyndication\.com'),
    new NetworkOnly()
);

routing.registerRoute(
    new RegExp('^https://(.*)googletagservices\.com(.*)'),
    new NetworkOnly()
);
routing.registerRoute(
    new RegExp('^https://(.*)google\.com(.*)'),
    new NetworkOnly()
);
routing.registerRoute(
    new RegExp('^https://googleads\.g\.doubleclick\.net/'),
    new NetworkOnly()
);


