import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-cd495fd3.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = "";
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __sc_import_poc_adm_components(/* webpackChunkName: "polyfills-dom" */ './dom-104fb833.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["policy-details",[[0,"policy-details",{"policies":[1]}]]],["document-details",[[0,"document-details",{"policies":[1]}]]],["account-settings",[[0,"account-settings",{"user":[1]}]]],["login-form",[[0,"login-form",{"forgotPasswordUrl":[1,"forgot-password-url"],"_errorMessage":[32],"showError":[32]},[[0,"loginError","displayError"],[0,"keydown.enter","handleEnter"]]]]],["multi-car-banner",[[4,"multi-car-banner"]]],["content-container",[[4,"content-container"]]],["header-text",[[1,"header-text"]]],["login-footer",[[1,"login-footer"]]],["login-header",[[0,"login-header",{"brand":[1]}]]],["login-title-wrapper",[[4,"login-title-wrapper"]]],["main-header",[[4,"main-header",{"brand":[1]}]]],["multi-banner-bullet-points",[[0,"multi-banner-bullet-points",{"bulletPoints":[1,"bullet-points"]}]]],["multi-banner-header",[[4,"multi-banner-header"]]],["multi-banner-title",[[4,"multi-banner-title"]]],["nav-bar",[[0,"nav-bar",{"buttons":[1]}]]],["new-nav-bar-img",[[0,"new-nav-bar-img",{"src":[1],"alt":[1]}]]],["new-nav-bar-logo",[[4,"new-nav-bar-logo"]]],["page-header-bar",[[4,"page-header-bar",{"name":[1]}]]],["page-logo",[[0,"page-logo",{"brand":[1]}]]],["product-tile",[[0,"product-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"]}]]],["text-title-bar",[[4,"text-title-bar"]]],["cover-details-container",[[0,"cover-details-container",{"coverdetails":[1],"collapsed":[32]}]]],["policy-tile",[[0,"policy-tile",{"policydetails":[16],"policyindex":[2]}]]],["documents-tile",[[0,"documents-tile",{"policydetails":[16],"policyindex":[2],"collapsed":[32]}]]],["account-details",[[0,"account-details",{"user":[1]}]]],["error-message",[[0,"error-message",{"errorMessage":[1,"error-message"]}]]],["main-page-contents",[[4,"main-page-contents"]]],["policies-container",[[4,"policies-container"]]],["quote-button",[[4,"quote-button"]]],["documents-list-item",[[0,"documents-list-item",{"document":[1],"documentIndex":[2,"document-index"],"collapsed":[32]}]]],["document-details-container",[[0,"document-details-container",{"coverdetails":[1],"collapsed":[32]}]]],["policy-management-tile",[[4,"policy-management-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"],"titleText":[1,"title-text"]}]]],["policy-subsection-header",[[4,"policy-subsection-header"]]],["tile-container",[[4,"tile-container",{"type":[1]}]]],["documents-list",[[0,"documents-list",{"coverdetails":[1]}]]],["document-details-tile",[[0,"document-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]],["details-container",[[0,"details-container",{"detailstype":[1],"coverdetails":[1]}]]],["cover-details-tile",[[0,"cover-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]],["policy-term-container",[[0,"policy-term-container"]]],["sub-section-title",[[0,"sub-section-title",{"pagetitle":[1]}]]]], options);
});
