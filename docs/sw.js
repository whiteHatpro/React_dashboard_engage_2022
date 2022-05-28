 

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "./precache-manifest.92c9c0748b248b7ab83d5757550fd370.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

 
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
