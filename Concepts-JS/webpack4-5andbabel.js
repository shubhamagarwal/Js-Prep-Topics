/*

https://codepen.io/Shubham150/pen/yLYZayM


Webpack 4 vs 5https://github.com/webpack/changelog-v5/blob/master/README.md

webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules.

Plugin
A webpack plugin is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.
list of plugin
1. SplitChunksPlugin -> Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks.
webpack will automatically split chunks based on these conditions: => New chunk would be bigger than 30kb
2. HtmlWebpackPlugin -> The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This will generate a file dist/index.html containing the following. The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
3. workbox-webpack-plugin ->Workbox provides two webpack plugins: one that generates a complete service worker for you and one that generates a list of assets to precache that is injected into a service worker file.(GenerateSW & InjectManifest)
syntax: new WorkboxWebpackPlugin.GenerateSW({ clientsClaim: true, exclude: [/\.map$/, /asset-manifest\.json$/], importWorkboxFrom: 'cdn', navigateFallback: publicUrl + '/index.html', })
4. TerserWebpackPlugin This plugin uses terser to minify your JavaScript.
syntax : const TerserPlugin = require('terser-webpack-plugin'); module.exports = { optimization: { minimize: true, minimizer: [new TerserPlugin()], }, };
5. UglifyjsWebpackPluginThis plugin uses uglify-js to minify your JavaScript. Uglify is a JavaScript file minifier. It compresses the file size by removing all the spaces and new lines- which makes the code unreadable able hence ugly. Uglify also joins sentences using comma, changes property access to dot notation
syntax: const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); module.exports = { optimization: { minimizer: [new UglifyJsPlugin()], }, };

Loadershttps://webpack.js.org/concepts/loaders/#exampleOut of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
At a high level, loaders have two properties in your webpack configuration:
The test property identifies which file or files should be transformed.
The use property indicates which loader should be used to do the transforming.
module.exports = { module: { rules: [ { test: /\.css$/, use: 'css-loader' }, { test: /\.ts$/, use: 'ts-loader' } ] } };

Dependency Graph https://webpack.js.org/concepts/dependency-graph/ Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application. When webpack processes your application, it starts from a list of modules defined on the command line or in its configuration file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then bundles all of those modules into a small number of bundles - often, just one - to be loaded by the browser.

babelhttps://babeljs.io/docs/en/babel-preset-flowIn Babel, a preset is a set of plugins used to support particular language features. The two presets Babel uses by default: es2015 : Adds support for ES2015 (or ES6) JavaScript. react : Adds support for JSX.
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller! Install.
all stage presets are deprecated in babel v7, use @babel/preset-env going forward.
{ "presets": ["es2015", "react", "stage-0"] }

*/