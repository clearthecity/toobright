workbox.setConfig({
  debug: true
})

workbox.core.setCacheNameDetails({
  prefix: 'too-bright'
})

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
)
workbox.routing.registerRoute(
  /\'about\.html$/,
  new workbox.strategies.cacheFirst({
    cacheName: 'about-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 14 * 24 * 60 * 60, // 14 Days
      }),
    ]
  })
)

workbox.routing.registerRoute(
  'index.html',
  new workbox.strategies.staleWhileRevalidate({
    cacheName: 'index-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
      })
    ],
  })
)

workbox.routing.registerRoute(
  /\.(?=js|css)$/,
  new workbox.strategies.staleWhileRevalidate({
    cacheName: 'js-css-cache'
  })
)
