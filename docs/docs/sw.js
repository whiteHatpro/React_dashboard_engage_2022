 
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "./precache-manifest.55a4bf02e4a7d54c8df4af79574c7d4f.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

 
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
