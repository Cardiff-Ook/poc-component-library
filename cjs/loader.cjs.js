'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-06c204c1.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["policy-details.cjs",[[0,"policy-details",{"policies":[1]}]]],["document-details.cjs",[[0,"document-details",{"policies":[1]}]]],["account-settings.cjs",[[0,"account-settings",{"user":[1]}]]],["login-form.cjs",[[0,"login-form",{"forgotPasswordUrl":[1,"forgot-password-url"],"_errorMessage":[32],"showError":[32]},[[0,"loginError","displayError"],[0,"keydown.enter","handleEnter"]]]]],["multi-car-banner.cjs",[[4,"multi-car-banner"]]],["content-container.cjs",[[4,"content-container"]]],["header-text.cjs",[[1,"header-text"]]],["login-footer.cjs",[[1,"login-footer"]]],["login-header.cjs",[[0,"login-header",{"brand":[1]}]]],["login-title-wrapper.cjs",[[4,"login-title-wrapper"]]],["main-header.cjs",[[4,"main-header",{"brand":[1]}]]],["multi-banner-bullet-points.cjs",[[0,"multi-banner-bullet-points",{"bulletPoints":[1,"bullet-points"]}]]],["multi-banner-header.cjs",[[4,"multi-banner-header"]]],["multi-banner-title.cjs",[[4,"multi-banner-title"]]],["nav-bar.cjs",[[0,"nav-bar",{"buttons":[1]}]]],["new-nav-bar-img.cjs",[[0,"new-nav-bar-img",{"src":[1],"alt":[1]}]]],["new-nav-bar-logo.cjs",[[4,"new-nav-bar-logo"]]],["page-header-bar.cjs",[[4,"page-header-bar",{"name":[1]}]]],["page-logo.cjs",[[0,"page-logo",{"brand":[1]}]]],["product-tile.cjs",[[0,"product-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"]}]]],["text-title-bar.cjs",[[4,"text-title-bar"]]],["details-container.cjs",[[0,"details-container",{"detailstype":[1],"coverdetails":[1]}]]],["policy-term-container.cjs",[[0,"policy-term-container"]]],["sub-section-title.cjs",[[0,"sub-section-title",{"pagetitle":[1]}]]],["policy-tile.cjs",[[0,"policy-tile",{"policydetails":[16],"policyindex":[2]}]]],["documents-tile.cjs",[[0,"documents-tile",{"policydetails":[16],"policyindex":[2],"collapsed":[32]}]]],["error-message.cjs",[[0,"error-message",{"errorMessage":[1,"error-message"]}]]],["quote-button.cjs",[[4,"quote-button"]]],["account-details_3.cjs",[[0,"account-details",{"user":[1]}],[4,"main-page-contents"],[4,"policies-container"]]],["documents-list_2.cjs",[[0,"documents-list",{"coverdetails":[1]}],[0,"documents-list-item",{"document":[1],"documentIndex":[2,"document-index"],"collapsed":[32]}]]],["document-details-container_2.cjs",[[0,"document-details-container",{"coverdetails":[1],"collapsed":[32]}],[0,"document-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]],["cover-details-container_5.cjs",[[0,"cover-details-container",{"coverdetails":[1],"collapsed":[32]}],[4,"policy-management-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"],"titleText":[1,"title-text"]}],[4,"policy-subsection-header"],[4,"tile-container",{"type":[1]}],[0,"cover-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
