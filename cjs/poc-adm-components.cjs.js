'use strict';

const index = require('./index-5ebe992a.js');

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    {
        // shim css vars
        index.plt.$cssShim$ = index.win.__cssshim;
    }
    // @ts-ignore
    const scriptElm = Array.from(index.doc.querySelectorAll('script')).find((s) => new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === index.NAMESPACE)
        ;
    const opts = scriptElm['data-opts'] || {} ;
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
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
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, index.win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!index.win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-dom" */ './dom-874a1e39.js'); }).then(() => opts);
        }
    }
    return index.promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(index.NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        index.win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        index.win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = index.doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(index.win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                index.doc.head.appendChild(script);
            }
            return mod;
        };
    }
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["policy-details.cjs",[[0,"policy-details",{"policies":[1]}]]],["document-details.cjs",[[0,"document-details",{"policies":[1]}]]],["account-settings.cjs",[[0,"account-settings",{"user":[1]}]]],["login-form.cjs",[[0,"login-form",{"forgotPasswordUrl":[1,"forgot-password-url"],"_errorMessage":[32],"showError":[32]},[[0,"loginError","displayError"],[0,"keydown.enter","handleEnter"]]]]],["multi-car-banner.cjs",[[4,"multi-car-banner"]]],["content-container.cjs",[[4,"content-container"]]],["header-text.cjs",[[1,"header-text"]]],["login-footer.cjs",[[1,"login-footer"]]],["login-header.cjs",[[0,"login-header",{"brand":[1]}]]],["login-title-wrapper.cjs",[[4,"login-title-wrapper"]]],["main-header.cjs",[[4,"main-header",{"brand":[1]}]]],["multi-banner-bullet-points.cjs",[[0,"multi-banner-bullet-points",{"bulletPoints":[1,"bullet-points"]}]]],["multi-banner-header.cjs",[[4,"multi-banner-header"]]],["multi-banner-title.cjs",[[4,"multi-banner-title"]]],["nav-bar.cjs",[[0,"nav-bar",{"buttons":[1]}]]],["new-nav-bar-img.cjs",[[0,"new-nav-bar-img",{"src":[1],"alt":[1]}]]],["new-nav-bar-logo.cjs",[[4,"new-nav-bar-logo"]]],["page-header-bar.cjs",[[4,"page-header-bar",{"name":[1]}]]],["page-logo.cjs",[[0,"page-logo",{"brand":[1]}]]],["product-tile.cjs",[[0,"product-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"]}]]],["text-title-bar.cjs",[[4,"text-title-bar"]]],["details-container.cjs",[[0,"details-container",{"detailstype":[1],"coverdetails":[1]}]]],["policy-term-container.cjs",[[0,"policy-term-container"]]],["sub-section-title.cjs",[[0,"sub-section-title",{"pagetitle":[1]}]]],["policy-tile.cjs",[[0,"policy-tile",{"policydetails":[16],"policyindex":[2]}]]],["documents-tile.cjs",[[0,"documents-tile",{"policydetails":[16],"policyindex":[2],"collapsed":[32]}]]],["error-message.cjs",[[0,"error-message",{"errorMessage":[1,"error-message"]}]]],["quote-button.cjs",[[4,"quote-button"]]],["account-details_3.cjs",[[0,"account-details",{"user":[1]}],[4,"main-page-contents"],[4,"policies-container"]]],["documents-list_2.cjs",[[0,"documents-list",{"coverdetails":[1]}],[0,"documents-list-item",{"document":[1],"documentIndex":[2,"document-index"],"collapsed":[32]}]]],["document-details-container_2.cjs",[[0,"document-details-container",{"coverdetails":[1],"collapsed":[32]}],[0,"document-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]],["cover-details-container_5.cjs",[[0,"cover-details-container",{"coverdetails":[1],"collapsed":[32]}],[4,"policy-management-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"],"titleText":[1,"title-text"]}],[4,"policy-subsection-header"],[4,"tile-container",{"type":[1]}],[0,"cover-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]]], options);
});
