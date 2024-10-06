// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "stop", ()=>stop);
var _functionsJs = require("./functions.js");
var _dbJs = require("./db.js");
var _viewsJs = require("./views/views.js");
var _devicesJs = require("./ble/devices.js");
var _watchJs = require("./watch.js");
var _courseJs = require("./course.js");
var _lockJs = require("./lock.js");
var _analytics = require("@vercel/analytics");
(0, _analytics.inject)();
function startServiceWorker() {
    if ("serviceWorker" in navigator) try {
        // const reg = navigator.serviceWorker.register('./sw.js');
        const reg = navigator.serviceWorker.register(require("de7947926fb3e56e"));
        console.log(`SW: register success.`);
        console.log("Cache Version: Flux-v003");
    } catch (err) {
        console.log(`SW: register error: `, err);
    }
}
async function start() {
    console.log("start app.");
    // startServiceWorker(); // stable version only
    (0, _functionsJs.xf).dispatch("app:start");
}
function stop() {
    (0, _functionsJs.xf).dispatch("app:stop");
}
start();

},{"./functions.js":"2jd1e","./db.js":"dOkc8","./views/views.js":"01USA","./ble/devices.js":"bvk5e","./watch.js":"dqZCf","./course.js":"e0T3f","./lock.js":"8fsSA","@vercel/analytics":"l4OoA","de7947926fb3e56e":"kLFVu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jd1e":[function(require,module,exports) {
//
// A collection of common functions that makes JS more functional
//
// Values
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equals", ()=>// values
    equals);
parcelHelpers.export(exports, "isNull", ()=>isNull);
parcelHelpers.export(exports, "isUndefined", ()=>isUndefined);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "exists", ()=>exists);
parcelHelpers.export(exports, "existance", ()=>existance);
parcelHelpers.export(exports, "expect", ()=>expect);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isArrayBuffer", ()=>isArrayBuffer);
parcelHelpers.export(exports, "isDataView", ()=>isDataView);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isCollection", ()=>isCollection);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isAtomic", ()=>isAtomic);
parcelHelpers.export(exports, "validate", ()=>validate);
parcelHelpers.export(exports, "first", ()=>// collections
    first);
parcelHelpers.export(exports, "second", ()=>second);
parcelHelpers.export(exports, "third", ()=>third);
parcelHelpers.export(exports, "last", ()=>last);
parcelHelpers.export(exports, "empty", ()=>empty);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "traverse", ()=>traverse);
parcelHelpers.export(exports, "getIn", ()=>getIn);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "setIn", ()=>setIn);
parcelHelpers.export(exports, "avg", ()=>avg);
parcelHelpers.export(exports, "mavg", ()=>mavg);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "sum", ()=>sum);
parcelHelpers.export(exports, "rand", ()=>rand);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "compose", ()=>// functions
    compose);
parcelHelpers.export(exports, "compose2", ()=>compose2);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "repeat", ()=>repeat);
parcelHelpers.export(exports, "nth", ()=>nth);
parcelHelpers.export(exports, "curry2", ()=>curry2);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "delay", ()=>// async
    delay);
parcelHelpers.export(exports, "wait", ()=>wait);
parcelHelpers.export(exports, "xf", ()=>// events
    xf);
parcelHelpers.export(exports, "hex", ()=>// format
    hex);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toFixed", ()=>toFixed);
parcelHelpers.export(exports, "toBool", ()=>toBool);
parcelHelpers.export(exports, "dataviewToArray", ()=>dataviewToArray);
parcelHelpers.export(exports, "dataviewToString", ()=>dataviewToString);
parcelHelpers.export(exports, "arrayBufferToArray", ()=>arrayBufferToArray);
parcelHelpers.export(exports, "stringToCharCodes", ()=>stringToCharCodes);
parcelHelpers.export(exports, "time", ()=>time);
parcelHelpers.export(exports, "print", ()=>print);
parcelHelpers.export(exports, "Spec", ()=>Spec);
parcelHelpers.export(exports, "nthBit", ()=>// bits
    nthBit);
parcelHelpers.export(exports, "setBit", ()=>setBit);
parcelHelpers.export(exports, "getBits", ()=>getBits);
parcelHelpers.export(exports, "nthBitToBool", ()=>nthBitToBool);
parcelHelpers.export(exports, "xor", ()=>xor);
parcelHelpers.export(exports, "setUint24LE", ()=>setUint24LE);
parcelHelpers.export(exports, "getUint24LE", ()=>getUint24LE);
function equals(a, b) {
    return Object.is(a, b);
}
function isNull(x) {
    return Object.is(x, null);
}
function isUndefined(x) {
    return Object.is(x, undefined);
}
function isFunction(x) {
    return equals(typeof x, "function");
}
function isArray(x) {
    return Array.isArray(x);
}
function isArrayBuffer(x) {
    return x instanceof ArrayBuffer;
}
function isDataView(x) {
    return x instanceof DataView;
}
function isObject(x) {
    return equals(typeof x, "object") && !isArray(x);
}
function isCollection(x) {
    return isArray(x) || isObject(x);
}
function isString(x) {
    return equals(typeof x, "string");
}
function isNumber(x) {
    if (isNaN(x)) return false;
    return equals(typeof x, "number");
}
function isAtomic(x) {
    return isNumber(x) || isString(x);
}
function exists(x) {
    if (isNull(x) || isUndefined(x)) return false;
    return true;
}
function existance(value, fallback) {
    if (exists(value)) return value;
    if (exists(fallback)) return fallback;
    throw new Error(`existance needs a fallback value `, value);
}
function expect(x, msg = "expected value here") {
    if (exists(x)) return x;
    throw new Error(msg);
}
function validate(predicates = [], value, fallback) {
    if (predicates.reduce((acc, p)=>acc && p(value), true)) return value;
    if (exists(fallback)) return fallback;
    throw new Error(`validate needs a fallback value with `, value);
}
// Collections
function empty(x) {
    if (isObject(x)) return Object.keys(x).length === 0;
    return x.length === 0;
}
const nth = curry2(function(offset, xs) {
    let i = offset < 0 ? xs.length + offset : offset;
    if (isString(xs)) return xs.charAt(i);
    return xs[i];
});
function first(xs) {
    return xs.at(0);
}
function second(xs) {
    return xs.at(1);
}
function third(xs) {
    return xs.at(2);
}
function last(xs) {
    return xs.at(-1);
}
const prop = curry2(function(p, x) {
    if (!exists(x)) return;
    return Number.isInteger(p) ? nth(p, x) : x[p];
});
function map(coll, fn) {
    if (isArray(coll)) return coll.map(fn);
    if (isObject(coll)) {
        for(let prop in coll)coll[prop] = fn(coll[prop]);
        return coll;
    }
    if (isString(coll)) return coll.split("").map(fn).join("");
    throw new Error(`map called with unkown collection `, coll);
}
function traverse(obj, fn = (x)=>x, acc = []) {
    function recur(fn, obj, keys, acc) {
        if (empty(keys)) return acc;
        else {
            let [k, ...ks] = keys;
            let v = obj[k];
            if (isObject(v)) {
                acc = recur(fn, v, Object.keys(v), acc);
                return recur(fn, obj, ks, acc);
            } else {
                acc = fn(acc, k, v, obj);
                return recur(fn, obj, ks, acc);
            }
        }
    }
    return recur(fn, obj, Object.keys(obj), acc);
}
function getIn(...args) {
    let [collection, ...path] = args;
    return path.reduce((acc, key)=>{
        if (exists(acc[key])) return acc[key];
        return undefined;
    }, collection);
}
function set(coll, k, v) {
    coll = coll || {};
    coll[k] = v;
    return coll;
}
function setIn(coll = {}, [k, ...keys], v) {
    return keys.length ? set(coll, k, setIn(coll[k], keys, v)) : set(coll, k, v);
}
function avg(xs, prop = false) {
    if (prop !== false) return xs.reduce((acc, v, i)=>acc + (v[prop] - acc) / (i + 1), 0);
    else return xs.reduce((acc, v, i)=>acc + (v - acc) / (i + 1), 0);
}
function mavg(value_c, value_p, count_c, count_p = count_c - 1) {
    return (value_c + count_p * value_p) / count_c;
}
function max(xs, prop = false) {
    if (prop !== false) return xs.reduce((acc, v, i)=>v[prop] > acc ? v[prop] : acc, 0);
    else return Math.max(xs);
}
function sum(xs, path = false) {
    if (path !== false) return xs.reduce((acc, v, i)=>acc + v[path], 0);
    else return xs.reduce((acc, v, i)=>acc + v, 0);
}
function rand(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function capitalize(str) {
    return str.trim().replace(/^\w/, (c)=>c.toUpperCase());
}
function clamp(lower, upper, value) {
    if (value >= upper) return upper;
    else if (value < lower) return lower;
    else return value;
}
// Functions
function compose2(f, g) {
    return function(...args) {
        return f(g(...args));
    };
}
function compose(...fns) {
    return fns.reduce(compose2);
}
function pipe(...fns) {
    return fns.reduceRight(compose2);
}
function repeat(n) {
    return function(f) {
        return function(x) {
            if (n > 0) return repeat(n - 1)(f)(f(x));
            else return x;
        };
    };
}
function curry2(fn) {
    return function(arg1, arg2) {
        if (exists(arg2)) return fn(arg1, arg2);
        else return function(arg2) {
            return fn(arg1, arg2);
        };
    };
}
//
// Copied from lodash.js
//
function debounce(func, wait, options = {}) {
    const root = window;
    let lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
    let lastInvokeTime = 0;
    let leading = false;
    let maxing = false;
    let trailing = true;
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    const useRAF = !wait && wait !== 0 && typeof root.requestAnimationFrame === "function";
    if (!isFunction(func)) // edit
    throw new TypeError("debounce expectes a function");
    wait = existance(toNumber(wait), 0); // edit
    // if (isObject(options)) {
    leading = toBool(options.leading);
    maxing = exists(options.maxWait);
    maxWait = maxing ? Math.max(existance(toNumber(options.maxWait), 0), wait) : maxWait;
    trailing = exists(options.trailing) ? toBool(options.trailing) : trailing;
    // }
    function invokeFunc(time) {
        const args = lastArgs;
        const thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function startTimer(pendingFunc, wait) {
        if (useRAF) {
            root.cancelAnimationFrame(timerId);
            return root.requestAnimationFrame(pendingFunc);
        }
        return setTimeout(pendingFunc, wait);
    }
    function cancelTimer(id) {
        if (useRAF) return root.cancelAnimationFrame(id);
        return clearTimeout(id); // edit
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = startTimer(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;
        return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = startTimer(timerExpired, remainingWait(time));
        return timerId; // edit
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) cancelTimer(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return isUndefined(timerId) ? result : trailingEdge(Date.now());
    }
    function pending() {
        return !isUndefined(timerId);
    }
    function debounced(...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);
        lastArgs = args;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (isUndefined(timerId)) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (isUndefined(timerId)) timerId = startTimer(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.pending = pending;
    return debounced;
}
// end copied from lodash.js
// Async
async function delay(ms) {
    return await new Promise((res)=>setTimeout(res, ms));
}
async function wait(ms) {
    return await new Promise((res)=>setTimeout(res, ms));
}
// XF (Events)
function XF(args = {}) {
    let data = {};
    let name = args.name || "db";
    function create(obj) {
        data = proxify(obj);
    }
    function proxify(obj) {
        let handler = {
            set: (target, key, value)=>{
                target[key] = value;
                dispatch(`${name}:${key}`, target);
                return true;
            }
        };
        return new Proxy(obj, handler);
    }
    function dispatch(eventType, value) {
        window.dispatchEvent(evt(eventType)(value));
    }
    function sub(eventType, handler, options = {}) {
        function handlerWraper(e) {
            if (isStoreSource(eventType)) handler(e.detail.data[evtProp(eventType)]);
            else handler(e.detail.data);
        }
        window.addEventListener(eventType, handlerWraper, Object.assign({
            capture: false
        }, options));
        return handlerWraper;
    }
    function reg(eventType, handler, options = {}) {
        function handlerWraper(e) {
            return handler(e.detail.data, data);
        }
        window.addEventListener(eventType, handlerWraper, Object.assign({
            capture: false
        }, options));
        return handlerWraper;
    }
    function unsub(eventType, handler, options = {}) {
        // console.log(`unsub ${eventType}`, handler); // rmv
        window.removeEventListener(eventType, handler, Object.assign({
            capture: false
        }, options));
    }
    function isStoreSource(eventType) {
        return equals(evtSource(eventType), name);
    }
    function evt(eventType) {
        return function(value) {
            return new CustomEvent(eventType, {
                detail: {
                    data: value
                }
            });
        };
    }
    function evtProp(eventType) {
        return second(eventType.split(":"));
    }
    function evtSource(eventType) {
        return first(eventType.split(":"));
    }
    return Object.freeze({
        create,
        reg,
        sub,
        dispatch,
        unsub
    });
}
const xf = XF();
// format
function hex(n) {
    return "0x" + parseInt(n).toString(16).toUpperCase().padStart(2, "0");
}
function toNumber(value) {
    return +value;
}
function toBool(value) {
    return !!value;
}
function toFixed(x, points = 2, fallback = 0) {
    if (!isNumber(x)) return fallback;
    const precision = 10 ** points;
    return Math.round(x * precision) / precision;
}
function dataviewToArray(dataview) {
    return Array.from(new Uint8Array(dataview.buffer));
}
function dataviewToString(dataview) {
    let utf8decoder = new TextDecoder("utf-8");
    return utf8decoder.decode(dataview.buffer);
}
function arrayBufferToArray(buffer) {
    return Array.from(new Uint8Array(buffer));
}
function stringToCharCodes(str) {
    return str.split("").map((c)=>c.charCodeAt(0));
}
function stringToDataview(str) {
    let charCodes = stringToCharCodes(str);
    let uint8 = new Uint8Array(charCodes);
    let dataview = new DataView(uint8.buffer);
    return dataview;
}
function time() {
    const d = new Date();
    const mm = d.getMinutes().toString().padStart(2, "0");
    const ss = d.getSeconds().toString().padStart(2, "0");
    const mmmm = d.getMilliseconds().toString().padStart(4, "0");
    return `${mm}:${ss}:${mmmm}`;
}
// Bits
function nthBit(field, bit) {
    return field >> bit & 1;
}
function setBit(i, n) {
    return n |= 1 << i;
}
function getBits(start, end, value) {
    return value >> start & (1 << end - start) - 1;
}
function nthBitToBool(field, bit) {
    return toBool(nthBit(field, bit));
}
function xor(view, start = 0, end = view.byteLength) {
    let cs = 0;
    const length = end < 0 ? view.byteLength + end : end;
    for(let i = start; i < length; i++)cs ^= view.getUint8(i);
    return cs;
}
function setUint24LE(dataview, index, value) {
    dataview.setUint8(index, value & 0xFF, true); // LSB
    dataview.setUint8(index + 1, value >> 8 & 0xFF, true);
    dataview.setUint8(index + 2, value >> 16, true); // MSB
    return dataview;
}
function getUint24LE(dataview, index = 0) {
    const LSB = dataview.getUint8(index, true); // LSB
    const MB = dataview.getUint8(index + 1, true);
    const MSB = dataview.getUint8(index + 2, true); // MSB
    return (MSB << 16) + (MB << 8) + LSB;
}
function Spec(args = {}) {
    const definitions = expect(args.definitions);
    const applyResolution = curry2((prop, value)=>{
        return value / definitions[prop].resolution;
    });
    const removeResolution = curry2((prop, value)=>{
        return value * definitions[prop].resolution;
    });
    function encodeField(prop, input, transform = applyResolution(prop)) {
        const fallback = definitions[prop].default;
        const min = applyResolution(definitions[prop].min);
        const max = applyResolution(definitions[prop].max);
        const value = input ?? fallback;
        return Math.floor(clamp(min, max, transform(value)));
    }
    function decodeField(prop, input, transform = removeResolution) {
        return transform(prop, input);
    }
    return {
        definitions,
        applyResolution,
        removeResolution,
        encodeField,
        decodeField
    };
}
// print
function Print() {
    let printLog = true ?? false;
    let printWarn = true;
    console.log(`:env ${"development"} :print ${printLog}`);
    function log(msg) {
        if (printLog) console.log(`[${time()}] ${msg}`);
    }
    function warn(msg) {
        if (printWarn) console.warn(`[${time()}] ${msg}`);
    }
    function callKarenFromHR() {
        console.warn(`calling Karen from HR ...`);
    }
    function makeCoffee() {
        console.warn(`making coffee ...`);
        console.warn(`
      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|
( C|=========|
 '-./_/_/_/_/|
   '_________'
    '-------'
`);
    }
    return {
        log,
        warn,
        makeCoffee,
        callKarenFromHR
    };
}
const print = Print();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dOkc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "db", ()=>db);
var _functionsJs = require("./functions.js");
var _modelsJs = require("./models/models.js");
var _soundJs = require("./sound.js");
var _idbJs = require("./storage/idb.js");
var _enumsJs = require("./ble/enums.js");
// import { trainerMock } from './simulation-scripts.js';
let db = {
    // Data Screen
    power: (0, _modelsJs.models).power.default,
    heartRate: (0, _modelsJs.models).heartRate.default,
    cadence: (0, _modelsJs.models).cadence.default,
    speed: (0, _modelsJs.models).speed.default,
    sources: (0, _modelsJs.models).sources.default,
    smo2: (0, _modelsJs.models).smo2.default,
    thb: (0, _modelsJs.models).thb.default,
    coreBodyTemperature: 0,
    skinTemperature: 0,
    position_lat: 0,
    position_long: 0,
    speedVirtual: (0, _modelsJs.models).virtualState.speed,
    altitude: (0, _modelsJs.models).virtualState.altitude,
    distance: (0, _modelsJs.models).virtualState.distance,
    ascent: (0, _modelsJs.models).virtualState.ascent,
    power1s: (0, _modelsJs.models).power1s.default,
    powerInZone: (0, _modelsJs.models).powerInZone.default,
    powerLap: (0, _modelsJs.models).powerLap.default,
    heartRateLap: (0, _modelsJs.models).heartRateLap.default,
    cadenceLap: (0, _modelsJs.models).cadenceLap.default,
    kcal: (0, _modelsJs.models).kcal.default,
    powerAvg: (0, _modelsJs.models).powerAvg.default,
    cadenceAvg: (0, _modelsJs.models).cadenceAvg.default,
    heartRateAvg: (0, _modelsJs.models).heartRateAvg.default,
    powerLapCount: (0, _modelsJs.models).powerLap.count,
    heartRateLapCount: (0, _modelsJs.models).heartRateLap.count,
    cadenceLapCount: (0, _modelsJs.models).cadenceLap.count,
    powerAvgCount: (0, _modelsJs.models).powerAvg.count,
    cadenceAvgCount: (0, _modelsJs.models).cadenceAvg.count,
    heartRateAvgCount: (0, _modelsJs.models).heartRateAvg.count,
    // Targets
    powerTarget: (0, _modelsJs.models).powerTarget.default,
    resistanceTarget: (0, _modelsJs.models).resistanceTarget.default,
    slopeTarget: (0, _modelsJs.models).slopeTarget.default,
    cadenceTarget: (0, _modelsJs.models).cadenceTarget.default,
    mode: (0, _modelsJs.models).mode.default,
    page: (0, _modelsJs.models).page.default,
    // Profile
    ftp: (0, _modelsJs.models).ftp.default,
    weight: (0, _modelsJs.models).weight.default,
    theme: (0, _modelsJs.models).theme.default,
    measurement: (0, _modelsJs.models).measurement.default,
    volume: (0, _modelsJs.models).volume.default,
    // UI options
    powerSmoothing: 0,
    dataTileSwitch: (0, _modelsJs.models).dataTileSwitch.default,
    librarySwitch: 0,
    // Workouts
    workouts: [],
    workout: (0, _modelsJs.models).workout.default,
    // Recording
    records: [],
    lap: [],
    laps: [],
    events: [],
    lapStartTime: false,
    // Watch
    elapsed: 0,
    lapTime: 0,
    stepTime: 0,
    intervalIndex: 0,
    stepIndex: 0,
    intervalDuration: 0,
    stepDuration: 0,
    watchStatus: "stopped",
    workoutStatus: "stopped",
    // Course
    courseIndex: 0,
    // Request ANT+ Device
    antSearchList: [],
    antDeviceId: {}
};
(0, _functionsJs.xf).create(db);
// Data Screen
(0, _functionsJs.xf).reg((0, _modelsJs.models).heartRate.prop, (heartRate, db)=>{
    db.heartRate = heartRate;
    db.heartRateLap = (0, _modelsJs.models).heartRateLap.setState(heartRate);
    db.heartRateAvg = (0, _modelsJs.models).heartRateAvg.setState(heartRate);
    db.heartRateLapCount = (0, _modelsJs.models).heartRateLap.count;
    db.heartRateAvgCount = (0, _modelsJs.models).heartRateAvg.count;
});
(0, _functionsJs.xf).reg((0, _modelsJs.models).power.prop, (power, db)=>{
    db.power = power;
});
(0, _functionsJs.xf).reg((0, _modelsJs.models).cadence.prop, (cadence, db)=>{
    db.cadence = cadence;
    db.cadenceLap = (0, _modelsJs.models).cadenceLap.setState(cadence);
    db.cadenceAvg = (0, _modelsJs.models).cadenceAvg.setState(cadence);
    db.cadenceLapCount = (0, _modelsJs.models).cadenceLap.count;
    db.cadenceAvgCount = (0, _modelsJs.models).cadenceAvg.count;
});
(0, _functionsJs.xf).reg((0, _modelsJs.models).speed.prop, (speed, db)=>{
    db.speed = speed;
});
(0, _functionsJs.xf).reg((0, _modelsJs.models).smo2.prop, (smo2, db)=>{
    db.smo2 = smo2;
});
(0, _functionsJs.xf).reg((0, _modelsJs.models).thb.prop, (thb, db)=>{
    db.thb = thb;
});
(0, _functionsJs.xf).reg(`coreBodyTemperature`, (coreBodyTemperature, db)=>{
    db.coreBodyTemperature = coreBodyTemperature;
});
(0, _functionsJs.xf).reg(`skinTemperature`, (skinTemperature, db)=>{
    db.skinTemperature = skinTemperature;
});
(0, _functionsJs.xf).reg((0, _modelsJs.models).sources.prop, (sources, db)=>{
    db.sources = (0, _modelsJs.models).sources.set(db.sources, sources);
    (0, _modelsJs.models).sources.backup(db.sources);
    console.log(db.sources);
});
(0, _functionsJs.xf).reg("power1s", (power, db)=>{
    db.power1s = power;
    db.powerLap = (0, _modelsJs.models).powerLap.setState(power);
    db.powerAvg = (0, _modelsJs.models).powerAvg.setState(power);
    db.kcal = (0, _modelsJs.models).kcal.setState(power);
    db.powerLapCount = (0, _modelsJs.models).powerLap.count;
    db.powerAvgCount = (0, _modelsJs.models).powerAvg.count;
});
(0, _functionsJs.xf).reg("powerInZone", (powerInZone, db)=>{
    db.powerInZone = powerInZone;
});
(0, _functionsJs.xf).reg("speedVirtual", (speedVirtual, db)=>{
    db.speedVirtual = speedVirtual;
});
(0, _functionsJs.xf).reg("altitude", (altitude, db)=>{
    db.altitude = altitude;
});
(0, _functionsJs.xf).reg("ascent", (ascent, db)=>{
    db.ascent = ascent;
});
(0, _functionsJs.xf).reg("distance", (distance, db)=>{
    if ((0, _functionsJs.equals)(db.watchStatus, "started")) db.distance = distance;
});
// Pages
(0, _functionsJs.xf).reg("ui:page-set", (page, db)=>{
    db.page = (0, _modelsJs.models).page.set(page);
});
// Modes
(0, _functionsJs.xf).reg("ui:mode-set", (mode, db)=>{
    db.mode = (0, _modelsJs.models).mode.set(mode);
    if ((0, _functionsJs.equals)(mode, (0, _enumsJs.ControlMode).erg)) (0, _functionsJs.xf).dispatch(`ui:power-target-set`, db.powerTarget);
    if ((0, _functionsJs.equals)(mode, (0, _enumsJs.ControlMode).resistance)) (0, _functionsJs.xf).dispatch(`ui:resistance-target-set`, db.resistanceTarget);
    if ((0, _functionsJs.equals)(mode, (0, _enumsJs.ControlMode).sim)) (0, _functionsJs.xf).dispatch(`ui:slope-target-set`, db.slopeTarget);
});
// UI options
(0, _functionsJs.xf).reg("ui:data-tile-switch-set", (index, db)=>{
    db.dataTileSwitch = index;
    (0, _modelsJs.models).dataTileSwitch.backup(db.dataTileSwitch);
});
(0, _functionsJs.xf).reg("ui:library-switch-set", (index, db)=>{
    db.librarySwitch = index;
});
// Targets
(0, _functionsJs.xf).reg("ui:power-target-set", (powerTarget, db)=>{
    db.powerTarget = (0, _modelsJs.models).powerTarget.set(powerTarget);
});
(0, _functionsJs.xf).reg("ui:power-target-inc", (_, db)=>{
    db.powerTarget = (0, _modelsJs.models).powerTarget.inc(db.powerTarget);
});
(0, _functionsJs.xf).reg(`ui:power-target-dec`, (_, db)=>{
    db.powerTarget = (0, _modelsJs.models).powerTarget.dec(db.powerTarget);
});
(0, _functionsJs.xf).reg("ui:cadence-target-set", (cadenceTarget, db)=>{
    db.cadenceTarget = (0, _modelsJs.models).cadenceTarget.set(cadenceTarget);
});
(0, _functionsJs.xf).reg("ui:resistance-target-set", (resistanceTarget, db)=>{
    db.resistanceTarget = (0, _modelsJs.models).resistanceTarget.set(resistanceTarget);
});
(0, _functionsJs.xf).reg("ui:resistance-target-inc", (_, db)=>{
    db.resistanceTarget = (0, _modelsJs.models).resistanceTarget.inc(db.resistanceTarget);
});
(0, _functionsJs.xf).reg(`ui:resistance-target-dec`, (_, db)=>{
    db.resistanceTarget = (0, _modelsJs.models).resistanceTarget.dec(db.resistanceTarget);
});
(0, _functionsJs.xf).reg("ui:slope-target-set", (slopeTarget, db)=>{
    db.slopeTarget = (0, _modelsJs.models).slopeTarget.set(slopeTarget);
});
(0, _functionsJs.xf).reg("ui:slope-target-inc", (_, db)=>{
    db.slopeTarget = (0, _modelsJs.models).slopeTarget.inc(db.slopeTarget);
});
(0, _functionsJs.xf).reg(`ui:slope-target-dec`, (_, db)=>{
    db.slopeTarget = (0, _modelsJs.models).slopeTarget.dec(db.slopeTarget);
});
// Profile
(0, _functionsJs.xf).reg("ui:ftp-set", (ftp, db)=>{
    db.ftp = (0, _modelsJs.models).ftp.set(ftp);
    (0, _modelsJs.models).ftp.backup(db.ftp);
});
(0, _functionsJs.xf).reg("ui:weight-set", (weight, db)=>{
    db.weight = (0, _modelsJs.models).weight.set(weight);
    (0, _modelsJs.models).weight.backup(db.weight);
});
(0, _functionsJs.xf).reg("ui:theme-switch", (_, db)=>{
    db.theme = (0, _modelsJs.models).theme.switch(db.theme);
    (0, _modelsJs.models).theme.backup(db.theme);
});
(0, _functionsJs.xf).reg("ui:measurement-switch", (_, db)=>{
    db.measurement = (0, _modelsJs.models).measurement.switch(db.measurement);
    (0, _modelsJs.models).measurement.backup(db.measurement);
});
(0, _functionsJs.xf).reg("ui:volume-mute", (_, db)=>{
    db.volume = (0, _modelsJs.models).volume.mute();
    (0, _modelsJs.models).volume.backup(db.volume);
});
(0, _functionsJs.xf).reg("ui:volume-down", (_, db)=>{
    db.volume = (0, _modelsJs.models).volume.dec(db.volume);
    (0, _modelsJs.models).volume.backup(db.volume);
});
(0, _functionsJs.xf).reg(`ui:volume-up`, (_, db)=>{
    db.volume = (0, _modelsJs.models).volume.inc(db.volume);
    (0, _modelsJs.models).volume.backup(db.volume);
});
// Workouts
(0, _functionsJs.xf).reg("workout", (workout, db)=>{
    db.workout = (0, _modelsJs.models).workout.set(workout);
});
(0, _functionsJs.xf).reg("ui:workout:select", (id, db)=>{
    db.workout = (0, _modelsJs.models).workouts.get(db.workouts, id);
});
(0, _functionsJs.xf).reg("ui:workout:remove", (id, db)=>{
    db.workouts = (0, _modelsJs.models).workouts.remove(db.workouts, id);
});
(0, _functionsJs.xf).reg("ui:workout:upload", async function(file, db) {
    const { result, name } = await (0, _modelsJs.models).workout.readFromFile(file);
    const workout = (0, _modelsJs.models).workout.parse(result, name);
    (0, _modelsJs.models).workouts.add(db.workouts, workout);
    (0, _functionsJs.xf).dispatch("db:workouts", db);
});
(0, _functionsJs.xf).reg("ui:activity:save", (_, db)=>{
    try {
        (0, _modelsJs.models).workout.save(db);
        (0, _functionsJs.xf).dispatch("activity:save:success");
    } catch (err) {
        console.error(`Error on activity save: `, err);
        (0, _functionsJs.xf).dispatch("activity:save:fail");
    }
});
(0, _functionsJs.xf).reg("activity:save:success", (e, db)=>{
    // file:download:activity
    // reset db session:
    db.records = [];
    db.events = [];
    db.laps = [];
    db.resistanceTarget = 0;
    db.slopeTarget = 0;
    db.powerTarget = 0;
});
(0, _functionsJs.xf).reg("course:index", (index, db)=>{
    db.courseIndex = index;
});
(0, _functionsJs.xf).reg("course:position", (position, db)=>{
    db.position_lat = position.position_lat;
    db.position_long = position.position_long;
});
// Wake Lock
(0, _functionsJs.xf).reg("lock:beforeunload", (e, db)=>{
    // backup session
    (0, _modelsJs.models).session.backup(db);
});
(0, _functionsJs.xf).reg("lock:release", (e, db)=>{
    // backup session
    (0, _modelsJs.models).session.backup(db);
});
// Request ANT+ Device
(0, _functionsJs.xf).reg("ui:ant:request:selected", (x, db)=>{
    db.antDeviceId = db.antSearchList.filter((d)=>{
        return d.deviceNumber === parseInt(x);
    })[0];
});
function includesDevice(devices, id) {
    return devices.filter((d)=>d.deviceNumber === id.deviceNumber).length > 0;
}
(0, _functionsJs.xf).reg(`ant:search:device-found`, (x, db)=>{
    if (includesDevice(db.antSearchList, x)) return;
    db.antSearchList.push(x);
    db.antSearchList = db.antSearchList;
});
(0, _functionsJs.xf).reg(`ant:search:stopped`, (x, db)=>{
    db.antSearchList = [];
});
// API
function SignUp() {
    const url = "http://localhost:8080/api/sign_up";
    const $form = document.querySelector("#signup--form");
    $form.addEventListener("submit", (e)=>{
        e.preventDefault();
        submit();
    });
    async function submit() {
        const formData = new FormData($form);
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });
            const result = await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}
// END API
//
(0, _functionsJs.xf).reg("app:start", async function(_, db) {
    db.ftp = (0, _modelsJs.models).ftp.set((0, _modelsJs.models).ftp.restore());
    db.weight = (0, _modelsJs.models).weight.set((0, _modelsJs.models).weight.restore());
    db.theme = (0, _modelsJs.models).theme.set((0, _modelsJs.models).theme.restore());
    db.measurement = (0, _modelsJs.models).measurement.set((0, _modelsJs.models).measurement.restore());
    db.volume = (0, _modelsJs.models).volume.set((0, _modelsJs.models).volume.restore());
    db.dataTileSwitch = (0, _modelsJs.models).dataTileSwitch.set((0, _modelsJs.models).dataTileSwitch.restore()), db.sources = (0, _modelsJs.models).sources.set((0, _modelsJs.models).sources.restore());
    // IndexedDB Schema Version 1
    // await idb.start('store', 1, ['session']);
    // IndexedDB Schema Version 2
    await (0, _idbJs.idb).start("store", 2, [
        "session",
        "workouts"
    ]);
    db.workouts = await (0, _modelsJs.models).workouts.restore();
    db.workout = (0, _modelsJs.models).workout.restore(db);
    await (0, _modelsJs.models).session.restore(db);
    (0, _functionsJs.xf).dispatch("workout:restore");
    (0, _modelsJs.models).kcal.restore(db);
    (0, _modelsJs.models).powerLap.restore(db);
    (0, _modelsJs.models).powerAvg.restore(db);
    (0, _modelsJs.models).cadenceLap.restore(db);
    (0, _modelsJs.models).cadenceAvg.restore(db);
    (0, _modelsJs.models).heartRateLap.restore(db);
    (0, _modelsJs.models).heartRateAvg.restore(db);
    const sound = (0, _soundJs.Sound)({
        volume: db.volume
    });
    sound.start();
// SignUp();
// TRAINER MOCK
// trainerMock.init();
});
function start() {
    console.log("start db");
    (0, _functionsJs.xf).dispatch("db:start");
// UI test
// setTimeout(function() {
//     xf.dispatch('watch:elapsed', 1);
//     xf.dispatch('power', 180);
//     xf.dispatch('cadence', 80);
//     xf.dispatch('heartRate', 130);
//     xf.dispatch('smo2', 83.17);
//     xf.dispatch('thb', 11.14);
//     xf.dispatch('coreBodyTemperature', 38.12);
//     xf.dispatch('skinTemperature', 38.47);
// }, 1000);
// end UI test
}
start();

},{"./functions.js":"2jd1e","./models/models.js":"hfV5L","./sound.js":"lGmhX","./storage/idb.js":"bLFOZ","./ble/enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfV5L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "models", ()=>models);
var _functionsJs = require("../functions.js");
var _utilsJs = require("../utils.js");
var _localStorageJs = require("../storage/local-storage.js");
var _idbJs = require("../storage/idb.js");
var _uuidJs = require("../storage/uuid.js");
var _workoutsJs = require("../workouts/workouts.js");
var _zwoJs = require("../workouts/zwo.js");
var _fileJs = require("../file.js");
var _physicsJs = require("../physics.js");
var _fitJs = require("../fit/fit.js");
var _enumsJs = require("../ble/enums.js");
class Model {
    constructor(args = {}){
        this.init(args);
        this.prop = args.prop;
        this.default = (0, _functionsJs.existance)(args.default, this.defaultValue());
        this.prev = args.default;
        this.set = (0, _functionsJs.existance)(args.set, this.defaultSet);
        this.parser = (0, _functionsJs.existance)(args.parser, this.defaultParse);
        this.isValid = (0, _functionsJs.existance)(args.isValid, this.defaultIsValid);
        this.onInvalid = (0, _functionsJs.existance)(args.onInvalid, this.defaultOnInvalid);
        this.storage = this.defaultStorage();
        this.postInit(args);
    }
    init() {
        return;
    }
    postInit() {
        return;
    }
    defaultValue() {
        return "";
    }
    defaultIsValid(value) {
        return (0, _functionsJs.exists)(value);
    }
    defaultSet(value) {
        const self1 = this;
        if (self1.isValid(value)) {
            self1.state = value;
            // console.log(`${this.prop} : ${this.state}`);
            return value;
        } else {
            self1.defaultOnInvalid(value);
            return self1.default;
        }
    }
    defaultParse(value) {
        return value;
    }
    defaultOnInvalid(x) {
        const self1 = this;
        console.error(`Trying to set invalid ${self1.prop}. ${typeof x}`, x);
    }
    defaultStorage() {
        const self1 = this;
        return {
            add: (x)=>x,
            restore: (_)=>self1.default
        };
    }
    backup(value) {
        const self1 = this;
        self1.storage.set(value);
    }
    restore() {
        const self1 = this;
        return self1.parser(self1.storage.restore());
    }
}
class Power extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 2500);
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        return Number.isInteger(value) && (0, _utilsJs.inRange)(self.min, self.max, value);
    }
}
class HeartRate extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 255);
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        const self1 = this;
        return Number.isInteger(value) && (0, _utilsJs.inRange)(self1.min, self1.max, value);
    }
}
class Cadence extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 255);
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        return Number.isInteger(value) && (0, _utilsJs.inRange)(self.min, self.max, value);
    }
}
class Speed extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 120);
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        return (Number.isInteger(value) || Number.isFloat(value)) && (0, _utilsJs.inRange)(self.min, self.max, value);
    }
    kmhToMps(kmh) {
        return kmh / 3.6;
    }
    mpsToKmh(mps) {
        return mps * 3.6;
    }
    mpsToMph(mps) {
        return mps * 2.23693629;
    }
    kmhToMph(kmh) {
        return kmh * 0.621371192;
    }
}
class SmO2 extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 100);
        this.zones = {
            one: 30,
            two: 70,
            three: 100
        };
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        return (0, _utilsJs.inRange)(self.min, self.max, value);
    }
}
class THb extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 400);
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        return (0, _utilsJs.inRange)(self.min, self.max, value);
    }
}
class Sources extends Model {
    postInit(args = {}) {
        const self1 = this;
        self1.state = self1.default;
        (0, _functionsJs.xf).sub("db:sources", (value)=>self1.state = value);
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue(),
            parse: JSON.parse,
            encode: JSON.stringify
        };
        self1.storage = new args.storage(storageModel);
    }
    defaultSet(target, source) {
        return Object.assign(target, source);
    }
    isSource(path, value) {
        const self1 = this;
        if ((0, _functionsJs.exists)(self1.state[path])) return (0, _functionsJs.equals)(self1.state[path], value);
        return false;
    }
    defaultValue() {
        const sources = {
            power: "ble:controllable",
            cadence: "ble:controllable",
            speed: "ble:controllable",
            control: "ble:controllable",
            heartRate: "ble:heartRateMonitor",
            smo2: "ble:smo2",
            thb: "ble:smo2",
            coreBodyTemperature: "ble:coreTemp",
            skinTemperature: "ble:coreTemp",
            virtualState: "power",
            autoPause: false
        };
        return sources;
    }
}
class Target extends Model {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 100);
        this.step = (0, _functionsJs.existance)(args.step, 1);
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        const self1 = this;
        return Number.isInteger(value) && (0, _utilsJs.inRange)(self1.min, self1.max, value);
    }
    defaultSet(value) {
        const self1 = this;
        if (isNaN(value)) {
            self1.onInvalid();
            return self1.default;
        }
        return (0, _functionsJs.clamp)(self1.min, self1.max, self1.parse(value));
    }
    parse(value) {
        return parseInt(value);
    }
    inc(value) {
        const self1 = this;
        const x = value + self1.step;
        return self1.set(x);
    }
    dec(value) {
        const self1 = this;
        const x = value - self1.step;
        return self1.set(x);
    }
}
class Volume extends Target {
    postInit(args = {}) {
        const self1 = this;
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue(),
            parse: parseInt
        };
        self1.min = (0, _functionsJs.existance)(args.min, 0);
        self1.max = (0, _functionsJs.existance)(args.max, 100);
        self1.step = (0, _functionsJs.existance)(args.max, 10);
        self1.storage = new args.storage(storageModel);
    }
    defaultValue() {
        return 0;
    }
    mute() {
        const self1 = this;
        return self1.set(self1.min);
    }
}
class PowerTarget extends Target {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 4000);
        this.step = (0, _functionsJs.existance)(args.step, 10);
    }
}
class ResistanceTarget extends Target {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, -100);
        this.max = (0, _functionsJs.existance)(args.max, 100);
        this.step = (0, _functionsJs.existance)(args.step, 10);
    }
    parse(value) {
        return parseInt(value);
    }
}
class SlopeTarget extends Target {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, -40);
        this.max = (0, _functionsJs.existance)(args.max, 40);
        this.step = (0, _functionsJs.existance)(args.step, 0.5);
    }
    defaultIsValid(value) {
        const self1 = this;
        return Number.isFloat(value) && (0, _utilsJs.inRange)(self1.min, self1.max, value);
    }
    parse(value) {
        return parseFloat(value);
    }
}
class CadenceTarget extends Target {
    postInit(args = {}) {
        this.min = (0, _functionsJs.existance)(args.min, 0);
        this.max = (0, _functionsJs.existance)(args.max, 255);
        this.step = (0, _functionsJs.existance)(args.step, 5);
    }
    parse(value) {
        return parseInt(value);
    }
}
class Mode extends Model {
    postInit(args) {
        this.state = this.defaultValue();
        this.values = Object.values((0, _enumsJs.ControlMode));
    }
    defaultValue() {
        return (0, _enumsJs.ControlMode).erg;
    }
    defaultIsValid(value) {
        return this.values.includes(value);
    }
}
class Page extends Model {
    postInit(args) {
        this.values = [
            "settings",
            "home",
            "workouts"
        ];
    }
    defaultValue() {
        return "home";
    }
    defaultIsValid(value) {
        return this.values.includes(value);
    }
}
class FTP extends Model {
    postInit(args = {}) {
        const self1 = this;
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue(),
            parse: parseInt
        };
        self1.state = self1.default;
        self1.min = (0, _functionsJs.existance)(args.min, 0);
        self1.max = (0, _functionsJs.existance)(args.max, 500);
        self1.storage = args.storage(storageModel);
        self1.zones = (0, _functionsJs.existance)(args.zones, self1.defaultZones());
        self1.percentages = (0, _functionsJs.existance)(args.percentages, self1.defaultPercentages());
        self1.minAbsValue = 9;
    }
    defaultValue() {
        return 200;
    }
    defaultIsValid(value) {
        const self1 = this;
        return Number.isInteger(value) && (0, _utilsJs.inRange)(self1.min, self1.max, value);
    }
    defaultZones() {
        return [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven"
        ];
    }
    defaultPercentages() {
        return {
            "one": 0.54,
            "two": 0.75,
            "three": 0.87,
            "four": 0.94,
            "five": 1.05,
            "six": 1.20
        };
    }
    toRelative(value, ftp) {
        const self1 = this;
        if (value > self1.minAbsValue) return (0, _functionsJs.toFixed)(value / ftp, 2);
        return value;
    }
    toAbsolute(value, ftp) {
        const self1 = this;
        if (value < self1.minAbsValue) return parseInt(value * ftp);
        return value;
    }
    powerToZone(value, ftp, zones) {
        const self1 = this;
        if (!(0, _functionsJs.exists)(ftp)) ftp = self1.state;
        if (!(0, _functionsJs.exists)(zones)) zones = self1.zones;
        let index = 0;
        let name = zones[index];
        if (value < ftp * self1.percentages.one) {
            index = 0;
            name = zones[index];
        } else if (value < ftp * self1.percentages.two) {
            index = 1;
            name = zones[index];
        } else if (value < ftp * self1.percentages.three) {
            index = 2;
            name = zones[index];
        } else if (value < ftp * self1.percentages.four) {
            index = 3;
            name = zones[index];
        } else if (value < ftp * self1.percentages.five) {
            index = 4;
            name = zones[index];
        } else if (value < ftp * self1.percentages.six) {
            index = 5;
            name = zones[index];
        } else {
            index = 6;
            name = zones[index];
        }
        return {
            name,
            index
        };
    }
    zoneToColor(zone) {
        if ((0, _functionsJs.equals)(zone, "one")) return "#636468";
        if ((0, _functionsJs.equals)(zone, "two")) return "#328AFF";
        if ((0, _functionsJs.equals)(zone, "thee")) return "#44A5AB";
        if ((0, _functionsJs.equals)(zone, "four")) return "#57C057";
        if ((0, _functionsJs.equals)(zone, "five")) return "#F8C73A";
        if ((0, _functionsJs.equals)(zone, "six")) return "#FF663A";
        if ((0, _functionsJs.equals)(zone, "seven")) return "#FE340B";
        return "#636468";
    }
    percentageToZone(value) {
        const self1 = this;
        const zones = self1.zones;
        if (value < self1.percentages.one) return zones[0];
        else if (value < self1.percentages.two) return zones[1];
        else if (value < self1.percentages.three) return zones[2];
        else if (value < self1.percentages.four) return zones[3];
        else if (value < self1.percentages.five) return zones[4];
        else if (value < self1.percentages.six) return zones[5];
        else return zones[6];
        return zones[0];
    }
}
class Weight extends Model {
    postInit(args = {}) {
        const self1 = this;
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue(),
            parse: parseInt
        };
        self1.min = (0, _functionsJs.existance)(args.min, 0);
        self1.max = (0, _functionsJs.existance)(args.max, 500);
        self1.storage = new args.storage(storageModel);
    }
    defaultValue() {
        return 75;
    }
    defaultIsValid(value) {
        const self1 = this;
        return Number.isInteger(value) && (0, _utilsJs.inRange)(self1.min, self1.max, value);
    }
}
class Theme extends Model {
    postInit(args = {}) {
        const self1 = this;
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue()
        };
        self1.storage = new args.storage(storageModel);
        self1.values = [
            "dark",
            "light"
        ];
    }
    defaultValue() {
        return "dark";
    }
    defaultIsValid(value) {
        return this.values.includes(value);
    }
    switch(theme) {
        const self1 = this;
        if ((0, _functionsJs.equals)(theme, (0, _functionsJs.first)(self1.values))) return (0, _functionsJs.second)(self1.values);
        if ((0, _functionsJs.equals)(theme, (0, _functionsJs.second)(self1.values))) return (0, _functionsJs.first)(self1.values);
        self1.onInvalid(theme);
        return self1.default;
    }
}
class Measurement extends Model {
    postInit(args = {}) {
        const self1 = this;
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue()
        };
        self1.storage = new args.storage(storageModel);
        self1.values = [
            "metric",
            "imperial"
        ];
    }
    defaultValue() {
        return "metric";
    }
    defaultIsValid(value) {
        return this.values.includes(value);
    }
    switch(theme) {
        const self1 = this;
        if ((0, _functionsJs.equals)(theme, (0, _functionsJs.first)(self1.values))) return (0, _functionsJs.second)(self1.values);
        if ((0, _functionsJs.equals)(theme, (0, _functionsJs.second)(self1.values))) return (0, _functionsJs.first)(self1.values);
        self1.onInvalid(theme);
        return self1.default;
    }
}
class DataTileSwitch extends Model {
    postInit(args = {}) {
        const self1 = this;
        const storageModel = {
            key: self1.prop,
            fallback: self1.defaultValue()
        };
        self1.storage = new args.storage(storageModel);
        this.values = [
            0,
            1,
            2
        ];
    }
    defaultValue() {
        return 0;
    }
    defaultIsValid(value) {
        return this.values.includes(value);
    }
    defaultParse(value) {
        return parseInt(value);
    }
}
class Workout extends Model {
    postInit(args) {
        const self1 = this;
    }
    defaultValue() {
        return this.parse((0, _functionsJs.first)((0, _workoutsJs.workouts)));
    }
    defaultIsValid(value) {
        return (0, _functionsJs.exists)(value);
    }
    restore(db) {
        return (0, _functionsJs.first)(db.workouts);
    }
    async readFromFile(file) {
        const result = await (0, _fileJs.fileHandler).read(file);
        return {
            result,
            name: file.name
        };
    }
    parse(result, name = "") {
        if ((0, _functionsJs.isArray)(result) || (0, _functionsJs.isObject)(result)) {
            const view = new DataView(result);
            const courseJS = (0, _fitJs.fit).localCourse.decode(view, name);
            console.log(courseJS);
            return courseJS;
        }
        return (0, _zwoJs.zwo).readToInterval(result);
    }
    fileName() {
        const self1 = this;
        const now = new Date();
        return `workout-${(0, _utilsJs.dateToDashString)(now)}.fit`;
    }
    toFitRecords(db) {
        return db.records;
    }
    toFitLaps(db) {
        return db.laps;
    }
    toFitEvents(db) {
        return db.events;
    }
    encode(db) {
        const self1 = this;
        const records = self1.toFitRecords(db);
        const laps = self1.toFitLaps(db);
        const events = self1.toFitEvents(db);
        return (0, _fitJs.fit).localActivity.encode({
            records,
            laps,
            events
        });
    }
    download(activity) {
        const self1 = this;
        const blob = new Blob([
            activity
        ], {
            type: "application/octet-stream"
        });
        (0, _fileJs.fileHandler).saveFile()(blob, self1.fileName());
    }
    save(db) {
        const self1 = this;
        self1.download(self1.encode(db));
    }
}
class Workouts extends Model {
    name = "workouts";
    init(args) {
        const self1 = this;
        self1.workoutModel = args.workoutModel;
    }
    postInit(args) {
        const self1 = this;
    }
    defaultValue() {
        const self1 = this;
        return (0, _workoutsJs.workouts).map((w)=>Object.assign(self1.workoutModel.parse(w), {
                id: (0, _uuidJs.uuid)()
            }));
    }
    defaultIsValid(value) {
        const self1 = this;
        return (0, _functionsJs.exists)(value);
    }
    async restore(db) {
        const self1 = this;
        const workouts = await (0, _idbJs.idb).getAll(`${self1.name}`) ?? [];
        if ((0, _functionsJs.empty)(workouts)) return self1.default;
        else return self1.default.concat(workouts);
    }
    get(workouts, id) {
        for (let workout of workouts){
            if ((0, _functionsJs.equals)(workout.id, id)) return workout;
        }
        console.error(`tring to get a missing workout: ${id}`, workouts);
        return (0, _functionsJs.first)(workouts);
    }
    add(workouts, workout) {
        const self1 = this;
        workouts.push(Object.assign(workout, {
            id: (0, _uuidJs.uuid)()
        }));
        self1.save(workout);
        return workouts;
    }
    save(workout) {
        const self1 = this;
        console.log(`:models :workouts :save`);
        (0, _idbJs.idb).put(self1.name, (0, _idbJs.idb).setId(workout));
    }
    remove(workouts, id) {
        const self1 = this;
        if (!(0, _functionsJs.exists)(id)) {
            console.error(`:models :workouts :remove 'called without workout id!'`);
            return workouts;
        }
        if ((0, _functionsJs.empty)(workout)) {
            console.error(`:models :workouts :remove 'called with empty id!'`);
            return workouts;
        }
        (0, _idbJs.idb).remove(self1.name, id);
        return workouts.filter((w)=>w.id !== id);
    }
}
function Session(args = {}) {
    let name = "session";
    function backup(db) {
        (0, _idbJs.idb).put("session", (0, _idbJs.idb).setId(dbToSession(db), 0));
    }
    async function restore(db) {
        const sessions = await (0, _idbJs.idb).getAll(`${name}`);
        (0, _functionsJs.xf).dispatch(`${name}:restore`, sessions);
        console.log(`:idb :restore '${name}' :length ${sessions.length}`);
        let session = (0, _functionsJs.last)(sessions);
        if (!(0, _functionsJs.empty)(sessions)) {
            if (session.elapsed > 0) sessionToDb(db, session);
            else (0, _idbJs.idb).clear(`${name}`);
        }
    }
    function sessionToDb(db, session) {
        return Object.assign(db, session);
    }
    function dbToSession(db) {
        const session = {
            // Watch
            elapsed: db.elapsed,
            lapTime: db.lapTime,
            stepTime: db.stepTime,
            intervalIndex: db.intervalIndex,
            stepIndex: db.stepIndex,
            intervalDuration: db.intervalDuration,
            stepDuration: db.stepDuration,
            lapStartTime: db.lapStartTime,
            watchStatus: db.watchStatus,
            workoutStatus: db.workoutStatus,
            // Course
            courseIndex: db.courseIndex,
            speedVirtual: db.speedVirtual,
            speed: db.speed,
            // Recording
            records: db.records,
            laps: db.laps,
            events: db.events,
            lap: db.lap,
            distance: db.distance,
            altitude: db.altitude,
            position_lat: db.position_lat,
            position_long: db.position_long,
            // Avg State
            kcal: db.kcal,
            powerLap: db.powerLap,
            cadenceLap: db.cadenceLap,
            heartRateLap: db.heartRateLap,
            powerAvg: db.powerAvg,
            cadenceAvg: db.cadenceAvg,
            heartRateAvg: db.heartRateAvg,
            powerLapCount: db.powerLapCount,
            cadenceLapCount: db.cadenceLapCount,
            heartRateLapCount: db.heartRateLapCount,
            powerAvgCount: db.powerAvgCount,
            cadenceAvgCount: db.cadenceAvgCount,
            heartRateAvgCount: db.heartRateAvgCount,
            // Report
            powerInZone: db.powerInZone,
            // Workouts
            workout: db.workout,
            mode: db.mode,
            page: db.page,
            // Targets
            powerTarget: db.powerTarget,
            resistanceTarget: db.resistanceTarget,
            slopeTarget: db.slopeTarget,
            // sources: db.sources,
            // UI options
            powerSmoothing: db.powerSmoothing,
            librarySwitch: db.librarySwitch
        };
        return session;
    }
    return Object.freeze({
        backup,
        restore,
        sessionToDb,
        dbToSession
    });
}
class MetaProp {
    constructor(args = {}){
        const self1 = this;
        this.init(args);
        this.prop = args.prop ?? this.getDefaults().prop;
        this.disabled = args.default ?? this.getDefaults().disabled;
        this.default = args.default ?? this.getDefaults().default;
        this.state = args.state ?? this.default;
        this.name = args.name ?? `meta-prop`;
        this.propName = self1.toCamelCase(args.name) ?? `metaProp`;
        this.postInit(args);
        this.start();
    }
    init(args) {
        return args;
    }
    postInit(args = {}) {
        return args;
    }
    getPropValue(propValue) {
        return propValue;
    }
    getState() {
        return this.format(this.state);
    }
    setState(propValue) {
        return this.updateState(propValue);
    }
    format(state) {
        return state;
    }
    start() {
        this.subs();
    }
    stop() {
        this.unsubs();
    }
    toCamelCase(str) {
        if ((0, _functionsJs.exists)(str)) return str.replace(/-([a-z])/g, function(g) {
            return g[1].toUpperCase();
        });
        return str;
    }
    subs() {
        const self1 = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self1.abortController.signal
        };
        this.subsConfig();
    }
    subsConfig() {
        return;
    }
    unsubs() {
        this.abortController.abort();
    }
    onUpdate(propValue) {
        if (this.shouldUpdate(propValue)) this.updateState(propValue);
    }
    shouldUpdate() {
        return true;
    }
    updateState(value) {
        this.state = value;
        return this.state;
    }
}
class PropAccumulator extends MetaProp {
    postInit(args = {}) {
        this.event = args.event ?? this.getDefaults().event;
        this.count = this.getDefaults().count;
        this.prev = this.getDefaults().prev;
    }
    getDefaults() {
        return {
            value: 0,
            prev: 0,
            default: 0,
            disabled: false,
            prop: "",
            event: "",
            prev: 0,
            count: 0
        };
    }
    format(state) {
        return Math.round(state);
    }
    reset() {
        this.count = 0;
    }
    subsConfig() {
        if (!(0, _functionsJs.equals)(this.prop, "")) (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        if (!(0, _functionsJs.equals)(this.event, "")) (0, _functionsJs.xf).sub(`${this.event}`, this.onEvent.bind(this), this.signal);
    }
    updateState(value) {
        if (this.state === 0 && value === 0) this.state = 0;
        else if (value === 0) return this.state;
        else {
            this.count += 1;
            const value_c = value;
            const value_p = this.prev;
            const count_c = this.count;
            const count_p = this.count - 1;
            this.state = (0, _functionsJs.mavg)(value_c, value_p, count_c, count_p);
            this.prev = this.state;
        }
        return this.state;
    }
    onEvent() {
        this.reset();
    }
    restore(db) {
        this.count = db[this.propName + "Count"] ?? this.count;
        this.state = db[this.propName] ?? this.state;
        this.prev = db[this.propName] ?? this.prev;
    }
}
class KcalAccumulator extends PropAccumulator {
    updateState(power) {
        this.state = this.state + power * 0.001;
        return this.state;
    }
}
const powerLap = new PropAccumulator({
    event: "watch:lap",
    name: "power-lap"
});
const powerAvg = new PropAccumulator({
    event: "watch:stopped",
    name: "power-avg"
});
const kcal = new KcalAccumulator({
    event: "watch:stopped",
    name: "kcal"
});
const cadenceLap = new PropAccumulator({
    event: "watch:lap",
    name: "cadence-lap"
});
const cadenceAvg = new PropAccumulator({
    event: "watch:stopped",
    name: "cadence-avg"
});
const heartRateLap = new PropAccumulator({
    event: "watch:lap",
    name: "heart-rate-lap"
});
const heartRateAvg = new PropAccumulator({
    event: "watch:stopped",
    name: "heart-rate-avg"
});
class PropInterval {
    constructor(args = {}){
        const self1 = this;
        this.default = (0, _functionsJs.existance)(args.default, this.getDefaults().default);
        this.state = (0, _functionsJs.existance)(args.state, this.getDefaults().default);
        this.accumulator = (0, _functionsJs.existance)(args.accumulator, this.getDefaults().accumulator);
        this.count = (0, _functionsJs.existance)(args.count, this.getDefaults().count);
        this.prop = (0, _functionsJs.existance)(args.prop, this.getDefaults().prop);
        this.effect = (0, _functionsJs.existance)(args.effect, this.getDefaults().effect);
        this.interval = (0, _functionsJs.existance)(args.interval, this.getDefaults().interval);
        this.start();
    }
    getDefaults() {
        const self1 = this;
        return {
            default: 0,
            accumulator: 0,
            count: 0,
            interval: 1000,
            prop: "",
            effect: ""
        };
    }
    start() {
        this.subs();
        this.intervalId = setInterval(this.onInterval.bind(this), this.interval);
    }
    stop() {
        clearInterval(this.intervalId);
        this.unsubs();
    }
    reset() {
        this.accumulator = 0;
        this.count = 0;
    }
    subs() {
        const self1 = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self1.abortController.signal
        };
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    unsubs() {
        this.abortController.abort();
    }
    onUpdate(propValue) {
        this.accumulator += propValue;
        this.count += 1;
    }
    onInterval() {
        if ((0, _functionsJs.equals)(this.count, 0)) return;
        this.state = this.accumulator / this.count;
        (0, _functionsJs.xf).dispatch(`${this.effect}`, this.state);
        this.reset();
    }
}
class PowerInZone {
    constructor(args = {}){
        const self1 = this;
        this.ftpModel = (0, _functionsJs.existance)(args.ftpModel);
        this.default = (0, _functionsJs.existance)(args.default, this.getDefaults().default);
        this.count = (0, _functionsJs.existance)(args.count, this.getDefaults().count);
        this.weights = (0, _functionsJs.existance)(args.weights, this.getDefaults().weights);
        this.state = (0, _functionsJs.existance)(args.state, this.getDefaults().default);
        this.prop = (0, _functionsJs.existance)(args.prop, this.getDefaults().prop);
        this.start();
    }
    getDefaults() {
        const self1 = this;
        const value = self1.ftpModel.zones.map((x)=>[
                0,
                0
            ]);
        const weights = self1.ftpModel.zones.map((x)=>0);
        return {
            default: value,
            weights: weights,
            count: 0,
            prop: "db:elapsed"
        };
    }
    start() {
        this.subs();
    }
    stop() {
        this.unsubs();
    }
    subs() {
        const self1 = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self1.abortController.signal
        };
        (0, _functionsJs.xf).reg(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    unsubs() {
        this.abortController.abort();
    }
    onUpdate(propValue, db) {
        this.updateState(db.power);
    }
    powerToZone(power) {
        return this.ftpModel.powerToZone(power);
    }
    updateState(value) {
        if ((0, _functionsJs.equals)(value, 0)) return this.state;
        const zone = this.powerToZone(value);
        this.count += 1;
        this.weights[zone.index] += 1;
        for(let i = 0; i < this.state.length; i++)if (!(0, _functionsJs.equals)(this.weights[i], 0)) this.state[i] = [
            this.weights[i] / this.count,
            this.weights[i]
        ];
        (0, _functionsJs.xf).dispatch("powerInZone", this.state);
        return this.state;
    }
}
class VirtualState extends MetaProp {
    postInit() {
        this.speed = this.getDefaults().speed;
        this.altitude = this.getDefaults().altitude;
        this.distance = this.getDefaults().distance;
        this.ascent = this.getDefaults().ascent;
        this.slope = this.getDefaults().slope;
        this.riderWeight = this.getDefaults().riderWeight;
        this.equipmentWeight = this.getDefaults().equipmentWeight;
        this.mass = this.getDefaults().mass;
        this.source = this.getDefaults().source;
        this.cycling = (0, _physicsJs.Model)({
            rho: 1.275,
            dragCoefficient: 0.88,
            // 1.0, 0.88
            frontalArea: 0.36,
            // 0.4, 0.36
            CdA: 0.3168 // 0.4, 0.3168
        });
        this.lastUpdate = undefined;
    }
    getDefaults() {
        return {
            riderWeight: 75,
            equipmentWeight: 10,
            mass: 85,
            slope: 0.00,
            speed: 0,
            altitude: 0,
            distance: 0,
            ascent: 0,
            prop: "power",
            source: "power",
            disabled: false,
            default: 0
        };
    }
    subs() {
        (0, _functionsJs.xf).reg(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:sources`, this.onSources.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:weight`, this.onWeight.bind(this), this.signal);
        (0, _functionsJs.xf).sub("watch:started", this.onStarted.bind(this), this.signal);
    }
    onSources(sources) {
        if (!(0, _functionsJs.equals)(this.source, sources.virtualState)) this.lastUpdate = Date.now();
        this.source = sources.virtualState;
    }
    onWeight(weight) {
        this.riderWeight = weight;
        this.systemWeight = this.riderWeight + this.equipmentWeight;
    }
    onStarted() {
        this.lastUpdate = Date.now();
    }
    onUpdate(power, db) {
        if (!(0, _functionsJs.equals)(this.source, this.prop)) return;
        // Take into acount the pauses
        const now = Date.now();
        const dt = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        if ((0, _functionsJs.equals)(dt, 0)) {
            console.warn(`dt: ${dt}, s: ${this.speed}`);
            return;
        }
        const { speed, distance, altitude, ascent } = this.cycling.virtualSpeedCF({
            power: db.power,
            slope: db.slopeTarget / 100,
            distance: db.distance,
            altitude: db.altitude,
            ascent: db.ascent,
            mass: this.mass,
            speed: this.speed,
            dt: isNaN(dt) ? 1 / 4 : dt
        });
        this.speed = speed;
        // xf.dispatch('speedVirtual', (speed * 3.6));
        (0, _functionsJs.xf).dispatch("speedVirtual", speed);
        (0, _functionsJs.xf).dispatch("distance", distance);
        (0, _functionsJs.xf).dispatch("altitude", altitude);
        (0, _functionsJs.xf).dispatch("ascent", ascent);
    }
}
class SpeedState extends VirtualState {
    getDefaults() {
        return {
            prop: "speed",
            source: "power",
            disabled: false,
            default: 0,
            riderWeight: 75,
            equipmentWeight: 10,
            mass: 85,
            slope: 0.00,
            speed: 0,
            altitude: 0,
            distance: 0
        };
    }
    onUpdate(speed, db) {
        if (!(0, _functionsJs.equals)(this.source, this.prop)) return;
        const now = Date.now();
        const dt = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;
        const { distance, altitude, ascent } = this.cycling.trainerSpeed({
            slope: db.slopeTarget / 100,
            // speed:     db.speed / 3.6,
            speed: db.speed,
            distance: db.distance,
            altitude: db.altitude,
            ascent: db.ascent,
            speedPrev: this.speedPrev,
            mass: this.mass,
            dt: isNaN(dt) ? 1 / 4 : dt
        });
        // this.speedPrev = speed / 3.6;
        this.speedPrev = speed;
        (0, _functionsJs.xf).dispatch("distance", distance);
        (0, _functionsJs.xf).dispatch("altitude", altitude);
        (0, _functionsJs.xf).dispatch("ascent", ascent);
    }
}
class TSS {
}
const power = new Power({
    prop: "power"
});
const cadence = new Cadence({
    prop: "cadence"
});
const heartRate = new HeartRate({
    prop: "heartRate"
});
const speed = new Speed({
    prop: "speed"
});
const smo2 = new SmO2({
    prop: "smo2"
});
const thb = new THb({
    prop: "thb"
});
const sources = new Sources({
    prop: "sources",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const virtualState = new VirtualState();
const speedState = new SpeedState();
const powerTarget = new PowerTarget({
    prop: "powerTarget"
});
const resistanceTarget = new ResistanceTarget({
    prop: "resistanceTarget"
});
const slopeTarget = new SlopeTarget({
    prop: "slopeTarget"
});
const cadenceTarget = new CadenceTarget({
    prop: "cadenceTarget"
});
const mode = new Mode({
    prop: "mode"
});
const page = new Page({
    prop: "page"
});
const ftp = new FTP({
    prop: "ftp",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const weight = new Weight({
    prop: "weight",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const theme = new Theme({
    prop: "theme",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const volume = new Volume({
    prop: "volume",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const measurement = new Measurement({
    prop: "measurement",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const dataTileSwitch = new DataTileSwitch({
    prop: "dataTileSwitch",
    storage: (0, _localStorageJs.LocalStorageItem)
});
const power1s = new PropInterval({
    prop: "db:power",
    effect: "power1s",
    interval: 1000
});
const powerInZone = new PowerInZone({
    ftpModel: ftp
});
const workout = new Workout({
    prop: "workout"
});
const workouts = new Workouts({
    prop: "workouts",
    workoutModel: workout
});
const session = Session();
let models = {
    power,
    heartRate,
    cadence,
    speed,
    smo2,
    thb,
    sources,
    virtualState,
    power1s,
    powerLap,
    powerAvg,
    powerInZone,
    kcal,
    heartRateLap,
    heartRateAvg,
    cadenceLap,
    cadenceAvg,
    powerTarget,
    resistanceTarget,
    slopeTarget,
    cadenceTarget,
    mode,
    page,
    ftp,
    weight,
    volume,
    theme,
    measurement,
    dataTileSwitch,
    workout,
    workouts,
    session,
    PropInterval
};

},{"../functions.js":"2jd1e","../utils.js":"en4he","../storage/local-storage.js":"gmm6Z","../storage/idb.js":"bLFOZ","../storage/uuid.js":"ekQgg","../workouts/workouts.js":"79kqA","../workouts/zwo.js":"iXLon","../file.js":"lPvDV","../physics.js":"c8E3Z","../fit/fit.js":"jRVXT","../ble/enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatTime", ()=>// format
    formatTime);
parcelHelpers.export(exports, "dateToDashString", ()=>dateToDashString);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "kphToMps", ()=>kphToMps);
parcelHelpers.export(exports, "mpsToKph", ()=>mpsToKph);
parcelHelpers.export(exports, "time", ()=>time);
parcelHelpers.export(exports, "backoff", ()=>// async
    backoff);
parcelHelpers.export(exports, "digits", ()=>// math
    digits);
parcelHelpers.export(exports, "rand", ()=>rand);
parcelHelpers.export(exports, "gte", ()=>gte);
parcelHelpers.export(exports, "lte", ()=>lte);
parcelHelpers.export(exports, "gt", ()=>gt);
parcelHelpers.export(exports, "lt", ()=>lt);
parcelHelpers.export(exports, "inRange", ()=>inRange);
parcelHelpers.export(exports, "divisors", ()=>divisors);
parcelHelpers.export(exports, "translate", ()=>// graph
    translate);
parcelHelpers.export(exports, "hexColorToArray", ()=>hexColorToArray);
parcelHelpers.export(exports, "arrayToHexColor", ()=>arrayToHexColor);
parcelHelpers.export(exports, "avgColor", ()=>avgColor);
parcelHelpers.export(exports, "hex", ()=>// WebBLE
    hex);
parcelHelpers.export(exports, "toFitTimestamp", ()=>// ANT+ and .FIT
    toFitTimestamp);
parcelHelpers.export(exports, "toJsTimestamp", ()=>toJsTimestamp);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "timeDiff", ()=>timeDiff);
parcelHelpers.export(exports, "toFitSpeed", ()=>toFitSpeed);
parcelHelpers.export(exports, "toFitDistance", ()=>toFitDistance);
parcelHelpers.export(exports, "splitAt", ()=>splitAt);
parcelHelpers.export(exports, "calculateCRC", ()=>calculateCRC);
parcelHelpers.export(exports, "typeToAccessor", ()=>typeToAccessor);
var _functionsJs = require("./functions.js");
// format
function formatTime(args = {}) {
    const defaults = {
        unit: "seconds",
        format: "hh:mm:ss"
    };
    const value = args.value;
    const format = (0, _functionsJs.existance)(args.format, defaults.format);
    const unit = (0, _functionsJs.existance)(args.unit, defaults.unit);
    if ((0, _functionsJs.equals)(unit, "seconds")) {
        let hour = Math.floor(value / 3600);
        let min = Math.floor(value % 3600 / 60);
        let sec = value % 60;
        let sD = sec < 10 ? `0${sec}` : `${sec}`;
        let mD = min < 10 ? `0${min}` : `${min}`;
        let hD = hour < 10 ? `0${hour}` : `${hour}`;
        let hDs = hour < 10 ? `${hour}` : `${hour}`;
        let res = ``;
        if ((0, _functionsJs.equals)(format, "hh:mm:ss")) res = `${hD}:${mD}:${sD}`;
        if ((0, _functionsJs.equals)(format, "mm:ss")) {
            if (value < 3600) res = `${mD}:${sD}`;
            else res = `${hD}:${mD}:${sD}`;
        }
        return res;
    }
    return value;
}
function dateToDashString(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return `${day}-${month}-${year}-at-${hour}-${minute}h`;
}
function time() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const milliseconds = date.getSeconds().toString().padStart(4, "0");
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function format(x, precision = 1000) {
    return Math.round(x * precision) / precision;
}
function kphToMps(kph) {
    return format(kph / 3.6);
}
function mpsToKph(mps) {
    return 3.6 * mps;
}
// Async
// var res = await backoff({max: 4, wait: 1000, fn: maybeFailOp, msg: 'debug'});
// needs a way to be canceled
async function backoff(args = {}) {
    const defaults = {
        max: 1,
        wait: 1000,
        rate: (x)=>x * 1,
        success: (x)=>x,
        fail: (x)=>x
    };
    const max = (0, _functionsJs.existance)(args.max, defaults.max);
    const wait = (0, _functionsJs.existance)(args.wait, defaults.wait);
    const fn = (0, _functionsJs.existance)(args.fn);
    const success = (0, _functionsJs.existance)(args.success, defaults.success);
    const fail = (0, _functionsJs.existance)(args.fail, defaults.fail);
    const rate = (0, _functionsJs.existance)(args.rate, defaults.rate);
    const msg = args.msg;
    async function recur(max, wait, fn, success, fail, msg) {
        try {
            const result = await fn(max);
            return success(result);
        } catch (e) {
            if (max <= 0) return fail(e);
            if ((0, _functionsJs.exists)(msg)) console.log(`:retry :${msg} :in ${rate(wait)} :left ${max}`);
            await delay(wait);
            return recur(max - 1, rate(wait), fn, success, fail, msg);
        }
    }
    return await recur(max, wait, fn, success, fail, msg);
}
// Math
const bod = Math.pow(2, 31) / 180;
const dob = 180 / Math.pow(2, 31);
function degToSemicircles(degrees) {
    return degrees * bod;
}
function semicirclesToDeg(semicircles) {
    return semicircles * dob;
}
function digits(n) {
    return Math.log(n) * Math.LOG10E + 1 | 0;
}
function rand(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function gte(a, b) {
    return a >= b;
}
function lte(a, b) {
    return a <= b;
}
function gt(a, b) {
    return a > b;
}
function lt(a, b) {
    return a < b;
}
function inRange(min, max, value, lb = gte, ub = lte) {
    return lb(value, min) && ub(value, max);
}
function divisors(number) {
    let divisors = [
        1
    ];
    for(let i = 2; i < number / 2; i++)if (number % i === 0) divisors.push(i);
    return divisors;
}
// end Math
// Graphs
function translate(value, leftMin, leftMax, rightMin, rightMax) {
    const leftSpan = leftMax - leftMin;
    const rightSpan = rightMax - rightMin;
    const valueScaled = (value - leftMin) / leftSpan;
    return rightMin + valueScaled * rightSpan;
}
function hexColorToArray(hex) {
    return hex.replace("#", "").match(/.{1,2}/g).map((x)=>parseInt(x, 16));
}
function arrayToHexColor(arr) {
    return "#" + arr.map((x)=>x.toString(16).toUpperCase()).join("");
}
function avgColor(hex1, hex2) {
    const color1 = hexColorToArray(hex1);
    const color2 = hexColorToArray(hex2);
    const color = color1.map((channel, i)=>parseInt((channel + color2[i]) / 2));
    return arrayToHexColor(color);
}
// end Graphs
// WebBLE
function hex(n) {
    let h = parseInt(n).toString(16).toUpperCase();
    if (h.length === 1) h = "0" + h;
    return "0x" + h;
}
// end WebBLE
// ANT+ and .FIT
const garmin_epoch = Date.parse("31 Dec 1989 00:00:00 GMT");
function toFitTimestamp(timestamp) {
    return Math.round((timestamp - garmin_epoch) / 1000);
}
function toJsTimestamp(fitTimestamp) {
    return fitTimestamp * 1000 + garmin_epoch;
}
function now() {
    return toFitTimestamp(Date.now());
}
function timeDiff(timestamp1, timestamp2) {
    let difference = timestamp1 / 1000 - timestamp2 / 1000;
    return Math.round(Math.abs(difference));
}
function toFitSpeed(speed, unit = "kph") {
    const scale = 1000;
    if (unit === "kph") return parseInt(speed / 3.6 * scale, 10);
    return speed;
}
function toFitDistance(distance, unit = "km") {
    const scale = 100;
    if (unit === "km") return parseInt(distance * 1000 * scale, 10);
    return distance;
}
function splitAt(xs, at) {
    if (!(0, _functionsJs.isArray)(xs)) throw new Error(`splitAt takes an array: ${xs}`);
    let i = -1;
    return xs.reduce((acc, x)=>{
        if ((0, _functionsJs.equals)(x, at) || (0, _functionsJs.equals)(acc.length, 0) && !(0, _functionsJs.equals)(x, at)) {
            acc.push([
                x
            ]);
            i++;
        } else acc[i].push(x);
        return acc;
    }, []);
}
function calculateCRC(uint8array, start, end) {
    const crcTable = [
        0x0000,
        0xCC01,
        0xD801,
        0x1400,
        0xF001,
        0x3C00,
        0x2800,
        0xE401,
        0xA001,
        0x6C00,
        0x7800,
        0xB401,
        0x5000,
        0x9C01,
        0x8801,
        0x4400
    ];
    let crc = 0;
    for(let i = start; i < end; i++){
        const byte = uint8array[i];
        let tmp = crcTable[crc & 0xF];
        crc = crc >> 4 & 0x0FFF;
        crc = crc ^ tmp ^ crcTable[byte & 0xF];
        tmp = crcTable[crc & 0xF];
        crc = crc >> 4 & 0x0FFF;
        crc = crc ^ tmp ^ crcTable[byte >> 4 & 0xF];
    }
    return crc;
}
function typeToAccessor(basetype, method = "set") {
    const uint8 = [
        0,
        2,
        7,
        10,
        13,
        "enum",
        "uint8",
        "string",
        "byte"
    ];
    const uint16 = [
        132,
        139,
        "uint16",
        "uint16z"
    ];
    const uint32 = [
        134,
        140,
        "uint32",
        "uint32z"
    ];
    const uint64 = [
        143,
        144,
        "uint64",
        "uint64z"
    ];
    const int8 = [
        1,
        "sint8"
    ];
    const int16 = [
        131,
        "sint16"
    ];
    const int32 = [
        133,
        "sint32"
    ];
    const int64 = [
        142,
        "sint64"
    ];
    const float32 = [
        136,
        "float32"
    ];
    const float64 = [
        137,
        "float64"
    ];
    if (uint8.includes(basetype)) return `${method}Uint8`;
    if (uint16.includes(basetype)) return `${method}Uint16`;
    if (uint32.includes(basetype)) return `${method}Uint32`;
    if (uint64.includes(basetype)) return `${method}Uint64`;
    if (int8.includes(basetype)) return `${method}Int8`;
    if (int16.includes(basetype)) return `${method}Int16`;
    if (int32.includes(basetype)) return `${method}Int32`;
    if (int64.includes(basetype)) return `${method}Int64`;
    if (float32.includes(basetype)) return `${method}Float32`;
    if (float64.includes(basetype)) return `${method}Float64`;
    return `${method}Uint8`;
}

},{"./functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmm6Z":[function(require,module,exports) {
//
// LocalStorageItem
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalStorageItem", ()=>LocalStorageItem);
var _functionsJs = require("../functions.js");
function LocalStorageItem(args = {}) {
    const defaults = {
        fallback: "",
        isValid: function(v) {
            return (0, _functionsJs.exists)(v);
        },
        parse: function(str) {
            return str;
        },
        encode: function(str) {
            return str;
        }
    };
    let key = args.key;
    let fallback = (0, _functionsJs.existance)(args.fallback, defaults.fallback);
    let isValid = (0, _functionsJs.existance)(args.isValid, defaults.isValid);
    let parse = (0, _functionsJs.existance)(args.parse, defaults.parse);
    let encode = (0, _functionsJs.existance)(args.encode, defaults.encode);
    if (!(0, _functionsJs.exists)(key)) throw new Error("LocalStorageItem needs a key!");
    function restore() {
        const inStorageValue = get();
        if ((0, _functionsJs.equals)(inStorageValue, fallback)) set(fallback);
        return get();
    }
    function get() {
        const value = window.localStorage.getItem(`${key}`);
        if (!(0, _functionsJs.exists)(value)) {
            console.warn(`Trying to get non-existing value from Local Storage at key ${key}!`);
            return fallback;
        }
        return parse(value);
    }
    function set(value) {
        if (isValid(value)) {
            window.localStorage.setItem(`${key}`, encode(value));
            return value;
        } else {
            console.warn(`Trying to enter invalid ${key} value in Local Storage: ${typeof value}`, value);
            window.localStorage.setItem(`${key}`, fallback);
            return fallback;
        }
    }
    function remove() {
        window.localStorage.removeItem(`${key}`);
    }
    return Object.freeze({
        restore,
        get,
        set,
        remove
    });
}

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLFOZ":[function(require,module,exports) {
//
// IDB
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "idb", ()=>idb);
var _functionsJs = require("../functions.js");
var _uuidJs = require("./uuid.js");
function promisify(request) {
    return new Promise((resolve, reject)=>{
        request.onsuccess = function(event) {
            return resolve(request.result);
        };
        request.onerror = function(event) {
            return reject(request.error);
        };
    });
}
function IDB(args = {}) {
    let db;
    function setDB(idb) {
        db = idb;
    }
    async function start(database = "", version = 1, stores = []) {
        if (!(0, _functionsJs.exists)(database)) throw new Error(`:idb idb.start() needs database name!`);
        if ((0, _functionsJs.empty)(database)) throw new Error(`:idb idb.start() called with empty name!`);
        await open(database, version, stores);
    }
    function open(name, version, storeNames) {
        console.log(`:idb :open :db '${name}' :store-name '${storeNames}' ...`);
        let openReq = window.indexedDB.open(name, version);
        return new Promise((resolve, reject)=>{
            openReq.onupgradeneeded = function(e) {
                setDB(openReq.result);
                console.log(`:idb :version ${db.version}`);
                switch(e.oldVersion){
                    // switch(db.version) {
                    case 0:
                        createStores(storeNames);
                    case 1:
                        update(storeNames);
                    case 2:
                        latest(storeNames);
                }
            };
            openReq.onerror = function() {
                console.error(`:idb :error :open :db '${name}'`, openReq.error);
                return reject(openReq.error);
            };
            openReq.onsuccess = function() {
                setDB(openReq.result);
                console.log(`:idb :version ${db.version}`);
                return resolve(openReq.result);
            };
        });
    }
    function deleteStore(name) {
        let deleteReq = db.deleteObjectStore(name);
        return promisify(deleteReq).then((res)=>{
            console.log(`:idb :delete-store '${name}'`);
            return res;
        }).catch((err)=>{
            console.error(`:idb :error :delete-store '${name}'`, err);
            return {};
        });
    }
    function createStore(name, keyPath = "id") {
        if (!db.objectStoreNames.contains(name)) {
            db.createObjectStore(name, {
                keyPath: keyPath
            });
            console.log(`:idb :create-store '${name}'`);
        } else console.warn(`:idb :error :createStore 'trying to create store with existing name: ${name}'`);
    }
    function createStores(storeNames, keyPaths = []) {
        storeNames.forEach((storeName, i)=>{
            createStore(storeName, (0, _functionsJs.existance)(keyPaths[i], "id"));
        });
    }
    async function update(storeNames) {
        console.log(`:idb :update :stores ${storeNames}`);
        // create IndexedDB > db > session, workouts
        await createStores(storeNames);
    }
    function latest(storeNames) {
        console.log(`:idb :latest :stores ${storeNames}`);
    }
    function transaction(storeName, method, param, type = "readonly") {
        if (!db.objectStoreNames.contains(storeName)) return undefined;
        let transaction = db.transaction(storeName, type);
        let store = transaction.objectStore(storeName);
        let req;
        if (param === undefined) req = store[method]();
        else req = store[method](param);
        return promisify(req).then((res)=>{
            console.log(`:idb :${method} :store '${storeName}' :success`);
            return res;
        }).catch((err)=>{
            console.error(`:idb :error :${method} :store '${storeName}'`, err);
            return [];
        });
    }
    function add(storeName, item) {
        return transaction(storeName, "add", item, "readwrite");
    }
    function put(storeName, item) {
        return transaction(storeName, "put", item, "readwrite");
    }
    function get(storeName, key) {
        return transaction(storeName, "get", key, "readonly");
    }
    function getAll(storeName) {
        return transaction(storeName, "getAll", undefined, "readonly");
    }
    function remove(storeName, id) {
        return transaction(storeName, "delete", id, "readwrite");
    }
    function clear(storeName) {
        return transaction(storeName, "clear", undefined, "readwrite");
    }
    function setId(item, id) {
        if (!(0, _functionsJs.exists)(item.id)) {
            if (!(0, _functionsJs.exists)(id)) id = (0, _uuidJs.uuid)();
            Object.assign(item, {
                id: id
            });
        }
        return item;
    }
    return Object.freeze({
        start,
        open,
        createStore,
        deleteStore,
        add,
        put,
        get,
        getAll,
        remove,
        clear,
        setId
    });
}
const idb = IDB();

},{"../functions.js":"2jd1e","./uuid.js":"ekQgg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ekQgg":[function(require,module,exports) {
//
// UUID
//
// Source:
// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/65500983#answer-65500983
//
// Usage:
// eval: console.log(Xuid.v4New)
// emits: {1eb4a659-8bdc-4ce0-c002-b1d505d38ea8}
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uuid", ()=>uuid);
class Xuid {
    //@ edges.sm.st, ess.dev: MIT license Smallscript/David Simmons 2020
    //! Can't use `static const field = const` xbrowser (thus, const's duped)
    static get v4New() {
        const ns7Now = this.ns7Now, xnode48 = this.xnode48;
        let clock_seq13;
        // monotonic `clock_seq` guarantee (13-bits/time-quantum)
        if (ns7Now <= this.ns7Now_prevSeq && this.ns7Now_prevSeq) clock_seq13 = (this.ns7Now_prevSeq += 1n) - ns7Now & 0b1111111111111n;
        else clock_seq13 = 0n, this.ns7Now_prevSeq = ns7Now;
        const time60 = ns7Now << 4n & 0xFFFFFFFFFFFF0000n | ns7Now & 0x0000000000000FFFn, v4 = 0x100000000000000000000000000000000n | time60 << 64n | 0x00000000000040000000000000000000n | // M: V4
        0b110n << 61n | clock_seq13 << 48n | // N: Variant-2 time-seq collation
        xnode48, s = v4.toString(16); //.substr(1)
        return `{${s.substr(1, 8)}-${s.substr(9, 4)}-${s.substr(13, 4)}-${s.substr(17, 4)}-${s.substr(21, 12)}}`;
    }
    static get xnode48() /*:<BigInt#48>*/ {
        if (this.xnode48_) return this.xnode48_;
        let clockSeqNode;
        if (typeof URL !== "undefined" && URL.createObjectURL) {
            const url = URL.createObjectURL(new Blob());
            const id = url.toString().split("/").reverse()[0].split("-");
            URL.revokeObjectURL(url);
            clockSeqNode = BigInt("0x" + id[3] + id[4]);
        } else {
            const a4 = this.a4;
            this.getRandomValues(this.a4);
            clockSeqNode = BigInt(a4[2]) << 32n | BigInt(a4[3]);
        }
        // simulate the 48-bit node-id and 13-bit clock-seq
        // to combine with 3-bit uuid-variant
        return this.xnode48_ = clockSeqNode & 0xFFFFFFFFFFFFn;
    }
    static get jdNow() /*:<double#ns7>*/ {
        // return 2440587.5+Date.now()/864e5 // <- Date-quantum-ms form (7ns form below)
        return this.jdFromNs7(this.ns7Now);
    }
    static get ns7Now() /*:<BigInt#60>*/ {
        if (typeof performance !== "undefined" && performance.now) Reflect.defineProperty(this, "ns7Now", Reflect.getOwnPropertyDescriptor(this, "ns7Now_performance"));
        else Reflect.defineProperty(this, "ns7Now", Reflect.getOwnPropertyDescriptor(this, "ns7Now_Date"));
        return this.ns7Now;
    }
    static get ns7Now_Date() /*:<BigInt#60>*/ {
        // const epoch1582Ns7_bias = 0x1b2_1dd2_1381_4000  // V1 1582 Oct 15
        // const epoch1601Ns7_bias = 0x19d_b1de_d53e_8000n // FILETIME base
        const epoch1970Ns7 = BigInt(Date.now() * 10000.0);
        return epoch1970Ns7 + 0x1b21dd213814000n;
    }
    static get ns7Now_performance() /*:<BigInt#60>*/ {
        const epochPgNs7 = BigInt(performance.now() * /*15*/ 10000.0 | /*17*/ 0);
        if (!this.epoch1970PgNs7) // performance.timing.navigationStart
        this.epoch1970PgNs7 = this.ns7Now_Date - epochPgNs7;
        return epochPgNs7 + this.epoch1970PgNs7;
    }
    static dateFromJd(jd) {
        return new Date((jd - 2440587.5) * 864e5);
    }
    static dateFromNs7(ns7) {
        return new Date(Number(ns7 - 0x1b21dd213814000n) / 10000.0);
    }
    static jdFromNs7(ns7) {
        // atomic-clock leap-seconds (ignored)
        return 2440587.5 + Number(ns7 - 0x1b21dd213814000n) / 864e9;
    }
    static ns7FromJd(jd) {
        return BigInt((jd - 2440587.5) * 864e9) + 0x1b21dd213814000n;
    }
    static getRandomValues(va /*:<Uint32Array>*/ ) {
        if (typeof crypto !== "undefined" && crypto.getRandomValues) crypto.getRandomValues(va);
        else for(let i = 0, n = va.length; i < n; i += 1)va[i] = Math.random() * 0x100000000 >>> 0;
    }
    static get a4() {
        return this.a4_ || (this.a4_ = new Uint32Array(4));
    }
    static ntohl(v) /*:<BigInt>*/ {
        let r = "0x", sign = 1n, s = BigInt(v).toString(16);
        if (s[0] == "-") s = s.substr(1), sign = -1n;
        for(let i = s.length; i > 0; i -= 2)r += i == 1 ? "0" + s[i - 1] : s[i - 2] + s[i - 1];
        return sign * BigInt(r);
    }
    static ntohl32(v) /*:<Number>*/ {
        return Number(this.ntohl(v));
    }
}
function uuid() {
    return Xuid.v4New;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79kqA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "workouts", ()=>workouts);
let workouts = [
    `<workout_file>
    <author>Marinov</author>
    <name>Dijon</name>
    <category>VO2 Max</category>
    <description>60/60s or 60 sec ON at 121% of FTP followed by 60 sec OFF. In 2 groups by 8 reps each.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39"/>
        <SteadyState Duration="60" Power="0.47"/>
        <SteadyState Duration="60" Power="0.55"/>
        <SteadyState Duration="60" Power="0.63"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
        <SteadyState Duration="120" Power="0.5"/>
        <IntervalsT Repeat="8" OnDuration="60" OffDuration="60" OnPower="1.21" OffPower="0.44"/>
        <SteadyState Duration="300" Power="0.40"/>
        <IntervalsT Repeat="8" OnDuration="60" OffDuration="60" OnPower="1.21" OffPower="0.44"/>
        <SteadyState Duration="300" Power="0.40"/>
        <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32"/>
    </workout>
</workout_file>
`,
    `<workout_file>
    <author>Marinov</author>
    <name>Chili Pepper</name>
    <category>VO2 Max</category>
    <description> NOTE: This is mixed mode workout with Slope targets in the main interval groups. 40/20s or 40 sec ON at 121% of FTP followed by 20 sec OFF, in 2 groups by 10 reps each.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39" Cadence="80"/>
        <SteadyState Duration="60" Power="0.47" Cadence="90"/>
        <SteadyState Duration="60" Power="0.55" Cadence="100"/>
        <SteadyState Duration="60" Power="0.63" Cadence="90"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63" Cadence="100" CadenceResting="80"/>
        <SteadyState Duration="120" Power="0.5" Slope="1"/>
        <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.21" OffPower="0.44" OnSlope="4" OffSlope="0" Cadence="90" CadenceResting="80"/>
        <SteadyState Duration="300" Power="0.40" Slope="1"/>
        <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.21" OffPower="0.44" OnSlope="4" OffSlope="0"/>
        <SteadyState Duration="300" Power="0.40"/>
        <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32" />
    </workout>
</workout_file>
`,
    `<workout_file>
    <author>Marinov</author>
    <name>Chili Pepper +1</name>
    <category>VO2 Max</category>
    <description>Short but tough, this is the hardest workout ever. It\'s gonna burn!</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39"/>
        <SteadyState Duration="60" Power="0.47"/>
        <SteadyState Duration="60" Power="0.55"/>
        <SteadyState Duration="60" Power="0.63"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
        <SteadyState Duration="120" Power="0.5"/>
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <FreeRide Duration="300" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="40" Power="1.31"/>
        <FreeRide Duration="20" />
        <SteadyState Duration="300" Power="0.39"/>
        <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32"/>
    </workout>
</workout_file>
`,
    `<workout_file>
    <author>Marinov</author>
    <name>Pasta</name>
    <category>Threshold</category>
    <description>A Classic 2 times 20 min at almost FTP. Make sure you had some pasta before this session. You will need it!</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
        <SteadyState Duration="60" Power="0.39"/>
        <SteadyState Duration="60" Power="0.47"/>
        <SteadyState Duration="60" Power="0.55"/>
        <SteadyState Duration="60" Power="0.63"/>
        <IntervalsT  Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.06" OffPower="0.63"/>
        <SteadyState Duration="120" Power="0.5"/>
        <SteadyState Duration="1200" Power="0.98"/>
        <SteadyState Duration="600" Power="0.44"/>
        <SteadyState Duration="1200" Power="0.98"/>
        <SteadyState Duration="300" Power="0.44"/>
        <Cooldown Duration="300" PowerLow="0.44" PowerHigh="0.32"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Marinov</author>
    <name>Potato Chips</name>
    <category>Threshold</category>
    <description>5 by 5 min at 100% of FTP with 5 min recovery in between. Perfect to get you accustome to first intensite sessions after a base block, or just that new FTP value.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <SteadyState Duration="300" Power="0.39"/>
        <SteadyState Duration="120" Power="0.60"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.5"/>
        <SteadyState Duration="120" Power="0.56"/>
        <IntervalsT Repeat="5" OnDuration="300" OffDuration="300" OnPower="1" OffPower="0.5"/>
        <SteadyState Duration="300" Power="0.39"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Marinov</author>
    <name>Maple</name>
    <category>Sweet Spot</category>
    <description>4 times 10 min Sweet Spot intervals with 5 min recovery in between and warm-up Ramp.</description>
    <sportType>bike</sportType>
    <tags>
        <tag name="sweet"/>
        <tag name="spot"/>
    </tags>
    <workout>
        <Warmup Duration="300" PowerLow="0.32" PowerHigh="0.75"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.08" OffPower="0.44"/>
        <SteadyState Duration="180" Power="0.44"/>
        <IntervalsT Repeat="4" OnDuration="600" OffDuration="300" OnPower="0.92" OffPower="0.44"/>
        <Cooldown Duration="600" PowerLow="0.44" PowerHigh="0.32"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Marinov</author>
    <name>Honey</name>
    <category>Sweet Spot</category>
    <description>4 times 10 min Sweet Spot intervals with 5 min recovery in between.</description>
    <sportType>bike</sportType>
    <workout>
        <Warmup Duration="300" PowerLow="0.32" PowerHigh="0.75"/>
        <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.08" OffPower="0.44"/>
        <SteadyState Duration="180" Power="0.44"/>
        <IntervalsT Repeat="3" OnDuration="900" OffDuration="300" OnPower="0.90" OffPower="0.44"/>
        <Cooldown Duration="600" PowerLow="0.44" PowerHigh="0.32"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Marinov</author>
    <name>Baguette</name>
    <category>Base</category>
    <description>The bread and butter of Endurance training with efforts in Zone 1 and 2.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <Warmup Duration="600" PowerLow="0.32" PowerHigh="0.63"/>
        <SteadyState Duration="600" Power="0.63"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.63"/>
        <Cooldown Duration="600" PowerLow="0.63" PowerHigh="0.32"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Marinov</author>
    <name>Baguette +1</name>
    <category>Base</category>
    <description>The bread and butter of Endurance training, with efforts in Zone 2.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <SteadyState Duration="600" Power="0.39"/>
        <SteadyState Duration="600" Power="0.63"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.67"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.71"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.67"/>
        <SteadyState Duration="300" Power="0.56"/>
        <SteadyState Duration="600" Power="0.63"/>
        <SteadyState Duration="600" Power="0.39"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Flux</author>
    <name>Salmon</name>
    <category>Base</category>
    <subcategory></subcategory>
    <description>The Fat Max workout to push your aerobic base up</description>
    <sporttype>bike</sporttype>
    <tags></tags>
    <workout>
        <SteadyState Duration="600" Power="0.43" />
        <SteadyState Duration="600" Power="0.51" />
        <SteadyState Duration="600" Power="0.56" />
        <SteadyState Duration="600" Power="0.6" />
        <SteadyState Duration="2400" Power="0.63" />
        <SteadyState Duration="600" Power="0.43" />
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Flux</author>
    <name>Salmon +1</name>
    <category>Base</category>
    <subcategory></subcategory>
    <description>The Fat Max workout to push your aerobic base up</description>
    <sporttype>bike</sporttype>
    <tags></tags>
    <workout>
        <SteadyState Duration="600" Power="0.43" />
        <SteadyState Duration="600" Power="0.51" />
        <SteadyState Duration="600" Power="0.56" />
        <SteadyState Duration="600" Power="0.6" />
        <SteadyState Duration="3600" Power="0.63" />
        <SteadyState Duration="600" Power="0.56" />
        <SteadyState Duration="600" Power="0.43" />
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Marinov</author>
    <name>Blackcurrant</name>
    <category>Recovery</category>
    <description>A recovery ride in zone 1 at 50% of FTP.</description>
    <sporttype>bike</sporttype>
    <tags></tags>
    <workout>
        <Warmup Duration="600" PowerLow="0.30" PowerHigh="0.5"/>
        <SteadyState Duration="2400" Power="0.5"/>
        <Cooldown Duration="600" PowerLow="0.5" PowerHigh="0.30"/>
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Flux</author>
    <name>5-1-5 Moxy Test</name>
    <category>Test</category>
    <subcategory></subcategory>
    <description>It's important to not warm-up before the test. You should not cycle during the rest intervals, since they are meant to track SmO2 and THb recovery rate. You are ment to fail in the any of the last 3 steps. Use the moxy academy course for guidence on how to analyze. Muscle Oxygen Zone Assessment: https://moxy-academy.teachable.com/courses/209052/lectures/3480785.
</description>
    <sporttype>bike</sporttype>
    <tags></tags>
    <workout>
        <SteadyState Duration="300" Power="0.44" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="0.44" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="0.66" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="0.66" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="0.88" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="0.88" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="1.1" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="1.1" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="1.32" />
        <SteadyState Duration="60" Power="0" />
        <SteadyState Duration="300" Power="1.32" />
    </workout>
</workout_file>`,
    `<workout_file>
    <author>Flux</author>
    <name>Ramp Test</name>
    <category>Ramp Test</category>
    <description>Ramp test proceeding in steps of 6% of previous FTP for 60 seconds. Do until exhoustion and take 75% of the power you did in the last interval you\u{2019}ve reached. That's your new FTP.</description>
    <sportType>bike</sportType>
    <tags>
    </tags>
    <workout>
        <SteadyState Duration=" 300" Power="0.46" />
        <SteadyState Duration="60" Power="0.52" />
        <SteadyState Duration="60" Power="0.58" />
        <SteadyState Duration="60" Power="0.64" />
        <SteadyState Duration="60" Power="0.70" />
        <SteadyState Duration="60" Power="0.76" />
        <SteadyState Duration="60" Power="0.82" />
        <SteadyState Duration="60" Power="0.88" />
        <SteadyState Duration="60" Power="0.94" />
        <SteadyState Duration="60" Power="1.0" />
        <SteadyState Duration="60" Power="1.06" />
        <SteadyState Duration="60" Power="1.12" />
        <SteadyState Duration="60" Power="1.18" />
        <SteadyState Duration="60" Power="1.24" />
        <SteadyState Duration="60" Power="1.3" />
        <SteadyState Duration="60" Power="1.36" />
        <SteadyState Duration="60" Power="1.42" />
        <SteadyState Duration="60" Power="1.48" />
        <SteadyState Duration="60" Power="1.54" />
        <SteadyState Duration="60" Power="1.6" />
        <SteadyState Duration="60" Power="1.66" />
        <SteadyState Duration="60" Power="1.72" />
        <SteadyState Duration="60" Power="1.78" />
        <SteadyState Duration="60" Power="1.84" />
        <SteadyState Duration="60" Power="1.9" />
        <SteadyState Duration="60" Power="1.96" />
        <SteadyState Duration="60" Power="2.02" />
    </workout>
</workout_file>`
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXLon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zwo", ()=>zwo);
var _functionsJs = require("../functions.js");
// TODO: replace with ParserCombinators.js implementation
// - allow for wrong xml syntax
function readAttribute(args = {}) {
    const el = args.el;
    const name = args.name;
    const decode = (0, _functionsJs.existance)(args.decode, (x)=>x);
    if (el.hasAttribute(name)) return decode(el.getAttribute(name));
    else return undefined;
}
function writeAttribute(args = {}) {
    const encode = (0, _functionsJs.existance)(args.encode, (x)=>x);
    const name = (0, _functionsJs.existance)(args.name);
    const value = (0, _functionsJs.existance)(args.value);
    return `${name}="${encode(value)}"`;
}
function Attribute(args = {}) {
    const defaults = {
        name: "",
        decode: (x)=>x
    };
    const name = (0, _functionsJs.existance)(args.name, defaults.name);
    const decode = (0, _functionsJs.existance)(args.decode, defaults.decode);
    const encode = (0, _functionsJs.existance)(args.encode, decode);
    function getName() {
        return name;
    }
    function read(args = {}) {
        const el = (0, _functionsJs.existance)(args.el);
        return readAttribute({
            el,
            name,
            decode
        });
    }
    function write(args = {}) {
        const value = (0, _functionsJs.existance)(args.value);
        return writeAttribute({
            name,
            value,
            encode
        });
    }
    return Object.freeze({
        getName,
        read,
        write
    });
}
function attributesToStep(args = {}) {
    const tag = (0, _functionsJs.existance)(args.element);
    const filter = (0, _functionsJs.existance)(args.filter, (_)=>true);
    const toName = (0, _functionsJs.existance)(args.toName, (x)=>x);
    return Object.keys(tag).reduce(function(acc, key) {
        if (filter(key) && (0, _functionsJs.exists)(tag[key])) {
            const name = toName(key);
            const value = tag[key];
            acc[name] = value;
        }
        return acc;
    }, {});
}
function Step(element) {
    const spec = {
        element: element,
        filter: (key)=>!(0, _functionsJs.equals)(key, "element"),
        toName: (key)=>key.toLowerCase()
    };
    return attributesToStep(spec);
}
function OnStep(element) {
    const spec = {
        element: element,
        filter: (key)=>key.startsWith("On") || (0, _functionsJs.equals)(key, "Cadence"),
        toName: (key)=>key.replace(/On/g, "").toLocaleLowerCase()
    };
    return attributesToStep(spec);
}
function OffStep(element) {
    const spec = {
        element: element,
        filter: (key)=>key.startsWith("Off") || key.endsWith("Resting"),
        toName: (key)=>key.replace(/On|Off|Resting/g, "").toLocaleLowerCase()
    };
    return attributesToStep(spec);
}
function Element(args = {}) {
    const defaults = {
        name: "Unknown",
        tagOpen: "<Unknown",
        tagClose: " />",
        content: ""
    };
    const name = (0, _functionsJs.existance)(args.name, defaults.name);
    const tagOpen = (0, _functionsJs.existance)(args.tagOpen, defaults.tagOpen);
    const tagClose = (0, _functionsJs.existance)(args.tagClose, defaults.tagClose);
    const toInterval = (0, _functionsJs.existance)(args.toInterval, defaultToInterval);
    const fromInterval = (0, _functionsJs.existance)(args.fromInterval, defaultFromInterval);
    const calcDuration = (0, _functionsJs.existance)(args.calcDuration, defaultCalcDuration);
    function getName() {
        return name;
    }
    function readContent(el) {
        if ((0, _functionsJs.exists)(el)) {
            let value = el.textContent;
            if ((0, _functionsJs.empty)(value)) return undefined;
            else return value;
        }
        return undefined;
    }
    function read(args = {}) {
        const el = (0, _functionsJs.existance)(args.el);
        const attrsNodeList = el.attributes || [];
        const length = attrsNodeList.length;
        let acc = {
            element: name
        };
        for(let i = 0; i < length; i++){
            const name = attrsNodeList[i].name;
            const attrFn = Attrs[name];
            const key = name;
            let value = attrsNodeList[i].value;
            if ((0, _functionsJs.exists)(attrFn)) value = attrFn.read({
                el
            });
            acc[key] = value;
        }
        return acc;
    }
    function write(args = {}) {
        let { content, ...attributes } = args;
        content = (0, _functionsJs.existance)(args.content, defaults.content);
        const attrsString = Object.keys(attributes).reduce((acc, key)=>{
            acc += ` ${key}="${args[key]}"`;
            return acc;
        }, "");
        return `${tagOpen + attrsString}${content}${tagClose}`;
    }
    function defaultCalcDuration(element) {
        const duration = element.Duration;
        return duration;
    }
    function defaultToInterval(element) {
        const duration = calcDuration(element);
        const step = Step(element);
        return {
            duration: duration,
            steps: [
                step
            ]
        };
    }
    function defaultFromInterval(interval) {
        const res = {
            element: name,
            Duration: interval.duration
        };
        const step = (0, _functionsJs.first)(interval.steps);
        if ((0, _functionsJs.exists)(step.power)) res.Power = step.power;
        if ((0, _functionsJs.exists)(step.cadence)) res.Cadence = step.cadence;
        if ((0, _functionsJs.exists)(step.slope)) res.Slope = step.slope;
        return res;
    }
    function readToInterval(args = {}) {
        return toInterval(read(args));
    }
    function writeFromInterval(args = {}) {
        return fromInterval(write(args));
    }
    return Object.freeze({
        getName,
        readContent,
        read,
        write,
        toInterval,
        fromInterval,
        calcDuration,
        defaultCalcDuration,
        defaultToInterval,
        readToInterval,
        defaultFromInterval,
        writeFromInterval
    });
}
function IntervalsT(args = {}) {
    const spec = {
        name: "IntervalsT",
        tagOpen: "<IntervalsT",
        tagClose: " />",
        toInterval: toInterval,
        calcDuration: calcDuration
    };
    function calcDuration(element) {
        return element.Repeat * (element.OnDuration + element.OffDuration);
    }
    function toInterval(element) {
        const duration = calcDuration(element);
        const stepsCount = (0, _functionsJs.existance)(element.Repeat, 1);
        const onStep = OnStep(element);
        const offStep = OffStep(element);
        const steps = (0, _functionsJs.repeat)(stepsCount)(function(acc) {
            acc.push({
                duration: onStep.duration,
                steps: [
                    onStep
                ]
            });
            acc.push({
                duration: offStep.duration,
                steps: [
                    offStep
                ]
            });
            return acc;
        })([]);
        return steps;
    }
    return Element(spec);
}
function Unknown(args = {}) {
    const spec = {
        name: "Unknown",
        tagOpen: "<Unknown",
        tagClose: " />"
    };
    // console.warn(`Unknown Element in .zwo workout: ${args.el}`);
    return Element(spec);
}
function FreeRide(args = {}) {
    const spec = {
        name: "FreeRide",
        tagOpen: "<FreeRide",
        tagClose: " />",
        toInterval: toInterval
    };
    function toInterval(element) {
        let duration = (0, _functionsJs.existance)(element.Duration, 1);
        const sim = element.Sim;
        const track = element.Track;
        const power = 0;
        const slope = 0;
        const steps = [];
        let simDuration = 0;
        let trackDistance = 0;
        if ((0, _functionsJs.exists)(sim)) {
            for(let i = 0; i < sim.length; i += 2){
                simDuration += sim[i + 1];
                steps.push({
                    duration: sim[i + 1],
                    slope: sim[i],
                    power
                });
            }
            if (simDuration < duration) steps.push({
                duration: duration - simDuration,
                slope,
                power
            });
            if (simDuration > duration) duration = simDuration;
        } else if ((0, _functionsJs.exists)(track)) for(let i = 0; i < track.length; i += 2){
            trackDistance += track[i + 1];
            steps.push({
                distance: track[i + 1],
                slope: track[i],
                power
            });
        }
        else steps.push({
            duration,
            slope,
            power
        });
        if ((0, _functionsJs.exists)(track)) return {
            distance: trackDistance,
            steps: steps
        };
        return {
            duration: duration,
            steps: steps
        };
    }
    return Element(spec);
}
function Warmup(args = {}) {
    const defaults = {
        timeDx: 10
    };
    const timeDx = (0, _functionsJs.existance)(args.timeDx, defaults.timeDx);
    const spec = Object.assign({
        name: "Warmup",
        tagOpen: "<Warmup",
        tagClose: " />",
        toInterval: toInterval,
        fromInterval: fromInterval
    }, args.spec);
    function toInterval(element) {
        const duration = element.Duration;
        const powerLow = element.PowerLow;
        const powerHigh = element.PowerHigh;
        const cadence = element.Cadence;
        const stepsCount = parseInt(duration / timeDx);
        const powerDx = (powerHigh - powerLow) / (stepsCount - 1);
        let steps = [];
        let stepPower = powerLow;
        for(let i = 0; i < stepsCount; i++){
            if ((0, _functionsJs.exists)(cadence)) steps.push({
                duration: timeDx,
                power: stepPower,
                cadence
            });
            else steps.push({
                duration: timeDx,
                power: stepPower
            });
            stepPower = stepPower + powerDx;
        }
        const fixedSteps = steps.map((step)=>{
            step.power = (0, _functionsJs.toFixed)(step.power, 2);
            return step;
        });
        return {
            duration: duration,
            steps: fixedSteps
        };
    }
    function fromInterval(interval) {
        const res = {
            element: spec.name,
            Duration: interval.duration
        };
        const start = (0, _functionsJs.first)(interval.steps);
        const end = (0, _functionsJs.last)(interval.steps);
        if ((0, _functionsJs.exists)(start.power)) res.PowerLow = start.power;
        if ((0, _functionsJs.exists)(end.power)) res.PowerHigh = end.power;
        return res;
    }
    return Element(spec);
}
function Cooldown(args = {}) {
    const defaults = {
        timeDx: 10
    };
    const timeDx = (0, _functionsJs.existance)(args.timeDx, defaults.timeDx);
    const spec = {
        name: "Cooldown",
        tagOpen: "<Cooldown",
        tagClose: " />",
        toInterval: toInterval,
        fromInterval: fromInterval
    };
    function toInterval(element) {
        const duration = element.Duration;
        const powerLow = element.PowerHigh;
        const powerHigh = element.PowerLow;
        const stepsCount = parseInt(duration / timeDx);
        const powerDx = (powerHigh - powerLow) / (stepsCount - 1);
        let steps = [];
        let stepPower = powerHigh;
        for(let i = 0; i < stepsCount; i++){
            steps.push({
                duration: timeDx,
                power: stepPower
            });
            stepPower = stepPower - powerDx;
        }
        const fixedSteps = steps.map((step)=>{
            step.power = (0, _functionsJs.toFixed)(step.power, 2);
            return step;
        });
        return {
            duration: duration,
            steps: fixedSteps
        };
    }
    function fromInterval(interval) {
        const res = {
            element: spec.name,
            Duration: interval.duration
        };
        const start = (0, _functionsJs.first)(interval.steps);
        const end = (0, _functionsJs.last)(interval.steps);
        if ((0, _functionsJs.exists)(start.power)) res.PowerLow = start.power;
        if ((0, _functionsJs.exists)(end.power)) res.PowerHigh = end.power;
        return res;
    }
    return Element(spec);
}
function Ramp(args = {}) {
    const spec = {
        name: "Ramp",
        tagOpen: "<Ramp",
        tagClose: " />"
    };
    return Warmup(spec);
}
function SteadyState(args = {}) {
    const spec = Object.assign({
        name: "SteadyState",
        tagOpen: "<SteadyState",
        tagClose: " />",
        toInterval: toInterval
    }, args.spec);
    function toInterval(element) {
        const duration = element.Duration;
        const power = element.Power;
        const powerLow = element.PowerLow;
        const powerHigh = element.PowerHigh;
        let step = {};
        if ((0, _functionsJs.exists)(power)) step = Step(element);
        else if ((0, _functionsJs.exists)(powerLow) || (0, _functionsJs.exists)(powerHigh)) {
            element.Power = [
                powerLow,
                powerHigh
            ].filter((0, _functionsJs.exists)).reduce((acc, x, _, { length })=>acc + x / length, 0);
            element.PowerLow = undefined;
            element.PowerHigh = undefined;
            step = Step(element);
        } else {
            element.Power = 0;
            element.Slope = 0;
            step = Step(element);
        }
        return {
            duration: duration,
            steps: [
                step
            ]
        };
    }
    return Element(spec);
}
function readContent(el) {
    if ((0, _functionsJs.exists)(el)) {
        let value = el.textContent;
        if ((0, _functionsJs.empty)(value)) return undefined;
        else return value;
    }
    return undefined;
}
function Head(args = {}) {
    const defaults = {
        author: "Unknown",
        name: "Custom",
        description: "Custom",
        category: "Custom",
        subcategory: "",
        sportType: "bike",
        tags: ""
    };
    function read(args = {}) {
        const doc = (0, _functionsJs.existance)(args.doc);
        const author = readContent(doc.querySelector("author"));
        const name = readContent(doc.querySelector("name"));
        const description = readContent(doc.querySelector("description"));
        const category = readContent(doc.querySelector("category"));
        const subcategory = readContent(doc.querySelector("subcategory"));
        const sportType = readContent(doc.querySelector("sportType"));
        return {
            author: (0, _functionsJs.existance)(author, defaults.author),
            name: (0, _functionsJs.existance)(name, defaults.name),
            description: (0, _functionsJs.existance)(description, defaults.description),
            category: (0, _functionsJs.existance)(category, defaults.category),
            subcategory: (0, _functionsJs.existance)(subcategory, defaults.subcategory),
            sportType: (0, _functionsJs.existance)(sportType, defaults.sportType)
        };
    }
    function write(args = {}) {
        const author = (0, _functionsJs.existance)(args.author, defaults.author);
        const name = (0, _functionsJs.existance)(args.name, defaults.name);
        const description = (0, _functionsJs.existance)(args.description, defaults.description);
        const sportType = (0, _functionsJs.existance)(args.sportType, defaults.sportType);
        const category = (0, _functionsJs.existance)(args.category, defaults.category);
        const subcategory = (0, _functionsJs.existance)(args.subcategory, defaults.subcategory);
        const tags = (0, _functionsJs.existance)(args.tags, defaults.tags);
        const elements = [
            Elements.Author.write({
                content: author
            }),
            Elements.Name.write({
                content: name
            }),
            Elements.Category.write({
                content: category
            }),
            Elements.SubCategory.write({
                content: subcategory
            }),
            Elements.Description.write({
                content: description
            }),
            Elements.SportType.write({
                content: sportType
            }),
            Elements.Tags.write({
                content: tags
            })
        ];
        return elements.reduce((acc, el)=>acc + el.padStart(el.length + 4, " ") + "\n", "\n");
    }
    function fromInterval(intervals) {
        return {
            author: intervals.meta.author,
            name: intervals.meta.name,
            category: intervals.meta.category,
            subcategory: intervals.meta.subcategory,
            sportType: intervals.meta.sportType,
            description: intervals.meta.description
        };
    }
    return Object.freeze({
        read,
        write,
        fromInterval
    });
}
function Body() {
    const defaults = {
        parent: "workout"
    };
    const parent = defaults.parent;
    function apply(el, method = "read") {
        const name = el.tagName;
        if ((0, _functionsJs.exists)(Elements[name])) return Elements[name][method]({
            el
        });
        return Elements.Unknown[method]({
            el
        });
    }
    function queryElements(doc) {
        const workoutEl = doc.querySelector(parent);
        const elements = Array.from(workoutEl.children);
        return elements;
    }
    function read(args = {}) {
        const doc = (0, _functionsJs.existance)(args.doc);
        const elements = queryElements(doc);
        return elements.map((el)=>apply(el, "read"), []);
    }
    function readToInterval(args = {}) {
        const doc = (0, _functionsJs.existance)(args.doc);
        const elements = queryElements(doc);
        return elements.flatMap((el)=>apply(el, "readToInterval"), []);
    }
    function writeElement(args = {}) {
        const { element, ...spec } = args;
        if ((0, _functionsJs.exists)(Elements[element])) return Elements[element].write(spec);
        return Elements.Unknown.write(spec);
    }
    function isRamp(steps) {
        return steps.length > 1;
    }
    function isRampUp(steps) {
        return (0, _functionsJs.first)(steps).power < (0, _functionsJs.last)(steps).power;
    }
    function isRampDown(steps) {
        return (0, _functionsJs.first)(steps).power > (0, _functionsJs.last)(steps).power;
    }
    function fromInterval(value) {
        const intervals = value.intervals;
        const acc = [];
        for(var i = 0; i < intervals.length; i++){
            var interval = intervals[i];
            var steps = intervals[i].steps;
            var node = {};
            if (isRamp(steps)) {
                if (isRampUp(steps)) node = Elements.Warmup.fromInterval(interval);
                else if (isRampDown(steps)) node = Elements.Cooldown.fromInterval(interval);
            } else node = Elements.SteadyState.fromInterval(interval);
            acc.push(node);
        }
        return acc;
    }
    function writeElements(elements) {
        return elements.reduce((acc, element)=>{
            const row = writeElement(element);
            acc += row.padStart(row.length + 8, " ") + "\n";
            return acc;
        }, "");
    }
    function write(args = {}) {
        return `<workout>\n${writeElements(args)}    </workout>`;
    }
    return Object.freeze({
        read,
        readToInterval,
        fromInterval,
        write
    });
}
function encodeSim(arr) {
    return arr.join(",");
}
function decodeSim(str) {
    return str.split(",").reduce((acc, x)=>{
        const n = parseFloat(x);
        if (!isNaN(n)) acc.push(n);
        return acc;
    }, []);
}
const Attrs = {
    Duration: Attribute({
        name: "Duration",
        decode: parseInt
    }),
    OnDuration: Attribute({
        name: "OnDuration",
        decode: parseInt
    }),
    OffDuration: Attribute({
        name: "OffDuration",
        decode: parseInt
    }),
    Power: Attribute({
        name: "Power",
        decode: parseFloat
    }),
    OnPower: Attribute({
        name: "OnPower",
        decode: parseFloat
    }),
    OffPower: Attribute({
        name: "OffPower",
        decode: parseFloat
    }),
    PowerLow: Attribute({
        name: "PowerLow",
        decode: parseFloat
    }),
    PowerHigh: Attribute({
        name: "PowerHigh",
        decode: parseFloat
    }),
    Cadence: Attribute({
        name: "Cadence",
        decode: parseInt
    }),
    CadenceLow: Attribute({
        name: "CadenceLow",
        decode: parseInt
    }),
    CadenceHigh: Attribute({
        name: "CadenceHigh",
        decode: parseInt
    }),
    CadenceResting: Attribute({
        name: "CadenceResting",
        decode: parseInt
    }),
    Slope: Attribute({
        name: "Slope",
        decode: parseFloat
    }),
    OnSlope: Attribute({
        name: "OnSlope",
        decode: parseFloat
    }),
    OffSlope: Attribute({
        name: "OffSlope",
        decode: parseFloat
    }),
    SlopeLow: Attribute({
        name: "SlopeLow",
        decode: parseFloat
    }),
    SlopeHigh: Attribute({
        name: "SlopeHigh",
        decode: parseFloat
    }),
    Distance: Attribute({
        name: "Distance",
        decode: parseInt
    }),
    Sim: Attribute({
        name: "Sim",
        decode: decodeSim,
        encode: encodeSim
    }),
    Track: Attribute({
        name: "Track",
        decode: decodeSim,
        encode: encodeSim
    }),
    Repeat: Attribute({
        name: "Repeat",
        decode: parseInt
    })
};
const Elements = {
    Warmup: Warmup(),
    // SteadyState: Element({name: 'SteadyState', tagOpen: '<SteadyState', tagClose: ' />'}),
    SteadyState: SteadyState(),
    IntervalsT: IntervalsT(),
    FreeRide: FreeRide(),
    Ramp: Ramp(),
    Cooldown: Cooldown(),
    Unknown: Unknown(),
    Author: Element({
        name: "author",
        tagOpen: "<author>",
        tagClose: "</author>"
    }),
    Name: Element({
        name: "name",
        tagOpen: "<name>",
        tagClose: "</name>"
    }),
    Category: Element({
        name: "category",
        tagOpen: "<category>",
        tagClose: "</category>"
    }),
    SubCategory: Element({
        name: "subcategory",
        tagOpen: "<subcategory>",
        tagClose: "</subcategory>"
    }),
    Description: Element({
        name: "description",
        tagOpen: "<description>",
        tagClose: "</description>"
    }),
    SportType: Element({
        name: "sporttype",
        tagOpen: "<sporttype>",
        tagClose: "</sporttype>"
    }),
    Tags: Element({
        name: "tags",
        tagOpen: "<tags>",
        tagClose: "</tags>"
    })
};
const head = Head();
const body = Body();
const parser = new DOMParser();
function readToInterval(zwo) {
    const doc = parser.parseFromString(zwo, "text/xml");
    const meta = head.read({
        doc
    });
    const intervals = body.readToInterval({
        doc
    });
    const duration = intervals.reduce((acc, i)=>acc + i.duration, 0);
    return {
        meta: Object.assign(meta, {
            duration
        }),
        intervals: intervals
    };
}
function read(zwo) {
    const doc = parser.parseFromString(zwo, "text/xml");
    const headElements = head.read({
        doc
    });
    const bodyElements = body.read({
        doc
    });
    return {
        head: headElements,
        body: bodyElements
    };
}
function fromInterval(intervals) {
    const res = {
        head: head.fromInterval(intervals),
        body: body.fromInterval(intervals)
    };
    return res;
}
function write(args = {}) {
    const headElements = head.write(args.head);
    const bodyElements = body.write(args.body);
    return `<workout_file>${headElements}    ${bodyElements}\n</workout_file>`;
}
const zwo = {
    readAttribute,
    writeAttribute,
    Attribute,
    Attrs,
    Element,
    Elements,
    attributesToStep,
    Step,
    OnStep,
    OffStep,
    head,
    body,
    readToInterval,
    read,
    fromInterval,
    write
};

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPvDV":[function(require,module,exports) {
//
// File Handler
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fileHandler", ()=>fileHandler);
class FileHandler {
    constructor(args){}
    readTextFile(file) {
        const self = this;
        const reader = new FileReader();
        reader.readAsText(file);
        return new Promise((resolve, reject)=>{
            reader.onload = function(event) {
                return resolve(reader.result);
            };
            reader.onerror = function(event) {
                return reject(reader.error);
            };
        });
    }
    readBinaryFile(file) {
        const self = this;
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        return new Promise((resolve, reject)=>{
            reader.onload = function(event) {
                return resolve(reader.result);
            };
            reader.onerror = function(event) {
                return reject(reader.error);
            };
        });
    }
    unsupporedFormat() {
        console.warn(`.fit workout files and other binary formats are not yet supported!`);
    }
    read(file) {
        const self = this;
        let ext = file.name.split(".").pop();
        switch(ext){
            case "zwo":
                return self.readTextFile(file);
            case "erg":
                return self.readTextFile(file);
            case "mrc":
                return self.readTextFile(file);
            case "fit":
                return self.readBinaryFile(file);
            default:
                self.unsupportedFormat();
                break;
        }
    }
    saveFile() {
        const self = this;
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function(blob, name) {
            let url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = name;
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }
}
const fileHandler = new FileHandler();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8E3Z":[function(require,module,exports) {
// Qubic
// Source: https://stackoverflow.com/questions/27176423/function-to-solve-cubic-equation-analytically
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Model", ()=>Model);
function Qubic(a, b, c, d) {
    if (Math.abs(a) < 1e-8) {
        // Quadratic case, ax^2+bx+c=0
        a = b;
        b = c;
        c = d;
        if (Math.abs(a) < 1e-8) {
            // Linear case, ax+b=0
            a = b;
            b = c;
            if (Math.abs(a) < 1e-8) // Degenerate case
            return [];
            return [
                -b / a
            ];
        }
        var D = b * b - 4 * a * c;
        if (Math.abs(D) < 1e-8) return [
            -b / (2 * a)
        ];
        else if (D > 0) return [
            (-b + Math.sqrt(D)) / (2 * a),
            (-b - Math.sqrt(D)) / (2 * a)
        ];
        return [];
    }
    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    var p = (3 * a * c - b * b) / (3 * a * a);
    var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    var roots;
    if (Math.abs(p) < 1e-8) // p = 0 -> t^3 = -q -> t = -q^1/3
    roots = [
        Math.cbrt(-q)
    ];
    else if (Math.abs(q) < 1e-8) // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
    roots = [
        0
    ].concat(p < 0 ? [
        Math.sqrt(-p),
        -Math.sqrt(-p)
    ] : []);
    else {
        D = q * q / 4 + p * p * p / 27;
        if (Math.abs(D) < 1e-8) // D = 0 -> two roots
        roots = [
            -1.5 * q / p,
            3 * q / p
        ];
        else if (D > 0) {
            // Only one real root
            var u = Math.cbrt(-q / 2 - Math.sqrt(D));
            roots = [
                u - p / (3 * u)
            ];
        } else {
            // D < 0, three roots, but needs to use complex numbers/trigonometric solution
            u = 2 * Math.sqrt(-p / 3);
            var t = Math.acos(3 * q / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
            var k = 2 * Math.PI / 3;
            roots = [
                u * Math.cos(t),
                u * Math.cos(t - k),
                u * Math.cos(t - 2 * k)
            ];
        }
    }
    // Convert back from depressed cubic
    for(var i = 0; i < roots.length; i++)roots[i] -= b / (3 * a);
    return roots;
}
// end Qubic
// Original
// written in VBA by GCUser based on Validation of a Mathematical Model for Road Cycling Power, Martin et al
// dynamic rolling resistance based on http://www.kreuzotter.de/english/espeed.htm#forml
function calcVel(power, slope = 0, mass = 85, crr = 0.004, cda = 0.4, rhoAir = 1, lossDt = 0, vWind = 0, wheelCircumference = 2000, accel = 0, modelSpokeDrag = false, modelBearingLoss = false, modelWheelInertia = false, modelDynRollRes = false, smallAngleApprox = false) {
    const pi = Math.PI; // 4 * Math.atan(1);
    const g = 9.80665;
    let cosBeta = 0;
    let sinBeta = 0;
    if (smallAngleApprox) {
        cosBeta = 1;
        sinBeta = slope;
    } else {
        cosBeta = 1 / Math.sqrt(slope * slope + 1); // Math.cos(Math.atan(slope))
        sinBeta = slope * cosBeta; // Math.sin(Math.atan(slope))
    }
    let mwheel = 0;
    if (modelWheelInertia) {
        const r = wheelCircumference / (2000 * pi);
        const i = 0.14;
        mwheel = i / Math.pow(r, 2); // r^2
    }
    const fw = modelSpokeDrag ? 0.0044 : 0;
    const c1bl = modelBearingLoss ? 0.091 : 0;
    const c2bl = modelBearingLoss ? 0.0087 : 0;
    const crv = modelDynRollRes ? 0.1 : 0;
    const c1ke = (mass + mwheel) * accel;
    const c1grav = g * mass * sinBeta;
    const c1roll = g * mass * crr * cosBeta;
    const c1air = 0.5 * (cda + fw) * rhoAir * Math.pow(vWind, 2); // vWind ^ 2
    const c2air = (cda + fw) * rhoAir * vWind;
    const c2dynroll = crv * cosBeta;
    const c3air = 0.5 * (cda + fw) * rhoAir;
    const c0 = -power * (1 - lossDt);
    const c1 = c1grav + c1roll + c1air + c1bl + c1ke;
    const c2 = c2air + c2bl + c2dynroll;
    const c3 = c3air;
    const roots = Qubic(c3, c2, c1, c0); // roots = Qubic(c2 / c3, c1 / c3, c0 / c3);
    let velocity = roots[0]; // original index is 1, maybe it's 0
    let thisVelocity;
    for (var root of roots){
        thisVelocity = root;
        if (velocity > 0) {
            if (thisVelocity > 0 && thisVelocity < velocity) velocity = thisVelocity;
        } else if (thisVelocity > velocity) velocity = thisVelocity;
    }
    return velocity;
}
function calcPower(velocity, slope, mass, crr = 0.004, cda = 0.4, rhoAir = 1, lossDt = 0, vWind = 0, wheelCircumference = 2000, accel = 0, modelSpokeDrag = false, modelBearingLoss = false, modelWheelInertia = false, modelDynRollRes = false, smallAngleApprox = false) {
    const pi = Math.PI; // 4 * Math.atan(1)
    const g = 9.80665; // exact grav accel
    let cosBeta = 0;
    let sinBeta = 0;
    if (smallAngleApprox) {
        cosBeta = 1;
        sinBeta = slope;
    } else {
        cosBeta = 1 / Math.sqrt(slope * slope + 1); // Math.cos(Math.atan(slope))
        sinBeta = slope * cosBeta; // Math.sin(Math.atan(slope))
    }
    let mwheel = 0;
    if (modelWheelInertia) {
        let r = wheelCircumference / (2000 * pi);
        let i = 0.14; // moment of inertia of wheels (kg*m^2)
        mwheel = i / Math.pow(r, 2);
    }
    const fw = modelSpokeDrag ? 0.0044 : 0; // incremental drag associated with area of spokes in m^2
    const crv = modelDynRollRes ? 0.1 : 0;
    const pgrav = g * mass * sinBeta * velocity;
    const proll = g * crr * mass * cosBeta * velocity;
    const pair = 0.5 * (cda + fw) * rhoAir * Math.pow(velocity + vWind, 2) * velocity;
    const pdynroll = velocity * crv * cosBeta * velocity;
    const pke = (mass + mwheel) * accel * velocity;
    const pwbearing = modelBearingLoss ? 0.091 * velocity + 0.0087 * Math.pow(velocity, 2) : 0;
    return (pgrav + proll + pair + pke + pwbearing + pdynroll) / (1 - lossDt);
}
// end Original
// Usage:
// var v = calcVel(200, 0.00, 75 + 10, 0.00330, 0.5, 1.225, 0.02, 0, 2105, 0, true, true, true, true, true) * 3.6 -> 29.251301130884464
// calcPower(v /3.6, 0.00, 75 + 10, 0.00330, 0.5, 1.225, 0.02, 0, 2105, 0, true, true, true, true, true) -> 200.00000000003962
// var v = calcVel(200, 0.00, 75 + 10, 0.00330, 0.5, 1.225, 0.02, 0, 2105, 0, true, true, true, true, true) * 3.6;
// p = calcPower(v/3.6, 0.00, 75 + 10, 0.00330, 0.5, 1.225, 0.02, 0, 2105, 0, true, true, true, true, true);
function Model(args = {
    use: {}
}) {
    const defaults = {
        mass: 85,
        slope: 0,
        wheelCircumference: 2105,
        drivetrainLoss: 0.02,
        crr: 0.004,
        windSpeed: 0,
        rho: 1.275,
        dragCoefficient: 1.0,
        frontalArea: 0.4,
        CdA: 0.4,
        draftingFactor: 1,
        use: {
            spokeDrag: false,
            bearingLoss: false,
            wheelInertia: false,
            useDynamicCrr: false
        }
    };
    const pi = Math.PI;
    const g = 9.80665;
    const wheelCircumference = args.wheelCircumference ?? defaults.wheelCircumference;
    const drivetrainLoss = args.drivetrainLoss ?? defaults.drivetrainLoss;
    const crr = args.crr ?? defaults.crr;
    const rho = args.rho ?? defaults.rho;
    const CdA = args.CdA ?? defaults.CdA;
    const use = Object.assign(defaults.use, args.use);
    function CosBeta(slope) {
        return 1 / Math.sqrt(slope * slope + 1);
    }
    function SinBeta(slope, cosBeta) {
        return slope * cosBeta;
    }
    function calcWheelInertia(wheelCircumference, useWheelInertia = false) {
        if (useWheelInertia) {
            const r = wheelCircumference / (2000 * pi);
            const i = 0.14;
            return i / Math.pow(r, 2);
        }
        return 0;
    }
    const wheelInertia = calcWheelInertia(wheelCircumference, use.wheelInertia);
    const spokeDrag = use.spokeDrag ? 0.0044 : 0;
    const c1bearingLoss = use.bearingLoss ? 0.091 : 0;
    const c2bearingLoss = use.bearingLoss ? 0.0087 : 0;
    const crv = use.dynamicCrr ? 0.1 : 0;
    function powerToMaxSpeed(args = {}) {
        const power = args.power;
        const slope = args.slope ?? defaults.slope;
        const mass = args.mass ?? defaults.mass;
        const windSpeed = args.windSpeed ?? defaults.windSpeed;
        const acceleration = args.acceleration ?? 0;
        const drivetrainLoss = args.drivetrainLoss ?? 0; //defaults.drivetrainLoss;
        const draftingFactor = args.draftingFactor ?? defaults.draftingFactor;
        const cosBeta = CosBeta(slope);
        const sinBeta = SinBeta(slope, cosBeta);
        const c1KE = (mass + wheelInertia) * acceleration;
        const c1Grav = g * mass * sinBeta;
        const c1Roll = g * mass * crr * cosBeta;
        const c1Air = 0.5 * (CdA + spokeDrag) * rho * Math.pow(windSpeed, 2);
        const c2Air = (CdA + spokeDrag) * rho * windSpeed;
        const c2DynamicCrr = crv * cosBeta;
        const c3Air = 0.5 * (CdA + spokeDrag) * rho;
        const c0 = -power * (1 - drivetrainLoss);
        const c1 = c1Grav + c1Roll + c1Air + c1bearingLoss + c1KE;
        const c2 = c2Air + c2bearingLoss + c2DynamicCrr;
        const c3 = c3Air;
        const roots = Qubic(c3, c2, c1, c0);
        let velocity = roots[0];
        for (var root of roots){
            if (velocity > 0) {
                if (root > 0 && root < velocity) velocity = root;
            } else if (root > velocity) velocity = root;
        }
        return velocity;
    }
    function virtualSpeed(args = {}) {
        const power = args.power; // W
        const slope = args.slope ?? defaults.slope; // 0.01 is 1%
        const mass = args.mass ?? defaults.mass; // kg
        const windSpeed = args.windSpeed ?? 0; // m/s
        const drivetrainLoss = args.drivetrainLoss ?? 0;
        const draftingFactor = args.draftingFactor ?? defaults.draftingFactor; // 0..1
        const dt = args.dt ?? 1; // s
        const speedPrev = args.speed ?? 0; // m/s
        let speed = args.speed ?? 0; // m/s
        let distance = args.distance ?? 0; // m
        let altitude = args.altitude ?? 0; // m
        const cosBeta = CosBeta(slope);
        const sinBeta = SinBeta(slope, cosBeta);
        const gravitationalResistance = g * mass * sinBeta;
        const rollingResistance = g * mass * cosBeta * crr + speedPrev * crv * cosBeta;
        const windResistance = 0.5 * rho * (CdA + spokeDrag) * Math.pow(speed + windSpeed, 2) * draftingFactor;
        const bearingLossResistance = use.bearingLoss ? 0.091 + 0.0087 * speedPrev : 0;
        const keResistance = 0;
        const totalResistance = gravitationalResistance + rollingResistance + windResistance + bearingLossResistance + keResistance;
        const powerSteadyState = totalResistance * speedPrev;
        const powerKE = power * (1 - drivetrainLoss) - powerSteadyState;
        speed = Math.sqrt(Math.pow(speedPrev, 2) + 2 * powerKE * dt / (mass + wheelInertia));
        if (speed < 0 || isNaN(speed)) speed = 0;
        const acceleration = (speed - speedPrev) / dt;
        const dx = speed * dt;
        const da = dx * sinBeta;
        distance += dx;
        altitude += da;
        if (altitude < 0) altitude = 0;
        return {
            acceleration,
            speed,
            distance,
            altitude
        };
    }
    function virtualSpeedCF(args = {}) {
        const power = args.power; // W
        const slope = args.slope ?? defaults.slope; // 0.01 is 1%
        const mass = args.mass ?? defaults.mass; // kg
        const windSpeed = args.windSpeed ?? 0; // m/s
        const drivetrainLoss = args.drivetrainLoss ?? 0;
        const draftingFactor = args.draftingFactor ?? defaults.draftingFactor; // 0..1
        const dt = args.dt ?? 1; // s
        const speedPrev = args.speed ?? 0; // m/s
        let speed = args.speed ?? 0; // m/s
        let distance = args.distance ?? 0; // m
        let altitude = args.altitude ?? 0; // m
        let ascent = args.ascent ?? 0; // m
        const cosBeta = CosBeta(slope);
        const sinBeta = SinBeta(slope, cosBeta);
        const c1bl = c1bearingLoss;
        const c2bl = c2bearingLoss;
        // set to zero for no pke modeling, one for full pke modeling
        const pkefactor = 1;
        const c0ke = -0.5 * (mass + wheelInertia) * Math.pow(speedPrev, 2) * pkefactor / dt;
        const c2ke = 0.5 * (mass + wheelInertia) * pkefactor / dt;
        const c1grav = g * mass * sinBeta;
        const c1roll = g * mass * crr * cosBeta;
        const c1air = 0.5 * (CdA + spokeDrag) * rho * Math.pow(windSpeed, 2) * draftingFactor;
        const c2air = (CdA + spokeDrag) * rho * windSpeed * draftingFactor;
        const c2dynroll = crv * cosBeta;
        const c3air = 0.5 * (CdA + spokeDrag) * rho * draftingFactor;
        const c0 = -power * (1 - drivetrainLoss) + c0ke;
        const c1 = c1grav + c1roll + c1air + c1bl;
        const c2 = c2air + c2bl + c2dynroll + c2ke;
        const c3 = c3air;
        const roots = Qubic(c3, c2, c1, c0);
        speed = roots[0];
        let thisSpeed;
        for (var root of roots){
            thisSpeed = root;
            if (speed > 0) {
                if (thisSpeed > 0 && thisSpeed < speed) speed = thisSpeed;
            } else if (thisSpeed > speed) speed = thisSpeed;
        }
        if (speed < 0.1 || isNaN(speed)) speed = 0;
        const acceleration = (speed - speedPrev) / dt;
        const dx = speed * dt;
        const da = dx * sinBeta;
        distance += dx;
        altitude += da;
        ascent += da > 0 ? da : 0;
        if (altitude < 0) altitude = 0;
        return {
            acceleration,
            speed,
            distance,
            altitude,
            ascent
        };
    }
    function trainerSpeed(args = {}) {
        const slope = args.slope ?? defaults.slope; // 0.01 is 1%
        const dt = args.dt ?? 1; // s
        const speedPrev = args.speedPrev ?? 0; // m/s
        let speed = args.speed ?? 0; // m/s
        let distance = args.distance ?? 0; // m
        let altitude = args.altitude ?? 0; // m
        let ascent = args.ascent ?? 0; // m
        const cosBeta = CosBeta(slope);
        const sinBeta = SinBeta(slope, cosBeta);
        const acceleration = (speed - speedPrev) / dt;
        const dx = speed * dt;
        const da = dx * sinBeta;
        distance += dx;
        altitude += da;
        ascent += da > 0 ? da : 0;
        if (altitude < 0) altitude = 0;
        return {
            acceleration,
            distance,
            altitude,
            ascent
        };
    }
    return Object.freeze({
        powerToMaxSpeed,
        virtualSpeed,
        virtualSpeedCF,
        trainerSpeed
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRVXT":[function(require,module,exports) {
//
// FITjs
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FIT", ()=>FIT);
parcelHelpers.export(exports, "fit", ()=>fit);
var _crcJs = require("./crc.js");
var _fileHeaderJs = require("./file-header.js");
var _recordHeaderJs = require("./record-header.js");
var _fieldDefinitionJs = require("./field-definition.js");
var _definitionRecordJs = require("./definition-record.js");
var _dataRecordJs = require("./data-record.js");
var _profilesJs = require("./profiles/profiles.js");
var _fitjsJs = require("./fitjs.js");
var _localActivityJs = require("./local-activity.js");
var _localCourseJs = require("./local-course.js");
function FIT(args = {}) {
    return {
        fileHeader: (0, _fileHeaderJs.fileHeader),
        recordHeader: (0, _recordHeaderJs.recordHeader),
        definitionRecord: (0, _definitionRecordJs.definitionRecord),
        dataRecord: (0, _dataRecordJs.dataRecord),
        fieldDefinition: (0, _fieldDefinitionJs.fieldDefinition),
        CRC: (0, _crcJs.CRC),
        profiles: (0, _profilesJs.profiles),
        fitRecord: (0, _fitjsJs.fitRecord),
        FITjs: (0, _fitjsJs.FITjs),
        localActivity: // remove those from the general library
        (0, _localActivityJs.localActivity),
        localCourse: (0, _localCourseJs.localCourse)
    };
}
const fit = FIT();

},{"./crc.js":"kG8qL","./file-header.js":"dgG1W","./record-header.js":"g8rFV","./field-definition.js":"5M5bZ","./definition-record.js":"hBS4I","./data-record.js":"lCQpT","./profiles/profiles.js":"6Nq6B","./fitjs.js":"7ox7K","./local-activity.js":"cenOL","./local-course.js":"9H37l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kG8qL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CRCFactory", ()=>CRCFactory);
parcelHelpers.export(exports, "CRC", ()=>CRC);
var _functionsJs = require("../functions.js");
var _commonJs = require("./common.js");
function CRCFactory(args = {}) {
    const _type = (0, _commonJs.RecordType).crc;
    const size = 2;
    const architecture = args.architecture ?? true;
    function toGetter(file) {
        if ((0, _functionsJs.isDataView)(file)) return function(file, i) {
            return file.getUint8(i, true);
        };
        return function(file, i) {
            return file[i];
        };
    }
    // DataView, Int, Int -> u16
    function calculateCRC(file, start, end) {
        const crcTable = [
            0x0000,
            0xCC01,
            0xD801,
            0x1400,
            0xF001,
            0x3C00,
            0x2800,
            0xE401,
            0xA001,
            0x6C00,
            0x7800,
            0xB401,
            0x5000,
            0x9C01,
            0x8801,
            0x4400
        ];
        let crc = 0;
        for(let i = start; i <= end; i++){
            const byte = file.getUint8(i, true);
            let tmp = crcTable[crc & 0xF];
            crc = crc >> 4 & 0x0FFF;
            crc = crc ^ tmp ^ crcTable[byte & 0xF];
            tmp = crcTable[crc & 0xF];
            crc = crc >> 4 & 0x0FFF;
            crc = crc ^ tmp ^ crcTable[byte >> 4 & 0xF];
        }
        return crc;
    }
    function isValid(view, crc) {
        // const start = fileHeader.decode(view).size; // without file header
        const start = 0;
        const end = view.byteLangth - size;
        return (0, _functionsJs.equals)(crc, calculateCRC(view, start, end));
    }
    // Dataview, Int -> Bool
    function isCRC(view, i) {
        return (0, _functionsJs.equals)(view.byteLength - i, size);
    }
    function encode(crc, view, i = 0) {
        view.setUint16(i, crc, architecture);
        return view;
    }
    function decode(view, i = 0) {
        let value = view.getUint16(i, architecture);
        return {
            type: _type,
            length: size,
            crc: value
        };
    }
    function toFITjs(crc) {
        return {
            type: _type,
            length: size,
            crc: crc ?? undefined
        };
    }
    // Uint16 -> [Uint8]
    function toArray(crc) {
        return [
            crc & 0xFF,
            crc >> 8
        ];
    }
    // [Uint8] -> Uint16
    function fromArray(array) {
        return array[0] + array[1] << 8;
    }
    // Dataview -> {number: Uint16, array: [Uint8]}
    function getHeaderCRC(dataview) {
        const number = dataview.getUint16(12, true);
        const array = [
            dataview.getUint8(12, true),
            dataview.getUint8(13, true)
        ];
        return {
            number,
            array
        };
    }
    // Dataview -> {number: Uint16, array: [Uint8]}
    function getFileCRC(dataview) {
        const byteLength = dataview.byteLength;
        const number = dataview.getUint16(byteLength - size, true);
        const array = [
            dataview.getUint8(byteLength - size, true),
            dataview.getUint8(byteLength - (size - 1), true)
        ];
        return {
            number,
            array
        };
    }
    return Object.freeze({
        size,
        calculateCRC,
        isValid,
        isCRC,
        encode,
        decode,
        toFITjs,
        toArray,
        fromArray,
        getHeaderCRC,
        getFileCRC
    });
}
const CRC = CRCFactory();

},{"../functions.js":"2jd1e","./common.js":"konCx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"konCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderType", ()=>HeaderType);
parcelHelpers.export(exports, "RecordType", ()=>RecordType);
parcelHelpers.export(exports, "typeToAccessor", ()=>typeToAccessor);
parcelHelpers.export(exports, "getView", ()=>getView);
parcelHelpers.export(exports, "setView", ()=>setView);
parcelHelpers.export(exports, "ValueParser", ()=>ValueParser);
parcelHelpers.export(exports, "identityParser", ()=>identityParser);
parcelHelpers.export(exports, "type", ()=>type);
var _functionsJs = require("../functions.js");
const HeaderType = {
    normal: "normal",
    timestamp: "timestamp"
};
const RecordType = {
    header: "header",
    definition: "definition",
    data: "data",
    crc: "crc"
};
// Base Type To DataView accessor method
const uint8 = [
    0,
    2,
    7,
    10,
    13,
    "enum",
    "uint8",
    "string",
    "byte"
];
const uint16 = [
    132,
    139,
    "uint16",
    "uint16z"
];
const uint32 = [
    134,
    140,
    "uint32",
    "uint32z"
];
const uint64 = [
    143,
    144,
    "uint64",
    "uint64z"
];
const int8 = [
    1,
    "sint8"
];
const int16 = [
    131,
    "sint16"
];
const int32 = [
    133,
    "sint32"
];
const int64 = [
    142,
    "sint64"
];
const float32 = [
    136,
    "float32"
];
const float64 = [
    137,
    "float64"
];
function typeToAccessor(basetype, method = "set") {
    if (uint8.includes(basetype)) return `${method}Uint8`;
    if (uint16.includes(basetype)) return `${method}Uint16`;
    if (uint32.includes(basetype)) return `${method}Uint32`;
    if (uint64.includes(basetype)) return `${method}Uint64`;
    if (int8.includes(basetype)) return `${method}Int8`;
    if (int16.includes(basetype)) return `${method}Int16`;
    if (int32.includes(basetype)) return `${method}Int32`;
    if (int64.includes(basetype)) return `${method}Int64`;
    if (float32.includes(basetype)) return `${method}Float32`;
    if (float64.includes(basetype)) return `${method}Float64`;
    return `${method}Uint8`;
}
// END Base Type To DataView accessor method
// BaseType | DataviewType, DataView, Int, Bool, Bool -> Int?
function getView(type, dataview, i = 0, architecture = true, useBaseType = true) {
    if (useBaseType) return dataview[typeToAccessor(type, "get")](i, architecture);
    try {
        return dataview[`get${type}`](i, architecture);
    } catch (e) {
        console.error(`:fit :getView ${type} at ${i}`, e);
    }
}
// Int, DataView, Int, Bool, -> String
function getStringView(size, dataview, i = 0, architecture = true) {
    let value = "";
    for(let f = 0; f < size; f++)value += String.fromCharCode(dataview.getUint8(i + f, architecture));
    return value.replace(/\x00/gi, "");
}
// BaseType | DataviewType, Number, DataView, Int, Bool -> Dataview
function setView(type, value, dataview, i = 0, architecture = true, useBaseType = true) {
    if (useBaseType) return dataview[typeToAccessor(type, "set")](i, value, architecture);
    return dataview[`set${type}`](i, value, architecture);
}
function ValueParser(args = {}) {
    return Object.freeze({
        encode: args.encode ?? ((x)=>x),
        decode: args.decode ?? ((x)=>x)
    });
}
const identityParser = ValueParser();
function FitString() {
    // BaseType -> Bool
    function isString(base_type) {
        return (0, _functionsJs.equals)(base_type, 7);
    }
    function encode() {}
    // {size: Int}, DataView, Int, Bool, -> String
    function decode(field, dataview, i = 0, architecture) {
        return getStringView(field.size, dataview, i, architecture);
    }
    return Object.freeze({
        isString,
        encode,
        decode
    });
}
function FitTimestamp() {
    const garmin_epoch = Date.parse("31 Dec 1989 00:00:00 GMT");
    // FitSemanticType -> Bool
    function isTimestamp(type) {
        return [
            "date_time",
            "local_date_time"
        ].includes(type);
    }
    // JSTimestamp -> FitTimestamp
    function apply(jsTimestamp) {
        return Math.round((jsTimestamp - garmin_epoch) / 1000);
    }
    // FitTimestamp -> JSTimestamp
    function remove(fitTimestamp) {
        return fitTimestamp * 1000 + garmin_epoch;
    }
    // JSTimestamp, JSTimestamp -> FitTimestamp
    function elapsed(start, end) {
        return apply(end) - apply(start);
    }
    function encode(field, value, view, i, architecture) {
        return setView(field.base_type, apply(value), view, i, architecture);
    }
    // {base_type: BaseType}, Dataview, Int, Bool -> Timestamp
    function decode(field, view, i, architecture) {
        return remove(getView(field.base_type, view, i, architecture));
    }
    return Object.freeze({
        isTimestamp,
        apply,
        remove,
        elapsed,
        encode,
        decode
    });
}
function FitNumber() {
    function isNumber() {
        throw `Not implemented!`;
    }
    function apply(scale, offset, value) {
        return (value ?? 0) * (scale ?? 1) + (offset ?? 0) * (scale ?? 1);
    }
    function remove(scale, offset, value) {
        return ((value ?? 0) - (offset ?? 0) * (scale ?? 1)) / (scale ?? 1);
    }
    // {base_type: BaseType, scale: Int, offset: Int}, Number, DataView, Int, Bool,
    // ->
    // DataView
    function encode(field, value, view, i = 0, architecture = true) {
        return setView(field.base_type, apply(field.scale, field.offset, value), view, i, architecture);
    }
    // {base_type: BaseType, scale: Int, offset: Int}, DataView, Int, Bool,
    // ->
    // Number
    function decode(field, view, i = 0, architecture = true) {
        return remove(field.scale, field.offset, getView(field.base_type, view, i, architecture));
    }
    return Object.freeze({
        isNumber,
        apply,
        remove,
        encode,
        decode
    });
}
const type = {
    string: FitString(),
    timestamp: FitTimestamp(),
    number: FitNumber()
};

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgG1W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileHeader", ()=>FileHeader);
parcelHelpers.export(exports, "fileHeader", ()=>fileHeader);
var _functionsJs = require("../functions.js");
var _commonJs = require("./common.js");
var _crcJs = require("./crc.js");
function FileHeader(args = {}) {
    const _type = (0, _commonJs.RecordType).header;
    const architecture = args.architecture ?? true;
    const protocolVersion = (0, _commonJs.ValueParser)({
        encode: function(version) {
            if ((0, _functionsJs.equals)(version, "2.0")) return 32;
            if ((0, _functionsJs.equals)(version, "1.0")) return 16;
            return 16;
        },
        decode: function(code) {
            if ((0, _functionsJs.equals)(code, 32)) return "2.0";
            if ((0, _functionsJs.equals)(code, 16)) return "1.0";
            return "1.0";
        }
    });
    const profileVersion = (0, _commonJs.ValueParser)({
        encode: function(version) {
            if (!(0, _functionsJs.exists)(version)) return 2140;
            return parseInt(parseFloat(version) * 100);
        },
        decode: function(code) {
            return (code / 100).toFixed(2);
        }
    });
    const dataType = (0, _commonJs.ValueParser)({
        encode: function(str) {
            let code = 0;
            for(let i = 0; i < fields.dataType.size; i++)code += str.charCodeAt(i) << 8 * i;
            return code;
        },
        decode: function(code) {
            let str = "";
            for(let i = 0; i < fields.dataType.size; i++)str += String.fromCharCode((code & 0xFF << 8 * i) >> 8 * i);
            return str;
        }
    });
    const headerCRC = (0, _commonJs.ValueParser)({
        encode: (_, view)=>(0, _crcJs.CRC).calculateCRC(view, 0, 11)
    });
    const crcPresent = (headerSize)=>(0, _functionsJs.equals)(headerSize, 14) ? true : false;
    const fields = {
        // Indicates the length of this file header including header size.
        // Minimum size is 12. This may be increased in future to add additional
        // optional information
        headerSize: {
            size: 1,
            type: "Uint8",
            default: 14,
            present: (_)=>true,
            parser: (0, _commonJs.identityParser)
        },
        protocolVersion: {
            size: 1,
            type: "Uint8",
            default: "2.0",
            present: (_)=>true,
            parser: protocolVersion
        },
        profileVersion: {
            size: 2,
            type: "Uint16",
            default: "21.40",
            present: (_)=>true,
            parser: profileVersion
        },
        // Length of the Data Records section in bytesDoes not include Header or CRC
        dataSize: {
            size: 4,
            type: "Uint32",
            default: 0,
            present: (_)=>true,
            parser: (0, _commonJs.identityParser)
        },
        // ASCII values for ".FIT", [46, 70, 73, 84], 1414088238
        dataType: {
            size: 4,
            type: "Uint32",
            default: ".FIT",
            present: (_)=>true,
            parser: dataType
        },
        // Contains the value of the CRC of Bytes 0 through 11 or may be set to 0x0000. Optional.
        crc: {
            size: 2,
            type: "Uint16",
            default: 0x0000,
            present: crcPresent,
            parser: headerCRC
        }
    };
    const order = [
        "headerSize",
        // acts as flags
        "protocolVersion",
        "profileVersion",
        "dataSize",
        "dataType",
        "crc"
    ];
    // FitRecord{
    //  type: Record.header,
    //  length: Int,
    //  headerSize: Int,
    //  protocolVersion: String,
    //  profileVersion: String,
    //  dataSize: Int,
    //  dataType: String,
    //  crc: Int
    // },
    // DataView,
    // Int,
    // -> DataView
    function encode(definition, view, i = 0) {
        return order.reduce(function(acc, fieldName) {
            const field = fields[fieldName];
            if (field.present(definition.headerSize)) {
                const value = field.parser.encode(definition[fieldName], acc.view);
                (0, _commonJs.setView)(field.type, value, acc.view, acc.i, architecture, false);
                acc.i += field.size;
            }
            return acc;
        }, {
            i: 0,
            view: view
        }).view;
    }
    // DataView
    //->
    // FitRecord{
    //  type: Record.header,
    //  length: Int,
    //  headerSize: Int,
    //  protocolVersion: String,
    //  profileVersion: String,
    //  dataSize: Int,
    //  dataType: String,
    //  crc: Int
    // }
    function decode(view, start = 0) {
        return order.reduce(function(acc, fieldName) {
            const field = fields[fieldName];
            if (field.present(acc?.data?.headerSize)) {
                const value = (0, _commonJs.getView)(field.type, view, acc.i, architecture, false);
                acc.data[fieldName] = field.parser.decode(value);
                acc.i += field.size;
                acc.data.length += field.size;
            }
            return acc;
        }, {
            i: start,
            data: {
                type: _type,
                length: 0
            }
        }).data;
    }
    function isFileHeader(view, start = 0) {
        return (0, _functionsJs.equals)(start, 0);
    }
    function toFITjs(args = {}) {
        const headerSize = args.headerSize ?? 14;
        const length = headerSize;
        const crc = (0, _functionsJs.equals)(headerSize, 14) ? args.crc ?? 0 : undefined;
        return {
            type: _type,
            length,
            headerSize,
            protocolVersion: args.protocolVersion ?? "2.0",
            profileVersion: args.profileVersion ?? "21.40",
            dataSize: args.dataSize ?? 0,
            dataType: ".FIT",
            crc
        };
    }
    return Object.freeze({
        type: _type,
        encode,
        decode,
        isFileHeader,
        toFITjs
    });
}
const fileHeader = FileHeader();

},{"../functions.js":"2jd1e","./common.js":"konCx","./crc.js":"kG8qL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8rFV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RecordHeader", ()=>RecordHeader);
parcelHelpers.export(exports, "recordHeader", ()=>recordHeader);
var _functionsJs = require("../functions.js");
var _commonJs = require("./common.js");
function RecordHeader() {
    // NOTE: Supports only Normal Header Type
    // does not support Compressed Timestamp Header
    const size = 1;
    const headerType = (0, _commonJs.ValueParser)({
        encode: (type)=>(0, _functionsJs.equals)(type, (0, _commonJs.HeaderType).normal) ? 0 : 1,
        decode: (code)=>(0, _functionsJs.equals)(code, 0) ? (0, _commonJs.HeaderType).normal : (0, _commonJs.HeaderType).timestamp
    });
    const messageType = (0, _commonJs.ValueParser)({
        encode: (type)=>(0, _functionsJs.equals)(type, (0, _commonJs.RecordType).definition) ? 1 : 0,
        decode: (code)=>(0, _functionsJs.equals)(code, 1) ? (0, _commonJs.RecordType).definition : (0, _commonJs.RecordType).data
    });
    const messageTypeSpecific = (0, _commonJs.ValueParser)({
        encode: (byte)=>0,
        decode: (byte)=>(0, _functionsJs.equals)((0, _functionsJs.nthBit)(byte, 6), 1) && (0, _functionsJs.equals)((0, _functionsJs.nthBit)(byte, 5), 1) ? "developer" : "reserved"
    });
    const bits = {
        // 0 normal header, 1 Compressed Timestamp Header
        "headerType": {
            size: 1,
            default: 0,
            present: (_)=>true,
            parser: headerType
        },
        // 0 data message, 1 definition message
        "messageType": {
            size: 1,
            default: 0,
            present: (_)=>true,
            parser: messageType
        },
        // if definition message and set to 1 the message contains extended definitions for developer data
        "messageTypeSpecific": {
            size: 1,
            default: 0,
            present: (_)=>true,
            parser: (0, _commonJs.identityParser)
        },
        "reserved": {
            size: 1,
            default: 0,
            present: (_)=>true,
            parser: (0, _commonJs.identityParser)
        },
        // local message type/number
        "localMessageType": {
            size: 4,
            default: 0,
            present: (_)=>true,
            parser: (0, _commonJs.identityParser)
        }
    };
    const order = [
        "headerType",
        "messageType",
        "messageTypeSpecific",
        "reserved",
        "localMessageType"
    ];
    // {headerType: String, messageType: String, messageTypeSpecific: String, localMessageType: Int}
    // ->
    // Int,
    function encode(definition) {
        let byte = 0 + (definition.localMessageType ?? 0);
        if ((0, _functionsJs.equals)(definition.headerType, (0, _commonJs.HeaderType).timestamp)) byte = (0, _functionsJs.setBit)(7, byte);
        if ((0, _functionsJs.equals)(definition.messageType, (0, _commonJs.RecordType).definition)) byte = (0, _functionsJs.setBit)(6, byte);
        if ((0, _functionsJs.equals)(definition.messageTypeSpecific, "developer")) byte = (0, _functionsJs.setBit)(5, byte);
        return byte;
    }
    // Int,
    // ->
    // {headerType: String, messageType: String, messageTypeSpecific: String, localMessageType: Int}
    function decode(byte) {
        return {
            headerType: headerType.decode((0, _functionsJs.nthBit)(byte, 7)),
            messageType: messageType.decode((0, _functionsJs.nthBit)(byte, 6)),
            messageTypeSpecific: messageTypeSpecific.decode(byte),
            localMessageType: byte & 15
        };
    }
    function isDefinition(header) {
        if ((0, _functionsJs.isNumber)(header)) return (0, _functionsJs.equals)((0, _functionsJs.nthBit)(header, 6), 0) ? true : false;
        if ((0, _functionsJs.isObject)(header)) return (0, _functionsJs.equals)(header.messageType, (0, _commonJs.RecordType).definition) ? true : false;
        return false;
    }
    function isData(header) {
        if ((0, _functionsJs.isNumber)(header)) return (0, _functionsJs.equals)((0, _functionsJs.nthBit)(header, 6), 1) ? true : false;
        if ((0, _functionsJs.isObject)(header)) return (0, _functionsJs.equals)(header.messageType, (0, _commonJs.RecordType).data) ? true : false;
        return false;
    }
    function isDeveloper(header) {
        if ((0, _functionsJs.isNumber)(header)) return isDefinition(header) && (0, _functionsJs.equals)((0, _functionsJs.nthBit)(header, 5), 1) ? true : false;
        if ((0, _functionsJs.isObject)(header)) return (0, _functionsJs.equals)(header.messageTypeSpecific, "developer") && (0, _functionsJs.equals)(header.messageType, (0, _commonJs.RecordType).definition) ? true : false;
        return false;
    }
    return Object.freeze({
        size,
        isDefinition,
        isData,
        isDeveloper,
        encode,
        decode
    });
}
const recordHeader = RecordHeader();

},{"../functions.js":"2jd1e","./common.js":"konCx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5M5bZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fieldDefinition", ()=>fieldDefinition);
var _profilesJs = require("./profiles/profiles.js");
function FieldDefinition(args = {}) {
    const architecture = args.architecture ?? true;
    const length = 3;
    const numberIndex = (offset = 0)=>offset + 0;
    const sizeIndex = (offset = 0)=>offset + 1;
    const baseTypeIndex = (offset = 0)=>offset + 2;
    // {number: Int, size: Int, base_type: BaseType}
    // DataView,
    // Int,
    // -> DataView
    function encode(definition, view, i = 0) {
        const base_type_number = (0, _profilesJs.profiles).BaseType[definition.base_type];
        view.setUint8(numberIndex(i), definition.number, architecture);
        view.setUint8(sizeIndex(i), definition.size, architecture);
        view.setUint8(baseTypeIndex(i), base_type_number, architecture);
        return view;
    }
    // String
    // DataView,
    // Int,
    // ->
    // {number: Int, size: Int, base_type: BaseType}
    function decode(messageName, view, i = 0) {
        const number = view.getUint8(numberIndex(i), architecture);
        const size = view.getUint8(sizeIndex(i), architecture);
        const base_type_number = view.getUint8(baseTypeIndex(i), architecture);
        const base_type = (0, _profilesJs.profiles).BaseType[base_type_number.toString()];
        return {
            number,
            size,
            base_type
        };
    }
    return Object.freeze({
        length,
        numberIndex,
        sizeIndex,
        baseTypeIndex,
        encode,
        decode
    });
}
const fieldDefinition = FieldDefinition();

},{"./profiles/profiles.js":"6Nq6B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Nq6B":[function(require,module,exports) {
//
// Profiles
//
// merge, shape, and export, data from the global and product profile json files
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Profiles", ()=>Profiles);
parcelHelpers.export(exports, "profiles", ()=>profiles);
var _functionsJs = require("../../functions.js");
var _baseTypesJs = require("./base-types.js");
var _globalMessageDefinitionsJson = require("./global-message-definitions.json");
var _globalMessageDefinitionsJsonDefault = parcelHelpers.interopDefault(_globalMessageDefinitionsJson);
var _globalTypeDefinitionsJson = require("./global-type-definitions.json");
var _globalTypeDefinitionsJsonDefault = parcelHelpers.interopDefault(_globalTypeDefinitionsJson);
var _globalFieldDefinitionsJson = require("./global-field-definitions.json");
var _globalFieldDefinitionsJsonDefault = parcelHelpers.interopDefault(_globalFieldDefinitionsJson);
function Profiles(args = {}) {
    // merge product types, messages, and fields with the global ones
    const types = (0, _globalTypeDefinitionsJsonDefault.default);
    const messages = (0, _globalMessageDefinitionsJsonDefault.default);
    const fields = (0, _globalFieldDefinitionsJsonDefault.default);
    // methods
    function numberToMessageName(number) {
        return types["mesg_num"].values[number.toString()] ?? `message_${number}`;
    }
    // String -> Field{}
    function Field(name) {
        return {
            name,
            ...fields[name] ?? {}
        };
    }
    // Int -> Field{
    //     name: String,
    //     type: String,
    //     base_type: BaseType,
    //     units: String,
    //     scale: Int,
    //     offset: Int,
    //     bits: Int,
    //     accumulate: String
    // }
    function numberToField(messageName, fieldNumber) {
        const message = messages[messageName];
        if (!(0, _functionsJs.exists)(message)) return Field(`field_${fieldNumber}`);
        const messageFields = message.fields;
        for(let fieldName in messageFields){
            if ((0, _functionsJs.equals)(messageFields[fieldName], fieldNumber)) return Field(fieldName);
        }
        return Field(`field_${fieldNumber}`);
    }
    function messageNameToNumber(name) {
        return types.mesg_num.values[name] ?? 0xFFFF;
    }
    // String -> GlobalFieldDefinition{}
    function fieldNameToField(fieldName) {
        return fields[fieldName];
    }
    function fieldNameToNumber(messageName, fieldName) {
        return messages[messageName].fields[fieldName];
    }
    function fieldNameToSize(name) {
        return (0, _baseTypesJs.BaseTypeDefinitions)[fields[name].base_type].size;
    }
    function fieldNameToBaseType(name) {
        return fields[name].base_type;
    }
    return Object.freeze({
        BaseType: (0, _baseTypesJs.BaseType),
        BaseTypeDefinitions: (0, _baseTypesJs.BaseTypeDefinitions),
        types,
        messages,
        fields,
        numberToMessageName,
        messageNameToNumber,
        numberToField,
        fieldNameToField,
        fieldNameToNumber,
        fieldNameToSize,
        fieldNameToBaseType
    });
}
function toDualKeyMap(source, first_key, second_key) {
    return source.reduce(function(acc, sourceItem) {
        acc.set(sourceItem[first_key], sourceItem);
        acc.set(sourceItem[second_key], sourceItem);
        return acc;
    }, new Map());
}
const profiles = Profiles();

},{"../../functions.js":"2jd1e","./base-types.js":"1SRgD","./global-message-definitions.json":"mKIJK","./global-type-definitions.json":"b1mBc","./global-field-definitions.json":"lmo5y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1SRgD":[function(require,module,exports) {
//
// Types
//
// as defined in table 1 of the fit protocol profiles.xmls
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseType", ()=>BaseType);
parcelHelpers.export(exports, "BaseTypeDefinitions", ()=>BaseTypeDefinitions);
const BaseType = {
    enum: 0,
    // 0x00
    sint8: 1,
    // 0x01
    uint8: 2,
    // 0x02
    sint16: 131,
    // 0x83
    uint16: 132,
    // 0x84
    sint32: 133,
    // 0x85
    uint32: 134,
    // 0x86
    string: 7,
    // 0x07
    float32: 136,
    // 0x88
    float64: 137,
    // 0x89
    uint8z: 10,
    // 0x0A
    uint16z: 139,
    // 0x8B
    uint32z: 140,
    // 0x8C
    byte: 13,
    // 0x0D
    sint64: 142,
    // 0x8E
    uint64: 143,
    // 0x8F
    uint64z: 144,
    // 0x90
    "0": "enum",
    "1": "sint8",
    "2": "uint8",
    "131": "sint16",
    "132": "uint16",
    "133": "sint32",
    "134": "uint32",
    "7": "string",
    "136": "float32",
    "137": "float64",
    "10": "uint8z",
    "139": "uint16z",
    "140": "uint32z",
    "13": "byte",
    "142": "sint64",
    "143": "uint64",
    "144": "uint64z"
};
const BaseTypeDefinitions = {
    "enum": {
        name: "enum",
        base_type: BaseType.enum,
        endian_ability: 0,
        size: 1,
        invalid_value: 0xFF
    },
    "sint8": {
        name: "sint8",
        base_type: BaseType.sint8,
        endian_ability: 0,
        size: 1,
        invalid_value: 0x7F
    },
    "uint8": {
        name: "uint8",
        base_type: BaseType.uint8,
        endian_ability: 0,
        size: 1,
        invalid_value: 0xFF
    },
    "sint16": {
        name: "sint16",
        base_type: BaseType.sint16,
        endian_ability: 1,
        size: 2,
        invalid_value: 0x7FFF
    },
    "uint16": {
        name: "uint16",
        base_type: BaseType.uint16,
        endian_ability: 1,
        size: 2,
        invalid_value: 0xFFFF
    },
    "sint32": {
        name: "sint32",
        base_type: BaseType.sint32,
        endian_ability: 1,
        size: 4,
        invalid_value: 0x7FFFFFFF
    },
    "uint32": {
        name: "uint32",
        base_type: BaseType.uint32,
        endian_ability: 1,
        size: 4,
        invalid_value: 0xFFFFFFFF
    },
    "string": {
        name: "string",
        base_type: BaseType.string,
        endian_ability: 0,
        size: 1,
        invalid_value: 0x00
    },
    "float32": {
        name: "float32",
        base_type: BaseType.float32,
        endian_ability: 1,
        size: 4,
        invalid_value: 0xFFFFFFFF
    },
    "float64": {
        name: "float64",
        base_type: BaseType.float64,
        endian_ability: 1,
        size: 8,
        invalid_value: 0xFFFFFFFFFFFFFFFF
    },
    "uint8z": {
        name: "uint8z",
        base_type: BaseType.uint8z,
        endian_ability: 0,
        size: 1,
        invalid_value: 0x00
    },
    "uint16z": {
        name: "uint16z",
        base_type: BaseType.uint16z,
        endian_ability: 1,
        size: 2,
        invalid_value: 0x0000
    },
    "uint32z": {
        name: "uint32z",
        base_type: BaseType.uint32z,
        endian_ability: 1,
        size: 4,
        invalid_value: 0x00000000
    },
    "byte": {
        name: "byte",
        base_type: BaseType.byte,
        endian_ability: 0,
        size: 1,
        invalid_value: 0xFF
    },
    "sint64": {
        name: "sint64",
        base_type: BaseType.sint64,
        endian_ability: 1,
        size: 8,
        invalid_value: 0x7FFFFFFFFFFFFFFF
    },
    "uint64": {
        name: "uint64",
        base_type: BaseType.uint64,
        endian_ability: 1,
        size: 8,
        invalid_value: 0xFFFFFFFFFFFFFFFF
    },
    "uint64z": {
        name: "uint64z",
        base_type: BaseType.uint64z,
        endian_ability: 1,
        size: 8,
        invalid_value: 0x0000000000000000
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mKIJK":[function(require,module,exports) {
module.exports = JSON.parse('{"file_id":{"fields":{"type":0,"manufacturer":1,"product":2,"serial_number":3,"time_created":4,"number":5,"product_name":8}},"file_creator":{"fields":{"software_version":0,"hardware_version":1}},"timestamp_correlation":{"fields":{"timestamp":253,"fractional_timestamp":0,"system_timestamp":1,"fractional_system_timestamp":2,"local_timestamp":3,"timestamp_ms":4,"system_timestamp_ms":5}},"activity":{"fields":{"timestamp":253,"total_timer_time":0,"num_sessions":1,"type":2,"event":3,"event_type":4,"local_timestamp":5,"event_group":6}},"session":{"fields":{"message_index":254,"timestamp":253,"event":0,"event_type":1,"start_time":2,"start_position_lat":3,"start_position_long":4,"sport":5,"sub_sport":6,"total_elapsed_time":7,"total_timer_time":8,"total_distance":9,"total_cycles":10,"total_calories":11,"total_fat_calories":13,"avg_speed":14,"max_speed":15,"avg_heart_rate":16,"max_heart_rate":17,"avg_cadence":18,"max_cadence":19,"avg_power":20,"max_power":21,"total_ascent":22,"total_descent":23,"total_training_effect":24,"first_lap_index":25,"num_laps":26,"event_group":27,"trigger":28,"nec_lat":29,"nec_long":30,"swc_lat":31,"swc_long":32,"num_lengths":33,"normalized_power":34,"training_stress_score":35,"intensity_factor":36,"left_right_balance":37,"avg_stroke_count":41,"avg_stroke_distance":42,"swim_stroke":43,"pool_length":44,"threshold_power":45,"pool_length_unit":46,"num_active_lengths":47,"total_work":48,"avg_altitude":49,"max_altitude":50,"gps_accuracy":51,"avg_grade":52,"avg_pos_grade":53,"avg_neg_grade":54,"max_pos_grade":55,"max_neg_grade":56,"avg_temperature":57,"max_temperature":58,"total_moving_time":59,"avg_pos_vertical_speed":60,"avg_neg_vertical_speed":61,"max_pos_vertical_speed":62,"max_neg_vertical_speed":63,"min_heart_rate":64,"time_in_hr_zone":65,"time_in_speed_zone":66,"time_in_cadence_zone":67,"time_in_power_zone":68,"avg_lap_time":69,"best_lap_index":70,"min_altitude":71,"player_score":82,"opponent_score":83,"opponent_name":84,"stroke_count":85,"zone_count":86,"max_ball_speed":87,"avg_ball_speed":88,"avg_vertical_oscillation":89,"avg_stance_time_percent":90,"avg_stance_time":91,"avg_fractional_cadence":92,"max_fractional_cadence":93,"total_fractional_cycles":94,"avg_total_hemoglobin_conc":95,"min_total_hemoglobin_conc":96,"max_total_hemoglobin_conc":97,"avg_saturated_hemoglobin_percent":98,"min_saturated_hemoglobin_percent":99,"max_saturated_hemoglobin_percent":100,"avg_left_torque_effectiveness":101,"avg_right_torque_effectiveness":102,"avg_left_pedal_smoothness":103,"avg_right_pedal_smoothness":104,"avg_combined_pedal_smoothness":105,"sport_index":111,"time_standing":112,"stand_count":113,"avg_left_pco":114,"avg_right_pco":115,"avg_left_power_phase":116,"avg_left_power_phase_peak":117,"avg_right_power_phase":118,"avg_right_power_phase_peak":119,"avg_power_position":120,"max_power_position":121,"avg_cadence_position":122,"max_cadence_position":123,"enhanced_avg_speed":124,"enhanced_max_speed":125,"enhanced_avg_altitude":126,"enhanced_min_altitude":127,"enhanced_max_altitude":128,"avg_lev_motor_power":129,"max_lev_motor_power":130,"lev_battery_consumption":131,"avg_vertical_ratio":132,"avg_stance_time_balance":133,"avg_step_length":134,"total_anaerobic_training_effect":137,"avg_vam":139,"total_grit":181,"total_flow":182,"jump_count":183,"avg_grit":186,"avg_flow":187,"total_fractional_ascent":199,"total_fractional_descent":200,"avg_core_temperature":208,"min_core_temperature":209,"max_core_temperature":210}},"lap":{"fields":{"message_index":254,"timestamp":253,"event":0,"event_type":1,"start_time":2,"start_position_lat":3,"start_position_long":4,"end_position_lat":5,"end_position_long":6,"total_elapsed_time":7,"total_timer_time":8,"total_distance":9,"total_cycles":10,"total_calories":11,"total_fat_calories":12,"avg_speed":13,"max_speed":14,"avg_heart_rate":15,"max_heart_rate":16,"avg_cadence":17,"max_cadence":18,"avg_power":19,"max_power":20,"total_ascent":21,"total_descent":22,"intensity":23,"lap_trigger":24,"sport":25,"event_group":26,"num_lengths":32,"normalized_power":33,"left_right_balance":34,"first_length_index":35,"avg_stroke_distance":37,"swim_stroke":38,"sub_sport":39,"num_active_lengths":40,"total_work":41,"avg_altitude":42,"max_altitude":43,"gps_accuracy":44,"avg_grade":45,"avg_pos_grade":46,"avg_neg_grade":47,"max_pos_grade":48,"max_neg_grade":49,"avg_temperature":50,"max_temperature":51,"total_moving_time":52,"avg_pos_vertical_speed":53,"avg_neg_vertical_speed":54,"max_pos_vertical_speed":55,"max_neg_vertical_speed":56,"time_in_hr_zone":57,"time_in_speed_zone":58,"time_in_cadence_zone":59,"time_in_power_zone":60,"repetition_num":61,"min_altitude":62,"min_heart_rate":63,"wkt_step_index":71,"opponent_score":74,"stroke_count":75,"zone_count":76,"avg_vertical_oscillation":77,"avg_stance_time_percent":78,"avg_stance_time":79,"avg_fractional_cadence":80,"max_fractional_cadence":81,"total_fractional_cycles":82,"player_score":83,"avg_total_hemoglobin_conc":84,"min_total_hemoglobin_conc":85,"max_total_hemoglobin_conc":86,"avg_saturated_hemoglobin_percent":87,"min_saturated_hemoglobin_percent":88,"max_saturated_hemoglobin_percent":89,"avg_left_torque_effectiveness":91,"avg_right_torque_effectiveness":92,"avg_left_pedal_smoothness":93,"avg_right_pedal_smoothness":94,"avg_combined_pedal_smoothness":95,"time_standing":98,"stand_count":99,"avg_left_pco":100,"avg_right_pco":101,"avg_left_power_phase":102,"avg_left_power_phase_peak":103,"avg_right_power_phase":104,"avg_right_power_phase_peak":105,"avg_power_position":106,"max_power_position":107,"avg_cadence_position":108,"max_cadence_position":109,"enhanced_avg_speed":110,"enhanced_max_speed":111,"enhanced_avg_altitude":112,"enhanced_min_altitude":113,"enhanced_max_altitude":114,"avg_lev_motor_power":115,"max_lev_motor_power":116,"lev_battery_consumption":117,"avg_vertical_ratio":118,"avg_stance_time_balance":119,"avg_step_length":120,"avg_vam":121,"total_grit":149,"total_flow":150,"jump_count":151,"avg_grit":153,"avg_flow":154,"total_fractional_ascent":156,"total_fractional_descent":157,"avg_core_temperature":158,"min_core_temperature":159,"max_core_temperature":160}},"length":{"fields":{"message_index":254,"timestamp":253,"event":0,"event_type":1,"start_time":2,"total_elapsed_time":3,"total_timer_time":4,"total_strokes":5,"avg_speed":6,"swim_stroke":7,"avg_swimming_cadence":9,"event_group":10,"total_calories":11,"length_type":12,"player_score":18,"opponent_score":19,"stroke_count":20,"zone_count":21}},"record":{"fields":{"timestamp":253,"position_lat":0,"position_long":1,"altitude":2,"heart_rate":3,"cadence":4,"distance":5,"speed":6,"power":7,"compressed_speed_distance":8,"grade":9,"resistance":10,"time_from_course":11,"cycle_length":12,"temperature":13,"speed_1s":17,"cycles":18,"total_cycles":19,"compressed_accumulated_power":28,"accumulated_power":29,"left_right_balance":30,"gps_accuracy":31,"vertical_speed":32,"calories":33,"vertical_oscillation":39,"stance_time_percent":40,"stance_time":41,"activity_type":42,"left_torque_effectiveness":43,"right_torque_effectiveness":44,"left_pedal_smoothness":45,"right_pedal_smoothness":46,"combined_pedal_smoothness":47,"time128":48,"stroke_type":49,"zone":50,"ball_speed":51,"cadence256":52,"fractional_cadence":53,"total_hemoglobin_conc":54,"total_hemoglobin_conc_min":55,"total_hemoglobin_conc_max":56,"saturated_hemoglobin_percent":57,"saturated_hemoglobin_percent_min":58,"saturated_hemoglobin_percent_max":59,"device_index":62,"left_pco":67,"right_pco":68,"left_power_phase":69,"left_power_phase_peak":70,"right_power_phase":71,"right_power_phase_peak":72,"enhanced_speed":73,"enhanced_altitude":78,"battery_soc":81,"motor_power":82,"vertical_ratio":83,"stance_time_balance":84,"step_length":85,"absolute_pressure":91,"depth":92,"next_stop_depth":93,"next_stop_time":94,"time_to_surface":95,"ndl_time":96,"cns_load":97,"n2_load":98,"grit":114,"flow":115,"ebike_travel_range":117,"ebike_battery_level":118,"ebike_assist_mode":119,"ebike_assist_level_percent":120,"core_temperature":139}},"event":{"fields":{"timestamp":253,"event":0,"event_type":1,"data16":2,"data":3,"event_group":4,"score":7,"opponent_score":8,"front_gear_num":9,"front_gear":10,"rear_gear_num":11,"rear_gear":12,"device_index":13,"radar_threat_level_max":21,"radar_threat_count":22}},"device_info":{"fields":{"timestamp":253,"device_index":0,"device_type":1,"manufacturer":2,"serial_number":3,"product":4,"software_version":5,"hardware_version":6,"cum_operating_time":7,"battery_voltage":10,"battery_status":11,"sensor_position":18,"descriptor":19,"ant_transmission_type":20,"ant_device_number":21,"ant_network":22,"source_type":25,"product_name":27}},"training_file":{"fields":{"timestamp":253,"type":0,"manufacturer":1,"product":2,"serial_number":3,"time_created":4}},"hrv":{"fields":{"time":0}},"weather_conditions":{"fields":{"timestamp":253,"weather_report":0,"temperature":1,"condition":2,"wind_direction":3,"wind_speed":4,"precipitation_probability":5,"temperature_feels_like":6,"relative_humidity":7,"location":8,"observed_at_time":9,"observed_location_lat":10,"observed_location_long":11,"day_of_week":12,"high_temperature":13,"low_temperature":14}},"weather_alert":{"fields":{"timestamp":253,"report_id":0,"issue_time":1,"expire_time":2,"severity":3,"type":4}},"gps_metadata":{"fields":{"timestamp":253,"timestamp_ms":0,"position_lat":1,"position_long":2,"enhanced_altitude":3,"enhanced_speed":4,"heading":5,"utc_timestamp":6,"velocity":7}},"camera_event":{"fields":{"timestamp":253,"timestamp_ms":0,"camera_event_type":1,"camera_file_uuid":2,"camera_orientation":3}},"gyroscope_data":{"fields":{"timestamp":253,"timestamp_ms":0,"sample_time_offset":1,"gyro_x":2,"gyro_y":3,"gyro_z":4,"calibrated_gyro_x":5,"calibrated_gyro_y":6,"calibrated_gyro_z":7}},"accelerometer_data":{"fields":{"timestamp":253,"timestamp_ms":0,"sample_time_offset":1,"accel_x":2,"accel_y":3,"accel_z":4,"calibrated_accel_x":5,"calibrated_accel_y":6,"calibrated_accel_z":7,"compressed_calibrated_accel_x":8,"compressed_calibrated_accel_y":9,"compressed_calibrated_accel_z":10}},"magnetometer_data":{"fields":{"timestamp":253,"timestamp_ms":0,"sample_time_offset":1,"mag_x":2,"mag_y":3,"mag_z":4,"calibrated_mag_x":5,"calibrated_mag_y":6,"calibrated_mag_z":7}},"barometer_data":{"fields":{"timestamp":253,"timestamp_ms":0,"sample_time_offset":1,"baro_pres":2}},"three_d_sensor_calibration":{"fields":{"timestamp":253,"sensor_type":0,"calibration_factor":1,"calibration_divisor":2,"level_shift":3,"offset_cal":4,"orientation_matrix":5}},"one_d_sensor_calibration":{"fields":{"timestamp":253,"sensor_type":0,"calibration_factor":1,"calibration_divisor":2,"level_shift":3,"offset_cal":4}},"video_frame":{"fields":{"timestamp":253,"timestamp_ms":0,"frame_number":1}},"obdii_data":{"fields":{"timestamp":253,"timestamp_ms":0,"time_offset":1,"pid":2,"raw_data":3,"pid_data_size":4,"system_time":5,"start_timestamp":6,"start_timestamp_ms":7}},"nmea_sentence":{"fields":{"timestamp":253,"timestamp_ms":0,"sentence":1}},"aviation_attitude":{"fields":{"timestamp":253,"timestamp_ms":0,"system_time":1,"pitch":2,"roll":3,"accel_lateral":4,"accel_normal":5,"turn_rate":6,"stage":7,"attitude_stage_complete":8,"track":9,"validity":10}},"video":{"fields":{"url":0,"hosting_provider":1,"duration":2}},"video_title":{"fields":{"message_index":254,"message_count":0,"text":1}},"video_description":{"fields":{"message_index":254,"message_count":0,"text":1}},"video_clip":{"fields":{"clip_number":0,"start_timestamp":1,"start_timestamp_ms":2,"end_timestamp":3,"end_timestamp_ms":4,"clip_start":6,"clip_end":7}},"set":{"fields":{"timestamp":254,"duration":0,"repetitions":3,"weight":4,"set_type":5,"start_time":6,"category":7,"category_subtype":8,"weight_display_unit":9,"message_index":10,"wkt_step_index":11}},"jump":{"fields":{"timestamp":253,"distance":0,"height":1,"rotations":2,"hang_time":3,"score":4,"position_lat":5,"position_long":6,"speed":7,"enhanced_speed":8}},"course":{"fields":{"sport":4,"name":5,"capabilities":6,"sub_sport":7}},"course_point":{"fields":{"message_index":254,"timestamp":1,"position_lat":2,"position_long":3,"distance":4,"type":5,"name":6,"favorite":8}}}');

},{}],"b1mBc":[function(require,module,exports) {
module.exports = JSON.parse('{"file":{"base_type":"enum","values":{"1":"device","2":"settings","3":"sport","4":"activity","5":"workout","6":"course","7":"schedules","9":"weight","10":"totals","11":"goals","14":"blood_pressure","15":"monitoring_a","20":"activity_summary","28":"monitoring_daily","32":"monitoring_b","34":"segment","35":"segment_list","40":"exd_configuration","247":"mfg_range_min","254":"mfg_range_max","device":1,"settings":2,"sport":3,"activity":4,"workout":5,"course":6,"schedules":7,"weight":9,"totals":10,"goals":11,"blood_pressure":14,"monitoring_a":15,"activity_summary":20,"monitoring_daily":28,"monitoring_b":32,"segment":34,"segment_list":35,"exd_configuration":40,"mfg_range_min":247,"mfg_range_max":254}},"mesg_num":{"base_type":"uint16","values":{"0":"file_id","1":"capabilities","2":"device_settings","3":"user_profile","4":"hrm_profile","5":"sdm_profile","6":"bike_profile","7":"zones_target","8":"hr_zone","9":"power_zone","10":"met_zone","12":"sport","15":"goal","18":"session","19":"lap","20":"record","21":"event","23":"device_info","26":"workout","27":"workout_step","28":"schedule","30":"weight_scale","31":"course","32":"course_point","33":"totals","34":"activity","35":"software","37":"file_capabilities","38":"mesg_capabilities","39":"field_capabilities","49":"file_creator","51":"blood_pressure","53":"speed_zone","55":"monitoring","72":"training_file","78":"hrv","80":"ant_rx","81":"ant_tx","82":"ant_channel_id","101":"length","103":"monitoring_info","105":"pad","106":"slave_device","127":"connectivity","128":"weather_conditions","129":"weather_alert","131":"cadence_zone","132":"hr","142":"segment_lap","145":"memo_glob","148":"segment_id","149":"segment_leaderboard_entry","150":"segment_point","151":"segment_file","158":"workout_session","159":"watchface_settings","160":"gps_metadata","161":"camera_event","162":"timestamp_correlation","164":"gyroscope_data","165":"accelerometer_data","167":"three_d_sensor_calibration","169":"video_frame","174":"obdii_data","177":"nmea_sentence","178":"aviation_attitude","184":"video","185":"video_title","186":"video_description","187":"video_clip","188":"ohr_settings","200":"exd_screen_configuration","201":"exd_data_field_configuration","202":"exd_data_concept_configuration","206":"field_description","207":"developer_data_id","208":"magnetometer_data","209":"barometer_data","210":"one_d_sensor_calibration","225":"set","227":"stress_level","258":"dive_settings","259":"dive_gas","262":"dive_alarm","264":"exercise_title","268":"dive_summary","285":"jump","317":"climb_pro","65280":"mfg_range_min","65534":"mfg_range_max","file_id":0,"capabilities":1,"device_settings":2,"user_profile":3,"hrm_profile":4,"sdm_profile":5,"bike_profile":6,"zones_target":7,"hr_zone":8,"power_zone":9,"met_zone":10,"sport":12,"goal":15,"session":18,"lap":19,"record":20,"event":21,"device_info":23,"workout":26,"workout_step":27,"schedule":28,"weight_scale":30,"course":31,"course_point":32,"totals":33,"activity":34,"software":35,"file_capabilities":37,"mesg_capabilities":38,"field_capabilities":39,"file_creator":49,"blood_pressure":51,"speed_zone":53,"monitoring":55,"training_file":72,"hrv":78,"ant_rx":80,"ant_tx":81,"ant_channel_id":82,"length":101,"monitoring_info":103,"pad":105,"slave_device":106,"connectivity":127,"weather_conditions":128,"weather_alert":129,"cadence_zone":131,"hr":132,"segment_lap":142,"memo_glob":145,"segment_id":148,"segment_leaderboard_entry":149,"segment_point":150,"segment_file":151,"workout_session":158,"watchface_settings":159,"gps_metadata":160,"camera_event":161,"timestamp_correlation":162,"gyroscope_data":164,"accelerometer_data":165,"three_d_sensor_calibration":167,"video_frame":169,"obdii_data":174,"nmea_sentence":177,"aviation_attitude":178,"video":184,"video_title":185,"video_description":186,"video_clip":187,"ohr_settings":188,"exd_screen_configuration":200,"exd_data_field_configuration":201,"exd_data_concept_configuration":202,"field_description":206,"developer_data_id":207,"magnetometer_data":208,"barometer_data":209,"one_d_sensor_calibration":210,"set":225,"stress_level":227,"dive_settings":258,"dive_gas":259,"dive_alarm":262,"exercise_title":264,"dive_summary":268,"jump":285,"climb_pro":317,"mfg_range_min":65280,"mfg_range_max":65534}},"checksum":{"base_type":"uint8","values":{"0":"clear","1":"ok","clear":0,"ok":1}},"file_flags":{"base_type":"uint8z","values":{"2":"read","4":"write","8":"erase","read":2,"write":4,"erase":8}},"mesg_count":{"base_type":"enum","values":{"0":"num_per_file","1":"max_per_file","2":"max_per_file_type","num_per_file":0,"max_per_file":1,"max_per_file_type":2}},"date_time":{"base_type":"uint32","values":{"268435456":"min","min":268435456}},"local_date_time":{"base_type":"uint32","values":{"268435456":"min","min":268435456}},"message_index":{"base_type":"uint16","values":{"4095":"mask","28672":"reserved","32768":"selected","selected":32768,"reserved":28672,"mask":4095}},"device_index":{"base_type":"uint8","values":{"0":"creator","creator":0}},"gender":{"base_type":"enum","values":{"0":"female","1":"male","female":0,"male":1}},"language":{"base_type":"enum","values":{"0":"english","1":"french","2":"italian","3":"german","4":"spanish","5":"croatian","6":"czech","7":"danish","8":"dutch","9":"finnish","10":"greek","11":"hungarian","12":"norwegian","13":"polish","14":"portuguese","15":"slovakian","16":"slovenian","17":"swedish","18":"russian","19":"turkish","20":"latvian","21":"ukrainian","22":"arabic","23":"farsi","24":"bulgarian","25":"romanian","26":"chinese","27":"japanese","28":"korean","29":"taiwanese","30":"thai","31":"hebrew","32":"brazilian_portuguese","33":"indonesian","34":"malaysian","35":"vietnamese","36":"burmese","37":"mongolian","254":"custom","english":0,"french":1,"italian":2,"german":3,"spanish":4,"croatian":5,"czech":6,"danish":7,"dutch":8,"finnish":9,"greek":10,"hungarian":11,"norwegian":12,"polish":13,"portuguese":14,"slovakian":15,"slovenian":16,"swedish":17,"russian":18,"turkish":19,"latvian":20,"ukrainian":21,"arabic":22,"farsi":23,"bulgarian":24,"romanian":25,"chinese":26,"japanese":27,"korean":28,"taiwanese":29,"thai":30,"hebrew":31,"brazilian_portuguese":32,"indonesian":33,"malaysian":34,"vietnamese":35,"burmese":36,"mongolian":37,"custom":254}},"language_bits_0":{"base_type":"uint8z","values":{"1":"english","2":"french","4":"italian","8":"german","16":"spanish","32":"croatian","64":"czech","128":"danish","english":1,"french":2,"italian":4,"german":8,"spanish":16,"croatian":32,"czech":64,"danish":128}},"language_bits_1":{"base_type":"uint8z","values":{"1":"dutch","2":"finnish","4":"greek","8":"hungarian","16":"norwegian","32":"polish","64":"portuguese","128":"slovakian","dutch":1,"finnish":2,"greek":4,"hungarian":8,"norwegian":16,"polish":32,"portuguese":64,"slovakian":128}},"language_bits_2":{"base_type":"uint8z","values":{"1":"slovenian","2":"swedish","4":"russian","8":"turkish","16":"latvian","32":"ukrainian","64":"arabic","128":"farsi","slovenian":1,"swedish":2,"russian":4,"turkish":8,"latvian":16,"ukrainian":32,"arabic":64,"farsi":128}},"language_bits_3":{"base_type":"uint8z","values":{"1":"bulgarian","2":"romanian","4":"chinese","8":"japanese","16":"korean","32":"taiwanese","64":"thai","128":"hebrew","bulgarian":1,"romanian":2,"chinese":4,"japanese":8,"korean":16,"taiwanese":32,"thai":64,"hebrew":128}},"language_bits_4":{"base_type":"uint8z","values":{"1":"brazilian_portuguese","2":"indonesian","4":"malaysian","8":"vietnamese","16":"burmese","32":"mongolian","brazilian_portuguese":1,"indonesian":2,"malaysian":4,"vietnamese":8,"burmese":16,"mongolian":32}},"time_zone":{"base_type":"enum","values":{"0":"almaty","1":"bangkok","2":"bombay","3":"brasilia","4":"cairo","5":"cape_verde_is","6":"darwin","7":"eniwetok","8":"fiji","9":"hong_kong","10":"islamabad","11":"kabul","12":"magadan","13":"mid_atlantic","14":"moscow","15":"muscat","16":"newfoundland","17":"samoa","18":"sydney","19":"tehran","20":"tokyo","21":"us_alaska","22":"us_atlantic","23":"us_central","24":"us_eastern","25":"us_hawaii","26":"us_mountain","27":"us_pacific","28":"other","29":"auckland","30":"kathmandu","31":"europe_western_wet","32":"europe_central_cet","33":"europe_eastern_eet","34":"jakarta","35":"perth","36":"adelaide","37":"brisbane","38":"tasmania","39":"iceland","40":"amsterdam","41":"athens","42":"barcelona","43":"berlin","44":"brussels","45":"budapest","46":"copenhagen","47":"dublin","48":"helsinki","49":"lisbon","50":"london","51":"madrid","52":"munich","53":"oslo","54":"paris","55":"prague","56":"reykjavik","57":"rome","58":"stockholm","59":"vienna","60":"warsaw","61":"zurich","62":"quebec","63":"ontario","64":"manitoba","65":"saskatchewan","66":"alberta","67":"british_columbia","68":"boise","69":"boston","70":"chicago","71":"dallas","72":"denver","73":"kansas_city","74":"las_vegas","75":"los_angeles","76":"miami","77":"minneapolis","78":"new_york","79":"new_orleans","80":"phoenix","81":"santa_fe","82":"seattle","83":"washington_dc","84":"us_arizona","85":"chita","86":"ekaterinburg","87":"irkutsk","88":"kaliningrad","89":"krasnoyarsk","90":"novosibirsk","91":"petropavlovsk_kamchatskiy","92":"samara","93":"vladivostok","94":"mexico_central","95":"mexico_mountain","96":"mexico_pacific","97":"cape_town","98":"winkhoek","99":"lagos","100":"riyahd","101":"venezuela","102":"australia_lh","103":"santiago","253":"manual","254":"automatic","almaty":0,"bangkok":1,"bombay":2,"brasilia":3,"cairo":4,"cape_verde_is":5,"darwin":6,"eniwetok":7,"fiji":8,"hong_kong":9,"islamabad":10,"kabul":11,"magadan":12,"mid_atlantic":13,"moscow":14,"muscat":15,"newfoundland":16,"samoa":17,"sydney":18,"tehran":19,"tokyo":20,"us_alaska":21,"us_atlantic":22,"us_central":23,"us_eastern":24,"us_hawaii":25,"us_mountain":26,"us_pacific":27,"other":28,"auckland":29,"kathmandu":30,"europe_western_wet":31,"europe_central_cet":32,"europe_eastern_eet":33,"jakarta":34,"perth":35,"adelaide":36,"brisbane":37,"tasmania":38,"iceland":39,"amsterdam":40,"athens":41,"barcelona":42,"berlin":43,"brussels":44,"budapest":45,"copenhagen":46,"dublin":47,"helsinki":48,"lisbon":49,"london":50,"madrid":51,"munich":52,"oslo":53,"paris":54,"prague":55,"reykjavik":56,"rome":57,"stockholm":58,"vienna":59,"warsaw":60,"zurich":61,"quebec":62,"ontario":63,"manitoba":64,"saskatchewan":65,"alberta":66,"british_columbia":67,"boise":68,"boston":69,"chicago":70,"dallas":71,"denver":72,"kansas_city":73,"las_vegas":74,"los_angeles":75,"miami":76,"minneapolis":77,"new_york":78,"new_orleans":79,"phoenix":80,"santa_fe":81,"seattle":82,"washington_dc":83,"us_arizona":84,"chita":85,"ekaterinburg":86,"irkutsk":87,"kaliningrad":88,"krasnoyarsk":89,"novosibirsk":90,"petropavlovsk_kamchatskiy":91,"samara":92,"vladivostok":93,"mexico_central":94,"mexico_mountain":95,"mexico_pacific":96,"cape_town":97,"winkhoek":98,"lagos":99,"riyahd":100,"venezuela":101,"australia_lh":102,"santiago":103,"manual":253,"automatic":254}},"display_measure":{"base_type":"enum","values":{"0":"metric","1":"statute","2":"nautical","metric":0,"statute":1,"nautical":2}},"display_heart":{"base_type":"enum","values":{"0":"bpm","1":"max","2":"reserve","bpm":0,"max":1,"reserve":2}},"display_power":{"base_type":"enum","values":{"0":"watts","1":"percent_ftp","watts":0,"percent_ftp":1}},"display_position":{"base_type":"enum","values":{"0":"degree","1":"degree_minute","2":"degree_minute_second","3":"austrian_grid","4":"british_grid","5":"dutch_grid","6":"hungarian_grid","7":"finnish_grid","8":"german_grid","9":"icelandic_grid","10":"indonesian_equatorial","11":"indonesian_irian","12":"indonesian_southern","13":"india_zone_0","14":"india_zone_IA","15":"india_zone_IB","16":"india_zone_IIA","17":"india_zone_IIB","18":"india_zone_IIIA","19":"india_zone_IIIB","20":"india_zone_IVA","21":"india_zone_IVB","22":"irish_transverse","23":"irish_grid","24":"loran","25":"maidenhead_grid","26":"mgrs_grid","27":"new_zealand_grid","28":"new_zealand_transverse","29":"qatar_grid","30":"modified_swedish_grid","31":"swedish_grid","32":"south_african_grid","33":"swiss_grid","34":"taiwan_grid","35":"united_states_grid","36":"utm_ups_grid","37":"west_malayan","38":"borneo_rso","39":"estonian_grid","40":"latvian_grid","41":"swedish_ref_99_grid","degree":0,"degree_minute":1,"degree_minute_second":2,"austrian_grid":3,"british_grid":4,"dutch_grid":5,"hungarian_grid":6,"finnish_grid":7,"german_grid":8,"icelandic_grid":9,"indonesian_equatorial":10,"indonesian_irian":11,"indonesian_southern":12,"india_zone_0":13,"india_zone_IA":14,"india_zone_IB":15,"india_zone_IIA":16,"india_zone_IIB":17,"india_zone_IIIA":18,"india_zone_IIIB":19,"india_zone_IVA":20,"india_zone_IVB":21,"irish_transverse":22,"irish_grid":23,"loran":24,"maidenhead_grid":25,"mgrs_grid":26,"new_zealand_grid":27,"new_zealand_transverse":28,"qatar_grid":29,"modified_swedish_grid":30,"swedish_grid":31,"south_african_grid":32,"swiss_grid":33,"taiwan_grid":34,"united_states_grid":35,"utm_ups_grid":36,"west_malayan":37,"borneo_rso":38,"estonian_grid":39,"latvian_grid":40,"swedish_ref_99_grid":41}},"switch":{"base_type":"enum","values":{"0":"off","1":"on","2":"auto","off":0,"on":1,"auto":2}},"sport":{"base_type":"enum","values":{"0":"generic","1":"running","2":"cycling","3":"transition","4":"fitness_equipment","5":"swimming","6":"basketball","7":"soccer","8":"tennis","9":"american_football","10":"training","11":"walking","12":"cross_country_skiing","13":"alpine_skiing","14":"snowboarding","15":"rowing","16":"mountaineering","17":"hiking","18":"multisport","19":"paddling","20":"flying","21":"e_biking","22":"motorcycling","23":"boating","24":"driving","25":"golf","26":"hang_gliding","27":"horseback_riding","28":"hunting","29":"fishing","30":"inline_skating","31":"rock_climbing","32":"sailing","33":"ice_skating","34":"sky_diving","35":"snowshoeing","36":"snowmobiling","37":"stand_up_paddleboarding","38":"surfing","39":"wakeboarding","40":"water_skiing","41":"kayaking","42":"rafting","43":"windsurfing","44":"kitesurfing","45":"tactical","46":"jumpmaster","47":"boxing","48":"floor_climbing","53":"diving","254":"all","generic":0,"running":1,"cycling":2,"transition":3,"fitness_equipment":4,"swimming":5,"basketball":6,"soccer":7,"tennis":8,"american_football":9,"training":10,"walking":11,"cross_country_skiing":12,"alpine_skiing":13,"snowboarding":14,"rowing":15,"mountaineering":16,"hiking":17,"multisport":18,"paddling":19,"flying":20,"e_biking":21,"motorcycling":22,"boating":23,"driving":24,"golf":25,"hang_gliding":26,"horseback_riding":27,"hunting":28,"fishing":29,"inline_skating":30,"rock_climbing":31,"sailing":32,"ice_skating":33,"sky_diving":34,"snowshoeing":35,"snowmobiling":36,"stand_up_paddleboarding":37,"surfing":38,"wakeboarding":39,"water_skiing":40,"kayaking":41,"rafting":42,"windsurfing":43,"kitesurfing":44,"tactical":45,"jumpmaster":46,"boxing":47,"floor_climbing":48,"diving":53,"all":254}},"sport_bits_0":{"base_type":"uint8z","values":{"1":"generic","2":"running","4":"cycling","8":"transition","16":"fitness_equipment","32":"swimming","64":"basketball","128":"soccer","generic":1,"running":2,"cycling":4,"transition":8,"fitness_equipment":16,"swimming":32,"basketball":64,"soccer":128}},"sport_bits_1":{"base_type":"uint8z","values":{"1":"tennis","2":"american_football","4":"training","8":"walking","16":"cross_country_skiing","32":"alpine_skiing","64":"snowboarding","128":"rowing","tennis":1,"american_football":2,"training":4,"walking":8,"cross_country_skiing":16,"alpine_skiing":32,"snowboarding":64,"rowing":128}},"sport_bits_2":{"base_type":"uint8z","values":{"1":"mountaineering","2":"hiking","4":"multisport","8":"paddling","16":"flying","32":"e_biking","64":"motorcycling","128":"boating","mountaineering":1,"hiking":2,"multisport":4,"paddling":8,"flying":16,"e_biking":32,"motorcycling":64,"boating":128}},"sport_bits_3":{"base_type":"uint8z","values":{"1":"driving","2":"golf","4":"hang_gliding","8":"horseback_riding","16":"hunting","32":"fishing","64":"inline_skating","128":"rock_climbing","driving":1,"golf":2,"hang_gliding":4,"horseback_riding":8,"hunting":16,"fishing":32,"inline_skating":64,"rock_climbing":128}},"sport_bits_4":{"base_type":"uint8z","values":{"1":"sailing","2":"ice_skating","4":"sky_diving","8":"snowshoeing","16":"snowmobiling","32":"stand_up_paddleboarding","64":"surfing","128":"wakeboarding","sailing":1,"ice_skating":2,"sky_diving":4,"snowshoeing":8,"snowmobiling":16,"stand_up_paddleboarding":32,"surfing":64,"wakeboarding":128}},"sport_bits_5":{"base_type":"uint8z","values":{"1":"water_skiing","2":"kayaking","4":"rafting","8":"windsurfing","16":"kitesurfing","32":"tactical","64":"jumpmaster","128":"boxing","water_skiing":1,"kayaking":2,"rafting":4,"windsurfing":8,"kitesurfing":16,"tactical":32,"jumpmaster":64,"boxing":128}},"sport_bits_6":{"base_type":"uint8z","values":{"1":"floor_climbing","floor_climbing":1}},"sub_sport":{"base_type":"enum","values":{"0":"generic","1":"treadmill","2":"street","3":"trail","4":"track","5":"spin","6":"indoor_cycling","7":"road","8":"mountain","9":"downhill","10":"recumbent","11":"cyclocross","12":"hand_cycling","13":"track_cycling","14":"indoor_rowing","15":"elliptical","16":"stair_climbing","17":"lap_swimming","18":"open_water","19":"flexibility_training","20":"strength_training","21":"warm_up","22":"match","23":"exercise","24":"challenge","25":"indoor_skiing","26":"cardio_training","27":"indoor_walking","28":"e_bike_fitness","29":"bmx","30":"casual_walking","31":"speed_walking","32":"bike_to_run_transition","33":"run_to_bike_transition","34":"swim_to_bike_transition","35":"atv","36":"motocross","37":"backcountry","38":"resort","39":"rc_drone","40":"wingsuit","41":"whitewater","42":"skate_skiing","43":"yoga","44":"pilates","45":"indoor_running","46":"gravel_cycling","47":"e_bike_mountain","48":"commuting","49":"mixed_surface","50":"navigate","51":"track_me","52":"map","53":"single_gas_diving","54":"multi_gas_diving","55":"gauge_diving","56":"apnea_diving","57":"apnea_hunting","58":"virtual_activity","59":"obstacle","65":"sail_race","254":"all","generic":0,"treadmill":1,"street":2,"trail":3,"track":4,"spin":5,"indoor_cycling":6,"road":7,"mountain":8,"downhill":9,"recumbent":10,"cyclocross":11,"hand_cycling":12,"track_cycling":13,"indoor_rowing":14,"elliptical":15,"stair_climbing":16,"lap_swimming":17,"open_water":18,"flexibility_training":19,"strength_training":20,"warm_up":21,"match":22,"exercise":23,"challenge":24,"indoor_skiing":25,"cardio_training":26,"indoor_walking":27,"e_bike_fitness":28,"bmx":29,"casual_walking":30,"speed_walking":31,"bike_to_run_transition":32,"run_to_bike_transition":33,"swim_to_bike_transition":34,"atv":35,"motocross":36,"backcountry":37,"resort":38,"rc_drone":39,"wingsuit":40,"whitewater":41,"skate_skiing":42,"yoga":43,"pilates":44,"indoor_running":45,"gravel_cycling":46,"e_bike_mountain":47,"commuting":48,"mixed_surface":49,"navigate":50,"track_me":51,"map":52,"single_gas_diving":53,"multi_gas_diving":54,"gauge_diving":55,"apnea_diving":56,"apnea_hunting":57,"virtual_activity":58,"obstacle":59,"sail_race":65,"all":254}},"sport_event":{"base_type":"enum","values":{"0":"uncategorized","1":"geocaching","2":"fitness","3":"recreation","4":"race","5":"special_event","6":"training","7":"transportation","8":"touring","uncategorized":0,"geocaching":1,"fitness":2,"recreation":3,"race":4,"special_event":5,"training":6,"transportation":7,"touring":8}},"activity":{"base_type":"enum","values":{"0":"manual","1":"auto_multi_sport","manual":0,"auto_multi_sport":1}},"intensity":{"base_type":"enum","values":{"0":"active","1":"rest","2":"warmup","3":"cooldown","4":"recovery","5":"interval","6":"other","active":0,"rest":1,"warmup":2,"cooldown":3,"recovery":4,"interval":5,"other":6}},"session_trigger":{"base_type":"enum","values":{"0":"activity_end","1":"manual","2":"auto_multi_sport","3":"fitness_equipment","activity_end":0,"manual":1,"auto_multi_sport":2,"fitness_equipment":3}},"autolap_trigger":{"base_type":"enum","values":{"0":"time","1":"distance","2":"position_start","3":"position_lap","4":"position_waypoint","5":"position_marked","6":"off","time":0,"distance":1,"position_start":2,"position_lap":3,"position_waypoint":4,"position_marked":5,"off":6}},"lap_trigger":{"base_type":"enum","values":{"0":"manual","1":"time","2":"distance","3":"position_start","4":"position_lap","5":"position_waypoint","6":"position_marked","7":"session_end","8":"fitness_equipment","manual":0,"time":1,"distance":2,"position_start":3,"position_lap":4,"position_waypoint":5,"position_marked":6,"session_end":7,"fitness_equipment":8}},"time_mode":{"base_type":"enum","values":{"0":"hour12","1":"hour24","2":"military","3":"hour_12_with_seconds","4":"hour_24_with_seconds","5":"utc","hour12":0,"hour24":1,"military":2,"hour_12_with_seconds":3,"hour_24_with_seconds":4,"utc":5}},"backlight_mode":{"base_type":"enum","values":{"0":"off","1":"manual","2":"key_and_messages","3":"auto_brightness","4":"smart_notifications","5":"key_and_messages_night","6":"key_and_messages_and_smart_notifications","off":0,"manual":1,"key_and_messages":2,"auto_brightness":3,"smart_notifications":4,"key_and_messages_night":5,"key_and_messages_and_smart_notifications":6}},"date_mode":{"base_type":"enum","values":{"0":"day_month","1":"month_day","day_month":0,"month_day":1}},"backlight_timeout":{"base_type":"uint8","values":{"0":"infinite","infinite":0}},"event":{"base_type":"enum","values":{"0":"timer","3":"workout","4":"workout_step","5":"power_down","6":"power_up","7":"off_course","8":"session","9":"lap","10":"course_point","11":"battery","12":"virtual_partner_pace","13":"hr_high_alert","14":"hr_low_alert","15":"speed_high_alert","16":"speed_low_alert","17":"cad_high_alert","18":"cad_low_alert","19":"power_high_alert","20":"power_low_alert","21":"recovery_hr","22":"battery_low","23":"time_duration_alert","24":"distance_duration_alert","25":"calorie_duration_alert","26":"activity","27":"fitness_equipment","28":"length","32":"user_marker","33":"sport_point","36":"calibration","42":"front_gear_change","43":"rear_gear_change","44":"rider_position_change","45":"elev_high_alert","46":"elev_low_alert","47":"comm_timeout","75":"radar_threat_alert","timer":0,"workout":3,"workout_step":4,"power_down":5,"power_up":6,"off_course":7,"session":8,"lap":9,"course_point":10,"battery":11,"virtual_partner_pace":12,"hr_high_alert":13,"hr_low_alert":14,"speed_high_alert":15,"speed_low_alert":16,"cad_high_alert":17,"cad_low_alert":18,"power_high_alert":19,"power_low_alert":20,"recovery_hr":21,"battery_low":22,"time_duration_alert":23,"distance_duration_alert":24,"calorie_duration_alert":25,"activity":26,"fitness_equipment":27,"length":28,"user_marker":32,"sport_point":33,"calibration":36,"front_gear_change":42,"rear_gear_change":43,"rider_position_change":44,"elev_high_alert":45,"elev_low_alert":46,"comm_timeout":47,"radar_threat_alert":75}},"event_type":{"base_type":"enum","values":{"0":"start","1":"stop","2":"consecutive_depreciated","3":"marker","4":"stop_all","5":"begin_depreciated","6":"end_depreciated","7":"end_all_depreciated","8":"stop_disable","9":"stop_disable_all","start":0,"stop":1,"consecutive_depreciated":2,"marker":3,"stop_all":4,"begin_depreciated":5,"end_depreciated":6,"end_all_depreciated":7,"stop_disable":8,"stop_disable_all":9}},"timer_trigger":{"base_type":"enum","values":{"0":"manual","1":"auto","2":"fitness_equipment","manual":0,"auto":1,"fitness_equipment":2}},"fitness_equipment_state":{"base_type":"enum","values":{"0":"ready","1":"in_use","2":"paused","3":"unknown","ready":0,"in_use":1,"paused":2,"unknown":3}},"tone":{"base_type":"enum","values":{"0":"off","1":"tone","2":"vibrate","3":"tone_and_vibrate","off":0,"tone":1,"vibrate":2,"tone_and_vibrate":3}},"autoscroll":{"base_type":"enum","values":{"0":"none","1":"slow","2":"medium","3":"fast","none":0,"slow":1,"medium":2,"fast":3}},"activity_class":{"base_type":"enum","values":{"100":"level_max","127":"level","128":"athlete","level":127,"level_max":100,"athlete":128}},"hr_zone_calc":{"base_type":"enum","values":{"0":"custom","1":"percent_max_hr","2":"percent_hrr","custom":0,"percent_max_hr":1,"percent_hrr":2}},"pwr_zone_calc":{"base_type":"enum","values":{"0":"custom","1":"percent_ftp","custom":0,"percent_ftp":1}},"wkt_step_duration":{"base_type":"enum","values":{"0":"time","1":"distance","2":"hr_less_than","3":"hr_greater_than","4":"calories","5":"open","6":"repeat_until_steps_cmplt","7":"repeat_until_time","8":"repeat_until_distance","9":"repeat_until_calories","10":"repeat_until_hr_less_than","11":"repeat_until_hr_greater_than","12":"repeat_until_power_less_than","13":"repeat_until_power_greater_than","14":"power_less_than","15":"power_greater_than","16":"training_peaks_tss","17":"repeat_until_power_last_lap_less_than","18":"repeat_until_max_power_last_lap_less_than","19":"power_3s_less_than","20":"power_10s_less_than","21":"power_30s_less_than","22":"power_3s_greater_than","23":"power_10s_greater_than","24":"power_30s_greater_than","25":"power_lap_less_than","26":"power_lap_greater_than","27":"repeat_until_training_peaks_tss","28":"repetition_time","29":"reps","31":"time_only","time":0,"distance":1,"hr_less_than":2,"hr_greater_than":3,"calories":4,"open":5,"repeat_until_steps_cmplt":6,"repeat_until_time":7,"repeat_until_distance":8,"repeat_until_calories":9,"repeat_until_hr_less_than":10,"repeat_until_hr_greater_than":11,"repeat_until_power_less_than":12,"repeat_until_power_greater_than":13,"power_less_than":14,"power_greater_than":15,"training_peaks_tss":16,"repeat_until_power_last_lap_less_than":17,"repeat_until_max_power_last_lap_less_than":18,"power_3s_less_than":19,"power_10s_less_than":20,"power_30s_less_than":21,"power_3s_greater_than":22,"power_10s_greater_than":23,"power_30s_greater_than":24,"power_lap_less_than":25,"power_lap_greater_than":26,"repeat_until_training_peaks_tss":27,"repetition_time":28,"reps":29,"time_only":31}},"wkt_step_target":{"base_type":"enum","values":{"0":"speed","1":"heart_rate","2":"open","3":"cadence","4":"power","5":"grade","6":"resistance","7":"power_3s","8":"power_10s","9":"power_30s","10":"power_lap","11":"swim_stroke","12":"speed_lap","13":"heart_rate_lap","speed":0,"heart_rate":1,"open":2,"cadence":3,"power":4,"grade":5,"resistance":6,"power_3s":7,"power_10s":8,"power_30s":9,"power_lap":10,"swim_stroke":11,"speed_lap":12,"heart_rate_lap":13}},"goal":{"base_type":"enum","values":{"0":"time","1":"distance","2":"calories","3":"frequency","4":"steps","5":"ascent","6":"active_minutes","time":0,"distance":1,"calories":2,"frequency":3,"steps":4,"ascent":5,"active_minutes":6}},"goal_recurrence":{"base_type":"enum","values":{"0":"off","1":"daily","2":"weekly","3":"monthly","4":"yearly","5":"custom","off":0,"daily":1,"weekly":2,"monthly":3,"yearly":4,"custom":5}},"goal_source":{"base_type":"enum","values":{"0":"auto","1":"community","2":"user","auto":0,"community":1,"user":2}},"schedule":{"base_type":"enum","values":{"0":"workout","1":"course","workout":0,"course":1}},"course_point":{"base_type":"enum","values":{"0":"generic","1":"summit","2":"valley","3":"water","4":"food","5":"danger","6":"left","7":"right","8":"straight","9":"first_aid","10":"fourth_category","11":"third_category","12":"second_category","13":"first_category","14":"hors_category","15":"sprint","16":"left_fork","17":"right_fork","18":"middle_fork","19":"slight_left","20":"sharp_left","21":"slight_right","22":"sharp_right","23":"u_turn","24":"segment_start","25":"segment_end","generic":0,"summit":1,"valley":2,"water":3,"food":4,"danger":5,"left":6,"right":7,"straight":8,"first_aid":9,"fourth_category":10,"third_category":11,"second_category":12,"first_category":13,"hors_category":14,"sprint":15,"left_fork":16,"right_fork":17,"middle_fork":18,"slight_left":19,"sharp_left":20,"slight_right":21,"sharp_right":22,"u_turn":23,"segment_start":24,"segment_end":25}},"manufacturer":{"base_type":"uint16","values":{"1":"garmin","2":"garmin_fr405_antfs","3":"zephyr","4":"dayton","5":"idt","6":"srm","7":"quarq","8":"ibike","9":"saris","10":"spark_hk","11":"tanita","12":"echowell","13":"dynastream_oem","14":"nautilus","15":"dynastream","16":"timex","17":"metrigear","18":"xelic","19":"beurer","20":"cardiosport","21":"a_and_d","22":"hmm","23":"suunto","24":"thita_elektronik","25":"gpulse","26":"clean_mobile","27":"pedal_brain","28":"peaksware","29":"saxonar","30":"lemond_fitness","31":"dexcom","32":"wahoo_fitness","33":"octane_fitness","34":"archinoetics","35":"the_hurt_box","36":"citizen_systems","37":"magellan","38":"osynce","39":"holux","40":"concept2","41":"shimano","42":"one_giant_leap","43":"ace_sensor","44":"brim_brothers","45":"xplova","46":"perception_digital","47":"bf1systems","48":"pioneer","49":"spantec","50":"metalogics","51":"4iiiis","52":"seiko_epson","53":"seiko_epson_oem","54":"ifor_powell","55":"maxwell_guider","56":"star_trac","57":"breakaway","58":"alatech_technology_ltd","59":"mio_technology_europe","60":"rotor","61":"geonaute","62":"id_bike","63":"specialized","64":"wtek","65":"physical_enterprises","66":"north_pole_engineering","67":"bkool","68":"cateye","69":"stages_cycling","70":"sigmasport","71":"tomtom","72":"peripedal","73":"wattbike","76":"moxy","77":"ciclosport","78":"powerbahn","79":"acorn_projects_aps","80":"lifebeam","81":"bontrager","82":"wellgo","83":"scosche","84":"magura","85":"woodway","86":"elite","87":"nielsen_kellerman","88":"dk_city","89":"tacx","90":"direction_technology","91":"magtonic","92":"1partcarbon","93":"inside_ride_technologies","94":"sound_of_motion","95":"stryd","96":"icg","97":"MiPulse","98":"bsx_athletics","99":"look","100":"campagnolo_srl","101":"body_bike_smart","102":"praxisworks","103":"limits_technology","104":"topaction_technology","105":"cosinuss","106":"fitcare","107":"magene","108":"giant_manufacturing_co","109":"tigrasport","110":"salutron","111":"technogym","112":"bryton_sensors","113":"latitude_limited","114":"soaring_technology","115":"igpsport","116":"thinkrider","117":"gopher_sport","118":"waterrower","119":"orangetheory","120":"inpeak","121":"kinetic","122":"johnson_health_tech","123":"polar_electro","124":"seesense","125":"nci_technology","126":"iqsquare","127":"leomo","128":"ifit_com","129":"coros_byte","130":"versa_design","131":"chileaf","132":"cycplus","133":"gravaa_byte","134":"sigeyi","135":"coospo","255":"development","257":"healthandlife","258":"lezyne","259":"scribe_labs","260":"zwift","261":"watteam","262":"recon","263":"favero_electronics","264":"dynovelo","265":"strava","266":"precor","267":"bryton","268":"sram","269":"navman","270":"cobi","271":"spivi","272":"mio_magellan","273":"evesports","274":"sensitivus_gauge","275":"podoon","276":"life_time_fitness","277":"falco_e_motors","278":"minoura","279":"cycliq","280":"luxottica","281":"trainer_road","282":"the_sufferfest","283":"fullspeedahead","284":"virtualtraining","285":"feedbacksports","286":"omata","287":"vdo","288":"magneticdays","289":"hammerhead","290":"kinetic_by_kurt","291":"shapelog","292":"dabuziduo","293":"jetblack","294":"coros","295":"virtugo","296":"velosense","297":"cycligentinc","298":"trailforks","299":"mahle_ebikemotion","300":"nurvv","301":"microprogram","302":"zone5cloud","303":"greenteg","304":"yamaha_motors","305":"whoop","306":"gravaa","307":"onelap","308":"monark_exercise","309":"form","310":"decathlon","311":"syncros","5759":"actigraphcorp","garmin":1,"garmin_fr405_antfs":2,"zephyr":3,"dayton":4,"idt":5,"srm":6,"quarq":7,"ibike":8,"saris":9,"spark_hk":10,"tanita":11,"echowell":12,"dynastream_oem":13,"nautilus":14,"dynastream":15,"timex":16,"metrigear":17,"xelic":18,"beurer":19,"cardiosport":20,"a_and_d":21,"hmm":22,"suunto":23,"thita_elektronik":24,"gpulse":25,"clean_mobile":26,"pedal_brain":27,"peaksware":28,"saxonar":29,"lemond_fitness":30,"dexcom":31,"wahoo_fitness":32,"octane_fitness":33,"archinoetics":34,"the_hurt_box":35,"citizen_systems":36,"magellan":37,"osynce":38,"holux":39,"concept2":40,"shimano":41,"one_giant_leap":42,"ace_sensor":43,"brim_brothers":44,"xplova":45,"perception_digital":46,"bf1systems":47,"pioneer":48,"spantec":49,"metalogics":50,"4iiiis":51,"seiko_epson":52,"seiko_epson_oem":53,"ifor_powell":54,"maxwell_guider":55,"star_trac":56,"breakaway":57,"alatech_technology_ltd":58,"mio_technology_europe":59,"rotor":60,"geonaute":61,"id_bike":62,"specialized":63,"wtek":64,"physical_enterprises":65,"north_pole_engineering":66,"bkool":67,"cateye":68,"stages_cycling":69,"sigmasport":70,"tomtom":71,"peripedal":72,"wattbike":73,"moxy":76,"ciclosport":77,"powerbahn":78,"acorn_projects_aps":79,"lifebeam":80,"bontrager":81,"wellgo":82,"scosche":83,"magura":84,"woodway":85,"elite":86,"nielsen_kellerman":87,"dk_city":88,"tacx":89,"direction_technology":90,"magtonic":91,"1partcarbon":92,"inside_ride_technologies":93,"sound_of_motion":94,"stryd":95,"icg":96,"MiPulse":97,"bsx_athletics":98,"look":99,"campagnolo_srl":100,"body_bike_smart":101,"praxisworks":102,"limits_technology":103,"topaction_technology":104,"cosinuss":105,"fitcare":106,"magene":107,"giant_manufacturing_co":108,"tigrasport":109,"salutron":110,"technogym":111,"bryton_sensors":112,"latitude_limited":113,"soaring_technology":114,"igpsport":115,"thinkrider":116,"gopher_sport":117,"waterrower":118,"orangetheory":119,"inpeak":120,"kinetic":121,"johnson_health_tech":122,"polar_electro":123,"seesense":124,"nci_technology":125,"iqsquare":126,"leomo":127,"ifit_com":128,"coros_byte":129,"versa_design":130,"chileaf":131,"cycplus":132,"gravaa_byte":133,"sigeyi":134,"coospo":135,"development":255,"healthandlife":257,"lezyne":258,"scribe_labs":259,"zwift":260,"watteam":261,"recon":262,"favero_electronics":263,"dynovelo":264,"strava":265,"precor":266,"bryton":267,"sram":268,"navman":269,"cobi":270,"spivi":271,"mio_magellan":272,"evesports":273,"sensitivus_gauge":274,"podoon":275,"life_time_fitness":276,"falco_e_motors":277,"minoura":278,"cycliq":279,"luxottica":280,"trainer_road":281,"the_sufferfest":282,"fullspeedahead":283,"virtualtraining":284,"feedbacksports":285,"omata":286,"vdo":287,"magneticdays":288,"hammerhead":289,"kinetic_by_kurt":290,"shapelog":291,"dabuziduo":292,"jetblack":293,"coros":294,"virtugo":295,"velosense":296,"cycligentinc":297,"trailforks":298,"mahle_ebikemotion":299,"nurvv":300,"microprogram":301,"zone5cloud":302,"greenteg":303,"yamaha_motors":304,"whoop":305,"gravaa":306,"onelap":307,"monark_exercise":308,"form":309,"decathlon":310,"syncros":311,"actigraphcorp":5759}},"garmin_product":{"base_type":"uint16","values":{"1":"hrm1","2":"axh01","3":"axb01","4":"axb02","5":"hrm2ss","6":"dsi_alf02","7":"hrm3ss","8":"hrm_run_single_byte_product_id","9":"bsm","10":"bcm","11":"axs01","12":"hrm_tri_single_byte_product_id","13":"hrm4_run_single_byte_product_id","14":"fr225_single_byte_product_id","15":"gen3_bsm_single_byte_product_id","16":"gen3_bcm_single_byte_product_id","473":"fr301_china","474":"fr301_japan","475":"fr301_korea","494":"fr301_taiwan","717":"fr405","782":"fr50","987":"fr405_japan","988":"fr60","1011":"dsi_alf01","1018":"fr310xt","1036":"edge500","1124":"fr110","1169":"edge800","1199":"edge500_taiwan","1213":"edge500_japan","1253":"chirp","1274":"fr110_japan","1325":"edge200","1328":"fr910xt","1333":"edge800_taiwan","1334":"edge800_japan","1341":"alf04","1345":"fr610","1360":"fr210_japan","1380":"vector_ss","1381":"vector_cp","1386":"edge800_china","1387":"edge500_china","1405":"approach_g10","1410":"fr610_japan","1422":"edge500_korea","1436":"fr70","1446":"fr310xt_4t","1461":"amx","1482":"fr10","1497":"edge800_korea","1499":"swim","1537":"fr910xt_china","1551":"fenix","1555":"edge200_taiwan","1561":"edge510","1567":"edge810","1570":"tempe","1600":"fr910xt_japan","1623":"fr620","1632":"fr220","1664":"fr910xt_korea","1688":"fr10_japan","1721":"edge810_japan","1735":"virb_elite","1736":"edge_touring","1742":"edge510_japan","1743":"hrm_tri","1752":"hrm_run","1765":"fr920xt","1821":"edge510_asia","1822":"edge810_china","1823":"edge810_taiwan","1836":"edge1000","1837":"vivo_fit","1853":"virb_remote","1885":"vivo_ki","1903":"fr15","1907":"vivo_active","1918":"edge510_korea","1928":"fr620_japan","1929":"fr620_china","1930":"fr220_japan","1931":"fr220_china","1936":"approach_s6","1956":"vivo_smart","1967":"fenix2","1988":"epix","2050":"fenix3","2052":"edge1000_taiwan","2053":"edge1000_japan","2061":"fr15_japan","2067":"edge520","2070":"edge1000_china","2072":"fr620_russia","2073":"fr220_russia","2079":"vector_s","2100":"edge1000_korea","2130":"fr920xt_taiwan","2131":"fr920xt_china","2132":"fr920xt_japan","2134":"virbx","2135":"vivo_smart_apac","2140":"etrex_touch","2147":"edge25","2148":"fr25","2150":"vivo_fit2","2153":"fr225","2156":"fr630","2157":"fr230","2158":"fr735xt","2160":"vivo_active_apac","2161":"vector_2","2162":"vector_2s","2172":"virbxe","2173":"fr620_taiwan","2174":"fr220_taiwan","2175":"truswing","2187":"d2airvenu","2188":"fenix3_china","2189":"fenix3_twn","2192":"varia_headlight","2193":"varia_taillight_old","2204":"edge_explore_1000","2219":"fr225_asia","2225":"varia_radar_taillight","2226":"varia_radar_display","2238":"edge20","2260":"edge520_asia","2261":"edge520_japan","2262":"d2_bravo","2266":"approach_s20","2271":"vivo_smart2","2274":"edge1000_thai","2276":"varia_remote","2288":"edge25_asia","2289":"edge25_jpn","2290":"edge20_asia","2292":"approach_x40","2293":"fenix3_japan","2294":"vivo_smart_emea","2310":"fr630_asia","2311":"fr630_jpn","2313":"fr230_jpn","2327":"hrm4_run","2332":"epix_japan","2337":"vivo_active_hr","2347":"vivo_smart_gps_hr","2348":"vivo_smart_hr","2361":"vivo_smart_hr_asia","2362":"vivo_smart_gps_hr_asia","2368":"vivo_move","2379":"varia_taillight","2396":"fr235_asia","2397":"fr235_japan","2398":"varia_vision","2406":"vivo_fit3","2407":"fenix3_korea","2408":"fenix3_sea","2413":"fenix3_hr","2417":"virb_ultra_30","2429":"index_smart_scale","2431":"fr235","2432":"fenix3_chronos","2441":"oregon7xx","2444":"rino7xx","2457":"epix_korea","2473":"fenix3_hr_chn","2474":"fenix3_hr_twn","2475":"fenix3_hr_jpn","2476":"fenix3_hr_sea","2477":"fenix3_hr_kor","2496":"nautix","2497":"vivo_active_hr_apac","2512":"oregon7xx_ww","2530":"edge_820","2531":"edge_explore_820","2533":"fr735xt_apac","2534":"fr735xt_japan","2544":"fenix5s","2547":"d2_bravo_titanium","2567":"varia_ut800","2593":"running_dynamics_pod","2599":"edge_820_china","2600":"edge_820_japan","2604":"fenix5x","2606":"vivo_fit_jr","2622":"vivo_smart3","2623":"vivo_sport","2628":"edge_820_taiwan","2629":"edge_820_korea","2630":"edge_820_sea","2650":"fr35_hebrew","2656":"approach_s60","2667":"fr35_apac","2668":"fr35_japan","2675":"fenix3_chronos_asia","2687":"virb_360","2691":"fr935","2697":"fenix5","2700":"vivoactive3","2713":"edge_1030","2733":"fr235_china_nfc","2769":"foretrex_601_701","2772":"vivo_move_hr","2787":"vector_3","2796":"fenix5_asia","2797":"fenix5s_asia","2798":"fenix5x_asia","2806":"approach_z80","2814":"fr35_korea","2819":"d2charlie","2831":"vivo_smart3_apac","2832":"vivo_sport_apac","2833":"fr935_asia","2859":"descent","2878":"vivo_fit4","2886":"fr645","2888":"fr645m","2891":"fr30","2900":"fenix5s_plus","2909":"Edge_130","2924":"edge_1030_asia","2927":"vivosmart_4","2945":"vivo_move_hr_asia","2962":"approach_x10","2977":"fr30_asia","2988":"vivoactive3m_w","3003":"fr645_asia","3004":"fr645m_asia","3011":"edge_explore","3028":"gpsmap66","3049":"approach_s10","3066":"vivoactive3m_l","3085":"approach_g80","3092":"edge_130_asia","3095":"edge_1030_bontrager","3110":"fenix5_plus","3111":"fenix5x_plus","3112":"edge_520_plus","3113":"fr945","3121":"edge_530","3122":"edge_830","3126":"instinct_esports","3134":"fenix5s_plus_apac","3135":"fenix5x_plus_apac","3142":"edge_520_plus_apac","3144":"fr235l_asia","3145":"fr245_asia","3163":"vivo_active3m_apac","3192":"gen3_bsm","3193":"gen3_bcm","3218":"vivo_smart4_asia","3224":"vivoactive4_small","3225":"vivoactive4_large","3226":"venu","3246":"marq_driver","3247":"marq_aviator","3248":"marq_captain","3249":"marq_commander","3250":"marq_expedition","3251":"marq_athlete","3258":"descent_mk2","3284":"gpsmap66i","3287":"fenix6S_sport","3288":"fenix6S","3289":"fenix6_sport","3290":"fenix6","3291":"fenix6x","3299":"hrm_dual","3300":"hrm_pro","3308":"vivo_move3_premium","3314":"approach_s40","3321":"fr245m_asia","3349":"edge_530_apac","3350":"edge_830_apac","3378":"vivo_move3","3387":"vivo_active4_small_asia","3388":"vivo_active4_large_asia","3389":"vivo_active4_oled_asia","3405":"swim2","3420":"marq_driver_asia","3421":"marq_aviator_asia","3422":"vivo_move3_asia","3441":"fr945_asia","3446":"vivo_active3t_chn","3448":"marq_captain_asia","3449":"marq_commander_asia","3450":"marq_expedition_asia","3451":"marq_athlete_asia","3469":"fr45_asia","3473":"vivoactive3_daimler","3498":"legacy_rey","3499":"legacy_darth_vader","3500":"legacy_captain_marvel","3501":"legacy_first_avenger","3512":"fenix6s_sport_asia","3513":"fenix6s_asia","3514":"fenix6_sport_asia","3515":"fenix6_asia","3516":"fenix6x_asia","3535":"legacy_captain_marvel_asia","3536":"legacy_first_avenger_asia","3537":"legacy_rey_asia","3538":"legacy_darth_vader_asia","3542":"descent_mk2s","3558":"edge_130_plus","3570":"edge_1030_plus","3578":"rally_200","3589":"fr745","3600":"venusq","3615":"lily","3624":"marq_adventurer","3638":"enduro","3639":"swim2_apac","3648":"marq_adventurer_asia","3702":"descent_mk2_asia","3703":"venu2","3704":"venu2s","3737":"venu_daimler_asia","3739":"marq_golfer","3740":"venu_daimler","3794":"fr745_asia","3809":"lily_asia","3812":"edge_1030_plus_asia","3813":"edge_130_plus_asia","3823":"approach_s12","3837":"venusq_asia","3850":"marq_golfer_asia","3872":"enduro_asia","3927":"approach_g12","3930":"descent_mk2s_asia","3934":"approach_s42","3949":"venu2s_asia","3950":"venu2_asia","3986":"approach_S12_asia","4001":"approach_g12_asia","4002":"approach_s42_asia","10007":"sdm4","10014":"edge_remote","20119":"training_center","20533":"tacx_training_app_win","20534":"tacx_training_app_mac","30045":"tacx_training_app_android","30046":"tacx_training_app_ios","30047":"tacx_training_app_legacy","65531":"connectiq_simulator","65532":"android_antplus_plugin","65534":"connect","hrm1":1,"axh01":2,"axb01":3,"axb02":4,"hrm2ss":5,"dsi_alf02":6,"hrm3ss":7,"hrm_run_single_byte_product_id":8,"bsm":9,"bcm":10,"axs01":11,"hrm_tri_single_byte_product_id":12,"hrm4_run_single_byte_product_id":13,"fr225_single_byte_product_id":14,"gen3_bsm_single_byte_product_id":15,"gen3_bcm_single_byte_product_id":16,"fr301_china":473,"fr301_japan":474,"fr301_korea":475,"fr301_taiwan":494,"fr405":717,"fr50":782,"fr405_japan":987,"fr60":988,"dsi_alf01":1011,"fr310xt":1018,"edge500":1036,"fr110":1124,"edge800":1169,"edge500_taiwan":1199,"edge500_japan":1213,"chirp":1253,"fr110_japan":1274,"edge200":1325,"fr910xt":1328,"edge800_taiwan":1333,"edge800_japan":1334,"alf04":1341,"fr610":1345,"fr210_japan":1360,"vector_ss":1380,"vector_cp":1381,"edge800_china":1386,"edge500_china":1387,"approach_g10":1405,"fr610_japan":1410,"edge500_korea":1422,"fr70":1436,"fr310xt_4t":1446,"amx":1461,"fr10":1482,"edge800_korea":1497,"swim":1499,"fr910xt_china":1537,"fenix":1551,"edge200_taiwan":1555,"edge510":1561,"edge810":1567,"tempe":1570,"fr910xt_japan":1600,"fr620":1623,"fr220":1632,"fr910xt_korea":1664,"fr10_japan":1688,"edge810_japan":1721,"virb_elite":1735,"edge_touring":1736,"edge510_japan":1742,"hrm_tri":1743,"hrm_run":1752,"fr920xt":1765,"edge510_asia":1821,"edge810_china":1822,"edge810_taiwan":1823,"edge1000":1836,"vivo_fit":1837,"virb_remote":1853,"vivo_ki":1885,"fr15":1903,"vivo_active":1907,"edge510_korea":1918,"fr620_japan":1928,"fr620_china":1929,"fr220_japan":1930,"fr220_china":1931,"approach_s6":1936,"vivo_smart":1956,"fenix2":1967,"epix":1988,"fenix3":2050,"edge1000_taiwan":2052,"edge1000_japan":2053,"fr15_japan":2061,"edge520":2067,"edge1000_china":2070,"fr620_russia":2072,"fr220_russia":2073,"vector_s":2079,"edge1000_korea":2100,"fr920xt_taiwan":2130,"fr920xt_china":2131,"fr920xt_japan":2132,"virbx":2134,"vivo_smart_apac":2135,"etrex_touch":2140,"edge25":2147,"fr25":2148,"vivo_fit2":2150,"fr225":2153,"fr630":2156,"fr230":2157,"fr735xt":2158,"vivo_active_apac":2160,"vector_2":2161,"vector_2s":2162,"virbxe":2172,"fr620_taiwan":2173,"fr220_taiwan":2174,"truswing":2175,"d2airvenu":2187,"fenix3_china":2188,"fenix3_twn":2189,"varia_headlight":2192,"varia_taillight_old":2193,"edge_explore_1000":2204,"fr225_asia":2219,"varia_radar_taillight":2225,"varia_radar_display":2226,"edge20":2238,"edge520_asia":2260,"edge520_japan":2261,"d2_bravo":2262,"approach_s20":2266,"vivo_smart2":2271,"edge1000_thai":2274,"varia_remote":2276,"edge25_asia":2288,"edge25_jpn":2289,"edge20_asia":2290,"approach_x40":2292,"fenix3_japan":2293,"vivo_smart_emea":2294,"fr630_asia":2310,"fr630_jpn":2311,"fr230_jpn":2313,"hrm4_run":2327,"epix_japan":2332,"vivo_active_hr":2337,"vivo_smart_gps_hr":2347,"vivo_smart_hr":2348,"vivo_smart_hr_asia":2361,"vivo_smart_gps_hr_asia":2362,"vivo_move":2368,"varia_taillight":2379,"fr235_asia":2396,"fr235_japan":2397,"varia_vision":2398,"vivo_fit3":2406,"fenix3_korea":2407,"fenix3_sea":2408,"fenix3_hr":2413,"virb_ultra_30":2417,"index_smart_scale":2429,"fr235":2431,"fenix3_chronos":2432,"oregon7xx":2441,"rino7xx":2444,"epix_korea":2457,"fenix3_hr_chn":2473,"fenix3_hr_twn":2474,"fenix3_hr_jpn":2475,"fenix3_hr_sea":2476,"fenix3_hr_kor":2477,"nautix":2496,"vivo_active_hr_apac":2497,"oregon7xx_ww":2512,"edge_820":2530,"edge_explore_820":2531,"fr735xt_apac":2533,"fr735xt_japan":2534,"fenix5s":2544,"d2_bravo_titanium":2547,"varia_ut800":2567,"running_dynamics_pod":2593,"edge_820_china":2599,"edge_820_japan":2600,"fenix5x":2604,"vivo_fit_jr":2606,"vivo_smart3":2622,"vivo_sport":2623,"edge_820_taiwan":2628,"edge_820_korea":2629,"edge_820_sea":2630,"fr35_hebrew":2650,"approach_s60":2656,"fr35_apac":2667,"fr35_japan":2668,"fenix3_chronos_asia":2675,"virb_360":2687,"fr935":2691,"fenix5":2697,"vivoactive3":2700,"fr235_china_nfc":2733,"foretrex_601_701":2769,"vivo_move_hr":2772,"edge_1030":2713,"vector_3":2787,"fenix5_asia":2796,"fenix5s_asia":2797,"fenix5x_asia":2798,"approach_z80":2806,"fr35_korea":2814,"d2charlie":2819,"vivo_smart3_apac":2831,"vivo_sport_apac":2832,"fr935_asia":2833,"descent":2859,"vivo_fit4":2878,"fr645":2886,"fr645m":2888,"fr30":2891,"fenix5s_plus":2900,"Edge_130":2909,"edge_1030_asia":2924,"vivosmart_4":2927,"vivo_move_hr_asia":2945,"approach_x10":2962,"fr30_asia":2977,"vivoactive3m_w":2988,"fr645_asia":3003,"fr645m_asia":3004,"edge_explore":3011,"gpsmap66":3028,"approach_s10":3049,"vivoactive3m_l":3066,"approach_g80":3085,"edge_130_asia":3092,"edge_1030_bontrager":3095,"fenix5_plus":3110,"fenix5x_plus":3111,"edge_520_plus":3112,"fr945":3113,"edge_530":3121,"edge_830":3122,"instinct_esports":3126,"fenix5s_plus_apac":3134,"fenix5x_plus_apac":3135,"edge_520_plus_apac":3142,"fr235l_asia":3144,"fr245_asia":3145,"vivo_active3m_apac":3163,"gen3_bsm":3192,"gen3_bcm":3193,"vivo_smart4_asia":3218,"vivoactive4_small":3224,"vivoactive4_large":3225,"venu":3226,"marq_driver":3246,"marq_aviator":3247,"marq_captain":3248,"marq_commander":3249,"marq_expedition":3250,"marq_athlete":3251,"descent_mk2":3258,"gpsmap66i":3284,"fenix6S_sport":3287,"fenix6S":3288,"fenix6_sport":3289,"fenix6":3290,"fenix6x":3291,"hrm_dual":3299,"hrm_pro":3300,"vivo_move3_premium":3308,"approach_s40":3314,"fr245m_asia":3321,"edge_530_apac":3349,"edge_830_apac":3350,"vivo_move3":3378,"vivo_active4_small_asia":3387,"vivo_active4_large_asia":3388,"vivo_active4_oled_asia":3389,"swim2":3405,"marq_driver_asia":3420,"marq_aviator_asia":3421,"vivo_move3_asia":3422,"fr945_asia":3441,"vivo_active3t_chn":3446,"marq_captain_asia":3448,"marq_commander_asia":3449,"marq_expedition_asia":3450,"marq_athlete_asia":3451,"fr45_asia":3469,"vivoactive3_daimler":3473,"legacy_rey":3498,"legacy_darth_vader":3499,"legacy_captain_marvel":3500,"legacy_first_avenger":3501,"fenix6s_sport_asia":3512,"fenix6s_asia":3513,"fenix6_sport_asia":3514,"fenix6_asia":3515,"fenix6x_asia":3516,"legacy_captain_marvel_asia":3535,"legacy_first_avenger_asia":3536,"legacy_rey_asia":3537,"legacy_darth_vader_asia":3538,"descent_mk2s":3542,"edge_130_plus":3558,"edge_1030_plus":3570,"rally_200":3578,"fr745":3589,"venusq":3600,"lily":3615,"marq_adventurer":3624,"enduro":3638,"marq_adventurer_asia":3648,"swim2_apac":3639,"descent_mk2_asia":3702,"venu2":3703,"venu2s":3704,"venu_daimler_asia":3737,"marq_golfer":3739,"venu_daimler":3740,"fr745_asia":3794,"lily_asia":3809,"edge_1030_plus_asia":3812,"edge_130_plus_asia":3813,"approach_s12":3823,"enduro_asia":3872,"venusq_asia":3837,"marq_golfer_asia":3850,"approach_g12":3927,"descent_mk2s_asia":3930,"approach_s42":3934,"venu2s_asia":3949,"venu2_asia":3950,"approach_S12_asia":3986,"approach_g12_asia":4001,"approach_s42_asia":4002,"sdm4":10007,"edge_remote":10014,"tacx_training_app_win":20533,"tacx_training_app_mac":20534,"training_center":20119,"tacx_training_app_android":30045,"tacx_training_app_ios":30046,"tacx_training_app_legacy":30047,"connectiq_simulator":65531,"android_antplus_plugin":65532,"connect":65534}},"antplus_device_type":{"base_type":"uint8","values":{"1":"antfs","11":"bike_power","12":"environment_sensor_legacy","15":"multi_sport_speed_distance","16":"control","17":"fitness_equipment","18":"blood_pressure","19":"geocache_node","20":"light_electric_vehicle","25":"env_sensor","26":"racquet","27":"control_hub","31":"muscle_oxygen","35":"bike_light_main","36":"bike_light_shared","38":"exd","40":"bike_radar","46":"bike_aero","119":"weight_scale","120":"heart_rate","121":"bike_speed_cadence","122":"bike_cadence","123":"bike_speed","124":"stride_speed_distance","antfs":1,"bike_power":11,"environment_sensor_legacy":12,"multi_sport_speed_distance":15,"control":16,"fitness_equipment":17,"blood_pressure":18,"geocache_node":19,"light_electric_vehicle":20,"env_sensor":25,"racquet":26,"control_hub":27,"muscle_oxygen":31,"bike_light_main":35,"bike_light_shared":36,"exd":38,"bike_radar":40,"bike_aero":46,"weight_scale":119,"heart_rate":120,"bike_speed_cadence":121,"bike_cadence":122,"bike_speed":123,"stride_speed_distance":124}},"ant_network":{"base_type":"enum","values":{"0":"public","1":"antplus","2":"antfs","3":"private","public":0,"antplus":1,"antfs":2,"private":3}},"workout_capabilities":{"base_type":"uint32z","values":{"1":"interval","2":"custom","4":"fitness_equipment","8":"firstbeat","16":"new_leaf","32":"tcx","128":"speed","256":"heart_rate","512":"distance","1024":"cadence","2048":"power","4096":"grade","8192":"resistance","16384":"protected","interval":1,"custom":2,"fitness_equipment":4,"firstbeat":8,"new_leaf":16,"tcx":32,"speed":128,"heart_rate":256,"distance":512,"cadence":1024,"power":2048,"grade":4096,"resistance":8192,"protected":16384}},"battery_status":{"base_type":"uint8","values":{"1":"new","2":"good","3":"ok","4":"low","5":"critical","6":"charging","7":"unknown","new":1,"good":2,"ok":3,"low":4,"critical":5,"charging":6,"unknown":7}},"hr_type":{"base_type":"enum","values":{"0":"normal","1":"irregular","normal":0,"irregular":1}},"course_capabilities":{"base_type":"uint32z","values":{"1":"processed","2":"valid","4":"time","8":"distance","16":"position","32":"heart_rate","64":"power","128":"cadence","256":"training","512":"navigation","1024":"bikeway","processed":1,"valid":2,"time":4,"distance":8,"position":16,"heart_rate":32,"power":64,"cadence":128,"training":256,"navigation":512,"bikeway":1024}},"weight":{"base_type":"uint16","values":{"65534":"calculating","calculating":65534}},"workout_hr":{"base_type":"uint32","values":{"100":"bpm_offset","bpm_offset":100}},"workout_power":{"base_type":"uint32","values":{"1000":"watts_offset","watts_offset":1000}},"bp_status":{"base_type":"enum","values":{"0":"no_error","1":"error_incomplete_data","2":"error_no_measurement","3":"error_data_out_of_range","4":"error_irregular_heart_rate","no_error":0,"error_incomplete_data":1,"error_no_measurement":2,"error_data_out_of_range":3,"error_irregular_heart_rate":4}},"user_local_id":{"base_type":"uint16","values":{"0":"local_min","15":"local_max","16":"stationary_min","255":"stationary_max","256":"portable_min","65534":"portable_max","local_min":0,"local_max":15,"stationary_min":16,"stationary_max":255,"portable_min":256,"portable_max":65534}},"swim_stroke":{"base_type":"enum","values":{"0":"freestyle","1":"backstroke","2":"breaststroke","3":"butterfly","4":"drill","5":"mixed","6":"im","freestyle":0,"backstroke":1,"breaststroke":2,"butterfly":3,"drill":4,"mixed":5,"im":6}},"activity_type":{"base_type":"enum","values":{"0":"generic","1":"running","2":"cycling","3":"transition","4":"fitness_equipment","5":"swimming","6":"walking","8":"sedentary","254":"all","generic":0,"running":1,"cycling":2,"transition":3,"fitness_equipment":4,"swimming":5,"walking":6,"sedentary":8,"all":254}},"activity_subtype":{"base_type":"enum","values":{"0":"generic","1":"treadmill","2":"street","3":"trail","4":"track","5":"spin","6":"indoor_cycling","7":"road","8":"mountain","9":"downhill","10":"recumbent","11":"cyclocross","12":"hand_cycling","13":"track_cycling","14":"indoor_rowing","15":"elliptical","16":"stair_climbing","17":"lap_swimming","18":"open_water","254":"all","generic":0,"treadmill":1,"street":2,"trail":3,"track":4,"spin":5,"indoor_cycling":6,"road":7,"mountain":8,"downhill":9,"recumbent":10,"cyclocross":11,"hand_cycling":12,"track_cycling":13,"indoor_rowing":14,"elliptical":15,"stair_climbing":16,"lap_swimming":17,"open_water":18,"all":254}},"activity_level":{"base_type":"enum","values":{"0":"low","1":"medium","2":"high","low":0,"medium":1,"high":2}},"side":{"base_type":"enum","values":{"0":"right","1":"left","right":0,"left":1}},"left_right_balance":{"base_type":"uint8","values":{"127":"mask","128":"right","mask":127,"right":128}},"left_right_balance_100":{"base_type":"uint16","values":{"16383":"mask","32768":"right","mask":16383,"right":32768}},"length_type":{"base_type":"enum","values":{"0":"idle","1":"active","idle":0,"active":1}},"day_of_week":{"base_type":"enum","values":{"0":"sunday","1":"monday","2":"tuesday","3":"wednesday","4":"thursday","5":"friday","6":"saturday","sunday":0,"monday":1,"tuesday":2,"wednesday":3,"thursday":4,"friday":5,"saturday":6}},"connectivity_capabilities":{"base_type":"uint32z","values":{"1":"bluetooth","2":"bluetooth_le","4":"ant","8":"activity_upload","16":"course_download","32":"workout_download","64":"live_track","128":"weather_conditions","256":"weather_alerts","512":"gps_ephemeris_download","1024":"explicit_archive","2048":"setup_incomplete","4096":"continue_sync_after_software_update","8192":"connect_iq_app_download","16384":"golf_course_download","32768":"device_initiates_sync","65536":"connect_iq_watch_app_download","131072":"connect_iq_widget_download","262144":"connect_iq_watch_face_download","524288":"connect_iq_data_field_download","1048576":"connect_iq_app_managment","2097152":"swing_sensor","4194304":"swing_sensor_remote","8388608":"incident_detection","16777216":"audio_prompts","33554432":"wifi_verification","67108864":"true_up","134217728":"find_my_watch","268435456":"remote_manual_sync","536870912":"live_track_auto_start","1073741824":"live_track_messaging","2147483648":"instant_input","bluetooth":1,"bluetooth_le":2,"ant":4,"activity_upload":8,"course_download":16,"workout_download":32,"live_track":64,"weather_conditions":128,"weather_alerts":256,"gps_ephemeris_download":512,"explicit_archive":1024,"setup_incomplete":2048,"continue_sync_after_software_update":4096,"connect_iq_app_download":8192,"golf_course_download":16384,"device_initiates_sync":32768,"connect_iq_watch_app_download":65536,"connect_iq_widget_download":131072,"connect_iq_watch_face_download":262144,"connect_iq_data_field_download":524288,"connect_iq_app_managment":1048576,"swing_sensor":2097152,"swing_sensor_remote":4194304,"incident_detection":8388608,"audio_prompts":16777216,"wifi_verification":33554432,"true_up":67108864,"find_my_watch":134217728,"remote_manual_sync":268435456,"live_track_auto_start":536870912,"live_track_messaging":1073741824,"instant_input":2147483648}},"weather_report":{"base_type":"enum","values":{"0":"current","1":"hourly_forecast","2":"daily_forecast","current":0,"forecast":1,"hourly_forecast":1,"daily_forecast":2}},"weather_status":{"base_type":"enum","values":{"0":"clear","1":"partly_cloudy","2":"mostly_cloudy","3":"rain","4":"snow","5":"windy","6":"thunderstorms","7":"wintry_mix","8":"fog","11":"hazy","12":"hail","13":"scattered_showers","14":"scattered_thunderstorms","15":"unknown_precipitation","16":"light_rain","17":"heavy_rain","18":"light_snow","19":"heavy_snow","20":"light_rain_snow","21":"heavy_rain_snow","22":"cloudy","clear":0,"partly_cloudy":1,"mostly_cloudy":2,"rain":3,"snow":4,"windy":5,"thunderstorms":6,"wintry_mix":7,"fog":8,"hazy":11,"hail":12,"scattered_showers":13,"scattered_thunderstorms":14,"unknown_precipitation":15,"light_rain":16,"heavy_rain":17,"light_snow":18,"heavy_snow":19,"light_rain_snow":20,"heavy_rain_snow":21,"cloudy":22}},"weather_severity":{"base_type":"enum","values":{"0":"unknown","1":"warning","2":"watch","3":"advisory","4":"statement","unknown":0,"warning":1,"watch":2,"advisory":3,"statement":4}},"weather_severe_type":{"base_type":"enum","values":{"0":"unspecified","1":"tornado","2":"tsunami","3":"hurricane","4":"extreme_wind","5":"typhoon","6":"inland_hurricane","7":"hurricane_force_wind","8":"waterspout","9":"severe_thunderstorm","10":"wreckhouse_winds","11":"les_suetes_wind","12":"avalanche","13":"flash_flood","14":"tropical_storm","15":"inland_tropical_storm","16":"blizzard","17":"ice_storm","18":"freezing_rain","19":"debris_flow","20":"flash_freeze","21":"dust_storm","22":"high_wind","23":"winter_storm","24":"heavy_freezing_spray","25":"extreme_cold","26":"wind_chill","27":"cold_wave","28":"heavy_snow_alert","29":"lake_effect_blowing_snow","30":"snow_squall","31":"lake_effect_snow","32":"winter_weather","33":"sleet","34":"snowfall","35":"snow_and_blowing_snow","36":"blowing_snow","37":"snow_alert","38":"arctic_outflow","39":"freezing_drizzle","40":"storm","41":"storm_surge","42":"rainfall","43":"areal_flood","44":"coastal_flood","45":"lakeshore_flood","46":"excessive_heat","47":"heat","48":"weather","49":"high_heat_and_humidity","50":"humidex_and_health","51":"humidex","52":"gale","53":"freezing_spray","54":"special_marine","55":"squall","56":"strong_wind","57":"lake_wind","58":"marine_weather","59":"wind","60":"small_craft_hazardous_seas","61":"hazardous_seas","62":"small_craft","63":"small_craft_winds","64":"small_craft_rough_bar","65":"high_water_level","66":"ashfall","67":"freezing_fog","68":"dense_fog","69":"dense_smoke","70":"blowing_dust","71":"hard_freeze","72":"freeze","73":"frost","74":"fire_weather","75":"flood","76":"rip_tide","77":"high_surf","78":"smog","79":"air_quality","80":"brisk_wind","81":"air_stagnation","82":"low_water","83":"hydrological","84":"special_weather","unspecified":0,"tornado":1,"tsunami":2,"hurricane":3,"extreme_wind":4,"typhoon":5,"inland_hurricane":6,"hurricane_force_wind":7,"waterspout":8,"severe_thunderstorm":9,"wreckhouse_winds":10,"les_suetes_wind":11,"avalanche":12,"flash_flood":13,"tropical_storm":14,"inland_tropical_storm":15,"blizzard":16,"ice_storm":17,"freezing_rain":18,"debris_flow":19,"flash_freeze":20,"dust_storm":21,"high_wind":22,"winter_storm":23,"heavy_freezing_spray":24,"extreme_cold":25,"wind_chill":26,"cold_wave":27,"heavy_snow_alert":28,"lake_effect_blowing_snow":29,"snow_squall":30,"lake_effect_snow":31,"winter_weather":32,"sleet":33,"snowfall":34,"snow_and_blowing_snow":35,"blowing_snow":36,"snow_alert":37,"arctic_outflow":38,"freezing_drizzle":39,"storm":40,"storm_surge":41,"rainfall":42,"areal_flood":43,"coastal_flood":44,"lakeshore_flood":45,"excessive_heat":46,"heat":47,"weather":48,"high_heat_and_humidity":49,"humidex_and_health":50,"humidex":51,"gale":52,"freezing_spray":53,"special_marine":54,"squall":55,"strong_wind":56,"lake_wind":57,"marine_weather":58,"wind":59,"small_craft_hazardous_seas":60,"hazardous_seas":61,"small_craft":62,"small_craft_winds":63,"small_craft_rough_bar":64,"high_water_level":65,"ashfall":66,"freezing_fog":67,"dense_fog":68,"dense_smoke":69,"blowing_dust":70,"hard_freeze":71,"freeze":72,"frost":73,"fire_weather":74,"flood":75,"rip_tide":76,"high_surf":77,"smog":78,"air_quality":79,"brisk_wind":80,"air_stagnation":81,"low_water":82,"hydrological":83,"special_weather":84}},"time_into_day":{"base_type":"uint32","values":{}},"localtime_into_day":{"base_type":"uint32","values":{}},"stroke_type":{"base_type":"enum","values":{"0":"no_event","1":"other","2":"serve","3":"forehand","4":"backhand","5":"smash","no_event":0,"other":1,"serve":2,"forehand":3,"backhand":4,"smash":5}},"body_location":{"base_type":"enum","values":{"0":"left_leg","1":"left_calf","2":"left_shin","3":"left_hamstring","4":"left_quad","5":"left_glute","6":"right_leg","7":"right_calf","8":"right_shin","9":"right_hamstring","10":"right_quad","11":"right_glute","12":"torso_back","13":"left_lower_back","14":"left_upper_back","15":"right_lower_back","16":"right_upper_back","17":"torso_front","18":"left_abdomen","19":"left_chest","20":"right_abdomen","21":"right_chest","22":"left_arm","23":"left_shoulder","24":"left_bicep","25":"left_tricep","26":"left_brachioradialis","27":"left_forearm_extensors","28":"right_arm","29":"right_shoulder","30":"right_bicep","31":"right_tricep","32":"right_brachioradialis","33":"right_forearm_extensors","34":"neck","35":"throat","36":"waist_mid_back","37":"waist_front","38":"waist_left","39":"waist_right","left_leg":0,"left_calf":1,"left_shin":2,"left_hamstring":3,"left_quad":4,"left_glute":5,"right_leg":6,"right_calf":7,"right_shin":8,"right_hamstring":9,"right_quad":10,"right_glute":11,"torso_back":12,"left_lower_back":13,"left_upper_back":14,"right_lower_back":15,"right_upper_back":16,"torso_front":17,"left_abdomen":18,"left_chest":19,"right_abdomen":20,"right_chest":21,"left_arm":22,"left_shoulder":23,"left_bicep":24,"left_tricep":25,"left_brachioradialis":26,"left_forearm_extensors":27,"right_arm":28,"right_shoulder":29,"right_bicep":30,"right_tricep":31,"right_brachioradialis":32,"right_forearm_extensors":33,"neck":34,"throat":35,"waist_mid_back":36,"waist_front":37,"waist_left":38,"waist_right":39}},"segment_lap_status":{"base_type":"enum","values":{"0":"end","1":"fail","end":0,"fail":1}},"segment_leaderboard_type":{"base_type":"enum","values":{"0":"overall","1":"personal_best","2":"connections","3":"group","4":"challenger","5":"kom","6":"qom","7":"pr","8":"goal","9":"rival","10":"club_leader","overall":0,"personal_best":1,"connections":2,"group":3,"challenger":4,"kom":5,"qom":6,"pr":7,"goal":8,"rival":9,"club_leader":10}},"segment_delete_status":{"base_type":"enum","values":{"0":"do_not_delete","1":"delete_one","2":"delete_all","do_not_delete":0,"delete_one":1,"delete_all":2}},"segment_selection_type":{"base_type":"enum","values":{"0":"starred","1":"suggested","starred":0,"suggested":1}},"source_type":{"base_type":"enum","values":{"0":"ant","1":"antplus","2":"bluetooth","3":"bluetooth_low_energy","4":"wifi","5":"local","ant":0,"antplus":1,"bluetooth":2,"bluetooth_low_energy":3,"wifi":4,"local":5}},"local_device_type":{"base_type":"uint8","values":{}},"display_orientation":{"base_type":"enum","values":{"0":"auto","1":"portrait","2":"landscape","3":"portrait_flipped","4":"landscape_flipped","auto":0,"portrait":1,"landscape":2,"portrait_flipped":3,"landscape_flipped":4}},"workout_equipment":{"base_type":"enum","values":{"0":"none","1":"swim_fins","2":"swim_kickboard","3":"swim_paddles","4":"swim_pull_buoy","5":"swim_snorkel","none":0,"swim_fins":1,"swim_kickboard":2,"swim_paddles":3,"swim_pull_buoy":4,"swim_snorkel":5}},"watchface_mode":{"base_type":"enum","values":{"0":"digital","1":"analog","2":"connect_iq","3":"disabled","digital":0,"analog":1,"connect_iq":2,"disabled":3}},"digital_watchface_layout":{"base_type":"enum","values":{"0":"traditional","1":"modern","2":"bold","traditional":0,"modern":1,"bold":2}},"analog_watchface_layout":{"base_type":"enum","values":{"0":"minimal","1":"traditional","2":"modern","minimal":0,"traditional":1,"modern":2}},"rider_position_type":{"base_type":"enum","values":{"0":"seated","1":"standing","2":"transition_to_seated","3":"transition_to_standing","seated":0,"standing":1,"transition_to_seated":2,"transition_to_standing":3}},"power_phase_type":{"base_type":"enum","values":{"0":"power_phase_start_angle","1":"power_phase_end_angle","2":"power_phase_arc_length","3":"power_phase_center","power_phase_start_angle":0,"power_phase_end_angle":1,"power_phase_arc_length":2,"power_phase_center":3}},"camera_event_type":{"base_type":"enum","values":{"0":"video_start","1":"video_split","2":"video_end","3":"photo_taken","4":"video_second_stream_start","5":"video_second_stream_split","6":"video_second_stream_end","7":"video_split_start","8":"video_second_stream_split_start","11":"video_pause","12":"video_second_stream_pause","13":"video_resume","14":"video_second_stream_resume","video_start":0,"video_split":1,"video_end":2,"photo_taken":3,"video_second_stream_start":4,"video_second_stream_split":5,"video_second_stream_end":6,"video_split_start":7,"video_second_stream_split_start":8,"video_pause":11,"video_second_stream_pause":12,"video_resume":13,"video_second_stream_resume":14}},"sensor_type":{"base_type":"enum","values":{"0":"accelerometer","1":"gyroscope","2":"compass","3":"barometer","accelerometer":0,"gyroscope":1,"compass":2,"barometer":3}},"bike_light_network_config_type":{"base_type":"enum","values":{"0":"auto","4":"individual","5":"high_visibility","6":"trail","auto":0,"individual":4,"high_visibility":5,"trail":6}},"comm_timeout_type":{"base_type":"uint16","values":{"0":"wildcard_pairing_timeout","1":"pairing_timeout","2":"connection_lost","3":"connection_timeout","wildcard_pairing_timeout":0,"pairing_timeout":1,"connection_lost":2,"connection_timeout":3}},"camera_orientation_type":{"base_type":"enum","values":{"0":"camera_orientation_0","1":"camera_orientation_90","2":"camera_orientation_180","3":"camera_orientation_270","camera_orientation_0":0,"camera_orientation_90":1,"camera_orientation_180":2,"camera_orientation_270":3}},"attitude_stage":{"base_type":"enum","values":{"0":"failed","1":"aligning","2":"degraded","3":"valid","failed":0,"aligning":1,"degraded":2,"valid":3}},"attitude_validity":{"base_type":"uint16","values":{"1":"track_angle_heading_valid","2":"pitch_valid","4":"roll_valid","8":"lateral_body_accel_valid","16":"normal_body_accel_valid","32":"turn_rate_valid","64":"hw_fail","128":"mag_invalid","256":"no_gps","512":"gps_invalid","1024":"solution_coasting","2048":"true_track_angle","4096":"magnetic_heading","track_angle_heading_valid":1,"pitch_valid":2,"roll_valid":4,"lateral_body_accel_valid":8,"normal_body_accel_valid":16,"turn_rate_valid":32,"hw_fail":64,"mag_invalid":128,"no_gps":256,"gps_invalid":512,"solution_coasting":1024,"true_track_angle":2048,"magnetic_heading":4096}},"auto_sync_frequency":{"base_type":"enum","values":{"0":"never","1":"occasionally","2":"frequent","3":"once_a_day","4":"remote","never":0,"occasionally":1,"frequent":2,"once_a_day":3,"remote":4}},"exd_layout":{"base_type":"enum","values":{"0":"full_screen","1":"half_vertical","2":"half_horizontal","3":"half_vertical_right_split","4":"half_horizontal_bottom_split","5":"full_quarter_split","6":"half_vertical_left_split","7":"half_horizontal_top_split","8":"dynamic","full_screen":0,"half_vertical":1,"half_horizontal":2,"half_vertical_right_split":3,"half_horizontal_bottom_split":4,"full_quarter_split":5,"half_vertical_left_split":6,"half_horizontal_top_split":7,"dynamic":8}},"exd_display_type":{"base_type":"enum","values":{"0":"numerical","1":"simple","2":"graph","3":"bar","4":"circle_graph","5":"virtual_partner","6":"balance","7":"string_list","8":"string","9":"simple_dynamic_icon","10":"gauge","numerical":0,"simple":1,"graph":2,"bar":3,"circle_graph":4,"virtual_partner":5,"balance":6,"string_list":7,"string":8,"simple_dynamic_icon":9,"gauge":10}},"exd_data_units":{"base_type":"enum","values":{"0":"no_units","1":"laps","2":"miles_per_hour","3":"kilometers_per_hour","4":"feet_per_hour","5":"meters_per_hour","6":"degrees_celsius","7":"degrees_farenheit","8":"zone","9":"gear","10":"rpm","11":"bpm","12":"degrees","13":"millimeters","14":"meters","15":"kilometers","16":"feet","17":"yards","18":"kilofeet","19":"miles","20":"time","21":"enum_turn_type","22":"percent","23":"watts","24":"watts_per_kilogram","25":"enum_battery_status","26":"enum_bike_light_beam_angle_mode","27":"enum_bike_light_battery_status","28":"enum_bike_light_network_config_type","29":"lights","30":"seconds","31":"minutes","32":"hours","33":"calories","34":"kilojoules","35":"milliseconds","36":"second_per_mile","37":"second_per_kilometer","38":"centimeter","39":"enum_course_point","40":"bradians","41":"enum_sport","42":"inches_hg","43":"mm_hg","44":"mbars","45":"hecto_pascals","46":"feet_per_min","47":"meters_per_min","48":"meters_per_sec","49":"eight_cardinal","no_units":0,"laps":1,"miles_per_hour":2,"kilometers_per_hour":3,"feet_per_hour":4,"meters_per_hour":5,"degrees_celsius":6,"degrees_farenheit":7,"zone":8,"gear":9,"rpm":10,"bpm":11,"degrees":12,"millimeters":13,"meters":14,"kilometers":15,"feet":16,"yards":17,"kilofeet":18,"miles":19,"time":20,"enum_turn_type":21,"percent":22,"watts":23,"watts_per_kilogram":24,"enum_battery_status":25,"enum_bike_light_beam_angle_mode":26,"enum_bike_light_battery_status":27,"enum_bike_light_network_config_type":28,"lights":29,"seconds":30,"minutes":31,"hours":32,"calories":33,"kilojoules":34,"milliseconds":35,"second_per_mile":36,"second_per_kilometer":37,"centimeter":38,"enum_course_point":39,"bradians":40,"enum_sport":41,"inches_hg":42,"mm_hg":43,"mbars":44,"hecto_pascals":45,"feet_per_min":46,"meters_per_min":47,"meters_per_sec":48,"eight_cardinal":49}},"exd_qualifiers":{"base_type":"enum","values":{"0":"no_qualifier","1":"instantaneous","2":"average","3":"lap","4":"maximum","5":"maximum_average","6":"maximum_lap","7":"last_lap","8":"average_lap","9":"to_destination","10":"to_go","11":"to_next","12":"next_course_point","13":"total","14":"three_second_average","15":"ten_second_average","16":"thirty_second_average","17":"percent_maximum","18":"percent_maximum_average","19":"lap_percent_maximum","20":"elapsed","21":"sunrise","22":"sunset","23":"compared_to_virtual_partner","24":"maximum_24h","25":"minimum_24h","26":"minimum","27":"first","28":"second","29":"third","30":"shifter","31":"last_sport","32":"moving","33":"stopped","34":"estimated_total","242":"zone_9","243":"zone_8","244":"zone_7","245":"zone_6","246":"zone_5","247":"zone_4","248":"zone_3","249":"zone_2","250":"zone_1","no_qualifier":0,"instantaneous":1,"average":2,"lap":3,"maximum":4,"maximum_average":5,"maximum_lap":6,"last_lap":7,"average_lap":8,"to_destination":9,"to_go":10,"to_next":11,"next_course_point":12,"total":13,"three_second_average":14,"ten_second_average":15,"thirty_second_average":16,"percent_maximum":17,"percent_maximum_average":18,"lap_percent_maximum":19,"elapsed":20,"sunrise":21,"sunset":22,"compared_to_virtual_partner":23,"maximum_24h":24,"minimum_24h":25,"minimum":26,"first":27,"second":28,"third":29,"shifter":30,"last_sport":31,"moving":32,"stopped":33,"estimated_total":34,"zone_9":242,"zone_8":243,"zone_7":244,"zone_6":245,"zone_5":246,"zone_4":247,"zone_3":248,"zone_2":249,"zone_1":250}},"exd_descriptors":{"base_type":"enum","values":{"0":"bike_light_battery_status","1":"beam_angle_status","2":"batery_level","3":"light_network_mode","4":"number_lights_connected","5":"cadence","6":"distance","7":"estimated_time_of_arrival","8":"heading","9":"time","10":"battery_level","11":"trainer_resistance","12":"trainer_target_power","13":"time_seated","14":"time_standing","15":"elevation","16":"grade","17":"ascent","18":"descent","19":"vertical_speed","20":"di2_battery_level","21":"front_gear","22":"rear_gear","23":"gear_ratio","24":"heart_rate","25":"heart_rate_zone","26":"time_in_heart_rate_zone","27":"heart_rate_reserve","28":"calories","29":"gps_accuracy","30":"gps_signal_strength","31":"temperature","32":"time_of_day","33":"balance","34":"pedal_smoothness","35":"power","36":"functional_threshold_power","37":"intensity_factor","38":"work","39":"power_ratio","40":"normalized_power","41":"training_stress_Score","42":"time_on_zone","43":"speed","44":"laps","45":"reps","46":"workout_step","47":"course_distance","48":"navigation_distance","49":"course_estimated_time_of_arrival","50":"navigation_estimated_time_of_arrival","51":"course_time","52":"navigation_time","53":"course_heading","54":"navigation_heading","55":"power_zone","56":"torque_effectiveness","57":"timer_time","58":"power_weight_ratio","59":"left_platform_center_offset","60":"right_platform_center_offset","61":"left_power_phase_start_angle","62":"right_power_phase_start_angle","63":"left_power_phase_finish_angle","64":"right_power_phase_finish_angle","65":"gears","66":"pace","67":"training_effect","68":"vertical_oscillation","69":"vertical_ratio","70":"ground_contact_time","71":"left_ground_contact_time_balance","72":"right_ground_contact_time_balance","73":"stride_length","74":"running_cadence","75":"performance_condition","76":"course_type","77":"time_in_power_zone","78":"navigation_turn","79":"course_location","80":"navigation_location","81":"compass","82":"gear_combo","83":"muscle_oxygen","84":"icon","85":"compass_heading","86":"gps_heading","87":"gps_elevation","88":"anaerobic_training_effect","89":"course","90":"off_course","91":"glide_ratio","92":"vertical_distance","93":"vmg","94":"ambient_pressure","95":"pressure","96":"vam","bike_light_battery_status":0,"beam_angle_status":1,"batery_level":2,"light_network_mode":3,"number_lights_connected":4,"cadence":5,"distance":6,"estimated_time_of_arrival":7,"heading":8,"time":9,"battery_level":10,"trainer_resistance":11,"trainer_target_power":12,"time_seated":13,"time_standing":14,"elevation":15,"grade":16,"ascent":17,"descent":18,"vertical_speed":19,"di2_battery_level":20,"front_gear":21,"rear_gear":22,"gear_ratio":23,"heart_rate":24,"heart_rate_zone":25,"time_in_heart_rate_zone":26,"heart_rate_reserve":27,"calories":28,"gps_accuracy":29,"gps_signal_strength":30,"temperature":31,"time_of_day":32,"balance":33,"pedal_smoothness":34,"power":35,"functional_threshold_power":36,"intensity_factor":37,"work":38,"power_ratio":39,"normalized_power":40,"training_stress_Score":41,"time_on_zone":42,"speed":43,"laps":44,"reps":45,"workout_step":46,"course_distance":47,"navigation_distance":48,"course_estimated_time_of_arrival":49,"navigation_estimated_time_of_arrival":50,"course_time":51,"navigation_time":52,"course_heading":53,"navigation_heading":54,"power_zone":55,"torque_effectiveness":56,"timer_time":57,"power_weight_ratio":58,"left_platform_center_offset":59,"right_platform_center_offset":60,"left_power_phase_start_angle":61,"right_power_phase_start_angle":62,"left_power_phase_finish_angle":63,"right_power_phase_finish_angle":64,"gears":65,"pace":66,"training_effect":67,"vertical_oscillation":68,"vertical_ratio":69,"ground_contact_time":70,"left_ground_contact_time_balance":71,"right_ground_contact_time_balance":72,"stride_length":73,"running_cadence":74,"performance_condition":75,"course_type":76,"time_in_power_zone":77,"navigation_turn":78,"course_location":79,"navigation_location":80,"compass":81,"gear_combo":82,"muscle_oxygen":83,"icon":84,"compass_heading":85,"gps_heading":86,"gps_elevation":87,"anaerobic_training_effect":88,"course":89,"off_course":90,"glide_ratio":91,"vertical_distance":92,"vmg":93,"ambient_pressure":94,"pressure":95,"vam":96}},"auto_activity_detect":{"base_type":"uint32","values":{"0":"none","1":"running","2":"cycling","4":"swimming","8":"walking","32":"elliptical","1024":"sedentary","none":0,"running":1,"cycling":2,"swimming":4,"walking":8,"elliptical":32,"sedentary":1024}},"supported_exd_screen_layouts":{"base_type":"uint32z","values":{"1":"full_screen","2":"half_vertical","4":"half_horizontal","8":"half_vertical_right_split","16":"half_horizontal_bottom_split","32":"full_quarter_split","64":"half_vertical_left_split","128":"half_horizontal_top_split","full_screen":1,"half_vertical":2,"half_horizontal":4,"half_vertical_right_split":8,"half_horizontal_bottom_split":16,"full_quarter_split":32,"half_vertical_left_split":64,"half_horizontal_top_split":128}},"fit_base_type":{"base_type":"uint8","values":{"0":"enum","1":"sint8","2":"uint8","7":"string","10":"uint8z","13":"byte","131":"sint16","132":"uint16","133":"sint32","134":"uint32","136":"float32","137":"float64","139":"uint16z","140":"uint32z","142":"sint64","143":"uint64","144":"uint64z","enum":0,"sint8":1,"uint8":2,"sint16":131,"uint16":132,"sint32":133,"uint32":134,"string":7,"float32":136,"float64":137,"uint8z":10,"uint16z":139,"uint32z":140,"byte":13,"sint64":142,"uint64":143,"uint64z":144}},"turn_type":{"base_type":"enum","values":{"0":"arriving_idx","1":"arriving_left_idx","2":"arriving_right_idx","3":"arriving_via_idx","4":"arriving_via_left_idx","5":"arriving_via_right_idx","6":"bear_keep_left_idx","7":"bear_keep_right_idx","8":"continue_idx","9":"exit_left_idx","10":"exit_right_idx","11":"ferry_idx","12":"roundabout_45_idx","13":"roundabout_90_idx","14":"roundabout_135_idx","15":"roundabout_180_idx","16":"roundabout_225_idx","17":"roundabout_270_idx","18":"roundabout_315_idx","19":"roundabout_360_idx","20":"roundabout_neg_45_idx","21":"roundabout_neg_90_idx","22":"roundabout_neg_135_idx","23":"roundabout_neg_180_idx","24":"roundabout_neg_225_idx","25":"roundabout_neg_270_idx","26":"roundabout_neg_315_idx","27":"roundabout_neg_360_idx","28":"roundabout_generic_idx","29":"roundabout_neg_generic_idx","30":"sharp_turn_left_idx","31":"sharp_turn_right_idx","32":"turn_left_idx","33":"turn_right_idx","34":"uturn_left_idx","35":"uturn_right_idx","36":"icon_inv_idx","37":"icon_idx_cnt","arriving_idx":0,"arriving_left_idx":1,"arriving_right_idx":2,"arriving_via_idx":3,"arriving_via_left_idx":4,"arriving_via_right_idx":5,"bear_keep_left_idx":6,"bear_keep_right_idx":7,"continue_idx":8,"exit_left_idx":9,"exit_right_idx":10,"ferry_idx":11,"roundabout_45_idx":12,"roundabout_90_idx":13,"roundabout_135_idx":14,"roundabout_180_idx":15,"roundabout_225_idx":16,"roundabout_270_idx":17,"roundabout_315_idx":18,"roundabout_360_idx":19,"roundabout_neg_45_idx":20,"roundabout_neg_90_idx":21,"roundabout_neg_135_idx":22,"roundabout_neg_180_idx":23,"roundabout_neg_225_idx":24,"roundabout_neg_270_idx":25,"roundabout_neg_315_idx":26,"roundabout_neg_360_idx":27,"roundabout_generic_idx":28,"roundabout_neg_generic_idx":29,"sharp_turn_left_idx":30,"sharp_turn_right_idx":31,"turn_left_idx":32,"turn_right_idx":33,"uturn_left_idx":34,"uturn_right_idx":35,"icon_inv_idx":36,"icon_idx_cnt":37}},"bike_light_beam_angle_mode":{"base_type":"uint8","values":{"0":"manual","1":"auto","manual":0,"auto":1}},"fit_base_unit":{"base_type":"uint16","values":{"0":"other","1":"kilogram","2":"pound","other":0,"kilogram":1,"pound":2}},"set_type":{"base_type":"uint8","values":{"0":"rest","1":"active","rest":0,"active":1}},"exercise_category":{"base_type":"uint16","values":{"0":"bench_press","1":"calf_raise","2":"cardio","3":"carry","4":"chop","5":"core","6":"crunch","7":"curl","8":"deadlift","9":"flye","10":"hip_raise","11":"hip_stability","12":"hip_swing","13":"hyperextension","14":"lateral_raise","15":"leg_curl","16":"leg_raise","17":"lunge","18":"olympic_lift","19":"plank","20":"plyo","21":"pull_up","22":"push_up","23":"row","24":"shoulder_press","25":"shoulder_stability","26":"shrug","27":"sit_up","28":"squat","29":"total_body","30":"triceps_extension","31":"warm_up","32":"run","65534":"unknown","bench_press":0,"calf_raise":1,"cardio":2,"carry":3,"chop":4,"core":5,"crunch":6,"curl":7,"deadlift":8,"flye":9,"hip_raise":10,"hip_stability":11,"hip_swing":12,"hyperextension":13,"lateral_raise":14,"leg_curl":15,"leg_raise":16,"lunge":17,"olympic_lift":18,"plank":19,"plyo":20,"pull_up":21,"push_up":22,"row":23,"shoulder_press":24,"shoulder_stability":25,"shrug":26,"sit_up":27,"squat":28,"total_body":29,"triceps_extension":30,"warm_up":31,"run":32,"unknown":65534}},"bench_press_exercise_name":{"base_type":"uint16","values":{"0":"alternating_dumbbell_chest_press_on_swiss_ball","1":"barbell_bench_press","2":"barbell_board_bench_press","3":"barbell_floor_press","4":"close_grip_barbell_bench_press","5":"decline_dumbbell_bench_press","6":"dumbbell_bench_press","7":"dumbbell_floor_press","8":"incline_barbell_bench_press","9":"incline_dumbbell_bench_press","10":"incline_smith_machine_bench_press","11":"isometric_barbell_bench_press","12":"kettlebell_chest_press","13":"neutral_grip_dumbbell_bench_press","14":"neutral_grip_dumbbell_incline_bench_press","15":"one_arm_floor_press","16":"weighted_one_arm_floor_press","17":"partial_lockout","18":"reverse_grip_barbell_bench_press","19":"reverse_grip_incline_bench_press","20":"single_arm_cable_chest_press","21":"single_arm_dumbbell_bench_press","22":"smith_machine_bench_press","23":"swiss_ball_dumbbell_chest_press","24":"triple_stop_barbell_bench_press","25":"wide_grip_barbell_bench_press","26":"alternating_dumbbell_chest_press","alternating_dumbbell_chest_press_on_swiss_ball":0,"barbell_bench_press":1,"barbell_board_bench_press":2,"barbell_floor_press":3,"close_grip_barbell_bench_press":4,"decline_dumbbell_bench_press":5,"dumbbell_bench_press":6,"dumbbell_floor_press":7,"incline_barbell_bench_press":8,"incline_dumbbell_bench_press":9,"incline_smith_machine_bench_press":10,"isometric_barbell_bench_press":11,"kettlebell_chest_press":12,"neutral_grip_dumbbell_bench_press":13,"neutral_grip_dumbbell_incline_bench_press":14,"one_arm_floor_press":15,"weighted_one_arm_floor_press":16,"partial_lockout":17,"reverse_grip_barbell_bench_press":18,"reverse_grip_incline_bench_press":19,"single_arm_cable_chest_press":20,"single_arm_dumbbell_bench_press":21,"smith_machine_bench_press":22,"swiss_ball_dumbbell_chest_press":23,"triple_stop_barbell_bench_press":24,"wide_grip_barbell_bench_press":25,"alternating_dumbbell_chest_press":26}},"calf_raise_exercise_name":{"base_type":"uint16","values":{"0":"3_way_calf_raise","1":"3_way_weighted_calf_raise","2":"3_way_single_leg_calf_raise","3":"3_way_weighted_single_leg_calf_raise","4":"donkey_calf_raise","5":"weighted_donkey_calf_raise","6":"seated_calf_raise","7":"weighted_seated_calf_raise","8":"seated_dumbbell_toe_raise","9":"single_leg_bent_knee_calf_raise","10":"weighted_single_leg_bent_knee_calf_raise","11":"single_leg_decline_push_up","12":"single_leg_donkey_calf_raise","13":"weighted_single_leg_donkey_calf_raise","14":"single_leg_hip_raise_with_knee_hold","15":"single_leg_standing_calf_raise","16":"single_leg_standing_dumbbell_calf_raise","17":"standing_barbell_calf_raise","18":"standing_calf_raise","19":"weighted_standing_calf_raise","20":"standing_dumbbell_calf_raise","3_way_calf_raise":0,"3_way_weighted_calf_raise":1,"3_way_single_leg_calf_raise":2,"3_way_weighted_single_leg_calf_raise":3,"donkey_calf_raise":4,"weighted_donkey_calf_raise":5,"seated_calf_raise":6,"weighted_seated_calf_raise":7,"seated_dumbbell_toe_raise":8,"single_leg_bent_knee_calf_raise":9,"weighted_single_leg_bent_knee_calf_raise":10,"single_leg_decline_push_up":11,"single_leg_donkey_calf_raise":12,"weighted_single_leg_donkey_calf_raise":13,"single_leg_hip_raise_with_knee_hold":14,"single_leg_standing_calf_raise":15,"single_leg_standing_dumbbell_calf_raise":16,"standing_barbell_calf_raise":17,"standing_calf_raise":18,"weighted_standing_calf_raise":19,"standing_dumbbell_calf_raise":20}},"cardio_exercise_name":{"base_type":"uint16","values":{"0":"bob_and_weave_circle","1":"weighted_bob_and_weave_circle","2":"cardio_core_crawl","3":"weighted_cardio_core_crawl","4":"double_under","5":"weighted_double_under","6":"jump_rope","7":"weighted_jump_rope","8":"jump_rope_crossover","9":"weighted_jump_rope_crossover","10":"jump_rope_jog","11":"weighted_jump_rope_jog","12":"jumping_jacks","13":"weighted_jumping_jacks","14":"ski_moguls","15":"weighted_ski_moguls","16":"split_jacks","17":"weighted_split_jacks","18":"squat_jacks","19":"weighted_squat_jacks","20":"triple_under","21":"weighted_triple_under","bob_and_weave_circle":0,"weighted_bob_and_weave_circle":1,"cardio_core_crawl":2,"weighted_cardio_core_crawl":3,"double_under":4,"weighted_double_under":5,"jump_rope":6,"weighted_jump_rope":7,"jump_rope_crossover":8,"weighted_jump_rope_crossover":9,"jump_rope_jog":10,"weighted_jump_rope_jog":11,"jumping_jacks":12,"weighted_jumping_jacks":13,"ski_moguls":14,"weighted_ski_moguls":15,"split_jacks":16,"weighted_split_jacks":17,"squat_jacks":18,"weighted_squat_jacks":19,"triple_under":20,"weighted_triple_under":21}},"carry_exercise_name":{"base_type":"uint16","values":{"0":"bar_holds","1":"farmers_walk","2":"farmers_walk_on_toes","3":"hex_dumbbell_hold","4":"overhead_carry","bar_holds":0,"farmers_walk":1,"farmers_walk_on_toes":2,"hex_dumbbell_hold":3,"overhead_carry":4}},"chop_exercise_name":{"base_type":"uint16","values":{"0":"cable_pull_through","1":"cable_rotational_lift","2":"cable_woodchop","3":"cross_chop_to_knee","4":"weighted_cross_chop_to_knee","5":"dumbbell_chop","6":"half_kneeling_rotation","7":"weighted_half_kneeling_rotation","8":"half_kneeling_rotational_chop","9":"half_kneeling_rotational_reverse_chop","10":"half_kneeling_stability_chop","11":"half_kneeling_stability_reverse_chop","12":"kneeling_rotational_chop","13":"kneeling_rotational_reverse_chop","14":"kneeling_stability_chop","15":"kneeling_woodchopper","16":"medicine_ball_wood_chops","17":"power_squat_chops","18":"weighted_power_squat_chops","19":"standing_rotational_chop","20":"standing_split_rotational_chop","21":"standing_split_rotational_reverse_chop","22":"standing_stability_reverse_chop","cable_pull_through":0,"cable_rotational_lift":1,"cable_woodchop":2,"cross_chop_to_knee":3,"weighted_cross_chop_to_knee":4,"dumbbell_chop":5,"half_kneeling_rotation":6,"weighted_half_kneeling_rotation":7,"half_kneeling_rotational_chop":8,"half_kneeling_rotational_reverse_chop":9,"half_kneeling_stability_chop":10,"half_kneeling_stability_reverse_chop":11,"kneeling_rotational_chop":12,"kneeling_rotational_reverse_chop":13,"kneeling_stability_chop":14,"kneeling_woodchopper":15,"medicine_ball_wood_chops":16,"power_squat_chops":17,"weighted_power_squat_chops":18,"standing_rotational_chop":19,"standing_split_rotational_chop":20,"standing_split_rotational_reverse_chop":21,"standing_stability_reverse_chop":22}},"core_exercise_name":{"base_type":"uint16","values":{"0":"abs_jabs","1":"weighted_abs_jabs","2":"alternating_plate_reach","3":"barbell_rollout","4":"weighted_barbell_rollout","5":"body_bar_oblique_twist","6":"cable_core_press","7":"cable_side_bend","8":"side_bend","9":"weighted_side_bend","10":"crescent_circle","11":"weighted_crescent_circle","12":"cycling_russian_twist","13":"weighted_cycling_russian_twist","14":"elevated_feet_russian_twist","15":"weighted_elevated_feet_russian_twist","16":"half_turkish_get_up","17":"kettlebell_windmill","18":"kneeling_ab_wheel","19":"weighted_kneeling_ab_wheel","20":"modified_front_lever","21":"open_knee_tucks","22":"weighted_open_knee_tucks","23":"side_abs_leg_lift","24":"weighted_side_abs_leg_lift","25":"swiss_ball_jackknife","26":"weighted_swiss_ball_jackknife","27":"swiss_ball_pike","28":"weighted_swiss_ball_pike","29":"swiss_ball_rollout","30":"weighted_swiss_ball_rollout","31":"triangle_hip_press","32":"weighted_triangle_hip_press","33":"trx_suspended_jackknife","34":"weighted_trx_suspended_jackknife","35":"u_boat","36":"weighted_u_boat","37":"windmill_switches","38":"weighted_windmill_switches","39":"alternating_slide_out","40":"weighted_alternating_slide_out","41":"ghd_back_extensions","42":"weighted_ghd_back_extensions","43":"overhead_walk","44":"inchworm","45":"weighted_modified_front_lever","46":"russian_twist","47":"abdominal_leg_rotations","48":"arm_and_leg_extension_on_knees","49":"bicycle","50":"bicep_curl_with_leg_extension","51":"cat_cow","52":"corkscrew","53":"criss_cross","54":"criss_cross_with_ball","55":"double_leg_stretch","56":"knee_folds","57":"lower_lift","58":"neck_pull","59":"pelvic_clocks","60":"roll_over","61":"roll_up","62":"rolling","63":"rowing_1","64":"rowing_2","65":"scissors","66":"single_leg_circles","67":"single_leg_stretch","68":"snake_twist_1_and_2","69":"swan","70":"swimming","71":"teaser","72":"the_hundred","abs_jabs":0,"weighted_abs_jabs":1,"alternating_plate_reach":2,"barbell_rollout":3,"weighted_barbell_rollout":4,"body_bar_oblique_twist":5,"cable_core_press":6,"cable_side_bend":7,"side_bend":8,"weighted_side_bend":9,"crescent_circle":10,"weighted_crescent_circle":11,"cycling_russian_twist":12,"weighted_cycling_russian_twist":13,"elevated_feet_russian_twist":14,"weighted_elevated_feet_russian_twist":15,"half_turkish_get_up":16,"kettlebell_windmill":17,"kneeling_ab_wheel":18,"weighted_kneeling_ab_wheel":19,"modified_front_lever":20,"open_knee_tucks":21,"weighted_open_knee_tucks":22,"side_abs_leg_lift":23,"weighted_side_abs_leg_lift":24,"swiss_ball_jackknife":25,"weighted_swiss_ball_jackknife":26,"swiss_ball_pike":27,"weighted_swiss_ball_pike":28,"swiss_ball_rollout":29,"weighted_swiss_ball_rollout":30,"triangle_hip_press":31,"weighted_triangle_hip_press":32,"trx_suspended_jackknife":33,"weighted_trx_suspended_jackknife":34,"u_boat":35,"weighted_u_boat":36,"windmill_switches":37,"weighted_windmill_switches":38,"alternating_slide_out":39,"weighted_alternating_slide_out":40,"ghd_back_extensions":41,"weighted_ghd_back_extensions":42,"overhead_walk":43,"inchworm":44,"weighted_modified_front_lever":45,"russian_twist":46,"abdominal_leg_rotations":47,"arm_and_leg_extension_on_knees":48,"bicycle":49,"bicep_curl_with_leg_extension":50,"cat_cow":51,"corkscrew":52,"criss_cross":53,"criss_cross_with_ball":54,"double_leg_stretch":55,"knee_folds":56,"lower_lift":57,"neck_pull":58,"pelvic_clocks":59,"roll_over":60,"roll_up":61,"rolling":62,"rowing_1":63,"rowing_2":64,"scissors":65,"single_leg_circles":66,"single_leg_stretch":67,"snake_twist_1_and_2":68,"swan":69,"swimming":70,"teaser":71,"the_hundred":72}},"crunch_exercise_name":{"base_type":"uint16","values":{"0":"bicycle_crunch","1":"cable_crunch","2":"circular_arm_crunch","3":"crossed_arms_crunch","4":"weighted_crossed_arms_crunch","5":"cross_leg_reverse_crunch","6":"weighted_cross_leg_reverse_crunch","7":"crunch_chop","8":"weighted_crunch_chop","9":"double_crunch","10":"weighted_double_crunch","11":"elbow_to_knee_crunch","12":"weighted_elbow_to_knee_crunch","13":"flutter_kicks","14":"weighted_flutter_kicks","15":"foam_roller_reverse_crunch_on_bench","16":"weighted_foam_roller_reverse_crunch_on_bench","17":"foam_roller_reverse_crunch_with_dumbbell","18":"foam_roller_reverse_crunch_with_medicine_ball","19":"frog_press","20":"hanging_knee_raise_oblique_crunch","21":"weighted_hanging_knee_raise_oblique_crunch","22":"hip_crossover","23":"weighted_hip_crossover","24":"hollow_rock","25":"weighted_hollow_rock","26":"incline_reverse_crunch","27":"weighted_incline_reverse_crunch","28":"kneeling_cable_crunch","29":"kneeling_cross_crunch","30":"weighted_kneeling_cross_crunch","31":"kneeling_oblique_cable_crunch","32":"knees_to_elbow","33":"leg_extensions","34":"weighted_leg_extensions","35":"leg_levers","36":"mcgill_curl_up","37":"weighted_mcgill_curl_up","38":"modified_pilates_roll_up_with_ball","39":"weighted_modified_pilates_roll_up_with_ball","40":"pilates_crunch","41":"weighted_pilates_crunch","42":"pilates_roll_up_with_ball","43":"weighted_pilates_roll_up_with_ball","44":"raised_legs_crunch","45":"weighted_raised_legs_crunch","46":"reverse_crunch","47":"weighted_reverse_crunch","48":"reverse_crunch_on_a_bench","49":"weighted_reverse_crunch_on_a_bench","50":"reverse_curl_and_lift","51":"weighted_reverse_curl_and_lift","52":"rotational_lift","53":"weighted_rotational_lift","54":"seated_alternating_reverse_crunch","55":"weighted_seated_alternating_reverse_crunch","56":"seated_leg_u","57":"weighted_seated_leg_u","58":"side_to_side_crunch_and_weave","59":"weighted_side_to_side_crunch_and_weave","60":"single_leg_reverse_crunch","61":"weighted_single_leg_reverse_crunch","62":"skater_crunch_cross","63":"weighted_skater_crunch_cross","64":"standing_cable_crunch","65":"standing_side_crunch","66":"step_climb","67":"weighted_step_climb","68":"swiss_ball_crunch","69":"swiss_ball_reverse_crunch","70":"weighted_swiss_ball_reverse_crunch","71":"swiss_ball_russian_twist","72":"weighted_swiss_ball_russian_twist","73":"swiss_ball_side_crunch","74":"weighted_swiss_ball_side_crunch","75":"thoracic_crunches_on_foam_roller","76":"weighted_thoracic_crunches_on_foam_roller","77":"triceps_crunch","78":"weighted_bicycle_crunch","79":"weighted_crunch","80":"weighted_swiss_ball_crunch","81":"toes_to_bar","82":"weighted_toes_to_bar","83":"crunch","84":"straight_leg_crunch_with_ball","bicycle_crunch":0,"cable_crunch":1,"circular_arm_crunch":2,"crossed_arms_crunch":3,"weighted_crossed_arms_crunch":4,"cross_leg_reverse_crunch":5,"weighted_cross_leg_reverse_crunch":6,"crunch_chop":7,"weighted_crunch_chop":8,"double_crunch":9,"weighted_double_crunch":10,"elbow_to_knee_crunch":11,"weighted_elbow_to_knee_crunch":12,"flutter_kicks":13,"weighted_flutter_kicks":14,"foam_roller_reverse_crunch_on_bench":15,"weighted_foam_roller_reverse_crunch_on_bench":16,"foam_roller_reverse_crunch_with_dumbbell":17,"foam_roller_reverse_crunch_with_medicine_ball":18,"frog_press":19,"hanging_knee_raise_oblique_crunch":20,"weighted_hanging_knee_raise_oblique_crunch":21,"hip_crossover":22,"weighted_hip_crossover":23,"hollow_rock":24,"weighted_hollow_rock":25,"incline_reverse_crunch":26,"weighted_incline_reverse_crunch":27,"kneeling_cable_crunch":28,"kneeling_cross_crunch":29,"weighted_kneeling_cross_crunch":30,"kneeling_oblique_cable_crunch":31,"knees_to_elbow":32,"leg_extensions":33,"weighted_leg_extensions":34,"leg_levers":35,"mcgill_curl_up":36,"weighted_mcgill_curl_up":37,"modified_pilates_roll_up_with_ball":38,"weighted_modified_pilates_roll_up_with_ball":39,"pilates_crunch":40,"weighted_pilates_crunch":41,"pilates_roll_up_with_ball":42,"weighted_pilates_roll_up_with_ball":43,"raised_legs_crunch":44,"weighted_raised_legs_crunch":45,"reverse_crunch":46,"weighted_reverse_crunch":47,"reverse_crunch_on_a_bench":48,"weighted_reverse_crunch_on_a_bench":49,"reverse_curl_and_lift":50,"weighted_reverse_curl_and_lift":51,"rotational_lift":52,"weighted_rotational_lift":53,"seated_alternating_reverse_crunch":54,"weighted_seated_alternating_reverse_crunch":55,"seated_leg_u":56,"weighted_seated_leg_u":57,"side_to_side_crunch_and_weave":58,"weighted_side_to_side_crunch_and_weave":59,"single_leg_reverse_crunch":60,"weighted_single_leg_reverse_crunch":61,"skater_crunch_cross":62,"weighted_skater_crunch_cross":63,"standing_cable_crunch":64,"standing_side_crunch":65,"step_climb":66,"weighted_step_climb":67,"swiss_ball_crunch":68,"swiss_ball_reverse_crunch":69,"weighted_swiss_ball_reverse_crunch":70,"swiss_ball_russian_twist":71,"weighted_swiss_ball_russian_twist":72,"swiss_ball_side_crunch":73,"weighted_swiss_ball_side_crunch":74,"thoracic_crunches_on_foam_roller":75,"weighted_thoracic_crunches_on_foam_roller":76,"triceps_crunch":77,"weighted_bicycle_crunch":78,"weighted_crunch":79,"weighted_swiss_ball_crunch":80,"toes_to_bar":81,"weighted_toes_to_bar":82,"crunch":83,"straight_leg_crunch_with_ball":84}},"curl_exercise_name":{"base_type":"uint16","values":{"0":"alternating_dumbbell_biceps_curl","1":"alternating_dumbbell_biceps_curl_on_swiss_ball","2":"alternating_incline_dumbbell_biceps_curl","3":"barbell_biceps_curl","4":"barbell_reverse_wrist_curl","5":"barbell_wrist_curl","6":"behind_the_back_barbell_reverse_wrist_curl","7":"behind_the_back_one_arm_cable_curl","8":"cable_biceps_curl","9":"cable_hammer_curl","10":"cheating_barbell_biceps_curl","11":"close_grip_ez_bar_biceps_curl","12":"cross_body_dumbbell_hammer_curl","13":"dead_hang_biceps_curl","14":"decline_hammer_curl","15":"dumbbell_biceps_curl_with_static_hold","16":"dumbbell_hammer_curl","17":"dumbbell_reverse_wrist_curl","18":"dumbbell_wrist_curl","19":"ez_bar_preacher_curl","20":"forward_bend_biceps_curl","21":"hammer_curl_to_press","22":"incline_dumbbell_biceps_curl","23":"incline_offset_thumb_dumbbell_curl","24":"kettlebell_biceps_curl","25":"lying_concentration_cable_curl","26":"one_arm_preacher_curl","27":"plate_pinch_curl","28":"preacher_curl_with_cable","29":"reverse_ez_bar_curl","30":"reverse_grip_wrist_curl","31":"reverse_grip_barbell_biceps_curl","32":"seated_alternating_dumbbell_biceps_curl","33":"seated_dumbbell_biceps_curl","34":"seated_reverse_dumbbell_curl","35":"split_stance_offset_pinky_dumbbell_curl","36":"standing_alternating_dumbbell_curls","37":"standing_dumbbell_biceps_curl","38":"standing_ez_bar_biceps_curl","39":"static_curl","40":"swiss_ball_dumbbell_overhead_triceps_extension","41":"swiss_ball_ez_bar_preacher_curl","42":"twisting_standing_dumbbell_biceps_curl","43":"wide_grip_ez_bar_biceps_curl","alternating_dumbbell_biceps_curl":0,"alternating_dumbbell_biceps_curl_on_swiss_ball":1,"alternating_incline_dumbbell_biceps_curl":2,"barbell_biceps_curl":3,"barbell_reverse_wrist_curl":4,"barbell_wrist_curl":5,"behind_the_back_barbell_reverse_wrist_curl":6,"behind_the_back_one_arm_cable_curl":7,"cable_biceps_curl":8,"cable_hammer_curl":9,"cheating_barbell_biceps_curl":10,"close_grip_ez_bar_biceps_curl":11,"cross_body_dumbbell_hammer_curl":12,"dead_hang_biceps_curl":13,"decline_hammer_curl":14,"dumbbell_biceps_curl_with_static_hold":15,"dumbbell_hammer_curl":16,"dumbbell_reverse_wrist_curl":17,"dumbbell_wrist_curl":18,"ez_bar_preacher_curl":19,"forward_bend_biceps_curl":20,"hammer_curl_to_press":21,"incline_dumbbell_biceps_curl":22,"incline_offset_thumb_dumbbell_curl":23,"kettlebell_biceps_curl":24,"lying_concentration_cable_curl":25,"one_arm_preacher_curl":26,"plate_pinch_curl":27,"preacher_curl_with_cable":28,"reverse_ez_bar_curl":29,"reverse_grip_wrist_curl":30,"reverse_grip_barbell_biceps_curl":31,"seated_alternating_dumbbell_biceps_curl":32,"seated_dumbbell_biceps_curl":33,"seated_reverse_dumbbell_curl":34,"split_stance_offset_pinky_dumbbell_curl":35,"standing_alternating_dumbbell_curls":36,"standing_dumbbell_biceps_curl":37,"standing_ez_bar_biceps_curl":38,"static_curl":39,"swiss_ball_dumbbell_overhead_triceps_extension":40,"swiss_ball_ez_bar_preacher_curl":41,"twisting_standing_dumbbell_biceps_curl":42,"wide_grip_ez_bar_biceps_curl":43}},"deadlift_exercise_name":{"base_type":"uint16","values":{"0":"barbell_deadlift","1":"barbell_straight_leg_deadlift","2":"dumbbell_deadlift","3":"dumbbell_single_leg_deadlift_to_row","4":"dumbbell_straight_leg_deadlift","5":"kettlebell_floor_to_shelf","6":"one_arm_one_leg_deadlift","7":"rack_pull","8":"rotational_dumbbell_straight_leg_deadlift","9":"single_arm_deadlift","10":"single_leg_barbell_deadlift","11":"single_leg_barbell_straight_leg_deadlift","12":"single_leg_deadlift_with_barbell","13":"single_leg_rdl_circuit","14":"single_leg_romanian_deadlift_with_dumbbell","15":"sumo_deadlift","16":"sumo_deadlift_high_pull","17":"trap_bar_deadlift","18":"wide_grip_barbell_deadlift","barbell_deadlift":0,"barbell_straight_leg_deadlift":1,"dumbbell_deadlift":2,"dumbbell_single_leg_deadlift_to_row":3,"dumbbell_straight_leg_deadlift":4,"kettlebell_floor_to_shelf":5,"one_arm_one_leg_deadlift":6,"rack_pull":7,"rotational_dumbbell_straight_leg_deadlift":8,"single_arm_deadlift":9,"single_leg_barbell_deadlift":10,"single_leg_barbell_straight_leg_deadlift":11,"single_leg_deadlift_with_barbell":12,"single_leg_rdl_circuit":13,"single_leg_romanian_deadlift_with_dumbbell":14,"sumo_deadlift":15,"sumo_deadlift_high_pull":16,"trap_bar_deadlift":17,"wide_grip_barbell_deadlift":18}},"flye_exercise_name":{"base_type":"uint16","values":{"0":"cable_crossover","1":"decline_dumbbell_flye","2":"dumbbell_flye","3":"incline_dumbbell_flye","4":"kettlebell_flye","5":"kneeling_rear_flye","6":"single_arm_standing_cable_reverse_flye","7":"swiss_ball_dumbbell_flye","8":"arm_rotations","9":"hug_a_tree","cable_crossover":0,"decline_dumbbell_flye":1,"dumbbell_flye":2,"incline_dumbbell_flye":3,"kettlebell_flye":4,"kneeling_rear_flye":5,"single_arm_standing_cable_reverse_flye":6,"swiss_ball_dumbbell_flye":7,"arm_rotations":8,"hug_a_tree":9}},"hip_raise_exercise_name":{"base_type":"uint16","values":{"0":"barbell_hip_thrust_on_floor","1":"barbell_hip_thrust_with_bench","2":"bent_knee_swiss_ball_reverse_hip_raise","3":"weighted_bent_knee_swiss_ball_reverse_hip_raise","4":"bridge_with_leg_extension","5":"weighted_bridge_with_leg_extension","6":"clam_bridge","7":"front_kick_tabletop","8":"weighted_front_kick_tabletop","9":"hip_extension_and_cross","10":"weighted_hip_extension_and_cross","11":"hip_raise","12":"weighted_hip_raise","13":"hip_raise_with_feet_on_swiss_ball","14":"weighted_hip_raise_with_feet_on_swiss_ball","15":"hip_raise_with_head_on_bosu_ball","16":"weighted_hip_raise_with_head_on_bosu_ball","17":"hip_raise_with_head_on_swiss_ball","18":"weighted_hip_raise_with_head_on_swiss_ball","19":"hip_raise_with_knee_squeeze","20":"weighted_hip_raise_with_knee_squeeze","21":"incline_rear_leg_extension","22":"weighted_incline_rear_leg_extension","23":"kettlebell_swing","24":"marching_hip_raise","25":"weighted_marching_hip_raise","26":"marching_hip_raise_with_feet_on_a_swiss_ball","27":"weighted_marching_hip_raise_with_feet_on_a_swiss_ball","28":"reverse_hip_raise","29":"weighted_reverse_hip_raise","30":"single_leg_hip_raise","31":"weighted_single_leg_hip_raise","32":"single_leg_hip_raise_with_foot_on_bench","33":"weighted_single_leg_hip_raise_with_foot_on_bench","34":"single_leg_hip_raise_with_foot_on_bosu_ball","35":"weighted_single_leg_hip_raise_with_foot_on_bosu_ball","36":"single_leg_hip_raise_with_foot_on_foam_roller","37":"weighted_single_leg_hip_raise_with_foot_on_foam_roller","38":"single_leg_hip_raise_with_foot_on_medicine_ball","39":"weighted_single_leg_hip_raise_with_foot_on_medicine_ball","40":"single_leg_hip_raise_with_head_on_bosu_ball","41":"weighted_single_leg_hip_raise_with_head_on_bosu_ball","42":"weighted_clam_bridge","43":"single_leg_swiss_ball_hip_raise_and_leg_curl","44":"clams","45":"inner_thigh_circles","46":"inner_thigh_side_lift","47":"leg_circles","48":"leg_lift","49":"leg_lift_in_external_rotation","barbell_hip_thrust_on_floor":0,"barbell_hip_thrust_with_bench":1,"bent_knee_swiss_ball_reverse_hip_raise":2,"weighted_bent_knee_swiss_ball_reverse_hip_raise":3,"bridge_with_leg_extension":4,"weighted_bridge_with_leg_extension":5,"clam_bridge":6,"front_kick_tabletop":7,"weighted_front_kick_tabletop":8,"hip_extension_and_cross":9,"weighted_hip_extension_and_cross":10,"hip_raise":11,"weighted_hip_raise":12,"hip_raise_with_feet_on_swiss_ball":13,"weighted_hip_raise_with_feet_on_swiss_ball":14,"hip_raise_with_head_on_bosu_ball":15,"weighted_hip_raise_with_head_on_bosu_ball":16,"hip_raise_with_head_on_swiss_ball":17,"weighted_hip_raise_with_head_on_swiss_ball":18,"hip_raise_with_knee_squeeze":19,"weighted_hip_raise_with_knee_squeeze":20,"incline_rear_leg_extension":21,"weighted_incline_rear_leg_extension":22,"kettlebell_swing":23,"marching_hip_raise":24,"weighted_marching_hip_raise":25,"marching_hip_raise_with_feet_on_a_swiss_ball":26,"weighted_marching_hip_raise_with_feet_on_a_swiss_ball":27,"reverse_hip_raise":28,"weighted_reverse_hip_raise":29,"single_leg_hip_raise":30,"weighted_single_leg_hip_raise":31,"single_leg_hip_raise_with_foot_on_bench":32,"weighted_single_leg_hip_raise_with_foot_on_bench":33,"single_leg_hip_raise_with_foot_on_bosu_ball":34,"weighted_single_leg_hip_raise_with_foot_on_bosu_ball":35,"single_leg_hip_raise_with_foot_on_foam_roller":36,"weighted_single_leg_hip_raise_with_foot_on_foam_roller":37,"single_leg_hip_raise_with_foot_on_medicine_ball":38,"weighted_single_leg_hip_raise_with_foot_on_medicine_ball":39,"single_leg_hip_raise_with_head_on_bosu_ball":40,"weighted_single_leg_hip_raise_with_head_on_bosu_ball":41,"weighted_clam_bridge":42,"single_leg_swiss_ball_hip_raise_and_leg_curl":43,"clams":44,"inner_thigh_circles":45,"inner_thigh_side_lift":46,"leg_circles":47,"leg_lift":48,"leg_lift_in_external_rotation":49}},"hip_stability_exercise_name":{"base_type":"uint16","values":{"0":"band_side_lying_leg_raise","1":"dead_bug","2":"weighted_dead_bug","3":"external_hip_raise","4":"weighted_external_hip_raise","5":"fire_hydrant_kicks","6":"weighted_fire_hydrant_kicks","7":"hip_circles","8":"weighted_hip_circles","9":"inner_thigh_lift","10":"weighted_inner_thigh_lift","11":"lateral_walks_with_band_at_ankles","12":"pretzel_side_kick","13":"weighted_pretzel_side_kick","14":"prone_hip_internal_rotation","15":"weighted_prone_hip_internal_rotation","16":"quadruped","17":"quadruped_hip_extension","18":"weighted_quadruped_hip_extension","19":"quadruped_with_leg_lift","20":"weighted_quadruped_with_leg_lift","21":"side_lying_leg_raise","22":"weighted_side_lying_leg_raise","23":"sliding_hip_adduction","24":"weighted_sliding_hip_adduction","25":"standing_adduction","26":"weighted_standing_adduction","27":"standing_cable_hip_abduction","28":"standing_hip_abduction","29":"weighted_standing_hip_abduction","30":"standing_rear_leg_raise","31":"weighted_standing_rear_leg_raise","32":"supine_hip_internal_rotation","33":"weighted_supine_hip_internal_rotation","band_side_lying_leg_raise":0,"dead_bug":1,"weighted_dead_bug":2,"external_hip_raise":3,"weighted_external_hip_raise":4,"fire_hydrant_kicks":5,"weighted_fire_hydrant_kicks":6,"hip_circles":7,"weighted_hip_circles":8,"inner_thigh_lift":9,"weighted_inner_thigh_lift":10,"lateral_walks_with_band_at_ankles":11,"pretzel_side_kick":12,"weighted_pretzel_side_kick":13,"prone_hip_internal_rotation":14,"weighted_prone_hip_internal_rotation":15,"quadruped":16,"quadruped_hip_extension":17,"weighted_quadruped_hip_extension":18,"quadruped_with_leg_lift":19,"weighted_quadruped_with_leg_lift":20,"side_lying_leg_raise":21,"weighted_side_lying_leg_raise":22,"sliding_hip_adduction":23,"weighted_sliding_hip_adduction":24,"standing_adduction":25,"weighted_standing_adduction":26,"standing_cable_hip_abduction":27,"standing_hip_abduction":28,"weighted_standing_hip_abduction":29,"standing_rear_leg_raise":30,"weighted_standing_rear_leg_raise":31,"supine_hip_internal_rotation":32,"weighted_supine_hip_internal_rotation":33}},"hip_swing_exercise_name":{"base_type":"uint16","values":{"0":"single_arm_kettlebell_swing","1":"single_arm_dumbbell_swing","2":"step_out_swing","single_arm_kettlebell_swing":0,"single_arm_dumbbell_swing":1,"step_out_swing":2}},"hyperextension_exercise_name":{"base_type":"uint16","values":{"0":"back_extension_with_opposite_arm_and_leg_reach","1":"weighted_back_extension_with_opposite_arm_and_leg_reach","2":"base_rotations","3":"weighted_base_rotations","4":"bent_knee_reverse_hyperextension","5":"weighted_bent_knee_reverse_hyperextension","6":"hollow_hold_and_roll","7":"weighted_hollow_hold_and_roll","8":"kicks","9":"weighted_kicks","10":"knee_raises","11":"weighted_knee_raises","12":"kneeling_superman","13":"weighted_kneeling_superman","14":"lat_pull_down_with_row","15":"medicine_ball_deadlift_to_reach","16":"one_arm_one_leg_row","17":"one_arm_row_with_band","18":"overhead_lunge_with_medicine_ball","19":"plank_knee_tucks","20":"weighted_plank_knee_tucks","21":"side_step","22":"weighted_side_step","23":"single_leg_back_extension","24":"weighted_single_leg_back_extension","25":"spine_extension","26":"weighted_spine_extension","27":"static_back_extension","28":"weighted_static_back_extension","29":"superman_from_floor","30":"weighted_superman_from_floor","31":"swiss_ball_back_extension","32":"weighted_swiss_ball_back_extension","33":"swiss_ball_hyperextension","34":"weighted_swiss_ball_hyperextension","35":"swiss_ball_opposite_arm_and_leg_lift","36":"weighted_swiss_ball_opposite_arm_and_leg_lift","37":"superman_on_swiss_ball","38":"cobra","39":"supine_floor_barre","back_extension_with_opposite_arm_and_leg_reach":0,"weighted_back_extension_with_opposite_arm_and_leg_reach":1,"base_rotations":2,"weighted_base_rotations":3,"bent_knee_reverse_hyperextension":4,"weighted_bent_knee_reverse_hyperextension":5,"hollow_hold_and_roll":6,"weighted_hollow_hold_and_roll":7,"kicks":8,"weighted_kicks":9,"knee_raises":10,"weighted_knee_raises":11,"kneeling_superman":12,"weighted_kneeling_superman":13,"lat_pull_down_with_row":14,"medicine_ball_deadlift_to_reach":15,"one_arm_one_leg_row":16,"one_arm_row_with_band":17,"overhead_lunge_with_medicine_ball":18,"plank_knee_tucks":19,"weighted_plank_knee_tucks":20,"side_step":21,"weighted_side_step":22,"single_leg_back_extension":23,"weighted_single_leg_back_extension":24,"spine_extension":25,"weighted_spine_extension":26,"static_back_extension":27,"weighted_static_back_extension":28,"superman_from_floor":29,"weighted_superman_from_floor":30,"swiss_ball_back_extension":31,"weighted_swiss_ball_back_extension":32,"swiss_ball_hyperextension":33,"weighted_swiss_ball_hyperextension":34,"swiss_ball_opposite_arm_and_leg_lift":35,"weighted_swiss_ball_opposite_arm_and_leg_lift":36,"superman_on_swiss_ball":37,"cobra":38,"supine_floor_barre":39}},"lateral_raise_exercise_name":{"base_type":"uint16","values":{"0":"45_degree_cable_external_rotation","1":"alternating_lateral_raise_with_static_hold","2":"bar_muscle_up","3":"bent_over_lateral_raise","4":"cable_diagonal_raise","5":"cable_front_raise","6":"calorie_row","7":"combo_shoulder_raise","8":"dumbbell_diagonal_raise","9":"dumbbell_v_raise","10":"front_raise","11":"leaning_dumbbell_lateral_raise","12":"lying_dumbbell_raise","13":"muscle_up","14":"one_arm_cable_lateral_raise","15":"overhand_grip_rear_lateral_raise","16":"plate_raises","17":"ring_dip","18":"weighted_ring_dip","19":"ring_muscle_up","20":"weighted_ring_muscle_up","21":"rope_climb","22":"weighted_rope_climb","23":"scaption","24":"seated_lateral_raise","25":"seated_rear_lateral_raise","26":"side_lying_lateral_raise","27":"standing_lift","28":"suspended_row","29":"underhand_grip_rear_lateral_raise","30":"wall_slide","31":"weighted_wall_slide","32":"arm_circles","33":"shaving_the_head","45_degree_cable_external_rotation":0,"alternating_lateral_raise_with_static_hold":1,"bar_muscle_up":2,"bent_over_lateral_raise":3,"cable_diagonal_raise":4,"cable_front_raise":5,"calorie_row":6,"combo_shoulder_raise":7,"dumbbell_diagonal_raise":8,"dumbbell_v_raise":9,"front_raise":10,"leaning_dumbbell_lateral_raise":11,"lying_dumbbell_raise":12,"muscle_up":13,"one_arm_cable_lateral_raise":14,"overhand_grip_rear_lateral_raise":15,"plate_raises":16,"ring_dip":17,"weighted_ring_dip":18,"ring_muscle_up":19,"weighted_ring_muscle_up":20,"rope_climb":21,"weighted_rope_climb":22,"scaption":23,"seated_lateral_raise":24,"seated_rear_lateral_raise":25,"side_lying_lateral_raise":26,"standing_lift":27,"suspended_row":28,"underhand_grip_rear_lateral_raise":29,"wall_slide":30,"weighted_wall_slide":31,"arm_circles":32,"shaving_the_head":33}},"leg_curl_exercise_name":{"base_type":"uint16","values":{"0":"leg_curl","1":"weighted_leg_curl","2":"good_morning","3":"seated_barbell_good_morning","4":"single_leg_barbell_good_morning","5":"single_leg_sliding_leg_curl","6":"sliding_leg_curl","7":"split_barbell_good_morning","8":"split_stance_extension","9":"staggered_stance_good_morning","10":"swiss_ball_hip_raise_and_leg_curl","11":"zercher_good_morning","leg_curl":0,"weighted_leg_curl":1,"good_morning":2,"seated_barbell_good_morning":3,"single_leg_barbell_good_morning":4,"single_leg_sliding_leg_curl":5,"sliding_leg_curl":6,"split_barbell_good_morning":7,"split_stance_extension":8,"staggered_stance_good_morning":9,"swiss_ball_hip_raise_and_leg_curl":10,"zercher_good_morning":11}},"leg_raise_exercise_name":{"base_type":"uint16","values":{"0":"hanging_knee_raise","1":"hanging_leg_raise","2":"weighted_hanging_leg_raise","3":"hanging_single_leg_raise","4":"weighted_hanging_single_leg_raise","5":"kettlebell_leg_raises","6":"leg_lowering_drill","7":"weighted_leg_lowering_drill","8":"lying_straight_leg_raise","9":"weighted_lying_straight_leg_raise","10":"medicine_ball_leg_drops","11":"quadruped_leg_raise","12":"weighted_quadruped_leg_raise","13":"reverse_leg_raise","14":"weighted_reverse_leg_raise","15":"reverse_leg_raise_on_swiss_ball","16":"weighted_reverse_leg_raise_on_swiss_ball","17":"single_leg_lowering_drill","18":"weighted_single_leg_lowering_drill","19":"weighted_hanging_knee_raise","20":"lateral_stepover","21":"weighted_lateral_stepover","hanging_knee_raise":0,"hanging_leg_raise":1,"weighted_hanging_leg_raise":2,"hanging_single_leg_raise":3,"weighted_hanging_single_leg_raise":4,"kettlebell_leg_raises":5,"leg_lowering_drill":6,"weighted_leg_lowering_drill":7,"lying_straight_leg_raise":8,"weighted_lying_straight_leg_raise":9,"medicine_ball_leg_drops":10,"quadruped_leg_raise":11,"weighted_quadruped_leg_raise":12,"reverse_leg_raise":13,"weighted_reverse_leg_raise":14,"reverse_leg_raise_on_swiss_ball":15,"weighted_reverse_leg_raise_on_swiss_ball":16,"single_leg_lowering_drill":17,"weighted_single_leg_lowering_drill":18,"weighted_hanging_knee_raise":19,"lateral_stepover":20,"weighted_lateral_stepover":21}},"lunge_exercise_name":{"base_type":"uint16","values":{"0":"overhead_lunge","1":"lunge_matrix","2":"weighted_lunge_matrix","3":"alternating_barbell_forward_lunge","4":"alternating_dumbbell_lunge_with_reach","5":"back_foot_elevated_dumbbell_split_squat","6":"barbell_box_lunge","7":"barbell_bulgarian_split_squat","8":"barbell_crossover_lunge","9":"barbell_front_split_squat","10":"barbell_lunge","11":"barbell_reverse_lunge","12":"barbell_side_lunge","13":"barbell_split_squat","14":"core_control_rear_lunge","15":"diagonal_lunge","16":"drop_lunge","17":"dumbbell_box_lunge","18":"dumbbell_bulgarian_split_squat","19":"dumbbell_crossover_lunge","20":"dumbbell_diagonal_lunge","21":"dumbbell_lunge","22":"dumbbell_lunge_and_rotation","23":"dumbbell_overhead_bulgarian_split_squat","24":"dumbbell_reverse_lunge_to_high_knee_and_press","25":"dumbbell_side_lunge","26":"elevated_front_foot_barbell_split_squat","27":"front_foot_elevated_dumbbell_split_squat","28":"gunslinger_lunge","29":"lawnmower_lunge","30":"low_lunge_with_isometric_adduction","31":"low_side_to_side_lunge","32":"lunge","33":"weighted_lunge","34":"lunge_with_arm_reach","35":"lunge_with_diagonal_reach","36":"lunge_with_side_bend","37":"offset_dumbbell_lunge","38":"offset_dumbbell_reverse_lunge","39":"overhead_bulgarian_split_squat","40":"overhead_dumbbell_reverse_lunge","41":"overhead_dumbbell_split_squat","42":"overhead_lunge_with_rotation","43":"reverse_barbell_box_lunge","44":"reverse_box_lunge","45":"reverse_dumbbell_box_lunge","46":"reverse_dumbbell_crossover_lunge","47":"reverse_dumbbell_diagonal_lunge","48":"reverse_lunge_with_reach_back","49":"weighted_reverse_lunge_with_reach_back","50":"reverse_lunge_with_twist_and_overhead_reach","51":"weighted_reverse_lunge_with_twist_and_overhead_reach","52":"reverse_sliding_box_lunge","53":"weighted_reverse_sliding_box_lunge","54":"reverse_sliding_lunge","55":"weighted_reverse_sliding_lunge","56":"runners_lunge_to_balance","57":"weighted_runners_lunge_to_balance","58":"shifting_side_lunge","59":"side_and_crossover_lunge","60":"weighted_side_and_crossover_lunge","61":"side_lunge","62":"weighted_side_lunge","63":"side_lunge_and_press","64":"side_lunge_jump_off","65":"side_lunge_sweep","66":"weighted_side_lunge_sweep","67":"side_lunge_to_crossover_tap","68":"weighted_side_lunge_to_crossover_tap","69":"side_to_side_lunge_chops","70":"weighted_side_to_side_lunge_chops","71":"siff_jump_lunge","72":"weighted_siff_jump_lunge","73":"single_arm_reverse_lunge_and_press","74":"sliding_lateral_lunge","75":"weighted_sliding_lateral_lunge","76":"walking_barbell_lunge","77":"walking_dumbbell_lunge","78":"walking_lunge","79":"weighted_walking_lunge","80":"wide_grip_overhead_barbell_split_squat","overhead_lunge":0,"lunge_matrix":1,"weighted_lunge_matrix":2,"alternating_barbell_forward_lunge":3,"alternating_dumbbell_lunge_with_reach":4,"back_foot_elevated_dumbbell_split_squat":5,"barbell_box_lunge":6,"barbell_bulgarian_split_squat":7,"barbell_crossover_lunge":8,"barbell_front_split_squat":9,"barbell_lunge":10,"barbell_reverse_lunge":11,"barbell_side_lunge":12,"barbell_split_squat":13,"core_control_rear_lunge":14,"diagonal_lunge":15,"drop_lunge":16,"dumbbell_box_lunge":17,"dumbbell_bulgarian_split_squat":18,"dumbbell_crossover_lunge":19,"dumbbell_diagonal_lunge":20,"dumbbell_lunge":21,"dumbbell_lunge_and_rotation":22,"dumbbell_overhead_bulgarian_split_squat":23,"dumbbell_reverse_lunge_to_high_knee_and_press":24,"dumbbell_side_lunge":25,"elevated_front_foot_barbell_split_squat":26,"front_foot_elevated_dumbbell_split_squat":27,"gunslinger_lunge":28,"lawnmower_lunge":29,"low_lunge_with_isometric_adduction":30,"low_side_to_side_lunge":31,"lunge":32,"weighted_lunge":33,"lunge_with_arm_reach":34,"lunge_with_diagonal_reach":35,"lunge_with_side_bend":36,"offset_dumbbell_lunge":37,"offset_dumbbell_reverse_lunge":38,"overhead_bulgarian_split_squat":39,"overhead_dumbbell_reverse_lunge":40,"overhead_dumbbell_split_squat":41,"overhead_lunge_with_rotation":42,"reverse_barbell_box_lunge":43,"reverse_box_lunge":44,"reverse_dumbbell_box_lunge":45,"reverse_dumbbell_crossover_lunge":46,"reverse_dumbbell_diagonal_lunge":47,"reverse_lunge_with_reach_back":48,"weighted_reverse_lunge_with_reach_back":49,"reverse_lunge_with_twist_and_overhead_reach":50,"weighted_reverse_lunge_with_twist_and_overhead_reach":51,"reverse_sliding_box_lunge":52,"weighted_reverse_sliding_box_lunge":53,"reverse_sliding_lunge":54,"weighted_reverse_sliding_lunge":55,"runners_lunge_to_balance":56,"weighted_runners_lunge_to_balance":57,"shifting_side_lunge":58,"side_and_crossover_lunge":59,"weighted_side_and_crossover_lunge":60,"side_lunge":61,"weighted_side_lunge":62,"side_lunge_and_press":63,"side_lunge_jump_off":64,"side_lunge_sweep":65,"weighted_side_lunge_sweep":66,"side_lunge_to_crossover_tap":67,"weighted_side_lunge_to_crossover_tap":68,"side_to_side_lunge_chops":69,"weighted_side_to_side_lunge_chops":70,"siff_jump_lunge":71,"weighted_siff_jump_lunge":72,"single_arm_reverse_lunge_and_press":73,"sliding_lateral_lunge":74,"weighted_sliding_lateral_lunge":75,"walking_barbell_lunge":76,"walking_dumbbell_lunge":77,"walking_lunge":78,"weighted_walking_lunge":79,"wide_grip_overhead_barbell_split_squat":80}},"olympic_lift_exercise_name":{"base_type":"uint16","values":{"0":"barbell_hang_power_clean","1":"barbell_hang_squat_clean","2":"barbell_power_clean","3":"barbell_power_snatch","4":"barbell_squat_clean","5":"clean_and_jerk","6":"barbell_hang_power_snatch","7":"barbell_hang_pull","8":"barbell_high_pull","9":"barbell_snatch","10":"barbell_split_jerk","11":"clean","12":"dumbbell_clean","13":"dumbbell_hang_pull","14":"one_hand_dumbbell_split_snatch","15":"push_jerk","16":"single_arm_dumbbell_snatch","17":"single_arm_hang_snatch","18":"single_arm_kettlebell_snatch","19":"split_jerk","20":"squat_clean_and_jerk","barbell_hang_power_clean":0,"barbell_hang_squat_clean":1,"barbell_power_clean":2,"barbell_power_snatch":3,"barbell_squat_clean":4,"clean_and_jerk":5,"barbell_hang_power_snatch":6,"barbell_hang_pull":7,"barbell_high_pull":8,"barbell_snatch":9,"barbell_split_jerk":10,"clean":11,"dumbbell_clean":12,"dumbbell_hang_pull":13,"one_hand_dumbbell_split_snatch":14,"push_jerk":15,"single_arm_dumbbell_snatch":16,"single_arm_hang_snatch":17,"single_arm_kettlebell_snatch":18,"split_jerk":19,"squat_clean_and_jerk":20}},"plank_exercise_name":{"base_type":"uint16","values":{"0":"45_degree_plank","1":"weighted_45_degree_plank","2":"90_degree_static_hold","3":"weighted_90_degree_static_hold","4":"bear_crawl","5":"weighted_bear_crawl","6":"cross_body_mountain_climber","7":"weighted_cross_body_mountain_climber","8":"elbow_plank_pike_jacks","9":"weighted_elbow_plank_pike_jacks","10":"elevated_feet_plank","11":"weighted_elevated_feet_plank","12":"elevator_abs","13":"weighted_elevator_abs","14":"extended_plank","15":"weighted_extended_plank","16":"full_plank_passe_twist","17":"weighted_full_plank_passe_twist","18":"inching_elbow_plank","19":"weighted_inching_elbow_plank","20":"inchworm_to_side_plank","21":"weighted_inchworm_to_side_plank","22":"kneeling_plank","23":"weighted_kneeling_plank","24":"kneeling_side_plank_with_leg_lift","25":"weighted_kneeling_side_plank_with_leg_lift","26":"lateral_roll","27":"weighted_lateral_roll","28":"lying_reverse_plank","29":"weighted_lying_reverse_plank","30":"medicine_ball_mountain_climber","31":"weighted_medicine_ball_mountain_climber","32":"modified_mountain_climber_and_extension","33":"weighted_modified_mountain_climber_and_extension","34":"mountain_climber","35":"weighted_mountain_climber","36":"mountain_climber_on_sliding_discs","37":"weighted_mountain_climber_on_sliding_discs","38":"mountain_climber_with_feet_on_bosu_ball","39":"weighted_mountain_climber_with_feet_on_bosu_ball","40":"mountain_climber_with_hands_on_bench","41":"mountain_climber_with_hands_on_swiss_ball","42":"weighted_mountain_climber_with_hands_on_swiss_ball","43":"plank","44":"plank_jacks_with_feet_on_sliding_discs","45":"weighted_plank_jacks_with_feet_on_sliding_discs","46":"plank_knee_twist","47":"weighted_plank_knee_twist","48":"plank_pike_jumps","49":"weighted_plank_pike_jumps","50":"plank_pikes","51":"weighted_plank_pikes","52":"plank_to_stand_up","53":"weighted_plank_to_stand_up","54":"plank_with_arm_raise","55":"weighted_plank_with_arm_raise","56":"plank_with_knee_to_elbow","57":"weighted_plank_with_knee_to_elbow","58":"plank_with_oblique_crunch","59":"weighted_plank_with_oblique_crunch","60":"plyometric_side_plank","61":"weighted_plyometric_side_plank","62":"rolling_side_plank","63":"weighted_rolling_side_plank","64":"side_kick_plank","65":"weighted_side_kick_plank","66":"side_plank","67":"weighted_side_plank","68":"side_plank_and_row","69":"weighted_side_plank_and_row","70":"side_plank_lift","71":"weighted_side_plank_lift","72":"side_plank_with_elbow_on_bosu_ball","73":"weighted_side_plank_with_elbow_on_bosu_ball","74":"side_plank_with_feet_on_bench","75":"weighted_side_plank_with_feet_on_bench","76":"side_plank_with_knee_circle","77":"weighted_side_plank_with_knee_circle","78":"side_plank_with_knee_tuck","79":"weighted_side_plank_with_knee_tuck","80":"side_plank_with_leg_lift","81":"weighted_side_plank_with_leg_lift","82":"side_plank_with_reach_under","83":"weighted_side_plank_with_reach_under","84":"single_leg_elevated_feet_plank","85":"weighted_single_leg_elevated_feet_plank","86":"single_leg_flex_and_extend","87":"weighted_single_leg_flex_and_extend","88":"single_leg_side_plank","89":"weighted_single_leg_side_plank","90":"spiderman_plank","91":"weighted_spiderman_plank","92":"straight_arm_plank","93":"weighted_straight_arm_plank","94":"straight_arm_plank_with_shoulder_touch","95":"weighted_straight_arm_plank_with_shoulder_touch","96":"swiss_ball_plank","97":"weighted_swiss_ball_plank","98":"swiss_ball_plank_leg_lift","99":"weighted_swiss_ball_plank_leg_lift","100":"swiss_ball_plank_leg_lift_and_hold","101":"swiss_ball_plank_with_feet_on_bench","102":"weighted_swiss_ball_plank_with_feet_on_bench","103":"swiss_ball_prone_jackknife","104":"weighted_swiss_ball_prone_jackknife","105":"swiss_ball_side_plank","106":"weighted_swiss_ball_side_plank","107":"three_way_plank","108":"weighted_three_way_plank","109":"towel_plank_and_knee_in","110":"weighted_towel_plank_and_knee_in","111":"t_stabilization","112":"weighted_t_stabilization","113":"turkish_get_up_to_side_plank","114":"weighted_turkish_get_up_to_side_plank","115":"two_point_plank","116":"weighted_two_point_plank","117":"weighted_plank","118":"wide_stance_plank_with_diagonal_arm_lift","119":"weighted_wide_stance_plank_with_diagonal_arm_lift","120":"wide_stance_plank_with_diagonal_leg_lift","121":"weighted_wide_stance_plank_with_diagonal_leg_lift","122":"wide_stance_plank_with_leg_lift","123":"weighted_wide_stance_plank_with_leg_lift","124":"wide_stance_plank_with_opposite_arm_and_leg_lift","125":"weighted_mountain_climber_with_hands_on_bench","126":"weighted_swiss_ball_plank_leg_lift_and_hold","127":"weighted_wide_stance_plank_with_opposite_arm_and_leg_lift","128":"plank_with_feet_on_swiss_ball","129":"side_plank_to_plank_with_reach_under","130":"bridge_with_glute_lower_lift","131":"bridge_one_leg_bridge","132":"plank_with_arm_variations","133":"plank_with_leg_lift","134":"reverse_plank_with_leg_pull","45_degree_plank":0,"weighted_45_degree_plank":1,"90_degree_static_hold":2,"weighted_90_degree_static_hold":3,"bear_crawl":4,"weighted_bear_crawl":5,"cross_body_mountain_climber":6,"weighted_cross_body_mountain_climber":7,"elbow_plank_pike_jacks":8,"weighted_elbow_plank_pike_jacks":9,"elevated_feet_plank":10,"weighted_elevated_feet_plank":11,"elevator_abs":12,"weighted_elevator_abs":13,"extended_plank":14,"weighted_extended_plank":15,"full_plank_passe_twist":16,"weighted_full_plank_passe_twist":17,"inching_elbow_plank":18,"weighted_inching_elbow_plank":19,"inchworm_to_side_plank":20,"weighted_inchworm_to_side_plank":21,"kneeling_plank":22,"weighted_kneeling_plank":23,"kneeling_side_plank_with_leg_lift":24,"weighted_kneeling_side_plank_with_leg_lift":25,"lateral_roll":26,"weighted_lateral_roll":27,"lying_reverse_plank":28,"weighted_lying_reverse_plank":29,"medicine_ball_mountain_climber":30,"weighted_medicine_ball_mountain_climber":31,"modified_mountain_climber_and_extension":32,"weighted_modified_mountain_climber_and_extension":33,"mountain_climber":34,"weighted_mountain_climber":35,"mountain_climber_on_sliding_discs":36,"weighted_mountain_climber_on_sliding_discs":37,"mountain_climber_with_feet_on_bosu_ball":38,"weighted_mountain_climber_with_feet_on_bosu_ball":39,"mountain_climber_with_hands_on_bench":40,"mountain_climber_with_hands_on_swiss_ball":41,"weighted_mountain_climber_with_hands_on_swiss_ball":42,"plank":43,"plank_jacks_with_feet_on_sliding_discs":44,"weighted_plank_jacks_with_feet_on_sliding_discs":45,"plank_knee_twist":46,"weighted_plank_knee_twist":47,"plank_pike_jumps":48,"weighted_plank_pike_jumps":49,"plank_pikes":50,"weighted_plank_pikes":51,"plank_to_stand_up":52,"weighted_plank_to_stand_up":53,"plank_with_arm_raise":54,"weighted_plank_with_arm_raise":55,"plank_with_knee_to_elbow":56,"weighted_plank_with_knee_to_elbow":57,"plank_with_oblique_crunch":58,"weighted_plank_with_oblique_crunch":59,"plyometric_side_plank":60,"weighted_plyometric_side_plank":61,"rolling_side_plank":62,"weighted_rolling_side_plank":63,"side_kick_plank":64,"weighted_side_kick_plank":65,"side_plank":66,"weighted_side_plank":67,"side_plank_and_row":68,"weighted_side_plank_and_row":69,"side_plank_lift":70,"weighted_side_plank_lift":71,"side_plank_with_elbow_on_bosu_ball":72,"weighted_side_plank_with_elbow_on_bosu_ball":73,"side_plank_with_feet_on_bench":74,"weighted_side_plank_with_feet_on_bench":75,"side_plank_with_knee_circle":76,"weighted_side_plank_with_knee_circle":77,"side_plank_with_knee_tuck":78,"weighted_side_plank_with_knee_tuck":79,"side_plank_with_leg_lift":80,"weighted_side_plank_with_leg_lift":81,"side_plank_with_reach_under":82,"weighted_side_plank_with_reach_under":83,"single_leg_elevated_feet_plank":84,"weighted_single_leg_elevated_feet_plank":85,"single_leg_flex_and_extend":86,"weighted_single_leg_flex_and_extend":87,"single_leg_side_plank":88,"weighted_single_leg_side_plank":89,"spiderman_plank":90,"weighted_spiderman_plank":91,"straight_arm_plank":92,"weighted_straight_arm_plank":93,"straight_arm_plank_with_shoulder_touch":94,"weighted_straight_arm_plank_with_shoulder_touch":95,"swiss_ball_plank":96,"weighted_swiss_ball_plank":97,"swiss_ball_plank_leg_lift":98,"weighted_swiss_ball_plank_leg_lift":99,"swiss_ball_plank_leg_lift_and_hold":100,"swiss_ball_plank_with_feet_on_bench":101,"weighted_swiss_ball_plank_with_feet_on_bench":102,"swiss_ball_prone_jackknife":103,"weighted_swiss_ball_prone_jackknife":104,"swiss_ball_side_plank":105,"weighted_swiss_ball_side_plank":106,"three_way_plank":107,"weighted_three_way_plank":108,"towel_plank_and_knee_in":109,"weighted_towel_plank_and_knee_in":110,"t_stabilization":111,"weighted_t_stabilization":112,"turkish_get_up_to_side_plank":113,"weighted_turkish_get_up_to_side_plank":114,"two_point_plank":115,"weighted_two_point_plank":116,"weighted_plank":117,"wide_stance_plank_with_diagonal_arm_lift":118,"weighted_wide_stance_plank_with_diagonal_arm_lift":119,"wide_stance_plank_with_diagonal_leg_lift":120,"weighted_wide_stance_plank_with_diagonal_leg_lift":121,"wide_stance_plank_with_leg_lift":122,"weighted_wide_stance_plank_with_leg_lift":123,"wide_stance_plank_with_opposite_arm_and_leg_lift":124,"weighted_mountain_climber_with_hands_on_bench":125,"weighted_swiss_ball_plank_leg_lift_and_hold":126,"weighted_wide_stance_plank_with_opposite_arm_and_leg_lift":127,"plank_with_feet_on_swiss_ball":128,"side_plank_to_plank_with_reach_under":129,"bridge_with_glute_lower_lift":130,"bridge_one_leg_bridge":131,"plank_with_arm_variations":132,"plank_with_leg_lift":133,"reverse_plank_with_leg_pull":134}},"plyo_exercise_name":{"base_type":"uint16","values":{"0":"alternating_jump_lunge","1":"weighted_alternating_jump_lunge","2":"barbell_jump_squat","3":"body_weight_jump_squat","4":"weighted_jump_squat","5":"cross_knee_strike","6":"weighted_cross_knee_strike","7":"depth_jump","8":"weighted_depth_jump","9":"dumbbell_jump_squat","10":"dumbbell_split_jump","11":"front_knee_strike","12":"weighted_front_knee_strike","13":"high_box_jump","14":"weighted_high_box_jump","15":"isometric_explosive_body_weight_jump_squat","16":"weighted_isometric_explosive_jump_squat","17":"lateral_leap_and_hop","18":"weighted_lateral_leap_and_hop","19":"lateral_plyo_squats","20":"weighted_lateral_plyo_squats","21":"lateral_slide","22":"weighted_lateral_slide","23":"medicine_ball_overhead_throws","24":"medicine_ball_side_throw","25":"medicine_ball_slam","26":"side_to_side_medicine_ball_throws","27":"side_to_side_shuffle_jump","28":"weighted_side_to_side_shuffle_jump","29":"squat_jump_onto_box","30":"weighted_squat_jump_onto_box","31":"squat_jumps_in_and_out","32":"weighted_squat_jumps_in_and_out","alternating_jump_lunge":0,"weighted_alternating_jump_lunge":1,"barbell_jump_squat":2,"body_weight_jump_squat":3,"weighted_jump_squat":4,"cross_knee_strike":5,"weighted_cross_knee_strike":6,"depth_jump":7,"weighted_depth_jump":8,"dumbbell_jump_squat":9,"dumbbell_split_jump":10,"front_knee_strike":11,"weighted_front_knee_strike":12,"high_box_jump":13,"weighted_high_box_jump":14,"isometric_explosive_body_weight_jump_squat":15,"weighted_isometric_explosive_jump_squat":16,"lateral_leap_and_hop":17,"weighted_lateral_leap_and_hop":18,"lateral_plyo_squats":19,"weighted_lateral_plyo_squats":20,"lateral_slide":21,"weighted_lateral_slide":22,"medicine_ball_overhead_throws":23,"medicine_ball_side_throw":24,"medicine_ball_slam":25,"side_to_side_medicine_ball_throws":26,"side_to_side_shuffle_jump":27,"weighted_side_to_side_shuffle_jump":28,"squat_jump_onto_box":29,"weighted_squat_jump_onto_box":30,"squat_jumps_in_and_out":31,"weighted_squat_jumps_in_and_out":32}},"pull_up_exercise_name":{"base_type":"uint16","values":{"0":"banded_pull_ups","1":"30_degree_lat_pulldown","2":"band_assisted_chin_up","3":"close_grip_chin_up","4":"weighted_close_grip_chin_up","5":"close_grip_lat_pulldown","6":"crossover_chin_up","7":"weighted_crossover_chin_up","8":"ez_bar_pullover","9":"hanging_hurdle","10":"weighted_hanging_hurdle","11":"kneeling_lat_pulldown","12":"kneeling_underhand_grip_lat_pulldown","13":"lat_pulldown","14":"mixed_grip_chin_up","15":"weighted_mixed_grip_chin_up","16":"mixed_grip_pull_up","17":"weighted_mixed_grip_pull_up","18":"reverse_grip_pulldown","19":"standing_cable_pullover","20":"straight_arm_pulldown","21":"swiss_ball_ez_bar_pullover","22":"towel_pull_up","23":"weighted_towel_pull_up","24":"weighted_pull_up","25":"wide_grip_lat_pulldown","26":"wide_grip_pull_up","27":"weighted_wide_grip_pull_up","28":"burpee_pull_up","29":"weighted_burpee_pull_up","30":"jumping_pull_ups","31":"weighted_jumping_pull_ups","32":"kipping_pull_up","33":"weighted_kipping_pull_up","34":"l_pull_up","35":"weighted_l_pull_up","36":"suspended_chin_up","37":"weighted_suspended_chin_up","38":"pull_up","banded_pull_ups":0,"30_degree_lat_pulldown":1,"band_assisted_chin_up":2,"close_grip_chin_up":3,"weighted_close_grip_chin_up":4,"close_grip_lat_pulldown":5,"crossover_chin_up":6,"weighted_crossover_chin_up":7,"ez_bar_pullover":8,"hanging_hurdle":9,"weighted_hanging_hurdle":10,"kneeling_lat_pulldown":11,"kneeling_underhand_grip_lat_pulldown":12,"lat_pulldown":13,"mixed_grip_chin_up":14,"weighted_mixed_grip_chin_up":15,"mixed_grip_pull_up":16,"weighted_mixed_grip_pull_up":17,"reverse_grip_pulldown":18,"standing_cable_pullover":19,"straight_arm_pulldown":20,"swiss_ball_ez_bar_pullover":21,"towel_pull_up":22,"weighted_towel_pull_up":23,"weighted_pull_up":24,"wide_grip_lat_pulldown":25,"wide_grip_pull_up":26,"weighted_wide_grip_pull_up":27,"burpee_pull_up":28,"weighted_burpee_pull_up":29,"jumping_pull_ups":30,"weighted_jumping_pull_ups":31,"kipping_pull_up":32,"weighted_kipping_pull_up":33,"l_pull_up":34,"weighted_l_pull_up":35,"suspended_chin_up":36,"weighted_suspended_chin_up":37,"pull_up":38}},"push_up_exercise_name":{"base_type":"uint16","values":{"0":"chest_press_with_band","1":"alternating_staggered_push_up","2":"weighted_alternating_staggered_push_up","3":"alternating_hands_medicine_ball_push_up","4":"weighted_alternating_hands_medicine_ball_push_up","5":"bosu_ball_push_up","6":"weighted_bosu_ball_push_up","7":"clapping_push_up","8":"weighted_clapping_push_up","9":"close_grip_medicine_ball_push_up","10":"weighted_close_grip_medicine_ball_push_up","11":"close_hands_push_up","12":"weighted_close_hands_push_up","13":"decline_push_up","14":"weighted_decline_push_up","15":"diamond_push_up","16":"weighted_diamond_push_up","17":"explosive_crossover_push_up","18":"weighted_explosive_crossover_push_up","19":"explosive_push_up","20":"weighted_explosive_push_up","21":"feet_elevated_side_to_side_push_up","22":"weighted_feet_elevated_side_to_side_push_up","23":"hand_release_push_up","24":"weighted_hand_release_push_up","25":"handstand_push_up","26":"weighted_handstand_push_up","27":"incline_push_up","28":"weighted_incline_push_up","29":"isometric_explosive_push_up","30":"weighted_isometric_explosive_push_up","31":"judo_push_up","32":"weighted_judo_push_up","33":"kneeling_push_up","34":"weighted_kneeling_push_up","35":"medicine_ball_chest_pass","36":"medicine_ball_push_up","37":"weighted_medicine_ball_push_up","38":"one_arm_push_up","39":"weighted_one_arm_push_up","40":"weighted_push_up","41":"push_up_and_row","42":"weighted_push_up_and_row","43":"push_up_plus","44":"weighted_push_up_plus","45":"push_up_with_feet_on_swiss_ball","46":"weighted_push_up_with_feet_on_swiss_ball","47":"push_up_with_one_hand_on_medicine_ball","48":"weighted_push_up_with_one_hand_on_medicine_ball","49":"shoulder_push_up","50":"weighted_shoulder_push_up","51":"single_arm_medicine_ball_push_up","52":"weighted_single_arm_medicine_ball_push_up","53":"spiderman_push_up","54":"weighted_spiderman_push_up","55":"stacked_feet_push_up","56":"weighted_stacked_feet_push_up","57":"staggered_hands_push_up","58":"weighted_staggered_hands_push_up","59":"suspended_push_up","60":"weighted_suspended_push_up","61":"swiss_ball_push_up","62":"weighted_swiss_ball_push_up","63":"swiss_ball_push_up_plus","64":"weighted_swiss_ball_push_up_plus","65":"t_push_up","66":"weighted_t_push_up","67":"triple_stop_push_up","68":"weighted_triple_stop_push_up","69":"wide_hands_push_up","70":"weighted_wide_hands_push_up","71":"parallette_handstand_push_up","72":"weighted_parallette_handstand_push_up","73":"ring_handstand_push_up","74":"weighted_ring_handstand_push_up","75":"ring_push_up","76":"weighted_ring_push_up","77":"push_up","78":"pilates_pushup","chest_press_with_band":0,"alternating_staggered_push_up":1,"weighted_alternating_staggered_push_up":2,"alternating_hands_medicine_ball_push_up":3,"weighted_alternating_hands_medicine_ball_push_up":4,"bosu_ball_push_up":5,"weighted_bosu_ball_push_up":6,"clapping_push_up":7,"weighted_clapping_push_up":8,"close_grip_medicine_ball_push_up":9,"weighted_close_grip_medicine_ball_push_up":10,"close_hands_push_up":11,"weighted_close_hands_push_up":12,"decline_push_up":13,"weighted_decline_push_up":14,"diamond_push_up":15,"weighted_diamond_push_up":16,"explosive_crossover_push_up":17,"weighted_explosive_crossover_push_up":18,"explosive_push_up":19,"weighted_explosive_push_up":20,"feet_elevated_side_to_side_push_up":21,"weighted_feet_elevated_side_to_side_push_up":22,"hand_release_push_up":23,"weighted_hand_release_push_up":24,"handstand_push_up":25,"weighted_handstand_push_up":26,"incline_push_up":27,"weighted_incline_push_up":28,"isometric_explosive_push_up":29,"weighted_isometric_explosive_push_up":30,"judo_push_up":31,"weighted_judo_push_up":32,"kneeling_push_up":33,"weighted_kneeling_push_up":34,"medicine_ball_chest_pass":35,"medicine_ball_push_up":36,"weighted_medicine_ball_push_up":37,"one_arm_push_up":38,"weighted_one_arm_push_up":39,"weighted_push_up":40,"push_up_and_row":41,"weighted_push_up_and_row":42,"push_up_plus":43,"weighted_push_up_plus":44,"push_up_with_feet_on_swiss_ball":45,"weighted_push_up_with_feet_on_swiss_ball":46,"push_up_with_one_hand_on_medicine_ball":47,"weighted_push_up_with_one_hand_on_medicine_ball":48,"shoulder_push_up":49,"weighted_shoulder_push_up":50,"single_arm_medicine_ball_push_up":51,"weighted_single_arm_medicine_ball_push_up":52,"spiderman_push_up":53,"weighted_spiderman_push_up":54,"stacked_feet_push_up":55,"weighted_stacked_feet_push_up":56,"staggered_hands_push_up":57,"weighted_staggered_hands_push_up":58,"suspended_push_up":59,"weighted_suspended_push_up":60,"swiss_ball_push_up":61,"weighted_swiss_ball_push_up":62,"swiss_ball_push_up_plus":63,"weighted_swiss_ball_push_up_plus":64,"t_push_up":65,"weighted_t_push_up":66,"triple_stop_push_up":67,"weighted_triple_stop_push_up":68,"wide_hands_push_up":69,"weighted_wide_hands_push_up":70,"parallette_handstand_push_up":71,"weighted_parallette_handstand_push_up":72,"ring_handstand_push_up":73,"weighted_ring_handstand_push_up":74,"ring_push_up":75,"weighted_ring_push_up":76,"push_up":77,"pilates_pushup":78}},"row_exercise_name":{"base_type":"uint16","values":{"0":"barbell_straight_leg_deadlift_to_row","1":"cable_row_standing","2":"dumbbell_row","3":"elevated_feet_inverted_row","4":"weighted_elevated_feet_inverted_row","5":"face_pull","6":"face_pull_with_external_rotation","7":"inverted_row_with_feet_on_swiss_ball","8":"weighted_inverted_row_with_feet_on_swiss_ball","9":"kettlebell_row","10":"modified_inverted_row","11":"weighted_modified_inverted_row","12":"neutral_grip_alternating_dumbbell_row","13":"one_arm_bent_over_row","14":"one_legged_dumbbell_row","15":"renegade_row","16":"reverse_grip_barbell_row","17":"rope_handle_cable_row","18":"seated_cable_row","19":"seated_dumbbell_row","20":"single_arm_cable_row","21":"single_arm_cable_row_and_rotation","22":"single_arm_inverted_row","23":"weighted_single_arm_inverted_row","24":"single_arm_neutral_grip_dumbbell_row","25":"single_arm_neutral_grip_dumbbell_row_and_rotation","26":"suspended_inverted_row","27":"weighted_suspended_inverted_row","28":"t_bar_row","29":"towel_grip_inverted_row","30":"weighted_towel_grip_inverted_row","31":"underhand_grip_cable_row","32":"v_grip_cable_row","33":"wide_grip_seated_cable_row","barbell_straight_leg_deadlift_to_row":0,"cable_row_standing":1,"dumbbell_row":2,"elevated_feet_inverted_row":3,"weighted_elevated_feet_inverted_row":4,"face_pull":5,"face_pull_with_external_rotation":6,"inverted_row_with_feet_on_swiss_ball":7,"weighted_inverted_row_with_feet_on_swiss_ball":8,"kettlebell_row":9,"modified_inverted_row":10,"weighted_modified_inverted_row":11,"neutral_grip_alternating_dumbbell_row":12,"one_arm_bent_over_row":13,"one_legged_dumbbell_row":14,"renegade_row":15,"reverse_grip_barbell_row":16,"rope_handle_cable_row":17,"seated_cable_row":18,"seated_dumbbell_row":19,"single_arm_cable_row":20,"single_arm_cable_row_and_rotation":21,"single_arm_inverted_row":22,"weighted_single_arm_inverted_row":23,"single_arm_neutral_grip_dumbbell_row":24,"single_arm_neutral_grip_dumbbell_row_and_rotation":25,"suspended_inverted_row":26,"weighted_suspended_inverted_row":27,"t_bar_row":28,"towel_grip_inverted_row":29,"weighted_towel_grip_inverted_row":30,"underhand_grip_cable_row":31,"v_grip_cable_row":32,"wide_grip_seated_cable_row":33}},"shoulder_press_exercise_name":{"base_type":"uint16","values":{"0":"alternating_dumbbell_shoulder_press","1":"arnold_press","2":"barbell_front_squat_to_push_press","3":"barbell_push_press","4":"barbell_shoulder_press","5":"dead_curl_press","6":"dumbbell_alternating_shoulder_press_and_twist","7":"dumbbell_hammer_curl_to_lunge_to_press","8":"dumbbell_push_press","9":"floor_inverted_shoulder_press","10":"weighted_floor_inverted_shoulder_press","11":"inverted_shoulder_press","12":"weighted_inverted_shoulder_press","13":"one_arm_push_press","14":"overhead_barbell_press","15":"overhead_dumbbell_press","16":"seated_barbell_shoulder_press","17":"seated_dumbbell_shoulder_press","18":"single_arm_dumbbell_shoulder_press","19":"single_arm_step_up_and_press","20":"smith_machine_overhead_press","21":"split_stance_hammer_curl_to_press","22":"swiss_ball_dumbbell_shoulder_press","23":"weight_plate_front_raise","alternating_dumbbell_shoulder_press":0,"arnold_press":1,"barbell_front_squat_to_push_press":2,"barbell_push_press":3,"barbell_shoulder_press":4,"dead_curl_press":5,"dumbbell_alternating_shoulder_press_and_twist":6,"dumbbell_hammer_curl_to_lunge_to_press":7,"dumbbell_push_press":8,"floor_inverted_shoulder_press":9,"weighted_floor_inverted_shoulder_press":10,"inverted_shoulder_press":11,"weighted_inverted_shoulder_press":12,"one_arm_push_press":13,"overhead_barbell_press":14,"overhead_dumbbell_press":15,"seated_barbell_shoulder_press":16,"seated_dumbbell_shoulder_press":17,"single_arm_dumbbell_shoulder_press":18,"single_arm_step_up_and_press":19,"smith_machine_overhead_press":20,"split_stance_hammer_curl_to_press":21,"swiss_ball_dumbbell_shoulder_press":22,"weight_plate_front_raise":23}},"shoulder_stability_exercise_name":{"base_type":"uint16","values":{"0":"90_degree_cable_external_rotation","1":"band_external_rotation","2":"band_internal_rotation","3":"bent_arm_lateral_raise_and_external_rotation","4":"cable_external_rotation","5":"dumbbell_face_pull_with_external_rotation","6":"floor_i_raise","7":"weighted_floor_i_raise","8":"floor_t_raise","9":"weighted_floor_t_raise","10":"floor_y_raise","11":"weighted_floor_y_raise","12":"incline_i_raise","13":"weighted_incline_i_raise","14":"incline_l_raise","15":"weighted_incline_l_raise","16":"incline_t_raise","17":"weighted_incline_t_raise","18":"incline_w_raise","19":"weighted_incline_w_raise","20":"incline_y_raise","21":"weighted_incline_y_raise","22":"lying_external_rotation","23":"seated_dumbbell_external_rotation","24":"standing_l_raise","25":"swiss_ball_i_raise","26":"weighted_swiss_ball_i_raise","27":"swiss_ball_t_raise","28":"weighted_swiss_ball_t_raise","29":"swiss_ball_w_raise","30":"weighted_swiss_ball_w_raise","31":"swiss_ball_y_raise","32":"weighted_swiss_ball_y_raise","90_degree_cable_external_rotation":0,"band_external_rotation":1,"band_internal_rotation":2,"bent_arm_lateral_raise_and_external_rotation":3,"cable_external_rotation":4,"dumbbell_face_pull_with_external_rotation":5,"floor_i_raise":6,"weighted_floor_i_raise":7,"floor_t_raise":8,"weighted_floor_t_raise":9,"floor_y_raise":10,"weighted_floor_y_raise":11,"incline_i_raise":12,"weighted_incline_i_raise":13,"incline_l_raise":14,"weighted_incline_l_raise":15,"incline_t_raise":16,"weighted_incline_t_raise":17,"incline_w_raise":18,"weighted_incline_w_raise":19,"incline_y_raise":20,"weighted_incline_y_raise":21,"lying_external_rotation":22,"seated_dumbbell_external_rotation":23,"standing_l_raise":24,"swiss_ball_i_raise":25,"weighted_swiss_ball_i_raise":26,"swiss_ball_t_raise":27,"weighted_swiss_ball_t_raise":28,"swiss_ball_w_raise":29,"weighted_swiss_ball_w_raise":30,"swiss_ball_y_raise":31,"weighted_swiss_ball_y_raise":32}},"shrug_exercise_name":{"base_type":"uint16","values":{"0":"barbell_jump_shrug","1":"barbell_shrug","2":"barbell_upright_row","3":"behind_the_back_smith_machine_shrug","4":"dumbbell_jump_shrug","5":"dumbbell_shrug","6":"dumbbell_upright_row","7":"incline_dumbbell_shrug","8":"overhead_barbell_shrug","9":"overhead_dumbbell_shrug","10":"scaption_and_shrug","11":"scapular_retraction","12":"serratus_chair_shrug","13":"weighted_serratus_chair_shrug","14":"serratus_shrug","15":"weighted_serratus_shrug","16":"wide_grip_jump_shrug","barbell_jump_shrug":0,"barbell_shrug":1,"barbell_upright_row":2,"behind_the_back_smith_machine_shrug":3,"dumbbell_jump_shrug":4,"dumbbell_shrug":5,"dumbbell_upright_row":6,"incline_dumbbell_shrug":7,"overhead_barbell_shrug":8,"overhead_dumbbell_shrug":9,"scaption_and_shrug":10,"scapular_retraction":11,"serratus_chair_shrug":12,"weighted_serratus_chair_shrug":13,"serratus_shrug":14,"weighted_serratus_shrug":15,"wide_grip_jump_shrug":16}},"sit_up_exercise_name":{"base_type":"uint16","values":{"0":"alternating_sit_up","1":"weighted_alternating_sit_up","2":"bent_knee_v_up","3":"weighted_bent_knee_v_up","4":"butterfly_sit_up","5":"weighted_butterfly_situp","6":"cross_punch_roll_up","7":"weighted_cross_punch_roll_up","8":"crossed_arms_sit_up","9":"weighted_crossed_arms_sit_up","10":"get_up_sit_up","11":"weighted_get_up_sit_up","12":"hovering_sit_up","13":"weighted_hovering_sit_up","14":"kettlebell_sit_up","15":"medicine_ball_alternating_v_up","16":"medicine_ball_sit_up","17":"medicine_ball_v_up","18":"modified_sit_up","19":"negative_sit_up","20":"one_arm_full_sit_up","21":"reclining_circle","22":"weighted_reclining_circle","23":"reverse_curl_up","24":"weighted_reverse_curl_up","25":"single_leg_swiss_ball_jackknife","26":"weighted_single_leg_swiss_ball_jackknife","27":"the_teaser","28":"the_teaser_weighted","29":"three_part_roll_down","30":"weighted_three_part_roll_down","31":"v_up","32":"weighted_v_up","33":"weighted_russian_twist_on_swiss_ball","34":"weighted_sit_up","35":"x_abs","36":"weighted_x_abs","37":"sit_up","alternating_sit_up":0,"weighted_alternating_sit_up":1,"bent_knee_v_up":2,"weighted_bent_knee_v_up":3,"butterfly_sit_up":4,"weighted_butterfly_situp":5,"cross_punch_roll_up":6,"weighted_cross_punch_roll_up":7,"crossed_arms_sit_up":8,"weighted_crossed_arms_sit_up":9,"get_up_sit_up":10,"weighted_get_up_sit_up":11,"hovering_sit_up":12,"weighted_hovering_sit_up":13,"kettlebell_sit_up":14,"medicine_ball_alternating_v_up":15,"medicine_ball_sit_up":16,"medicine_ball_v_up":17,"modified_sit_up":18,"negative_sit_up":19,"one_arm_full_sit_up":20,"reclining_circle":21,"weighted_reclining_circle":22,"reverse_curl_up":23,"weighted_reverse_curl_up":24,"single_leg_swiss_ball_jackknife":25,"weighted_single_leg_swiss_ball_jackknife":26,"the_teaser":27,"the_teaser_weighted":28,"three_part_roll_down":29,"weighted_three_part_roll_down":30,"v_up":31,"weighted_v_up":32,"weighted_russian_twist_on_swiss_ball":33,"weighted_sit_up":34,"x_abs":35,"weighted_x_abs":36,"sit_up":37}},"squat_exercise_name":{"base_type":"uint16","values":{"0":"leg_press","1":"back_squat_with_body_bar","2":"back_squats","3":"weighted_back_squats","4":"balancing_squat","5":"weighted_balancing_squat","6":"barbell_back_squat","7":"barbell_box_squat","8":"barbell_front_squat","9":"barbell_hack_squat","10":"barbell_hang_squat_snatch","11":"barbell_lateral_step_up","12":"barbell_quarter_squat","13":"barbell_siff_squat","14":"barbell_squat_snatch","15":"barbell_squat_with_heels_raised","16":"barbell_stepover","17":"barbell_step_up","18":"bench_squat_with_rotational_chop","19":"weighted_bench_squat_with_rotational_chop","20":"body_weight_wall_squat","21":"weighted_wall_squat","22":"box_step_squat","23":"weighted_box_step_squat","24":"braced_squat","25":"crossed_arm_barbell_front_squat","26":"crossover_dumbbell_step_up","27":"dumbbell_front_squat","28":"dumbbell_split_squat","29":"dumbbell_squat","30":"dumbbell_squat_clean","31":"dumbbell_stepover","32":"dumbbell_step_up","33":"elevated_single_leg_squat","34":"weighted_elevated_single_leg_squat","35":"figure_four_squats","36":"weighted_figure_four_squats","37":"goblet_squat","38":"kettlebell_squat","39":"kettlebell_swing_overhead","40":"kettlebell_swing_with_flip_to_squat","41":"lateral_dumbbell_step_up","42":"one_legged_squat","43":"overhead_dumbbell_squat","44":"overhead_squat","45":"partial_single_leg_squat","46":"weighted_partial_single_leg_squat","47":"pistol_squat","48":"weighted_pistol_squat","49":"plie_slides","50":"weighted_plie_slides","51":"plie_squat","52":"weighted_plie_squat","53":"prisoner_squat","54":"weighted_prisoner_squat","55":"single_leg_bench_get_up","56":"weighted_single_leg_bench_get_up","57":"single_leg_bench_squat","58":"weighted_single_leg_bench_squat","59":"single_leg_squat_on_swiss_ball","60":"weighted_single_leg_squat_on_swiss_ball","61":"squat","62":"weighted_squat","63":"squats_with_band","64":"staggered_squat","65":"weighted_staggered_squat","66":"step_up","67":"weighted_step_up","68":"suitcase_squats","69":"sumo_squat","70":"sumo_squat_slide_in","71":"weighted_sumo_squat_slide_in","72":"sumo_squat_to_high_pull","73":"sumo_squat_to_stand","74":"weighted_sumo_squat_to_stand","75":"sumo_squat_with_rotation","76":"weighted_sumo_squat_with_rotation","77":"swiss_ball_body_weight_wall_squat","78":"weighted_swiss_ball_wall_squat","79":"thrusters","80":"uneven_squat","81":"weighted_uneven_squat","82":"waist_slimming_squat","83":"wall_ball","84":"wide_stance_barbell_squat","85":"wide_stance_goblet_squat","86":"zercher_squat","87":"kbs_overhead","88":"squat_and_side_kick","89":"squat_jumps_in_n_out","90":"pilates_plie_squats_parallel_turned_out_flat_and_heels","91":"releve_straight_leg_and_knee_bent_with_one_leg_variation","leg_press":0,"back_squat_with_body_bar":1,"back_squats":2,"weighted_back_squats":3,"balancing_squat":4,"weighted_balancing_squat":5,"barbell_back_squat":6,"barbell_box_squat":7,"barbell_front_squat":8,"barbell_hack_squat":9,"barbell_hang_squat_snatch":10,"barbell_lateral_step_up":11,"barbell_quarter_squat":12,"barbell_siff_squat":13,"barbell_squat_snatch":14,"barbell_squat_with_heels_raised":15,"barbell_stepover":16,"barbell_step_up":17,"bench_squat_with_rotational_chop":18,"weighted_bench_squat_with_rotational_chop":19,"body_weight_wall_squat":20,"weighted_wall_squat":21,"box_step_squat":22,"weighted_box_step_squat":23,"braced_squat":24,"crossed_arm_barbell_front_squat":25,"crossover_dumbbell_step_up":26,"dumbbell_front_squat":27,"dumbbell_split_squat":28,"dumbbell_squat":29,"dumbbell_squat_clean":30,"dumbbell_stepover":31,"dumbbell_step_up":32,"elevated_single_leg_squat":33,"weighted_elevated_single_leg_squat":34,"figure_four_squats":35,"weighted_figure_four_squats":36,"goblet_squat":37,"kettlebell_squat":38,"kettlebell_swing_overhead":39,"kettlebell_swing_with_flip_to_squat":40,"lateral_dumbbell_step_up":41,"one_legged_squat":42,"overhead_dumbbell_squat":43,"overhead_squat":44,"partial_single_leg_squat":45,"weighted_partial_single_leg_squat":46,"pistol_squat":47,"weighted_pistol_squat":48,"plie_slides":49,"weighted_plie_slides":50,"plie_squat":51,"weighted_plie_squat":52,"prisoner_squat":53,"weighted_prisoner_squat":54,"single_leg_bench_get_up":55,"weighted_single_leg_bench_get_up":56,"single_leg_bench_squat":57,"weighted_single_leg_bench_squat":58,"single_leg_squat_on_swiss_ball":59,"weighted_single_leg_squat_on_swiss_ball":60,"squat":61,"weighted_squat":62,"squats_with_band":63,"staggered_squat":64,"weighted_staggered_squat":65,"step_up":66,"weighted_step_up":67,"suitcase_squats":68,"sumo_squat":69,"sumo_squat_slide_in":70,"weighted_sumo_squat_slide_in":71,"sumo_squat_to_high_pull":72,"sumo_squat_to_stand":73,"weighted_sumo_squat_to_stand":74,"sumo_squat_with_rotation":75,"weighted_sumo_squat_with_rotation":76,"swiss_ball_body_weight_wall_squat":77,"weighted_swiss_ball_wall_squat":78,"thrusters":79,"uneven_squat":80,"weighted_uneven_squat":81,"waist_slimming_squat":82,"wall_ball":83,"wide_stance_barbell_squat":84,"wide_stance_goblet_squat":85,"zercher_squat":86,"kbs_overhead":87,"squat_and_side_kick":88,"squat_jumps_in_n_out":89,"pilates_plie_squats_parallel_turned_out_flat_and_heels":90,"releve_straight_leg_and_knee_bent_with_one_leg_variation":91}},"total_body_exercise_name":{"base_type":"uint16","values":{"0":"burpee","1":"weighted_burpee","2":"burpee_box_jump","3":"weighted_burpee_box_jump","4":"high_pull_burpee","5":"man_makers","6":"one_arm_burpee","7":"squat_thrusts","8":"weighted_squat_thrusts","9":"squat_plank_push_up","10":"weighted_squat_plank_push_up","11":"standing_t_rotation_balance","12":"weighted_standing_t_rotation_balance","burpee":0,"weighted_burpee":1,"burpee_box_jump":2,"weighted_burpee_box_jump":3,"high_pull_burpee":4,"man_makers":5,"one_arm_burpee":6,"squat_thrusts":7,"weighted_squat_thrusts":8,"squat_plank_push_up":9,"weighted_squat_plank_push_up":10,"standing_t_rotation_balance":11,"weighted_standing_t_rotation_balance":12}},"triceps_extension_exercise_name":{"base_type":"uint16","values":{"0":"bench_dip","1":"weighted_bench_dip","2":"body_weight_dip","3":"cable_kickback","4":"cable_lying_triceps_extension","5":"cable_overhead_triceps_extension","6":"dumbbell_kickback","7":"dumbbell_lying_triceps_extension","8":"ez_bar_overhead_triceps_extension","9":"incline_dip","10":"weighted_incline_dip","11":"incline_ez_bar_lying_triceps_extension","12":"lying_dumbbell_pullover_to_extension","13":"lying_ez_bar_triceps_extension","14":"lying_triceps_extension_to_close_grip_bench_press","15":"overhead_dumbbell_triceps_extension","16":"reclining_triceps_press","17":"reverse_grip_pressdown","18":"reverse_grip_triceps_pressdown","19":"rope_pressdown","20":"seated_barbell_overhead_triceps_extension","21":"seated_dumbbell_overhead_triceps_extension","22":"seated_ez_bar_overhead_triceps_extension","23":"seated_single_arm_overhead_dumbbell_extension","24":"single_arm_dumbbell_overhead_triceps_extension","25":"single_dumbbell_seated_overhead_triceps_extension","26":"single_leg_bench_dip_and_kick","27":"weighted_single_leg_bench_dip_and_kick","28":"single_leg_dip","29":"weighted_single_leg_dip","30":"static_lying_triceps_extension","31":"suspended_dip","32":"weighted_suspended_dip","33":"swiss_ball_dumbbell_lying_triceps_extension","34":"swiss_ball_ez_bar_lying_triceps_extension","35":"swiss_ball_ez_bar_overhead_triceps_extension","36":"tabletop_dip","37":"weighted_tabletop_dip","38":"triceps_extension_on_floor","39":"triceps_pressdown","40":"weighted_dip","bench_dip":0,"weighted_bench_dip":1,"body_weight_dip":2,"cable_kickback":3,"cable_lying_triceps_extension":4,"cable_overhead_triceps_extension":5,"dumbbell_kickback":6,"dumbbell_lying_triceps_extension":7,"ez_bar_overhead_triceps_extension":8,"incline_dip":9,"weighted_incline_dip":10,"incline_ez_bar_lying_triceps_extension":11,"lying_dumbbell_pullover_to_extension":12,"lying_ez_bar_triceps_extension":13,"lying_triceps_extension_to_close_grip_bench_press":14,"overhead_dumbbell_triceps_extension":15,"reclining_triceps_press":16,"reverse_grip_pressdown":17,"reverse_grip_triceps_pressdown":18,"rope_pressdown":19,"seated_barbell_overhead_triceps_extension":20,"seated_dumbbell_overhead_triceps_extension":21,"seated_ez_bar_overhead_triceps_extension":22,"seated_single_arm_overhead_dumbbell_extension":23,"single_arm_dumbbell_overhead_triceps_extension":24,"single_dumbbell_seated_overhead_triceps_extension":25,"single_leg_bench_dip_and_kick":26,"weighted_single_leg_bench_dip_and_kick":27,"single_leg_dip":28,"weighted_single_leg_dip":29,"static_lying_triceps_extension":30,"suspended_dip":31,"weighted_suspended_dip":32,"swiss_ball_dumbbell_lying_triceps_extension":33,"swiss_ball_ez_bar_lying_triceps_extension":34,"swiss_ball_ez_bar_overhead_triceps_extension":35,"tabletop_dip":36,"weighted_tabletop_dip":37,"triceps_extension_on_floor":38,"triceps_pressdown":39,"weighted_dip":40}},"warm_up_exercise_name":{"base_type":"uint16","values":{"0":"quadruped_rocking","1":"neck_tilts","2":"ankle_circles","3":"ankle_dorsiflexion_with_band","4":"ankle_internal_rotation","5":"arm_circles","6":"bent_over_reach_to_sky","7":"cat_camel","8":"elbow_to_foot_lunge","9":"forward_and_backward_leg_swings","10":"groiners","11":"inverted_hamstring_stretch","12":"lateral_duck_under","13":"neck_rotations","14":"opposite_arm_and_leg_balance","15":"reach_roll_and_lift","16":"scorpion","17":"shoulder_circles","18":"side_to_side_leg_swings","19":"sleeper_stretch","20":"slide_out","21":"swiss_ball_hip_crossover","22":"swiss_ball_reach_roll_and_lift","23":"swiss_ball_windshield_wipers","24":"thoracic_rotation","25":"walking_high_kicks","26":"walking_high_knees","27":"walking_knee_hugs","28":"walking_leg_cradles","29":"walkout","30":"walkout_from_push_up_position","quadruped_rocking":0,"neck_tilts":1,"ankle_circles":2,"ankle_dorsiflexion_with_band":3,"ankle_internal_rotation":4,"arm_circles":5,"bent_over_reach_to_sky":6,"cat_camel":7,"elbow_to_foot_lunge":8,"forward_and_backward_leg_swings":9,"groiners":10,"inverted_hamstring_stretch":11,"lateral_duck_under":12,"neck_rotations":13,"opposite_arm_and_leg_balance":14,"reach_roll_and_lift":15,"scorpion":16,"shoulder_circles":17,"side_to_side_leg_swings":18,"sleeper_stretch":19,"slide_out":20,"swiss_ball_hip_crossover":21,"swiss_ball_reach_roll_and_lift":22,"swiss_ball_windshield_wipers":23,"thoracic_rotation":24,"walking_high_kicks":25,"walking_high_knees":26,"walking_knee_hugs":27,"walking_leg_cradles":28,"walkout":29,"walkout_from_push_up_position":30}},"run_exercise_name":{"base_type":"uint16","values":{"0":"run","1":"walk","2":"jog","3":"sprint","run":0,"walk":1,"jog":2,"sprint":3}},"water_type":{"base_type":"enum","values":{"0":"fresh","1":"salt","2":"en13319","3":"custom","fresh":0,"salt":1,"en13319":2,"custom":3}},"tissue_model_type":{"base_type":"enum","values":{"0":"zhl_16c","zhl_16c":0}},"dive_gas_status":{"base_type":"enum","values":{"0":"disabled","1":"enabled","2":"backup_only","disabled":0,"enabled":1,"backup_only":2}},"dive_alarm_type":{"base_type":"enum","values":{"0":"depth","1":"time","depth":0,"time":1}},"dive_backlight_mode":{"base_type":"enum","values":{"0":"at_depth","1":"always_on","at_depth":0,"always_on":1}},"favero_product":{"base_type":"uint16","values":{"10":"assioma_uno","12":"assioma_duo","assioma_uno":10,"assioma_duo":12}},"climb_pro_event":{"base_type":"enum","values":{"0":"approach","1":"start","2":"complete","approach":0,"start":1,"complete":2}},"tap_sensitivity":{"base_type":"enum","values":{"0":"high","1":"medium","2":"low","high":0,"medium":1,"low":2}},"radar_threat_level_type":{"base_type":"enum","values":{"0":"threat_unknown","1":"threat_none","2":"threat_approaching","3":"threat_approaching_fast","threat_unknown":0,"threat_none":1,"threat_approaching":2,"threat_approaching_fast":3}}}');

},{}],"lmo5y":[function(require,module,exports) {
module.exports = JSON.parse('{"type":{"type":"course_point","base_type":"enum","units":""},"manufacturer":{"type":"manufacturer","base_type":"uint16","units":""},"product":{"type":"uint16","base_type":"uint16","units":""},"serial_number":{"type":"uint32z","base_type":"uint32z","units":""},"time_created":{"type":"date_time","base_type":"uint32","units":""},"number":{"type":"uint16","base_type":"uint16","units":""},"product_name":{"type":"string","base_type":"string","units":""},"software_version":{"type":"uint16","base_type":"uint16","scale":100,"units":""},"hardware_version":{"type":"uint8","base_type":"uint8","units":""},"timestamp":{"type":"date_time","base_type":"uint32","units":""},"fractional_timestamp":{"type":"uint16","base_type":"uint16","scale":32768,"units":"s"},"system_timestamp":{"type":"date_time","base_type":"uint32","units":"s"},"fractional_system_timestamp":{"type":"uint16","base_type":"uint16","scale":32768,"units":"s"},"local_timestamp":{"type":"local_date_time","base_type":"uint32","units":""},"timestamp_ms":{"type":"uint16","base_type":"uint16","units":"ms"},"system_timestamp_ms":{"type":"uint16","base_type":"uint16","units":"ms"},"total_timer_time":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"num_sessions":{"type":"uint16","base_type":"uint16","units":""},"event":{"type":"event","base_type":"enum","units":""},"event_type":{"type":"event_type","base_type":"enum","units":""},"event_group":{"type":"uint8","base_type":"uint8","units":""},"message_index":{"type":"message_index","base_type":"uint16","units":""},"start_time":{"type":"date_time","base_type":"uint32","units":""},"start_position_lat":{"type":"sint32","base_type":"sint32","units":"semicircles"},"start_position_long":{"type":"sint32","base_type":"sint32","units":"semicircles"},"sport":{"type":"sport","base_type":"enum","units":""},"sub_sport":{"type":"sub_sport","base_type":"enum","units":""},"total_elapsed_time":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"total_distance":{"type":"uint32","base_type":"uint32","scale":100,"units":"m"},"total_cycles":{"type":"uint32","base_type":"uint32","units":"cycles"},"total_calories":{"type":"uint16","base_type":"uint16","units":"kcal"},"total_fat_calories":{"type":"uint16","base_type":"uint16","units":"kcal"},"avg_speed":{"type":"uint16","base_type":"uint16","scale":1000,"units":"m/s"},"max_speed":{"type":"uint16","base_type":"uint16","scale":1000,"units":"m/s","bits":16},"avg_heart_rate":{"type":"uint8","base_type":"uint8","units":"bpm"},"max_heart_rate":{"type":"uint8","base_type":"uint8","units":"bpm"},"avg_cadence":{"type":"uint8","base_type":"uint8","units":"rpm"},"max_cadence":{"type":"uint8","base_type":"uint8","units":"rpm"},"avg_power":{"type":"uint16","base_type":"uint16","units":"watts"},"max_power":{"type":"uint16","base_type":"uint16","units":"watts"},"total_ascent":{"type":"uint16","base_type":"uint16","units":"m"},"total_descent":{"type":"uint16","base_type":"uint16","units":"m"},"total_training_effect":{"type":"uint8","base_type":"uint8","scale":10,"units":""},"first_lap_index":{"type":"uint16","base_type":"uint16","units":""},"num_laps":{"type":"uint16","base_type":"uint16","units":""},"trigger":{"type":"session_trigger","base_type":"enum","units":""},"nec_lat":{"type":"sint32","base_type":"sint32","units":"semicircles"},"nec_long":{"type":"sint32","base_type":"sint32","units":"semicircles"},"swc_lat":{"type":"sint32","base_type":"sint32","units":"semicircles"},"swc_long":{"type":"sint32","base_type":"sint32","units":"semicircles"},"num_lengths":{"type":"uint16","base_type":"uint16","units":"lengths"},"normalized_power":{"type":"uint16","base_type":"uint16","units":"watts"},"training_stress_score":{"type":"uint16","base_type":"uint16","scale":10,"units":"tss"},"intensity_factor":{"type":"uint16","base_type":"uint16","scale":1000,"units":"if"},"left_right_balance":{"type":"left_right_balance","base_type":"uint8","units":""},"avg_stroke_count":{"type":"uint32","base_type":"uint32","scale":10,"units":"strokes/lap"},"avg_stroke_distance":{"type":"uint16","base_type":"uint16","scale":100,"units":"m"},"swim_stroke":{"type":"swim_stroke","base_type":"enum","units":"swim_stroke"},"pool_length":{"type":"uint16","base_type":"uint16","scale":100,"units":"m"},"threshold_power":{"type":"uint16","base_type":"uint16","units":"watts"},"pool_length_unit":{"type":"display_measure","base_type":"enum","units":""},"num_active_lengths":{"type":"uint16","base_type":"uint16","units":"lengths"},"total_work":{"type":"uint32","base_type":"uint32","units":"J"},"avg_altitude":{"type":"uint16","base_type":"uint16","scale":5,"offset":500,"units":"m","bits":16},"max_altitude":{"type":"uint16","base_type":"uint16","scale":5,"offset":500,"units":"m","bits":16},"gps_accuracy":{"type":"uint8","base_type":"uint8","units":"m"},"avg_grade":{"type":"sint16","base_type":"sint16","scale":100,"units":"%"},"avg_pos_grade":{"type":"sint16","base_type":"sint16","scale":100,"units":"%"},"avg_neg_grade":{"type":"sint16","base_type":"sint16","scale":100,"units":"%"},"max_pos_grade":{"type":"sint16","base_type":"sint16","scale":100,"units":"%"},"max_neg_grade":{"type":"sint16","base_type":"sint16","scale":100,"units":"%"},"avg_temperature":{"type":"sint8","base_type":"sint8","units":"C"},"max_temperature":{"type":"sint8","base_type":"sint8","units":"C"},"total_moving_time":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"avg_pos_vertical_speed":{"type":"sint16","base_type":"sint16","scale":1000,"units":"m/s"},"avg_neg_vertical_speed":{"type":"sint16","base_type":"sint16","scale":1000,"units":"m/s"},"max_pos_vertical_speed":{"type":"sint16","base_type":"sint16","scale":1000,"units":"m/s"},"max_neg_vertical_speed":{"type":"sint16","base_type":"sint16","scale":1000,"units":"m/s"},"min_heart_rate":{"type":"uint8","base_type":"uint8","units":"bpm"},"time_in_hr_zone":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"time_in_speed_zone":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"time_in_cadence_zone":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"time_in_power_zone":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"avg_lap_time":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"best_lap_index":{"type":"uint16","base_type":"uint16","units":""},"min_altitude":{"type":"uint16","base_type":"uint16","scale":5,"offset":500,"units":"m","bits":16},"player_score":{"type":"uint16","base_type":"uint16","units":""},"opponent_score":{"type":"uint16","base_type":"uint16","units":""},"opponent_name":{"type":"string","base_type":"string","units":""},"stroke_count":{"type":"uint16","base_type":"uint16","units":"counts"},"zone_count":{"type":"uint16","base_type":"uint16","units":"counts"},"max_ball_speed":{"type":"uint16","base_type":"uint16","scale":100,"units":"m/s"},"avg_ball_speed":{"type":"uint16","base_type":"uint16","scale":100,"units":"m/s"},"avg_vertical_oscillation":{"type":"uint16","base_type":"uint16","scale":10,"units":"mm"},"avg_stance_time_percent":{"type":"uint16","base_type":"uint16","scale":100,"units":"percent"},"avg_stance_time":{"type":"uint16","base_type":"uint16","scale":10,"units":"ms"},"avg_fractional_cadence":{"type":"uint8","base_type":"uint8","scale":128,"units":"rpm"},"max_fractional_cadence":{"type":"uint8","base_type":"uint8","scale":128,"units":"rpm"},"total_fractional_cycles":{"type":"uint8","base_type":"uint8","scale":128,"units":"cycles"},"avg_total_hemoglobin_conc":{"type":"uint16","base_type":"uint16","scale":100,"units":"g/dL"},"min_total_hemoglobin_conc":{"type":"uint16","base_type":"uint16","scale":100,"units":"g/dL"},"max_total_hemoglobin_conc":{"type":"uint16","base_type":"uint16","scale":100,"units":"g/dL"},"avg_saturated_hemoglobin_percent":{"type":"uint16","base_type":"uint16","scale":10,"units":"%"},"min_saturated_hemoglobin_percent":{"type":"uint16","base_type":"uint16","scale":10,"units":"%"},"max_saturated_hemoglobin_percent":{"type":"uint16","base_type":"uint16","scale":10,"units":"%"},"avg_left_torque_effectiveness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"avg_right_torque_effectiveness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"avg_left_pedal_smoothness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"avg_right_pedal_smoothness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"avg_combined_pedal_smoothness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"sport_index":{"type":"uint8","base_type":"uint8","units":""},"time_standing":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"stand_count":{"type":"uint16","base_type":"uint16","units":""},"avg_left_pco":{"type":"sint8","base_type":"sint8","units":"mm"},"avg_right_pco":{"type":"sint8","base_type":"sint8","units":"mm"},"avg_left_power_phase":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"avg_left_power_phase_peak":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"avg_right_power_phase":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"avg_right_power_phase_peak":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"avg_power_position":{"type":"uint16","base_type":"uint16","units":"watts"},"max_power_position":{"type":"uint16","base_type":"uint16","units":"watts"},"avg_cadence_position":{"type":"uint8","base_type":"uint8","units":"rpm"},"max_cadence_position":{"type":"uint8","base_type":"uint8","units":"rpm"},"enhanced_avg_speed":{"type":"uint32","base_type":"uint32","scale":1000,"units":"m/s"},"enhanced_max_speed":{"type":"uint32","base_type":"uint32","scale":1000,"units":"m/s"},"enhanced_avg_altitude":{"type":"uint32","base_type":"uint32","scale":5,"offset":500,"units":"m"},"enhanced_min_altitude":{"type":"uint32","base_type":"uint32","scale":5,"offset":500,"units":"m"},"enhanced_max_altitude":{"type":"uint32","base_type":"uint32","scale":5,"offset":500,"units":"m"},"avg_lev_motor_power":{"type":"uint16","base_type":"uint16","units":"watts"},"max_lev_motor_power":{"type":"uint16","base_type":"uint16","units":"watts"},"lev_battery_consumption":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"avg_vertical_ratio":{"type":"uint16","base_type":"uint16","scale":100,"units":"percent"},"avg_stance_time_balance":{"type":"uint16","base_type":"uint16","scale":100,"units":"percent"},"avg_step_length":{"type":"uint16","base_type":"uint16","scale":10,"units":"mm"},"total_anaerobic_training_effect":{"type":"uint8","base_type":"uint8","scale":10,"units":""},"avg_vam":{"type":"uint16","base_type":"uint16","scale":1000,"units":"m/s","bits":16},"total_grit":{"type":"float32","base_type":"float32","units":"kGrit"},"total_flow":{"type":"float32","base_type":"float32","units":"Flow"},"jump_count":{"type":"uint16","base_type":"uint16","units":""},"avg_grit":{"type":"float32","base_type":"float32","units":"kGrit"},"avg_flow":{"type":"float32","base_type":"float32","units":"Flow"},"total_fractional_ascent":{"type":"uint8","base_type":"uint8","scale":100,"units":"m"},"total_fractional_descent":{"type":"uint8","base_type":"uint8","scale":100,"units":"m"},"avg_core_temperature":{"type":"uint16","base_type":"uint16","scale":100,"units":"C"},"min_core_temperature":{"type":"uint16","base_type":"uint16","scale":100,"units":"C"},"max_core_temperature":{"type":"uint16","base_type":"uint16","scale":100,"units":"C"},"end_position_lat":{"type":"sint32","base_type":"sint32","units":"semicircles"},"end_position_long":{"type":"sint32","base_type":"sint32","units":"semicircles"},"intensity":{"type":"intensity","base_type":"enum","units":""},"lap_trigger":{"type":"lap_trigger","base_type":"enum","units":""},"first_length_index":{"type":"uint16","base_type":"uint16","units":""},"repetition_num":{"type":"uint16","base_type":"uint16","units":""},"wkt_step_index":{"type":"message_index","base_type":"uint16","units":""},"total_strokes":{"type":"uint16","base_type":"uint16","units":"strokes"},"avg_swimming_cadence":{"type":"uint8","base_type":"uint8","units":"strokes/min"},"length_type":{"type":"length_type","base_type":"enum","units":""},"position_lat":{"type":"sint32","base_type":"sint32","units":"semicircles"},"position_long":{"type":"sint32","base_type":"sint32","units":"semicircles"},"altitude":{"type":"uint16","base_type":"uint16","scale":5,"offset":500,"units":"m","bits":16},"heart_rate":{"type":"uint8","base_type":"uint8","units":"bpm"},"cadence":{"type":"uint8","base_type":"uint8","units":"rpm"},"distance":{"type":"uint32","base_type":"uint32","scale":100,"units":"m"},"speed":{"type":"uint16","base_type":"uint16","scale":1000,"units":"m/s","bits":16},"power":{"type":"uint16","base_type":"uint16","units":"watts"},"compressed_speed_distance":{"type":"byte","base_type":"byte","scale":100,"units":"m/s,\\nm","bits":[12,12],"accumulate":[0,1]},"grade":{"type":"sint16","base_type":"sint16","scale":100,"units":"%"},"resistance":{"type":"uint8","base_type":"uint8","units":""},"time_from_course":{"type":"sint32","base_type":"sint32","scale":1000,"units":"s"},"cycle_length":{"type":"uint8","base_type":"uint8","scale":100,"units":"m"},"temperature":{"type":"sint8","base_type":"sint8","units":"C"},"speed_1s":{"type":"uint8","base_type":"uint8","scale":16,"units":"m/s"},"cycles":{"type":"uint8","base_type":"uint8","units":"cycles","bits":8,"accumulate":1},"compressed_accumulated_power":{"type":"uint16","base_type":"uint16","units":"watts","bits":16,"accumulate":1},"accumulated_power":{"type":"uint32","base_type":"uint32","units":"watts"},"vertical_speed":{"type":"sint16","base_type":"sint16","scale":1000,"units":"m/s"},"calories":{"type":"uint16","base_type":"uint16","units":"kcal"},"vertical_oscillation":{"type":"uint16","base_type":"uint16","scale":10,"units":"mm"},"stance_time_percent":{"type":"uint16","base_type":"uint16","scale":100,"units":"percent"},"stance_time":{"type":"uint16","base_type":"uint16","scale":10,"units":"ms"},"activity_type":{"type":"activity_type","base_type":"enum","units":""},"left_torque_effectiveness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"right_torque_effectiveness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"left_pedal_smoothness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"right_pedal_smoothness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"combined_pedal_smoothness":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"time128":{"type":"uint8","base_type":"uint8","scale":128,"units":"s"},"stroke_type":{"type":"stroke_type","base_type":"enum","units":""},"zone":{"type":"uint8","base_type":"uint8","units":""},"ball_speed":{"type":"uint16","base_type":"uint16","scale":100,"units":"m/s"},"cadence256":{"type":"uint16","base_type":"uint16","scale":256,"units":"rpm"},"fractional_cadence":{"type":"uint8","base_type":"uint8","scale":128,"units":"rpm"},"total_hemoglobin_conc":{"type":"uint16","base_type":"uint16","scale":100,"units":"g/dL"},"total_hemoglobin_conc_min":{"type":"uint16","base_type":"uint16","scale":100,"units":"g/dL"},"total_hemoglobin_conc_max":{"type":"uint16","base_type":"uint16","scale":100,"units":"g/dL"},"saturated_hemoglobin_percent":{"type":"uint16","base_type":"uint16","scale":10,"units":"%"},"saturated_hemoglobin_percent_min":{"type":"uint16","base_type":"uint16","scale":10,"units":"%"},"saturated_hemoglobin_percent_max":{"type":"uint16","base_type":"uint16","scale":10,"units":"%"},"device_index":{"type":"device_index","base_type":"uint8","units":""},"left_pco":{"type":"sint8","base_type":"sint8","units":"mm"},"right_pco":{"type":"sint8","base_type":"sint8","units":"mm"},"left_power_phase":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"left_power_phase_peak":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"right_power_phase":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"right_power_phase_peak":{"type":"uint8","base_type":"uint8","scale":0,"units":"degrees"},"enhanced_speed":{"type":"uint32","base_type":"uint32","scale":1000,"units":"m/s"},"enhanced_altitude":{"type":"uint32","base_type":"uint32","scale":5,"offset":500,"units":"m"},"battery_soc":{"type":"uint8","base_type":"uint8","scale":2,"units":"percent"},"motor_power":{"type":"uint16","base_type":"uint16","units":"watts"},"vertical_ratio":{"type":"uint16","base_type":"uint16","scale":100,"units":"percent"},"stance_time_balance":{"type":"uint16","base_type":"uint16","scale":100,"units":"percent"},"step_length":{"type":"uint16","base_type":"uint16","scale":10,"units":"mm"},"absolute_pressure":{"type":"uint32","base_type":"uint32","units":"Pa"},"depth":{"type":"uint32","base_type":"uint32","scale":1000,"units":"m"},"next_stop_depth":{"type":"uint32","base_type":"uint32","scale":1000,"units":"m"},"next_stop_time":{"type":"uint32","base_type":"uint32","scale":1,"units":"s"},"time_to_surface":{"type":"uint32","base_type":"uint32","scale":1,"units":"s"},"ndl_time":{"type":"uint32","base_type":"uint32","scale":1,"units":"s"},"cns_load":{"type":"uint8","base_type":"uint8","units":"percent"},"n2_load":{"type":"uint16","base_type":"uint16","scale":1,"units":"percent"},"grit":{"type":"float32","base_type":"float32","units":""},"flow":{"type":"float32","base_type":"float32","units":""},"ebike_travel_range":{"type":"uint16","base_type":"uint16","units":"km"},"ebike_battery_level":{"type":"uint8","base_type":"uint8","units":"percent"},"ebike_assist_mode":{"type":"uint8","base_type":"uint8","units":"depends on sensor"},"ebike_assist_level_percent":{"type":"uint8","base_type":"uint8","units":"percent"},"core_temperature":{"type":"uint16","base_type":"uint16","scale":100,"units":"C"},"data16":{"type":"uint16","base_type":"uint16","units":"","bits":16},"data":{"type":"uint32","base_type":"uint32","units":""},"score":{"type":"float32","base_type":"float32","units":""},"front_gear_num":{"type":"uint8z","base_type":"uint8z","units":""},"front_gear":{"type":"uint8z","base_type":"uint8z","units":""},"rear_gear_num":{"type":"uint8z","base_type":"uint8z","units":""},"rear_gear":{"type":"uint8z","base_type":"uint8z","units":""},"radar_threat_level_max":{"type":"radar_threat_level_type","base_type":"enum","units":""},"radar_threat_count":{"type":"uint8","base_type":"uint8","units":""},"device_type":{"type":"uint8","base_type":"uint8","units":""},"cum_operating_time":{"type":"uint32","base_type":"uint32","units":"s"},"battery_voltage":{"type":"uint16","base_type":"uint16","scale":256,"units":"V"},"battery_status":{"type":"battery_status","base_type":"uint8","units":""},"sensor_position":{"type":"body_location","base_type":"enum","units":""},"descriptor":{"type":"string","base_type":"string","units":""},"ant_transmission_type":{"type":"uint8z","base_type":"uint8z","units":""},"ant_device_number":{"type":"uint16z","base_type":"uint16z","units":""},"ant_network":{"type":"ant_network","base_type":"enum","units":""},"source_type":{"type":"source_type","base_type":"enum","units":""},"time":{"type":"uint16","base_type":"uint16","scale":1000,"units":"s"},"weather_report":{"type":"weather_report","base_type":"enum","units":""},"condition":{"type":"weather_status","base_type":"enum","units":""},"wind_direction":{"type":"uint16","base_type":"uint16","units":"degrees"},"wind_speed":{"type":"uint16","base_type":"uint16","scale":1000,"units":"m/s"},"precipitation_probability":{"type":"uint8","base_type":"uint8","units":""},"temperature_feels_like":{"type":"sint8","base_type":"sint8","units":"C"},"relative_humidity":{"type":"uint8","base_type":"uint8","units":""},"location":{"type":"string","base_type":"string","units":""},"observed_at_time":{"type":"date_time","base_type":"uint32","units":""},"observed_location_lat":{"type":"sint32","base_type":"sint32","units":"semicircles"},"observed_location_long":{"type":"sint32","base_type":"sint32","units":"semicircles"},"day_of_week":{"type":"day_of_week","base_type":"enum","units":""},"high_temperature":{"type":"sint8","base_type":"sint8","units":"C"},"low_temperature":{"type":"sint8","base_type":"sint8","units":"C"},"report_id":{"type":"string","base_type":"string","units":""},"issue_time":{"type":"date_time","base_type":"uint32","units":""},"expire_time":{"type":"date_time","base_type":"uint32","units":""},"severity":{"type":"weather_severity","base_type":"enum","units":""},"heading":{"type":"uint16","base_type":"uint16","scale":100,"units":"degrees"},"utc_timestamp":{"type":"date_time","base_type":"uint32","units":"s"},"velocity":{"type":"sint16","base_type":"sint16","scale":100,"units":"m/s"},"camera_event_type":{"type":"camera_event_type","base_type":"enum","units":""},"camera_file_uuid":{"type":"string","base_type":"string","units":""},"camera_orientation":{"type":"camera_orientation_type","base_type":"enum","units":""},"sample_time_offset":{"type":"uint16","base_type":"uint16","units":"ms"},"gyro_x":{"type":"uint16","base_type":"uint16","units":"counts"},"gyro_y":{"type":"uint16","base_type":"uint16","units":"counts"},"gyro_z":{"type":"uint16","base_type":"uint16","units":"counts"},"calibrated_gyro_x":{"type":"float32","base_type":"float32","units":"deg/s"},"calibrated_gyro_y":{"type":"float32","base_type":"float32","units":"deg/s"},"calibrated_gyro_z":{"type":"float32","base_type":"float32","units":"deg/s"},"accel_x":{"type":"uint16","base_type":"uint16","units":"counts"},"accel_y":{"type":"uint16","base_type":"uint16","units":"counts"},"accel_z":{"type":"uint16","base_type":"uint16","units":"counts"},"calibrated_accel_x":{"type":"float32","base_type":"float32","units":"g"},"calibrated_accel_y":{"type":"float32","base_type":"float32","units":"g"},"calibrated_accel_z":{"type":"float32","base_type":"float32","units":"g"},"compressed_calibrated_accel_x":{"type":"sint16","base_type":"sint16","units":"mG"},"compressed_calibrated_accel_y":{"type":"sint16","base_type":"sint16","units":"mG"},"compressed_calibrated_accel_z":{"type":"sint16","base_type":"sint16","units":"mG"},"mag_x":{"type":"uint16","base_type":"uint16","units":"counts"},"mag_y":{"type":"uint16","base_type":"uint16","units":"counts"},"mag_z":{"type":"uint16","base_type":"uint16","units":"counts"},"calibrated_mag_x":{"type":"float32","base_type":"float32","units":"G"},"calibrated_mag_y":{"type":"float32","base_type":"float32","units":"G"},"calibrated_mag_z":{"type":"float32","base_type":"float32","units":"G"},"baro_pres":{"type":"uint32","base_type":"uint32","units":"Pa"},"sensor_type":{"type":"sensor_type","base_type":"enum","units":""},"calibration_factor":{"type":"uint32","base_type":"uint32","units":""},"calibration_divisor":{"type":"uint32","base_type":"uint32","units":"counts"},"level_shift":{"type":"uint32","base_type":"uint32","units":""},"offset_cal":{"type":"sint32","base_type":"sint32","units":""},"orientation_matrix":{"type":"sint32","base_type":"sint32","scale":65535,"units":""},"frame_number":{"type":"uint32","base_type":"uint32","units":""},"time_offset":{"type":"uint16","base_type":"uint16","units":"ms"},"pid":{"type":"byte","base_type":"byte","units":""},"raw_data":{"type":"byte","base_type":"byte","units":""},"pid_data_size":{"type":"uint8","base_type":"uint8","units":""},"system_time":{"type":"uint32","base_type":"uint32","units":"ms"},"start_timestamp":{"type":"date_time","base_type":"uint32","units":""},"start_timestamp_ms":{"type":"uint16","base_type":"uint16","units":""},"sentence":{"type":"string","base_type":"string","units":""},"pitch":{"type":"sint16","base_type":"sint16","scale":10430,"units":"radians"},"roll":{"type":"sint16","base_type":"sint16","scale":10430,"units":"radians"},"accel_lateral":{"type":"sint16","base_type":"sint16","scale":100,"units":"m/s^2"},"accel_normal":{"type":"sint16","base_type":"sint16","scale":100,"units":"m/s^2"},"turn_rate":{"type":"sint16","base_type":"sint16","scale":1024,"units":"radians/second"},"stage":{"type":"attitude_stage","base_type":"enum","units":""},"attitude_stage_complete":{"type":"uint8","base_type":"uint8","units":"%"},"track":{"type":"uint16","base_type":"uint16","scale":10430,"units":"radians"},"validity":{"type":"attitude_validity","base_type":"uint16","units":""},"url":{"type":"string","base_type":"string","units":""},"hosting_provider":{"type":"string","base_type":"string","units":""},"duration":{"type":"uint32","base_type":"uint32","scale":1000,"units":"s"},"message_count":{"type":"uint16","base_type":"uint16","units":""},"text":{"type":"string","base_type":"string","units":""},"clip_number":{"type":"uint16","base_type":"uint16","units":""},"end_timestamp":{"type":"date_time","base_type":"uint32","units":""},"end_timestamp_ms":{"type":"uint16","base_type":"uint16","units":""},"clip_start":{"type":"uint32","base_type":"uint32","units":"ms"},"clip_end":{"type":"uint32","base_type":"uint32","units":"ms"},"repetitions":{"type":"uint16","base_type":"uint16","units":""},"weight":{"type":"uint16","base_type":"uint16","scale":16,"units":"kg"},"set_type":{"type":"set_type","base_type":"uint8","units":""},"category":{"type":"exercise_category","base_type":"uint16","units":""},"category_subtype":{"type":"uint16","base_type":"uint16","units":""},"weight_display_unit":{"type":"fit_base_unit","base_type":"uint16","units":""},"height":{"type":"float32","base_type":"float32","units":"m"},"rotations":{"type":"uint8","base_type":"uint8","units":""},"hang_time":{"type":"float32","base_type":"float32","units":"s"},"name":{"type":"string","base_type":"string","units":""},"capabilities":{"type":"course_capabilities","base_type":"uint32z","units":""},"favorite":{"type":"bool","base_type":"bool","units":""}}');

},{}],"hBS4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefinitionRecord", ()=>DefinitionRecord);
parcelHelpers.export(exports, "definitionRecord", ()=>definitionRecord);
var _functionsJs = require("../functions.js");
var _commonJs = require("./common.js");
var _profilesJs = require("./profiles/profiles.js");
var _recordHeaderJs = require("./record-header.js");
var _fieldDefinitionJs = require("./field-definition.js");
function DefinitionRecord(args = {}) {
    const _type = (0, _commonJs.RecordType).definition;
    const headerSize = (0, _recordHeaderJs.recordHeader).size;
    const fixedContentLength = 6;
    const fieldLength = 3;
    const architecture = args.architecture ?? true ? 0 : 1;
    const numberOfFieldsIndex = 5;
    function numberToMessageName(number) {
        return (0, _profilesJs.profiles).numberToMessageName(number);
    }
    function messageNameToNumber(messageName) {
        return (0, _profilesJs.profiles).messageNameToNumber(messageName);
    }
    function getDefinitionRecordLength(view, start = 0) {
        const numberOfFields = readNumberOfFields(view, start);
        const numberOfDevFields = readNumberOfDevFields(view, start);
        return fixedContentLength + numberOfFields * fieldLength + (numberOfDevFields > 0 ? 1 : 0) + numberOfDevFields * fieldLength;
    }
    function getDataRecordLength(fields) {
        return headerSize + fields.reduce((acc, x)=>acc + x.size, 0);
    }
    function readNumberOfFields(view, start = 0) {
        return view.getUint8(start + numberOfFieldsIndex, true);
    }
    function readNumberOfDevFields(view, start = 0) {
        const header = (0, _recordHeaderJs.recordHeader).decode(view.getUint8(start, true));
        if ((0, _recordHeaderJs.recordHeader).isDeveloper(header)) {
            const numberOfFields = readNumberOfFields(view, start);
            const index = start + fixedContentLength + numberOfFields * fieldLength;
            return view.getUint8(index, true);
        }
        return 0;
    }
    // {
    //     type: RecordType,
    //     name: String,
    //     local_number: Int,
    //     architecture: Int,
    //     length: Int,
    //     data_record_length: Int,
    //     fields: [{number: Int, size: Int, base_type: BaseType}]
    //     dev_fields?: [{number: Int, size: Int, base_type: BaseType}]?
    // }
    // -> DataView
    function encode(definition, view, i = 0) {
        const header = (0, _recordHeaderJs.recordHeader).encode({
            messageType: _type,
            localMessageType: definition.local_number
        });
        const numberOfFields = definition.fields.length;
        const globalNumber = messageNameToNumber(definition.name);
        const length = fixedContentLength + numberOfFields * fieldLength;
        view.setUint8(i + 0, header, true);
        view.setUint8(i + 1, 0, true);
        view.setUint8(i + 2, architecture, true);
        view.setUint16(i + 3, globalNumber, true);
        view.setUint8(i + 5, numberOfFields, true);
        i += fixedContentLength;
        definition.fields.forEach((field)=>{
            (0, _fieldDefinitionJs.fieldDefinition).encode(field, view, i);
            i += fieldLength;
        });
        // TODO:
        // if developer fields are defined
        // write # developer fields
        // write developer fields definitions
        if ("dev_fields" in definition) {
            const numberOfDeveloperFields = definition.dev_fields.length;
            view.setUint8(i, numberOfDeveloperFields, true);
            i += 1;
            definition.dev_fields.forEach((field)=>{
                (0, _fieldDefinitionJs.fieldDefinition).encode(field, view, i);
                i += fieldLength;
            });
        }
        return view;
    }
    // DataView,
    // Int
    // ->
    // {
    //     type: RecordType
    //     name: String,
    //     architecture: Int,
    //     local_number: Int,
    //     length: Int,
    //     data_record_length: Int,
    //     fields:      [{number: Int, size: Int, base_type: BaseTypes}],
    //     dev_fields?: [{number: Int, size: Int, base_type: BaseTypes}]?
    // }
    function decode(view, start = 0) {
        const header = (0, _recordHeaderJs.recordHeader).decode(view.getUint8(start, true));
        const local_number = header.localMessageType;
        const architecture = view.getUint8(start + 2, true);
        const littleEndian = !architecture;
        const messageNumber = view.getUint16(start + 3, littleEndian);
        const messageName = numberToMessageName(messageNumber);
        const numberOfFields = readNumberOfFields(view, start);
        const numberOfDevFields = readNumberOfDevFields(view, start);
        // i  is the dataview index
        // f  is the current field index
        // df is the current developer field index
        let i = start + fixedContentLength;
        let fields = [];
        for(let f = 0; f < numberOfFields; f++){
            fields.push((0, _fieldDefinitionJs.fieldDefinition).decode(messageName, view, i));
            i += fieldLength;
        }
        i += 1; // add the 'number of dev fields' field
        let dev_fields = [];
        for(let df = 0; df < numberOfDevFields; df++){
            dev_fields.push((0, _fieldDefinitionJs.fieldDefinition).decode(messageName, view, i));
            i += fieldLength;
        }
        const length = getDefinitionRecordLength(view, start);
        const data_record_length = getDataRecordLength(fields.concat(dev_fields));
        return {
            type: _type,
            architecture,
            name: messageName,
            local_number,
            length,
            data_record_length,
            fields,
            dev_fields
        };
    }
    // ['message_name', ['field_name'], Int]
    // ->
    // {
    //     type: RecordType
    //     architecture: Int,
    //     name: String,
    //     local_number: Int,
    //     length: Int,
    //     data_record_length: Int,
    //     fields: [{number: Int, size: Int, base_type: base_type}]
    // }
    function toFITjs(productMessageDefinition = [
        "",
        []
    ]) {
        const messageName = (0, _functionsJs.nth)(0, productMessageDefinition);
        const fieldNames = (0, _functionsJs.nth)(1, productMessageDefinition);
        const local_number = (0, _functionsJs.nth)(2, productMessageDefinition);
        const numberOfFields = fieldNames.length;
        const length = fixedContentLength + numberOfFields * fieldLength;
        return fieldNames.reduce(function(acc, fieldName) {
            const number = (0, _profilesJs.profiles).fieldNameToNumber(messageName, fieldName);
            const size = (0, _profilesJs.profiles).fieldNameToSize(fieldName);
            const base_type = (0, _profilesJs.profiles).fieldNameToBaseType(fieldName);
            acc.data_record_length += size;
            acc.fields.push({
                number,
                size,
                base_type
            });
            return acc;
        }, {
            type: _type,
            architecture,
            name: messageName,
            local_number,
            length,
            data_record_length: 1,
            fields: [],
            dev_fields: []
        });
    }
    return Object.freeze({
        getDefinitionRecordLength,
        getDataRecordLength,
        encode,
        decode,
        toFITjs
    });
}
const definitionRecord = DefinitionRecord();

},{"../functions.js":"2jd1e","./common.js":"konCx","./profiles/profiles.js":"6Nq6B","./record-header.js":"g8rFV","./field-definition.js":"5M5bZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCQpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataRecord", ()=>DataRecord);
parcelHelpers.export(exports, "dataRecord", ()=>dataRecord);
var _functionsJs = require("../functions.js");
var _commonJs = require("./common.js");
var _profilesJs = require("./profiles/profiles.js");
var _recordHeaderJs = require("./record-header.js");
var _fieldDefinitionJs = require("./field-definition.js");
function DataRecord(args = {}) {
    const architecture = args.architecture ?? true;
    const _type = (0, _commonJs.RecordType).data;
    const recordHeaderSize = (0, _recordHeaderJs.recordHeader).size;
    // {
    //     type: RecordType
    //     architecture: Int,
    //     name: String,
    //     local_number: Int,
    //     length: Int,
    //     data_record_length: Int,
    //     fields: [{number: Int, size: Int, base_type: BaseType}]
    // },
    // {fields: {field_name: Any}} | {field_name: Any},
    // DataView,
    // Int
    // ->
    // DataView
    function encode(definition, data, view, start = 0) {
        const architecture = definition.architecture ?? 0;
        const endian = !architecture; // arch wierdness?
        if (!("fields" in data)) data = {
            fields: data
        };
        const header = (0, _recordHeaderJs.recordHeader).encode({
            messageType: _type,
            localMessageType: definition.local_number
        });
        view.setUint8(start, header, true);
        return definition.fields.reduce(function(acc, field) {
            const _field = (0, _profilesJs.profiles).numberToField(definition.name, field.number);
            const value = data.fields[_field.name];
            if ((0, _commonJs.type).string.isString(field.base_type)) (0, _commonJs.type).string.encode(field, value, view, acc.i, endian);
            else if ((0, _commonJs.type).timestamp.isTimestamp(_field.type)) (0, _commonJs.type).timestamp.encode(field, value, view, acc.i, endian);
            else (0, _commonJs.type).number.encode(_field, value, view, acc.i, endian);
            acc.i += field.size;
            return acc;
        }, {
            view,
            i: start + recordHeaderSize
        }).view;
    }
    // {
    //     type: RecordType
    //     architecture: Int,
    //     name: String,
    //     local_number: Int,
    //     length: Int,
    //     data_record_length: Int,
    //     fields: [{number: Int, size: Int, base_type: base_type}]
    // }
    // DataView,
    // Int
    // ->
    // {
    //     type: RecordType,
    //     name: String,
    //     local_number: Int,
    //     length: Int,
    //     fields: {field_name: Any,}
    // }
    function decode(definition, view, start = 0) {
        const header = (0, _recordHeaderJs.recordHeader).decode(view.getUint8(start, true));
        const local_number = header.localMessageType;
        const name = definition.name;
        const architecture = definition.architecture;
        const endian = !architecture;
        const length = definition.data_record_length;
        return {
            type: _type,
            name,
            local_number,
            length,
            fields: definition.fields.reduce(function(acc, field) {
                const _field = (0, _profilesJs.profiles).numberToField(definition.name, field.number);
                let value;
                if ((0, _commonJs.type).string.isString(field.base_type)) value = (0, _commonJs.type).string.decode(field, view, acc.i, endian);
                else if ((0, _commonJs.type).timestamp.isTimestamp(_field.type)) value = (0, _commonJs.type).timestamp.decode(field, view, acc.i, endian);
                else value = (0, _commonJs.type).number.decode(_field, view, acc.i, endian);
                acc.fields[_field.name] = value;
                acc.i += field.size;
                return acc;
            }, {
                fields: {},
                i: start + recordHeaderSize
            }).fields
        };
    }
    function toFITjs(definition, values) {
        // if(!equals(definition.length, values.length)) {
        //     const msg = `DataRecord.toFITjs called with missing values for message: '${definition.name}'`;
        //     console.warn(`fit: error: '${msg}'`, values, definition.fields);
        // }
        return {
            type: _type,
            name: definition.name,
            local_number: definition.local_number,
            length: definition.data_record_length,
            fields: values
        };
    }
    return Object.freeze({
        type: _type,
        decode,
        encode,
        toFITjs
    });
}
const dataRecord = DataRecord();

},{"../functions.js":"2jd1e","./common.js":"konCx","./profiles/profiles.js":"6Nq6B","./record-header.js":"g8rFV","./field-definition.js":"5M5bZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ox7K":[function(require,module,exports) {
//
// FITjs
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FITjs", ()=>FITjs);
parcelHelpers.export(exports, "FitRecord", ()=>FitRecord);
parcelHelpers.export(exports, "fitRecord", ()=>fitRecord);
var _functionsJs = require("../functions.js");
var _crcJs = require("./crc.js");
var _commonJs = require("./common.js");
var _fileHeaderJs = require("./file-header.js");
var _recordHeaderJs = require("./record-header.js");
var _definitionRecordJs = require("./definition-record.js");
var _dataRecordJs = require("./data-record.js");
function FitRecord() {
    function isHeader(record) {
        return (0, _functionsJs.equals)((0, _commonJs.RecordType).header, record.type);
    }
    function isDefinition(record) {
        return (0, _functionsJs.equals)((0, _commonJs.RecordType).definition, record.type);
    }
    function isData(record) {
        return (0, _functionsJs.equals)((0, _commonJs.RecordType).data, record.type);
    }
    function isCRC(record) {
        return (0, _functionsJs.equals)((0, _commonJs.RecordType).crc, record.type);
    }
    const definitions = {};
    // RecordJS, Value{}, DataView, Int -> DataView
    function encode(recordJS, view, i = 0) {
        if (isHeader(recordJS)) return (0, _fileHeaderJs.fileHeader).encode(recordJS, view, i);
        if (isDefinition(recordJS)) {
            definitions[recordJS.name] = recordJS;
            return (0, _definitionRecordJs.definitionRecord).encode(recordJS, view, i);
        }
        if (isData(recordJS)) {
            const definition = definitions[recordJS.name];
            return (0, _dataRecordJs.dataRecord).encode(definition, recordJS, view, i);
        }
        if (isCRC(recordJS)) {
            const crc = (0, _crcJs.CRC).calculateCRC(view, 0, i - 1);
            return (0, _crcJs.CRC).encode(crc, view, i);
        }
        console.warn(`Unknown RecordType ${recordJS.type}`, recordJS);
        return view;
    }
    // DataView, Int, Map, Bool -> FitRecord
    function decode(view, i = 0, definitions = new Map(), unfinished = false) {
        const header = (0, _recordHeaderJs.recordHeader).decode(view.getUint8(i, true));
        if (i > view.byteLength) return {};
        unfinished;
        if ((0, _crcJs.CRC).isCRC(view, i)) return (0, _crcJs.CRC).decode(view, i);
        if ((0, _fileHeaderJs.fileHeader).isFileHeader(view, i)) {
            const fileHeaderJS = (0, _fileHeaderJs.fileHeader).decode(view, i);
            const byteLength = view.byteLength;
            const dataSize = fileHeaderJS.dataSize;
            const headerLength = fileHeaderJS.length;
            unfinished = byteLength !== dataSize + headerLength + (0, _crcJs.CRC).size;
            console.log(`:fit :decode :headerLength ${headerLength} :dataSize ${dataSize} :byteLength ${byteLength} :unfinished ${unfinished}`);
            return fileHeaderJS;
        }
        if ((0, _recordHeaderJs.recordHeader).isDefinition(header)) {
            const definition = (0, _definitionRecordJs.definitionRecord).decode(view, i);
            definitions.set(header.localMessageType, definition);
            return definition;
        }
        if ((0, _recordHeaderJs.recordHeader).isData(header)) {
            const definition = definitions.get(header.localMessageType);
            return (0, _dataRecordJs.dataRecord).decode(definition, view, i);
        }
        return {};
    }
    return Object.freeze({
        encode,
        decode
    });
}
function FITjsParser() {
    // const fitRecord = FitRecord();
    // [FITjs] -> Dataview
    function encode(fitJS) {
        const header = (0, _functionsJs.first)(fitJS);
        const dataSize = header.dataSize;
        const viewSize = header.dataSize + header.length + (0, _crcJs.CRC).size;
        const view = new DataView(new Uint8Array(viewSize).buffer);
        fitJS.reduce(function(acc, recordJS) {
            if (acc.i + recordJS.length > viewSize) {
                console.log(`LocalActivity encode view size error: ${viewSize}/${acc.i}, ${recordJS.name}:${recordJS.length}`);
                return acc;
            }
            fitRecord.encode(recordJS, acc.view, acc.i);
            acc.i += recordJS.length;
            return acc;
        }, {
            view,
            i: 0
        });
        return view;
    }
    // Dataview -> [FITjs]
    function decode(dataview) {
        // Note:
        // - RGT uses the same local_number 0 for all definitions
        // - Zwift often produces unfinished files with broken file headers
        // config
        const architecture = true;
        // end config
        const byteLength = dataview.byteLength;
        // state
        let i = 0;
        let records = [];
        let record;
        let definitions = new Map();
        // end state
        while(i < byteLength)try {
            record = fitRecord.decode(dataview, i, definitions);
            records.push(record);
            // console.log(`${i} + ${record?.length ?? 0} `, record);
            i += record?.length ?? 0;
        } catch (e) {
            console.error(`:fit :decode :at ${i}/${byteLength} `, e);
            break;
        }
        return records;
    }
    return Object.freeze({
        encode,
        decode
    });
}
const fitRecord = FitRecord();
const FITjs = FITjsParser();

},{"../functions.js":"2jd1e","./crc.js":"kG8qL","./common.js":"konCx","./file-header.js":"dgG1W","./record-header.js":"g8rFV","./definition-record.js":"hBS4I","./data-record.js":"lCQpT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cenOL":[function(require,module,exports) {
//
// Local Activity Encoder
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localActivity", ()=>localActivity);
parcelHelpers.export(exports, "FileId", ()=>FileId);
parcelHelpers.export(exports, "Event", ()=>Event);
parcelHelpers.export(exports, "Lap", ()=>Lap);
parcelHelpers.export(exports, "Session", ()=>Session);
parcelHelpers.export(exports, "Activity", ()=>Activity);
var _functionsJs = require("../functions.js");
var _profilesJs = require("./profiles/profiles.js");
var _productMessageDefinitionsJs = require("./profiles/product-message-definitions.js");
var _productMessageDefinitionsJsDefault = parcelHelpers.interopDefault(_productMessageDefinitionsJs);
var _crcJs = require("./crc.js");
var _fileHeaderJs = require("./file-header.js");
var _definitionRecordJs = require("./definition-record.js");
var _dataRecordJs = require("./data-record.js");
var _commonJs = require("./common.js");
var _fitjsJs = require("./fitjs.js");
var _enumsJs = require("../activity/enums.js");
function LocalActivity(args = {}) {
    const definitions = (0, _productMessageDefinitionsJsDefault.default).reduce(function(acc, x) {
        const d = (0, _definitionRecordJs.definitionRecord).toFITjs(x);
        acc[d.name] = d;
        return acc;
    }, {});
    // [FITjs] -> {fileSize: Int, dataSize: Int}
    function getSize(fitjs) {
        // byteLength of the whole file start to end
        // this is needed for the DataView size
        const fileSize = fitjs.reduce((acc, x)=>acc += x?.length ?? 0, 0);
        // byteLength of the file minus the File Header and the CRC
        // this is needed for the dataSize field in the file header
        const header = (0, _functionsJs.first)(fitjs);
        const dataSize = fileSize - (header.length + (0, _crcJs.CRC).size);
        return {
            fileSize,
            dataSize
        };
    }
    // {records: [Record], events: [Event]} -> Int
    function calcTotalTimerTime(args) {
        const records = args.records ?? [];
        const events = args.events ?? [];
        // fallbacks
        if ((0, _functionsJs.empty)(events)) {
            if (records.length > 1) // if no events are recorded fallback to first and last record
            return (0, _commonJs.type).timestamp.elapsed((0, _functionsJs.first)(records)?.timestamp, (0, _functionsJs.last)(records)?.timestamp);
            else {
                // if no events are recorded and no more than one record return 0
                console.warn(`fit: calcTotalTimerTime: 'not enough records'`);
                return 0;
            }
        }
        // sum the difference between start and stop event pairs
        return events.reduce(function(acc, event, i) {
            if (event.type === (0, _enumsJs.EventType).stop) {
                const startEvent = events[i - 1] ?? undefined;
                if (startEvent?.type === (0, _enumsJs.EventType).start) // all good
                acc += (0, _commonJs.type).timestamp.elapsed(startEvent?.timestamp, event?.timestamp);
                else // we are at a stop event, but the prev event is not start
                console.warn(`fit: calcTotalTimerTime: 'invalid event order'`);
                return acc;
            }
            return acc;
        }, 0);
    }
    // {records: [Record], laps: [Lap], events: [Event], } -> Int
    function calcTotalElapsedTime(args) {
        const records = args.records ?? [];
        const laps = args.laps ?? [];
        const events = args.events ?? [];
        if (records.length < 2) {
            console.warn(`fit: calcTotalElapsedTime: 'not enough records'`);
            return 0;
        }
        const start_time = (0, _functionsJs.first)(events)?.timestamp ?? (0, _functionsJs.first)(records)?.timestamp;
        const timestamp = (0, _functionsJs.last)(laps)?.timestamp ?? (0, _functionsJs.last)(records)?.timestamp;
        return (0, _commonJs.type).timestamp.elapsed(start_time, timestamp);
    }
    // Lap -> Int
    function calcLapTotalTimerTime(lap, events) {
        const _lap = (0, _functionsJs.expect)(lap, `calcLapTotalTimerTime needs lap: Lap.`);
        const _events = events ?? [];
        const pausedTime = _events.reduce(function(acc, event, i) {
            if (event.timestamp >= _lap.start_time && event.timestamp <= _lap.timestamp && event.type === (0, _enumsJs.EventType).stop) {
                // continue only if the event overlaps with the lap
                const startEvent = _events[i + 1] ?? {
                    timestamp: _lap.timestamp
                };
                const stopEvent = event;
                let startTime = stopEvent.timestamp;
                let endTime = startEvent.timestamp;
                if (endTime > _lap.timestamp) // clamp to lap start and end times
                endTime = _lap.timestamp;
                acc += (0, _commonJs.type).timestamp.elapsed(startTime, endTime);
            }
            return acc;
        }, 0);
        const elapsedTime = calcLapTotalElapsedTime(lap);
        return elapsedTime - Math.max(0, Math.min(pausedTime, elapsedTime));
    }
    // Lap -> Int
    function calcLapTotalElapsedTime(lap) {
        return (0, _commonJs.type).timestamp.elapsed(lap.start_time, lap.timestamp);
    }
    // {records: [Record], total_timer_time: Int}
    // ->
    // Stats
    function calcStats(args = {}) {
        const records = (0, _functionsJs.expect)(args.records, `fit: calcStats: needs records: []`);
        const total_timer_time = (0, _functionsJs.expect)(args.total_timer_time, `fit: calcStats: needs total_timer_tim: Int`);
        const defaultStats = {
            avg_power: 0,
            avg_cadence: 0,
            avg_speed: 0,
            avg_heart_rate: 0,
            max_power: 0,
            max_cadence: 0,
            max_speed: 0,
            max_heart_rate: 0,
            total_distance: (0, _functionsJs.last)(records)?.distance ?? 0,
            total_calories: 0
        };
        const stats = records.reduce(function(acc, record, _, { length }) {
            acc.avg_power += record.power / length;
            acc.avg_cadence += record.cadence / length;
            acc.avg_speed += record.speed / length;
            acc.avg_heart_rate += record.heart_rate / length;
            if (record.power > acc.max_power) acc.max_power = record.power;
            if (record.cadence > acc.max_cadence) acc.max_cadence = record.cadence;
            if (record.speed > acc.max_speed) acc.max_speed = record.speed;
            if (record.heart_rate > acc.max_heart_rate) acc.max_heart_rate = record.heart_rate;
            return acc;
        }, defaultStats);
        stats.total_calories = Math.floor(stats.avg_power * total_timer_time / 1000);
        stats.avg_power = Math.floor(stats.avg_power);
        stats.avg_cadence = Math.floor(stats.avg_cadence);
        stats.avg_heart_rate = Math.floor(stats.avg_heart_rate);
        return stats;
    }
    // {records: [{<field>: Any}], laps: [{<field>: Any}]}
    // ->
    // [FITjs]
    function toFITjs(args = {}) {
        const records = args.records ?? [];
        const laps = args.laps ?? [];
        const events = args.events ?? [];
        const activity_start_time = (0, _functionsJs.first)(events)?.start_time ?? (0, _functionsJs.first)(records).timestamp;
        const time_created = (0, _functionsJs.last)(laps)?.timestamp ?? (0, _functionsJs.last)(records)?.timestamp;
        const timestamp = time_created;
        const total_elapsed_time = calcTotalElapsedTime({
            records,
            laps,
            events
        });
        const total_timer_time = calcTotalTimerTime({
            records,
            events
        });
        const stats = calcStats({
            records,
            total_timer_time
        });
        // structure: FITjs
        const structure = [
            // file header
            FileHeader(),
            // definition file_id
            definitions.file_id,
            // data file_id
            (0, _dataRecordJs.dataRecord).toFITjs(definitions.file_id, FileId({
                time_created,
                manufacturer: 1,
                // garmin
                product: 3570,
                // edge 1030
                serial_number: 3313379353
            })),
            // definition file_creator
            definitions.file_creator,
            // data file_creator
            (0, _dataRecordJs.dataRecord).toFITjs(definitions.file_creator, FileCreator({
                software_version: 29 // edge 1030
            })),
            // definition record
            definitions.record,
            // data record messages
            ...records.map((record)=>(0, _dataRecordJs.dataRecord).toFITjs(definitions.record, record)),
            // definition events
            definitions.event,
            // data event messages
            ...events.map((event)=>(0, _dataRecordJs.dataRecord).toFITjs(definitions.event, Event(event))),
            // definition lap
            definitions.lap,
            // data lap messages
            ...laps.map((lap, message_index)=>(0, _dataRecordJs.dataRecord).toFITjs(definitions.lap, Lap({
                    total_elapsed_time: calcLapTotalElapsedTime(lap),
                    total_timer_time: calcLapTotalTimerTime(lap, events),
                    message_index,
                    ...lap
                }))),
            // definition session
            definitions.session,
            // data session
            (0, _dataRecordJs.dataRecord).toFITjs(definitions.session, Session({
                records,
                laps,
                events,
                definition: definitions.session,
                start_time: activity_start_time,
                timestamp,
                total_elapsed_time,
                total_timer_time,
                stats
            })),
            // definition activity
            definitions.activity,
            // data activity
            (0, _dataRecordJs.dataRecord).toFITjs(definitions.activity, Activity({
                timestamp,
                activity_start_time,
                total_elapsed_time,
                total_timer_time
            })),
            // crc, needs to be computed last evetytime when encoding to binary
            (0, _crcJs.CRC).toFITjs()
        ];
        const header = (0, _functionsJs.first)(structure);
        header.dataSize = getSize(structure).dataSize;
        return structure;
    }
    // {records: [{<field>: Any}], laps: [{<field>: Any}]}
    // -> Dataview
    function encode(args = {}) {
        const fitjs = toFITjs(args);
        return (0, _fitjsJs.FITjs).encode(fitjs);
    }
    return Object.freeze({
        toFITjs,
        encode
    });
}
// Special Data Messages
function FileHeader() {
    return (0, _fileHeaderJs.fileHeader).toFITjs();
}
function FileId(args = {}) {
    return {
        time_created: args.time_created ?? Date.now(),
        manufacturer: args.manufacturer ?? 255,
        product: args.product ?? 0,
        serial_number: args.serial_number ?? 0,
        number: 0,
        type: 4
    };
}
function FileCreator(args = {}) {
    return {
        software_version: args.software_version ?? 0
    };
}
function Event(args = {}) {
    return {
        timestamp: (0, _functionsJs.expect)(args.timestamp, "Event needs timestamp."),
        event: (0, _profilesJs.profiles)?.types?.event_type?.values["timer"] ?? 0,
        event_type: (0, _profilesJs.profiles)?.types?.event_type?.values[args.type] ?? 0,
        event_group: 0
    };
}
function Lap(args = {}) {
    return {
        timestamp: (0, _functionsJs.expect)(args.timestamp, "Lap needs timestamp."),
        start_time: (0, _functionsJs.expect)(args.start_time, "Lap needs start_time."),
        total_elapsed_time: (0, _functionsJs.expect)(args.total_elapsed_time, "Lap needs total_elapsed_time."),
        total_timer_time: (0, _functionsJs.expect)(args.total_timer_time, "Lap needs total_timer_time"),
        message_index: args.message_index ?? 0,
        event: (0, _profilesJs.profiles).types?.event?.values?.lap ?? 9,
        event_type: (0, _profilesJs.profiles).types?.event_type?.values?.stop ?? 1
    };
}
function Activity(args = {}) {
    return {
        timestamp: (0, _functionsJs.expect)(args.timestamp, "Activity needs timestamp."),
        total_timer_time: (0, _functionsJs.expect)(args.total_timer_time, "Activity needs total_timer_time"),
        num_sessions: 1,
        type: (0, _profilesJs.profiles).types.activity.values.manual,
        event: (0, _profilesJs.profiles).types.event.values.activity,
        event_type: (0, _profilesJs.profiles).types.event_type.values.stop
    };
}
function Session(args = {}) {
    return {
        timestamp: (0, _functionsJs.expect)(args.timestamp, "Session needs timestamp."),
        start_time: (0, _functionsJs.expect)(args.start_time, "Session needs start_time."),
        total_elapsed_time: (0, _functionsJs.expect)(args.total_elapsed_time, "Session needs total_elapsed_time."),
        total_timer_time: (0, _functionsJs.expect)(args.total_timer_time, "Session needs total_timer_time"),
        message_index: args.message_index,
        sport: (0, _profilesJs.profiles).types.sport.values.cycling,
        sub_sport: (0, _profilesJs.profiles).types.sub_sport.values.virtual_activity,
        ...args.stats,
        first_lap_index: 0,
        num_laps: args.num_laps
    };
}
// END Special Data Messages
const localActivity = LocalActivity();

},{"../functions.js":"2jd1e","./profiles/profiles.js":"6Nq6B","./profiles/product-message-definitions.js":"kfCuu","./crc.js":"kG8qL","./file-header.js":"dgG1W","./definition-record.js":"hBS4I","./data-record.js":"lCQpT","./common.js":"konCx","./fitjs.js":"7ox7K","../activity/enums.js":"haTY8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfCuu":[function(require,module,exports) {
//
// Product/App Message Definitions
//
// this is the subset of definitions of messages and message fields
// that the product/app fit file encoder whats to use
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const productMessageDefinitions = [
    [
        "file_id",
        [
            "time_created",
            "manufacturer",
            "product",
            "serial_number",
            "number",
            "type"
        ],
        0
    ],
    [
        "file_creator",
        [
            "software_version"
        ],
        1
    ],
    [
        "event",
        [
            "timestamp",
            "event",
            "event_type",
            "event_group"
        ],
        2
    ],
    [
        "record",
        [
            "timestamp",
            "position_lat",
            "position_long",
            "altitude",
            "heart_rate",
            "cadence",
            "distance",
            "speed",
            "power",
            "grade",
            "device_index",
            "total_hemoglobin_conc",
            "saturated_hemoglobin_percent",
            "core_temperature"
        ],
        3
    ],
    [
        "lap",
        [
            "timestamp",
            "start_time",
            "total_elapsed_time",
            "total_timer_time",
            "message_index",
            "event",
            "event_type"
        ],
        4
    ],
    [
        "session",
        [
            "timestamp",
            "start_time",
            "total_elapsed_time",
            "total_timer_time",
            "message_index",
            "sport",
            "sub_sport",
            "total_distance",
            "total_calories",
            "avg_speed",
            "max_speed",
            "avg_heart_rate",
            "max_heart_rate",
            "avg_cadence",
            "max_cadence",
            "avg_power",
            "max_power",
            "first_lap_index",
            "num_laps"
        ],
        5
    ],
    [
        "activity",
        [
            "timestamp",
            "total_timer_time",
            "num_sessions",
            "type",
            "event",
            "event_type"
        ],
        6
    ],
    [
        "course",
        [
            "name"
        ],
        7
    ]
];
exports.default = productMessageDefinitions;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haTY8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimerStatus", ()=>TimerStatus);
parcelHelpers.export(exports, "TimerAction", ()=>TimerAction);
parcelHelpers.export(exports, "EventType", ()=>EventType);
const TimerStatus = {
    stopped: "stopped",
    started: "started",
    paused: "paused",
    resumed: "resumed"
};
const TimerAction = {
    start: "start",
    stop: "stop",
    pause: "pause"
};
const EventType = {
    start: "start",
    stop: "stop"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9H37l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localCourse", ()=>localCourse);
var _functionsJs = require("../functions.js");
var _fitjsJs = require("./fitjs.js");
var _graphJs = require("../views/graph.js");
function toCourse(points, distance, name, description) {
    const pointsSimplified = (0, _graphJs.g).simplify(points, 0.5, true).map((p, i, xs)=>{
        const x1 = xs[i].x;
        const y1 = xs[i].y;
        const x2 = xs[i + 1]?.x ?? xs[i].x;
        const y2 = xs[i + 1]?.y ?? xs[i].y;
        const run = x2 - x1;
        const rise = y2 - y1;
        const r = Math.sqrt(run ** 2 + rise ** 2);
        const slope = (0, _functionsJs.equals)(run, 0) ? 0 : 100 * (rise / run);
        xs[i].r = r;
        xs[i].slope = slope;
        return xs[i];
    });
    return {
        meta: {
            name: name ?? "Course",
            author: "n/a",
            category: "Course",
            description: description,
            distance
        },
        // id: 0,
        points,
        pointsSimplified
    };
}
function isDataRecord(x) {
    return (0, _functionsJs.equals)(x.type, "data") && (0, _functionsJs.equals)(x.name, "record");
}
function hasAltitude(x) {
    return (0, _functionsJs.exists)(x.fields.altitude);
}
function hasDistance(x) {
    return (0, _functionsJs.exists)(x.fields.distance);
}
function isCourseDataMessage(x) {
    return (0, _functionsJs.equals)(x.type, "data") && (0, _functionsJs.equals)(x.message, "course");
}
function courseName(course, fileName) {
    const courseDataMessage = course.find(isCourseDataMessage);
    const name = courseDataMessage?.fields?.name ?? fileName;
    return name.replace(/.fit/gi, "").replace(/_|-/gi, " ");
}
function decode(view, fileName) {
    const courseJS = (0, _fitjsJs.FITjs).decode(view);
    console.log(courseJS);
    const name = courseName(courseJS, fileName);
    const author = `n/a`;
    const description = ``;
    let distanceTotal = 0;
    let x = 0;
    const dataRecords = courseJS.filter((r)=>isDataRecord(r) && hasDistance(r));
    const altitudeRecords = dataRecords.filter(hasAltitude);
    let prevAltitude = (0, _functionsJs.first)(altitudeRecords).fields.altitude;
    const points = dataRecords.reduce((acc, m, i, xs)=>{
        if (!(0, _functionsJs.exists)(m.fields.altitude)) {
            m.fields.altitude = prevAltitude;
            console.log(prevAltitude);
        } else prevAltitude = m.fields.altitude;
        const altitude = m.fields.altitude;
        const altitudeNext = xs[i + 1]?.fields?.altitude ?? m.fields.altitude;
        const distance = m.fields.distance;
        const distanceNext = xs[i + 1]?.fields?.distance ?? m.fields.distance;
        const rise = altitudeNext - altitude;
        const r = distanceNext - distance;
        const run = (0, _functionsJs.equals)(r, 0) ? 0 : Math.sqrt(Math.abs(r ** 2 - rise ** 2));
        const slope = (0, _functionsJs.equals)(run, 0) ? 0 : 100 * (rise / run);
        acc.push({
            x,
            y: altitude,
            r,
            slope,
            distance,
            position_lat: m.fields.position_lat,
            position_long: m.fields.position_long
        });
        x += run;
        distanceTotal = distance;
        return acc;
    }, []);
    return toCourse(points, distanceTotal, name, description);
}
const localCourse = {
    decode
};

},{"../functions.js":"2jd1e","./fitjs.js":"7ox7K","../views/graph.js":"3vp5k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vp5k":[function(require,module,exports) {
/*
 (c) 2017, Vladimir Agafonkin
 Simplify.js, a high-performance JS polyline simplification library
 mourner.github.io/simplify-js
*/ // to suit your point format, run search/replace for '.x' and '.y';
// square distance between 2 points
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "g", ()=>g);
function getSqDist(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y;
    return dx * dx + dy * dy;
}
// square distance from a point to a segment
function getSqSegDist(p, p1, p2) {
    var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y;
    if (dx !== 0 || dy !== 0) {
        var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x = p2.x;
            y = p2.y;
        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }
    dx = p.x - x;
    dy = p.y - y;
    return dx * dx + dy * dy;
}
// rest of the code doesn't care about point format
// basic distance-based simplification
function simplifyRadialDist(points, sqTolerance) {
    var prevPoint = points[0], newPoints = [
        prevPoint
    ], point;
    for(var i = 1, len = points.length; i < len; i++){
        point = points[i];
        if (getSqDist(point, prevPoint) > sqTolerance) {
            newPoints.push(point);
            prevPoint = point;
        }
    }
    if (prevPoint !== point) newPoints.push(point);
    return newPoints;
}
function simplifyDPStep(points, first, last, sqTolerance, simplified) {
    var maxSqDist = sqTolerance, index;
    for(var i = first + 1; i < last; i++){
        var sqDist = getSqSegDist(points[i], points[first], points[last]);
        if (sqDist > maxSqDist) {
            index = i;
            maxSqDist = sqDist;
        }
    }
    if (maxSqDist > sqTolerance) {
        if (index - first > 1) simplifyDPStep(points, first, index, sqTolerance, simplified);
        simplified.push(points[index]);
        if (last - index > 1) simplifyDPStep(points, index, last, sqTolerance, simplified);
    }
}
// simplification using Ramer-Douglas-Peucker algorithm
function simplifyDouglasPeucker(points, sqTolerance) {
    var last = points.length - 1;
    var simplified = [
        points[0]
    ];
    simplifyDPStep(points, 0, last, sqTolerance, simplified);
    simplified.push(points[last]);
    return simplified;
}
// both algorithms combined for awesome performance
function simplify(points, tolerance, highestQuality) {
    if (points.length <= 2) return points;
    var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
    points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
    points = simplifyDouglasPeucker(points, sqTolerance);
    return points;
}
//
function slopeToColor(slope) {
    // avg hex
    const colors = new Map([
        [
            "-40",
            "#328AFF"
        ],
        [
            "-17.5",
            "#3690EA"
        ],
        [
            "-15",
            "#3B97D5"
        ],
        [
            "-12.5",
            "#3F9EC0"
        ],
        [
            "-10",
            "#44A5AB"
        ],
        [
            "-7.5",
            "#48AB96"
        ],
        [
            "-5",
            "#4DB281"
        ],
        [
            "-2.5",
            "#52B96C"
        ],
        [
            "0",
            "#57C057"
        ],
        [
            "2.5",
            "#68AC4E"
        ],
        [
            "5",
            "#799845"
        ],
        [
            "7.5",
            "#8A843C"
        ],
        [
            "10",
            "#9B7134"
        ],
        [
            "12.5",
            "#B36129"
        ],
        [
            "15",
            "#CC521F"
        ],
        [
            "17.5",
            "#E54315"
        ],
        [
            "40",
            "#FE340B"
        ]
    ]);
    for (var [key, value] of colors){
        if (slope <= parseFloat(key)) return value;
    }
// end avg hex
// base hue
// const baseHue = 120;
// const hue = baseHue - (slope * 12);
// return `hsl(${hue}, 45%, 55%)`;
// end base hue
}
function gradeToDeg(grade) {
    // 10 % = 5.71 deg, 5% = 2.86
    return 180 / Math.PI * Math.atan(grade / 100);
}
function slopeToRise(slope, distance) {
    return distance * Math.sin(Math.atan(slope / 100));
}
function slopeToRun(slope, distance) {
    return distance * Math.cos(Math.atan(slope / 100));
}
function adjacent(deg, r) {
    return r * Math.cos(Math.PI / 180 * deg);
}
function opposite(deg, r) {
    return r * Math.sin(Math.PI / 180 * deg);
}
const g = {
    simplifyDouglasPeucker,
    simplify,
    slopeToColor,
    gradeToDeg,
    slopeToRise,
    slopeToRun,
    adjacent,
    opposite
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtkZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Status", ()=>Status);
parcelHelpers.export(exports, "Device", ()=>Device);
parcelHelpers.export(exports, "Metric", ()=>Metric);
parcelHelpers.export(exports, "Responsibility", ()=>Responsibility);
parcelHelpers.export(exports, "Priority", ()=>Priority);
parcelHelpers.export(exports, "ControlMode", ()=>ControlMode);
const Status = {
    disconnected: "disconnected",
    connected: "connected",
    connecting: "connecting",
    disconnecting: "disconnecting"
};
const Device = {
    controllable: "controllable",
    speedCadenceSensor: "speedCadenceSensor",
    powerMeter: "powerMeter",
    heartRateMonitor: "heartRateMonitor",
    raceController: "raceController",
    smo2: "smo2",
    coreTemp: "coreTemp",
    generic: "generic"
};
const Metric = {
    power: "power",
    cadence: "cadence",
    heartRate: "heartRate",
    smo2: "smo2",
    thb: "thb",
    coreBodyTemperature: "coreBodyTemperature",
    skinTemperature: "skinTemperature"
};
const Responsibility = {
    controllable: [
        Metric.power,
        Metric.cadence,
        Metric.heartRate
    ],
    powerMeter: [
        Metric.power,
        Metric.cadence
    ],
    speedCadenceSensor: [
        Metric.cadence
    ],
    heartRateMonitor: [
        Metric.heartRate,
        Metric.cadence
    ],
    smo2: [
        Metric.smo2,
        Metric.thb
    ]
};
const Priority = {
    power: [
        Device.powerMeter,
        Device.controllable
    ],
    cadence: [
        Device.speedCadenceSensor,
        Device.powerMeter,
        Device.controllable,
        Device.heartRateMonitor
    ],
    heartRate: [
        Device.heartRateMonitor,
        Device.controllable
    ],
    smo2: [
        Device.smo2
    ],
    coreTemp: [
        Device.coreTemp
    ]
};
const ControlMode = {
    erg: "erg",
    sim: "sim",
    resistance: "resistance",
    virtualGear: "virtualGear"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGmhX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sound", ()=>Sound);
var _functionsJs = require("./functions.js");
const notes = [
    {},
    // 0
    {},
    // 1
    {},
    // 2
    {
        c: 130.81,
        "c#": 138.59,
        d: 146.83,
        "d#": 155.56,
        e: 164.81,
        f: 174.61,
        "f#": 185.00,
        g: 196.00,
        "g#": 207.65,
        a: 220.00,
        "a#": 233.08,
        b: 246.94
    },
    // 3
    {
        c: 261.63,
        "c#": 277.18,
        d: 293.66,
        "d#": 311.13,
        e: 329.63,
        f: 349.23,
        "f#": 369.99,
        g: 392.00,
        "g#": 415.30,
        a: 440.00,
        "a#": 466.16,
        b: 493.88
    },
    // 4
    {
        c: 523.25,
        "c#": 554.37,
        d: 587.33,
        "d#": 622.25,
        e: 659.25,
        f: 698.46,
        "f#": 739.99,
        g: 783.99,
        "g#": 830.61,
        a: 880.00,
        "a#": 932.33,
        b: 987.77
    } // 5
];
function Sound(args) {
    let vibrate = false;
    let volume = args.volume ?? 0;
    let audioContext;
    let oscillator;
    let abortController;
    function start() {
        abortController = new AbortController();
        let signal = {
            signal: abortController.signal
        };
        (0, _functionsJs.xf).sub(`db:volume`, (x)=>{
            volume = x;
        }, signal);
        (0, _functionsJs.xf).sub("watch:started", (_)=>{
            if (!(0, _functionsJs.exists)(audioContext)) audioContext = new AudioContext();
        }, signal);
        (0, _functionsJs.xf).sub("watch:beep", (_)=>{
            interval();
        }, signal);
        (0, _functionsJs.xf).sub("watch:paused", (_)=>{
            if ((0, _functionsJs.exists)(oscillator)) audioContext.suspend();
        }, signal);
        (0, _functionsJs.xf).sub("watch:started", (_)=>{
            if ((0, _functionsJs.exists)(audioContext) && (0, _functionsJs.exists)(oscillator)) {
                if ((0, _functionsJs.equals)(audioContext.state, "suspended")) audioContext.resume();
            }
        }, signal);
    }
    function stop() {
        abortController.abort();
    }
    // one standart triange wave,
    // gain is turned up and down to produce beeps,
    function interval() {
        const options = {
            type: "triangle"
        };
        oscillator = new OscillatorNode(audioContext, options);
        const gainNode = audioContext.createGain();
        const high = volume / 100;
        const low = 0;
        const time = audioContext.currentTime;
        gainNode.gain.setTargetAtTime(low, time, 0);
        gainNode.gain.setTargetAtTime(high, time + 0.84, 0.001);
        gainNode.gain.setTargetAtTime(low, time + 1.00, 0.001);
        gainNode.gain.setTargetAtTime(high, time + 1.84, 0.001);
        gainNode.gain.setTargetAtTime(low, time + 2.00, 0.001);
        gainNode.gain.setTargetAtTime(high, time + 2.84, 0.001);
        gainNode.gain.setTargetAtTime(low, time + 3.00, 0.001);
        gainNode.gain.setTargetAtTime(high, time + 3.84, 0.001);
        gainNode.gain.setTargetAtTime(low, time + 4.00, 0.001);
        oscillator.frequency.setValueAtTime(notes[5].c, time);
        oscillator.frequency.setValueAtTime(notes[5].a, time + 3.74);
        oscillator.connect(gainNode).connect(audioContext.destination);
        oscillator.start(time);
        oscillator.stop(time + 4.15);
    }
    // 2 canceling sine waves,
    // and gain is turned up and down on the first one to produce beeps
    function customWaveInterval() {
        const n = 2;
        const waves = [
            {
                real: new Float32Array(n),
                imag: new Float32Array(n)
            },
            {
                real: new Float32Array(n),
                imag: new Float32Array(n)
            }
        ];
        waves[0].real[0] = 0;
        waves[0].imag[0] = 0;
        waves[0].real[1] = 1;
        waves[0].imag[1] = 0;
        waves[1].real[0] = 0;
        waves[1].imag[0] = 0;
        waves[1].real[1] = -1;
        waves[1].imag[1] = 0;
        const wave1 = audioContext.createPeriodicWave(waves[0].real, waves[0].imag);
        const wave2 = audioContext.createPeriodicWave(waves[1].real, waves[1].imag);
        let osc1 = new OscillatorNode(audioContext, {});
        let osc2 = new OscillatorNode(audioContext, {});
        osc1.setPeriodicWave(wave1);
        osc2.setPeriodicWave(wave2);
        const gainNode1 = audioContext.createGain();
        const gainNode2 = audioContext.createGain();
        const high = 1;
        const low = 0;
        const fade = 0.015;
        const time = audioContext.currentTime;
        gainNode1.gain.setTargetAtTime(low, time + 0.84, fade);
        gainNode1.gain.setTargetAtTime(high, time + 1.00, fade);
        gainNode1.gain.setTargetAtTime(low, time + 1.84, fade);
        gainNode1.gain.setTargetAtTime(high, time + 2.00, fade);
        gainNode1.gain.setTargetAtTime(low, time + 2.84, fade);
        gainNode1.gain.setTargetAtTime(high, time + 3.00, fade);
        gainNode1.gain.setTargetAtTime(low, time + 3.84, fade);
        gainNode1.gain.setTargetAtTime(low, time + 4.00, fade);
        gainNode2.gain.setTargetAtTime(low, time + 4.00, fade);
        osc1.frequency.setValueAtTime(notes[4].c, time);
        osc1.frequency.setValueAtTime(notes[4].a, time + 3.84);
        osc2.frequency.setValueAtTime(notes[4].c, time);
        osc2.frequency.setValueAtTime(notes[4].a, time + 3.84);
        osc1.connect(gainNode1).connect(audioContext.destination);
        osc2.connect(gainNode2).connect(audioContext.destination);
        osc1.start(time);
        osc1.stop(time + 4.15);
        osc2.start(time);
        osc2.stop(time + 4.15);
    }
    return Object.freeze({
        start,
        stop,
        interval
    });
}

},{"./functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01USA":[function(require,module,exports) {
var _connectionSwitchJs = require("./connection-switch.js");
var _dataViewsJs = require("./data-views.js");
var _effectViewsJs = require("./effect-views.js");
var _editorJs = require("./editor.js");
var _tabsJs = require("./tabs.js");
var _workoutListJs = require("./workout-list.js");
var _workoutGraphJs = require("./workout-graph.js");
var _watchJs = require("./watch.js");
var _antDeviceScanJs = require("./ant-device-scan.js");
var _keyboardJs = require("./keyboard.js");
var _courseVideoJs = require("./course-video.js");
function start() {
    console.log("start views.");
}
start();

},{"./connection-switch.js":"59hpz","./data-views.js":"ldgxd","./effect-views.js":"2Yk5S","./editor.js":"68Ifp","./tabs.js":"dxbR8","./workout-list.js":"3QLVe","./workout-graph.js":"9v2dF","./watch.js":"9fMaF","./ant-device-scan.js":"kFCry","./keyboard.js":"2O64t","./course-video.js":"7TZPP"}],"59hpz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectionSwitch", ()=>ConnectionSwitch);
parcelHelpers.export(exports, "SourceSwitch", ()=>SourceSwitch);
var _functionsJs = require("../functions.js");
var _modelsJs = require("../models/models.js");
class ConnectionSwitch extends HTMLElement {
    constructor(){
        super();
        this.status = "off";
    }
    getDefaults() {
        return {
            class: {
                on: "on",
                off: "off",
                loading: "loading",
                indicator: "connection-switch--indicator"
            }
        };
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.for = this.getAttribute("for");
        this.onClass = (0, _functionsJs.existance)(this.getAttribute("onClass"), this.getDefaults().class.on);
        this.offClass = (0, _functionsJs.existance)(this.getAttribute("offClass"), this.getDefaults().class.off);
        this.loadingClass = (0, _functionsJs.existance)(this.getAttribute("loadingClass"), this.getDefaults().class.loading);
        this.indicatorClass = (0, _functionsJs.existance)(this.getAttribute("indicatorClass"), this.getDefaults().class.indicator);
        this.$indicator = this.querySelector(`.${this.indicatorClass}`) ?? this;
        this.addEventListener("pointerup", this.onEffect.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`${this.for}:connected`, this.on.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`${this.for}:disconnected`, this.off.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`${this.for}:connecting`, this.loading.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    defaultOnClass() {
        return;
    }
    defaultOffClass() {
        return;
    }
    defaultLoadingClass() {
        return;
    }
    defaultIndicatorClass() {
        return;
    }
    onEffect(e) {
        (0, _functionsJs.xf).dispatch(`ui:${this.for}:switch`);
    }
    on(e) {
        this.$indicator.classList.remove(this.loadingClass);
        this.$indicator.classList.remove(this.offClass);
        this.$indicator.classList.add(this.onClass);
        this.status = "on";
    }
    off(e) {
        this.$indicator.classList.remove(this.loadingClass);
        this.$indicator.classList.remove(this.onClass);
        this.$indicator.classList.add(this.offClass);
        this.status = "off";
    }
    loading(e) {
        this.$indicator.classList.remove(this.offClass);
        this.$indicator.classList.remove(this.onClass);
        this.$indicator.classList.add(this.loadingClass);
        this.status = "loading";
    }
}
customElements.define("connection-switch", ConnectionSwitch);
class ProtocolSwitch extends ConnectionSwitch {
    constructor(){
        super();
        this.confirmMsg = "Proceeding will stop the ANT+ driver! Are you sure?";
    }
    getDefaults() {
        return {
            class: {
                on: "on",
                off: "off",
                loading: "loading",
                indicator: "this"
            }
        };
    }
    onEffect(e) {
        console.log(this.status);
        if ((0, _functionsJs.equals)(this.status, "on") || (0, _functionsJs.equals)(this.status, "loading")) {
            const proceed = confirm(this.confirmMsg);
            if (proceed) (0, _functionsJs.xf).dispatch(`ui:${this.for}:switch`);
        } else (0, _functionsJs.xf).dispatch(`ui:${this.for}:switch`);
    }
}
customElements.define("protocol-switch", ProtocolSwitch);
class SourceSwitch extends HTMLElement {
    constructor(){
        super();
        this.prop = "db:sources";
        this.effect = "sources";
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.path = this.getAttribute("for");
        this.value = this.getAttribute("use");
        this.$dataView = this.querySelector(".data-view");
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        this.addEventListener("pointerup", this.onEffect.bind(this), this.signal);
        this.render();
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    onUpdate(sources) {
        this.render();
    }
    onEffect(e) {
        const update = {};
        update[this.path] = this.value;
        (0, _functionsJs.xf).dispatch(`${this.effect}`, update);
    }
    disable() {
        this.classList.add("active");
        this.$dataView.removeAttribute("disabled");
    }
    enable() {
        this.classList.remove("active");
        this.$dataView.setAttribute("disabled", "");
    }
    render() {
        if ((0, _modelsJs.models).sources.isSource(this.path, this.value)) this.disable();
        else this.enable();
    }
}
customElements.define("source-switch", SourceSwitch);
class ANTDeviceRequest extends HTMLElement {
    constructor(){
        super();
        this.devices = new Map();
        this.selected = undefined;
        this._status = "closed";
        this.listSelector = ".device-request--list";
        this.cancelSelector = "#device-request--cancel";
        this.pairSelector = "#device-request--pair";
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
        console.log(this._status);
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.$list = this.querySelector(this.listSelector);
        this.$cancelBtn = this.querySelector(this.cancelSelector);
        this.$pairBtn = this.querySelector(this.pairSelector);
        (0, _functionsJs.xf).sub(`ant:search:start`, this.onStart.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`ant:search:cancel`, this.onCancel.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`ant:search:found`, this.onFound.bind(this), this.signal);
        this.$list.addEventListener(`pointerup`, this.onSelectAction.bind(this), this.signal);
        this.$cancelBtn.addEventListener(`pointerup`, this.onCancelAction.bind(this), this.signal);
        this.$pairBtn.addEventListener(`pointerup`, this.onPairAction.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    onStart() {
        this.open();
    }
    onCancel() {
        this.close();
    }
    onPair() {
        this.pair();
        this.close();
    }
    onFound(channelId) {
        this.add(channelId);
    }
    onLost(device) {
        this.remove(device);
    }
    onSelectAction(e) {
        const el = e.target.closest(".device-request--item");
        const els = this.$list.querySelectorAll(".device-request--item");
        if (el === undefined || el === null) return;
        if (el.id === undefined) return;
        els.forEach((el)=>el.classList.remove("active"));
        el.classList.add("active");
        this.select(parseInt(el.id));
    }
    onCancelAction() {
        (0, _functionsJs.xf).dispatch(`ant:search:cancel`);
    }
    onPairAction() {
        this.pair();
    }
    open() {
        this.status = "opened";
        this.classList.add("active");
    }
    close() {
        this.status = "closed";
        this.clear();
        this.classList.remove("active");
    }
    select(deviceNumber) {
        const channelId = this.devices.get(deviceNumber);
        this.selected = channelId;
        console.log(`:device-selected ${channelId}`);
    }
    pair() {
        this.status = "pairing";
        this.close();
        (0, _functionsJs.xf).dispatch("ant:search:pair", this.selected);
    }
    deviceItemTemplate(args = {
        deviceNumber: "--",
        deviceType: "--"
    }) {
        return `<div class="device-request--item" id="${args.deviceNumber}">
        <div class="device-request--item--protocol">ANT+</div>
        <div class="device-request--item--number">${args.deviceNumber}</div>
        <div class="device-request--item--type">${args.deviceType}</div>
     </div>`;
    }
    add(channelId) {
        if (this.devices.has(channelId.deviceNumber)) return;
        this.devices.set(channelId.deviceNumber, channelId);
        const item = this.deviceItemTemplate(channelId);
        this.$list.insertAdjacentHTML("beforeend", item);
    }
    remove(device) {
        const item = this.$list.querySelector(`#${device.deviceNumber}`);
        this.$list.removeChild(item);
    }
    clear() {
        this.$list.innerHTML = "";
        this.devices = new Map();
    }
}
customElements.define("ant-device-request", ANTDeviceRequest);

},{"../functions.js":"2jd1e","../models/models.js":"hfV5L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldgxd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataView", ()=>DataView);
parcelHelpers.export(exports, "TimerTime", ()=>TimerTime);
parcelHelpers.export(exports, "IntervalTime", ()=>IntervalTime);
parcelHelpers.export(exports, "CadenceValue", ()=>CadenceValue);
parcelHelpers.export(exports, "CadenceLapValue", ()=>CadenceLapValue);
parcelHelpers.export(exports, "CadenceAvgValue", ()=>CadenceAvgValue);
parcelHelpers.export(exports, "CadenceTarget", ()=>CadenceTarget);
parcelHelpers.export(exports, "CadenceGroup", ()=>CadenceGroup);
parcelHelpers.export(exports, "SpeedValue", ()=>SpeedValue);
parcelHelpers.export(exports, "DistanceValue", ()=>DistanceValue);
parcelHelpers.export(exports, "HeartRateValue", ()=>HeartRateValue);
parcelHelpers.export(exports, "HeartRateLapValue", ()=>HeartRateLapValue);
parcelHelpers.export(exports, "HeartRateAvgValue", ()=>HeartRateAvgValue);
parcelHelpers.export(exports, "SmO2Value", ()=>SmO2Value);
parcelHelpers.export(exports, "THbValue", ()=>THbValue);
parcelHelpers.export(exports, "PowerAvg", ()=>PowerAvg);
parcelHelpers.export(exports, "PowerValue", ()=>PowerValue);
parcelHelpers.export(exports, "MeasurementUnit", ()=>MeasurementUnit);
parcelHelpers.export(exports, "ThemeValue", ()=>ThemeValue);
parcelHelpers.export(exports, "MeasurementValue", ()=>MeasurementValue);
parcelHelpers.export(exports, "SlopeTarget", ()=>SlopeTarget);
parcelHelpers.export(exports, "PowerTarget", ()=>PowerTarget);
parcelHelpers.export(exports, "WorkoutName", ()=>WorkoutName);
parcelHelpers.export(exports, "InstantPowerGraph", ()=>InstantPowerGraph);
parcelHelpers.export(exports, "SwitchGroup", ()=>SwitchGroup);
parcelHelpers.export(exports, "DataTileSwitchGroup", ()=>DataTileSwitchGroup);
parcelHelpers.export(exports, "DockModeBtn", ()=>DockModeBtn);
var _functionsJs = require("../functions.js");
var _utilsJs = require("../utils.js");
var _modelsJs = require("../models/models.js");
//
// DataView
//
// Usage:
// <data-view id="count-value" prop="db:count">--</data-view>
//
// Template Method:
// overwrite methods to augment the general logic
//
// getDefaults() -> setup default and fallback values
// config()      -> work with attributes and props here
// subs()        -> subscribe to events or db
// unsubs()      -> executes after abort signal
// getValue()    -> getter for the value for state from a complex prop say an object or array
// onUpdate()    -> determine the rules for state update that will trigger rendering
// transform()   -> apply transforming functions to state just before rendering
//
class DataView extends HTMLElement {
    constructor(){
        super();
        this.state = "";
        this.postInit();
    }
    postInit() {
        return;
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if ((0, _functionsJs.equals)(name, "disabled")) this.disabled = (0, _functionsJs.exists)(newValue) ? true : false;
    }
    getDefaults() {
        return {
            prop: ""
        };
    }
    config() {
        return;
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.prop = (0, _functionsJs.existance)(this.getAttribute("prop"), this.getDefaults().prop);
        this.disabled = this.hasAttribute("disabled");
        this.config();
        this.subs();
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
        this.unsubs();
    }
    unsubs() {}
    getValue(propValue) {
        return propValue;
    }
    shouldUpdate(value) {
        return !(0, _functionsJs.equals)(value, this.state) && !this.disabled;
    }
    updateState(value) {
        this.state = value;
    }
    onUpdate(propValue) {
        const value = this.getValue(propValue);
        if (this.shouldUpdate(value)) {
            this.updateState(value);
            this.render();
        }
    }
    transform(state) {
        return state;
    }
    render() {
        this.textContent = this.transform(this.state);
    }
}
customElements.define("data-view", DataView);
class TimerTime extends DataView {
    getDefaults() {
        return {
            format: "hh:mm:ss",
            prop: "db:elapsed"
        };
    }
    config() {
        this.format = (0, _functionsJs.existance)(this.getAttribute("format"), this.getDefaults().format);
    }
    transform(state) {
        return (0, _utilsJs.formatTime)({
            value: this.state,
            format: this.format,
            unit: "seconds"
        });
    }
}
customElements.define("timer-time", TimerTime);
class IntervalTime extends DataView {
    getDefaults() {
        return {
            format: "mm:ss",
            prop: "db:lapTime"
        };
    }
    config() {
        this.format = (0, _functionsJs.existance)(this.getAttribute("format"), this.getDefaults().format);
    }
    transform(state) {
        return (0, _utilsJs.formatTime)({
            value: this.state,
            format: this.format,
            unit: "seconds"
        });
    }
}
customElements.define("interval-time", IntervalTime);
class SpeedValue extends DataView {
    postInit() {
        this.measurement = this.getDefaults().measurement;
    }
    getDefaults() {
        return {
            prop: "db:speed",
            measurement: "metric"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:measurement`, this.onMeasurement.bind(this), this.signal);
    }
    onMeasurement(measurement) {
        this.measurement = measurement;
    }
    format(value, measurement = "metric") {
        if ((0, _functionsJs.equals)(measurement, "imperial")) value = `${(0, _modelsJs.models).speed.mpsToMph(value).toFixed(1)}`;
        else value = `${(0, _modelsJs.models).speed.mpsToKmh(value).toFixed(1)}`;
        return value;
    }
    transform(state) {
        return this.format(state, this.measurement);
    }
}
customElements.define("speed-value", SpeedValue);
class SpeedVirtual extends SpeedValue {
    getDefaults() {
        return {
            prop: "db:speedVirtual",
            measurement: "metric"
        };
    }
}
customElements.define("speed-virtual", SpeedVirtual);
class SpeedSwitch extends SpeedValue {
    postInit() {
        this.measurement = this.getDefaults().measurement;
    }
    getDefaults() {
        return {
            prop: "",
            measurement: "metric"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`db:speed`, this.onSpeed.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:speedVirtual`, this.onSpeedVirtual.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:measurement`, this.onMeasurement.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:sources`, this.onSources.bind(this), this.signal);
    }
    onSpeed(value) {
        if ((0, _functionsJs.equals)(this.source, "speed")) this.onUpdate(value);
    }
    onSpeedVirtual(value) {
        if ((0, _functionsJs.equals)(this.source, "power")) this.onUpdate(value);
    }
    onSources(sources) {
        this.source = sources.virtualState;
    }
}
customElements.define("speed-switch", SpeedSwitch);
class DistanceValue extends DataView {
    postInit() {
        this.measurement = this.getDefaults().measurement;
    }
    getDefaults() {
        return {
            prop: "db:distance",
            measurement: "metric"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:measurement`, this.onMeasurement.bind(this), this.signal);
    }
    onMeasurement(measurement) {
        this.measurement = measurement;
    }
    metersToYards(meters) {
        return 1.09361 * meters;
    }
    format(meters, measurement = "metric") {
        let value = `0`;
        const km = meters / 1000;
        const miles = meters / 1609.34;
        const yards = this.metersToYards(meters);
        if ((0, _functionsJs.equals)(measurement, "imperial")) {
            const yardsTemplate = `${this.metersToYards(meters).toFixed(0)}`;
            const milesTemplate = `${miles.toFixed(2)}`;
            return value = yards < 1609.34 ? yardsTemplate : milesTemplate;
        } else {
            const metersTemplate = `${meters.toFixed(0)}`;
            const kmTemplate = `${km.toFixed(2)}`;
            return value = meters < 1000 ? metersTemplate : kmTemplate;
        }
    }
    transform(state) {
        return this.format(state, this.measurement);
    }
}
customElements.define("distance-value", DistanceValue);
class AltitudeValue extends DataView {
    getDefaults() {
        return {
            prop: "db:altitude"
        };
    }
    transform(state) {
        return state.toFixed(1);
    }
}
customElements.define("altitude-value", AltitudeValue);
class AscentValue extends DataView {
    getDefaults() {
        return {
            prop: "db:ascent"
        };
    }
    transform(state) {
        return state.toFixed(1);
    }
}
customElements.define("ascent-value", AscentValue);
class CadenceValue extends DataView {
    getDefaults() {
        return {
            prop: "db:cadence"
        };
    }
}
customElements.define("cadence-value", CadenceValue);
class CadenceLapValue extends DataView {
    getDefaults() {
        return {
            prop: "db:cadenceLap"
        };
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("cadence-lap-value", CadenceLapValue);
class CadenceAvgValue extends DataView {
    getDefaults() {
        return {
            prop: "db:cadenceAvg"
        };
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("cadence-avg-value", CadenceAvgValue);
class CadenceTarget extends DataView {
    getDefaults() {
        return {
            prop: "db:cadenceTarget"
        };
    }
    transform(state) {
        if ((0, _functionsJs.equals)(state, 0)) return "";
        return state;
    }
}
customElements.define("cadence-target", CadenceTarget);
class CadenceGroup extends DataView {
    getDefaults() {
        return {
            prop: "db:cadenceTarget"
        };
    }
    config() {
        this.$main = this.querySelector("cadence-value");
        this.$aux = this.querySelector("cadence-target");
    }
    render() {
        if ((0, _functionsJs.equals)(this.state, 0)) {
            this.$main.classList.remove("active");
            this.$aux.classList.remove("active");
        } else {
            this.$main.classList.add("active");
            this.$aux.classList.add("active");
        }
    }
}
customElements.define("cadence-group", CadenceGroup);
class HeartRateValue extends DataView {
    getDefaults() {
        return {
            prop: "db:heartRate"
        };
    }
}
customElements.define("heart-rate-value", HeartRateValue);
class HeartRateLapValue extends DataView {
    getDefaults() {
        return {
            prop: "db:heartRateLap"
        };
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("heart-rate-lap-value", HeartRateLapValue);
class HeartRateAvgValue extends DataView {
    getDefaults() {
        return {
            prop: "db:heartRateAvg"
        };
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("heart-rate-avg-value", HeartRateAvgValue);
class SmO2Value extends DataView {
    getDefaults() {
        return {
            prop: "db:smo2"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    // this.style = 'color: #2A5F97';
    // this.style = 'color: #278B65';
    // this.style = 'color: #D72A1C';
    transform(state) {
        if (state < (0, _modelsJs.models).smo2.zones.one) this.style = "color: #328AFF";
        else if (state < (0, _modelsJs.models).smo2.zones.two) this.style = "color: #56C057";
        else this.style = "color: #FE340B";
        return (0, _functionsJs.toFixed)(state, 1);
    }
}
customElements.define("smo2-value", SmO2Value);
class THbValue extends DataView {
    getDefaults() {
        return {
            prop: "db:thb"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    transform(state) {
        return (0, _functionsJs.toFixed)(state, 2);
    }
}
customElements.define("thb-value", THbValue);
class CoreBodyTemperatureValue extends DataView {
    postInit() {
        this.measurement = this.getDefaults().measurement;
    }
    getDefaults() {
        return {
            prop: "db:coreBodyTemperature",
            measurement: "metric"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:measurement`, this.onMeasurement.bind(this), this.signal);
    }
    onMeasurement(measurement) {
        this.measurement = measurement;
    }
    celsiusToFahrenheit(celsius) {
        return Math.round((celsius * 9 / 5 + 32) * 100) / 100;
    }
    format(temperature, measurement = "metric") {
        if ((0, _functionsJs.equals)(measurement, "imperial")) return this.celsiusToFahrenheit(temperature);
        if ((0, _functionsJs.equals)(measurement, "metric")) return (0, _functionsJs.toFixed)(temperature);
        return (0, _functionsJs.toFixed)(temperature);
    }
    transform(state) {
        return this.format(state, this.measurement);
    }
}
customElements.define("core-body-temperature-value", CoreBodyTemperatureValue);
class SkinTemperatureValue extends DataView {
    getDefaults() {
        return {
            prop: "db:skinTemperature"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    transform(state) {
        return (0, _functionsJs.toFixed)(state, 2);
    }
}
customElements.define("skin-temperature-value", SkinTemperatureValue);
class WorkoutName extends DataView {
    getDefaults() {
        return {
            prop: "db:workout"
        };
    }
    getValue(propValue) {
        return propValue.meta.name;
    }
}
customElements.define("workout-name", WorkoutName);
class PowerTarget extends DataView {
    getDefaults() {
        return {
            prop: "db:powerTarget"
        };
    }
}
class PowerTargetFTP extends DataView {
    getDefaults() {
        return {
            prop: "db:powerTarget"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:ftp`, this.onFTP.bind(this), this.signal);
    }
    onFTP(ftp) {
        this.ftp = ftp;
    }
    toPercentage(state, ftp) {
        return Math.round(state * 100 / ftp);
    }
    transform(state) {
        return `${this.toPercentage(state, this.ftp)}%`;
    }
}
customElements.define("power-target-ftp", PowerTargetFTP);
class CompanionGroup extends DataView {
    getDefaults() {
        return {
            prop: "",
            active: false
        };
    }
    config() {
        this.$main = this.querySelector(".companion-main");
        this.$aux = this.querySelector(".companion-aux");
    }
    subs() {
        this.addEventListener(`pointerup`, this.onPointerup.bind(this), this.signal);
    }
    onPointerup() {
        this.active = !this.active;
        this.render();
    }
    render() {
        if (this.active) {
            this.$main.classList.add("active");
            this.$aux.classList.add("active");
        } else {
            this.$main.classList.remove("active");
            this.$aux.classList.remove("active");
        }
    }
}
customElements.define("companion-group", CompanionGroup);
class ZStack extends DataView {
    getDefaults() {
        return {
            prop: "",
            items: [],
            active: 0
        };
    }
    postInit() {
        this.items = [];
        this.active = 0;
    }
    config() {
        this.$items = this.querySelectorAll("z-stack-item");
    }
    subs() {
        this.addEventListener(`pointerup`, this.onPointerup.bind(this), this.signal);
    }
    onPointerup() {
        this.incrementActive();
        this.render();
    }
    incrementActive() {
        this.active = (this.active + 1) % Math.max(this.$items.length, 1);
    }
    render() {
        this.$items.forEach(($item, i)=>{
            if ((0, _functionsJs.equals)(i, this.active)) $item.classList.add("active");
            else $item.classList.remove("active");
        });
    }
}
customElements.define("z-stack", ZStack);
customElements.define("power-target", PowerTarget);
class SlopeTarget extends DataView {
    getDefaults() {
        return {
            prop: "db:slopeTarget"
        };
    }
    transform(state) {
        return state.toFixed(1);
    }
}
customElements.define("slope-target", SlopeTarget);
class PowerTargetControl extends DataView {
    postInit() {
        const self = this;
        this.state = 0;
    }
    setDefaults() {
        this.prop = "db:powerTarget";
        this.selectors = {
            input: "#power-target-input",
            inc: "#power-target-inc",
            dec: "#power-target-dec"
        };
        this.effects = {
            inc: "power-target-inc",
            dec: "power-target-dec",
            set: "power-target-set"
        };
        this.parse = parseInt;
    }
    config() {
        this.setDefaults();
        this.$input = document.querySelector(this.selectors.input);
        this.$inc = document.querySelector(this.selectors.inc);
        this.$dec = document.querySelector(this.selectors.dec);
    }
    subs() {
        this.$input.addEventListener("change", this.onChange.bind(this), this.signal);
        this.$inc.addEventListener("pointerup", this.onInc.bind(this), this.signal);
        this.$dec.addEventListener("pointerup", this.onDec.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    onInc(e) {
        (0, _functionsJs.xf).dispatch(`ui:${this.effects.inc}`);
    }
    onDec(e) {
        (0, _functionsJs.xf).dispatch(`ui:${this.effects.dec}`);
    }
    onChange(e) {
        this.state = this.parse(e.target.value);
        (0, _functionsJs.xf).dispatch(`ui:${this.effects.set}`, this.state);
    }
    render() {
        this.$input.value = this.transform(this.state);
    }
}
customElements.define("power-target-control", PowerTargetControl);
class ResistanceTargetControl extends PowerTargetControl {
    setDefaults() {
        this.prop = "db:resistanceTarget";
        this.selectors = {
            input: "#resistance-target-input",
            inc: "#resistance-target-inc",
            dec: "#resistance-target-dec"
        };
        this.effects = {
            inc: "resistance-target-inc",
            dec: "resistance-target-dec",
            set: "resistance-target-set"
        };
        this.parse = parseInt;
    }
}
customElements.define("resistance-target-control", ResistanceTargetControl);
class SlopeTargetControl extends PowerTargetControl {
    setDefaults() {
        this.prop = "db:slopeTarget";
        this.selectors = {
            input: "#slope-target-input",
            inc: "#slope-target-inc",
            dec: "#slope-target-dec"
        };
        this.effects = {
            inc: "slope-target-inc",
            dec: "slope-target-dec",
            set: "slope-target-set"
        };
        this.parse = parseFloat;
    }
    transform(state) {
        return state.toFixed(1);
    }
}
customElements.define("slope-target-control", SlopeTargetControl);
class PowerValue extends DataView {
    getDefaults() {
        return {
            prop: "db:power"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("power-value", PowerValue);
class PowerAvg extends DataView {
    getDefaults() {
        return {
            prop: "db:powerAvg"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("power-avg", PowerAvg);
class PowerLap extends DataView {
    getDefaults() {
        return {
            prop: "db:powerLap"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("power-lap", PowerLap);
class KcalAvg extends DataView {
    getDefaults() {
        return {
            prop: "db:kcal"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    transform(state) {
        return Math.round(state);
    }
}
customElements.define("kcal-avg", KcalAvg);
class PowerInZone extends HTMLElement {
    constructor(){
        super();
        this.state = [
            [
                0,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                0
            ],
            [
                0,
                0
            ]
        ];
        this.selectors = {
            values: ".power--zone-value",
            bars: ".power--zone-bar",
            btn: ".power--unit"
        };
        this.format = "percentage";
        this.prop = "db:powerInZone";
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.$values = this.querySelectorAll(this.selectors.values);
        this.$bars = this.querySelectorAll(this.selectors.bars);
        this.$btn = this.querySelector(this.selectors.btn);
        this.$btn.addEventListener("pointerup", this.onSwitch.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    onUpdate(propValue) {
        this.state = propValue;
        this.render();
    }
    onSwitch() {
        if ((0, _functionsJs.equals)(this.format, "time")) {
            this.format = "percentage";
            this.$btn.textContent = "%";
            this.render();
        } else {
            this.format = "time";
            this.$btn.textContent = "min";
            this.render();
        }
    }
    render() {
        for(let i = 0; i < this.state.length; i++){
            let text;
            if ((0, _functionsJs.equals)(this.format, "percentage")) text = Math.round(this.state[i][0] * 100);
            else text = (0, _utilsJs.formatTime)({
                value: Math.round(this.state[i][1]),
                format: "mm:ss"
            });
            const height = `${this.state[i][0] * 100}%`;
            this.$values[i].textContent = text;
            this.$bars[i].style.height = height;
        }
    }
}
customElements.define("power-in-zone", PowerInZone);
class LapsList extends DataView {
    postInit() {
        this.isEmpty = true;
    }
    getDefaults() {
        return {
            prop: "db:lap"
        };
    }
    config() {
        this.$lapsCont = this.querySelector(".laps--cont");
    }
    subs() {
        (0, _functionsJs.xf).reg(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    toLap(lap, index) {
        const duration = lap.totalElapsedTime;
        const powerLap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], (0, _functionsJs.toFixed)(lap.avgPower, 0), 0);
        const cadenceLap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], (0, _functionsJs.toFixed)(lap.avgCadence, 0), 0);
        const heartRateLap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], (0, _functionsJs.toFixed)(lap.avgHeartRate, 0), 0);
        const zone = (0, _modelsJs.models).ftp.powerToZone(powerLap).name;
        const smo2Lap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], lap.saturated_hemoglobin_percent, 0);
        const thbLap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], lap.total_hemoglobin_conc, 0);
        const coreTemperatureLap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], lap.core_temperature, 0);
        const skinTemperatureLap = (0, _functionsJs.validate)([
            (0, _functionsJs.exists),
            (0, _functionsJs.isNumber)
        ], lap.skin_temperature, 0);
        return `<div class="lap--item">
                    <div class="lap--item--inner">
                        <div class="lap--value lap--index">${index}</div>
                        <div class="lap--value lap--duration">${(0, _utilsJs.formatTime)({
            value: duration,
            format: "mm:ss"
        })}</div>
                        <div class="lap--value lap--power zone-${zone}-color">${powerLap} W</div>
                        <div class="lap--value lap--cadence">${cadenceLap}</div>
                        <div class="lap--value lap--heart-rate">${heartRateLap}</div>
                        <div class="lap--value lap--smo2">${smo2Lap.toFixed(2)}</div>
                        <div class="lap--value lap--thb">${thbLap.toFixed(2)}</div>
                        <div class="lap--value lap--core-temperature">${coreTemperatureLap.toFixed(2)}</div>
                        <div class="lap--value lap--skin-temperature">${skinTemperatureLap.toFixed(2)}</div>
                    </div>
                </div>`;
    }
    restore(laps) {
        this.state = laps;
        laps.forEach((lap, index)=>this.render(lap, index + 1));
    }
    onUpdate(propValue, db) {
        if ((0, _functionsJs.empty)(db.laps)) return;
        else if (this.isEmpty) {
            this.restore(db.laps);
            this.isEmpty = false;
        } else {
            this.updateState(db.laps);
            this.render((0, _functionsJs.last)(db.laps), this.state.length);
        }
    }
    render(lap, i) {
        this.$lapsCont.insertAdjacentHTML("afterbegin", this.toLap(lap, i));
    }
}
customElements.define("laps-list", LapsList);
function scale(value, max = 100) {
    return 100 * (value / max);
}
class InstantPowerGraph extends HTMLElement {
    constructor(){
        super();
        this.value = this.defaults().value;
        this.metricValue = this.defaults().metricValue;
        this.scaleFactor = this.defaults().scaleFactor;
        this.barsCount = this.defaults().barsCount;
        this.scaleMax = this.setScaleMax();
        this.model = {};
        this.postInit();
    }
    postInit() {
        this.model = (0, _modelsJs.models).ftp;
        this.prop = "power";
        this.metric = "ftp";
    }
    defaults() {
        return {
            value: 0,
            barsCount: 0,
            metricValue: 200,
            scaleFactor: 1.6
        };
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.graphWidth = this.calcGraphWidth();
        (0, _functionsJs.xf).sub(`db:${this.prop}`, this.onUpdate.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:${this.metric}`, this.onMetric.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    calcGraphWidth() {
        return this.getBoundingClientRect().width;
    }
    onUpdate(value) {
        this.value = value;
        this.render();
    }
    onMetric(value) {
        this.metricValue = value;
        this.setScaleMax();
    }
    setScaleMax() {
        this.scaleMax = this.metricValue * this.scaleFactor;
    }
    bar(zone = "one", height = 80, width = 1) {
        return `<div class="graph-bar zone-${zone}" style="height: ${height}%; width: ${width}px;"></div>`;
    }
    shift() {
        this.removeChild(this.childNodes[0]);
    }
    render() {
        const zone = (0, _modelsJs.models).ftp.powerToZone(this.value, this.metricValue).name;
        const barHeight = scale(this.value, this.scaleMax);
        if (this.barsCount >= this.graphWidth) this.shift();
        this.insertAdjacentHTML("beforeend", this.bar(zone, barHeight, 1));
        this.barsCount += 1;
    }
}
customElements.define("instant-power-graph", InstantPowerGraph);
class PowerGraph extends HTMLElement {
    constructor(){
        super();
    }
    toBar(power) {
        const zone = (0, _modelsJs.models).ftp.powerToZone(this.value).name;
        const height = this.powerToHeight();
    }
    powerToHeight(power) {
        return 100;
    }
    render(power) {
        this.insertAdjacentHTML("beforeend", this.toBar(power));
        this.barsCount += 1;
    }
}
customElements.define("power-graph", PowerGraph);
class SwitchGroup extends HTMLElement {
    constructor(){
        super();
        this.state = 0;
        this.postInit();
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.$switchList = this.querySelectorAll(".switch-item");
        this.config();
        (0, _functionsJs.xf).sub(`db:${this.prop}`, this.onState.bind(this), this.signal);
        this.addEventListener("pointerup", this.onSwitch.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    eventOwner(e) {
        const path = e.composedPath();
        const pathLength = path.length;
        for(let i = 0; i < pathLength; i++){
            if ((0, _functionsJs.exists)(path[i].hasAttribute) && path[i].hasAttribute("index")) return path[i];
        }
        return e.path[0];
    }
    onSwitch(e) {
        const element = this.eventOwner(e);
        console.log(e);
        console.log(element);
        console.log(element.attributes.index);
        console.log((0, _functionsJs.exists)(element.attributes.index));
        if ((0, _functionsJs.exists)(element.attributes.index)) {
            const id = parseInt(element.attributes.index.value) || 0;
            console.log(id);
            if ((0, _functionsJs.equals)(id, this.state)) return;
            else (0, _functionsJs.xf).dispatch(`${this.effect}`, id);
        }
    }
    onState(state) {
        this.state = state;
        this.setSwitch(this.state);
        this.renderEffect(this.state);
    }
    setSwitch(state) {
        this.$switchList.forEach(function(s, i) {
            if ((0, _functionsJs.equals)(i, state)) s.classList.add("active");
            else s.classList.remove("active");
        });
    }
    // overwrite the rest to augment behavior
    postInit() {
        this.prop = "";
    }
    config() {}
    renderEffect(state) {
        return state;
    }
}
class DataTileSwitchGroup extends SwitchGroup {
    postInit() {
        this.prop = "dataTileSwitch";
        this.effect = "ui:data-tile-switch-set";
    }
    config() {
        this.$speed = document.querySelector("#data-tile--speed"); // tab 0
        this.$distance = document.querySelector("#data-tile--distance"); // tab 0
        this.$powerAvg = document.querySelector("#data-tile--power-avg"); // tab 1
        this.$slope = document.querySelector("#data-tile--slope"); // tab 1
        this.$smo2 = document.querySelector("#data-tile--smo2"); // tab 2
        this.$thb = document.querySelector("#data-tile--thb"); // tab 2
        this.$coreBodyTemperature = document.querySelector("#data-tile--core-body-temperature"); // tab 3
        this.$skinTemperature = document.querySelector("#data-tile--skin-temperature"); // tab 3
        this.renderEffect(this.state);
    }
    renderEffect(state) {
        if ((0, _functionsJs.equals)(state, 0)) {
            this.$speed.classList.add("active");
            this.$distance.classList.add("active");
            this.$slope.classList.add("active");
            this.$powerAvg.classList.add("active");
            this.$smo2.classList.remove("active");
            this.$thb.classList.remove("active");
            this.$coreBodyTemperature.classList.remove("active");
            this.$skinTemperature.classList.remove("active");
        }
        if ((0, _functionsJs.equals)(state, 1)) {
            this.$smo2.classList.add("active");
            this.$thb.classList.add("active");
            this.$coreBodyTemperature.classList.add("active");
            this.$skinTemperature.classList.add("active");
            this.$speed.classList.remove("active");
            this.$distance.classList.remove("active");
            this.$powerAvg.classList.remove("active");
            this.$slope.classList.remove("active");
        }
        return;
    }
}
customElements.define("data-tile-switch-group", DataTileSwitchGroup);
class LibrarySwitchGroup extends SwitchGroup {
    postInit() {
        this.prop = "librarySwitch";
        this.effect = "ui:library-switch-set";
    }
    config() {
        this.$workouts = document.querySelector("#workouts"); // tab 0
        this.$editor = document.querySelector("#workout-editor"); // tab 1
        this.$rideReport = document.querySelector("#ride-report"); // tab 2
        this.renderEffect(this.state);
    }
    renderEffect(state) {
        if ((0, _functionsJs.equals)(state, 2)) {
            this.$rideReport.classList.add("active");
            this.$workouts.classList.remove("active");
            this.$editor.classList.remove("active");
        }
        if ((0, _functionsJs.equals)(state, 1)) {
            this.$editor.classList.add("active");
            this.$workouts.classList.remove("active");
            this.$rideReport.classList.remove("active");
        }
        if ((0, _functionsJs.equals)(state, 0)) {
            this.$workouts.classList.add("active");
            this.$rideReport.classList.remove("active");
            this.$editor.classList.remove("active");
        }
        return;
    }
}
customElements.define("library-switch-group", LibrarySwitchGroup);
class AuthForms extends HTMLElement {
    constructor(){
        super();
        this.postInit();
    }
    postInit() {}
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.$signup = document.querySelector("#signup--form--section"); // tab 0
        this.$login = document.querySelector("#login--form--section"); // tab 1
        this.$toSignUp = document.querySelector("#to-signup--button");
        this.$toLogin = document.querySelector("#to-login--button");
        this.$toSignUp.addEventListener("pointerup", self.toSignup.bind(this));
        this.$toLogin.addEventListener("pointerup", self.toLogin.bind(this));
    }
    disconnectedCallback() {
        this.abortController.abort();
        this.unsubs();
    }
    toSignup() {
        this.$login.classList.remove("active");
        this.$signup.classList.add("active");
    }
    toLogin() {
        this.$signup.classList.remove("active");
        this.$login.classList.add("active");
    }
}
customElements.define("auth-forms", AuthForms);
class MeasurementUnit extends DataView {
    getDefaults() {
        return {
            state: (0, _modelsJs.models).measurement.default,
            prop: "db:measurement"
        };
    }
    formatUnit(measurement = (0, _modelsJs.models).measurement.default) {
        if (measurement === "imperial") return `lbs`;
        else return `kg`;
    }
    transform(state) {
        return this.formatUnit(state);
    }
}
customElements.define("measurement-unit", MeasurementUnit);
class ThemeValue extends DataView {
    getDefaults() {
        return {
            prop: "db:theme"
        };
    }
}
customElements.define("theme-value", ThemeValue);
class MeasurementValue extends DataView {
    getDefaults() {
        return {
            prop: "db:measurement"
        };
    }
}
customElements.define("measurement-value", MeasurementValue);
class VirtualStateSource extends DataView {
    postInit() {
        this.sources = [
            "power",
            "speed"
        ];
        this.source = "power";
        this.effect = "sources";
        this.state = {
            virtualState: "power"
        };
    }
    getDefaults() {
        return {
            prop: "db:sources",
            effect: "sources"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        this.addEventListener("pointerup", this.onEffect.bind(this), this.signal);
    }
    onUpdate(value) {
        this.state = value.virtualState;
        this.render();
    }
    onEffect() {
        if ((0, _functionsJs.equals)(this.state, "power")) (0, _functionsJs.xf).dispatch(`${this.effect}`, {
            virtualState: "speed"
        });
        else (0, _functionsJs.xf).dispatch(`${this.effect}`, {
            virtualState: "power"
        });
    }
    render() {
        this.textContent = this.state;
    }
}
customElements.define("virtual-state-source", VirtualStateSource);
class AutoPause extends DataView {
    postInit() {
        this.effect = "sources";
        this.state = {
            autoPause: false
        };
    }
    getDefaults() {
        return {
            prop: "db:sources",
            effect: "sources"
        };
    }
    subs() {
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
        this.addEventListener("pointerup", this.onEffect.bind(this), this.signal);
    }
    onUpdate(value) {
        this.state = value.autoPause;
        this.render();
    }
    onEffect() {
        if ((0, _functionsJs.equals)(this.state, true)) (0, _functionsJs.xf).dispatch(`${this.effect}`, {
            autoPause: false
        });
        else (0, _functionsJs.xf).dispatch(`${this.effect}`, {
            autoPause: true
        });
    }
    render() {
        this.textContent = this.state ? "On" : "Off";
    }
}
customElements.define("auto-pause", AutoPause);
class DockModeBtn extends DataView {
    subs() {
        this.addEventListener("pointerup", this.onSwitch.bind(this), this.signal);
    }
    onSwitch() {
        const href = document.location.href;
        const width = window.screen.availWidth;
        const height = 150;
        const top = 0; // window.screen.availHeight - height;
        // window.resizeTo(width, height);
        window.open(`${href}`, "", `width=${width},height=${height},left=0,top=${top}`);
    }
}
customElements.define("dock-mode-btn", DockModeBtn);
class SoundControl extends DataView {
    postInit() {
        this.volume = 100;
        this.selectors = {
            mute: "#sound--mute",
            down: "#sound--down",
            up: "#sound--up",
            volume: "#sound--volume"
        };
    }
    getDefaults() {
        return {
            prop: "db:volume"
        };
    }
    config() {
        this.$mute = this.querySelector(this.selectors.mute);
        this.$down = this.querySelector(this.selectors.down);
        this.$up = this.querySelector(this.selectors.up);
        this.$volume = this.querySelector(this.selectors.volume);
    }
    subs() {
        this.$mute.addEventListener(`pointerup`, this.onMute.bind(this), this.signal);
        this.$down.addEventListener(`pointerup`, this.onDown.bind(this), this.signal);
        this.$up.addEventListener(`pointerup`, this.onUp.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`${this.prop}`, this.onUpdate.bind(this), this.signal);
    }
    onMute() {
        (0, _functionsJs.xf).dispatch(`ui:volume-mute`);
    }
    onDown() {
        (0, _functionsJs.xf).dispatch(`ui:volume-down`);
    }
    onUp() {
        (0, _functionsJs.xf).dispatch(`ui:volume-up`);
    }
    render() {
        this.$volume.textContent = `${this.state}%`;
    }
}
customElements.define("sound-control", SoundControl);
class CompatibilityCheck extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        if (!self.compatible()) self.show();
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    compatible() {
        return "bluetooth" in navigator;
    }
    show() {
        const self = this;
        this.innerHTML = `<div id="compatibility--cont">
             <p>This browser is NOT supported. Please open the app with </p>
             <a href="https://www.google.com/chrome/" target="_blank">Chrome</a> or
             <a href="https://www.microsoft.com/edge" target="_blank">Edge</a>
             <p>Please note that <b>iOS</b> is NOT supported at all, regardless of browser.</p>
             <p>For more information visit the project <a href="https://github.com/dvmarinoff/Flux" target="_blank">Page.</a></p>
         </div>`;
    }
    hide() {
        const self = this;
        this.innerHTML = "";
    }
}
customElements.define("compatibility-check", CompatibilityCheck);

},{"../functions.js":"2jd1e","../utils.js":"en4he","../models/models.js":"hfV5L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Yk5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IntInput", ()=>IntInput);
parcelHelpers.export(exports, "FloatInput", ()=>FloatInput);
parcelHelpers.export(exports, "EffectButton", ()=>EffectButton);
var _functionsJs = require("../functions.js");
var _modelsJs = require("../models/models.js");
class IntInput extends HTMLInputElement {
    constructor(){
        super();
        this.state = 0;
        this.prop = this.getAttribute("prop");
        this.effect = this.getAttribute("effect");
        this.postInit();
    }
    postInit() {
        return;
    }
    connectedCallback() {
        this.addEventListener("change", this.onChange.bind(this));
        (0, _functionsJs.xf).sub(`db:${this.prop}`, this.onUpdate.bind(this));
    }
    disconnectedCallback() {
        document.removeEventListener(`db:${this.prop}`, this.onUpdate);
        this.removeEventListener("change", this.onChange);
    }
    onUpdate(value) {
        if (!(0, _functionsJs.equals)(value, this.state)) {
            this.state = value;
            this.render();
        }
    }
    onChange(e) {
        this.state = parseInt(e.target.value);
        (0, _functionsJs.xf).dispatch(`ui:${this.effect}`, this.state);
    }
    render() {
        this.value = this.state;
    }
}
class FloatInput extends IntInput {
    postInit() {
        this.points = this.getAttribute("points") || 2;
    }
    onChange(e) {
        this.state = parseFloat(e.target.value);
        (0, _functionsJs.xf).dispatch(`ui:${this.effect}`, this.state);
    }
    render() {
        this.value = this.state.toFixed(this.points);
    }
}
class WeightInput extends IntInput {
    postInit() {
        this.measurement = (0, _modelsJs.models).measurement.default;
        (0, _functionsJs.xf).sub(`db:measurement`, this.onMeasurement.bind(this));
    }
    onMeasurement(measurement) {
        this.measurement = measurement;
        this.render();
    }
    kgToLbs(kg) {
        return Math.round(2.20462 * kg);
    }
    parseKg(weight) {
        if (this.measurement === "imperial") return Math.round(0.453592 * weight);
        return Math.round(weight);
    }
    formatWeight(value, measurement) {
        if (measurement === "imperial") value = `${this.kgToLbs(value)}`;
        else value = `${value}`;
        return value;
    }
    onChange(e) {
        this.state = this.parseKg(e.target.value);
        (0, _functionsJs.xf).dispatch(`ui:${this.effect}`, this.state);
    }
    render() {
        this.value = this.formatWeight(this.state, this.measurement);
    }
}
customElements.define("int-input", IntInput, {
    extends: "input"
});
customElements.define("float-input", FloatInput, {
    extends: "input"
});
customElements.define("weight-input", WeightInput, {
    extends: "input"
});
class EffectButton extends HTMLButtonElement {
    constructor(){
        super();
        this.effect = this.getAttribute("effect");
    }
    connectedCallback() {
        this.addEventListener("pointerup", this.onEffect.bind(this));
    }
    disconnectedCallback() {
        this.removeEventListener("pointerup", this.onEffect);
    }
    onEffect(e) {
        (0, _functionsJs.xf).dispatch(`ui:${this.effect}`);
    }
}
customElements.define("effect-button", EffectButton, {
    extends: "button"
});
class SetButton extends HTMLButtonElement {
    constructor(){
        super();
        this.effect = this.getAttribute("effect");
        this.prop = this.getAttribute("prop");
        this.state = 0;
    }
    connectedCallback() {
        (0, _functionsJs.xf).sub(`db:${this.prop}`, this.onUpdate.bind(this));
        this.addEventListener("pointerup", this.onEffect.bind(this));
    }
    disconnectedCallback() {
        this.removeEventListener("pointerup", this.onEffect);
    }
    onEffect(e) {
        (0, _functionsJs.xf).dispatch(`ui:${this.effect}`, parseInt(this.state));
    }
    onUpdate(value) {
        this.state = value;
    }
}
customElements.define("set-button", SetButton, {
    extends: "button"
});
class Upload extends HTMLInputElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.addEventListener("change", this.onSubmit.bind(this));
    }
    disconnectedCallback() {
        this.removeEventListener(`pointerup`, this.onSubmit);
    }
    onSubmit(e) {
        const file = e.target.files[0];
        (0, _functionsJs.xf).dispatch("ui:workout:upload", file);
    }
}
customElements.define("workout-upload", Upload, {
    extends: "input"
});

},{"../functions.js":"2jd1e","../models/models.js":"hfV5L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68Ifp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Editor", ()=>Editor);
var _functionsJs = require("../functions.js");
var _modelsJs = require("../models/models.js");
var _utilsJs = require("../utils.js");
var _zwoJs = require("../workouts/zwo.js");
var _fileJs = require("../file.js");
function stringToSeconds(str) {
    const values = str.split(":").map(Number);
    return (0, _functionsJs.first)(values) * 60 + (0, _functionsJs.second)(values);
}
function toNumericString(str) {
    return str.replace(/[^\d.-]/g, "");
}
function Duration() {
    function encode(num) {
        return (0, _utilsJs.formatTime)({
            value: num,
            format: "mm:ss"
        });
    }
    function decode(str) {
        return stringToSeconds(str);
    }
    function valid(decoded) {
        return decoded > 0;
    }
    return Object.freeze({
        encode,
        decode,
        valid
    });
}
function Power(args = {}) {
    const _defaults = {
        encode: "-",
        decode: 0
    };
    const defaults = args.defaults ?? _defaults;
    function encode(num) {
        let value = Math.floor(Math.abs(num) * 100);
        if (!(0, _functionsJs.exists)(value) || isNaN(value)) return defaults.encode;
        return `${value}%`;
    }
    function decode(str) {
        return parseInt(toNumericString(str)) / 100;
    }
    return Object.freeze({
        encode,
        decode
    });
}
function Slope(args = {}) {
    function encode(num) {
        let value = (0, _functionsJs.toFixed)(num, 1);
        if (!(0, _functionsJs.exists)(value) || isNaN(value)) return "-";
        return `${value}%`;
    }
    function decode(str) {
        return parseFloat(toNumericString(str));
    }
    return Object.freeze({
        encode,
        decode
    });
}
function Cadence(args = {}) {
    function encode(num) {
        let value = parseInt(num);
        if (!(0, _functionsJs.exists)(value) || isNaN(value)) return "-";
        return `${value}`;
    }
    function decode(str) {
        return parseInt(toNumericString(str));
    }
    return Object.freeze({
        encode,
        decode
    });
}
const fields = {
    time: Duration(),
    duration: Duration(),
    power: Power(),
    ramp: Power({
        defaults: {
            encode: "-",
            decode: undefined
        }
    }),
    slope: Slope(),
    cadence: Cadence()
};
function Row(args = {}) {
    const id = args.id ?? genId();
    let state = {
        time: 0,
        duration: 600,
        power: 0.0,
        ramp: undefined,
        slope: undefined,
        cadence: undefined,
        powerZone: undefined,
        rampZone: undefined,
        select: false
    };
    function genId() {
        return window.crypto.randomUUID();
    }
    function setTime(value) {
        state.time = fields.time.decode(value);
    }
    function setDuration(value) {
        state.duration = fields.duration.decode(value);
    }
    function setPower(value) {
        const percentage = fields.power.decode(value);
        if (isNaN(percentage)) return;
        state.power = percentage;
        state.powerZone = (0, _modelsJs.models).ftp.percentageToZone(state.power);
    }
    function setRamp(value) {
        const percentage = fields.power.decode(value);
        if (isNaN(percentage)) {
            state.ramp = undefined;
            state.rampZone = "";
        } else {
            state.ramp = percentage;
            state.rampZone = (0, _modelsJs.models).ftp.percentageToZone(state.ramp);
        }
    }
    function setSlope(value) {
        const slope = fields.slope.decode(value);
        if (isNaN(slope)) return;
        state.slope = slope;
    }
    function setCadence(value) {
        const cadence = fields.cadence.decode(value);
        if (isNaN(cadence)) return;
        state.cadence = cadence;
    }
    function getId() {
        return state.id;
    }
    function getSelect() {
        return state.select;
    }
    function getTime() {
        return state.time;
    }
    function getDuration() {
        return state.duration;
    }
    function getPower() {
        return state.power;
    }
    function getRamp() {
        return state.ramp;
    }
    function getSlope() {
        return state.slope;
    }
    function getCadence() {
        return state.cadence;
    }
    function set(data) {
        state = Object.assign(state, data);
    }
    function get() {
        return Object.assign({}, state);
    }
    function switchSelect() {
        state.select = !state.select;
    }
    function toView(data) {
        return Object.keys(data).reduce((acc, key)=>{
            acc[key] = fields[key]?.encode(data[key]);
            return acc;
        }, {});
    }
    function toInterval(row = state) {
        if ((0, _functionsJs.exists)(row.ramp)) return {
            duration: row.duration,
            steps: toRamp(row)
        };
        else return {
            duration: row.duration,
            steps: [
                toStep(row)
            ]
        };
    }
    function toRamp(row) {
        const timeStep = 10;
        const duration = row.duration;
        const stepsCount = parseInt(duration / timeStep);
        const powerStep = (row.ramp - row.power) / (stepsCount - 1);
        let steps = [];
        let power = row.power;
        for(let i = 0; i < stepsCount; i++){
            const step = {
                duration: timeStep,
                power
            };
            if ((0, _functionsJs.exists)(row.slope)) step.slope = row.slope;
            if ((0, _functionsJs.exists)(row.cadence)) step.cadence = row.cadence;
            steps.push(step);
            power = power + powerStep;
        }
        const fixedSteps = steps.map((step)=>{
            step.power = (0, _functionsJs.toFixed)(step.power, 2);
            return step;
        });
        return steps;
    }
    function toStep(row) {
        const step = {
            duration: row.duration
        };
        if ((0, _functionsJs.exists)(row.power)) step.power = row.power;
        if ((0, _functionsJs.exists)(row.slope)) step.slope = row.slope;
        if ((0, _functionsJs.exists)(row.cadence)) step.cadence = row.cadence;
        return step;
    }
    return Object.freeze({
        setDuration,
        setPower,
        setRamp,
        setSlope,
        setCadence,
        getId,
        getSelect,
        getDuration,
        getPower,
        getRamp,
        getSlope,
        getCadence,
        set,
        get,
        switchSelect,
        toView,
        toInterval,
        toStep
    });
}
function Selection(args = {}) {
    const state = new Map();
    function set(rows) {
        rows.forEach(add);
        return state;
    }
    function get() {
        return state;
    }
    function add(row) {
        state.set(row.id, row);
        return state;
    }
    function remove(row) {
        state.delete(row.id);
        return state;
    }
    function clear() {
        state.clear();
        return state;
    }
    return Object.freeze({
        set,
        get,
        add,
        remove,
        clear
    });
}
function Editor() {
    const rows = [];
    let workout = {
        meta: {
            name: "New Workout",
            author: "Flux",
            category: "SweetSpot",
            description: "Best workout ever!",
            type: "bike"
        },
        intervals: []
    };
    function setName(value) {
        workout.meta.name = value;
    }
    function getName(value) {
        return workout.meta.name;
    }
    function setAuthor(value) {
        workout.meta.author = value;
    }
    function getAuthor(value) {
        return workout.meta.author;
    }
    function setCategory(value) {
        workout.meta.category = value;
    }
    function getCategory(value) {
        return workout.meta.category;
    }
    function setDescription(value) {
        workout.meta.description = value;
    }
    function getDescription(value) {
        return workout.meta.description;
    }
    function add() {
        const addition = [];
        rows.forEach((row)=>{
            const selected = row.getSelect();
            if (selected) {
                const r = Row();
                r.set(row.get());
                r.switchSelect();
                rows.push(r);
                addition.push(r);
            }
        });
        if ((0, _functionsJs.empty)(addition)) {
            const row = Row();
            rows.push(row);
            addition.push(row);
        }
        return addition;
    }
    function remove() {
        rows.pop();
        return rows;
    }
    function save() {
        const meta = rows.reduce((acc, row)=>{
            acc.duration += row.get().duration;
            return acc;
        }, {
            duration: 0
        });
        const intervals = rows.reduce((acc, row)=>{
            acc.push(row.toInterval());
            return acc;
        }, []);
        workout.meta = Object.assign(workout.meta, meta);
        workout.intervals = Object.assign(workout.intervals, intervals);
        console.log(workout);
    }
    function format(args = {}) {
        return toZwo(workout);
    }
    function toZwo(data) {
        return (0, _zwoJs.zwo).write((0, _zwoJs.zwo).fromInterval(data));
    }
    return Object.freeze({
        setName,
        getName,
        setAuthor,
        getAuthor,
        setCategory,
        getCategory,
        setDescription,
        getDescription,
        add,
        remove,
        save,
        format,
        toZwo
    });
}
function RowView(args = {}) {
    const model = args.model;
    const selectors = {
        select: ".select",
        on: ".editor--radio-on",
        off: ".editor--radio-off",
        time: ".time",
        duration: ".duration",
        power: ".power",
        ramp: ".ramp",
        slope: ".slope",
        cadence: ".cadence"
    };
    let $root;
    let $select;
    let $on;
    let $off;
    let $time;
    let $duration;
    let $power;
    let $ramp;
    let $slope;
    let $cadence;
    let abortController;
    let signal;
    function connect($this) {
        $root = $this;
        $select = $root.querySelector(selectors.select);
        $on = $root.querySelector(selectors.on);
        $off = $root.querySelector(selectors.off);
        $time = $root.querySelector(selectors.time);
        $duration = $root.querySelector(selectors.duration);
        $power = $root.querySelector(selectors.power);
        $ramp = $root.querySelector(selectors.ramp);
        $slope = $root.querySelector(selectors.slope);
        $cadence = $root.querySelector(selectors.cadence);
        abortController = new AbortController();
        signal = {
            signal: abortController.signal
        };
        $select.addEventListener(`pointerup`, onSelect.bind(this), signal);
        $duration.addEventListener(`input`, onDuration.bind(this), signal);
        $power.addEventListener(`input`, onPower.bind(this), signal);
        $ramp.addEventListener(`input`, onRamp.bind(this), signal);
        $slope.addEventListener(`input`, onSlope.bind(this), signal);
        $cadence.addEventListener(`input`, onCadence.bind(this), signal);
        renderPowerZone();
        renderRampZone();
    }
    function disconnect() {
        abortController.abort();
    }
    function onSelect(e) {
        model.switchSelect();
        const selected = model.getSelect();
        if (selected) select();
        else unselect();
    }
    function select() {
        $on.classList.add("selected");
        $off.classList.remove("selected");
    }
    function unselect() {
        $on.classList.remove("selected");
        $off.classList.add("selected");
    }
    function renderPowerZone() {
        const zoneClass = model.get().powerZone;
        $power.className = $power.className.replace(/(\zone.*)/gi, `zone-${zoneClass}-color`);
    }
    function renderRampZone() {
        const zoneClass = model.get().rampZone;
        $ramp.className = $ramp.className.replace(/(\zone.*)/gi, `zone-${zoneClass}-color`);
    }
    function onDuration(e) {
        model.setDuration(e.target.value);
    }
    function onPower(e) {
        model.setPower(e.target.value);
        renderPowerZone();
    }
    function onRamp(e) {
        model.setRamp(e.target.value);
        renderRampZone();
    }
    function onSlope(e) {
        model.setSlope(e.target.value);
    }
    function onCadence(e) {
        model.setCadence(e.target.value);
    }
    function template(data) {
        return `<div class="editor--row">
            <div class="editor--td select">
                <svg class="editor--radio editor--radio-off selected"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path fill="#ffffff" class="path" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                </svg>
                <svg class="editor--radio editor--radio-on"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path class="path" fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0
                            18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <circle class="circle" cx="12" cy="12" r="5" fill="#ffffff"/>
                </svg>
            </div>
            <div class="editor--td editor--static time">${data.time}</div>
            <input class="editor--td duration" type="text" value="${data.duration}" />
            <input class="editor--td power zone" type="text" value="${data.power}" />
            <input class="editor--td ramp zone" type="text" value="${data.ramp}" />
            <input class="editor--td slope" type="text" value="${data.slope}" />
            <input class="editor--td cadence" type="text" value="${data.cadence}" />
        </div>`;
    }
    function build() {
        return template(model.toView(model.get()));
    }
    return Object.freeze({
        connect,
        disconnect,
        template,
        build
    });
}
class WorkoutEditor extends HTMLElement {
    constructor(){
        super();
        this.selectors = {
            name: ".editor--name",
            author: ".editor--author",
            category: ".editor--category",
            description: ".editor--description",
            body: ".editor--body",
            add: ".editor--add",
            remove: ".editor--remove",
            save: ".editor--save",
            download: ".editor--download"
        };
        this.editor = Editor();
        this.rows = new Map();
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.$root = this;
        this.$name = this.$root.querySelector(this.selectors.name);
        this.$author = this.$root.querySelector(this.selectors.author);
        this.$category = this.$root.querySelector(this.selectors.category);
        this.$description = this.$root.querySelector(this.selectors.description);
        this.$body = this.$root.querySelector(this.selectors.body);
        this.$add = this.$root.querySelector(this.selectors.add);
        this.$remove = this.$root.querySelector(this.selectors.remove);
        this.$save = this.$root.querySelector(this.selectors.save);
        this.$download = this.$root.querySelector(this.selectors.download);
        this.setTimeRefs();
        this.$body.addEventListener("input", this.setTime.bind(this), this.signal);
        this.$name.addEventListener(`input`, this.onName.bind(this), this.signal);
        this.$author.addEventListener(`input`, this.onAuthor.bind(this), this.signal);
        this.$category.addEventListener(`input`, this.onCategory.bind(this), this.signal);
        this.$description.addEventListener(`input`, this.onDescription.bind(this), this.signal);
        this.$add.addEventListener(`pointerup`, this.onAdd.bind(this), this.signal);
        this.$remove.addEventListener(`pointerup`, this.onRemove.bind(this), this.signal);
        this.$save.addEventListener(`pointerup`, this.onSave.bind(this), this.signal);
        this.$download.addEventListener(`pointerup`, this.onDownload.bind(this), this.signal);
        this.$name.value = this.editor.getName();
        this.$author.value = this.editor.getAuthor();
        this.$category.value = this.editor.getCategory();
        this.$description.value = this.editor.getDescription();
        this.onAdd();
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    setTimeRefs() {
        this.$durationInputs = this.$body.querySelectorAll(".editor--td.duration");
        this.$timeOutputs = this.$body.querySelectorAll(".editor--td.time");
    }
    setTime(e) {
        const self = this;
        let acc = 0;
        self.$durationInputs.forEach((input, i)=>{
            self.$timeOutputs.item(i).textContent = fields.time.encode(acc);
            acc += fields.duration.decode(input.value);
        });
    }
    onName(e) {
        this.editor.setName(e.target.value);
    }
    onAuthor(e) {
        this.editor.setAuthor(e.target.value);
    }
    onCategory(e) {
        this.editor.setCategory(e.target.value);
    }
    onDescription(e) {
        this.editor.setDescription(e.target.value);
    }
    onAdd(e) {
        // const rowModel = this.editor.add();
        // const rowView = RowView({model: rowModel});
        // this.rows.set(this.rows.size, rowView);
        // this.$body.insertAdjacentHTML('beforeend', rowView.build());
        // const $row = this.$body.lastChild;
        // rowView.connect($row);
        // this.setTimeRefs();
        // this.setTime();
        const rowModels = this.editor.add();
        rowModels.forEach((rowModel)=>{
            const rowView = RowView({
                model: rowModel
            });
            this.rows.set(this.rows.size, rowView);
            this.$body.insertAdjacentHTML("beforeend", rowView.build());
            const $row = this.$body.lastChild;
            rowView.connect($row);
            this.setTimeRefs();
            this.setTime();
        });
    }
    onRemove(e) {
        if (this.rows.size > 0) {
            this.editor.remove();
            const $row = this.$body.lastChild;
            const rowView = this.rows.get(this.rows.size - 1);
            rowView.disconnect();
            $row.remove();
            this.setTimeRefs();
            this.setTime();
        }
    }
    validate(fn) {
        // const { isValid, errors } = this.editor.validate();
        // if(isValid) {
        //     fn();
        // } else {
        //     this.onError(errors);
        // }
        fn();
    }
    onError(errors) {}
    onSave() {
        this.validate(this.save.bind(this));
    }
    onDownload() {
        this.validate(this.download.bind(this));
    }
    save() {
        this.editor.save();
    }
    download() {
        this.editor.save();
        const file = this.editor.format({
            format: "zwo"
        });
        const name = `${this.editor.getName()}.zwo`;
        console.log(file);
        (0, _fileJs.fileHandler).saveFile()(new Blob([
            file
        ], {
            type: "text/plain"
        }), name);
    }
}
customElements.define("workout-editor", WorkoutEditor);

},{"../functions.js":"2jd1e","../models/models.js":"hfV5L","../utils.js":"en4he","../workouts/zwo.js":"iXLon","../file.js":"lPvDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxbR8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TabBtn", ()=>TabBtn);
parcelHelpers.export(exports, "TabGroup", ()=>TabGroup);
var _functionsJs = require("../functions.js");
class TabBtn extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.state = "";
        this.effect = this.getAttribute("effect") || "";
        this.param = this.getAttribute("param") || "";
        this.prop = this.getAttribute("prop") || false;
        this.addEventListener("pointerup", this.onEffect.bind(this));
        if (this.prop) {
            (0, _functionsJs.xf).sub(`db:${this.prop}`, this.onUpdate.bind(this));
            document.removeEventListener(`db:${this.prop}`, this.onUpdate);
        }
    }
    disconnectedCallback() {
        this.removeEventListener("pointerup", this.onEffect);
    }
    onEffect(e) {
        (0, _functionsJs.xf).dispatch(`ui:${this.effect}`, this.param);
    }
    onUpdate(state) {
        this.state = state;
        if (this.state === this.param) {
            this.classList.remove("active");
            this.classList.add("active");
        } else this.classList.remove("active");
    }
}
class TabGroup extends HTMLElement {
    constructor(){
        super();
        this.tabClass = this.defaultTabSelector();
        this.tabAttr = this.defaultTabAttr();
        this.prop = this.getAttribute("prop") || "";
        this.tabs = this.querySelectorAll(this.tabClass);
    }
    defaultTabSelector() {
        return ".tab";
    }
    defaultTabAttr() {
        return "tab";
    }
    connectedCallback() {
        (0, _functionsJs.xf).sub(`db:${this.prop}`, this.onUpdate.bind(this));
    }
    disconnectedCallback() {
        document.removeEventListener(`db:${this.prop}`, this.onUpdate);
    }
    onUpdate(param) {
        this.tabs.forEach((tab)=>{
            if (this.getId(tab) === param) tab.classList.add("active");
            else tab.classList.remove("active");
        });
    }
    getId(tab) {
        return tab.getAttribute(this.tabAttr);
    }
}
customElements.define("tab-btn", TabBtn);
customElements.define("tab-group", TabGroup);
class PageBtn extends TabBtn {
}
class PageGroup extends TabGroup {
    defaultTabSelector() {
        return ".page";
    }
    defaultTabAttr() {
        return "page";
    }
}
customElements.define("page-btn", PageBtn);
customElements.define("page-group", PageGroup);

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QLVe":[function(require,module,exports) {
var _functionsJs = require("../functions.js");
var _modelsJs = require("../models/models.js");
var _workoutGraphJs = require("./workout-graph.js");
const radioOff = `
        <svg class="radio radio-off" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path class="path" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12
                    2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>`;
const radioOn = `
        <svg class="radio radio-on" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path class="path" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0
                    18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            <circle class="circle" cx="12" cy="12" r="5"/>
        </svg>`;
const removeBtn = `
        <svg class="workout--remove control--btn--icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/>
        </svg>
`;
const options = `
        <svg class="workout--options-btn control--btn--icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
        </svg>`;
function workoutTemplate(workout) {
    let duration = "";
    if (workout.meta.duration) duration = `${Math.round(workout.meta.duration / 60)} min`;
    if (workout.meta.distance) duration = `${(workout.meta.distance / 1000).toFixed(2)} km`;
    return `<li is="workout-item" class='workout cf' id="${workout.id}" metric="ftp">
                <div class="workout--info">
                    <div class="workout--short-info">
                        <div class="workout--summary">
                            <div class="workout--name">${workout.meta.name}</div>
                            <div class="workout--type">${workout.meta.category}</div>
                            <div class="workout--duration">${duration}</div>
                            <div class="workout--select" id="btn${workout.id}">${workout.selected ? radioOn : radioOff}
                            </div>
                            <div class="workout--options">${options}</div>
                        </div>
                    </div>
                    <div class="workout--full-info">
                        <div class="workout-list--graph-cont">${workout.graph}</div>
                        <div class="workout--description">${workout.meta.description}</div>
                    </div>
                </div>
                <div class="workout--actions">
                    <span class="workout--remove">Delete</span>
                </div>
            </li>`;
}
class WorkoutList extends HTMLUListElement {
    constructor(){
        super();
        this.state = [];
        this.ftp = 0;
        this.items = [];
        this.postInit();
        this.workout = {};
    }
    postInit() {
        return;
    }
    connectedCallback() {
        const self = this;
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        (0, _functionsJs.xf).sub(`db:workouts`, this.onWorkouts.bind(this), this.signal);
        (0, _functionsJs.xf).sub("db:workout", this.onWorkout.bind(this), this.signal); // ?
        (0, _functionsJs.xf).sub(`db:ftp`, this.onFTP.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    getWidth() {
        return window.innerWidth;
    }
    onWorkout(value) {
        this.workout = value;
    }
    onFTP(value) {
        if (!(0, _functionsJs.equals)(value, this.ftp)) {
            this.ftp = value;
            if (!(0, _functionsJs.empty)(this.state)) this.render();
        }
    }
    onWorkouts(value) {
        this.state = value;
        this.render();
    }
    getViewPort() {
        const self = this;
        const $el = document.querySelector("#workouts-page");
        const fontSize = parseInt(window.getComputedStyle($el).getPropertyValue("font-size"));
        const em = 8;
        const width = self.getWidth();
        const height = fontSize * em;
        const aspectRatio = width / height;
        return {
            height,
            width,
            aspectRatio
        };
    }
    stateToHtml(state, ftp, selectedWorkout) {
        const self = this;
        const viewPort = this.getViewPort();
        return state.reduce((acc, workout, i)=>{
            let graph = "";
            if ((0, _functionsJs.exists)(workout.intervals)) graph = (0, _workoutGraphJs.intervalsToGraph)(workout, ftp, viewPort);
            else graph = (0, _workoutGraphJs.courseToGraph)(workout, viewPort);
            const selected = (0, _functionsJs.equals)(workout.id, selectedWorkout.id);
            workout = Object.assign(workout, {
                graph: graph,
                selected: selected
            });
            return acc + workoutTemplate(workout);
        }, "");
    }
    render() {
        this.innerHTML = this.stateToHtml(this.state, this.ftp, this.workout);
    }
}
class WorkoutListItem extends HTMLLIElement {
    constructor(){
        super();
        this.state = "";
        this.postInit();
        this.isExpanded = false;
        this.isSelected = false;
        this.optionsActive = false;
    }
    postInit() {
        return;
    }
    connectedCallback() {
        const self = this;
        this.infoCont = this.querySelector(".workout--info");
        this.summary = this.querySelector(".workout--summary");
        this.description = this.querySelector(".workout--full-info");
        this.selectBtn = this.querySelector(".workout--select");
        this.optionsBtn = this.querySelector(".workout--options");
        this.removeBtn = this.querySelector(".workout--remove");
        this.indicator = this.selectBtn;
        this.id = this.getAttribute("id");
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.debounced = {
            onWindowResize: (0, _functionsJs.debounce)(self.onWindowResize.bind(this), 300, {
                trailing: true,
                leading: false
            })
        };
        this.dom = {};
        this.dom.info = this.querySelector("#graph--info--cont");
        this.dom.cont = this.querySelector(".workout-list--graph-cont");
        this.viewPort = this.getViewPort();
        (0, _functionsJs.xf).sub("db:workout", this.onWorkout.bind(this), this.signal);
        this.summary.addEventListener("pointerup", this.toggleExpand.bind(this), this.signal);
        this.optionsBtn.addEventListener("pointerup", this.toggleOptions.bind(this), this.signal);
        this.selectBtn.addEventListener("pointerup", this.onRadio.bind(this), this.signal);
        this.removeBtn.addEventListener("pointerup", this.onRemove.bind(this), this.signal);
        this.addEventListener("mouseover", this.onHover.bind(this), this.signal);
        this.addEventListener("mouseout", this.onMouseOut.bind(this), this.signal);
        window.addEventListener("resize", this.debounced.onWindowResize.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    toggleExpand(e) {
        if (e.target.classList.contains("workout--options")) return;
        if (this.isExpanded) this.collapse();
        else this.expand();
    }
    expand() {
        this.description.style.display = "block";
        this.isExpanded = true;
    }
    collapse() {
        this.description.style.display = "none";
        this.isExpanded = false;
    }
    toggleSelect(id) {
        if ((0, _functionsJs.equals)(this.id, id)) {
            if (!this.isSelected) {
                this.select();
                this.expand();
            }
        } else this.diselect();
    }
    select() {
        this.indicator.innerHTML = radioOn;
        this.isSelected = true;
    }
    diselect() {
        this.indicator.innerHTML = radioOff;
        this.isSelected = false;
    }
    toggleOptions() {
        if (this.optionsActive) this.hideOptions();
        else this.showOptions();
    }
    showOptions() {
        this.infoCont.classList.remove("options-hide");
        this.infoCont.classList.add("options-show");
        this.optionsActive = true;
    }
    hideOptions() {
        this.infoCont.classList.remove("options-show");
        this.infoCont.classList.add("options-hide");
        this.optionsActive = false;
    }
    onWorkout(workout) {
        this.workout = workout;
        this.toggleSelect(workout.id);
    }
    onRadio(e) {
        e.stopPropagation();
        (0, _functionsJs.xf).dispatch("ui:workout:select", this.id);
    }
    onRemove(e) {
        console.log(`:ui :workout :remove :id '${this.id}'`);
        (0, _functionsJs.xf).dispatch("ui:workout:remove", this.id);
    }
    onUpdate(value) {
        if (!(0, _functionsJs.equals)(value, this.state)) {
            this.state = value;
            this.render();
        }
    }
    onHover(e) {
        const self = this;
        const target = this.querySelector(".graph--bar:hover");
        if ((0, _functionsJs.exists)(target)) {
            const power = target.getAttribute("power");
            const cadence = target.getAttribute("cadence");
            const slope = target.getAttribute("slope");
            const duration = target.getAttribute("duration");
            const distance = target.getAttribute("distance");
            const intervalRect = target.getBoundingClientRect();
            this.viewPort = this.getViewPort(); // move to more sensible event
            this.renderInfo({
                power,
                cadence,
                slope,
                duration,
                distance,
                intervalRect,
                contRect: self.viewPort,
                dom: self.dom
            });
        }
    }
    onMouseOut(e) {
        this.dom.info.style.display = "none";
    }
    getViewPort() {
        const rect = this.dom.cont.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
            left: rect.left,
            aspectRatio: rect.width / rect.height
        };
    }
    onWindowResize(e) {
        this.viewPort = this.getViewPort();
    }
    render() {}
    renderInfo(args = {}) {
        (0, _workoutGraphJs.renderInfo)(args);
    }
}
customElements.define("workout-list", WorkoutList, {
    extends: "ul"
});
customElements.define("workout-item", WorkoutListItem, {
    extends: "li"
});

},{"../functions.js":"2jd1e","../models/models.js":"hfV5L","./workout-graph.js":"9v2dF"}],"9v2dF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WorkoutGraph", ()=>WorkoutGraph);
parcelHelpers.export(exports, "intervalsToGraph", ()=>intervalsToGraph);
parcelHelpers.export(exports, "courseToGraph", ()=>courseToGraph);
parcelHelpers.export(exports, "renderInfo", ()=>renderInfo);
var _functionsJs = require("../functions.js");
var _utilsJs = require("../utils.js");
var _modelsJs = require("../models/models.js");
var _graphJs = require("./graph.js");
function powerToHeight(power, powerMax, viewPort) {
    const height = (0, _utilsJs.translate)(power, 0, powerMax, 0, viewPort.height * 0.90);
    if (height < viewPort.height * 0.10) return viewPort.height * 0.14;
    return height;
}
function intervalToWidth(intervalDuration, totalDuration, totalWidth) {
    return (0, _functionsJs.clamp)(1, totalDuration, (0, _utilsJs.translate)(intervalDuration, 0, totalDuration, 0, totalWidth));
}
function intervalsToMaxPower(intervals, ftp) {
    return intervals.reduce((highest, interval)=>{
        interval.steps.forEach((step)=>{
            const power = (0, _modelsJs.models).ftp.toAbsolute(step.power, ftp);
            if (power > highest) highest = power;
        });
        return highest;
    }, ftp * 1.6);
}
function Interval(acc, interval, width, ftp, powerMax, viewPort) {
    const stepsLength = interval.steps.length;
    return acc + interval.steps.reduce((a, step)=>{
        const power = (0, _modelsJs.models).ftp.toAbsolute(step.power, ftp) ?? 0;
        const cadence = step.cadence;
        const slope = step.slope;
        const duration = step.duration;
        const width = 100 / stepsLength;
        const height = powerToHeight(power, powerMax, viewPort);
        const zone = (0, _modelsJs.models).ftp.powerToZone(power, ftp).name;
        const infoTime = (0, _utilsJs.formatTime)({
            value: duration,
            format: "mm:ss"
        });
        const powerAttr = (0, _functionsJs.exists)(power) ? `power="${power}"` : "";
        const cadenceAttr = (0, _functionsJs.exists)(cadence) ? `cadence="${cadence}"` : "";
        const slopeAttr = (0, _functionsJs.exists)(slope) ? `slope="${slope}"` : "";
        const durationAttr = (0, _functionsJs.exists)(duration) ? `duration="${infoTime}"` : "";
        return a + `<div class="graph--bar zone-${zone}" style="height: ${height}px; width: ${width}%" ${powerAttr} ${cadenceAttr} ${slopeAttr} ${durationAttr}></div>`;
    }, `<div class="graph--bar-group" style="width: ${width}px;">`) + `</div>`;
}
function intervalsToGraph(workout, ftp, viewPort) {
    const totalWidth = viewPort.width;
    const intervals = workout.intervals;
    const totalDuration = workout.meta.duration;
    const maxPower = intervalsToMaxPower(intervals, ftp);
    return intervals.reduce((acc, interval)=>{
        let width = 1;
        if ((0, _functionsJs.exists)(interval.duration)) {
            width = intervalToWidth(interval.duration, totalDuration, totalWidth);
            return Interval(acc, interval, width, ftp, maxPower, viewPort);
        }
        return "";
    }, '<div id="graph--info--cont"></div>');
}
function renderInfo(args = {}) {
    const power = (0, _functionsJs.exists)(args.power) ? `${args.power}W ` : "";
    const cadence = (0, _functionsJs.exists)(args.cadence) ? `${args.cadence}rpm ` : "";
    const slope = (0, _functionsJs.exists)(args.slope) ? `${(0, _functionsJs.toFixed)(args.slope, 2)}%` : "";
    const duration = (0, _functionsJs.exists)(args.duration) ? `${args.duration}min ` : "";
    const distance = (0, _functionsJs.exists)(args.distance) ? `${args.distance}m ` : "";
    const dom = args.dom;
    const intervalLeft = args.intervalRect.left;
    const contLeft = args.contRect.left;
    const contWidth = args.contRect.width;
    const left = intervalLeft - contLeft;
    const bottom = args.intervalRect.height;
    dom.info.style.display = "block";
    dom.info.innerHTML = `<div>${power}</div><div>${cadence}</div><div>${slope}</div><div class="graph--info--time">${duration}</div>`;
    const width = dom.info.getBoundingClientRect().width;
    const height = dom.info.getBoundingClientRect().height;
    const minHeight = bottom + height + 40; // fix 40
    dom.info.style.left = `min(${contWidth}px - ${width}px, ${left}px)`;
    if (window.innerHeight > minHeight) dom.info.style.bottom = bottom;
    else dom.info.style.bottom = bottom - (minHeight - window.innerHeight);
}
class WorkoutGraph extends HTMLElement {
    constructor(){
        super();
        this.workout = {};
        this.workoutStatus = "stopped";
        this.metricValue = 0;
        this.index = 0;
        this.minHeight = 30;
        this.type = "workout";
    }
    connectedCallback() {
        const self = this;
        this.dom = {};
        this.viewPort = this.getViewPort();
        this.abortController = new AbortController();
        this.signal = {
            signal: self.abortController.signal
        };
        this.debounced = {
            onWindowResize: (0, _functionsJs.debounce)(self.onWindowResize.bind(this), 300, {
                trailing: true,
                leading: false
            })
        };
        (0, _functionsJs.xf).sub(`db:workout`, this.onWorkout.bind(this), this.signal);
        (0, _functionsJs.xf).sub(`db:ftp`, this.onFTP.bind(this), this.signal);
        (0, _functionsJs.xf).sub("db:intervalIndex", this.onIntervalIndex.bind(this), this.signal);
        (0, _functionsJs.xf).sub("db:distance", this.onDistance.bind(this), this.signal);
        (0, _functionsJs.xf).sub("db:page", this.onPage.bind(this), this.signal);
        (0, _functionsJs.xf).sub("db:lapTime", this.onLapTime.bind(this), this.signal);
        (0, _functionsJs.xf).sub("db:workoutStatus", this.onWorkoutStatus.bind(this), this.signal);
        this.addEventListener("mouseover", this.onHover.bind(this), this.signal);
        this.addEventListener("mouseout", this.onMouseOut.bind(this), this.signal);
        window.addEventListener("resize", this.debounced.onWindowResize.bind(this), this.signal);
    }
    disconnectedCallback() {
        this.abortController.abort();
    }
    getViewPort() {
        const rect = this.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
            left: rect.left,
            aspectRatio: rect.width / rect.height
        };
    }
    onFTP(value) {
        this.ftp = value;
        if ((0, _functionsJs.exists)(this.workout.intervals)) this.render();
    }
    onPage(page) {
        if ((0, _functionsJs.equals)(page, "home")) {
            const viewPort = this.getViewPort();
            this.viewPort = viewPort;
            this.render();
        }
    }
    onWindowResize(e) {
        const viewPort = this.getViewPort();
        if ((0, _functionsJs.equals)(viewPort.width, 0)) return;
        this.viewPort = viewPort;
        this.render();
    }
    onHover(e) {
        const self = this;
        const target = this.querySelector(".graph--bar:hover");
        if ((0, _functionsJs.exists)(target)) {
            const power = target.getAttribute("power");
            const cadence = target.getAttribute("cadence");
            const slope = target.getAttribute("slope");
            const duration = target.getAttribute("duration");
            const distance = target.getAttribute("distance");
            const intervalRect = target.getBoundingClientRect();
            this.renderInfo({
                power,
                cadence,
                slope,
                duration,
                distance,
                intervalRect,
                contRect: self.viewPort,
                dom: self.dom
            });
        }
    }
    onMouseOut(e) {
        this.dom.info.style.display = "none";
    }
    onWorkout(value) {
        this.workout = value; // this.workout = Object.assign({}, value);
        if ((0, _functionsJs.exists)(value.intervals)) this.type = "workout";
        if ((0, _functionsJs.exists)(value.points)) this.type = "course";
        if (!(0, _functionsJs.equals)(this.viewPort.width, 0)) this.render();
    }
    onWorkoutStatus(value) {
        this.workoutStatus = value;
    }
    onIntervalIndex(index) {
        const self = this;
        this.index = index;
        this.progress({
            index: self.index,
            dom: self.dom,
            parent: self,
            lapTime: self.lapTime
        });
    }
    onDistance(distance) {
        const self = this;
        if ((0, _functionsJs.exists)(this.workout?.points)) {
            const totalDistance = this.workout.meta.distance;
            const $dom = self.dom;
            const $parent = self;
            const height = $parent.getBoundingClientRect().height;
            const width = $parent.getBoundingClientRect().width;
            const left = (0, _utilsJs.translate)(distance, 0, totalDistance, 0, window.innerWidth);
            $dom.active.style.left = `${left % width}px`;
            $dom.active.style.width = `2px`;
            $dom.active.style.height = `${height}px`;
        }
        return;
    }
    onLapTime(lapTime) {
        const self = this;
        this.lapTime = lapTime;
        this.progress({
            index: self.index,
            dom: self.dom,
            parent: self,
            lapTime: self.lapTime
        });
    }
    progress(args = {}) {
        if (this.workoutStatus === "done") return;
        const index = args.index ?? 0;
        const $dom = args.dom;
        const $parent = args.parent;
        const rect = $dom.intervals[index].getBoundingClientRect();
        const left = rect.left - $parent.getBoundingClientRect().left;
        let lapTime = args.lapTime;
        if ((0, _functionsJs.equals)("course", this.type) && !(0, _functionsJs.exists)(lapTime)) lapTime = this.workout.pointsSimplified[index].duration;
        else lapTime = args.lapTime ?? this.workout.intervals[index].duration;
        let lapDuration = (0, _functionsJs.equals)(this.type, "course") ? this.workout.pointsSimplified[index].duration : this.workout.intervals[index].duration;
        const lapPercentageComplete = 1 - lapTime / lapDuration;
        $dom.active.style.left = `${left}px`;
        $dom.active.style.width = `${rect.width}px`;
        $dom.active.style.height = `${$parent.getBoundingClientRect().height}px`;
        $dom.progress.style.width = `${left + rect.width * lapPercentageComplete}px`;
    }
    render() {
        const self = this;
        const progress = `<div id="progress" class="progress"></div><div id="progress-active"></div>`;
        if ((0, _functionsJs.equals)(this.type, "workout")) {
            this.innerHTML = progress + intervalsToGraph(this.workout, this.ftp, this.viewPort);
            this.dom.info = this.querySelector("#graph--info--cont");
            this.dom.progress = this.querySelector("#progress");
            this.dom.active = this.querySelector("#progress-active");
            this.dom.intervals = this.querySelectorAll(".graph--bar-group");
            this.dom.steps = this.querySelectorAll(".graph--bar");
            this.progress({
                index: self.index,
                dom: self.dom,
                parent: self,
                lapTime: self.lapTime
            });
        }
        if ((0, _functionsJs.equals)(this.type, "course")) {
            this.innerHTML = progress + courseToGraph(this.workout, this.viewPort);
            this.dom.info = this.querySelector("#graph--info--cont");
            this.dom.progress = this.querySelector("#progress");
            this.dom.active = this.querySelector("#progress-active");
        }
    }
    renderInfo(args = {}) {
        renderInfo(args);
    }
}
customElements.define("workout-graph", WorkoutGraph);
function Segment(points, prop) {
    return points.reduce((acc, point, i)=>{
        const value = point[prop];
        if (value > acc.max) acc.max = value;
        if (value < acc.min) acc.min = value;
        if ((0, _functionsJs.equals)(i, 0)) {
            acc.min = value;
            acc.start = value;
        }
        if ((0, _functionsJs.equals)(i, points.length - 1)) acc.end = value;
        return acc;
    }, {
        min: 0,
        max: 0,
        start: 0,
        end: 0
    });
}
function scale(value, max = 100) {
    return 100 * (value / max);
}
function courseToGraph(course, viewPort) {
    const altitudeSpec = Segment(course.points, "y");
    const distanceTotal = course.meta.distance;
    const aspectRatio = viewPort.aspectRatio;
    const yOffset = Math.min(altitudeSpec.min, altitudeSpec.start, altitudeSpec.end);
    const yMax = altitudeSpec.max - altitudeSpec.min;
    const yScale = 1 / (aspectRatio * yMax / distanceTotal);
    const flatness = altitudeSpec.max - altitudeSpec.min;
    const altitudeScale = yScale * (flatness < 100 ? 0.2 : 0.7);
    const viewBox = {
        width: distanceTotal,
        height: yMax
    };
    // console.table({distanceTotal, yMax, aspectRatio, yScale, flatness, altitudeScale, altitudeSpec});
    const track = course.pointsSimplified.reduce((acc, p, i, xs)=>{
        const color = (0, _graphJs.g).slopeToColor(p.slope);
        const px1 = p.x;
        const px2 = xs[i + 1]?.x ?? px1;
        const py1 = p.y;
        const py2 = xs[i + 1]?.y ?? py1;
        const x1 = px1;
        const y1 = yMax;
        const x2 = px1;
        const y2 = yMax - (py1 - yOffset) * altitudeScale;
        const x3 = px2;
        const y3 = yMax - (py2 - yOffset) * altitudeScale;
        const x4 = px2;
        const y4 = yMax;
        return acc + `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" stroke="none" fill="${color}" class="graph--bar" index="${i}" slope="${p.slope}" />`;
    }, ``);
    const display = `<altitude-value class="elevation--value altitude--value">${altitudeSpec.start ?? "--"}</altitude-value>
        <ascent-value class="elevation--value ascent--value">0.0</ascent-value>`;
    return `${display}<div id="graph--info--cont"></div><svg class="graph--bar-group" width="100%" height="100%" viewBox="0 0 ${viewBox.width} ${viewBox.height}" preserveAspectRatio="xMinYMax meet">${track}</svg>`;
}

},{"../functions.js":"2jd1e","../utils.js":"en4he","../models/models.js":"hfV5L","./graph.js":"3vp5k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fMaF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Watch", ()=>Watch);
var _functionsJs = require("../functions.js");
class Watch extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.dom = {
            start: document.querySelector("#watch-start"),
            pause: document.querySelector("#watch-pause"),
            lap: document.querySelector("#watch-lap"),
            stop: document.querySelector("#watch-stop"),
            save: document.querySelector("#activity-save")
        };
        this.dom.start.addEventListener("pointerup", this.onStart);
        this.dom.pause.addEventListener("pointerup", this.onPause);
        this.dom.lap.addEventListener("pointerup", this.onLap);
        this.dom.stop.addEventListener("pointerup", this.onStop);
        // this.dom.workout.addEventListener('pointerup', this.onWorkoutStart);
        this.dom.save.addEventListener(`pointerup`, this.onSave);
        this.renderInit(this.dom);
        (0, _functionsJs.xf).sub(`db:watchStatus`, this.onWatchStatus.bind(this));
        (0, _functionsJs.xf).sub(`db:workoutStatus`, this.onWorkoutStatus.bind(this));
    }
    disconnectedCallback() {
        this.dom.start.removeEventListener(`pointerup`, this.onStart);
        this.dom.pause.removeEventListener(`pointerup`, this.onPause);
        this.dom.lap.removeEventListener(`pointerup`, this.onLap);
        this.dom.stop.removeEventListener(`pointerup`, this.onStop);
        // this.dom.workout.removeEventListener(`pointerup`, this.onWorkoutStart);
        this.dom.save.removeEventListener(`pointerup`, this.onSave);
        document.removeEventListener(`db:watchStatus`, this.onWatchStatus);
        document.removeEventListener(`db:workoutStatus`, this.onWorkoutStatus);
    }
    onStart(e) {
        (0, _functionsJs.xf).dispatch("ui:watchStart");
        (0, _functionsJs.xf).dispatch("ui:workoutStart");
    }
    onPause(e) {
        (0, _functionsJs.xf).dispatch("ui:watchPause");
    }
    onLap(e) {
        (0, _functionsJs.xf).dispatch("ui:watchLap");
    }
    onStop(e) {
        (0, _functionsJs.xf).dispatch("ui:watchStop");
    }
    onSave(e) {
        (0, _functionsJs.xf).dispatch("ui:activity:save");
    }
    onWorkoutStart(e) {
        (0, _functionsJs.xf).dispatch("ui:workoutStart");
    }
    onWatchStatus(status) {
        if (status === "started") this.renderStarted(this.dom);
        if (status === "paused") this.renderPaused(this.dom);
        if (status === "stopped") this.renderStopped(this.dom);
    }
    onWorkoutStatus(status) {
        if (status === "started") this.renderWorkoutStarted(this.dom);
        status;
    }
    renderInit(dom) {
        dom.pause.style.display = "none";
        dom.stop.style.display = "none";
        dom.save.style.display = "none";
        dom.lap.style.display = "none";
    }
    renderStarted(dom) {
        dom.start.style.display = "none";
        dom.save.style.display = "none";
        dom.pause.style.display = "inline-block";
        dom.lap.style.display = "inline-block";
        dom.stop.style.display = "none";
    // dom.stop.style.display  = 'inline-block';
    }
    renderPaused(dom) {
        dom.pause.style.display = "none";
        dom.start.style.display = "inline-block";
        dom.stop.style.display = "inline-block";
    }
    renderStopped(dom) {
        dom.pause.style.display = "none";
        dom.lap.style.display = "none";
        dom.stop.style.display = "none";
        dom.save.style.display = "inline-block";
        // dom.workout.style.display = 'inline-block';
        dom.start.style.display = "inline-block";
    }
    renderWorkoutStarted(dom) {
    // dom.workout.style.display = 'none';
    }
}
customElements.define("watch-control", Watch);

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFCry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Request", ()=>Request);
var _functionsJs = require("../functions.js");
var _modelsJs = require("../models/models.js");
var _messageJs = require("../ant/message.js");
class Request extends HTMLElement {
    constructor(){
        super();
        this.state = {};
        this.list = this.querySelector("#request-popup-list");
        this.status = this.querySelector("#request-popup-status");
        this.cancelBtn = this.querySelector("#request-popup-cancel-btn");
        this.pairBtn = this.querySelector("#request-popup-pair-btn");
    }
    connectedCallback() {
        (0, _functionsJs.xf).sub(`db:antDeviceId`, this.onDeviceId.bind(this));
        (0, _functionsJs.xf).sub("db:antSearchList", this.onDeviceFound.bind(this));
        this.list.addEventListener("pointerup", this.onSelect.bind(this));
        (0, _functionsJs.xf).sub(`ant:search:started`, this.onSearchStarted.bind(this));
        (0, _functionsJs.xf).sub(`ant:search:stopped`, this.onSearchStopped.bind(this));
        (0, _functionsJs.xf).sub(`ant:request:pair`, this.onRequestPair.bind(this));
        (0, _functionsJs.xf).sub(`ant:request:cancel`, this.onRequestCancel.bind(this));
    }
    disconnectedCallback() {
        this.list.removeEventListener("pointerup", this.onSelect.bind(this));
        document.removeEventListener(`db:antDeviceId`, this.onDeviceId);
        document.removeEventListener(`db:antSearchList`, this.onDeviceId);
        document.removeEventListener(`ant:search:started`, this.onSearchStarted);
        document.removeEventListener(`ant:search:stopped`, this.onSearchStopped);
        document.removeEventListener(`ant:request:pair`, this.onSearchStarted);
        document.removeEventListener(`ant:request:cancel`, this.onSearchStopped);
    }
    onDeviceId(deviceId) {
        this.state.deviceId = deviceId;
    }
    onSearchStarted(e) {
        this.show();
    }
    onSearchStopped(e) {
        this.clear();
        this.hide();
    }
    onRequestPair() {
        if (!this.selected) return;
        this.clear();
        this.hide();
    }
    onRequestCancel() {
        this.clear();
        this.hide();
    }
    onDeviceFound(searchList) {
        if (!(0, _functionsJs.empty)(searchList)) this.add((0, _functionsJs.last)(searchList));
    }
    onSelect(e) {
        const el = e.target.closest(".device-chooser-item");
        const els = this.list.querySelectorAll(".device-chooser-item");
        if (el === undefined || el === null) return;
        if (el.id === undefined) return;
        const id = el.id;
        this.state.selected = id;
        els.forEach((el)=>el.style.backgroundColor = "#fff");
        el.style.backgroundColor = "#efefef";
        console.log(`:view :device-selected ${id}`);
        (0, _functionsJs.xf).dispatch(`ui:ant:request:selected`, id);
    }
    show() {
        this.style.display = "block";
    }
    hide() {
        this.style.display = "none";
    }
    clear() {
        this.list.innerHTML = ``;
    }
    add(device) {
        this.list.insertAdjacentHTML("beforeend", item(device));
    }
}
function item(args) {
    let deviceType = (0, _messageJs.utils).deviceTypeToString(args.deviceType);
    return `<div class="device-chooser-item" id="${args.deviceNumber}">
            <div class="device-connection-type t2">ANT+</div>
            <div class="device-number t3">${args.deviceNumber}</div>
            <div class="device-type t2">${deviceType}</div>
         </div>`;
}
customElements.define("request-popup", Request);

},{"../functions.js":"2jd1e","../models/models.js":"hfV5L","../ant/message.js":"Kbh45","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Kbh45":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "message", ()=>message);
parcelHelpers.export(exports, "Message", ()=>Message);
parcelHelpers.export(exports, "utils", ()=>utils);
var _functionsJs = require("../functions.js");
var _constantsJs = require("./constants.js");
function Message(args = {}) {
    const sync = (0, _constantsJs.values).sync;
    const id = (0, _constantsJs.ids)[(0, _functionsJs.existance)(args.id)];
    const fixedLength = 4;
    let _contentLength;
    let _totalLength;
    setLengths((0, _functionsJs.existance)(args.contentLength, 0));
    function getLength() {
        return _totalLength;
    }
    function setLength(length) {
        _totalLength = length;
        return _totalLength;
    }
    function getContentLength() {
        return _contentLength;
    }
    function setContentLength(length) {
        _contentLength = length;
        return _contentLength;
    }
    function calcLength(contentLength) {
        return fixedLength + contentLength;
    }
    function setLengths(contentLength) {
        const length = calcLength(contentLength);
        setContentLength(contentLength);
        setLength(length);
        return {
            length,
            contentLength
        };
    }
    function validate(dataview, check) {
        return (0, _functionsJs.equals)((0, _functionsJs.xor)(dataview, 0, -1), check);
    }
    return {
        sync,
        id,
        fixedLength,
        getContentLength,
        setContentLength,
        getLength,
        calcLength,
        setLengths,
        validate,
        xor: (0, _functionsJs.xor)
    };
}
// Config messages
function AssignChannel() {
    const extendedAssignment = {
        backgroundScanningEnable: 0x01,
        frequencyAgilityEnable: 0x04,
        fastChannelInitiationEnable: 0x10,
        asynchronousTransmissionEnable: 0x20
    };
    const defaults = {
        channelNumber: 0,
        channelType: (0, _constantsJs.channelTypes).slave.bidirectional,
        networkNumber: 0,
        extended: extendedAssignment.backgroundScanningEnable
    };
    const msg = Message({
        id: "assignChannel" // 66, 0x42
    });
    function contentLength(isExtended) {
        if (isExtended) return 4;
        return 3;
    }
    function encode(args = {}) {
        const { length } = msg.setLengths(contentLength((0, _functionsJs.exists)(args.extended)));
        const xorIndex = length - 1;
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const channelType = (0, _functionsJs.existance)(args.channelType, defaults.channelType);
        const networkNumber = (0, _functionsJs.existance)(args.networkNumber, defaults.networkNumber);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, channelType, true);
        view.setUint8(5, networkNumber, true);
        if ((0, _functionsJs.exists)(args.extended)) view.setUint8(6, args.extended, true);
        view.setUint8(xorIndex, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const contentLength = dataview.getUint8(1, true);
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const channeType = dataview.getUint8(4, true);
        const networkNumber = dataview.getUint8(5, true);
        const xorIndex = dataview.byteLength - 1;
        const check = dataview.getUint8(xorIndex, true);
        const valid = msg.validate(dataview, check);
        const res = {
            id,
            channelNumber,
            channeType,
            networkNumber,
            valid
        };
        let extended;
        if ((0, _functionsJs.equals)(contentLength, 4)) {
            extended = dataview.getUint8(6, true);
            res.extended = extended;
        }
        return res;
    }
    return Object.freeze({
        extendedAssignment,
        contentLength,
        encode,
        decode
    });
}
function UnassignChannel() {
    const defaults = {
        channelNumber: 0
    };
    const msg = Message({
        contentLength: 1,
        id: "unassignChannel" // 65, 0x41
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const check = dataview.getUint8(4, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function SetChannelId() {
    const defaults = {
        channelNumber: 0,
        deviceNumber: 0,
        deviceType: 0,
        transmissionType: 0
    };
    const msg = Message({
        contentLength: 5,
        id: "setChannelId"
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const deviceNumber = (0, _functionsJs.existance)(args.deviceNumber, defaults.deviceNumber);
        const deviceType = (0, _functionsJs.existance)(args.deviceType, defaults.deviceType);
        const transmissionType = (0, _functionsJs.existance)(args.transmissionType, defaults.transmissionType);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint16(4, deviceNumber, true);
        view.setUint8(6, deviceType, true);
        view.setUint8(7, transmissionType, true);
        view.setUint8(8, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const deviceNumber = dataview.getUint16(4, true);
        const deviceType = dataview.getUint8(6, true);
        const transmissionType = dataview.getUint8(7, true);
        const check = dataview.getUint8(8, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            deviceNumber,
            deviceType,
            transmissionType,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function SetChannelPeriod() {
    const defaults = {
        channelNumber: 0,
        channelPeriod: 8192 // (4Hz)
    };
    const msg = Message({
        contentLength: 3,
        id: "channelPeriod" // 67, 0x43
    });
    const length = msg.getLength();
    // The channel messaging period in seconds * 32768.
    // Maximum messaging period is ~2 seconds.
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const channelPeriod = (0, _functionsJs.existance)(args.channelPeriod, defaults.channelPeriod);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint16(4, channelPeriod, true);
        view.setUint8(6, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const channelPeriod = dataview.getUint16(4, true);
        const check = dataview.getUint8(6, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            channelPeriod,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function SetChannelFrequency() {
    const defaults = {
        channelNumber: 0,
        rfFrequency: 66
    };
    const msg = Message({
        contentLength: 2,
        id: "channelFrequency" // 69, 0x45
    });
    const length = msg.getLength();
    // ChannelFrequency = 2400 MHz + ChannelRFFrequencyNumber * 1.0 MHz
    // most ANT devices ara between 2450 MHz and 2457 MHz
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const rfFrequency = (0, _functionsJs.existance)(args.rfFrequency, defaults.rfFrequency);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, rfFrequency, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const rfFrequency = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            rfFrequency,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function SetNetworkKey() {
    const defaults = {
        networkKey: (0, _constantsJs.keys).public,
        networkNumber: 0
    };
    const networkKeyIndex = 4;
    const networkKeyLength = 8;
    const networkKeyIndexEnd = networkKeyIndex + networkKeyLength;
    const xorIndex = 12;
    const msg = Message({
        contentLength: 9,
        id: "setNetworkKey" // 70, 0x46
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const networkKey = (0, _functionsJs.existance)(args.networkKey, defaults.networkKey);
        const networkNumber = (0, _functionsJs.existance)(args.networkNumber, defaults.networkNumber);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        const uint8 = new Uint8Array(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, networkNumber, true);
        uint8.set(new Uint8Array(networkKey), networkKeyIndex);
        view.setUint8(xorIndex, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const networkNumber = dataview.getUint8(3, true);
        const array = (0, _functionsJs.dataviewToArray)(dataview);
        const networkKey = array.slice(networkKeyIndex, networkKeyIndexEnd);
        const check = dataview.getUint8(xorIndex, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            networkNumber,
            networkKey,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
// Control Messages
function ResetSystem() {
    const msg = Message({
        contentLength: 1,
        id: "resetSystem" // 74, 0x4A
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, 0, true);
        view.setUint8(4, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const check = dataview.getUint8(4, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function OpenChannel() {
    const defaults = {
        channelNumber: 0
    };
    const msg = Message({
        contentLength: 1,
        id: "openChannel" // 75, 0x4B
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const check = dataview.getUint8(4, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function CloseChannel() {
    const defaults = {
        channelNumber: 0
    };
    const msg = Message({
        contentLength: 1,
        id: "closeChannel" // 76, 0x4C
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const check = dataview.getUint8(4, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function RequestMessage(args = {}) {
    const defaults = {
        channelNumber: 0,
        subMessageId: false,
        requestedMessageId: (0, _functionsJs.existance)(args.requestedMessageId, (0, _constantsJs.ids).channelStatus)
    };
    const msg = Message({
        contentLength: 2,
        id: "requestMessage" // 77, 0x4D
    });
    const length = msg.getLength();
    function encode(args = {
        subMessageId: false
    }) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const subMessageId = (0, _functionsJs.existance)(args.subMessageId, defaults.subMessageId);
        const requestedMessageId = (0, _functionsJs.existance)(args.requestedMessageId, defaults.requestedMessageId);
        // it sends channelNumber or subMessageId if command is applicable for the whole system,
        // Example:
        // if requesting Advanced Burst Capabilities/Configuration,
        // instead of channel number, set to:
        // 0x00 – Request Advanced Burst Capabilities
        // 0x01 – Request Advanced Burst Current Configuration
        let param = channelNumber;
        if (subMessageId) param = subMessageId;
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, param, true);
        view.setUint8(4, requestedMessageId, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const param = dataview.getUint8(3, true);
        const requestedMessageId = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        const res = {
            id,
            param,
            requestedMessageId,
            valid
        };
        return res;
    }
    return Object.freeze({
        encode,
        decode
    });
}
function OpenRxScanMode() {
    const msg = Message({
        id: "openRxScanMode" // 91, 0x5B
    });
    function contentLength(args) {
        if ((0, _functionsJs.exists)(args.syncPackets)) return 2;
        return 1;
    }
    // syncPackets:
    // 0 – Default configuration.
    // 1 – Allow synchronous channel packets only.
    function encode(args = {}) {
        const syncPackets = args.syncPackets;
        const { length } = msg.setLengths(contentLength(args));
        const xorIndex = length - 1;
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, 0, true);
        if ((0, _functionsJs.exists)(syncPackets)) view.setUint8(4, syncPackets, true);
        view.setUint8(xorIndex, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const contentLength = dataview.getUint8(1, true);
        const id = dataview.getUint8(2, true);
        const xorIndex = dataview.byteLength - 1;
        const check = dataview.getUint8(xorIndex, true);
        const valid = msg.validate(dataview, check);
        let syncPackets;
        const res = {
            id,
            valid
        };
        if ((0, _functionsJs.equals)(contentLength, 2)) {
            syncPackets = dataview.getUint8(4, true);
            res.syncPackets = syncPackets;
        }
        return res;
    }
    return Object.freeze({
        encode,
        decode
    });
}
function Sleep() {
    const msg = Message({
        contentLength: 1,
        id: "sleepMessage" // 197, 0xC5
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, 0, true);
        view.setUint8(4, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const check = dataview.getUint8(4, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function SearchTimeout() {
    const defaults = {
        channelNumber: 0,
        searchTimeout: 10 // 10 * 2.5 seconds = 25 seconds
    };
    const msg = Message({
        contentLength: 2,
        id: "searchTimeout" // 68, 0x44
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const searchTimeout = (0, _functionsJs.existance)(args.searchTimeout, defaults.searchTimeout);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, searchTimeout, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const searchTimeout = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            searchTimeout,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function LowPrioritySearchTimeout() {
    const defaults = {
        channelNumber: 0,
        lowSearchTimeout: 2 // 2 * 2.5 seconds = 5 seconds, 255 is infinite
    };
    const msg = Message({
        contentLength: 2,
        id: "searchLowTimeout" // 99, 0x63
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const lowSearchTimeout = (0, _functionsJs.existance)(args.lowSearchTimeout, defaults.lowSearchTimeout);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, lowSearchTimeout, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const lowSearchTimeout = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            lowSearchTimeout,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function EnableExtRxMessages() {
    const defaults = {
        enable: 1 // 0 disable, 1 enable
    };
    const msg = Message({
        contentLength: 2,
        id: "enableExtRx" // 102, 0x66
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const enable = (0, _functionsJs.existance)(args.enable, defaults.enable);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, 0, true);
        view.setUint8(4, enable, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const enable = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            enable,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function LibConfig() {
    const defaults = {
        config: (0, _constantsJs.values).libConfig.disabled
    };
    const msg = Message({
        contentLength: 2,
        id: "libConfig" // 110, 0x6E
    });
    const length = msg.getLength();
    function encode(args = {}) {
        const config = (0, _functionsJs.existance)(args.config, defaults.config);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, 0, true);
        view.setUint8(4, config, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const config = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            config,
            valid
        };
    }
    return Object.freeze({
        values: (0, _constantsJs.values),
        encode,
        decode
    });
}
function Data(args = {}) {
    const defaults = {
        channelNumber: 0,
        typeId: "broadcastData",
        payload: (length)=>new Uint8Array(new ArrayBuffer(length))
    };
    const payloadIndex = 4;
    const payloadLength = 8;
    const extendedDataIndex = payloadIndex + payloadLength;
    const flagIndex = 12;
    const typeId = (0, _functionsJs.existance)(args.typeId, defaults.typeId);
    function contentLength(args = {}) {
        if ((0, _functionsJs.exists)(args.extended)) return 9 + args.extended.byteLength;
        return 9;
    }
    const msg = Message({
        id: typeId
    });
    // Configuring extended data with:
    // - EnableExtendedMessages, sends ChannelId (Device number, Device Type, Transmission Type)
    // - LibConfig, sends ChannelId, RSSI and timestamp
    function encode(args = {}) {
        const { length } = msg.setLengths(contentLength(args));
        const xorIndex = length - 1;
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const payload = (0, _functionsJs.existance)(args.payload, defaults.payload(0));
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        const uint8 = new Uint8Array(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        uint8.set(new Uint8Array(payload.buffer), payloadIndex);
        if ((0, _functionsJs.exists)(args.extended)) uint8.set(new Uint8Array(args.extended.buffer), extendedDataIndex);
        view.setUint8(xorIndex, msg.xor(view), true);
        return view;
    }
    function decode(dataview, payloadDecoder) {
        const contentLength = dataview.getUint8(1, true);
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const xorIndex = dataview.byteLength - 1;
        const check = dataview.getUint8(xorIndex, true);
        const valid = msg.validate(dataview, check);
        let payload = new DataView(new ArrayBuffer(contentLength - 1)); // must be dataview
        for(let i = 0; i < contentLength - 1; i++)payload.setUint8(i, dataview.getUint8(payloadIndex + i, true), true);
        if ((0, _functionsJs.exists)(payloadDecoder)) payload = payloadDecoder(payload);
        const res = {
            id,
            channelNumber,
            payload,
            valid
        };
        if (isExtended(dataview)) {
            const channelId = channelIdDecoder(dataview);
            res.channelId = channelId;
        }
        return res;
    }
    function channelIdDecoder(dataview) {
        const deviceNumber = dataview.getUint16(13, true);
        const deviceType = dataview.getUint8(15, true);
        const transmissionType = dataview.getUint8(16, true);
        return {
            deviceNumber,
            deviceType,
            transmissionType
        };
    }
    function isBroadcast(dataview) {
        return (0, _functionsJs.equals)(dataview.getUint8(2, true), (0, _constantsJs.ids).broadcastData);
    }
    function isAcknowledged(dataview) {
        return (0, _functionsJs.equals)(dataview.getUint8(2, true), (0, _constantsJs.ids).acknowledgedData);
    }
    function isExtended(dataview) {
        return dataview.byteLength > 13;
    }
    return Object.freeze({
        isBroadcast,
        isAcknowledged,
        isExtended,
        encode,
        decode,
        channelIdDecoder
    });
}
function BroadcastData() {
    return Data({
        typeId: "broadcastData"
    }); // 78, 0x4E
}
function AcknowledgedData() {
    return Data({
        typeId: "acknowledgedData"
    }); // 79, 0x4F
}
function BurstTransferData() {
    function encode() {
        throw new Error("not implemented");
    }
    function decode() {
        throw new Error("not implemented");
    }
    return Object.freeze({
        encode,
        decode
    });
}
function AdvancedBurstData() {
    function encode() {
        throw new Error("not implemented");
    }
    return Object.freeze({
        encode
    });
}
function ChannelEvent() {
    const defaults = {
        channelNumber: 0
    };
    const msg = Message({
        id: "channelEvent"
    });
    const encryptionIdLength = 4;
    const userInfoStringLength = 19;
    function calcContentLength(args) {
        let length = 3;
        if ((0, _functionsJs.exists)(args.encryptionId)) length += encryptionIdLength;
        if ((0, _functionsJs.exists)(args.userInfoString)) length += userInfoStringLength;
        return length;
    }
    function encode(args) {
        const contentLength = calcContentLength(args);
        const { length } = msg.setLengths(contentLength);
        const xorIndex = length - 1;
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        const uint8 = new Uint8Array(buffer);
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const eventCode = (0, _functionsJs.existance)(args.eventCode);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, 1, true);
        view.setUint8(5, eventCode, true);
        if ((0, _functionsJs.exists)(args.encryptionId)) {
            view.setUint32(6, args.encryptionId, true);
            if ((0, _functionsJs.exists)(args.userInfoString)) uint8.set(args.userInfoString, 10);
        }
        view.setUint8(xorIndex, (0, _functionsJs.xor)(view), true);
        return view;
    }
    function decode(dataview) {
        const sync = dataview.getUint8(0, true);
        const contentLength = dataview.getUint8(1, true);
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const eventCode = dataview.getUint8(5, true);
        const { length } = msg.setLengths(contentLength);
        const xorIndex = length - 1;
        const uint8 = new Uint8Array(dataview.buffer);
        const check = dataview.getUint8(xorIndex, true);
        const valid = msg.validate(dataview, check);
        let encryptionId;
        let userInfoString;
        const res = {
            id,
            channelNumber,
            eventCode,
            valid
        };
        if (length > 7) {
            encryptionId = dataview.getUint32(6, true);
            res.encryptionId = encryptionId;
            if (length > 7 + encryptionIdLength) {
                userInfoString = uint8.subarray(10, 10 + userInfoStringLength);
                res.userInfoString = userInfoString;
            }
        }
        return res;
    }
    function isEvent(dataview) {
        return (0, _functionsJs.equals)(dataview.getUint8(2, true), (0, _constantsJs.ids).channelResponse) && (0, _functionsJs.equals)(dataview.getUint8(4, true), 1);
    }
    return Object.freeze({
        isEvent,
        encode,
        decode
    });
}
function ChannelResponse() {
    const defaults = {
        channelNumber: 0
    };
    const msg = Message({
        contentLength: 3,
        id: "channelResponse"
    });
    function encode(args) {
        const buffer = new ArrayBuffer(msg.getLength());
        const view = new DataView(buffer);
        const channelNumber = (0, _functionsJs.existance)(args.channelNumber, defaults.channelNumber);
        const initMsgId = (0, _functionsJs.existance)(args.initMsgId);
        const responseCode = (0, _functionsJs.existance)(args.responseCode);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, initMsgId, true);
        view.setUint8(5, responseCode, true);
        view.setUint8(6, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const sync = dataview.getUint8(0, true);
        const contentLength = dataview.getUint8(1, true);
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const initMsgId = dataview.getUint8(4, true);
        const responseCode = dataview.getUint8(5, true);
        const check = dataview.getUint8(6, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            initMsgId,
            responseCode,
            valid
        };
    }
    function isResponse(dataview) {
        return (0, _functionsJs.equals)(dataview.getUint8(2, true), (0, _constantsJs.ids).channelResponse) && !(0, _functionsJs.equals)(dataview.getUint8(4, true), 1);
    }
    return Object.freeze({
        isResponse,
        encode,
        decode
    });
}
function ChannelStatus() {
    const defaults = {
        channelNumber: 0,
        channelState: 0,
        networkNumber: 0,
        channelType: 0
    };
    const msg = Message({
        contentLength: 2,
        id: "channelStatus"
    });
    const channelStates = {
        unassigned: 0,
        assigned: 1,
        searching: 2,
        tracking: 3
    };
    function encodeChannelStatus(args) {
        let status = 0;
        status |= (0, _functionsJs.existance)(args.channelState, defaults.channelState);
        status |= (0, _functionsJs.existance)(args.networkNumber, defaults.networkNumber) << 2;
        status |= (0, _functionsJs.existance)(args.channelType, defaults.channelType) << 4;
        return status;
    }
    function encode(args = {}) {
        const buffer = new ArrayBuffer(msg.getLength());
        const view = new DataView(buffer);
        const channelNumber = args.channelNumber || defaults.channelNumber;
        const status = encodeChannelStatus(args);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, channelNumber, true);
        view.setUint8(4, status, true);
        view.setUint8(5, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const sync = dataview.getUint8(0, true);
        const contentLength = dataview.getUint8(1, true);
        const id = dataview.getUint8(2, true);
        const channelNumber = dataview.getUint8(3, true);
        const status = dataview.getUint8(4, true);
        const check = dataview.getUint8(5, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            channelNumber,
            status,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function ChannelId() {
    return SetChannelId();
}
function Capabilities() {
    const defaults = {
        maxChannels: 0,
        maxNetworks: 0,
        maxSensRcore: 0
    };
    const msg = Message({
        contentLength: 8,
        id: "capabilities"
    });
    const length = msg.getLength();
    function encodeStandardOptions(args) {
        let options = 0;
        if (args.no_receive_channels) options |= 1;
        if (args.no_transmit_channels) options |= 2;
        if (args.no_receive_messages) options |= 4;
        if (args.no_transmit_messages) options |= 8;
        if (args.no_ackd_messages) options |= 16;
        if (args.no_burst_messages) options |= 32;
        return options;
    }
    function decodeStandardOptions(bitField) {
        return {
            no_receive_channels: (0, _functionsJs.nthBitToBool)(bitField, 0),
            no_transmit_channels: (0, _functionsJs.nthBitToBool)(bitField, 1),
            no_receive_messages: (0, _functionsJs.nthBitToBool)(bitField, 2),
            no_transmit_messages: (0, _functionsJs.nthBitToBool)(bitField, 3),
            no_ackd_messages: (0, _functionsJs.nthBitToBool)(bitField, 4),
            no_burst_messages: (0, _functionsJs.nthBitToBool)(bitField, 5)
        };
    }
    function encodeAdvancedOptions(args) {
        let options = 0;
        if (args.network_enabled) options |= 2;
        if (args.serial_number_enabled) options |= 8;
        if (args.per_channel_tx_power_enabled) options |= 16;
        if (args.low_priority_search_enabled) options |= 32;
        if (args.script_enabled) options |= 64;
        if (args.search_list_enabled) options |= 128;
        return options;
    }
    function decodeAdvancedOptions(bitField) {
        return {
            network_enabled: (0, _functionsJs.nthBitToBool)(bitField, 1),
            serial_number_enabled: (0, _functionsJs.nthBitToBool)(bitField, 3),
            per_channel_tx_power_enabled: (0, _functionsJs.nthBitToBool)(bitField, 4),
            low_priority_search_enabled: (0, _functionsJs.nthBitToBool)(bitField, 5),
            script_enabled: (0, _functionsJs.nthBitToBool)(bitField, 6),
            search_list_enabled: (0, _functionsJs.nthBitToBool)(bitField, 7)
        };
    }
    function encodeAdvancedOptions2(args) {
        let options = 0;
        if (args.led_enabled) options |= 1;
        if (args.ext_message_enabled) options |= 2;
        if (args.scan_mode_enabled) options |= 4;
        if (args.prox_search_enabled) options |= 16;
        if (args.ext_assign_enabled) options |= 32;
        if (args.fs_antfs_enabled) options |= 64;
        if (args.fit1_enabled) options |= 128;
        return options;
    }
    function decodeAdvancedOptions2(bitField) {
        return {
            led_enabled: (0, _functionsJs.nthBitToBool)(bitField, 0),
            ext_message_enabled: (0, _functionsJs.nthBitToBool)(bitField, 1),
            scan_mode_enabled: (0, _functionsJs.nthBitToBool)(bitField, 2),
            prox_search_enabled: (0, _functionsJs.nthBitToBool)(bitField, 4),
            ext_assign_enabled: (0, _functionsJs.nthBitToBool)(bitField, 5),
            fs_antfs_enabled: (0, _functionsJs.nthBitToBool)(bitField, 6),
            fit1_enabled: (0, _functionsJs.nthBitToBool)(bitField, 7)
        };
    }
    function encodeAdvancedOptions3(args) {
        let options = 0;
        if (args.advanced_burst_enabled) options |= 1;
        if (args.event_buffering_enabled) options |= 2;
        if (args.event_filtering_enabled) options |= 4;
        if (args.high_duty_search_enabled) options |= 8;
        if (args.search_sharing_enabled) options |= 16;
        if (args.selective_data_updates_enabled) options |= 64;
        if (args.encrypted_channel_enabled) options |= 128;
        return options;
    }
    function decodeAdvancedOptions3(bitField) {
        return {
            advanced_burst_enabled: (0, _functionsJs.nthBitToBool)(bitField, 0),
            event_buffering_enabled: (0, _functionsJs.nthBitToBool)(bitField, 1),
            event_filtering_enabled: (0, _functionsJs.nthBitToBool)(bitField, 2),
            high_duty_search_enabled: (0, _functionsJs.nthBitToBool)(bitField, 3),
            search_sharing_enabled: (0, _functionsJs.nthBitToBool)(bitField, 4),
            selective_data_updates_enabled: (0, _functionsJs.nthBitToBool)(bitField, 6),
            encrypted_channel_enabled: (0, _functionsJs.nthBitToBool)(bitField, 7)
        };
    }
    function encodeAdvancedOptions4(args) {
        let options = 0;
        if (args.capabilities_rfactive_notification_enabled) options |= 1;
        return options;
    }
    function decodeAdvancedOptions4(bitField) {
        return {
            capabilities_rfactive_notification_enabled: (0, _functionsJs.nthBitToBool)(bitField, 0)
        };
    }
    function encode(args = {}) {
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        const maxChannels = (0, _functionsJs.existance)(args.maxChannels, defaults.maxChannels);
        const maxNetworks = (0, _functionsJs.existance)(args.maxNetworks, defaults.maxNetworks);
        const standard = encodeStandardOptions(args);
        const advanced = encodeAdvancedOptions(args);
        const advanced2 = encodeAdvancedOptions2(args);
        const maxSensRcore = (0, _functionsJs.existance)(args.maxSensRcore, defaults.maxSensRcore);
        const advanced3 = encodeAdvancedOptions3(args);
        const advanced4 = encodeAdvancedOptions4(args);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint8(3, maxChannels, true);
        view.setUint8(4, maxNetworks, true);
        view.setUint8(5, standard, true);
        view.setUint8(6, advanced, true);
        view.setUint8(7, advanced2, true);
        view.setUint8(8, maxSensRcore, true);
        view.setUint8(9, advanced3, true);
        view.setUint8(10, advanced4, true);
        view.setUint8(11, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const maxChannels = dataview.getUint8(3, true);
        const maxNetworks = dataview.getUint8(4, true);
        const standard = decodeStandardOptions(dataview.getUint8(5, true));
        const advanced = decodeAdvancedOptions(dataview.getUint8(6, true));
        const advanced2 = decodeAdvancedOptions2(dataview.getUint8(7, true));
        const maxSensRcore = dataview.getUint8(8, true);
        const advanced3 = decodeAdvancedOptions3(dataview.getUint8(9, true));
        const advanced4 = decodeAdvancedOptions4(dataview.getUint8(10, true));
        const check = dataview.getUint8(11, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            maxChannels,
            maxNetworks,
            ...standard,
            ...advanced,
            ...advanced2,
            maxSensRcore,
            ...advanced3,
            ...advanced4,
            valid
        };
    }
    return Object.freeze({
        encode,
        encodeStandardOptions,
        encodeAdvancedOptions,
        encodeAdvancedOptions2,
        encodeAdvancedOptions3,
        encodeAdvancedOptions4,
        decode
    });
}
function SerialNumber() {
    const defaults = {
        serialNumber: 0
    };
    const msg = Message({
        contentLength: 4,
        id: "serialNumber" // 97, 0x61
    });
    const length = msg.getLength();
    function encode(args) {
        const serialNumber = (0, _functionsJs.existance)(args.serialNumber, defaults.serialNumber);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, msg.sync, true);
        view.setUint8(1, msg.getContentLength(), true);
        view.setUint8(2, msg.id, true);
        view.setUint32(3, serialNumber, true);
        view.setUint8(7, msg.xor(view), true);
        return view;
    }
    function decode(dataview) {
        const id = dataview.getUint8(2, true);
        const serialNumber = dataview.getUint32(3, true);
        const check = dataview.getUint8(7, true);
        const valid = msg.validate(dataview, check);
        return {
            id,
            serialNumber,
            valid
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function deviceTypeToString(deviceType) {
    if ((0, _functionsJs.equals)(deviceType, 120)) return "Heart Rate";
    if ((0, _functionsJs.equals)(deviceType, 17)) return "Trainer";
    if ((0, _functionsJs.equals)(deviceType, 11)) return "Power Meter";
    if ((0, _functionsJs.equals)(deviceType, 121)) return "Speed and Cadence";
    return "unsupported";
}
function isExtended(dataview) {
    return message.data.isExtended(dataview);
}
function isBroadcast(dataview) {
    return message.data.isBroadcast(dataview);
}
function isAcknowledged(dataview) {
    return message.data.isAcknowledged(dataview);
}
function isEvent(dataview) {
    return message.channelEvent.isEvent(dataview);
}
function isResponse(dataview) {
    return message.channelResponse.isResponse(dataview);
}
const message = {
    // config
    assignChannel: AssignChannel(),
    unassignChannel: UnassignChannel(),
    setChannelId: SetChannelId(),
    setChannelPeriod: SetChannelPeriod(),
    setChannelFrequency: SetChannelFrequency(),
    setNetworkKey: SetNetworkKey(),
    searchTimeout: SearchTimeout(),
    lowPrioritySearchTimeout: LowPrioritySearchTimeout(),
    enableExtRxMessages: EnableExtRxMessages(),
    libConfig: LibConfig(),
    // control
    resetSystem: ResetSystem(),
    openChannel: OpenChannel(),
    closeChannel: CloseChannel(),
    requestMessage: RequestMessage(),
    requestChannelStatus: RequestMessage({
        requestedMessageId: (0, _constantsJs.ids).channelStatus
    }),
    openRxScanMode: OpenRxScanMode(),
    sleep: Sleep(),
    // data
    data: Data(),
    broadcastData: BroadcastData(),
    acknowledgedData: AcknowledgedData(),
    burstTransferData: BurstTransferData(),
    advancedBurstData: AdvancedBurstData(),
    // channel messages
    channelEvent: ChannelEvent(),
    channelResponse: ChannelResponse(),
    // requested response messages
    channelStatus: ChannelStatus(),
    channelId: ChannelId(),
    capabilities: Capabilities(),
    serialNumber: SerialNumber(),
    // utils
    isExtended,
    isBroadcast,
    isAcknowledged,
    isEvent,
    isResponse
};
const utils = {
    deviceTypeToString
};

},{"../functions.js":"2jd1e","./constants.js":"8SNGY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SNGY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ids", ()=>ids);
parcelHelpers.export(exports, "events", ()=>events);
parcelHelpers.export(exports, "values", ()=>values);
parcelHelpers.export(exports, "channelTypes", ()=>channelTypes);
parcelHelpers.export(exports, "keys", ()=>keys);
const ids = {
    // config
    setNetworkKey: 70,
    // 0x46
    unassignChannel: 65,
    // 0x41
    assignChannel: 66,
    // 0x42
    assignChannelExt: 66,
    // 0x42
    channelPeriod: 67,
    // 0x43
    channelFrequency: 69,
    // 0x45
    setChannelId: 81,
    // 0x51
    serialNumberSet: 101,
    // 0x65
    searchTimeout: 68,
    // 0x44
    searchLowTimeout: 99,
    // 0x63
    enableExtRx: 102,
    // 0x66
    libConfig: 110,
    // 0x6E
    // control
    resetSystem: 74,
    // 0x4A
    openChannel: 75,
    // 0x4B
    closeChannel: 76,
    // 0x4C
    requestMessage: 77,
    // 0x4D
    openRxScanMode: 91,
    // 0x5B
    sleepMessage: 197,
    // 0xC5
    // notification
    startUp: 111,
    // 0x6F
    serialError: 174,
    // 0xAE
    // data
    broadcastData: 78,
    // 0x4E
    acknowledgedData: 79,
    // 0x4F
    broascastExtData: 93,
    // 0x5D
    burstData: 80,
    // 0x50
    burstAdvData: 114,
    // 0x72
    // channel
    channelResponse: 64,
    // 0x40
    channelEvent: 64,
    // 0x40
    // requested response
    channelStatus: 82,
    // 0x52
    channelId: 81,
    // 0x51 response
    ANTVersion: 62,
    // 0x3E
    capabilities: 84,
    // 0x54
    serialNumber: 97 // 0x61
};
const events = {
    response_no_error: 0,
    event_rx_search_timeout: 1,
    event_rx_fail: 2,
    event_tx: 3,
    event_transfer_rx_failed: 4,
    event_transfer_tx_completed: 5,
    event_transfer_tx_failed: 6,
    event_channel_closed: 7,
    event_rx_fail_go_to_search: 8,
    event_channel_collision: 9,
    event_transfer_tx_start: 10,
    event_transfer_next_data_block: 11,
    channel_in_wrong_state: 21,
    channel_not_opened: 22,
    channel_id_not_set: 24,
    close_all_channels: 25,
    transfer_in_progress: 31,
    transfer_sequence_number_error: 32,
    transfer_in_error: 33,
    message_size_exceeds_limit: 39,
    invalid_message: 40,
    invalid_network_number: 41,
    invalid_list_id: 48,
    invalid_scan_tx_channel: 49,
    invalid_parameter_provided: 51,
    event_serial_que_overflow: 52,
    event_que_overflow: 53,
    encrypt_negotiation_success: 56,
    encrypt_negotiation_fail: 57,
    nvm_full_error: 64,
    nvm_write_error: 65,
    usb_string_write_fail: 112,
    mesg_serial_error_id: 174
};
const values = {
    sync: 164,
    libConfig: {
        disabled: 0,
        rxTimestamps: 32,
        // 0x20
        rssi: 64,
        // 0x40
        channelId: 128 // 0x80
    }
};
const channelTypes = {
    slave: {
        bidirectional: 0x00,
        sharedBidirectional: 0x20,
        receiveOnly: 0x40
    },
    master: {
        bidirectional: 0x10,
        sharedBidirectional: 0x30
    }
};
const keys = {
    antPlus: [
        0xB9,
        0xA5,
        0x21,
        0xFB,
        0xBD,
        0x72,
        0xC3,
        0x45
    ],
    public: [
        0xE8,
        0xE4,
        0x21,
        0x3B,
        0x55,
        0x7A,
        0x67,
        0xC1
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2O64t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Keyboard", ()=>Keyboard);
parcelHelpers.export(exports, "KeyboardControls", ()=>KeyboardControls);
var _functionsJs = require("../functions.js");
var _enumsJs = require("../ble/enums.js");
function Keyboard() {
    const isKeyUp = (code)=>code === "ArrowUp";
    const isKeyDown = (code)=>code === "ArrowDown";
    const isKeyE = (code)=>code === "KeyE";
    const isKeyR = (code)=>code === "KeyR";
    const isKeyS = (code)=>code === "KeyS";
    const isKeyL = (code)=>code === "KeyL";
    const isKeySpace = (code)=>code === "Space";
    window.addEventListener("keydown", onKeydown.bind(this));
    function onKeydown(e) {
        let keyCode = e.keyCode;
        let code = e.code;
        if (e.isComposing || keyCode === 229 || e.ctrlKey || e.shiftKey || e.altKey || (0, _functionsJs.exists)(e.target.form)) return;
        if (isKeyUp(code)) {
            e.preventDefault();
            (0, _functionsJs.xf).dispatch("key:up");
        }
        if (isKeyDown(code)) {
            e.preventDefault();
            (0, _functionsJs.xf).dispatch("key:down");
        }
        if (isKeyS(code)) (0, _functionsJs.xf).dispatch("key:s");
        if (isKeyR(code)) (0, _functionsJs.xf).dispatch("key:r");
        if (isKeyE(code)) (0, _functionsJs.xf).dispatch("key:e");
        if (isKeyL(code)) (0, _functionsJs.xf).dispatch("key:l");
        if (isKeySpace(code)) {
            e.preventDefault();
            (0, _functionsJs.xf).dispatch("key:space");
        }
    }
}
function KeyboardControls() {
    let mode = (0, _enumsJs.ControlMode).erg;
    (0, _functionsJs.xf).sub("db:mode", (x)=>mode = x);
    let watchStatus = "stopped";
    (0, _functionsJs.xf).sub("db:watchStatus", (x)=>watchStatus = x);
    // Modes Inc/Dec
    (0, _functionsJs.xf).sub("key:up", (e)=>{
        if (mode === (0, _enumsJs.ControlMode).erg) (0, _functionsJs.xf).dispatch("ui:power-target-inc");
        if (mode === (0, _enumsJs.ControlMode).resistance) (0, _functionsJs.xf).dispatch("ui:resistance-target-inc");
        if (mode === (0, _enumsJs.ControlMode).sim) (0, _functionsJs.xf).dispatch("ui:slope-target-inc");
    });
    (0, _functionsJs.xf).sub("key:down", (e)=>{
        if (mode === (0, _enumsJs.ControlMode).erg) (0, _functionsJs.xf).dispatch("ui:power-target-dec");
        if (mode === (0, _enumsJs.ControlMode).resistance) (0, _functionsJs.xf).dispatch("ui:resistance-target-dec");
        if (mode === (0, _enumsJs.ControlMode).sim) (0, _functionsJs.xf).dispatch("ui:slope-target-dec");
    });
    // Modes
    (0, _functionsJs.xf).sub("key:e", (e)=>{
        (0, _functionsJs.xf).dispatch("ui:mode-set", (0, _enumsJs.ControlMode).erg);
    });
    (0, _functionsJs.xf).sub("key:r", (e)=>{
        (0, _functionsJs.xf).dispatch("ui:mode-set", (0, _enumsJs.ControlMode).resistance);
    });
    (0, _functionsJs.xf).sub("key:s", (e)=>{
        (0, _functionsJs.xf).dispatch("ui:mode-set", (0, _enumsJs.ControlMode).sim);
    });
    // Watch
    (0, _functionsJs.xf).sub("key:space", (e)=>{
        if (watchStatus === "paused" || watchStatus === "stopped") (0, _functionsJs.xf).dispatch("ui:watchStart");
        else (0, _functionsJs.xf).dispatch("ui:watchPause");
    });
    (0, _functionsJs.xf).sub("key:l", (e)=>{
        (0, _functionsJs.xf).dispatch("ui:watchLap");
    });
}
Keyboard();
KeyboardControls();

},{"../functions.js":"2jd1e","../ble/enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7TZPP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CourseVideo", ()=>CourseVideo);
var _functionsJs = require("../functions.js");
var _mediainfoJs = require("mediainfo.js");
var _mediainfoJsDefault = parcelHelpers.interopDefault(_mediainfoJs);
class CourseVideo extends HTMLElement {
    constructor(){
        super();
        this.workout = {};
        this.distance = 0;
        this.watchStatus = null;
        this.workoutStatus = null;
    }
    connectedCallback() {
        this.dom = {
            courseVideoElement: document.querySelector("#course-video")
        };
        const abortController = new AbortController();
        const signal = {
            signal: abortController.signal
        };
        (0, _functionsJs.xf).sub("db:workout", this.onWorkout.bind(this), signal);
        (0, _functionsJs.xf).sub(`db:watchStatus`, this.onWatchStatus.bind(this), signal);
        (0, _functionsJs.xf).sub(`db:workoutStatus`, this.onWorkoutStatus.bind(this), signal);
        (0, _functionsJs.xf).sub(`db:distance`, this.onDistance.bind(this), signal);
        this.renderInit(this.dom);
    }
    disconnectedCallback() {
        document.removeEventListener(`db:workout`, this.onWorkout);
        document.removeEventListener(`db:watchStatus`, this.onWatchStatus);
        document.removeEventListener(`db:workoutStatus`, this.onWorkoutStatus);
        document.removeEventListener(`db:distance`, this.onDistance);
    }
    onDistance(distance) {
        this.distance = distance;
        if (!(0, _functionsJs.exists)(this.video)) return;
        var videoElapsed = this.video.currentTime * 100 / this.video.duration;
        var currentDistanceComplete = distance * 100 / this.workout.meta.distance;
        var relativeSpeed = currentDistanceComplete - videoElapsed;
        // console.log(`Video duration: ${this.video.duration}, Distance: ${distance}, Video elapsed: ${videoElapsed}, CurrentDistanceComplete: ${currentDistanceComplete}, RelativeSpeed: ${relativeSpeed})`);
        if (this.video.playbackRate.toFixed(3) !== relativeSpeed.toFixed(3)) this.video.playbackRate = relativeSpeed;
    }
    onWorkout(workout) {
        this.workout = workout;
        console.log(`Workout: ${JSON.stringify(workout)}`);
        this.render();
    }
    onWatchStatus(status) {
        this.watchSatus = status;
        if (status === "started") this.renderStarted(this.dom);
        if (status === "paused") this.renderPaused(this.dom);
        if (status === "stopped") this.renderStopped(this.dom);
    }
    onWorkoutStatus(status) {
        this.workoutStatus = status;
        if (status === "started") this.renderWorkoutStarted(this.dom);
        status;
    }
    renderWorkoutStarted() {
        console.log(`Workout started`);
    }
    renderStarted() {
        console.log(`Watch started`);
        if (!(0, _functionsJs.exists)(this.video)) return;
        this.video.play();
    }
    renderPaused() {
        console.log(`Watch paused`);
        if (!(0, _functionsJs.exists)(this.video)) return;
        this.video.pause();
    }
    renderStopped() {
        console.log(`Watch stopped`);
        if (!(0, _functionsJs.exists)(this.video)) return;
        this.video.stop();
    }
    async getVideoMetadata(filePath) {
        const mediainfo = await (0, _mediainfoJsDefault.default)();
        const result = mediainfo.analyzeFile(filePath);
        mediainfo.close();
        return result;
    }
    renderInit(dom) {
        this.video = this.dom.courseVideoElement.querySelector("video");
        dom.courseVideoElement.style.display = "none";
    }
    render() {
        if ((0, _functionsJs.exists)(this.workout)) {
            var file = `${this.workout.meta.name.replace(/ /g, "_")}.mp4`;
            this.video = this.dom.courseVideoElement.querySelector("video");
            this.video.src = new URL(file, "http://localhost:1235/");
            this.video.preload = "metadata";
            this.workout.meta.duration = this.video.duration;
            this.video.load();
            this.video.defaultPlaybackRate = 0;
            this.dom.courseVideoElement.style.display = "inline-block";
        }
    }
}
customElements.define("course-video", CourseVideo);

},{"../functions.js":"2jd1e","mediainfo.js":"9ypmJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ypmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>c);
parcelHelpers.export(exports, "isTrackType", ()=>d);
parcelHelpers.export(exports, "mediaInfoFactory", ()=>c);
function e(e) {
    return function(e) {
        return null !== e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "message");
    }(e) ? e : new Error("string" == typeof e ? e : "Unknown error");
}
const t = [
    "Active_Height",
    "Active_Width",
    "AudioCount",
    "Audio_Channels_Total",
    "BitDepth_Detected",
    "BitDepth",
    "BitDepth_Stored",
    "Channels",
    "Channels_Original",
    "Chapters_Pos_Begin",
    "Chapters_Pos_End",
    "Comic_Position_Total",
    "Count",
    "DataSize",
    "ElementCount",
    "EPG_Positions_Begin",
    "EPG_Positions_End",
    "FirstPacketOrder",
    "FooterSize",
    "Format_Settings_GMC",
    "Format_Settings_RefFrames",
    "Format_Settings_SliceCount",
    "FrameCount",
    "FrameRate_Den",
    "FrameRate_Num",
    "GeneralCount",
    "HeaderSize",
    "Height_CleanAperture",
    "Height",
    "Height_Offset",
    "Height_Original",
    "ImageCount",
    "Matrix_Channels",
    "MenuCount",
    "OtherCount",
    "Part_Position",
    "Part_Position_Total",
    "Played_Count",
    "Reel_Position",
    "Reel_Position_Total",
    "Resolution",
    "Sampled_Height",
    "Sampled_Width",
    "SamplingCount",
    "Season_Position",
    "Season_Position_Total",
    "Source_FrameCount",
    "Source_SamplingCount",
    "Source_StreamSize_Encoded",
    "Source_StreamSize",
    "Status",
    "Stored_Height",
    "Stored_Width",
    "StreamCount",
    "StreamKindID",
    "StreamKindPos",
    "StreamSize_Demuxed",
    "StreamSize_Encoded",
    "StreamSize",
    "TextCount",
    "Track_Position",
    "Track_Position_Total",
    "Video0_Delay",
    "VideoCount",
    "Width_CleanAperture",
    "Width",
    "Width_Offset",
    "Width_Original"
], r = [
    "Active_DisplayAspectRatio",
    "BitRate_Encoded",
    "BitRate_Maximum",
    "BitRate_Minimum",
    "BitRate",
    "BitRate_Nominal",
    "Bits-Pixel_Frame",
    "BitsPixel_Frame",
    "Compression_Ratio",
    "Delay",
    "Delay_Original",
    "DisplayAspectRatio_CleanAperture",
    "DisplayAspectRatio",
    "DisplayAspectRatio_Original",
    "Duration_End_Command",
    "Duration_End",
    "Duration_FirstFrame",
    "Duration_LastFrame",
    "Duration",
    "Duration_Start2End",
    "Duration_Start_Command",
    "Duration_Start",
    "Events_MinDuration",
    "FrameRate_Maximum",
    "FrameRate_Minimum",
    "FrameRate",
    "FrameRate_Nominal",
    "FrameRate_Original_Den",
    "FrameRate_Original",
    "FrameRate_Original_Num",
    "FrameRate_Real",
    "Interleave_Duration",
    "Interleave_Preload",
    "Interleave_VideoFrames",
    "OverallBitRate_Maximum",
    "OverallBitRate_Minimum",
    "OverallBitRate",
    "OverallBitRate_Nominal",
    "PixelAspectRatio_CleanAperture",
    "PixelAspectRatio",
    "PixelAspectRatio_Original",
    "SamplesPerFrame",
    "SamplingRate",
    "Source_Duration_FirstFrame",
    "Source_Duration_LastFrame",
    "Source_Duration",
    "TimeStamp_FirstFrame",
    "Video_Delay"
], n = 2 ** 32, a = {
    coverData: !1,
    chunkSize: 262144,
    format: "object",
    full: !1
};
var i, o = class {
    constructor(e, t){
        this.mediainfoModule = e, this.options = t, this.mediainfoModuleInstance = new e.MediaInfo("object" === t.format ? "JSON" : t.format, t.coverData, t.full);
    }
    analyzeData(t, r, n) {
        if (void 0 === n) return new Promise((n, a)=>{
            this.analyzeData(t, r, (t, r)=>{
                r || !t ? a(e(r)) : n(t);
            });
        });
        const a = ()=>{
            this.openBufferFinalize();
            const e = this.inform();
            "object" === this.options.format ? n(this.parseResultJson(e)) : n(e);
        };
        let i = 0;
        const o = (t)=>{
            const o = (e)=>{
                u(e) ? s() : a();
            }, s = ()=>{
                let a;
                try {
                    const e = Math.min(this.options.chunkSize, t - i);
                    a = r(e, i);
                } catch (t) {
                    return void n("", e(t));
                }
                a instanceof Promise ? a.then(o).catch((t)=>{
                    n("", e(t));
                }) : o(a);
            }, u = (e)=>{
                if (0 === e.length || this.openBufferContinue(e, e.length)) return !1;
                const r = this.openBufferContinueGotoGet();
                return -1 === r ? i += e.length : (i = r, this.openBufferInit(t, r)), !0;
            };
            this.openBufferInit(t, i), s();
        }, s = t instanceof Function ? t() : t;
        s instanceof Promise ? s.then(o).catch((t)=>{
            n(null, e(t));
        }) : o(s);
    }
    close() {
        "function" == typeof this.mediainfoModuleInstance.close && this.mediainfoModuleInstance.close(), "function" == typeof this.mediainfoModule.destroy && this.mediainfoModule.destroy(this.mediainfoModuleInstance);
    }
    inform() {
        return this.mediainfoModuleInstance.inform();
    }
    openBufferContinue(e, t) {
        return !!(8 & this.mediainfoModuleInstance.open_buffer_continue(e, t));
    }
    openBufferContinueGotoGet() {
        let e = -1;
        const t = this.mediainfoModuleInstance.open_buffer_continue_goto_get_lower(), r = this.mediainfoModuleInstance.open_buffer_continue_goto_get_upper();
        return e = -1 == t && -1 == r ? -1 : t < 0 ? t + n + r * n : t + r * n, e;
    }
    openBufferFinalize() {
        this.mediainfoModuleInstance.open_buffer_finalize();
    }
    openBufferInit(e, t) {
        this.mediainfoModuleInstance.open_buffer_init(e, t);
    }
    parseResultJson(e) {
        const n = t, a = r, i = JSON.parse(e);
        if (i.media) {
            const e = {
                ...i.media,
                track: []
            };
            if (Array.isArray(i.media.track)) for (const t of i.media.track){
                let r = {
                    "@type": t["@type"]
                };
                for (const [e, i] of Object.entries(t))"@type" !== e && (r = "string" == typeof i && n.includes(e) ? {
                    ...r,
                    [e]: Number.parseInt(i, 10)
                } : "string" == typeof i && a.includes(e) ? {
                    ...r,
                    [e]: Number.parseFloat(i)
                } : {
                    ...r,
                    [e]: i
                });
                e.track.push(r);
            }
            return {
                ...i,
                media: e
            };
        }
        return i;
    }
}, s = (i = "undefined" != typeof document ? document.currentScript?.src : void 0, function(e = {}) {
    var t, r, n = Object.assign({}, e), a = new Promise((e, n)=>{
        t = e, r = n;
    }), o = Object.assign({}, n), s = "";
    "undefined" != typeof document && document.currentScript && (s = document.currentScript.src), i && (s = i), s = s.startsWith("blob:") ? "" : s.substr(0, s.replace(/[?#].*/, "").lastIndexOf("/") + 1), console.log.bind(console);
    var u, l, c = console.error.bind(console);
    Object.assign(n, o), o = null;
    var d, h, f, m, p, y, g, v, _ = !1;
    function $() {
        var e = l.buffer;
        n.HEAP8 = d = new Int8Array(e), n.HEAP16 = f = new Int16Array(e), n.HEAPU8 = h = new Uint8Array(e), n.HEAPU16 = m = new Uint16Array(e), n.HEAP32 = p = new Int32Array(e), n.HEAPU32 = y = new Uint32Array(e), n.HEAPF32 = g = new Float32Array(e), n.HEAPF64 = v = new Float64Array(e);
    }
    var C = [], b = [], w = [], P = 0, T = null;
    function S(e) {
        c(e = "Aborted(" + e + ")"), _ = !0, e += ". Build with -sASSERTIONS for more info.";
        var t = new WebAssembly.RuntimeError(e);
        throw r(t), t;
    }
    var F, A = (e)=>e.startsWith("data:application/octet-stream;base64,");
    function D() {
        var e, t = "MediaInfoModule.wasm";
        return A(t) ? t : (e = t, n.locateFile ? n.locateFile(e, s) : s + e);
    }
    function O(e) {
        if (e == F && u) return new Uint8Array(u);
        throw "both async and sync fetching of the wasm failed";
    }
    function j(e, t, r) {
        return (function(e) {
            return "function" == typeof fetch ? fetch(e, {
                credentials: "same-origin"
            }).then((t)=>{
                if (!t.ok) throw `failed to load wasm binary file at '${e}'`;
                return t.arrayBuffer();
            }).catch(()=>O(e)) : Promise.resolve().then(()=>O(e));
        })(e).then((e)=>WebAssembly.instantiate(e, t)).then(r, (e)=>{
            c(`failed to asynchronously prepare wasm: ${e}`), S(e);
        });
    }
    var E, M, R, W = (e)=>{
        for(; e.length > 0;)e.shift()(n);
    }, k = (e)=>{
        for(var t = "", r = e; h[r];)t += E[h[r++]];
        return t;
    }, I = {}, B = {}, U = {}, x = (e)=>{
        throw new M(e);
    }, H = (e)=>{
        throw new R(e);
    }, z = (e, t, r)=>{
        function n(t) {
            var n = r(t);
            n.length !== e.length && H("Mismatched type converter count");
            for(var a = 0; a < e.length; ++a)Y(e[a], n[a]);
        }
        e.forEach(function(e) {
            U[e] = t;
        });
        var a = new Array(t.length), i = [], o = 0;
        t.forEach((e, t)=>{
            B.hasOwnProperty(e) ? a[t] = B[e] : (i.push(e), I.hasOwnProperty(e) || (I[e] = []), I[e].push(()=>{
                a[t] = B[e], ++o === i.length && n(a);
            }));
        }), 0 === i.length && n(a);
    };
    function Y(e, t, r = {}) {
        if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
        return function(e, t, r = {}) {
            var n = t.name;
            if (e || x(`type "${n}" must have a positive integer typeid pointer`), B.hasOwnProperty(e)) {
                if (r.ignoreDuplicateRegistrations) return;
                x(`Cannot register type '${n}' twice`);
            }
            if (B[e] = t, delete U[e], I.hasOwnProperty(e)) {
                var a = I[e];
                delete I[e], a.forEach((e)=>e());
            }
        }(e, t, r);
    }
    var N, V = (e)=>{
        x(e.$$.ptrType.registeredClass.name + " instance already deleted");
    }, G = !1, L = (e)=>{}, J = (e)=>{
        e.count.value -= 1, 0 === e.count.value && ((e)=>{
            e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
        })(e);
    }, Z = (e, t, r)=>{
        if (t === r) return e;
        if (void 0 === r.baseClass) return null;
        var n = Z(e, t, r.baseClass);
        return null === n ? null : r.downcast(n);
    }, q = {}, K = ()=>Object.keys(re).length, X = ()=>{
        var e = [];
        for(var t in re)re.hasOwnProperty(t) && e.push(re[t]);
        return e;
    }, Q = [], ee = ()=>{
        for(; Q.length;){
            var e = Q.pop();
            e.$$.deleteScheduled = !1, e.delete();
        }
    }, te = (e)=>{
        N = e, Q.length && N && N(ee);
    }, re = {}, ne = (e, t)=>(t = ((e, t)=>{
            for(void 0 === t && x("ptr should not be undefined"); e.baseClass;)t = e.upcast(t), e = e.baseClass;
            return t;
        })(e, t), re[t]), ae = (e, t)=>(t.ptrType && t.ptr || H("makeClassHandle requires ptr and ptrType"), !!t.smartPtrType != !!t.smartPtr && H("Both smartPtrType and smartPtr must be specified"), t.count = {
            value: 1
        }, oe(Object.create(e, {
            $$: {
                value: t,
                writable: !0
            }
        })));
    function ie(e) {
        var t = this.getPointee(e);
        if (!t) return this.destructor(e), null;
        var r = ne(this.registeredClass, t);
        if (void 0 !== r) {
            if (0 === r.$$.count.value) return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
            var n = r.clone();
            return this.destructor(e), n;
        }
        function a() {
            return this.isSmartPointer ? ae(this.registeredClass.instancePrototype, {
                ptrType: this.pointeeType,
                ptr: t,
                smartPtrType: this,
                smartPtr: e
            }) : ae(this.registeredClass.instancePrototype, {
                ptrType: this,
                ptr: e
            });
        }
        var i, o = this.registeredClass.getActualType(t), s = q[o];
        if (!s) return a.call(this);
        i = this.isConst ? s.constPointerType : s.pointerType;
        var u = Z(t, this.registeredClass, i.registeredClass);
        return null === u ? a.call(this) : this.isSmartPointer ? ae(i.registeredClass.instancePrototype, {
            ptrType: i,
            ptr: u,
            smartPtrType: this,
            smartPtr: e
        }) : ae(i.registeredClass.instancePrototype, {
            ptrType: i,
            ptr: u
        });
    }
    var oe = (e)=>"undefined" == typeof FinalizationRegistry ? (oe = (e)=>e, e) : (G = new FinalizationRegistry((e)=>{
            J(e.$$);
        }), oe = (e)=>{
            var t = e.$$;
            if (t.smartPtr) {
                var r = {
                    $$: t
                };
                G.register(e, r, e);
            }
            return e;
        }, L = (e)=>G.unregister(e), oe(e));
    function se() {}
    var ue = (e, t)=>Object.defineProperty(t, "name", {
            value: e
        }), le = (e, t, r)=>{
        if (void 0 === e[t].overloadTable) {
            var n = e[t];
            e[t] = function(...n) {
                return e[t].overloadTable.hasOwnProperty(n.length) || x(`Function '${r}' called with an invalid number of arguments (${n.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[n.length].apply(this, n);
            }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
        }
    };
    function ce(e, t, r, n, a, i, o, s) {
        this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
    }
    var de = (e, t, r)=>{
        for(; t !== r;)t.upcast || x(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
        return e;
    };
    function he(e, t) {
        if (null === t) return this.isReference && x(`null is not a valid ${this.name}`), 0;
        t.$$ || x(`Cannot pass "${Ie(t)}" as a ${this.name}`), t.$$.ptr || x(`Cannot pass deleted object as a pointer of type ${this.name}`);
        var r = t.$$.ptrType.registeredClass;
        return de(t.$$.ptr, r, this.registeredClass);
    }
    function fe(e, t) {
        var r;
        if (null === t) return this.isReference && x(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), null !== e && e.push(this.rawDestructor, r), r) : 0;
        t && t.$$ || x(`Cannot pass "${Ie(t)}" as a ${this.name}`), t.$$.ptr || x(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && x(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
        var n = t.$$.ptrType.registeredClass;
        if (r = de(t.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch(void 0 === t.$$.smartPtr && x("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy){
            case 0:
                t.$$.smartPtrType === this ? r = t.$$.smartPtr : x(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
                break;
            case 1:
                r = t.$$.smartPtr;
                break;
            case 2:
                if (t.$$.smartPtrType === this) r = t.$$.smartPtr;
                else {
                    var a = t.clone();
                    r = this.rawShare(r, We.toHandle(()=>a.delete())), null !== e && e.push(this.rawDestructor, r);
                }
                break;
            default:
                x("Unsupporting sharing policy");
        }
        return r;
    }
    function me(e, t) {
        if (null === t) return this.isReference && x(`null is not a valid ${this.name}`), 0;
        t.$$ || x(`Cannot pass "${Ie(t)}" as a ${this.name}`), t.$$.ptr || x(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && x(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
        var r = t.$$.ptrType.registeredClass;
        return de(t.$$.ptr, r, this.registeredClass);
    }
    function pe(e) {
        return this.fromWireType(y[e >> 2]);
    }
    function ye(e, t, r, n, a, i, o, s, u, l, c) {
        this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = l, this.rawDestructor = c, a || void 0 !== t.baseClass ? this.toWireType = fe : n ? (this.toWireType = he, this.destructorFunction = null) : (this.toWireType = me, this.destructorFunction = null);
    }
    var ge, ve, _e = [], $e = (e)=>{
        var t = _e[e];
        return t || (e >= _e.length && (_e.length = e + 1), _e[e] = t = ge.get(e)), t;
    }, Ce = (e, t, r = [])=>e.includes("j") ? ((e, t, r)=>(e = e.replace(/p/g, "i"), (0, n["dynCall_" + e])(t, ...r)))(e, t, r) : $e(t)(...r), be = (e, t)=>{
        var r, n, a = (e = k(e)).includes("j") ? (r = e, n = t, (...e)=>Ce(r, n, e)) : $e(t);
        return "function" != typeof a && x(`unknown function pointer with signature ${e}: ${t}`), a;
    }, we = (e)=>{
        var t = ut(e), r = k(t);
        return ct(t), r;
    }, Pe = (e, t)=>{
        var r = [], n = {};
        throw t.forEach(function e(t) {
            n[t] || B[t] || (U[t] ? U[t].forEach(e) : (r.push(t), n[t] = !0));
        }), new ve(`${e}: ` + r.map(we).join([
            ", "
        ]));
    }, Te = (e, t)=>{
        for(var r = [], n = 0; n < e; n++)r.push(y[t + 4 * n >> 2]);
        return r;
    }, Se = (e)=>{
        for(; e.length;){
            var t = e.pop();
            e.pop()(t);
        }
    };
    function Fe(e) {
        for(var t = 1; t < e.length; ++t)if (null !== e[t] && void 0 === e[t].destructorFunction) return !0;
        return !1;
    }
    function Ae(e, t, r, n, a, i) {
        var o = t.length;
        o < 2 && x("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for(var s = null !== t[1] && null !== r, u = Fe(t), l = "void" !== t[0].name, c = [
            e,
            x,
            n,
            a,
            Se,
            t[0],
            t[1]
        ], d = 0; d < o - 2; ++d)c.push(t[d + 2]);
        if (!u) for(d = s ? 1 : 2; d < t.length; ++d)null !== t[d].destructorFunction && c.push(t[d].destructorFunction);
        let [h, f] = function(e, t, r, n) {
            for(var a = Fe(e), i = e.length, o = "", s = "", u = 0; u < i - 2; ++u)o += (0 !== u ? ", " : "") + "arg" + u, s += (0 !== u ? ", " : "") + "arg" + u + "Wired";
            var l = `\n        return function (${o}) {\n        if (arguments.length !== ${i - 2}) {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${i - 2}');\n        }`;
            a && (l += "var destructors = [];\n");
            var c = a ? "destructors" : "null", d = [
                "humanName",
                "throwBindingError",
                "invoker",
                "fn",
                "runDestructors",
                "retType",
                "classParam"
            ];
            for(t && (l += "var thisWired = classParam['toWireType'](" + c + ", this);\n"), u = 0; u < i - 2; ++u)l += "var arg" + u + "Wired = argType" + u + "['toWireType'](" + c + ", arg" + u + ");\n", d.push("argType" + u);
            if (t && (s = "thisWired" + (s.length > 0 ? ", " : "") + s), l += (r || n ? "var rv = " : "") + "invoker(fn" + (s.length > 0 ? ", " : "") + s + ");\n", a) l += "runDestructors(destructors);\n";
            else for(u = t ? 1 : 2; u < e.length; ++u){
                var h = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                null !== e[u].destructorFunction && (l += `${h}_dtor(${h});\n`, d.push(`${h}_dtor`));
            }
            return r && (l += "var ret = retType['fromWireType'](rv);\nreturn ret;\n"), [
                d,
                l += "}\n"
            ];
        }(t, s, l, i);
        h.push(f);
        var m = (function(e, t) {
            if (!(e instanceof Function)) throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);
            var r = ue(e.name || "unknownFunctionName", function() {});
            r.prototype = e.prototype;
            var n = new r, a = e.apply(n, t);
            return a instanceof Object ? a : n;
        })(Function, h)(...c);
        return ue(e, m);
    }
    var De, Oe, je, Ee = [], Me = [], Re = ()=>Me.length / 2 - 5 - Ee.length, We = {
        toValue: (e)=>(e || x("Cannot use deleted val. handle = " + e), Me[e]),
        toHandle: (e)=>{
            switch(e){
                case void 0:
                    return 2;
                case null:
                    return 4;
                case !0:
                    return 6;
                case !1:
                    return 8;
                default:
                    {
                        const t = Ee.pop() || Me.length;
                        return Me[t] = e, Me[t + 1] = 1, t;
                    }
            }
        }
    }, ke = {
        name: "emscripten::val",
        fromWireType: (e)=>{
            var t = We.toValue(e);
            return ((e)=>{
                e > 9 && 0 == --Me[e + 1] && (Me[e] = void 0, Ee.push(e));
            })(e), t;
        },
        toWireType: (e, t)=>We.toHandle(t),
        argPackAdvance: 8,
        readValueFromPointer: pe,
        destructorFunction: null
    }, Ie = (e)=>{
        if (null === e) return "null";
        var t = typeof e;
        return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
    }, Be = (e, t)=>{
        switch(t){
            case 4:
                return function(e) {
                    return this.fromWireType(g[e >> 2]);
                };
            case 8:
                return function(e) {
                    return this.fromWireType(v[e >> 3]);
                };
            default:
                throw new TypeError(`invalid float width (${t}): ${e}`);
        }
    }, Ue = (e, t, r)=>{
        switch(t){
            case 1:
                return r ? (e)=>d[e] : (e)=>h[e];
            case 2:
                return r ? (e)=>f[e >> 1] : (e)=>m[e >> 1];
            case 4:
                return r ? (e)=>p[e >> 2] : (e)=>y[e >> 2];
            default:
                throw new TypeError(`invalid integer width (${t}): ${e}`);
        }
    }, xe = (e, t, r, n)=>{
        if (!(n > 0)) return 0;
        for(var a = r, i = r + n - 1, o = 0; o < e.length; ++o){
            var s = e.charCodeAt(o);
            if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++o)), s <= 127) {
                if (r >= i) break;
                t[r++] = s;
            } else if (s <= 2047) {
                if (r + 1 >= i) break;
                t[r++] = 192 | s >> 6, t[r++] = 128 | 63 & s;
            } else if (s <= 65535) {
                if (r + 2 >= i) break;
                t[r++] = 224 | s >> 12, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s;
            } else {
                if (r + 3 >= i) break;
                t[r++] = 240 | s >> 18, t[r++] = 128 | s >> 12 & 63, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | 63 & s;
            }
        }
        return t[r] = 0, r - a;
    }, He = (e, t, r)=>xe(e, h, t, r), ze = (e)=>{
        for(var t = 0, r = 0; r < e.length; ++r){
            var n = e.charCodeAt(r);
            n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
        }
        return t;
    }, Ye = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, Ne = (e, t)=>e ? ((e, t, r)=>{
            for(var n = t + r, a = t; e[a] && !(a >= n);)++a;
            if (a - t > 16 && e.buffer && Ye) return Ye.decode(e.subarray(t, a));
            for(var i = ""; t < a;){
                var o = e[t++];
                if (128 & o) {
                    var s = 63 & e[t++];
                    if (192 != (224 & o)) {
                        var u = 63 & e[t++];
                        if ((o = 224 == (240 & o) ? (15 & o) << 12 | s << 6 | u : (7 & o) << 18 | s << 12 | u << 6 | 63 & e[t++]) < 65536) i += String.fromCharCode(o);
                        else {
                            var l = o - 65536;
                            i += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l);
                        }
                    } else i += String.fromCharCode((31 & o) << 6 | s);
                } else i += String.fromCharCode(o);
            }
            return i;
        })(h, e, t) : "", Ve = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Ge = (e, t)=>{
        for(var r = e, n = r >> 1, a = n + t / 2; !(n >= a) && m[n];)++n;
        if ((r = n << 1) - e > 32 && Ve) return Ve.decode(h.subarray(e, r));
        for(var i = "", o = 0; !(o >= t / 2); ++o){
            var s = f[e + 2 * o >> 1];
            if (0 == s) break;
            i += String.fromCharCode(s);
        }
        return i;
    }, Le = (e, t, r)=>{
        if (r ??= 2147483647, r < 2) return 0;
        for(var n = t, a = (r -= 2) < 2 * e.length ? r / 2 : e.length, i = 0; i < a; ++i){
            var o = e.charCodeAt(i);
            f[t >> 1] = o, t += 2;
        }
        return f[t >> 1] = 0, t - n;
    }, Je = (e)=>2 * e.length, Ze = (e, t)=>{
        for(var r = 0, n = ""; !(r >= t / 4);){
            var a = p[e + 4 * r >> 2];
            if (0 == a) break;
            if (++r, a >= 65536) {
                var i = a - 65536;
                n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i);
            } else n += String.fromCharCode(a);
        }
        return n;
    }, qe = (e, t, r)=>{
        if (r ??= 2147483647, r < 4) return 0;
        for(var n = t, a = n + r - 4, i = 0; i < e.length; ++i){
            var o = e.charCodeAt(i);
            if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++i)), p[t >> 2] = o, (t += 4) + 4 > a) break;
        }
        return p[t >> 2] = 0, t - n;
    }, Ke = (e)=>{
        for(var t = 0, r = 0; r < e.length; ++r){
            var n = e.charCodeAt(r);
            n >= 55296 && n <= 57343 && ++r, t += 4;
        }
        return t;
    }, Xe = (e)=>{
        var t = (e - l.buffer.byteLength + 65535) / 65536;
        try {
            return l.grow(t), $(), 1;
        } catch (e) {}
    }, Qe = {}, et = ()=>{
        if (!et.strings) {
            var e = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                _: "./this.program"
            };
            for(var t in Qe)void 0 === Qe[t] ? delete e[t] : e[t] = Qe[t];
            var r = [];
            for(var t in e)r.push(`${t}=${e[t]}`);
            et.strings = r;
        }
        return et.strings;
    }, tt = (e)=>e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), rt = [
        31,
        29,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ], nt = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ], at = (e, t, r, n)=>{
        var a = y[n + 40 >> 2], i = {
            tm_sec: p[n >> 2],
            tm_min: p[n + 4 >> 2],
            tm_hour: p[n + 8 >> 2],
            tm_mday: p[n + 12 >> 2],
            tm_mon: p[n + 16 >> 2],
            tm_year: p[n + 20 >> 2],
            tm_wday: p[n + 24 >> 2],
            tm_yday: p[n + 28 >> 2],
            tm_isdst: p[n + 32 >> 2],
            tm_gmtoff: p[n + 36 >> 2],
            tm_zone: a ? Ne(a) : ""
        }, o = Ne(r), s = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y"
        };
        for(var u in s)o = o.replace(new RegExp(u, "g"), s[u]);
        var l = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ], c = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        function h(e, t, r) {
            for(var n = "number" == typeof e ? e.toString() : e || ""; n.length < t;)n = r[0] + n;
            return n;
        }
        function f(e, t) {
            return h(e, t, "0");
        }
        function m(e, t) {
            function r(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0;
            }
            var n;
            return 0 === (n = r(e.getFullYear() - t.getFullYear())) && 0 === (n = r(e.getMonth() - t.getMonth())) && (n = r(e.getDate() - t.getDate())), n;
        }
        function g(e) {
            switch(e.getDay()){
                case 0:
                    return new Date(e.getFullYear() - 1, 11, 29);
                case 1:
                    return e;
                case 2:
                    return new Date(e.getFullYear(), 0, 3);
                case 3:
                    return new Date(e.getFullYear(), 0, 2);
                case 4:
                    return new Date(e.getFullYear(), 0, 1);
                case 5:
                    return new Date(e.getFullYear() - 1, 11, 31);
                case 6:
                    return new Date(e.getFullYear() - 1, 11, 30);
            }
        }
        function v(e) {
            var t = ((e, t)=>{
                for(var r = new Date(e.getTime()); t > 0;){
                    var n = tt(r.getFullYear()), a = r.getMonth(), i = (n ? rt : nt)[a];
                    if (!(t > i - r.getDate())) return r.setDate(r.getDate() + t), r;
                    t -= i - r.getDate() + 1, r.setDate(1), a < 11 ? r.setMonth(a + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
                }
                return r;
            })(new Date(e.tm_year + 1900, 0, 1), e.tm_yday), r = new Date(t.getFullYear(), 0, 4), n = new Date(t.getFullYear() + 1, 0, 4), a = g(r), i = g(n);
            return m(a, t) <= 0 ? m(i, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1;
        }
        var _ = {
            "%a": (e)=>l[e.tm_wday].substring(0, 3),
            "%A": (e)=>l[e.tm_wday],
            "%b": (e)=>c[e.tm_mon].substring(0, 3),
            "%B": (e)=>c[e.tm_mon],
            "%C": (e)=>f((e.tm_year + 1900) / 100 | 0, 2),
            "%d": (e)=>f(e.tm_mday, 2),
            "%e": (e)=>h(e.tm_mday, 2, " "),
            "%g": (e)=>v(e).toString().substring(2),
            "%G": v,
            "%H": (e)=>f(e.tm_hour, 2),
            "%I": (e)=>{
                var t = e.tm_hour;
                return 0 == t ? t = 12 : t > 12 && (t -= 12), f(t, 2);
            },
            "%j": (e)=>f(e.tm_mday + ((e, t)=>{
                    for(var r = 0, n = 0; n <= t; r += e[n++]);
                    return r;
                })(tt(e.tm_year + 1900) ? rt : nt, e.tm_mon - 1), 3),
            "%m": (e)=>f(e.tm_mon + 1, 2),
            "%M": (e)=>f(e.tm_min, 2),
            "%n": ()=>"\n",
            "%p": (e)=>e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM",
            "%S": (e)=>f(e.tm_sec, 2),
            "%t": ()=>"	",
            "%u": (e)=>e.tm_wday || 7,
            "%U": (e)=>{
                var t = e.tm_yday + 7 - e.tm_wday;
                return f(Math.floor(t / 7), 2);
            },
            "%V": (e)=>{
                var t = Math.floor((e.tm_yday + 7 - (e.tm_wday + 6) % 7) / 7);
                if ((e.tm_wday + 371 - e.tm_yday - 2) % 7 <= 2 && t++, t) {
                    if (53 == t) {
                        var r = (e.tm_wday + 371 - e.tm_yday) % 7;
                        4 == r || 3 == r && tt(e.tm_year) || (t = 1);
                    }
                } else {
                    t = 52;
                    var n = (e.tm_wday + 7 - e.tm_yday - 1) % 7;
                    (4 == n || 5 == n && tt(e.tm_year % 400 - 1)) && t++;
                }
                return f(t, 2);
            },
            "%w": (e)=>e.tm_wday,
            "%W": (e)=>{
                var t = e.tm_yday + 7 - (e.tm_wday + 6) % 7;
                return f(Math.floor(t / 7), 2);
            },
            "%y": (e)=>(e.tm_year + 1900).toString().substring(2),
            "%Y": (e)=>e.tm_year + 1900,
            "%z": (e)=>{
                var t = e.tm_gmtoff, r = t >= 0;
                return t = (t = Math.abs(t) / 60) / 60 * 100 + t % 60, (r ? "+" : "-") + String("0000" + t).slice(-4);
            },
            "%Z": (e)=>e.tm_zone,
            "%%": ()=>"%"
        };
        for(var u in o = o.replace(/%%/g, "\0\0"), _)o.includes(u) && (o = o.replace(new RegExp(u, "g"), _[u](i)));
        o = o.replace(/\0\0/g, "%");
        var $, C, b, w, P, T = (C = ze($ = o) + 1, b = new Array(C), xe($, b, 0, b.length), b);
        return T.length > t ? 0 : (w = T, P = e, d.set(w, P), T.length - 1);
    };
    (()=>{
        for(var e = new Array(256), t = 0; t < 256; ++t)e[t] = String.fromCharCode(t);
        E = e;
    })(), M = n.BindingError = class extends Error {
        constructor(e){
            super(e), this.name = "BindingError";
        }
    }, R = n.InternalError = class extends Error {
        constructor(e){
            super(e), this.name = "InternalError";
        }
    }, Object.assign(se.prototype, {
        isAliasOf (e) {
            if (!(this instanceof se)) return !1;
            if (!(e instanceof se)) return !1;
            var t = this.$$.ptrType.registeredClass, r = this.$$.ptr;
            e.$$ = e.$$;
            for(var n = e.$$.ptrType.registeredClass, a = e.$$.ptr; t.baseClass;)r = t.upcast(r), t = t.baseClass;
            for(; n.baseClass;)a = n.upcast(a), n = n.baseClass;
            return t === n && r === a;
        },
        clone () {
            if (this.$$.ptr || V(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
            var e, t = oe(Object.create(Object.getPrototypeOf(this), {
                $$: {
                    value: (e = this.$$, {
                        count: e.count,
                        deleteScheduled: e.deleteScheduled,
                        preservePointerOnDelete: e.preservePointerOnDelete,
                        ptr: e.ptr,
                        ptrType: e.ptrType,
                        smartPtr: e.smartPtr,
                        smartPtrType: e.smartPtrType
                    })
                }
            }));
            return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t;
        },
        delete () {
            this.$$.ptr || V(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && x("Object already scheduled for deletion"), L(this), J(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        },
        isDeleted () {
            return !this.$$.ptr;
        },
        deleteLater () {
            return this.$$.ptr || V(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && x("Object already scheduled for deletion"), Q.push(this), 1 === Q.length && N && N(ee), this.$$.deleteScheduled = !0, this;
        }
    }), n.getInheritedInstanceCount = K, n.getLiveInheritedInstances = X, n.flushPendingDeletes = ee, n.setDelayFunction = te, Object.assign(ye.prototype, {
        getPointee (e) {
            return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
        },
        destructor (e) {
            this.rawDestructor?.(e);
        },
        argPackAdvance: 8,
        readValueFromPointer: pe,
        fromWireType: ie
    }), ve = n.UnboundTypeError = (De = Error, (je = ue(Oe = "UnboundTypeError", function(e) {
        this.name = Oe, this.message = e;
        var t = new Error(e).stack;
        void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""));
    })).prototype = Object.create(De.prototype), je.prototype.constructor = je, je.prototype.toString = function() {
        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, je), Me.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), n.count_emval_handles = Re;
    var it, ot = {
        _abort_js: ()=>{
            S("");
        },
        _embind_register_bigint: (e, t, r, n, a)=>{},
        _embind_register_bool: (e, t, r, n)=>{
            Y(e, {
                name: t = k(t),
                fromWireType: function(e) {
                    return !!e;
                },
                toWireType: function(e, t) {
                    return t ? r : n;
                },
                argPackAdvance: 8,
                readValueFromPointer: function(e) {
                    return this.fromWireType(h[e]);
                },
                destructorFunction: null
            });
        },
        _embind_register_class: (e, t, r, a, i, o, s, u, l, c, d, h, f)=>{
            d = k(d), o = be(i, o), u &&= be(s, u), c &&= be(l, c), f = be(h, f);
            var m = ((e)=>{
                if (void 0 === e) return "_unknown";
                var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return t >= 48 && t <= 57 ? `_${e}` : e;
            })(d);
            ((e, t, r)=>{
                n.hasOwnProperty(e) ? (x(`Cannot register public name '${e}' twice`), le(n, e, e), n.hasOwnProperty(r) && x(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), n[e].overloadTable[r] = t) : n[e] = t;
            })(m, function() {
                Pe(`Cannot construct ${d} due to unbound types`, [
                    a
                ]);
            }), z([
                e,
                t,
                r
            ], a ? [
                a
            ] : [], (t)=>{
                var r, i;
                t = t[0], i = a ? (r = t.registeredClass).instancePrototype : se.prototype;
                var s = ue(d, function(...e) {
                    if (Object.getPrototypeOf(this) !== l) throw new M("Use 'new' to construct " + d);
                    if (void 0 === h.constructor_body) throw new M(d + " has no accessible constructor");
                    var t = h.constructor_body[e.length];
                    if (void 0 === t) throw new M(`Tried to invoke ctor of ${d} with invalid number of parameters (${e.length}) - expected (${Object.keys(h.constructor_body).toString()}) parameters instead!`);
                    return t.apply(this, e);
                }), l = Object.create(i, {
                    constructor: {
                        value: s
                    }
                });
                s.prototype = l;
                var h = new ce(d, s, l, f, r, o, u, c);
                h.baseClass && (h.baseClass.__derivedClasses ??= [], h.baseClass.__derivedClasses.push(h));
                var p = new ye(d, h, !0, !1, !1), y = new ye(d + "*", h, !1, !1, !1), g = new ye(d + " const*", h, !1, !0, !1);
                return q[e] = {
                    pointerType: y,
                    constPointerType: g
                }, ((e, t, r)=>{
                    n.hasOwnProperty(e) || H("Replacing nonexistent public symbol"), void 0 !== n[e].overloadTable && void 0 !== r ? n[e].overloadTable[r] = t : (n[e] = t, n[e].argCount = r);
                })(m, s), [
                    p,
                    y,
                    g
                ];
            });
        },
        _embind_register_class_constructor: (e, t, r, n, a, i)=>{
            var o = Te(t, r);
            a = be(n, a), z([], [
                e
            ], (e)=>{
                var r = `constructor ${(e = e[0]).name}`;
                if (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []), void 0 !== e.registeredClass.constructor_body[t - 1]) throw new M(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                return e.registeredClass.constructor_body[t - 1] = ()=>{
                    Pe(`Cannot construct ${e.name} due to unbound types`, o);
                }, z([], o, (n)=>(n.splice(1, 0, null), e.registeredClass.constructor_body[t - 1] = Ae(r, n, null, a, i), [])), [];
            });
        },
        _embind_register_class_function: (e, t, r, n, a, i, o, s, u)=>{
            var l = Te(r, n);
            t = ((e)=>{
                const t = (e = e.trim()).indexOf("(");
                return -1 !== t ? e.substr(0, t) : e;
            })(t = k(t)), i = be(a, i), z([], [
                e
            ], (e)=>{
                var n = `${(e = e[0]).name}.${t}`;
                function a() {
                    Pe(`Cannot call ${n} due to unbound types`, l);
                }
                t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.registeredClass.pureVirtualFunctions.push(t);
                var c = e.registeredClass.instancePrototype, d = c[t];
                return void 0 === d || void 0 === d.overloadTable && d.className !== e.name && d.argCount === r - 2 ? (a.argCount = r - 2, a.className = e.name, c[t] = a) : (le(c, t, n), c[t].overloadTable[r - 2] = a), z([], l, (a)=>{
                    var s = Ae(n, a, e, i, o, u);
                    return void 0 === c[t].overloadTable ? (s.argCount = r - 2, c[t] = s) : c[t].overloadTable[r - 2] = s, [];
                }), [];
            });
        },
        _embind_register_emval: (e)=>Y(e, ke),
        _embind_register_float: (e, t, r)=>{
            Y(e, {
                name: t = k(t),
                fromWireType: (e)=>e,
                toWireType: (e, t)=>t,
                argPackAdvance: 8,
                readValueFromPointer: Be(t, r),
                destructorFunction: null
            });
        },
        _embind_register_integer: (e, t, r, n, a)=>{
            t = k(t);
            var i = (e)=>e;
            if (0 === n) {
                var o = 32 - 8 * r;
                i = (e)=>e << o >>> o;
            }
            var s = t.includes("unsigned");
            Y(e, {
                name: t,
                fromWireType: i,
                toWireType: s ? function(e, t) {
                    return this.name, t >>> 0;
                } : function(e, t) {
                    return this.name, t;
                },
                argPackAdvance: 8,
                readValueFromPointer: Ue(t, r, 0 !== n),
                destructorFunction: null
            });
        },
        _embind_register_memory_view: (e, t, r)=>{
            var n = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array
            ][t];
            function a(e) {
                var t = y[e >> 2], r = y[e + 4 >> 2];
                return new n(d.buffer, r, t);
            }
            Y(e, {
                name: r = k(r),
                fromWireType: a,
                argPackAdvance: 8,
                readValueFromPointer: a
            }, {
                ignoreDuplicateRegistrations: !0
            });
        },
        _embind_register_std_string: (e, t)=>{
            var r = "std::string" === (t = k(t));
            Y(e, {
                name: t,
                fromWireType (e) {
                    var t, n = y[e >> 2], a = e + 4;
                    if (r) for(var i = a, o = 0; o <= n; ++o){
                        var s = a + o;
                        if (o == n || 0 == h[s]) {
                            var u = Ne(i, s - i);
                            void 0 === t ? t = u : (t += String.fromCharCode(0), t += u), i = s + 1;
                        }
                    }
                    else {
                        var l = new Array(n);
                        for(o = 0; o < n; ++o)l[o] = String.fromCharCode(h[a + o]);
                        t = l.join("");
                    }
                    return ct(e), t;
                },
                toWireType (e, t) {
                    var n;
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    var a = "string" == typeof t;
                    a || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || x("Cannot pass non-string to std::string"), n = r && a ? ze(t) : t.length;
                    var i = lt(4 + n + 1), o = i + 4;
                    if (y[i >> 2] = n, r && a) He(t, o, n + 1);
                    else if (a) for(var s = 0; s < n; ++s){
                        var u = t.charCodeAt(s);
                        u > 255 && (ct(o), x("String has UTF-16 code units that do not fit in 8 bits")), h[o + s] = u;
                    }
                    else for(s = 0; s < n; ++s)h[o + s] = t[s];
                    return null !== e && e.push(ct, i), i;
                },
                argPackAdvance: 8,
                readValueFromPointer: pe,
                destructorFunction (e) {
                    ct(e);
                }
            });
        },
        _embind_register_std_wstring: (e, t, r)=>{
            var n, a, i, o;
            r = k(r), 2 === t ? (n = Ge, a = Le, o = Je, i = (e)=>m[e >> 1]) : 4 === t && (n = Ze, a = qe, o = Ke, i = (e)=>y[e >> 2]), Y(e, {
                name: r,
                fromWireType: (e)=>{
                    for(var r, a = y[e >> 2], o = e + 4, s = 0; s <= a; ++s){
                        var u = e + 4 + s * t;
                        if (s == a || 0 == i(u)) {
                            var l = n(o, u - o);
                            void 0 === r ? r = l : (r += String.fromCharCode(0), r += l), o = u + t;
                        }
                    }
                    return ct(e), r;
                },
                toWireType: (e, n)=>{
                    "string" != typeof n && x(`Cannot pass non-string to C++ string type ${r}`);
                    var i = o(n), s = lt(4 + i + t);
                    return y[s >> 2] = i / t, a(n, s + 4, i + t), null !== e && e.push(ct, s), s;
                },
                argPackAdvance: 8,
                readValueFromPointer: pe,
                destructorFunction (e) {
                    ct(e);
                }
            });
        },
        _embind_register_void: (e, t)=>{
            Y(e, {
                isVoid: !0,
                name: t = k(t),
                argPackAdvance: 0,
                fromWireType: ()=>{},
                toWireType: (e, t)=>{}
            });
        },
        _emscripten_memcpy_js: (e, t, r)=>h.copyWithin(e, t, t + r),
        _gmtime_js: function(e, t, r) {
            var n, a, i = (a = t) + 2097152 >>> 0 < 4194305 - !!(n = e) ? (n >>> 0) + 4294967296 * a : NaN, o = new Date(1e3 * i);
            p[r >> 2] = o.getUTCSeconds(), p[r + 4 >> 2] = o.getUTCMinutes(), p[r + 8 >> 2] = o.getUTCHours(), p[r + 12 >> 2] = o.getUTCDate(), p[r + 16 >> 2] = o.getUTCMonth(), p[r + 20 >> 2] = o.getUTCFullYear() - 1900, p[r + 24 >> 2] = o.getUTCDay();
            var s = Date.UTC(o.getUTCFullYear(), 0, 1, 0, 0, 0, 0), u = (o.getTime() - s) / 864e5 | 0;
            p[r + 28 >> 2] = u;
        },
        _tzset_js: (e, t, r, n)=>{
            var a = (new Date).getFullYear(), i = new Date(a, 0, 1), o = new Date(a, 6, 1), s = i.getTimezoneOffset(), u = o.getTimezoneOffset(), l = Math.max(s, u);
            y[e >> 2] = 60 * l, p[t >> 2] = Number(s != u);
            var c = (e)=>e.toLocaleTimeString(void 0, {
                    hour12: !1,
                    timeZoneName: "short"
                }).split(" ")[1], d = c(i), h = c(o);
            u < s ? (He(d, r, 17), He(h, n, 17)) : (He(d, n, 17), He(h, r, 17));
        },
        emscripten_date_now: ()=>Date.now(),
        emscripten_resize_heap: (e)=>{
            var t = h.length, r = 2147483648;
            if ((e >>>= 0) > r) return !1;
            for(var n, a, i = 1; i <= 4; i *= 2){
                var o = t * (1 + .2 / i);
                o = Math.min(o, e + 100663296);
                var s = Math.min(r, (n = Math.max(e, o)) + ((a = 65536) - n % a) % a);
                if (Xe(s)) return !0;
            }
            return !1;
        },
        environ_get: (e, t)=>{
            var r = 0;
            return et().forEach((n, a)=>{
                var i = t + r;
                y[e + 4 * a >> 2] = i, ((e, t)=>{
                    for(var r = 0; r < e.length; ++r)d[t++] = e.charCodeAt(r);
                    d[t] = 0;
                })(n, i), r += n.length + 1;
            }), 0;
        },
        environ_sizes_get: (e, t)=>{
            var r = et();
            y[e >> 2] = r.length;
            var n = 0;
            return r.forEach((e)=>n += e.length + 1), y[t >> 2] = n, 0;
        },
        strftime_l: (e, t, r, n, a)=>at(e, t, r, n)
    }, st = function() {
        var e, t, n, a = {
            env: ot,
            wasi_snapshot_preview1: ot
        };
        function i(e, t) {
            var r;
            return st = e.exports, l = st.memory, $(), ge = st.__indirect_function_table, r = st.__wasm_call_ctors, b.unshift(r), function(e) {
                if (0 == --P && T) {
                    var t = T;
                    T = null, t();
                }
            }(), st;
        }
        return P++, F || (F = D()), (e = F, t = a, n = function(e) {
            i(e.instance);
        }, "function" != typeof WebAssembly.instantiateStreaming || A(e) || "function" != typeof fetch ? j(e, t, n) : fetch(e, {
            credentials: "same-origin"
        }).then((r)=>WebAssembly.instantiateStreaming(r, t).then(n, function(r) {
                return c(`wasm streaming compile failed: ${r}`), c("falling back to ArrayBuffer instantiation"), j(e, t, n);
            }))).catch(r), {};
    }(), ut = (e)=>(ut = st.__getTypeName)(e), lt = (e)=>(lt = st.malloc)(e), ct = (e)=>(ct = st.free)(e);
    function dt() {
        P > 0 || (W(C), P > 0 || it || (it = !0, n.calledRun = !0, _ || (W(b), t(n), W(w))));
    }
    return n.dynCall_iiijj = (e, t, r, a, i, o, s)=>(n.dynCall_iiijj = st.dynCall_iiijj)(e, t, r, a, i, o, s), n.dynCall_viijii = (e, t, r, a, i, o, s)=>(n.dynCall_viijii = st.dynCall_viijii)(e, t, r, a, i, o, s), n.dynCall_iiiiij = (e, t, r, a, i, o, s)=>(n.dynCall_iiiiij = st.dynCall_iiiiij)(e, t, r, a, i, o, s), n.dynCall_iiiiijj = (e, t, r, a, i, o, s, u, l)=>(n.dynCall_iiiiijj = st.dynCall_iiiiijj)(e, t, r, a, i, o, s, u, l), n.dynCall_iiiiiijj = (e, t, r, a, i, o, s, u, l, c)=>(n.dynCall_iiiiiijj = st.dynCall_iiiiiijj)(e, t, r, a, i, o, s, u, l, c), T = function e() {
        it || dt(), it || (T = e);
    }, dt(), a;
});
const u = ()=>{};
function l(e, t) {
    try {
        if ("/" === new URL(t).pathname) return `${t}mediainfo.js/dist/${e}`;
    } catch  {}
    return `${t}../${e}`;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
    if (void 0 === t) return new Promise((t, r)=>{
        c(e, t, r);
    });
    const { locateFile: n, ...i } = {
        ...a,
        ...e,
        format: e.format ?? a.format
    };
    s({
        print: u,
        printErr: u,
        locateFile: n ?? l,
        onAbort: (e)=>{
            r && r(e);
        }
    }).then((e)=>{
        t(new o(e, i));
    }).catch((e)=>{
        r && r(e);
    });
}
function d(e, t) {
    return null !== e && "object" == typeof e && e["@type"] === t;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvk5e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _functionsJs = require("../functions.js");
var _reactiveConnectableJs = require("./reactive-connectable.js");
var _reactiveConnectableJsDefault = parcelHelpers.interopDefault(_reactiveConnectableJs);
var _webBleJs = require("./web-ble.js");
var _enumsJs = require("./enums.js");
const controllable = (0, _reactiveConnectableJsDefault.default)({
    deviceType: (0, _enumsJs.Device).controllable,
    filter: (0, _webBleJs.webBle).filters.controllable()
});
const speedCadenceSensor = (0, _reactiveConnectableJsDefault.default)({
    deviceType: (0, _enumsJs.Device).speedCadenceSensor,
    filter: (0, _webBleJs.webBle).filters.speedCadenceSensor()
});
const heartRateMonitor = (0, _reactiveConnectableJsDefault.default)({
    deviceType: (0, _enumsJs.Device).heartRateMonitor,
    filter: (0, _webBleJs.webBle).filters.heartRateMonitor()
});
const powerMeter = (0, _reactiveConnectableJsDefault.default)({
    deviceType: (0, _enumsJs.Device).powerMeter,
    filter: (0, _webBleJs.webBle).filters.powerMeter()
});
const moxy = (0, _reactiveConnectableJsDefault.default)({
    deviceType: (0, _enumsJs.Device).smo2,
    filter: (0, _webBleJs.webBle).filters.smo2()
});
const coreTemp = (0, _reactiveConnectableJsDefault.default)({
    deviceType: (0, _enumsJs.Device).coreTemp,
    filter: (0, _webBleJs.webBle).filters.coreTemp()
}); // export {
 //     controllabe,
 //     heartRateMonitor,
 //     powerMeter,
 //     speedCadenceSensor,
 // };

},{"../functions.js":"2jd1e","./reactive-connectable.js":"czq50","./web-ble.js":"1bEyg","./enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"czq50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../functions.js");
var _modelsJs = require("../models/models.js");
var _connectableJs = require("./connectable.js");
var _connectableJsDefault = parcelHelpers.interopDefault(_connectableJs);
var _webBleJs = require("./web-ble.js");
var _enumsJs = require("./enums.js");
function ReactiveConnectable(args = {}) {
    // config
    const deviceType = args.deviceType ?? (0, _enumsJs.Device).generic;
    const filter = args.filter ?? (0, _webBleJs.webBle).filters.generic();
    const identifier = `ble:${deviceType}`;
    const connectable = (0, _connectableJsDefault.default)({
        filter,
        onData,
        onConnecting,
        onConnected,
        onDisconnect,
        onConnectFail
    });
    // end config
    // state
    let mode = (0, _enumsJs.ControlMode).erg;
    let abortController;
    let signal;
    // end state
    function getIdentifier() {
        return identifier;
    }
    function onConnecting() {
        (0, _functionsJs.xf).dispatch(`${getIdentifier()}:connecting`);
    }
    function onConnected() {
        (0, _functionsJs.xf).dispatch(`${getIdentifier()}:connected`);
        (0, _functionsJs.xf).dispatch(`${getIdentifier()}:name`, connectable.getName());
    }
    function onDisconnect() {
        (0, _functionsJs.xf).dispatch(`${getIdentifier()}:disconnected`);
        (0, _functionsJs.xf).dispatch(`${getIdentifier()}:name`, "--");
        if ((0, _modelsJs.models).sources.isSource("power", getIdentifier())) (0, _functionsJs.xf).dispatch(`power`, 0);
        if ((0, _modelsJs.models).sources.isSource("cadence", getIdentifier())) (0, _functionsJs.xf).dispatch(`cadence`, 0);
        if ((0, _modelsJs.models).sources.isSource("speed", getIdentifier())) (0, _functionsJs.xf).dispatch(`speed`, 0);
        if ((0, _modelsJs.models).sources.isSource("heartRate", getIdentifier())) (0, _functionsJs.xf).dispatch(`heartRate`, 0);
        if ((0, _modelsJs.models).sources.isSource("smo2", getIdentifier())) (0, _functionsJs.xf).dispatch(`smo2`, 0);
        if ((0, _modelsJs.models).sources.isSource("thb", getIdentifier())) (0, _functionsJs.xf).dispatch(`thb`, 0);
        if ((0, _modelsJs.models).sources.isSource("coreBodyTemperature", getIdentifier())) {
            (0, _functionsJs.xf).dispatch(`coreBodyTemperature`, 0);
            (0, _functionsJs.xf).dispatch(`skinTemperature`, 0);
        }
    }
    function onConnectFail() {
        (0, _functionsJs.xf).dispatch(`${getIdentifier()}:disconnected`);
    }
    function onData(data) {
        if ("power" in data && (0, _modelsJs.models).sources.isSource("power", identifier)) (0, _functionsJs.xf).dispatch(`power`, data.power);
        if ("cadence" in data && (0, _modelsJs.models).sources.isSource("cadence", identifier)) (0, _functionsJs.xf).dispatch(`cadence`, data.cadence);
        if ("speed" in data && (0, _modelsJs.models).sources.isSource("speed", identifier)) (0, _functionsJs.xf).dispatch(`speed`, (0, _modelsJs.models).speed.kmhToMps(data.speed));
        if ("heartRate" in data && (0, _modelsJs.models).sources.isSource("heartRate", identifier)) (0, _functionsJs.xf).dispatch(`heartRate`, data.heartRate);
        if ("currentSaturatedHemoglobin" in data) (0, _functionsJs.xf).dispatch(`smo2`, data.currentSaturatedHemoglobin);
        if ("totalHemoglobinSaturation" in data) (0, _functionsJs.xf).dispatch(`thb`, data.totalHemoglobinSaturation);
        if ("coreBodyTemperature" in data) (0, _functionsJs.xf).dispatch(`coreBodyTemperature`, data.coreBodyTemperature);
        if ("skinTemperature" in data) (0, _functionsJs.xf).dispatch(`skinTemperature`, data.skinTemperature);
    }
    async function onSwitch() {
        if (connectable.isConnected()) connectable.disconnect();
        else connectable.connect({
            requesting: true
        });
    }
    function onMode(x) {
        mode = x;
    }
    function onUserWeight(x) {
        if (!connectable.isConnected()) return;
    }
    function onPowerTarget(powerTarget) {
        if (!connectable.isConnected() || !(0, _functionsJs.equals)(mode, (0, _enumsJs.ControlMode).erg)) return;
        connectable.services.trainer.setPowerTarget({
            power: powerTarget
        });
    }
    function onResistanceTarget(resistanceTarget) {
        if (!connectable.isConnected() || !(0, _functionsJs.equals)(mode, (0, _enumsJs.ControlMode).resistance)) return;
        connectable.services.trainer.setResistanceTarget({
            resistance: resistanceTarget
        });
    }
    function onSlopeTarget(slopeTarget) {
        if (!connectable.isConnected() || !(0, _functionsJs.equals)(mode, (0, _enumsJs.ControlMode).sim)) return;
        connectable.services.trainer.setSimulation({
            grade: slopeTarget
        });
    }
    function start() {
        abortController = new AbortController();
        signal = {
            signal: abortController.signal
        };
        (0, _functionsJs.xf).sub(`ui:${getIdentifier()}:switch`, onSwitch, signal);
        if ((0, _functionsJs.equals)(deviceType, (0, _enumsJs.Device).controllable)) {
            (0, _functionsJs.xf).sub("db:mode", onMode, signal);
            (0, _functionsJs.xf).sub("db:weight", onUserWeight, signal);
            (0, _functionsJs.xf).sub("db:powerTarget", onPowerTarget, signal);
            (0, _functionsJs.xf).sub("db:resistanceTarget", onResistanceTarget, signal);
            (0, _functionsJs.xf).sub("db:slopeTarget", onSlopeTarget, signal);
        }
    }
    function stop() {
        abortController.abort();
    }
    start();
    return Object.freeze({
        getIdentifier,
        start,
        stop,
        ...connectable
    });
}
exports.default = ReactiveConnectable;

},{"../functions.js":"2jd1e","../models/models.js":"hfV5L","./connectable.js":"lY78A","./web-ble.js":"1bEyg","./enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lY78A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../functions.js");
var _characteristicJs = require("./characteristic.js");
var _serviceJs = require("./service.js");
var _ftmsJs = require("./ftms/ftms.js");
var _ftmsJsDefault = parcelHelpers.interopDefault(_ftmsJs);
var _fecJs = require("./fec/fec.js");
var _fecJsDefault = parcelHelpers.interopDefault(_fecJs);
var _wcpsJs = require("./wcps/wcps.js");
var _wcpsJsDefault = parcelHelpers.interopDefault(_wcpsJs);
var _cpsJs = require("./cps/cps.js");
var _cpsJsDefault = parcelHelpers.interopDefault(_cpsJs);
var _cscsJs = require("./cscs/cscs.js");
var _cscsJsDefault = parcelHelpers.interopDefault(_cscsJs);
var _hrsJs = require("./hrs/hrs.js");
var _hrsJsDefault = parcelHelpers.interopDefault(_hrsJs);
var _rcsJs = require("./rcs/rcs.js");
var _rcsJsDefault = parcelHelpers.interopDefault(_rcsJs);
var _smo2Js = require("./moxy/smo2.js");
var _smo2JsDefault = parcelHelpers.interopDefault(_smo2Js);
var _ctJs = require("./ct/ct.js");
var _ctJsDefault = parcelHelpers.interopDefault(_ctJs);
var _webBleJs = require("./web-ble.js");
var _enumsJs = require("./enums.js");
// TODO:
// - in the watch() method handle:
//     - getDevices() fail,
//     - the device not being in devices.
// - in the setup() method and services object add the ability to work with multiple
//   services start and stop them on demand, and switch between them dynamically
// Usage:
//
// Case 1: Connect unknown number of devices or multiple devices
// of the same device type (power meters, heart rate monitors).
// Here the device is being requested from client code and passed
// as option to the construtor function:
//
// const filter = {filters: [
//     {services: [uuids.heartRate]},
//     {services: [uuids.cyclingPower]},
// ]};
// const device = await navigator.bluetooth.requestDevice(filter);
// const connectable = Connectable({device});
// await connectable.connect();
//
// Case 2: Connect devices by Device Category
// Here we are going to have a predetermined set of devices that we are interested in.
// We care to connect only one device per device type: power meter, heart rate monitor
// The client code creates a strict filter and passes it as configuration option to
// the function constructor:
//
// const heartRateMonitorFilter = {filters: [{services: [uuids.heartRate]}]};
// const heartRateMonitor = Connectable({filter: heartRateMonitorFilter});
// await heartRateMonitor.connect();
//
// const powerMeterFilter = {filters: [{services: [uuids.cyclingPower]}]};
// const powerMeter = Connectable({filter: powerMeterFilter});
// await powerMeter.connect();
//
function Connectable(args = {}) {
    const defaults = {
        name: "Unknown",
        filter: (0, _webBleJs.webBle).filters.all()
    };
    //
    // Config
    //
    // the following values can be optionally configured if not they will use the
    // their default values.
    // this is the device filter for requestDevice.
    // The default value will look for any bluetooth device.
    //
    // {}
    const filter = args.filter ?? defaults.filter;
    // setup(), method will be executed by the end of the connection procedure,
    // It will try to determine the deviceType of the device based on what services
    // are present there and it will initialize those services.
    // Extend the method if you want to add support for new Services.
    // Overwrite the method if you want to implement each device separetly.
    //
    // Function
    const setup = args.setup ?? defaultSetup;
    // Connection callbacks
    // the defaults only log, but they are composed with corresponding optional
    // callbacks
    //
    // Function
    const onConnecting = (0, _functionsJs.compose2)(args.onConnecting ?? ((x)=>x), defaultOnConnecting);
    const onConnected = (0, _functionsJs.compose2)(args.onConnected ?? ((x)=>x), defaultOnConnected);
    const onConnectFail = (0, _functionsJs.compose2)(args.onConnectFail ?? ((x)=>x), defaultOnConnectFail);
    const onDisconnect = (0, _functionsJs.compose2)(args.onDisconnect ?? ((x)=>x), defaultOnDisconnect);
    // Characteristics notify/indicate callbacks
    // onData(), will be attached to the each service measurement characteristic
    // it will return data like power, heartRate, etc. in an object called with
    // structure: {power?: Int, heartRate?: Int, ...}
    // note that each object will have different contents based on what
    // data is included in the message being decoded.
    //
    // Function
    const onData = args.onData ?? defaultOnData;
    // onControl(), will be attached to the each service control characteristic
    // if one is present and has a notify property.
    // It will return object from the decoded message.
    // The parser that decodes the message is configured on the Service factory.
    //
    // Function
    const onControl = args.onControl ?? defaultOnControl;
    // default callback implementations
    // Void -> Void
    function defaultOnConnecting() {
        (0, _functionsJs.print).log(`ble: connecting: to: ${getName()} ...`);
    }
    // Void -> Void
    function defaultOnConnected() {
        (0, _functionsJs.print).log(`ble: connected: to: ${getName()} ${getDeviceType()}`);
    }
    // Void -> Void
    function defaultOnConnectFail() {
        (0, _functionsJs.print).log(`ble: connection-fail: from: ${getName()}`);
    }
    // Void -> Void
    function defaultOnDisconnect() {
        (0, _functionsJs.print).log(`ble: disconnected: from: ${getName()}`);
    }
    // {} -> Void
    function defaultOnData(msg) {
        (0, _functionsJs.print).log(`ble: rx: from: ${getName()} `, msg);
    }
    // {} -> Void
    function defaultOnControl(msg) {
        (0, _functionsJs.print).log(`ble: rx: from: ${getName()} `, msg);
    }
    // end default callback implementations
    //
    // End Config
    //
    //
    // State
    //
    // public state
    // {'<service-name>': Service}
    let services = {};
    // end public state
    // private state variables, please don't expose them, use the accesor methods
    // BluetoothDevice{
    //     id: String,
    //     name: String,
    //     gatt: BluetoothRemoteGATTServer,
    //     onadvertisementreceived: null,
    //     ongattserverdisconnected: null,
    //     watchingAdvertisements: Bool,
    // }
    let _device = args.device;
    // BluetoothRemoteGATTServer{
    //     device: BluetoothDevice,
    //     connected: Bool
    // }
    let _server;
    // [BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }]
    let _primaryServicesList;
    // {'<service-uuid>': BluetoothRemoteGATTService}
    let _primaryServices;
    let _status = (0, _enumsJs.Status).disconnected;
    let _connected = false;
    let _ready = false;
    let _autoReconnect = true;
    let _deviceType = (0, _enumsJs.Device).generic;
    let abortController;
    let signal;
    // end private state
    // accesor methods
    function isConnected() {
        return _connected;
    }
    function isReady() {
        return _ready;
    }
    function getName() {
        return (0, _functionsJs.exists)(_device) ? _device.name : defaults.name;
    }
    function getId() {
        return (0, _functionsJs.exists)(_device) ? _device.id : undefined;
    }
    function getDeviceType() {
        return _deviceType;
    }
    function getSignature() {
        return {
            id: getId(),
            name: getName(),
            deviceType: getDeviceType()
        };
    }
    function getStatus() {
        return _status;
    }
    function setReady(ready) {
        _ready = ready;
    }
    // end accesor methods
    function printServices() {
        _primaryServicesList.forEach((service)=>{
            (0, _functionsJs.print).log(`ble: service: ${(0, _serviceJs.serviceToString)(service)}`);
        });
    }
    // String -> Bool
    function hasService(uuid) {
        return uuid in _primaryServices;
    }
    // String -> BluetoothRemoteGATTService?
    function getService(uuid) {
        return _primaryServices[uuid];
    }
    //
    // methods
    //
    // connect(), can be used in 3 ways to connect to a device
    //
    // - connect({requesting: false, watching: false})
    //   this is the default case, here the raw gatt device has been already requested
    //   and must be passed as config option:
    //
    //   const connectable = Connectable({device: GATTDevice});
    //   connectable.connect();
    //
    // - connect({requesting: true, watching: false})
    //   here we want to request and connect to the device in one step
    //
    //   const connectable = Connectable();
    //   connectable.connect();
    //
    // - connect({requesting: false, watching: true})
    //   here the device is already known and available in the browser web-ble cache
    //   so we want to listen for when it becomes availbale again. This is used to
    //   recover devices that have droped.
    //
    async function connect(args = {}) {
        if ((0, _functionsJs.equals)(getStatus(), (0, _enumsJs.Status).connecting) || (0, _functionsJs.equals)(getStatus(), (0, _enumsJs.Status).connected)) return;
        const requesting = args.requesting ?? false;
        const watching = args.watching ?? false;
        // guard
        // stop execution on missuse and notify the developer
        if (!requesting && !watching && !(0, _functionsJs.exists)(_device)) {
            // can't be watching or requesting if device is not passed as config
            console.error(`ble: connectable: 'watching false and requesting false requires a gatt device to be passed as config to Connectable!'`);
            (0, _functionsJs.print).makeCoffee();
        }
        if (requesting && watching) {
            // can't be watching and requesting at the same time
            console.error(`ble: connectable: 'can't be requesting and watching for a devices at the same time pick one!'`);
            (0, _functionsJs.print).callKarenFromHR();
            return;
        }
        // end guard
        abortController = new AbortController();
        signal = {
            signal: abortController.signal
        };
        _status = (0, _enumsJs.Status).connecting;
        onConnecting();
        try {
            if (watching) _device = await watch(_device.id);
            if (requesting) _device = await request();
            _server = await _device.gatt.connect();
            (0, _functionsJs.print).log(`ble: gatt: connected: to: ${getName()} 'setting up ...'`);
            _primaryServicesList = await _server.getPrimaryServices();
            _primaryServices = (0, _serviceJs.gattListToObject)(_primaryServicesList);
            _connected = true;
            _autoReconnect = true;
            _status = (0, _enumsJs.Status).connected;
            _device.addEventListener("gattserverdisconnected", _onDisconnect, signal);
            (0, _functionsJs.print).log(`ble: gatt: services: of: ${getName()}`);
            printServices();
            let resSetup = await setup();
            // calling the connected callback last, because only at that point
            // the device is usable.
            onConnected();
        } catch (e) {
            _connected = false;
            _status = (0, _enumsJs.Status).disconnected;
            onConnectFail(e);
            console.warn(e);
        }
    }
    // request a device by using the configured filter
    // can throw an error handle it outside
    //
    // Void -> GATTDevice?
    async function request() {
        const device = await navigator.bluetooth.requestDevice(filter);
        return device;
    }
    // Int -> GATTDevice?
    async function watch(deviceId) {
        (0, _functionsJs.print).log(`ble: watching: advertisements: for: ${deviceId}`);
        const devices = await navigator.bluetooth.getDevices();
        const device = devices.find((device)=>device.id === deviceId);
        let resolve;
        let reject;
        const maybeDevice = new Promise(function(res, rej) {
            resolve = res;
            reject = rej;
        });
        const timeout = 60000; // 60s
        const timeoutId = setTimeout(function() {
            (0, _functionsJs.print).log(`ble: watch: timeout:`);
            abortController.abort();
            reject();
        }, timeout);
        const abortController = new AbortController();
        device.addEventListener("advertisementreceived", onAdvertisementReceived, {
            signal: abortController.signal,
            once: true
        });
        async function onAdvertisementReceived(e) {
            abortController.abort();
            clearTimeout(timeoutId);
            (0, _functionsJs.print).log(`ble: watch: advertisement: received:`);
            resolve(e.device);
        }
        await device.watchAdvertisements({
            signal: abortController.signal
        });
        return maybeDevice;
    }
    async function disconnect() {
        if (!_connected) return;
        _connected = false;
        _status = (0, _enumsJs.Status).disconnected;
        _autoReconnect = false;
        abortController.abort();
        const res = await _device.gatt.disconnect();
        onDisconnect();
    }
    function _onDisconnect() {
        _status = (0, _enumsJs.Status).disconnected;
        onDisconnect();
        if (_autoReconnect) onDropout();
    }
    async function onDropout() {
        (0, _functionsJs.print).warn(`ble: dropout: ${_device.name}`);
        if (watchAdvertisementsSupported()) connect({
            watching: true,
            requesting: false
        });
        else {
            (0, _functionsJs.print).log(`:connectable 'watchAdvertisements not supported falling back to device.connect ${_device.name}'`);
            connect({
                watching: false,
                requesting: false
            });
        }
    }
    function watchAdvertisementsSupported() {
        return (0, _functionsJs.exists)(_device.watchAdvertisements);
    }
    // check what services got collected from the device
    // execute a fallthrough logic to determine:
    // - deviceType
    // - setup Services by linking them to data callbacks
    //   and the raw gattService object
    async function defaultSetup() {
        const hasFTMS = hasService((0, _webBleJs.uuids).fitnessMachine);
        const hasFEC = hasService((0, _webBleJs.uuids).fec);
        const hasWCPS = hasService((0, _webBleJs.uuids).wahooFitnessMachine);
        const hasPower = hasService((0, _webBleJs.uuids).cyclingPower);
        const hasCadence = hasService((0, _webBleJs.uuids).speedCadence);
        const hasHeartRate = hasService((0, _webBleJs.uuids).heartRate);
        const hasRaceController = hasService((0, _webBleJs.uuids).raceController);
        const hasSmo2 = hasService((0, _webBleJs.uuids).smo2);
        const hasCoreTemp = hasService((0, _webBleJs.uuids).coreTemp);
        const hasTrainerControl = hasFTMS || hasWCPS || hasFEC;
        // Order here is important
        if (hasHeartRate) {
            // heart rate
            _deviceType = (0, _enumsJs.Device).heartRateMonitor;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()} `);
            services["hrs"] = (0, _hrsJsDefault.default)({
                service: getService((0, _webBleJs.uuids).heartRate),
                onData: onData
            });
            let res = await services.hrs.setup();
            // NOTE: we don't return here because:
            // - the Tickr X has a CSC service too
            // - the Zwift Hub has FTMS
            if (!(hasCadence || hasTrainerControl)) return res;
        }
        if (hasTrainerControl) {
            // controllable
            //
            // Here we are determining which trainer control service the device
            // supports and we initialize it. We can initialize only one if more are
            // present else the device could fail (Tacx), so we do early return.
            // The supported control services are FTMS, FEC and WCPS.
            // There choosen one will be called 'trainer' and assigned to services.
            //
            // We don't want more than one control service to be initialized, because
            // on many trainers they will clash and this results in resistance jumping
            // between both services. This is resolved only by power cycling the
            // trainer and reconnecting again.
            _deviceType = (0, _enumsJs.Device).controllable;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()}`);
            if (hasFTMS) {
                services["trainer"] = (0, _ftmsJsDefault.default)({
                    service: getService((0, _webBleJs.uuids).fitnessMachine),
                    onData: onData
                });
                let res = await services.trainer.setup();
                return res;
            }
            if (hasFEC) {
                services["trainer"] = (0, _fecJsDefault.default)({
                    service: getService((0, _webBleJs.uuids).fec),
                    onData: onData
                });
                let res = await services.trainer.setup();
                return res;
            }
            if (hasWCPS) {
                services["trainer"] = (0, _wcpsJsDefault.default)({
                    service: getService((0, _webBleJs.uuids).cyclingPower),
                    onData: onData
                });
                let res = await services.trainer.setup();
                return res;
            }
        }
        if (hasPower) {
            // power meter
            _deviceType = (0, _enumsJs.Device).powerMeter;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()}`);
            services["cps"] = (0, _cpsJsDefault.default)({
                service: getService((0, _webBleJs.uuids).cyclingPower),
                onData: onData
            });
            let res = await services.cps.setup();
            return res;
        }
        if (hasRaceController) {
            // zwift click or play
            _deviceType = (0, _enumsJs.Device).raceController;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()}`);
            services["rcs"] = (0, _rcsJsDefault.default)({
                service: getService((0, _webBleJs.uuids).raceController),
                onData: onData
            });
            let res = await services.rcs.setup();
            return res;
        }
        if (hasSmo2) {
            // SmO2
            _deviceType = (0, _enumsJs.Device).smo2;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()}`);
            services["smo2"] = (0, _smo2JsDefault.default)({
                service: getService((0, _webBleJs.uuids).smo2),
                onData: onData
            });
            let res = await services.smo2.setup();
            return res;
        }
        if (hasCoreTemp) {
            // CoreTemp
            _deviceType = (0, _enumsJs.Device).coreTemp;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()}`);
            services["coreTemp"] = (0, _ctJsDefault.default)({
                service: getService((0, _webBleJs.uuids).coreTemp),
                onData: onData
            });
            let res = await services.coreTemp.setup();
            return res;
        }
        if (hasCadence) {
            // cadence
            _deviceType = (0, _enumsJs.Device).speedCadenceSensor;
            (0, _functionsJs.print).log(`ble: connectable: setup: ${getDeviceType()}`);
            services["cscs"] = (0, _cscsJsDefault.default)({
                service: getService((0, _webBleJs.uuids).speedCadence),
                onData: onData
            });
            let res = await services.cscs.setup();
            return res;
        }
        // NOTE: if we reach this point the device doesn't have the advertized
        // services or is not supported at all. This is a developer error.
        // Either the filters are wrong or the remote device is advertising wrong.
        // In any case we can't continue using the device.
        // If we throw an error here the device will disconnect and the User
        // won't know why.
        // So this case must be handled in the UI and the method simply returns false.
        console.warn(`ble: connectable: setup: ${getName()} fail: 'this device doesn't have a supported service!`);
        return false;
    }
    async function setupService(args = {}) {
        const name = (0, _functionsJs.expect)(args.name, "connectable.setupService needs name: String");
        const struct = (0, _functionsJs.expect)(args.struct, `connectable.setupService needs struct: Function.`);
        const uuid = (0, _functionsJs.expect)(args.uuid, `connectable.setupService needs service uuid: UUID.`);
        services[name] = struct({
            service: getService(uuid),
            onData: onData
        });
        let res = await services[name].setup();
        return res;
    }
    // expose public methods and properties
    return {
        connect,
        disconnect,
        request,
        watch,
        hasService,
        getService,
        getName,
        getId,
        getDeviceType,
        getSignature,
        getStatus,
        isConnected,
        isReady,
        setReady,
        services
    };
}
exports.default = Connectable;

},{"../functions.js":"2jd1e","./characteristic.js":"k283X","./service.js":"kmNRA","./ftms/ftms.js":"bhaCF","./fec/fec.js":"eT2zA","./wcps/wcps.js":"eTiCS","./cps/cps.js":"6TjWj","./cscs/cscs.js":"2LSIc","./hrs/hrs.js":"e2ofu","./rcs/rcs.js":"b4iXP","./moxy/smo2.js":"BAiTt","./ct/ct.js":"iOyCR","./web-ble.js":"1bEyg","./enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k283X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Characteristic", ()=>Characteristic);
var _functionsJs = require("../functions.js");
var _webBleJs = require("./web-ble.js");
function Characteristic(args = {}) {
    //
    // config
    //
    // BluetoothRemoteGATTCharacteristic
    const _characteristic = args.characteristic;
    // Uuid
    const uuid = _characteristic.uuid;
    // String
    const name = args.name ?? (0, _webBleJs.webBle).uuidToName(_characteristic.uuid);
    // Function
    // some browsers don't have writeValueWithResponse,
    // but writeValue is depricated, so try the first or fallback to last.
    const writterFn = (0, _functionsJs.exists)(_characteristic.writeValueWithResponse) ? "writeValueWithResponse" : "writeValue";
    // Int, ms
    const responseTimeout = args.responseTimeout ?? 1000;
    // end  config
    //
    // state
    //
    // private state
    // Int
    let _responseTimeoutId;
    // Bool
    let _ready = true;
    let abortController;
    let signal;
    // end private state
    // end state
    // accesor methods
    function isReady() {
        return _ready;
    }
    // end accesor methods
    //
    // methods
    //
    // Function -> Bool;
    async function startNotifications(handler) {
        try {
            abortController = new AbortController();
            signal = {
                signal: abortController.signal
            };
            await _characteristic.startNotifications();
            _characteristic.addEventListener("characteristicvaluechanged", (e)=>handler(e.target.value), signal);
            (0, _functionsJs.print).log(`tx: notifications: started: on: ${name} ${uuid}.`);
            return true;
        } catch (e) {
            console.error(`notifications: failed: starting: on: name: ${name} uuid: ${uuid}`, e);
            return false;
        }
    }
    // Function, Int, Int -> Bool;
    async function startNotificationsWithRetry(handler, attempts = 10, txRate = 250) {
        const success = await startNotifications(handler);
        if (success) return true;
        else if (attempts > 0) {
            await (0, _functionsJs.wait)(txRate);
            (0, _functionsJs.print).log(`tx: startNotificationsWithRetry: fail: 'trying again'`);
            return await startNotificationsWithRetry(handler, attempts - 1);
        } else {
            (0, _functionsJs.print).log(`tx: startNotificationsWithRetry: fail: 'give up'`);
            return false;
        }
    }
    // Function -> Bool;
    async function stopNotifications(handler) {
        try {
            await _characteristic.stopNotifications();
            abortController.abort();
            (0, _functionsJs.print).log(`notifications: stopped: on: ${name} ${uuid}.`);
            return true;
        } catch (e) {
            console.error(`notifications: failed: stopping: on: name: ${name} uuid: ${uuid}`, e);
            return false;
        }
    }
    // {} -> Any
    async function read(args = {}) {
        const fallback = args.fallback;
        try {
            const value = await _characteristic.readValue();
            return value;
        } catch (e) {
            console.error(`rx: characteristic: :failed :read on: ${name} uuid: ${uuid}`, e);
            return fallback;
        }
    }
    // DataView -> Bool
    async function write(value) {
        let res;
        try {
            res = await _characteristic[writterFn](value);
            return true;
        } catch (e) {
            (0, _functionsJs.print).warn(`tx: characteristic: failed: write: on: ${name} uuid: ${uuid} value: [${(0, _functionsJs.arrayBufferToArray)(value)}]`, e);
            return false;
        }
    }
    // Any, Int, Int -> Bool
    async function writeWithRetry(value, attempts = 10, txRate = 250) {
        let success = await write(value);
        if (success) {
            (0, _functionsJs.print).log(`tx: characteristic: writeWithRetry: success:`);
            return true;
        } else if (attempts > 0) {
            (0, _functionsJs.print).log(`tx: characteristic: writeWithRetry: fail: continue:`);
            await (0, _functionsJs.wait)(txRate);
            return await writeWithRetry(value, attempts - 1);
        } else {
            (0, _functionsJs.print).log(`tx: characteristic: writeWithRetry: fail: break:`);
            return false;
        }
    }
    // Void -> Void
    function block() {
        _responseTimeoutId = setTimeout(release, responseTimeout);
        _ready = false;
    }
    // Void -> Void
    function release() {
        clearTimeout(_responseTimeoutId);
        _ready = true;
    }
    // end methods
    return Object.freeze({
        startNotifications,
        startNotificationsWithRetry,
        stopNotifications,
        read,
        write,
        writeWithRetry,
        isReady,
        block,
        release
    });
}

},{"../functions.js":"2jd1e","./web-ble.js":"1bEyg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bEyg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "webBle", ()=>webBle);
parcelHelpers.export(exports, "uuids", ()=>uuids);
var _functionsJs = require("../functions.js");
const services = {
    fitnessMachine: "00001826-0000-1000-8000-00805f9b34fb",
    cyclingPower: "00001818-0000-1000-8000-00805f9b34fb",
    heartRate: "0000180d-0000-1000-8000-00805f9b34fb",
    speedCadence: "00001816-0000-1000-8000-00805f9b34fb",
    fec: "6e40fec1-b5a3-f393-e0a9-e50e24dcca9e",
    wahooFitnessMachine: "a026ee0b-0a7d-4ab3-97fa-f1500f9feb8b",
    raceController: "00000001-19ca-4651-86e5-fa29dcdd09d1",
    smo2: "6404d801-4cb9-11e8-b566-0800200c9a66",
    coreTemp: "00002100-5b1e-4347-b07c-97b514dae121"
};
const characteristics = {
    // Fitness Machine
    indoorBikeData: "00002ad2-0000-1000-8000-00805f9b34fb",
    fitnessMachineControlPoint: "00002ad9-0000-1000-8000-00805f9b34fb",
    fitnessMachineFeature: "00002acc-0000-1000-8000-00805f9b34fb",
    supportedResistanceLevelRange: "00002ad6-0000-1000-8000-00805f9b34fb",
    supportedPowerRange: "00002ad8-0000-1000-8000-00805f9b34fb",
    fitnessMachineStatus: "00002ada-0000-1000-8000-00805f9b34fb",
    // Cycling Power
    cyclingPowerMeasurement: "00002a63-0000-1000-8000-00805f9b34fb",
    cyclingPowerFeature: "00002a65-0000-1000-8000-00805f9b34fb",
    cyclingPowerControlPoint: "00002a66-0000-1000-8000-00805f9b34fb",
    wahooTrainer: "a026e005-0a7d-4ab3-97fa-f1500f9feb8b",
    // Heart Rate
    heartRateMeasurement: "00002a37-0000-1000-8000-00805f9b34fb",
    // Cycling Speed and Cadence
    speedCadenceMeasurement: "00002a5b-0000-1000-8000-00805f9b34fb",
    speedCadenceFeature: "00002a5c-0000-1000-8000-00805f9b34fb",
    speedCadenceControlPoint: "00002a55-0000-1000-8000-00805f9b34fb",
    // Battery
    batteryLevel: "00002a19-0000-1000-8000-00805f9b34fb",
    // Device Information
    manufacturerNameString: "00002a29-0000-1000-8000-00805f9b34fb",
    modelNumberString: "00002a24-0000-1000-8000-00805f9b34fb",
    firmwareRevisionString: "00002a26-0000-1000-8000-00805f9b34fb",
    // FEC over BLE
    fec2: "6e40fec2-b5a3-f393-e0a9-e50e24dcca9e",
    fec3: "6e40fec3-b5a3-f393-e0a9-e50e24dcca9e",
    // Wahoo Fitness Machine
    wahooFitnessMachineControlPoint: "a026e037-0a7d-4ab3-97fa-f1500f9feb8b",
    // Race Controller (Zwift)
    raceControllerMeasurement: "00000002-19ca-4651-86e5-fa29dcdd09d1",
    raceControllerControlPoint: "00000003-19ca-4651-86e5-fa29dcdd09d1",
    raceControllerResponse: "00000004-19ca-4651-86e5-fa29dcdd09d1",
    // SmO2 Moxy
    smo2SensorData: "6404d804-4cb9-11e8-b566-0800200c9a66",
    smo2DeviceControl: "6404d810-4cb9-11e8-b566-0800200c9a66",
    smo2ControlPoint: "6404d811-4cd9-11e8-b566-0800200c9a66",
    // CoreTemp
    coreBodyTemp: "00002101-5b1e-4347-b07c-97b514dae121",
    corePrivate: "00004200-f366-40b2-ac37-70cce0aa83b1",
    // others
    sensorLocation: "00002a5d-0000-1000-8000-00805f9b34fb",
    clientCharacteristicConfiguration: "00002902-0000-1000-8000-00805f9b34fb"
};
const uuids = {
    ...services,
    ...characteristics
};
function Filters() {
    function controllable() {
        return {
            filters: [
                {
                    services: [
                        uuids.fitnessMachine
                    ]
                },
                {
                    services: [
                        uuids.fec
                    ]
                },
                {
                    services: [
                        uuids.wahooFitnessMachine
                    ]
                },
                {
                    services: [
                        uuids.cyclingPower
                    ]
                }
            ],
            optionalServices: [
                uuids.heartRate
            ]
        };
    }
    function powerMeter() {
        return {
            filters: [
                {
                    services: [
                        uuids.cyclingPower
                    ]
                }
            ]
        };
    }
    function speedCadenceSensor() {
        return {
            filters: [
                {
                    services: [
                        uuids.speedCadence
                    ]
                }
            ]
        };
    }
    function heartRateMonitor() {
        return {
            filters: [
                {
                    services: [
                        uuids.heartRate
                    ]
                }
            ],
            optionalServices: [
                uuids.speedCadence
            ]
        };
    }
    function smo2() {
        return {
            filters: [
                {
                    services: [
                        uuids.smo2
                    ]
                }
            ]
        };
    }
    function coreTemp() {
        return {
            filters: [
                {
                    services: [
                        uuids.coreTemp
                    ]
                },
                {
                    services: [
                        uuids.corePrivate
                    ]
                }
            ]
        };
    }
    function all() {
        return {
            acceptAllDevices: true
        };
    }
    async function generic(args = {}) {
        const devices = await navigator.bluetooth.getDevices();
        let exclusionFilters = devices.reduce((acc, device)=>{
            if (device?.gatt?.connected ?? false) acc.push({
                name: device?.name ?? "unknown"
            });
            return acc;
        }, []);
        // NOTE: guard against empty exclusion filter, they cause an error
        exclusionFilters = (0, _functionsJs.empty)(exclusionFilters) ? undefined : exclusionFilters;
        return {
            filters: [
                {
                    services: [
                        uuids.fitnessMachine
                    ]
                },
                {
                    services: [
                        uuids.fec
                    ]
                },
                {
                    services: [
                        uuids.wahooFitnessMachine
                    ]
                },
                {
                    services: [
                        uuids.cyclingPower
                    ]
                },
                {
                    services: [
                        uuids.speedCadence
                    ]
                },
                {
                    services: [
                        uuids.raceController
                    ]
                },
                {
                    services: [
                        uuids.smo2
                    ]
                },
                {
                    services: [
                        uuids.heartRate
                    ]
                },
                {
                    services: [
                        uuids.coreTemp
                    ]
                }
            ],
            exclusionFilters
        };
    }
    return Object.freeze({
        controllable,
        speedCadenceSensor,
        heartRateMonitor,
        powerMeter,
        smo2,
        coreTemp,
        all,
        generic
    });
}
function WebBLE() {
    const filters = Filters();
    function isAvailable() {
        // TODO: comment when not working on the iOS connect functionality.
        // This allows the iOS connection to show up in Chrome not just Safari
        // if(dev) {
        //     console.warn(`BLE Bridge mode ACTIVE!`);
        //     console.warn(`app will use BLE Bridge connection ONLY!`);
        //     return false;
        // }
        // END comment
        if ((0, _functionsJs.exists)(navigator)) return "bluetooth" in navigator;
        return false;
    }
    function uuidToName(uuid) {
        return Object.entries(uuids).find((kv)=>kv[1] === uuid)[0];
    }
    return Object.freeze({
        filters,
        isAvailable,
        uuidToName
    });
}
const webBle = WebBLE();

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmNRA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Service", ()=>Service);
parcelHelpers.export(exports, "serviceToString", ()=>serviceToString);
parcelHelpers.export(exports, "gattListToObject", ()=>gattListToObject);
var _functionsJs = require("../functions.js");
var _webBleJs = require("./web-ble.js");
var _characteristicJs = require("./characteristic.js");
// TODO:
// - add support for mapping write methods to parsers in the service spec object,
//   like 'write' for the WRITE property of a characteristic
// - in the start() methods handle startNotificationWithRetry fail if something fails
//   we need to disconnect the device
// Usage:
//
// function onData(msg) {
// // do something with the decoded data message
// }
//
// function onControl(msg) {
// // do something with the decoded response message
// }
//
// const spec = {
//     measurement: {
//         uuid: uuids.indoorBikeData,
//         notify: {callback: onData, parser: indoorBikeDataParser},
//     },
//     control: {
//         uuid: uuids.fitnessMachineControlPoint,
//         notify: {callback: onControl, parser: controlResponseParser},
//     },
// };
//
// const service = Service({service: BluetoothRemoteGATTService, spec,});
// await service.setup();
//
// service.characteristcics?.control.write(Dataview);
//
function Service(args = {}) {
    // config
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const _service = (0, _functionsJs.expect)(args.service, "Service needs BluetoothRemoteGATTService!");
    // String
    const _name = args.name ?? (0, _webBleJs.webBle).uuidToName(_service.uuid);
    // spec, is the declarative specification of the characteristics under this service
    //
    // the structure of a spec object is the following:
    // {
    //     <characteristic-class>?: {
    //         uuid: UUID,
    //         <characteristic-property>: {callback: Function, parser: Parser},
    //     },
    // }
    // where:
    // <characteristic-class> is one of:
    // - 'measurement' for the data transmitting characteristic as in Cycling Power
    // measurement, Heart Rate measurement, etc.
    // - 'control' for the control point characteristic if one exists
    // - 'response' for a response characteristic if one exists
    // - 'status' for a status characteristic if one exists
    //
    // <characteristic-property> is one of:
    // - 'notify' for the NOTIFY property of a characteristic
    //
    // - callback is the function that will return the message decoded
    // - parser is an object with decode or encode method that can handle the
    // parsing of the dataview received from a characteristic,
    // note that the parsed message will be availble in the configured callback
    //
    // Example with FTMS:
    // const spec = {
    //     measurement: {
    //         uuid: uuids.indoorBikeData,
    //         notify: {callback: onData, parser: indoorBikeDataParser},
    //     },
    //     control: {
    //         uuid: uuids.fitnessMachineControlPoint,
    //         notify: {callback: onControl, parser: controlResponseParser},
    //     },
    //     status: {
    //         uuid: uuids.fitnessMachineStatus,
    //         notify: {callback: onStatus, parser: statusParser},
    //     },
    // };
    //
    const spec = args.spec ?? {};
    // protocol is the configurable function where the specific steps for each
    // characteristcs initialization will be executed. For example FTMS needs
    // to receive unlock message before it will start transmitting and responding
    // this is the place to add service specific init code.
    //
    // Void -> Bool
    const protocol = args.protocol ?? defaultProtocol;
    async function defaultProtocol() {
        return true;
    }
    function defaultCallback(msg) {
        console.log(`ble: ${getName()} on-data: `, msg);
    }
    // if a parser is not configured in the spec object the default one will used
    // decode(), method will decode the received messages to:
    // {raw: [Int]}, where the raw contains the the raw message, this is useful for
    // debuging and when developing a new device
    // encode(), method will log back the device name and data, but it won't write
    // to the characteristic
    const defaultParser = {
        decode: (dataview)=>{
            const msg = {
                raw: (0, _functionsJs.dataviewToArray)(dataview)
            };
            (0, _functionsJs.print).log(`rx: ${getName()} msg: `, msg);
            return msg;
        },
        encode: (data = {})=>{
            (0, _functionsJs.print).log(`tx: ${getName()} msg: `, data);
        }
    };
    // end config
    //
    // state
    //
    // public state
    // {'<characteristic-name>': Characteristic}
    let characteristics = {};
    // end public state
    // private state
    // [BluetoothRemoteGATTCharacteristic {
    //     service: BluetoothRemoteGATTService,
    //     uuid: String,
    //     properties: BluetoothCharacteristicProperties,
    //     oncharacteristicvaluechanged: null,
    //     value: null,
    // ]
    let _gattCharacteristics;
    // {'<characteristic-uuid>': BluetoothRemoteGATTCharacteristic}
    let _characteristics;
    // Bool
    let _started = false;
    // end private state
    // end state
    // accessors
    // Void -> String
    function getName() {
        return _name;
    }
    // Void -> String
    function isStarted() {
        return _started;
    }
    // end accessors
    async function getCharacteristics() {
        _gattCharacteristics = await _service.getCharacteristics();
        _characteristics = gattListToObject(_gattCharacteristics);
    }
    // start notifications on the configured characteristics
    //
    // Void -> Bool
    async function start() {
        for(const key in spec){
            characteristics[key] = (0, _characteristicJs.Characteristic)({
                characteristic: _characteristics[spec[key].uuid]
            });
            if ((0, _functionsJs.exists)(spec[key].notify)) await characteristics[key].startNotificationsWithRetry((0, _functionsJs.compose2)(spec[key].notify?.callback ?? defaultCallback, spec[key].notify?.parser?.decode ?? defaultParser));
        }
        _started = true;
        return true;
    }
    // stop notifications on the configured characteristics
    //
    // Void -> Bool
    async function stop() {
        for(const key in spec)await characteristics[key]?.stopNotifications();
        _started = false;
    }
    // execute all steps needed to init the service
    // - get characteristics
    // - start notifications
    // - do any service specific work in the protocol method
    //
    // Void -> Bool
    async function setup() {
        try {
            let resChars = await getCharacteristics();
            let resStart = await start();
            let resProtocol = await protocol();
            return resStart && resProtocol;
        } catch (e) {
            console.warn(`ble: error: service: setup: `, e);
            return false;
        }
    }
    return {
        start,
        stop,
        isStarted,
        getCharacteristics,
        setup,
        characteristics
    };
}
// think of the following as static methods
// BluetoothRemoteGATTService -> String
function serviceToString(service) {
    for(let name in 0, _webBleJs.uuids){
        if ((0, _webBleJs.uuids)[name] === service.uuid) return `uuid: ${service.uuid} primary-service: ${name} `;
    }
    return `uuid: ${service.uuid} primary-service: unknown`;
}
// [BluetoothRemoteGATTService] -> {'<service-uuid>': BluetoothRemoteGATTService}
function gattListToObject(xs) {
    return xs.reduce((acc, x)=>{
        acc[x.uuid] = x;
        return acc;
    }, {});
}

},{"../functions.js":"2jd1e","./web-ble.js":"1bEyg","./characteristic.js":"k283X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhaCF":[function(require,module,exports) {
//
// Fitness Machine Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _enumsJs = require("../enums.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _indoorBikeDataJs = require("./indoor-bike-data.js");
var _controlPointJs = require("./control-point.js");
function FTMS(args = {}) {
    // config
    const onData = args.onData;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "FTMS needs BluetoothRemoteGATTService!");
    // end config
    // Service
    function onControlResponse(msg) {
        const control = service.characteristics.control;
        // it's important to release the control characteristic for writes
        // but that can happen only when a response has been received from
        // the control point characteristic
        control.release();
    }
    async function protocol() {
        const control = service.characteristics.control;
        const res = await control.write((0, _controlPointJs.control).requestControl.encode());
        return res;
    }
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).indoorBikeData,
            notify: {
                callback: onData,
                parser: (0, _indoorBikeDataJs.indoorBikeData)
            }
        },
        control: {
            uuid: (0, _webBleJs.uuids).fitnessMachineControlPoint,
            notify: {
                callback: onControlResponse,
                parser: (0, _controlPointJs.control).response
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        service: gattService,
        spec,
        protocol
    });
    // end sevice
    // methods
    // this service has special write methods
    // {WindSpeed: Float, Grade: Float, Crr: Float, WindResistance: Float} -> Bool
    async function setSimulation(args = {}) {
        const control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control) || !control.isReady()) return false;
        control.block();
        const res = await control.write((0, _controlPointJs.control).simulationParameters.encode(args));
        return res;
    }
    // {power: Int} -> Bool
    async function setPowerTarget(args = {}) {
        const control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control)) return false;
        const res = await control.writeWithRetry((0, _controlPointJs.control).powerTarget.encode(args), 4, 500);
        return res;
    }
    // {power: Int} -> Bool
    async function setResistanceTarget(args = {}) {
        const control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control)) return false;
        const res = await control.writeWithRetry((0, _controlPointJs.control).resistanceTarget.encode(args), 4, 500);
        return res;
    }
    // end methods
    // expose public methods and properties
    return Object.freeze({
        ...service,
        // FTMS will have all the public methods and properties of Service
        protocol,
        setSimulation,
        setPowerTarget,
        setResistanceTarget
    });
}
exports.default = FTMS;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../enums.js":"jtkZS","../service.js":"kmNRA","../characteristic.js":"k283X","./indoor-bike-data.js":"gV1cL","./control-point.js":"iTBEH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gV1cL":[function(require,module,exports) {
//
// FTMS spec
// 4.9 Indoor Bike Data (characteristic)
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndoorBikeData", ()=>IndoorBikeData);
parcelHelpers.export(exports, "indoorBikeData", ()=>indoorBikeData);
var _functionsJs = require("../../functions.js");
const speedPresent = (flags)=>(flags >> 0 & 1) === 0;
const avgSpeedPresent = (flags)=>(flags >> 1 & 1) === 1;
const cadencePresent = (flags)=>(flags >> 2 & 1) === 1;
const avgCadencePresent = (flags)=>(flags >> 3 & 1) === 1;
const distancePresent = (flags)=>(flags >> 4 & 1) === 1;
const resistancePresent = (flags)=>(flags >> 5 & 1) === 1;
const powerPresent = (flags)=>(flags >> 6 & 1) === 1;
const avgPowerPresent = (flags)=>(flags >> 7 & 1) === 1;
const expandedEnergyPresent = (flags)=>(flags >> 8 & 1) === 1;
const heartRatePresent = (flags)=>(flags >> 9 & 1) === 1;
const metabolicEquivalentPresent = (flags)=>(flags >> 10 & 1) === 1;
const elapsedTimePresent = (flags)=>(flags >> 11 & 1) === 1;
const remainingTimePresent = (flags)=>(flags >> 12 & 1) === 1;
const fields = {
    Flags: {
        resolution: 1,
        unit: "bit",
        size: 2,
        type: "Uint16",
        present: (_)=>true
    },
    InstantaneousSpeed: {
        resolution: 0.01,
        unit: "kph",
        size: 2,
        type: "Uint16",
        present: speedPresent,
        short: "speed"
    },
    AverageSpeed: {
        resolution: 0.01,
        unit: "kph",
        size: 2,
        type: "Uint16",
        present: avgSpeedPresent
    },
    InstantaneousCadence: {
        resolution: 0.5,
        unit: "rpm",
        size: 2,
        type: "Uint16",
        present: cadencePresent,
        short: "cadence"
    },
    AverageCadence: {
        resolution: 0.5,
        unit: "rpm",
        size: 2,
        type: "Uint16",
        present: avgCadencePresent
    },
    TotalDistance: {
        resolution: 1,
        unit: "m",
        size: 3,
        type: "Uint24",
        present: distancePresent,
        short: "distance"
    },
    ResistanceLevel: {
        resolution: 1,
        unit: "unitless",
        size: 2,
        type: "Uint16",
        present: resistancePresent
    },
    InstantaneousPower: {
        resolution: 1,
        unit: "W",
        size: 2,
        type: "Uint16",
        present: powerPresent,
        short: "power"
    },
    AveragePower: {
        resolution: 1,
        unit: "W",
        size: 2,
        type: "Uint16",
        present: avgPowerPresent
    },
    TotalEnergy: {
        resolution: 1,
        unit: "kcal",
        size: 2,
        type: "Int16",
        present: expandedEnergyPresent
    },
    EnergyPerHour: {
        resolution: 1,
        unit: "kcal",
        size: 2,
        type: "Int16",
        present: expandedEnergyPresent
    },
    EnergyPerMinute: {
        resolution: 1,
        unit: "kcal",
        size: 1,
        type: "Uint8",
        present: expandedEnergyPresent
    },
    HeartRate: {
        resolution: 1,
        unit: "bpm",
        size: 1,
        type: "Uint8",
        present: heartRatePresent,
        short: "heartRate"
    },
    MetabolicEquivalent: {
        resolution: 1,
        unit: "me",
        size: 1,
        type: "Uint8",
        present: metabolicEquivalentPresent
    },
    ElapsedTime: {
        resolution: 1,
        unit: "s",
        size: 2,
        type: "Uint16",
        present: elapsedTimePresent
    },
    RemainingTime: {
        resolution: 1,
        unit: "s",
        size: 2,
        type: "Uint16",
        present: remainingTimePresent
    }
};
const order = [
    "Flags",
    "InstantaneousSpeed",
    "AverageSpeed",
    "InstantaneousCadence",
    "AverageCadence",
    "TotalDistance",
    "ResistanceLevel",
    "InstantaneousPower",
    "AveragePower",
    "TotalEnergy",
    "EnergyPerHour",
    "EnergyPerMinute",
    "HeartRate",
    "MetabolicEquivalent",
    "ElapsedTime",
    "RemainingTime"
];
function IndoorBikeData(args = {}) {
    const architecture = true;
    function getField(field, dataview, i) {
        if ((0, _functionsJs.equals)(field.type, "Uint24")) return (0, _functionsJs.getUint24LE)(dataview, i) * field.resolution;
        return dataview[`get${field.type}`](i, architecture) * field.resolution;
    }
    // Dataview -> {'<field-name>': {value: Number, unit: String}}
    function decode(dataview) {
        const byteLength = dataview.byteLength;
        return order.reduce(function(acc, fieldName) {
            const field = fields[fieldName];
            if (acc.i + field.size > byteLength) return acc;
            if (field.present(acc.flags)) {
                const value = getField(field, dataview, acc.i);
                const unit = field?.unit ?? "";
                const name = field?.short ?? fieldName;
                if (acc.i === 0) acc.flags = value;
                else // acc.data[name] = {value, unit,};
                acc.data[name] = value;
                acc.i += field.size;
            }
            return acc;
        }, {
            i: 0,
            flags: 0,
            data: {}
        }).data;
    }
    return Object.freeze({
        getField,
        decode
    });
}
const indoorBikeData = IndoorBikeData();

},{"../../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTBEH":[function(require,module,exports) {
//
// FTMS spec
// 4.16 Fitness Machine Control Point (characteristic)
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "control", ()=>control);
var _functionsJs = require("../../functions.js");
function SimulationParameters(args) {
    const opCode = 0x11;
    const length = 7;
    // 2 m/s -> 7.20 km/h, 4 -> 14.4, 6 -> 21.6, 8 -> 28.8, 10 -> 36
    const definitions = {
        windSpeed: {
            resolution: 0.001,
            unit: "mps",
            size: 2,
            min: -35.56,
            max: 35.56,
            default: 0.1
        },
        // 2,
        grade: {
            resolution: 0.01,
            unit: "%",
            size: 2,
            min: -40,
            max: 40,
            default: 0
        },
        crr: {
            resolution: 0.0001,
            unit: "",
            size: 1,
            min: 0,
            max: 0.0254,
            default: 0.004
        },
        windResistance: {
            resolution: 0.01,
            unit: "kg/m",
            size: 1,
            min: 0,
            max: 1.86,
            default: 0.51
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        const windSpeed = spec.encodeField("windSpeed", args.windSpeed);
        const grade = spec.encodeField("grade", args.grade);
        const crr = spec.encodeField("crr", args.crr);
        const windResistance = spec.encodeField("windResistance", args.windResistance);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setInt16(1, windSpeed, true);
        view.setInt16(3, grade, true);
        view.setUint8(5, crr, true);
        view.setUint8(6, windResistance, true);
        (0, _functionsJs.print).log(`tx: ftms: simulation: grade: ${grade}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0);
        const windSpeed = spec.decodeField("windSpeed", dataview.getUint16(1, true));
        const grade = spec.decodeField("grade", dataview.getInt16(3, true));
        const crr = spec.decodeField("crr", dataview.getInt8(5, true));
        const windResistance = spec.decodeField("windResistance", dataview.getUint8(6, true));
        return {
            windSpeed,
            grade,
            crr,
            windResistance
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function ResistanceTarget() {
    const opCode = 0x04;
    const length = 3; // 3
    const definitions = {
        resistance: {
            resolution: 0.1,
            unit: "",
            size: 2,
            min: -100,
            max: 100,
            default: 0
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        const resistance = spec.encodeField("resistance", args.resistance);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setInt16(1, resistance, true);
        (0, _functionsJs.print).log(`:tx :ftms :resistance ${args.resistance} -> ${resistance}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0);
        const resistance = spec.decodeField("resistance", dataview.getInt16(1, true));
        return {
            resistance
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function PowerTarget() {
    const opCode = 0x05;
    const length = 3;
    const definitions = {
        power: {
            resolution: 1,
            unit: "W",
            size: 2,
            min: 0,
            max: 65534,
            default: 0
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    // {power: Int} -> ArrayBuffer
    function encode(args = {}) {
        const power = spec.encodeField("power", args.power);
        const view = new DataView(new ArrayBuffer(length));
        view.setUint8(0, opCode, true);
        view.setUint16(1, power, true);
        (0, _functionsJs.print).log(`tx: ftms: powerTarget: ${power}`);
        return view.buffer;
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode
    });
}
function WheelCircumference(args) {
    const opCode = 0x12;
    const length = 3;
    const definitions = {
        circumference: {
            resolution: 0.1,
            unit: "mm",
            min: 0,
            max: 6553.4,
            default: 2105
        }
    };
    const values = {
        2080: "700x19C",
        2086: "700x20C",
        2096: "700x23C",
        2105: "700x25C",
        2136: "700x28C",
        // 20s
        2146: "700x30C",
        2155: "700x32C",
        2168: "700x35C",
        2180: "700x38C",
        // 30s
        2200: "700x40C",
        2242: "700x45C",
        2268: "700x47C",
        // 40s
        2281: `29"x2.25"`,
        2326: `29"x2.3"`,
        2750: "tractor" // MTBs
    };
    // 700x25C -> 2105 -> [0x12, 0x3A, 0x52] -> [18, 58, 82]
    // 700x40C -> 2200 -> [0x12, 0xF0, 0x55] -> [18, 240, 85]
    // 700x47C -> 2268 -> [0x12, 0x98, 0x58] -> [18, 152, 88]
    // Max     -> 2750 -> [0x12, 0x6C, 0x6B] -> [18, 108, 107]
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        const circumference = spec.encodeField("circumference", args.circumference);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint16(1, circumference, true);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0);
        const circumference = spec.decodeField("circumference", dataview.getUint16(1, true));
        return {
            circumference
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        values,
        encode,
        decode
    });
}
function RequestControl() {
    const opCode = 0x00;
    const length = 1;
    function encode() {
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        (0, _functionsJs.print).log(`rx: ftms: request-control:'`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0);
        return {
            opCode
        };
    }
    return Object.freeze({
        opCode,
        length,
        encode,
        decode
    });
}
function Reset() {
    const opCode = 0x01;
    const length = 1;
    function encode() {
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        (0, _functionsJs.print).log(`rx: ftms: reset:'`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0);
        return {
            opCode
        };
    }
    return Object.freeze({
        opCode,
        length,
        encode,
        decode
    });
}
function Response() {
    const opCode = 0x80;
    // Format:
    // response code - request code - result code
    // 128-0-1
    // 128-5-3
    // 128-5-1
    //
    // 128 (0x80) | request control  | success
    // 128 (0x80) | set target power | invalid parameter
    // 128 (0x80) | set target power | success
    const results = {
        "0x01": {
            definition: "success",
            msg: "success"
        },
        "0x02": {
            definition: "notSupported",
            msg: "not supported"
        },
        "0x03": {
            definition: "invalidParameter",
            msg: "invalid parameter"
        },
        "0x04": {
            definition: "operationFail",
            msg: "operation fail"
        },
        "0x05": {
            definition: "notPermitted",
            msg: "not permitted"
        },
        "0xFF": {
            definition: "unknownError",
            msg: "unknown error"
        }
    };
    const requests = {
        "0x00": {
            definition: "requestControl",
            msg: "request control"
        },
        "0x01": {
            definition: "reset",
            msg: "reset"
        },
        "0x04": {
            definition: "setTargetResistanceLevel",
            msg: "set target resistance"
        },
        "0x05": {
            definition: "setTargetPower",
            msg: "set target power"
        },
        "0x11": {
            definition: "setIndoorBikeSimulationParameters",
            msg: "set indoor bike simulation"
        },
        "0x13": {
            definition: "spinDownControl",
            msg: "Spin Down Control"
        },
        "0xFF": {
            definition: "unknown",
            msg: "unknown request"
        }
    };
    function encode(value) {
        throw "Not implemented!";
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true) ?? opCode;
        const requestCode = dataview.getUint8(1, true) ?? 0xFF;
        const resultCode = dataview.getUint8(2, true) ?? 0xFF;
        // const raw = dataviewToArray(dataview).slice(dataview.byteOffset);
        const request = requests[(0, _functionsJs.hex)(requestCode)]?.definition ?? "";
        const result = results[(0, _functionsJs.hex)(resultCode)]?.msg ?? "";
        (0, _functionsJs.print).log(`rx: ftms: status: ${result} request: ${request}`);
        return {
            opCode,
            requestCode,
            resultCode
        };
    }
    return Object.freeze({
        opCode,
        results,
        requests,
        encode,
        decode
    });
}
const control = {
    simulationParameters: SimulationParameters(),
    resistanceTarget: ResistanceTarget(),
    powerTarget: PowerTarget(),
    wheelCircumference: WheelCircumference(),
    requestControl: RequestControl(),
    reset: Reset(),
    response: Response()
};

},{"../../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eT2zA":[function(require,module,exports) {
//
// FEC over BLE
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _enumsJs = require("../enums.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _messageJs = require("./message.js");
var _messagesJs = require("./messages.js");
var _messagesJsDefault = parcelHelpers.interopDefault(_messagesJs);
var _userDataJs = require("../userData.js");
function FEC(args = {}) {
    // config
    const onData = args.onData;
    const txRate = 1000;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "FEC needs BluetoothRemoteGATTService!");
    // end config
    //
    // service
    //
    // takes decoded msg from onData and returns it,
    // while releasing the block on write if the received message is a response message
    // that's needed because all messages are being received on the same characteristic
    //
    // ANTMessageData{} -> ANTMessageData{}
    function onFEC2(msg) {
        if (msg.dataPage === (0, _messagesJsDefault.default).dataPage71.number) {
            let control = service.characteristics.control;
            control.release();
        }
        return msg;
    }
    function onControlResponse(msg) {
        console.log(`ble: fec: on-control-response: `, msg);
        let control = service.characteristics.control;
        control.release();
    }
    async function protocol() {
        let control = service.characteristics.control;
        await (0, _functionsJs.wait)(txRate);
        console.log(`${(0, _userDataJs.userData).userWeight()} ${(0, _userDataJs.userData).bikeWeight()}`);
        let resUserData = await setUserData({
            userWeight: (0, _userDataJs.userData).userWeight(),
            bikeWeight: (0, _userDataJs.userData).bikeWeight()
        });
        await (0, _functionsJs.wait)(txRate);
        let resWind = await setWindResistance();
        return resUserData && resWind;
    }
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).fec2,
            notify: {
                callback: (0, _functionsJs.compose2)(onData, onFEC2),
                parser: (0, _messageJs.message)
            }
        },
        control: {
            uuid: (0, _webBleJs.uuids).fec3
        }
    };
    const service = (0, _serviceJs.Service)({
        spec,
        protocol,
        service: gattService
    });
    // end service
    //
    // methods
    //
    // {power: Int} -> Bool
    async function setPowerTarget(args = {}) {
        let control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control)) return false;
        const res = await control.writeWithRetry((0, _messageJs.message).encode({
            dataPage: 49,
            payload: args
        }), 4, 500);
        return res;
    }
    // {resistance: Int} -> Bool
    async function setResistanceTarget(args = {}) {
        let control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control)) return false;
        let res = await control.write((0, _messageJs.message).encode({
            dataPage: 48,
            payload: args
        }));
        return res;
    }
    // {WindSpeed: Float, Grade: Float, Crr: Float, WindResistance: Float} -> Bool
    async function setSimulation(args = {}) {
        let control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control) || !control.isReady()) return false;
        control.block();
        let res = await control.write((0, _messageJs.message).encode({
            dataPage: 51,
            payload: args
        }));
        return res;
    }
    // {userWeight: Int, bikeWeight: Int}
    async function setUserData(args = {}) {
        const control = service.characteristics.control;
        // TODO: validate the input
        const data = {
            userWeight: args.userWeight ?? (0, _userDataJs.userData).userWeight(),
            bikeWeight: args.bikeWeight ?? (0, _userDataJs.userData).bikeWeight()
        };
        const res = await control.write((0, _messageJs.message).encode({
            dataPage: 55,
            payload: data
        }));
        return res;
    }
    // {userWeight: Int, bikeWeight: Int}
    async function setWindResistance(args = {}) {
        const control = service.characteristics.control;
        const res = await control.write((0, _messageJs.message).encode({
            dataPage: 50,
            payload: args
        }));
        return res;
    }
    // {userWeight: Int, bikeWeight: Int}
    async function setRoadFeel(args = {}) {
        const control = service.characteristics.control;
        const res = await control.write((0, _messageJs.message).encode({
            dataPage: 252,
            payload: args
        }));
        return res;
    }
    return Object.freeze({
        ...service,
        // FEC will have all the public methods and properties of Service
        protocol,
        setPowerTarget,
        setResistanceTarget,
        setSimulation,
        setUserData,
        setWindResistance,
        setRoadFeel
    });
}
exports.default = FEC;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../enums.js":"jtkZS","../service.js":"kmNRA","../characteristic.js":"k283X","./message.js":"ccSro","./messages.js":"iDv7u","../userData.js":"iKtr5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccSro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcknowledgedData", ()=>AcknowledgedData);
parcelHelpers.export(exports, "message", ()=>message);
var _functionsJs = require("../../functions.js");
var _messagesJs = require("./messages.js");
var _messagesJsDefault = parcelHelpers.interopDefault(_messagesJs);
function AcknowledgedData() {
    const sync = 164;
    const length = 13;
    const id = 79;
    const channel = 5;
    const architecture = true;
    const fields = {
        sync: {
            size: 1,
            type: "Uint8",
            default: 164
        },
        length: {
            size: 1,
            type: "Uint8",
            default: 9
        },
        id: {
            size: 1,
            type: "Uint8",
            default: 79
        },
        channel: {
            size: 1,
            type: "Uint8",
            default: 5
        },
        payload: {
            size: 8,
            type: "DataPage"
        },
        check: {
            size: 1,
            type: "Uint8"
        }
    };
    const order = [
        "sync",
        "length",
        "id",
        "channel",
        "payload",
        "check"
    ];
    function encode(args = {}) {
        const dataPage = args.dataPage;
        const payload = args.payload;
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, fields.sync.default, architecture);
        view.setUint8(1, fields.length.default, architecture);
        view.setUint8(2, id, architecture);
        view.setUint8(3, fields.channel.default, architecture);
        encodeDataPage(view, 4, dataPage, payload);
        const check = (0, _functionsJs.xor)(view, 0, length);
        view.setUint8(12, check, architecture);
        return view;
    }
    function encodeDataPage(dataview, i, dataPage, payload) {
        return (0, _messagesJsDefault.default)[`dataPage${dataPage}`]?.encode(dataview, i, payload);
    }
    function decode(dataview) {
        return order.reduce(function(acc, fieldName) {
            const field = fields[fieldName];
            if (field.type === "DataPage") {
                const dataPage = getView("Uint8", acc.i, dataview);
                acc.data = decodeDataPage(dataview, dataPage);
                acc.data.dataPage = dataPage;
            }
            acc.i += field.size;
            return acc;
        }, {
            i: 0,
            data: {}
        }).data;
    }
    function getView(type, i, dataview) {
        return dataview[`get${type}`](i, architecture);
    }
    function decodeDataPage(dataview, dataPage) {
        return (0, _messagesJsDefault.default)[`dataPage${dataPage}`]?.decode(dataview, 4, 12) ?? {};
    }
    return Object.freeze({
        encode,
        decode
    });
}
function hex(n) {
    let h = parseInt(n).toString(16).toUpperCase();
    if (h.length === 1) h = "0" + h;
    return "0x" + h;
}
const message = AcknowledgedData();

},{"../../functions.js":"2jd1e","./messages.js":"iDv7u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDv7u":[function(require,module,exports) {
//
// FEC3 Custom characteristic
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
function applyDefinition(field, value) {
    const _value = value ?? field.default;
    const _resolution = field.resolution ?? 1;
    const _offset = field.offset ?? 0;
    return _value / _resolution + _offset / _resolution;
}
function removeDefinition(field, value) {
    const _value = value ?? field.default;
    const _resolution = field.resolution ?? 1;
    const _offset = field.offset ?? 0;
    return (_value - _offset * _resolution) * _resolution;
}
function DataPage48() {
    // Data Page 48 (0x30) – Basic Resistance
    const number = 48;
    const length = 8;
    const architecture = true;
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 48
        },
        resistance: {
            size: 1,
            type: "Uint8",
            default: 0,
            resolution: 0.5,
            unit: ""
        }
    };
    function encode(dataview, start = 4, payload = {}) {
        const resistance = applyDefinition(fields.resistance, payload?.resistance);
        dataview.setUint8(start + 0, number, architecture);
        dataview.setUint8(start + 7, resistance, architecture);
        (0, _functionsJs.print).log(`:tx :fec :basic-resistance ${payload?.resistance} ${resistance}`);
        return dataview;
    }
    return Object.freeze({
        number,
        length,
        fields,
        encode
    });
}
function DataPage50() {
    // DataPage 50 (0x32) - Wind Resistance
    const number = 50;
    const length = 8;
    const architecture = true;
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 50
        },
        reserved1: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved2: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved3: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved4: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        windResistance: {
            size: 1,
            type: "Uint8",
            default: 0.51,
            resolution: 0.01
        },
        windSpeed: {
            size: 1,
            type: "Uint8",
            default: 0,
            resolution: 1,
            offset: 127
        },
        draftingFactor: {
            size: 1,
            type: "Uint8",
            default: 1.0,
            resolution: 0.01
        }
    };
    function encode(dataview, start = 4, payload = {}) {
        const dataPage = fields.dataPage.default;
        const windResistance = applyDefinition(fields.windResistance, payload?.windResistance);
        const windSpeed = applyDefinition(fields.windSpeed, payload?.windSpeed);
        const draftingFactor = applyDefinition(fields.draftingFactor, payload?.draftingFactor);
        (0, _functionsJs.print).log(`:tx :fec :wind-resistance :windResistance ${windResistance} windSpeed: ${windSpeed} :draftingFactor ${draftingFactor}`);
        dataview.setUint8(start + 0, dataPage, architecture);
        dataview.setUint8(start + 5, windResistance, architecture);
        dataview.setUint8(start + 6, windSpeed, architecture);
        dataview.setUint8(start + 7, draftingFactor, architecture);
        return dataview;
    }
    return Object.freeze({
        number,
        encode
    });
}
function DataPage51() {
    // DataPage 51 (0x33) - Track Resistance
    const number = 51;
    const length = 8;
    const architecture = true;
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 51
        },
        reserved1: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved2: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved3: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved4: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        grade: {
            size: 2,
            type: "Uint16",
            default: 0,
            resolution: 0.01,
            offset: 200
        },
        crr: {
            size: 1,
            type: "Uint8",
            default: 0.004,
            resolution: 0.00005
        }
    };
    function encode(dataview, start = 4, payload = {}) {
        const dataPage = fields.dataPage.default;
        const grade = applyDefinition(fields.grade, payload?.grade);
        const crr = applyDefinition(fields.crr, payload?.crr);
        (0, _functionsJs.print).log(`:tx :fec :track-resistance :grade ${payload?.grade} :crr ${crr}`);
        dataview.setUint8(start + 0, dataPage, architecture);
        dataview.setUint16(start + 5, grade, architecture);
        dataview.setUint8(start + 7, crr, architecture);
        return dataview;
    }
    return Object.freeze({
        number,
        fields,
        encode
    });
}
function DataPage49() {
    // Data Page 49 (0x31) – Target Power
    const number = 49;
    const length = 8;
    const architecture = true;
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 49
        },
        power: {
            size: 1,
            type: "Uint8",
            resolution: 0.25,
            unit: "W",
            min: 0,
            max: 4000,
            invalid: 0,
            default: 0
        }
    };
    function encode(dataview, start = 4, payload = {}) {
        const dataPage = fields.dataPage.default;
        const power = applyDefinition(fields.power, payload?.power);
        dataview.setUint8(start + 0, dataPage, architecture);
        dataview.setUint16(start + 6, power, architecture);
        (0, _functionsJs.print).log(`:tx :fec :target-power :power ${payload?.power}`);
        return dataview;
    }
    return Object.freeze({
        number,
        length,
        fields,
        encode
    });
}
function DataPage55() {
    // DataPage 55 (0x37) - User Configuration
    const number = 55;
    const length = 8;
    const architecture = true;
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 55
        },
        userWeight: {
            size: 2,
            type: "Uint16",
            default: 75,
            resolution: 0.01
        },
        reserved: {
            size: 1,
            type: "Reserved",
            default: 0
        },
        diameterOffset: {
            size: 0.5,
            type: "Uint4",
            default: 0xF
        },
        bikeWeight: {
            size: 1.5,
            type: "Uint12",
            default: 8,
            resolution: 0.05
        },
        wheelDiameter: {
            size: 1,
            type: "Uint4",
            default: 0.7,
            resolution: 0.01
        },
        gearRatio: {
            size: 1,
            type: "Uint8",
            default: 0,
            resolution: 0.03
        }
    };
    function encode(dataview, start = 4, payload = {}) {
        const dataPage = fields.dataPage.default;
        const userWeight = applyDefinition(fields.userWeight, payload?.userWeight);
        const diameterOffset = applyDefinition(fields.diameterOffset, payload?.diameterOffset);
        const bikeWeight = applyDefinition(fields.bikeWeight, payload?.bikeWeight);
        const wheelDiameter = applyDefinition(fields.wheelDiameter, payload?.wheelDiameter);
        const gearRatio = applyDefinition(fields.gearRatio, payload?.gearRatio);
        const combined1 = ((0, _functionsJs.getBits)(0, 4, bikeWeight) << 4) + diameterOffset;
        const bikeWeightMSB = bikeWeight >> 4;
        (0, _functionsJs.print).log(`:tx :fec :user-configuration :userWeight ${userWeight} :bikeWeight ${bikeWeight}`);
        dataview.setUint8(start + 0, dataPage, architecture);
        dataview.setUint16(start + 1, userWeight, architecture);
        dataview.setUint8(start + 4, combined1, architecture);
        dataview.setUint8(start + 5, bikeWeightMSB, architecture);
        dataview.setUint8(start + 6, wheelDiameter, architecture);
        dataview.setUint8(start + 7, gearRatio, architecture);
        return dataview;
    }
    return Object.freeze({
        number,
        fields,
        encode
    });
}
function DataPage252() {
    const number = 252;
    const length = 8;
    const architecture = true;
    // [0xA4, 0x09, 0x4F, 0x05, 0xFC, 0x00, 0,0, ]
    const RoadSurface = {
        simulationOff: 0,
        concretePlates: 1,
        cattleGrid: 2,
        cobblestonesHard: 3,
        cobblestonesSoft: 4,
        brickRoad: 5,
        offRoad: 6,
        gravel: 7,
        ice: 8,
        woodenBoards: 9
    };
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 252
        },
        reserved1: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        isokineticMode: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        isokineticSpeed: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        reserved2: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        roadSurfaceValue: {
            size: 1,
            type: "Uint8",
            default: RoadSurface.simulationOff
        },
        roadSurfaceIntensity: {
            size: 1,
            type: "Uint8",
            default: 255
        },
        reserved3: {
            size: 1,
            type: "Uint8",
            default: 0
        }
    };
    function encode(dataview, start = 4, payload = {}) {
        const roadSurfaceValue = applyDefinition(fields.roadSurfaceValue, payload?.roadSurfaceValue);
        const roadSurfaceIntensity = applyDefinition(fields.roadSurfaceIntensity, payload?.roadSurfaceIntensity);
        dataview.setUint8(start + 0, fields.dataPage.default, architecture);
        dataview.setUint8(start + 1, fields.reserved1.default, architecture);
        dataview.setUint8(start + 2, fields.isokineticMode.default, architecture);
        dataview.setUint8(start + 3, fields.isokineticSpeed.default, architecture);
        dataview.setUint8(start + 4, fields.reserved2.default, architecture);
        dataview.setUint8(start + 5, roadSurfaceValue, architecture);
        dataview.setUint8(start + 6, roadSurfaceIntensity, architecture);
        dataview.setUint8(start + 7, fields.reserved3.default, architecture);
        return dataview;
    }
    return Object.freeze({
        number,
        fields,
        RoadSurface,
        encode
    });
}
function DataPage16() {
    // DataPage 16 (0x10) - General FE Data
    const number = 16;
    const length = 8;
    const architecture = true;
    // elapsedTime
    // distance
    // speed
    // heartRate
    function decode(dataview, start = 4, end = length) {
        return {
            speed: 0,
            heartRate: 0
        };
    }
    return Object.freeze({
        number,
        decode
    });
}
function DataPage25() {
    // DataPage 25 (0x19) - Trainer Specific
    const number = 25;
    const length = 8;
    const architecture = true;
    const fields = {
        dataPage: {
            size: 1,
            type: "Uint8",
            default: 25
        },
        eventCount: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        cadence: {
            size: 1,
            type: "Uint8",
            default: 0
        },
        accumulatedPower: {
            size: 2,
            type: "Uint16",
            default: 0
        },
        power: {
            size: 1.5,
            type: "Uint12",
            default: 0
        },
        status: {
            size: 0.5,
            type: "Uint4"
        }
    };
    function decode(dataview, start = 4, end = length) {
        const dataPage = dataview.getUint8(start + 0, architecture);
        const cadence = dataview.getUint8(start + 2, architecture) ?? 0;
        const combined1 = dataview.getUint16(start + 5, architecture);
        const power = (0, _functionsJs.getBits)(0, 12, combined1) ?? 0;
        return {
            dataPage,
            cadence,
            power
        };
    }
    return Object.freeze({
        number,
        decode
    });
}
function DataPage71() {
    // DataPage 71 (0x47) - Command Status
    const number = 71;
    const length = 8;
    const architecture = true;
    function decode(dataview, start = 4, end = length) {
        const dataPage = dataview.getUint8(start + 0, architecture);
        const lastCommandId = dataview.getUint8(start + 1, architecture);
        const sequenceNumber = dataview.getUint8(start + 2, architecture);
        const status = dataview.getUint8(start + 3, architecture);
        const data1 = dataview.getUint8(start + 4, architecture);
        const data2 = dataview.getUint8(start + 5, architecture);
        const data3 = dataview.getUint8(start + 6, architecture);
        const data4 = dataview.getUint8(start + 7, architecture);
        (0, _functionsJs.print).log(`:rx :fec :command-status ${status} sequence: ${sequenceNumber} :id ${lastCommandId}`);
        return {
            dataPage,
            lastCommandId,
            sequenceNumber,
            status,
            data1,
            data2,
            data3,
            data4
        };
    }
    return Object.freeze({
        number,
        decode
    });
}
const messages = {
    // fec3
    dataPage48: DataPage48(),
    dataPage49: DataPage49(),
    dataPage50: DataPage50(),
    dataPage51: DataPage51(),
    dataPage55: DataPage55(),
    dataPage252: DataPage252(),
    // fec2
    dataPage16: DataPage16(),
    dataPage25: DataPage25(),
    dataPage71: DataPage71()
};
exports.default = messages;

},{"../../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKtr5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserData", ()=>UserData);
parcelHelpers.export(exports, "userData", ()=>userData);
var _functionsJs = require("../functions.js");
function UserData(args = {}) {
    const defaults = {
        userWeight: 75,
        bikeWeight: 8
    };
    let _userWeight = args.userWeight ?? defaults.userWeight;
    let _bikeWeight = args.bikeWeight ?? defaults.bikeWeight;
    function userWeight() {
        return _userWeight;
    }
    function bikeWeight() {
        return _bikeWeight;
    }
    // x: Int
    // weight in grams 75000 -> 75 kg
    function setUserWeight(x) {
        if ((0, _functionsJs.isNumber)(x)) _userWeight = x / 1000;
        else throw "invalid userWeight";
    }
    // x: Int
    // weight in grams 8000 -> 8 kg
    function setBikeWeight(x) {
        if ((0, _functionsJs.isNumber)(x)) _bikeWeight = x / 1000;
        else throw "invalid bikeWeight";
    }
    return {
        userWeight,
        bikeWeight,
        setUserWeight
    };
}
const userData = UserData();

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTiCS":[function(require,module,exports) {
//
// Wahoo Cycling Power Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _characteristicJs = require("../characteristic.js");
var _serviceJs = require("../service.js");
var _cyclingPowerMeasurementJs = require("../cps/cycling-power-measurement.js");
var _controlPointJs = require("./control-point.js");
var _webBleJs = require("../web-ble.js");
var _enumsJs = require("../enums.js");
var _userDataJs = require("../userData.js");
function WCPS(args = {}) {
    // config
    const onData = args.onData;
    const txRate = 1000;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "WCPS needs BluetoothRemoteGATTService!");
    // end config
    // private state
    let controlMode = (0, _enumsJs.ControlMode).sim;
    let q = [];
    let msgSeqLock = false;
    // end private state
    // service
    function onControlResponse(msg) {
        let control = service.characteristics.control;
        if (msgSeqLock) {
            if (msg.request === "setSimMode") {
                if (msg.status === "success") {
                    msgSeqLock = false;
                    setSimulation(q.pop()?.params ?? {
                        grade: 0
                    });
                    return;
                } else {
                    msgSeqLock = true;
                    setSimMode();
                    return;
                }
            }
        }
        control.release();
    }
    // Void -> Bool
    async function protocol() {
        const control = service.characteristics.control;
        // TODO: return false if any of those fails or
        // returns false and dicsonnect the device
        await requestControl();
        await (0, _functionsJs.wait)(txRate);
        await setUser();
        await (0, _functionsJs.wait)(txRate);
        await setWindResistance();
        await (0, _functionsJs.wait)(txRate);
        await setWheelCircumference();
        return true;
    }
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).cyclingPowerMeasurement,
            notify: {
                callback: onData,
                parser: (0, _cyclingPowerMeasurementJs.cyclingPowerMeasurement)
            }
        },
        control: {
            uuid: (0, _webBleJs.uuids).wahooTrainer,
            notify: {
                callback: onControlResponse,
                parser: (0, _controlPointJs.control).response
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        spec,
        protocol,
        service: gattService
    });
    // end service
    // methods
    // {WindSpeed: Float, Grade: Float, Crr: Float, WindResistance: Float} -> Void
    function setSimulation(parameters = {}) {
        const control = service.characteristics.control;
        if (!(0, _functionsJs.exists)(control) || !control.isReady() || msgSeqLock) return false;
        const gradeParams = {
            grade: parameters.grade
        };
        // if in erg mode -> init sim mode -> send grade
        // else send grade
        if (controlMode === (0, _enumsJs.ControlMode).sim) {
            control.write((0, _controlPointJs.control).grade.encode(gradeParams));
            control.block();
        } else {
            msgSeqLock = true;
            q.push({
                command: "setSimulation",
                params: gradeParams
            });
            setSimMode();
        }
    }
    // {resistance: Int} -> Void
    function setResistanceTarget(args = {}) {
        const control = service.characteristics.control;
        control.write((0, _controlPointJs.control).loadIntensity.encode({
            intensity: args.resistance / 100
        }));
        controlMode = (0, _enumsJs.ControlMode).resistance;
    // control.block();
    }
    // {power: Int} -> Void
    function setPowerTarget(args = {}) {
        const control = service.characteristics.control;
        control.write((0, _controlPointJs.control).setERG.encode(args));
        controlMode = (0, _enumsJs.ControlMode).erg;
    // control.block();
    }
    // {weigth: Float, crr: Float, windResistance: Float} -> Void
    function setSimMode(args = {}) {
        const control = service.characteristics.control;
        const weight = (0, _userDataJs.userData).userWeight() + (0, _userDataJs.userData).bikeWeight();
        control.write((0, _controlPointJs.control).sim.encode({
            weight,
            crr: args.crr,
            windResistance: args.windResistance
        }));
        controlMode = (0, _enumsJs.ControlMode).sim;
    }
    function setUser() {
        setSimMode();
    }
    async function requestControl() {
        const control = service.characteristics.control;
        const res = await control.write((0, _controlPointJs.control).requestControl.encode());
        return res;
    }
    async function setWindResistance() {
        const control = service.characteristics.control;
        const res = await control.write((0, _controlPointJs.control).windSpeed.encode({
            windSpeed: 0
        }));
        return res;
    }
    async function setWheelCircumference() {
        const control = service.characteristics.control;
        const res = await control.write((0, _controlPointJs.control).wheelCircumference.encode({
            circumference: (0, _controlPointJs.control).wheelCircumference.definitions.circumference.default
        }));
        return res;
    }
    // end methods
    return Object.freeze({
        ...service,
        // WCPS will have all the public methods and properties of Service
        setSimulation,
        setResistanceTarget,
        setPowerTarget,
        setUser,
        setWindResistance,
        setWheelCircumference,
        requestControl
    });
}
exports.default = WCPS;

},{"../../functions.js":"2jd1e","../characteristic.js":"k283X","../service.js":"kmNRA","../cps/cycling-power-measurement.js":"3Uayb","./control-point.js":"aoG2I","../web-ble.js":"1bEyg","../enums.js":"jtkZS","../userData.js":"iKtr5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Uayb":[function(require,module,exports) {
//
// Cycling Power Spec
// Cycling Power Measurement Characteristic
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CyclingPowerMeasurement", ()=>CyclingPowerMeasurement);
parcelHelpers.export(exports, "cyclingPowerMeasurement", ()=>cyclingPowerMeasurement);
var _functionsJs = require("../../functions.js");
var _revsOverTimeJs = require("../cscs/revs-over-time.js");
const pedalPowerBalancePresent = (flags)=>(flags >> 0 & 1) === 1;
const pedalPowerBalanceRefPresent = (flags)=>(flags >> 1 & 1) === 1;
const accumulatedTorquePresent = (flags)=>(flags >> 2 & 1) === 1;
const accumulatedTorqueSourcePresent = (flags)=>(flags >> 3 & 1) === 1;
const wheelRevolutionDataPresent = (flags)=>(flags >> 4 & 1) === 1;
const crankRevolutionDataPresent = (flags)=>(flags >> 5 & 1) === 1;
const cadencePresent = (flags)=>(flags >> 5 & 1) === 1;
const extremeForceMagnitudesPresent = (flags)=>(flags >> 6 & 1) === 1;
const extremeTorqueMagnitudesPresent = (flags)=>(flags >> 7 & 1) === 1;
const extremeAnglesPresent = (flags)=>(flags >> 8 & 1) === 1;
const topDeadSpotAnglePresent = (flags)=>(flags >> 9 & 1) === 1;
const bottomDeadSpotAnglePresent = (flags)=>(flags >> 10 & 1) === 1;
const accumulatedEnergyPresent = (flags)=>(flags >> 11 & 1) === 1;
const offsetIndicator = (flags)=>(flags >> 12 & 1) === 1;
const fields = {
    flags: {
        resolution: 1,
        unit: "",
        size: 2,
        type: "Uint16",
        present: (_)=>true
    },
    power: {
        resolution: 1,
        unit: "W",
        size: 2,
        type: "Int16",
        present: (_)=>true
    },
    pedalPowerBalance: {
        resolution: 0.5,
        unit: "",
        size: 1,
        type: "Uint8",
        present: pedalPowerBalancePresent
    },
    accumulatedTorque: {
        resolution: 1 / 32,
        unit: "",
        size: 2,
        type: "Uint16",
        present: accumulatedTorquePresent
    },
    cumulativeWheelRevolutions: {
        resolution: 1,
        unit: "",
        size: 4,
        type: "Uint32",
        present: wheelRevolutionDataPresent
    },
    lastWheelEventTime: {
        resolution: 1 / 2048,
        unit: "s",
        size: 2,
        type: "Uint16",
        present: wheelRevolutionDataPresent
    },
    cumulativeCrankRevolutions: {
        resolution: 1,
        unit: "",
        size: 2,
        type: "Uint16",
        present: crankRevolutionDataPresent
    },
    lastCrankEventTime: {
        resolution: 1 / 1024,
        unit: "s",
        size: 2,
        type: "Uint16",
        present: crankRevolutionDataPresent
    },
    maximumForceMagnitude: {
        resolution: 1,
        unit: "",
        size: 2,
        type: "Int16",
        present: extremeForceMagnitudesPresent
    },
    minimumForceMagnitude: {
        resolution: 1,
        unit: "",
        size: 2,
        type: "Int16",
        present: extremeForceMagnitudesPresent
    },
    maximumTorqueMagnitude: {
        resolution: 1 / 32,
        unit: "",
        size: 2,
        type: "Int16",
        present: extremeTorqueMagnitudesPresent
    },
    minimumTorqueMagnitude: {
        resolution: 1 / 32,
        unit: "",
        size: 2,
        type: "Int16",
        present: extremeTorqueMagnitudesPresent
    },
    extreamAngles: {
        resolution: 1,
        unit: "deg",
        size: 3,
        type: "Uint24",
        present: extremeAnglesPresent
    },
    // maximumAngle:               {resolution: 1,        unit: 'deg', size: 1.5, type: 'Uint12', present: extremeAnglesPresent},
    // minimumAngle:               {resolution: 1,        unit: 'deg', size: 1.5, type: 'Uint12', present: extremeAnglesPresent},
    topDeadSpotAngle: {
        resolution: 1,
        unit: "deg",
        size: 2,
        type: "Uint16",
        present: topDeadSpotAnglePresent
    },
    bottomDeadSpotAngle: {
        resolution: 1,
        unit: "deg",
        size: 2,
        type: "Uint16",
        present: bottomDeadSpotAnglePresent
    },
    accumulatedEnergy: {
        resolution: 1,
        unit: "kJ",
        size: 2,
        type: "Uint16",
        present: accumulatedEnergyPresent
    }
};
const order = [
    "flags",
    "power",
    "pedalPowerBalance",
    "accumulatedTorque",
    "cumulativeWheelRevolutions",
    "lastWheelEventTime",
    "cumulativeCrankRevolutions",
    "lastCrankEventTime",
    "maximumForceMagnitude",
    "minimumForceMagnitude",
    "maximumTorqueMagnitude",
    "minimumTorqueMagnitude",
    "extreamAngles",
    // maybe remove those it's Uint12 + Uint12
    "topDeadSpotAngle",
    "bottomDeadSpotAngle",
    "accumulatedEnergy"
];
// Example input:
//
//
//      flags  power  wheel revs   wheel time  crank revs  crank time
//       0  1   2  3   4  5  6  7   8  9       10 11       12 13
//
// (0x) 30-00 -21-00 -2A-00-00-00  -C4-60      -12-00      -F7-04
//      48, 0, 33, 0, 42, 0, 0, 0, 196,96,      18, 0,     247, 4
// (0x) 30-00 -56-00 -00-00-00-00  -00-00      -00-00      -F7-04
//      48, 0, 86, 0,  0, 0, 0, 0,   0, 0,       0, 0,     247, 4
// (0x) 30-00 -5E-00 -03-00-00-00  -16-0B      -01-00      -0A-03
//      48, 0, 94, 0,  3, 0, 0, 0,  22,11,       1, 0,      10, 3
//
// '30-00-21-00-2A-00-00-00-C4-60-12-00-F7-04'.split('-').map(x => Number('0x'+x))
//
function CyclingPowerMeasurement(args = {}) {
    const architecture = true;
    function getField(field, dataview, i) {
        if ((0, _functionsJs.equals)(field.type, "Uint24")) return (((dataview.getUint16(i, architecture) & 65520) << 4) + dataview.getUint8(i + 2, architecture)) * field.resolution;
        return dataview[`get${field.type}`](i, architecture) * field.resolution;
    }
    const cadence = (0, _revsOverTimeJs.RevsOverTime)({
        resolution: 1,
        maxRevs: 2 ** 16 * fields.cumulativeCrankRevolutions.resolution,
        // 1
        maxTime: 2 ** 16 * fields.lastCrankEventTime.resolution,
        // 1024
        // revs per second to revs per 60 seconds
        format: (x)=>Math.round(x * 60)
    });
    const rateAdjuster = (0, _revsOverTimeJs.RateAdjuster)({
        sensor: "powerMeter",
        onDone: function(maxRateCount) {
            cadence.setMaxRateCount(maxRateCount);
        }
    });
    function decode(dataview) {
        const byteLength = dataview.byteLength;
        return order.reduce(function(acc, fieldName) {
            const field = fields[fieldName];
            if (acc.i + field.size > byteLength) return acc;
            if (field.present(acc.flags)) {
                const value = getField(field, dataview, acc.i);
                const unit = field.unit;
                const name = field.short ?? fieldName;
                if (acc.i === 0) acc.flags = value;
                acc.data[name] = value;
                if (name === "lastCrankEventTime") acc.data["cadence"] = cadence.calculate(acc.data["cumulativeCrankRevolutions"], acc.data["lastCrankEventTime"]);
                acc.i += field.size;
            }
            return acc;
        }, {
            i: 0,
            flags: 0,
            data: {}
        }).data;
    }
    return Object.freeze({
        decode
    });
}
const cyclingPowerMeasurement = CyclingPowerMeasurement();

},{"../../functions.js":"2jd1e","../cscs/revs-over-time.js":"46HPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46HPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RevsOverTime", ()=>RevsOverTime);
parcelHelpers.export(exports, "RateAdjuster", ()=>RateAdjuster);
var _functionsJs = require("../../functions.js");
function RevsOverTime(args = {}) {
    const defaults = {
        revs: -1,
        time: -1,
        value: 0,
        rate: 0.5,
        // (1024/2 / 1024), 0.5 second,
        maxRateCount: 3,
        rateCount: 0
    };
    const format = args.format ?? ((x)=>x);
    const resolution = (0, _functionsJs.expect)(args.resolution, "needs resolution.");
    const maxRevs = (0, _functionsJs.expect)(args.maxRevs, "needs maxRevs.");
    const maxTime = (0, _functionsJs.expect)(args.maxTime, "needs maxTime.");
    const rate = args.rate ?? defaults.rate;
    // state
    let maxRateCount = defaults.maxRateCount;
    let rateCount = defaults.rateCount;
    let revs_1 = defaults.revs;
    let time_1 = defaults.time;
    let value = defaults.value;
    const setRevs = (revs)=>{
        revs_1 = revs;
        return revs_1;
    };
    const setTime = (time)=>{
        time_1 = time;
        return time_1;
    };
    const setRateCount = (count)=>{
        rateCount = count;
        return rateCount;
    };
    const getRevs = ()=>revs_1;
    const getTime = ()=>time_1;
    const getRateCount = ()=>rateCount;
    const getMaxRateCount = ()=>maxRateCount;
    const isRolloverTime = (time_2)=>time_2 < getTime();
    const isRolloverRevs = (revs_2)=>revs_2 < getRevs();
    const rollOverTime = ()=>getTime() - maxTime;
    const rollOverRevs = ()=>getRevs() - maxRevs;
    // coasting or not moving
    const stillRevs = (revs_2)=>(0, _functionsJs.equals)(getRevs(), revs_2);
    // multiple transmissions of the same time
    const stillTime = (time)=>(0, _functionsJs.equals)(getTime(), time);
    function setMaxRateCount(maxCount) {
        maxRateCount = maxCount ?? defaults.maxRateCount;
        console.log(`maxRateCount: ${maxRateCount}`);
        return maxRateCount;
    }
    function reset() {
        setRevs(defaults.revs);
        setTime(defaults.time);
        setRateCount(defaults.rateCount);
        value = defaults.value;
        return {
            revs: revs_1,
            time: time_1
        };
    }
    function underRate(time) {
        if ((0, _functionsJs.equals)(rateCount, maxRateCount)) {
            rateCount = 0;
            return false;
        }
        if ((0, _functionsJs.equals)(getTime(), time)) {
            rateCount += 1;
            return true;
        }
        if (time - getTime() < rate) {
            rateCount += 1;
            return true;
        }
        rateCount = 0;
        return false;
    }
    function calculate(revs_2, time_2) {
        if (getRevs() < 0) setRevs(revs_2); // set initial revs
        if (getTime() < 0) setTime(time_2); // set initial time
        if (underRate(time_2)) return value;
        if (stillRevs(revs_2)) {
            setTime(time_2);
            value = 0;
            return value;
        }
        if (isRolloverTime(time_2)) setTime(rollOverTime());
        if (isRolloverRevs(revs_2)) setRevs(rollOverRevs());
        value = format((revs_2 - getRevs()) / ((time_2 - getTime()) / resolution));
        setRevs(revs_2);
        setTime(time_2);
        return value;
    }
    return {
        reset,
        calculate,
        setMaxRateCount
    };
}
function RateAdjuster(args = {}) {
    const Status = {
        reading: "reading",
        done: "done",
        is: (expected, value)=>(0, _functionsJs.equals)(expected, value)
    };
    const defaults = {
        sampleSize: 0,
        rate: 3,
        // [0,1,2,3]
        cutoff: 20,
        maxStillTime: 3000,
        // ms
        sensor: "cscs",
        onDone: (x)=>x
    };
    let _sample = [];
    let _sampleSize = defaults.sampleSize;
    let _rate = defaults.rate;
    let _maxStillTime = defaults.maxStillTime;
    let _cutoff = defaults.cutoff;
    let _status = Status.reading;
    const onDone = args.onDone ?? defaults.onDone;
    const sensor = args.sensor ?? defaults.sensor;
    const setCutoff = (count)=>_cutoff = count;
    const setMaxStillTime = (ms)=>_maxStillTime = ms;
    const getSampleSize = ()=>_sampleSize;
    const getSample = ()=>_sample;
    const getRate = ()=>_rate;
    const getStatus = ()=>_status;
    const getCutoff = ()=>_cutoff;
    const getMaxStillTime = (ms)=>_maxStillTime;
    const isDone = ()=>(0, _functionsJs.equals)(_status, Status.done);
    function reset() {
        _sample = [];
        _sampleSize = defaults.sampleSize;
        _rate = defaults.rate;
        _status = Status.reading;
    }
    function timestampAvgDiff(sample) {
        return sample.reduce(function(acc, x, i, xs) {
            let tsd = 1000;
            if (i > 0) tsd = xs[i].ts - xs[i - 1].ts;
            acc += (tsd - acc) / (i + 1);
            return acc;
        }, 0);
    }
    function calculate(sample) {
        const tsAvgDiff = timestampAvgDiff(sample);
        const maxRateCount = (0, _functionsJs.clamp)(2, 15, Math.round(_maxStillTime / tsAvgDiff) - 1);
        console.log(`rateAdjuster on: ${sensor} tsAvgDiff: ${tsAvgDiff} result: ${maxRateCount}`);
        return maxRateCount;
    }
    function update(value) {
        if (isDone()) return;
        _sample.push(value);
        _sampleSize += 1;
        if (_sampleSize >= _cutoff) {
            _status = Status.done;
            _rate = calculate(_sample);
            onDone(_rate);
        }
    }
    return Object.freeze({
        reset,
        isDone,
        timestampAvgDiff,
        calculate,
        update
    });
}

},{"../../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aoG2I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "control", ()=>control);
var _functionsJs = require("../../functions.js");
function RequestControl() {
    const opCode = 0x20; // 32
    const length = 3;
    const unlockCode = [
        0xEE,
        0xFC
    ];
    function encode() {
        // [0x20, 0xEE, 0xFC]
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint8(1, unlockCode[0], true);
        view.setUint8(2, unlockCode[1], true);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const unlockCode = [
            dataview.getUint8(1, true),
            dataview.getUint8(2, true)
        ];
        return {
            opCode,
            unlockCode
        };
    }
    return Object.freeze({
        opCode,
        length,
        encode,
        decode
    });
}
function SetERG() {
    const opCode = 0x42;
    const length = 3;
    const definitions = {
        power: {
            resolution: 1,
            unit: "W",
            size: 2,
            min: 0,
            max: 65534,
            default: 0
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    // {power: Int} -> ArrayBuffer
    function encode(args = {}) {
        const power = spec.encodeField("power", args.power);
        const view = new DataView(new ArrayBuffer(length));
        (0, _functionsJs.print).log(`tx: wcps: setERG: ${args.power}`);
        view.setUint8(0, opCode, true);
        view.setUint16(1, power, true);
        return view.buffer;
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode
    });
}
function Grade() {
    // set Sim Grade
    const opCode = 0x46; // 70
    const length = 3;
    // Format ????
    // let norm = UInt16((min(1, max(-1, grade)) + 1.0) * 65535 / 2.0)
    // int value = (gradient / 100.0 + 1.0) * 32768;
    // Math.min(1, Math.max(-1, grade) + 1) * 32768
    const definitions = {
        grade: {
            resolution: 1,
            unit: "%",
            size: 2,
            min: applyOffset(-100),
            max: applyOffset(100),
            default: applyOffset(0)
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function applyOffset(value) {
        return (value / 100 + 1) * 32768;
    }
    function removeOffset(prop, value) {
        return (0, _functionsJs.toFixed)((value / 32768 - 1) * 100, 1);
    }
    function encode(args = {}) {
        const grade = spec.encodeField("grade", args.grade, applyOffset);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint16(1, grade, true);
        (0, _functionsJs.print).log(`tx: wcps: grade: ${grade}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const grade = spec.decodeField("grade", dataview.getUint16(1, true), removeOffset);
        return {
            grade
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function SIM() {
    const opCode = 0x43; // 67
    const length = 7;
    const definitions = {
        weight: {
            resolution: 0.01,
            unit: "kg",
            size: 2,
            min: 0,
            max: 655.35,
            default: 75
        },
        crr: {
            resolution: 0.0001,
            unit: "",
            size: 2,
            min: 0,
            max: 6.5535,
            default: 0.004
        },
        windResistance: {
            resolution: 0.001,
            unit: "kg/m",
            size: 2,
            min: 0,
            max: 65.535,
            default: 0.51
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        const weight = spec.encodeField("weight", args.weight);
        const crr = spec.encodeField("crr", args.crr);
        const windResistance = spec.encodeField("windResistance", args.windResistance);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint16(1, weight, true);
        view.setUint16(3, crr, true);
        view.setUint16(5, windResistance, true);
        (0, _functionsJs.print).log(`tx: wcps: sim: ${weight}, ${crr}, ${windResistance}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const weight = spec.decodeField("weight", dataview.getUint16(1, true));
        const crr = spec.decodeField("crr", dataview.getUint16(3, true));
        const windResistance = spec.decodeField("windResistance", dataview.getUint16(5, true));
        return {
            weight,
            crr,
            windResistance
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function WindSpeed() {
    // set Wind Speed
    const opCode = 0x47; // 71
    const length = 3;
    // Format ????
    // int value = (int)((windSpeed + 32.768) * 1000.0);
    const definitions = {
        windSpeed: {
            resolution: 1,
            unit: "mps",
            size: 2,
            min: applyOffset(-35.56),
            max: applyOffset(35.56),
            default: applyOffset(0)
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function applyOffset(value) {
        return (value + 32.768) * 1000;
    }
    function removeOffset(prop, value) {
        return (0, _functionsJs.toFixed)(value / 1000 - 32.768, 2);
    }
    function encode(args = {}) {
        const windSpeed = spec.encodeField("windSpeed", args.windSpeed, applyOffset);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint16(1, windSpeed, true);
        (0, _functionsJs.print).log(`tx: wcps: windSpeed: ${windSpeed}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const windSpeed = spec.decodeField("windSpeed", dataview.getUint16(1, true), removeOffset);
        return {
            windSpeed
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function WheelCircumference() {
    // set Wind Speed
    const opCode = 0x48; // 72
    const length = 3;
    // Format ????
    // int value = (int)(wheelSize * 10.0);
    const definitions = {
        circumference: {
            resolution: 0.1,
            unit: "mm",
            size: 2,
            min: 0,
            max: 6553.4,
            default: 2136
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        const circumference = spec.encodeField("circumference", args.circumference);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint16(1, circumference, true);
        (0, _functionsJs.print).log(`tx: wcps: circumference: ${circumference}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const circumference = spec.decodeField("circumference", dataview.getUint16(1, true));
        return {
            circumference
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function LoadIntensity() {
    // set Load Intensity
    const opCode = 0x40; // 64
    const length = 3;
    // Format ????
    // input value is between 0 and 1
    // let norm = UInt16((1 - resistance) * 16383)
    // int value = (1.0 - load) * 16383.0;
    const definitions = {
        intensity: {
            resolution: 1,
            unit: "",
            size: 2,
            min: applyOffset(1),
            // it flips the value
            max: applyOffset(0),
            default: applyOffset(0)
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function applyOffset(value) {
        return Math.round((1 - value) * 16383);
    }
    function removeOffset(prop, value) {
        return (0, _functionsJs.toFixed)(1 - value / 16383, 2);
    }
    function encode(args = {}) {
        const intensity = spec.encodeField("intensity", args.intensity, applyOffset);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint16(1, intensity, true);
        (0, _functionsJs.print).log(`tx: wcps: loadIntensity: ${args.intensity}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const intensity = spec.decodeField("intensity", dataview.getUint16(1, true), removeOffset);
        return {
            intensity
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function LoadLevel() {
    // set Load Level
    const opCode = 0x41; // 65
    const length = 2;
    // Format ????
    // input value is between 0 and 9
    const definitions = {
        level: {
            resolution: 1,
            unit: "",
            size: 1,
            min: 0,
            max: 9,
            default: 0
        }
    };
    const spec = (0, _functionsJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        const level = spec.encodeField("level", args.level);
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, opCode, true);
        view.setUint8(1, level, true);
        (0, _functionsJs.print).log(`tx: wcps: loadLevel: ${args.level}`);
        return view.buffer;
    }
    function decode(dataview) {
        const opCode = dataview.getUint8(0, true);
        const level = spec.decodeField("level", dataview.getUint8(1, true));
        return {
            level
        };
    }
    return Object.freeze({
        opCode,
        length,
        definitions,
        encode,
        decode
    });
}
function Response() {
    // Format:
    //
    // Example 1:
    // msg:      [66, 50, 0],
    // response: [1, 66, 1, 0, 50, 0]
    //
    // status - op code - ? - value
    // 1        66        1   50
    //
    // 0b01 status === success
    //
    // Example 2:
    // msg:      [32],
    // response: [1, 32, 2]
    //
    // status - op code - ?
    // 1        32        2
    //
    // Responses:
    // [   1,   67,    1,    0], setSimMode success
    // [0x01, 0x43, 0x01, 0x00],
    //
    // [   1,   70,    1,    0,    0,  128], setSlopeTarget success
    // [0x01, 0x46, 0x01, 0x00, 0x00, 0x80],
    //
    const results = {
        "1": {
            definition: "success",
            msg: "success"
        },
        "0": {
            definition: "fail",
            msg: "fail"
        } // maybe just a guess
    };
    const requests = {
        "0x20": {
            definition: "unlock",
            msg: "unlock"
        },
        // 32
        "0x40": {
            definition: "setResistanceTarget",
            msg: "setResistanceTarget"
        },
        // 64
        "0x41": {
            definition: "setStandardMode",
            msg: "setStandardMode"
        },
        // 65
        "0x42": {
            definition: "setPowerTarget",
            msg: "setPowerTarget"
        },
        // 66
        "0x43": {
            definition: "setSimMode",
            msg: "setSimMode"
        },
        // 67
        "0x44": {
            definition: "setCrr",
            msg: "setCrr"
        },
        // 68
        "0x45": {
            definition: "setWindResistance",
            msg: "setWindResistance"
        },
        // 69
        "0x46": {
            definition: "setSlopeTarget",
            msg: "setSlopeTarget"
        },
        // 70
        "0x47": {
            definition: "setWindSpeed",
            msg: "setWindSpeed"
        },
        // 71
        "0x48": {
            definition: "setWheelCircumference",
            msg: "setWheelCircumference"
        } // 72
    };
    function decodeStatus(value) {
        if ((0, _functionsJs.equals)(value, 0)) return "fail";
        if ((0, _functionsJs.equals)(value, 1)) return "success";
        return ":unknown";
    }
    function decodeRequest(value) {
        const hexValue = (0, _functionsJs.hex)(value);
        if ((0, _functionsJs.exists)(requests[hexValue])) return requests[hexValue]?.msg ?? "";
        return ":unknown";
    }
    function encode(value) {}
    function decode(dataview) {
        const raw = (0, _functionsJs.dataviewToArray)(dataview).slice(dataview.byteOffset);
        const res = {};
        res.status = decodeStatus(dataview.getUint8(0, true));
        res.request = decodeRequest(dataview.getUint8(1, true));
        if (dataview.byteLength > 5) res.value = dataview.getUint16(4, true);
        (0, _functionsJs.print).log(`rx: wcps: status: ${res.status} request: ${res.request} ${raw}`);
        return res;
    }
    return Object.freeze({
        results,
        requests,
        encode,
        decode
    });
}
const control = {
    grade: Grade(),
    windSpeed: WindSpeed(),
    sim: SIM(),
    wheelCircumference: WheelCircumference(),
    setERG: SetERG(),
    loadIntensity: LoadIntensity(),
    loadLevel: LoadLevel(),
    requestControl: RequestControl(),
    response: Response()
};

},{"../../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TjWj":[function(require,module,exports) {
//
// Cycling Power Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _cyclingPowerMeasurementJs = require("./cycling-power-measurement.js");
function CPS(args = {}) {
    // config
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "CPS needs BluetoothRemoteGATTService!");
    // {} -> Void
    const onData = args.onData;
    // end config
    // Service
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).cyclingPowerMeasurement,
            notify: {
                callback: onData,
                parser: (0, _cyclingPowerMeasurementJs.cyclingPowerMeasurement)
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        service: gattService,
        spec
    });
    return Object.freeze({
        ...service // CPS will have all the public methods and properties of Service
    });
}
exports.default = CPS;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../service.js":"kmNRA","../characteristic.js":"k283X","./cycling-power-measurement.js":"3Uayb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2LSIc":[function(require,module,exports) {
//
// Cycling Speec and Cadence Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _cyclingSpeedCadenceMeasurementJs = require("./cycling-speed-cadence-measurement.js");
function CSCS(args = {}) {
    // config
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "HRS needs BluetoothRemoteGATTService!");
    const onData = args.onData;
    // end config
    // Service
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).speedCadenceMeasurement,
            notify: {
                callback: onData,
                parser: (0, _cyclingSpeedCadenceMeasurementJs.cscMeasurement)
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        service: gattService,
        spec
    });
    return Object.freeze({
        ...service
    });
}
exports.default = CSCS;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../service.js":"kmNRA","../characteristic.js":"k283X","./cycling-speed-cadence-measurement.js":"kHfeu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHfeu":[function(require,module,exports) {
//
// Cycling Speed and Cadence Measurement Characteristic
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSCMeasurement", ()=>CSCMeasurement);
parcelHelpers.export(exports, "cscMeasurement", ()=>cscMeasurement);
var _functionsJs = require("../../functions.js");
var _revsOverTimeJs = require("./revs-over-time.js");
const wheelRevolutionDataPresent = (flags)=>(flags >> 0 & 1) === 1;
const crankRevolutionDataPresent = (flags)=>(flags >> 1 & 1) === 1;
const cumulativeWheelRevolutionsPresent = (flags)=>(flags >> 2 & 1) === 1;
const fields = {
    flags: {
        resolution: 1,
        unit: "",
        size: 1,
        type: "Uint8",
        present: (_)=>true
    },
    cumulativeWheelRevolutions: {
        resolution: 1,
        unit: "",
        size: 4,
        type: "Uint32",
        present: wheelRevolutionDataPresent
    },
    lastWheelEventTime: {
        resolution: 1 / 1024,
        unit: "s",
        size: 2,
        type: "Uint16",
        present: wheelRevolutionDataPresent
    },
    cumulativeCrankRevolutions: {
        resolution: 1,
        unit: "",
        size: 2,
        type: "Uint16",
        present: crankRevolutionDataPresent
    },
    lastCrankEventTime: {
        resolution: 1 / 1024,
        unit: "s",
        size: 2,
        type: "Uint16",
        present: crankRevolutionDataPresent
    }
};
const order = [
    "flags",
    "cumulativeWheelRevolutions",
    "lastWheelEventTime",
    "cumulativeCrankRevolutions",
    "lastCrankEventTime"
];
function CSCMeasurement(args = {}) {
    const defaults = {
        wheelCircumference: 2.105 // meters or 700x25
    };
    const architecture = true;
    let wheelCircumference = args.wheelCircumference ?? defaults.wheelCircumference;
    const cadence = (0, _revsOverTimeJs.RevsOverTime)({
        resolution: 1,
        maxRevs: 2 ** 16 * fields.cumulativeCrankRevolutions.resolution,
        // 1
        maxTime: 2 ** 16 * fields.lastCrankEventTime.resolution,
        // 1024
        // revs per second to revs per 60 seconds
        format: (x)=>Math.round(x * 60)
    });
    const rateAdjuster = (0, _revsOverTimeJs.RateAdjuster)({
        sensor: "cscs",
        onDone: function(maxRateCount) {
            cadence.setMaxRateCount(maxRateCount);
        }
    });
    function getField(field, dataview, i) {
        return dataview[`get${field.type}`](i, architecture) * field.resolution;
    }
    function decode(dataview) {
        const byteLength = dataview.byteLength;
        if (!rateAdjuster.isDone()) rateAdjuster.update({
            ts: Date.now()
        });
        return order.reduce(function(acc, fieldName) {
            const field = fields[fieldName];
            if (acc.i + field.size > byteLength) return acc;
            if (field.present(acc.flags)) {
                const value = getField(field, dataview, acc.i);
                const unit = field.unit;
                const name = field.short ?? fieldName;
                if (acc.i === 0) acc.flags = value;
                acc.data[name] = value;
                if (name === "lastCrankEventTime") acc.data["cadence"] = cadence.calculate(acc.data["cumulativeCrankRevolutions"], acc.data["lastCrankEventTime"]);
                acc.i += field.size;
            }
            return acc;
        }, {
            i: 0,
            flags: 0,
            data: {}
        }).data;
    }
    return Object.freeze({
        decode
    });
}
const cscMeasurement = CSCMeasurement();

},{"../../functions.js":"2jd1e","./revs-over-time.js":"46HPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2ofu":[function(require,module,exports) {
//
// Heart Rate Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _heartRateMeasurementJs = require("./heart-rate-measurement.js");
function HRS(args = {}) {
    // config
    const onData = args.onData;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "HRS needs BluetoothRemoteGATTService!");
    // end config
    // service
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).heartRateMeasurement,
            notify: {
                callback: onData,
                parser: (0, _heartRateMeasurementJs.heartRateMeasurement)
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        spec,
        service: gattService
    });
    // end service
    return Object.freeze({
        ...service // HRS will have all the public methods and properties of Service
    });
}
exports.default = HRS;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../service.js":"kmNRA","../characteristic.js":"k283X","./heart-rate-measurement.js":"dT5Z5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dT5Z5":[function(require,module,exports) {
//
// Heart Rate Spec
// Heart Rate Measurement characteristic
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeartRateMeasurement", ()=>HeartRateMeasurement);
parcelHelpers.export(exports, "heartRateMeasurement", ()=>heartRateMeasurement);
const heartRateFormat = (flags)=>(flags >> 0 & 1) === 1;
const inContact = (flags)=>(flags >> 1 & 1) === 1;
const sensorContact = (flags)=>(flags >> 2 & 1) === 1;
const energyExpanded = (flags)=>(flags >> 3 & 1) === 1;
const rrInterval = (flags)=>(flags >> 4 & 1) === 1;
function readHeartRate(dataview) {
    const flags = dataview.getUint8(0, true);
    const datatype = heartRateFormat(flags) ? "Uint16" : "Uint8";
    return dataview["get" + datatype](1, true);
}
function HeartRateMeasurement(args = {}) {
    function decode(dataview) {
        return {
            heartRate: readHeartRate(dataview)
        };
    }
    return Object.freeze({
        decode
    });
}
const heartRateMeasurement = HeartRateMeasurement();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4iXP":[function(require,module,exports) {
//
// Race Controller Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _raceControllerMeasurementJs = require("./race-controller-measurement.js");
// import { Crypto } from './crypto.js';
function Crypto() {
    function createPublicKey() {}
    function createSharedKey() {}
    function decodePublicKey() {}
    return {
        createPublicKey,
        createSharedKey,
        decodePublicKey
    };
}
function RCS(args = {}) {
    // config
    const onData = args.onData;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "RCS needs BluetoothRemoteGATTService!");
    // end config
    // service
    const crypto = Crypto();
    const raceControllerMeasurementParser = (0, _raceControllerMeasurementJs.RaceControllerMeasurement)({
        crypto
    });
    async function protocol() {
        const control = service.characteristics.control;
        // Step 1: create key pair
        crypto.createPublicKey();
        // Step 2: send handshake
        await control.write(crypto.handshake());
    }
    function onResponse(msg) {
        console.log(`ble: rcs: on-response: `, msg);
        // Step 3: create shared key
        crypto.createSharedKey(msg);
    }
    function onControl(msg) {
        console.log(`ble: rcs: on-control: `, msg);
    }
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).raceControllerMeasurement,
            notify: {
                callback: onData,
                parser: raceControllerMeasurementParser
            }
        },
        control: {
            uuid: (0, _webBleJs.uuids).raceControllerControlPoint
        },
        response: {
            uuid: (0, _webBleJs.uuids).raceControllerResponse,
            notify: {
                callback: onResponse,
                parser: {
                    decode: (dataview)=>crypto.decodePublicKey(dataview)
                }
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        spec,
        service: gattService
    });
    // end service
    return Object.freeze({
        ...service,
        // RCS will have all the public methods and properties of Service
        protocol
    });
}
exports.default = RCS;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../service.js":"kmNRA","../characteristic.js":"k283X","./race-controller-measurement.js":"6S85N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S85N":[function(require,module,exports) {
//
// Race Controller Measurement Characteristic
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RaceControllerMeasurement", ()=>RaceControllerMeasurement);
function RaceControllerMeasurement(args = {}) {
    const architecture = true;
    const opCodes = {
        buttons: 7,
        idle: 21,
        unknown: 0xFF
    };
    const crypto = args.crypto ?? {
        decrypt: (x)=>""
    };
    // Dataview -> String
    function decrypt(dataview) {
        return crypto.decrypt(decrypt.buffer);
    }
    // NOTE:
    // normal button: not pressed 1, pressed 0
    // numeric button: not pressed 0, pressed: Int > 0
    // Dataview -> { type: String, plus: Bool, minus: Bool }
    function decode(dataview) {
        const str = decrypt(dataview) ?? "0xFF";
        const opCode = str.substring(0, 1);
        let type = "unknown";
        let data = {};
        if (opCode === opCodes.buttons) {
            type = "buttons";
            data.plus = str.substring(4, 6) === "00";
            data.minus = str.substring(8, 10) === "00";
        }
        if (opCode === opCodes.idle) type = "idle";
        // TODO: handle other message types
        return {
            type,
            ...data
        };
    }
    return Object.freeze({
        decrypt,
        decode
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BAiTt":[function(require,module,exports) {
//
// SmO2 Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _moxyJs = require("./moxy.js");
function SMO2(args = {}) {
    // config
    const onData = args.onData;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "SMO2 needs BluetoothRemoteGATTService!");
    // end config
    // service
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).smo2SensorData,
            notify: {
                callback: onData,
                parser: (0, _moxyJs.sensorData)
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        spec,
        service: gattService
    });
    // end service
    return Object.freeze({
        ...service // SMO2 will have all the public methods and properties of Service
    });
}
exports.default = SMO2;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../service.js":"kmNRA","../characteristic.js":"k283X","./moxy.js":"d4V2Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4V2Z":[function(require,module,exports) {
//
// Saturated Muscle Oxygen Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sensorData", ()=>sensorData);
parcelHelpers.export(exports, "deviceControl", ()=>deviceControl);
var _commonJs = require("../common.js");
function SensorData(args = {}) {
    const definitions = {
        sensorCount: {
            size: 2,
            resolution: 1,
            unit: "",
            min: 0,
            max: 32767
        },
        currentSaturatedHemoglobin: {
            size: 2,
            resolution: 0.1,
            unit: "%",
            min: 0,
            max: 1000
        },
        previousSaturatedHemoglobin: {
            size: 2,
            resolution: 0.1,
            unit: "%",
            min: 0,
            max: 1000
        },
        totalHemoglobinSaturation: {
            size: 2,
            resolution: 0.01,
            unit: "g/dl",
            min: 0,
            max: 4000
        },
        requestTimeSetBit: {
            size: 1,
            resolution: 1,
            unit: "",
            min: 0,
            max: 1
        }
    };
    const spec = (0, _commonJs.Spec)({
        definitions
    });
    function encode(args = {}) {
        throw new Error("SmOS SensorData.encode is not yet implemented!");
    }
    // Example:
    //
    // (0x) CB-06- 15-02- 16-02- C0-04 -00
    //      1739   533    534    1216   0
    //
    // (0x) CC-06- 12-02- 12-02- C1-04 -00
    //      1740   530    530    1217   0
    //
    // (0x) CD-06- 12-02- 12-02- C1-04 -00
    //      1741   530    530    1217   0
    //
    // (0x) CE-06- 13-02- 12-02- C1-04 -00
    //      1742   531    530    1217   0
    //
    // (0x) CF-06- 14-02- 13-02- C1-04 -00
    //      1743   532    531    1217   0
    //
    function decode(dataview) {
        const sensorCount = dataview.getUint16(0, true);
        const currentSaturatedHemoglobin = spec.decodeField("currentSaturatedHemoglobin", dataview.getUint16(2, true));
        const previousSaturatedHemoglobin = spec.decodeField("previousSaturatedHemoglobin", dataview.getUint16(4, true));
        const totalHemoglobinSaturation = spec.decodeField("totalHemoglobinSaturation", dataview.getUint16(6, true));
        const requestTimeSetBit = dataview.getUint8(8, true);
        return {
            sensorCount,
            currentSaturatedHemoglobin,
            previousSaturatedHemoglobin,
            totalHemoglobinSaturation,
            requestTimeSetBit
        };
    }
    return Object.freeze({
        encode,
        decode
    });
}
function DeviceControl(args = {}) {
    const length = 3;
    const definitions = {
        dataControl: {
            size: 1,
            resolution: 1,
            unit: "",
            min: 0,
            max: 5
        },
        updateType: {
            size: 1,
            resolution: 1,
            unit: "",
            min: 0,
            max: 5
        }
    };
    const values = {
        dataControl: {
            notIncluded: 0,
            reset: 1,
            markLap: 2,
            start: 3,
            stop: 4,
            clearData: 5
        },
        updateType: {
            "doNotChange": 0,
            "2sDataSmoothing": 1,
            // Default
            "2sNoDataSmoothing": 2,
            "2sDataSmoothing": 3,
            "0.5sNoDataSmoothing": 4,
            "1sDataSmoothing": 5
        },
        antProfile: {
            doNotChange: 0,
            matchExisting: 1,
            matchExisting: 2,
            matchExisting: 3
        },
        antBleSelector: {
            doNotChange: 0,
            antPlus: 1,
            ble: 2,
            both: 3,
            neither: 4
        }
    };
    const defaults = {
        dataControl: values.dataControl.notIncluded,
        updateType: values.updateType.doNotChange,
        antProfile: values.antProfile.doNotChange,
        antBleSelector: values.antBleSelector.doNotChange
    };
    function encode(args = {}) {
        const dataControl = args.dataControl ?? defaults.dataControl;
        const updateType = args.updateType ?? defaults.updateType;
        // Depricated
        const antProfile = defaults.antProfile;
        const antBleSelector = defaults.antBleSelector;
        const compound = (antProfile << 4) + antBleSelector;
        // end Depricated
        const buffer = new ArrayBuffer(length);
        const view = new DataView(buffer);
        view.setUint8(0, dataControl, true);
        view.setUint8(1, updateType, true);
        view.setUint8(1, compound, true);
        return view.buffer;
    }
    function decode(dataview) {
        throw new Error("SmO2 DeviceControl.decode is not yet implemented!");
    }
    return Object.freeze({
        encode,
        decode,
        length,
        definitions,
        values,
        defaults
    });
}
const sensorData = SensorData();
const deviceControl = DeviceControl();

},{"../common.js":"lfPoD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfPoD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Spec", ()=>Spec);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "RateAdjuster", ()=>RateAdjuster);
var _functionsJs = require("../functions.js");
function Spec(args = {}) {
    const definitions = (0, _functionsJs.existance)(args.definitions);
    const applyResolution = (0, _functionsJs.curry2)((prop, value)=>{
        return value / definitions[prop].resolution;
    });
    const removeResolution = (0, _functionsJs.curry2)((prop, value)=>{
        return value * definitions[prop].resolution;
    });
    function encodeField(prop, input, transform = applyResolution(prop)) {
        const fallback = definitions[prop].default;
        const min = applyResolution(definitions[prop].min);
        const max = applyResolution(definitions[prop].max);
        const value = (0, _functionsJs.existance)(input, fallback);
        return Math.floor((0, _functionsJs.clamp)(min, max, transform(value)));
    }
    function decodeField(prop, input, transform = removeResolution) {
        return transform(prop, input);
    }
    return {
        definitions,
        applyResolution,
        removeResolution,
        encodeField,
        decodeField
    };
}
function State(args = {}) {
    const defaults = {
        revs: -1,
        time: -1,
        value: 0,
        resolution: 1024,
        maxRevs: 2 ** 16,
        maxTime: 2 ** 16,
        transform: (x)=>x,
        rate: 512,
        // 0.5 second,
        maxRateCount: 3,
        rateCount: 0
    };
    const resolution = (0, _functionsJs.existance)(args.resolution, defaults.resolution);
    const transform = (0, _functionsJs.existance)(args.transform, defaults.transform);
    const maxRevs = (0, _functionsJs.existance)(args.maxRevs, defaults.maxRevs);
    const maxTime = (0, _functionsJs.existance)(args.maxTime, defaults.maxTime);
    const calculate = (0, _functionsJs.existance)(args.calculate, defaultCalculate);
    const rate = (0, _functionsJs.existance)(args.rate, defaults.rate);
    let maxRateCount = (0, _functionsJs.existance)(args.maxRateCount, defaults.maxRateCount);
    let rateCount = defaults.rateCount;
    let revs_1 = defaults.revs;
    let time_1 = defaults.time;
    let value = defaults.value;
    function setRevs(revs) {
        revs_1 = revs;
        return revs_1;
    }
    function setTime(time) {
        time_1 = time;
        return time_1;
    }
    function setRateCount(count) {
        rateCount = count;
        return rateCount;
    }
    function setMaxRateCount(maxCount) {
        maxRateCount = (0, _functionsJs.existance)(maxCount, defaults.maxRateCount);
        console.log(`maxRateCount: ${maxRateCount}`);
        return maxRateCount;
    }
    function getRevs() {
        return revs_1;
    }
    function getTime() {
        return time_1;
    }
    function getRateCount() {
        return rateCount;
    }
    function getMaxRateCount() {
        return maxRateCount;
    }
    function reset() {
        setRevs(defaults.revs);
        setTime(defaults.time);
        setRateCount(defaults.rateCount);
        value = defaults.value;
        return {
            revs: revs_1,
            time: time_1
        };
    }
    function isRolloverTime(time_2) {
        return time_2 < getTime();
    }
    function isRolloverRevs(revs_2) {
        return revs_2 < getRevs();
    }
    function rollOverTime() {
        return getTime() - maxTime;
    }
    function rollOverRevs() {
        return getRevs() - maxRevs;
    }
    function stillRevs(revs_2) {
        // coasting or not moving
        return (0, _functionsJs.equals)(getRevs(), revs_2);
    }
    function stillTime(time) {
        // multiple transmissions of the same time
        return (0, _functionsJs.equals)(getTime(), time);
    }
    function underRate(time) {
        if ((0, _functionsJs.equals)(rateCount, maxRateCount)) {
            rateCount = 0;
            return false;
        }
        if ((0, _functionsJs.equals)(getTime(), time)) {
            rateCount += 1;
            return true;
        }
        if (time - getTime() < rate) {
            rateCount += 1;
            return true;
        }
        rateCount = 0;
        return false;
    }
    function defaultCalculate(revs_2, time_2) {
        if (getRevs() < 0) setRevs(revs_2); // set initial revs
        if (getTime() < 0) setTime(time_2); // set initial time
        if (underRate(time_2)) return value;
        if (stillRevs(revs_2)) {
            setTime(time_2);
            value = 0;
            return value;
        }
        if (isRolloverTime(time_2)) setTime(rollOverTime());
        if (isRolloverRevs(revs_2)) setRevs(rollOverRevs());
        value = transform((revs_2 - getRevs()) / ((time_2 - getTime()) / resolution));
        setRevs(revs_2);
        setTime(time_2);
        return value;
    }
    return {
        setRevs,
        setTime,
        setRateCount,
        setMaxRateCount,
        getRevs,
        getTime,
        getRateCount,
        getMaxRateCount,
        reset,
        calculate,
        rollOverTime,
        rollOverRevs
    };
}
function RateAdjuster(args = {}) {
    const defaults = {
        sampleSize: 0,
        rate: 3,
        // [0,1,2,3]
        cutoff: 20,
        maxStillTime: 3000,
        // ms
        status: "reading",
        statusList: [
            "reading",
            "done"
        ],
        sensor: "cscs",
        onDone: (x)=>x
    };
    let _sample = [];
    let _sampleSize = defaults.sampleSize;
    let _rate = defaults.rate;
    let _maxStillTime = defaults.maxStillTime;
    let _cutoff = defaults.cutoff;
    let _status = defaults.status;
    const onDone = (0, _functionsJs.existance)(args.onDone, defaults.onDone);
    const sensor = (0, _functionsJs.existance)(args.sensor, defaults.sensor);
    function getSampleSize() {
        return _sampleSize;
    }
    function getSample() {
        return _sample;
    }
    function getRate() {
        return _rate;
    }
    function getStatus() {
        return _status;
    }
    function getCutoff() {
        return _cutoff;
    }
    function getMaxStillTime(ms) {
        return _maxStillTime;
    }
    function setCutoff(count) {
        _cutoff = count;
    }
    function setMaxStillTime(ms) {
        _maxStillTime = ms;
    }
    function reset() {
        _sample = [];
        _sampleSize = defaults.sampleSize;
        _rate = defaults.rate;
        _status = defaults.status;
    }
    function isDone() {
        return (0, _functionsJs.equals)(_status, "done");
    }
    function timestampAvgDiff(sample) {
        return sample.reduce(function(acc, x, i, xs) {
            let tsd = 1000;
            if (i > 0) tsd = xs[i].ts - xs[i - 1].ts;
            acc += (tsd - acc) / (i + 1);
            return acc;
        }, 0);
    }
    function calculate(sample) {
        const tsAvgDiff = timestampAvgDiff(sample);
        const maxRateCount = (0, _functionsJs.clamp)(2, 15, Math.round(_maxStillTime / tsAvgDiff) - 1);
        console.log(`rateAdjuster :on ${sensor} :tsAvgDiff ${tsAvgDiff} :result ${maxRateCount}`);
        return maxRateCount;
    }
    function update(value) {
        if (isDone()) return;
        _sample.push(value);
        _sampleSize += 1;
        if (_sampleSize >= _cutoff) {
            _status = "done";
            _rate = calculate(_sample);
            onDone(_rate);
        }
    }
    return Object.freeze({
        getSampleSize,
        getSample,
        getRate,
        getStatus,
        getCutoff,
        getMaxStillTime,
        setCutoff,
        setMaxStillTime,
        reset,
        isDone,
        timestampAvgDiff,
        calculate,
        update
    });
}

},{"../functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOyCR":[function(require,module,exports) {
//
// Core Temp Service
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("../../functions.js");
var _webBleJs = require("../web-ble.js");
var _serviceJs = require("../service.js");
var _characteristicJs = require("../characteristic.js");
var _coreBodyTemperatureJs = require("./core-body-temperature.js");
function CoreTemp(args = {}) {
    // config
    const onData = args.onData;
    // BluetoothRemoteGATTService{
    //     device: BluetoothDevice,
    //     uuid: String,
    //     isPrimary: Bool,
    // }
    const gattService = (0, _functionsJs.expect)(args.service, "CoreTemp needs BluetoothRemoteGATTService!");
    // end config
    // service
    const spec = {
        measurement: {
            uuid: (0, _webBleJs.uuids).coreBodyTemp,
            notify: {
                callback: onData,
                parser: (0, _coreBodyTemperatureJs.coreBodyTemperature)
            }
        }
    };
    const service = (0, _serviceJs.Service)({
        spec,
        service: gattService
    });
    // end service
    return Object.freeze({
        ...service // CoreTemp will have all the public methods and properties of Service
    });
}
exports.default = CoreTemp;

},{"../../functions.js":"2jd1e","../web-ble.js":"1bEyg","../service.js":"kmNRA","../characteristic.js":"k283X","./core-body-temperature.js":"bjP6R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjP6R":[function(require,module,exports) {
//
// Core Body Temperature characteristic
//
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CoreBodyTemperature", ()=>CoreBodyTemperature);
parcelHelpers.export(exports, "coreBodyTemperature", ()=>coreBodyTemperature);
const skinTemperaturePresent = (flags)=>(flags >> 0 & 1) === 1;
const coreReservedPresent = (flags)=>(flags >> 1 & 1) === 1;
const qualityAndStatePresent = (flags)=>(flags >> 2 & 1) === 1;
const heartRatePresent = (flags)=>(flags >> 4 & 1) === 1;
const Flags = {
    skinTemperature: {
        bit: 0,
        values: [
            "notPresent",
            "present"
        ]
    },
    coreReserved: {
        bit: 1,
        values: [
            "notPresent",
            "present"
        ]
    },
    qualityAndState: {
        bit: 2,
        values: [
            "notPresent",
            "present"
        ]
    },
    temperatureUnit: {
        bit: 3,
        values: [
            "C",
            "F"
        ]
    },
    heartRate: {
        bit: 4,
        values: [
            "notPresent",
            "present"
        ]
    }
};
const Fields = {
    flags: {
        resolution: 1,
        size: 1,
        type: "Uint8",
        present: (_)=>true
    },
    coreBodyTemperature: {
        resolution: 0.01,
        size: 2,
        type: "Int16",
        invalid: 0x7FFF,
        present: (_)=>true
    },
    skinTemperature: {
        resolution: 0.01,
        size: 2,
        type: "Int16",
        present: skinTemperaturePresent
    },
    coreReserved: {
        resolution: 1,
        size: 2,
        type: "Int16",
        present: coreReservedPresent
    },
    qualityAndState: {
        resolution: 1,
        size: 1,
        type: "Uint8",
        present: qualityAndStatePresent
    },
    heartRate: {
        resolution: 1,
        size: 1,
        type: "Uint8",
        present: heartRatePresent
    }
};
const order = [
    "flags",
    "coreBodyTemperature",
    "skinTemperature",
    "coreReserved",
    "qualityAndState",
    "heartRate"
];
const QualityAndState = {};
function CoreBodyTemperature(args = {}) {
    const architecture = true;
    function getField(field, dataview, i) {
        return dataview[`get${field.type}`](i, architecture) * field.resolution;
    }
    function fahrenheitToCelsius(fahrenheit) {
        return Math.round(5 / 9 * (fahrenheit - 32) * 100) / 100;
    }
    function celsiusToFahrenheit(celsius) {
        return Math.round((celsius * 9 / 5 + 32) * 100) / 100;
    }
    // Int -> String
    function readTemperatureUnit(flags) {
        return (flags >> 3 & 1) === 0 ? "C" : "F";
    }
    // Example 1:
    // core body temperature, 38.12
    // skin temperature, 38.47
    //
    // [0b00000001, 228,   14,    7,   15,]
    // [0x01,      0xe4, 0x0e, 0x07, 0x0f,]
    //
    // Example 2:
    // core body temperature, 38.12
    // skin temperature, 38.47
    // core reserved, 0
    // quality and state, 011 good, 10 heart rate supported receiveing signal
    // heart rate, 130
    //
    // [0b00010111, 228,   14,    7,   15,    0,    0, 0b00010011, 130]
    // [0x17,      0xE4, 0x0E, 0x07, 0x0F, 0x00, 0x00, 0x13,     , 0x82]
    //
    // Dataview -> {'<field-name>': {value: Number, unit: String}}
    function decode(dataview) {
        const byteLength = dataview.byteLength;
        return order.reduce(function(acc, fieldName, i) {
            const field = Fields[fieldName];
            if (acc.i + field.size > byteLength) return acc;
            if (field.present(acc.flags)) {
                let value = getField(field, dataview, acc.i);
                const unit = field?.unit ?? "";
                const name = field?.short ?? fieldName;
                if (acc.temperatureUnit === "F" && (fieldName === "coreBodyTemperature" || fieldName === "skinTemperature")) value = fahrenheitToCelsius(value);
                if (acc.i === 0) {
                    acc.flags = value;
                    acc.temperatureUnit = readTemperatureUnit(value);
                } else // acc.data[name] = {value, unit,};
                acc.data[name] = value;
                acc.i += field.size;
            }
            return acc;
        }, {
            i: 0,
            flags: 0,
            data: {}
        }).data;
    }
    function encode(args = {}) {
        const coreBodyTemperature = Math.round(args.coreBodyTemperature / Fields.coreBodyTemperature.resolution) ?? Fields.coreBodyTemperature.invalid;
        // construct based on what is present in args
        let flags = args.flags ?? 0;
        let length = 3; // depends on flags, min 3, max 9
        if ("temperatureUnit" in args && args.temperatureUnit === "F") flags = flags | 8;
        if ("skinTemperature" in args) {
            flags = flags | 1;
            length += Fields.skinTemperature.size;
        }
        const dataview = new DataView(new ArrayBuffer(length));
        dataview.setUint8(0, flags, architecture);
        dataview.setInt16(1, coreBodyTemperature, architecture);
        if ("skinTemperature" in args) {
            const skinTemperature = Math.round(args.skinTemperature / Fields.skinTemperature.resolution);
            dataview.setInt16(3, skinTemperature, architecture);
        }
        return dataview;
    }
    return Object.freeze({
        decode,
        encode,
        fahrenheitToCelsius,
        celsiusToFahrenheit
    });
}
const coreBodyTemperature = CoreBodyTemperature();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqZCf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watch", ()=>watch);
var _functionsJs = require("./functions.js");
var _utilsJs = require("./utils.js");
var _modelsJs = require("./models/models.js");
var _enumsJs = require("./ble/enums.js");
var _enumsJs1 = require("./activity/enums.js");
// const timer = new Worker('./timer.js');
const timer = new Worker(require("f7805a2a09437db6"));
class Watch {
    constructor(args){
        this.elapsed = 0;
        this.lapTime = 0;
        this.stepTime = 0;
        this.intervalIndex = 0;
        this.stepIndex = 0;
        this.intervalDuration = 0;
        this.stepDuration = 0;
        this.state = "stopped";
        this.stateWorkout = "stopped";
        // Distance
        this.intervalType = "duration";
        // end Distance
        this.intervals = [];
        this.autoPauseCounter = 0;
        this.hasBeenAutoPaused = false;
        this.autoPause = false;
        this.init();
    }
    init() {
        const self = this;
        (0, _functionsJs.xf).sub("db:workout", (workout)=>{
            self.intervals = workout.intervals;
        });
        (0, _functionsJs.xf).sub("db:elapsed", (elapsed)=>{
            self.elapsed = elapsed;
        });
        (0, _functionsJs.xf).sub("db:lapTime", (time)=>{
            self.lapTime = time;
        });
        (0, _functionsJs.xf).sub("db:stepTime", (time)=>{
            self.stepTime = time;
        });
        (0, _functionsJs.xf).sub("db:intervalDuration", (time)=>{
            self.lapDuration = time;
        });
        (0, _functionsJs.xf).sub("db:stepDuration", (time)=>{
            self.stepDuration = time;
        });
        (0, _functionsJs.xf).sub("db:intervalIndex", (index)=>{
            self.intervalIndex = index;
        });
        (0, _functionsJs.xf).sub("db:stepIndex", (index)=>{
            self.stepIndex = index;
        });
        (0, _functionsJs.xf).sub("db:watchStatus", (state)=>{
            self.state = state;
        });
        (0, _functionsJs.xf).sub("db:workoutStatus", (state)=>{
            self.stateWorkout = state;
            if (self.isWorkoutDone()) {
                (0, _functionsJs.xf).dispatch("watch:lap");
                // reset to slope mode 0% when workout is done
                (0, _functionsJs.xf).dispatch("ui:slope-target-set", 0);
                (0, _functionsJs.xf).dispatch("ui:mode-set", (0, _enumsJs.ControlMode).sim);
                console.log(`Workout done!`);
            }
        });
        (0, _functionsJs.xf).sub("db:power1s", self.onPower1s.bind(this));
        (0, _functionsJs.xf).sub("db:sources", self.onSources.bind(this));
        timer.addEventListener("message", self.onTick.bind(self));
    }
    isStarted() {
        return this.state === "started";
    }
    isPaused() {
        return this.state === "paused";
    }
    isStopped() {
        return this.state === "stopped";
    }
    isWorkoutStarted() {
        return this.stateWorkout === "started";
    }
    isWorkoutDone() {
        return this.stateWorkout === "done";
    }
    isIntervalType(type) {
        return (0, _functionsJs.equals)(this.intervalType, type);
    }
    onSources(value) {
        this.autoPause = value.autoPause ?? false;
    }
    onPower1s(power) {
        if (!this.autoPause) return;
        if (power === 0 && this.isStarted()) this.autoPauseCounter += 1;
        else this.autoPauseCounter = 0;
        // print.log(`:auto-pause-counter ${this.autoPauseCounter} ${this.hasBeenAutoPaused}`);
        if (this.autoPauseCounter >= 4) {
            this.autoPauseCounter = 0;
            (0, _functionsJs.xf).dispatch(`ui:watchPause`);
            this.hasBeenAutoPaused = true;
        }
        if (power > 40 && this.hasBeenAutoPaused) (0, _functionsJs.xf).dispatch(`ui:watchResume`);
    }
    start() {
        const self = this;
        if (self.isStarted() && !self.isWorkoutStarted()) self.pause();
        else {
            // self.timer = setInterval(self.onTick.bind(self), 1000);
            timer.postMessage("start");
            (0, _functionsJs.xf).dispatch("watch:started");
            (0, _functionsJs.xf).dispatch("watch:event", {
                timestamp: Date.now(),
                type: (0, _enumsJs1.EventType).start
            });
        }
    }
    startWorkout() {
        const self = this;
        if (self.isWorkoutStarted() || self.isWorkoutDone()) return;
        let intervalTime = 0;
        let stepTime = 0;
        if ((0, _functionsJs.exists)(self.intervals)) {
            intervalTime = self.intervals[0]?.duration ?? 0;
            stepTime = self.intervals[0]?.steps[0].duration ?? 0;
            (0, _functionsJs.xf).dispatch("watch:intervalIndex", 0);
            (0, _functionsJs.xf).dispatch("watch:stepIndex", 0);
            (0, _functionsJs.xf).dispatch("workout:started");
            (0, _functionsJs.xf).dispatch("watch:intervalDuration", intervalTime);
            (0, _functionsJs.xf).dispatch("watch:stepDuration", stepTime);
            (0, _functionsJs.xf).dispatch("watch:lapTime", intervalTime);
            (0, _functionsJs.xf).dispatch("watch:stepTime", stepTime);
        }
        if ((0, _functionsJs.exists)(self.points)) self.intervalType = "distance";
        if (!self.isStarted()) self.start();
    }
    restoreWorkout() {
        const self = this;
        if (self.isWorkoutStarted()) (0, _functionsJs.xf).dispatch("workout:started");
        if (self.isStarted()) self.pause();
    }
    resume() {
        const self = this;
        if (!self.isStarted()) {
            // self.timer = setInterval(self.onTick.bind(self), 1000);
            timer.postMessage("start");
            (0, _functionsJs.xf).dispatch("watch:started");
            (0, _functionsJs.xf).dispatch("watch:event", {
                timestamp: Date.now(),
                type: (0, _enumsJs1.EventType).start
            });
            this.hasBeenAutoPaused = false;
        }
    }
    pause() {
        const self = this;
        timer.postMessage("pause");
        (0, _functionsJs.xf).dispatch("watch:paused");
        (0, _functionsJs.xf).dispatch("watch:event", {
            timestamp: Date.now(),
            type: (0, _enumsJs1.EventType).stop
        });
    }
    stop() {
        const self = this;
        if (self.isStarted() || self.isPaused()) {
            // clearInterval(self.timer);
            timer.postMessage("stop");
            (0, _functionsJs.xf).dispatch("watch:stopped");
            (0, _functionsJs.xf).dispatch("watch:event", {
                timestamp: Date.now(),
                type: (0, _enumsJs1.EventType).stop
            });
            if (self.isWorkoutStarted()) (0, _functionsJs.xf).dispatch("workout:stopped");
            self.lap();
            if ((0, _functionsJs.exists)(self.intervals)) {
                (0, _functionsJs.xf).dispatch("watch:intervalIndex", 0);
                (0, _functionsJs.xf).dispatch("watch:stepIndex", 0);
            }
            (0, _functionsJs.xf).dispatch("watch:elapsed", 0);
            (0, _functionsJs.xf).dispatch("watch:lapTime", 0);
        }
    }
    onTick() {
        const self = this;
        let elapsed = self.elapsed + 1;
        let lapTime = self.lapTime;
        let stepTime = self.stepTime;
        if (self.isWorkoutStarted() && !(0, _functionsJs.equals)(self.stepTime, 0)) {
            lapTime -= 1;
            stepTime -= 1;
        } else lapTime += 1;
        if ((0, _functionsJs.equals)(lapTime, 4) && stepTime > 0) (0, _functionsJs.xf).dispatch("watch:beep");
        (0, _functionsJs.xf).dispatch("watch:elapsed", elapsed);
        (0, _functionsJs.xf).dispatch("watch:lapTime", lapTime);
        (0, _functionsJs.xf).dispatch("watch:stepTime", stepTime);
        if (self.isWorkoutStarted() && stepTime <= 0 && this.isIntervalType("duration")) self.step();
    }
    lap() {
        const self = this;
        if (self.isWorkoutStarted()) {
            let i = self.intervalIndex;
            let s = self.stepIndex;
            let intervals = self.intervals;
            let moreIntervals = i < intervals.length - 1;
            if (moreIntervals) {
                i += 1;
                s = 0;
                self.nextInterval(intervals, i, s);
                self.nextStep(intervals, i, s);
            } else (0, _functionsJs.xf).dispatch("workout:done");
        } else {
            (0, _functionsJs.xf).dispatch("watch:lap");
            (0, _functionsJs.xf).dispatch("watch:lapTime", 0);
        }
    }
    step() {
        const self = this;
        let i = self.intervalIndex;
        let s = self.stepIndex;
        let intervals = self.intervals;
        let steps = intervals[i].steps;
        let moreIntervals = i < intervals.length - 1;
        let moreSteps = s < steps.length - 1;
        if (moreSteps) {
            s += 1;
            self.nextStep(intervals, i, s);
        } else if (moreIntervals) {
            i += 1;
            s = 0;
            self.nextInterval(intervals, i, s);
            self.nextStep(intervals, i, s);
        } else (0, _functionsJs.xf).dispatch("workout:done");
    }
    nextInterval(intervals, intervalIndex, stepIndex) {
        if ((0, _functionsJs.exists)(intervals[intervalIndex].duration)) return this.nextDurationInterval(intervals, intervalIndex, stepIndex);
        return undefined;
    }
    nextStep(intervals, intervalIndex, stepIndex) {
        if (this.isDurationStep(intervals, intervalIndex, stepIndex)) {
            this.intervalType = "duration";
            return this.nextDurationStep(intervals, intervalIndex, stepIndex);
        }
        return undefined;
    }
    isDurationStep(intervals, intervalIndex, stepIndex) {
        return (0, _functionsJs.exists)(intervals[intervalIndex].steps[stepIndex].duration);
    }
    nextDurationInterval(intervals, intervalIndex, stepIndex) {
        const intervalDuration = this.intervalsToDuration(intervals, intervalIndex);
        const stepDuration = this.intervalsToStepDuration(intervals, intervalIndex, stepIndex);
        this.dispatchInterval(intervalDuration, intervalIndex);
    }
    nextDurationStep(intervals, intervalIndex, stepIndex) {
        const stepDuration = this.intervalsToStepDuration(intervals, intervalIndex, stepIndex);
        this.dispatchStep(stepDuration, stepIndex);
    }
    intervalsToDuration(intervals, intervalIndex) {
        return intervals[intervalIndex].duration;
    }
    intervalsToStepDuration(intervals, intervalIndex, stepIndex) {
        const steps = intervals[intervalIndex].steps;
        return steps[stepIndex].duration;
    }
    dispatchInterval(intervalDuration, intervalIndex) {
        (0, _functionsJs.xf).dispatch("watch:intervalDuration", intervalDuration);
        (0, _functionsJs.xf).dispatch("watch:lapTime", intervalDuration);
        (0, _functionsJs.xf).dispatch("watch:intervalIndex", intervalIndex);
        (0, _functionsJs.xf).dispatch("watch:lap");
    }
    dispatchStep(stepDuration, stepIndex) {
        (0, _functionsJs.xf).dispatch("watch:stepDuration", stepDuration);
        (0, _functionsJs.xf).dispatch("watch:stepTime", stepDuration);
        (0, _functionsJs.xf).dispatch("watch:stepIndex", stepIndex);
        (0, _functionsJs.xf).dispatch("watch:step");
    }
}
// Register DB Events
(0, _functionsJs.xf).reg("watch:lapDuration", (time, db)=>db.intervalDuration = time);
(0, _functionsJs.xf).reg("watch:stepDuration", (time, db)=>db.stepDuration = time);
(0, _functionsJs.xf).reg("watch:lapTime", (time, db)=>db.lapTime = time);
(0, _functionsJs.xf).reg("watch:stepTime", (time, db)=>db.stepTime = time);
(0, _functionsJs.xf).reg("watch:intervalIndex", (index, db)=>db.intervalIndex = index);
(0, _functionsJs.xf).reg("watch:stepIndex", (index, db)=>{
    db.stepIndex = index;
    const intervalIndex = db.intervalIndex;
    const powerTarget = db.workout.intervals[intervalIndex].steps[index].power;
    const slopeTarget = db.workout.intervals[intervalIndex].steps[index].slope;
    const cadenceTarget = db.workout.intervals[intervalIndex].steps[index].cadence;
    const distanceTarget = db.workout.intervals[intervalIndex].steps[index].distance;
    if ((0, _functionsJs.exists)(slopeTarget)) {
        (0, _functionsJs.xf).dispatch("ui:slope-target-set", slopeTarget);
        if (!(0, _functionsJs.equals)(db.mode, (0, _enumsJs.ControlMode).sim)) (0, _functionsJs.xf).dispatch("ui:mode-set", (0, _enumsJs.ControlMode).sim);
    }
    if ((0, _functionsJs.exists)(distanceTarget)) (0, _functionsJs.xf).dispatch("ui:distance-target-set", distanceTarget);
    if ((0, _functionsJs.exists)(cadenceTarget)) (0, _functionsJs.xf).dispatch("ui:cadence-target-set", cadenceTarget);
    else (0, _functionsJs.xf).dispatch("ui:cadence-target-set", 0);
    if ((0, _functionsJs.exists)(powerTarget)) {
        (0, _functionsJs.xf).dispatch("ui:power-target-set", (0, _modelsJs.models).ftp.toAbsolute(powerTarget, db.ftp));
        if (!(0, _functionsJs.exists)(slopeTarget) && !(0, _functionsJs.equals)(db.mode, (0, _enumsJs.ControlMode).erg)) (0, _functionsJs.xf).dispatch("ui:mode-set", (0, _enumsJs.ControlMode).erg);
    } else (0, _functionsJs.xf).dispatch("ui:power-target-set", 0);
});
(0, _functionsJs.xf).reg("workout:started", (x, db)=>db.workoutStatus = "started");
(0, _functionsJs.xf).reg("workout:stopped", (x, db)=>db.workoutStatus = "stopped");
(0, _functionsJs.xf).reg("workout:done", (x, db)=>db.workoutStatus = "done");
(0, _functionsJs.xf).reg("watch:started", (x, db)=>{
    db.watchStatus = "started";
    if (db.lapStartTime === false) db.lapStartTime = Date.now(); // if first lap
});
(0, _functionsJs.xf).reg("watch:paused", (x, db)=>db.watchStatus = "paused");
(0, _functionsJs.xf).reg("watch:stopped", (x, db)=>db.watchStatus = "stopped");
(0, _functionsJs.xf).reg("watch:elapsed", (x, db)=>{
    if ((0, _functionsJs.equals)(db.watchStatus, (0, _enumsJs1.TimerStatus).stopped)) {
        db.elapsed = x;
        return;
    }
    db.elapsed = x;
    const speed = (0, _functionsJs.equals)(db.sources.virtualState, "speed") ? db.speed : db.speedVirtual;
    const record = {
        timestamp: Date.now(),
        power: db.power1s,
        cadence: db.cadence,
        speed: speed,
        heart_rate: db.heartRate,
        distance: db.distance,
        grade: db.slopeTarget,
        altitude: db.altitude,
        position_lat: db.position_lat,
        position_long: db.position_long,
        saturated_hemoglobin_percent: db.smo2,
        total_hemoglobin_conc: db.thb,
        core_temperature: db.coreBodyTemperature,
        skin_temperature: db.skinTemperature,
        device_index: 0
    };
    db.records.push(record);
    db.lap.push(record);
    if ((0, _functionsJs.equals)(db.elapsed % 60, 0)) {
        (0, _modelsJs.models).session.backup(db);
        console.log(`backing up of ${db.records.length} records ...`);
    }
});
(0, _functionsJs.xf).reg("watch:lap", (x, db)=>{
    let timeEnd = Date.now();
    let timeStart = db.lapStartTime;
    let elapsed = (0, _utilsJs.timeDiff)(timeStart, timeEnd);
    if (elapsed > 0) {
        const lap = {
            timestamp: timeEnd,
            start_time: timeStart,
            totalElapsedTime: elapsed,
            avgPower: db.powerLap,
            maxPower: (0, _functionsJs.max)(db.lap, "power"),
            avgCadence: Math.round((0, _functionsJs.avg)(db.lap, "cadence")),
            avgHeartRate: Math.round((0, _functionsJs.avg)(db.lap, "heart_rate")),
            saturated_hemoglobin_percent: (0, _functionsJs.toFixed)((0, _functionsJs.avg)(db.lap, "saturated_hemoglobin_percent"), 2),
            total_hemoglobin_conc: (0, _functionsJs.toFixed)((0, _functionsJs.avg)(db.lap, "total_hemoglobin_conc"), 2),
            core_temperature: (0, _functionsJs.toFixed)((0, _functionsJs.avg)(db.lap, "core_temperature"), 2),
            skin_temperature: (0, _functionsJs.toFixed)((0, _functionsJs.avg)(db.lap, "skin_temperature"), 2)
        };
        db.laps.push(lap);
        db.lap = [];
    }
    db.lapStartTime = timeEnd + 0;
});
(0, _functionsJs.xf).reg("watch:event", (x, db)=>{
    if (!(0, _functionsJs.empty)(db.events) && (0, _functionsJs.equals)((0, _functionsJs.last)(db.events).type, x.type)) return;
    db.events.push(x);
});
const watch = new Watch();
(0, _functionsJs.xf).sub("ui:workoutStart", (e)=>{
    watch.startWorkout();
});
(0, _functionsJs.xf).sub("ui:watchStart", (e)=>{
    watch.start();
});
(0, _functionsJs.xf).sub("workout:restore", (e)=>{
    watch.restoreWorkout();
});
(0, _functionsJs.xf).sub("ui:watchPause", (e)=>{
    watch.pause();
});
(0, _functionsJs.xf).sub("ui:watchResume", (e)=>{
    watch.resume();
});
(0, _functionsJs.xf).sub("ui:watchLap", (e)=>{
    watch.lap();
});
(0, _functionsJs.xf).sub("ui:watchStop", (e)=>{
    const stop = confirm("Confirm Stop?");
    if (stop) watch.stop();
});

},{"./functions.js":"2jd1e","./utils.js":"en4he","./models/models.js":"hfV5L","./ble/enums.js":"jtkZS","./activity/enums.js":"haTY8","f7805a2a09437db6":"fqD29","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqD29":[function(require,module,exports) {
let workerURL = require("65259a84a3b47b29");
let bundleURL = require("c86b274cad6d00bd");
let url = bundleURL.getBundleURL("bLxZJ") + "timer.e20e9592.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"65259a84a3b47b29":"cn2gM","c86b274cad6d00bd":"lgJ39"}],"cn2gM":[function(require,module,exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? "import " + JSON.stringify(workerUrl) + ";" : "importScripts(" + JSON.stringify(workerUrl) + ");";
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: "application/javascript"
        }));
    }
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"e0T3f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "course", ()=>course);
var _functionsJs = require("./functions.js");
var _modelsJs = require("./models/models.js");
var _enumsJs = require("./ble/enums.js");
function Course() {
    const abortController = new AbortController();
    const signal = {
        signal: abortController.signal
    };
    (0, _functionsJs.xf).sub(`db:distance`, onDistance.bind(this), signal);
    (0, _functionsJs.xf).sub("db:workout", onWorkout.bind(this), signal);
    (0, _functionsJs.xf).sub("ui:workoutStart", onWatchStart.bind(this), signal);
    (0, _functionsJs.xf).sub("ui:watchStart", onWatchStart.bind(this), signal);
    (0, _functionsJs.xf).sub("db:courseIndex", onCourseIndex.bind(this), signal);
    let started = false;
    let distance = 0;
    let index = 0;
    let maxIndex = 0;
    let maxPointIndex = 0;
    let courseDistance = 0;
    let r = 0;
    let slope = 0;
    let course;
    let pointIndex = 0;
    let segmentStart = 0;
    let segment = {};
    function isCourse() {
        return (0, _functionsJs.exists)(course?.points);
    }
    function restore() {}
    function onCourseIndex(courseIndex) {
        console.log(`:course :index ${courseIndex}`);
        index = courseIndex;
    }
    function onDistance(value) {
        if (!started) return;
        while(pointIndex % maxPointIndex < course.points.length)if (value % courseDistance > course.points[pointIndex].distance) // console.log(`< ${pointIndex}/${value} : ${pointIndex} ${course.points[pointIndex].distance}`);
        pointIndex += 1;
        else {
            var p0 = course.points[pointIndex - 1]?.distance ?? 0;
            var p1 = course.points[pointIndex].distance;
            var p0d = Math.abs(p0 - value);
            var p1d = Math.abs(p1 - value);
            // console.log(`>= ${pointIndex}/${value} : ${p0} ~${p0d}, ${p1} ~${p1d}`);
            if (p0d < p1d) {
                (0, _functionsJs.xf).dispatch("course:position", {
                    position_lat: course.points[pointIndex - 1].position_lat,
                    position_long: course.points[pointIndex - 1].position_long
                });
                pointIndex = Math.max(pointIndex - 1, 0);
            } else (0, _functionsJs.xf).dispatch("course:position", {
                position_lat: course.points[pointIndex].position_lat,
                position_long: course.points[pointIndex].position_long
            });
            break;
        }
        distance = parseFloat(value) % courseDistance;
        if (distance - segmentStart >= r || segmentStart > distance) {
            const indexNext = (index + 1) % maxIndex;
            (0, _functionsJs.xf).dispatch("course:index", indexNext);
            setSegment(indexNext);
            (0, _functionsJs.xf).dispatch(`ui:slope-target-set`, slope);
        }
    }
    function onWorkout(workout) {
        course = workout;
        if ((0, _functionsJs.exists)(course?.points)) {
            console.log((0, _functionsJs.first)(course.points).y);
            setCourse(course);
            setSegment(index);
            (0, _functionsJs.xf).dispatch("altitude", (0, _functionsJs.first)(course.points).y);
        }
    }
    function onWatchStart() {
        if (isCourse()) start();
    }
    function start() {
        if (distance > 0) return;
        started = true;
        // setWorkout
        setCourse(course);
        setSegment(index);
        // r = indexToR(index);
        // slope = indexToSlope(index);
        (0, _functionsJs.xf).dispatch(`ui:slope-target-set`, slope);
        (0, _functionsJs.xf).dispatch(`ui:mode-set`, (0, _enumsJs.ControlMode).sim);
        console.log(`start a course ...`);
    }
    function setCourse(course) {
        maxIndex = course.pointsSimplified.length - 1;
        maxPointIndex = course.points.length - 1;
        courseDistance = course.meta.distance;
    }
    function setSegment(index) {
        segment = indexToSegment(index);
        r = segment.r;
        slope = segment.slope;
        segmentStart = segment.distance ?? distance;
    }
    function indexToSlope(index) {
        return course.pointsSimplified[index].slope;
    }
    function indexToR(index) {
        return course.pointsSimplified[index].r;
    }
    function indexToSegment(index) {
        return course.pointsSimplified[index];
    }
    Object.freeze({
        start
    });
}
// r = 12;
// slope = -0.4819;
// distance = 7429;
//  0: -1.2,    453, 0,
//  1: -0.4, 	   94, 454,
//  2:  1.2,    104, 548,
//  3:  0.447, 1072, 652,
//  4:  0.133,  299, 1724,
//  5:  0.9,    564, 2023,
//  6:  0.57,  1087, 2587,
//  7:  0.0,    823, 3674,
//  8: -0.7, 	  680, 4497,
//  9: -0.46,	  649, 5177,
// 10: -0.15,   390, 5826,
// 11:  0.0,   1213, 6216,
// 12: -0.4,     83, 7413,
// 13: -3.9,     56, 7512,
// 14: -1.0, 	  220, 7568,
// 15:  0,        0, 7788,
// 1:10, 0.4, 3, ~800
const course = Course();

},{"./functions.js":"2jd1e","./models/models.js":"hfV5L","./ble/enums.js":"jtkZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fsSA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lock", ()=>lock);
var _functionsJs = require("./functions.js");
class WakeLock {
    constructor(args){
        this.lock = undefined;
        this.isLocked = false;
        this.isLocable = false;
        this.isVisible = false;
        this.init();
    }
    init() {
        let self = this;
        self.isLocable = "wakeLock" in navigator;
        self.isVisible = self.checkVisibility();
        self.lockScreen();
        document.addEventListener("visibilitychange", self.onVisibilityChange.bind(self));
        window.addEventListener("beforeunload", (e)=>{
            (0, _functionsJs.xf).dispatch("lock:beforeunload");
        });
    }
    checkVisibility() {
        let isVisible = false;
        let visibilityState = document.visibilityState;
        if (visibilityState === "visible") isVisible = true;
        else isVisible = false;
        return isVisible;
    }
    onVisibilityChange() {
        let self = this;
        if (self.checkVisibility()) self.lockScreen();
    }
    async lockScreen() {
        let self = this;
        if (self.isLocable && self.isVisible) try {
            let lock = await navigator.wakeLock.request("screen");
            self.isLocked = true;
            lock.addEventListener("release", (e)=>{
                self.isLocked = false;
                (0, _functionsJs.xf).dispatch("lock:release");
                console.log(`Wake lock released.`);
            });
        } catch (e) {
            console.warn(`wake-lock: not-supported:`, e);
        }
    }
}
const lock = new WakeLock();

},{"./functions.js":"2jd1e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4OoA":[function(require,module,exports) {
// package.json
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inject", ()=>inject);
var name = "@vercel/analytics";
var version = "0.1.11";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function isDevelopment() {
    try {
        const env = "development";
        return env === "development" || env === "test";
    } catch (e) {
        return false;
    }
}
function getMode(mode = "auto") {
    if (mode === "auto") return isDevelopment() ? "development" : "production";
    return mode;
}
// src/generic.ts
var inject = (props = {
    debug: true
})=>{
    var _a;
    if (!isBrowser()) return;
    const mode = getMode(props.mode);
    initQueue();
    if (props.beforeSend) (_a = window.va) == null || _a.call(window, "beforeSend", props.beforeSend);
    const src = mode === "development" ? "https://cdn.vercel-insights.com/v1/script.debug.js" : "/_vercel/insights/script.js";
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.setAttribute("data-sdkn", name);
    script.setAttribute("data-sdkv", version);
    if (mode === "development" && props.debug === false) script.setAttribute("data-debug", "false");
    document.head.appendChild(script);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLFVu":[function(require,module,exports) {
module.exports = require("b50aa899b6f96893").getBundleURL("bLxZJ") + "sw.js" + "?" + Date.now();

},{"b50aa899b6f96893":"lgJ39"}]},["farZc","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
