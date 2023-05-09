import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-76cd28ee.js';

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-bfa379cd.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["policy-details",[[0,"policy-details",{"policies":[1]}]]],["document-details",[[0,"document-details",{"policies":[1]}]]],["account-settings",[[0,"account-settings",{"user":[1]}]]],["login-form",[[0,"login-form",{"forgotPasswordUrl":[1,"forgot-password-url"],"_errorMessage":[32],"showError":[32]},[[0,"loginError","displayError"],[0,"keydown.enter","handleEnter"]]]]],["multi-car-banner",[[4,"multi-car-banner"]]],["content-container",[[4,"content-container"]]],["header-text",[[1,"header-text"]]],["login-footer",[[1,"login-footer"]]],["login-header",[[0,"login-header",{"brand":[1]}]]],["login-title-wrapper",[[4,"login-title-wrapper"]]],["main-header",[[4,"main-header",{"brand":[1]}]]],["multi-banner-bullet-points",[[0,"multi-banner-bullet-points",{"bulletPoints":[1,"bullet-points"]}]]],["multi-banner-header",[[4,"multi-banner-header"]]],["multi-banner-title",[[4,"multi-banner-title"]]],["nav-bar",[[0,"nav-bar",{"buttons":[1]}]]],["new-nav-bar-img",[[0,"new-nav-bar-img",{"src":[1],"alt":[1]}]]],["new-nav-bar-logo",[[4,"new-nav-bar-logo"]]],["page-header-bar",[[4,"page-header-bar",{"name":[1]}]]],["page-logo",[[0,"page-logo",{"brand":[1]}]]],["product-tile",[[0,"product-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"]}]]],["text-title-bar",[[4,"text-title-bar"]]],["details-container",[[0,"details-container",{"detailstype":[1],"coverdetails":[1]}]]],["policy-term-container",[[0,"policy-term-container"]]],["sub-section-title",[[0,"sub-section-title",{"pagetitle":[1]}]]],["policy-tile",[[0,"policy-tile",{"policydetails":[16],"policyindex":[2]}]]],["documents-tile",[[0,"documents-tile",{"policydetails":[16],"policyindex":[2],"collapsed":[32]}]]],["error-message",[[0,"error-message",{"errorMessage":[1,"error-message"]}]]],["quote-button",[[4,"quote-button"]]],["account-details_3",[[0,"account-details",{"user":[1]}],[4,"main-page-contents"],[4,"policies-container"]]],["documents-list_2",[[0,"documents-list",{"coverdetails":[1]}],[0,"documents-list-item",{"document":[1],"documentIndex":[2,"document-index"],"collapsed":[32]}]]],["document-details-container_2",[[0,"document-details-container",{"coverdetails":[1],"collapsed":[32]}],[0,"document-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]],["cover-details-container_5",[[0,"cover-details-container",{"coverdetails":[1],"collapsed":[32]}],[4,"policy-management-tile",{"linkText":[1,"link-text"],"productImage":[1,"product-image"],"titleText":[1,"title-text"]}],[4,"policy-subsection-header"],[4,"tile-container",{"type":[1]}],[0,"cover-details-tile",{"coverdetails":[1],"coverindex":[2],"collapsed":[32]}]]]], options);
  });
};

export { defineCustomElements };
