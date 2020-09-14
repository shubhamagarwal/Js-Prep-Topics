/*
Service Worker allows you to support offline experiences, giving engineers and developers end-to-end control over the user’s interactions with the app. A service worker enables you to run JavaScript before a page even exists, makes your site faster, and allows you to display content even if there is no internet connection.

By default, the React build process will generate a serviceWorker.js file in your src folder However, the default for the service worker is unregistered, meaning that it won’t yet be able to take control of your web app. As it states, switching serviceWorker.unregister() to serviceWorker.register()

The workbox-webpack-plugin is integrated into production configuration, and it will take care of generating a service worker file that will automatically precache all of your local assets and keep them up to date as you deploy updates.

Workbox provides two webpack plugins: one that generates a complete service worker for you and one that generates a list of assets to precache that is injected into a service worker file.

When to use generateSW The GenerateSW plugin will create a service worker file for you and add it to the webpack asset pipeline.
1. You want to precache files. 2. You have simple runtime configuration needs (e.g. the configuration allows you to define routes and strategies).
When NOT to use generateSW
1. You want to use other Service Worker features (i.e. Web Push). 2. You want to import additional scripts or add additional logic.
When to use InjectManifest
The InjectManifest plugin will generate a list of URLs to precache and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.
1. You want more control over your service worker. 2. You want to precache files. 3. You have more complex needs in terms of routing. 4. You would like to use your service worker with other API's (e.g. Web Push).

Life Cycle

0. Your very first service worker downloads when you call .register(). If your script fails to download, parse, or throws an error in its initial execution, the register promise rejects, and the service worker is discarded.
1. The install event is the first event a service worker gets, and it only happens once.
2. A service worker won't receive events like fetch and push until it successfully finishes installing and becomes "active". // sw.js file :- self.addEventListener('activate', event => { console.log('V1 now ready to handle fetches!'); }); //# sourceURL=pen.js
*/

// Full GenerateSW Config
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  // Other webpack config...
  plugins: [
    // Other plugins...
    new GenerateSW({
      option: "value"
    })
  ]
};

// InjectManifest Plugin

const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  // Other webpack config...
  plugins: [
    // Other plugins...
    new InjectManifest({
      swSrc: "./src/sw.js"
    })
  ]
};



<script>
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered!', reg))
    .catch(err => console.log('Boo!', err));

  setTimeout(() => {
    const img = new Image();
    img.src = '/dog.svg';
    document.body.appendChild(img);
  }, 3000);
</script>

// sw.js file :-
  self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
});