import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$a } from './cover-details-container2.js';
import { d as defineCustomElement$9 } from './cover-details-tile2.js';
import { d as defineCustomElement$8 } from './details-container2.js';
import { d as defineCustomElement$7 } from './policy-management-tile2.js';
import { d as defineCustomElement$6 } from './policy-subsection-header2.js';
import { d as defineCustomElement$5 } from './policy-term-container2.js';
import { d as defineCustomElement$4 } from './policy-tile2.js';
import { d as defineCustomElement$3 } from './sub-section-title2.js';
import { d as defineCustomElement$2 } from './tile-container2.js';

const policyDetailsCss = ":host{display:block}#policyContainer{grid-template-columns:3fr 2fr}#policyListComponent{grid-template-columns:3fr 2fr}#policyDetails{grid-template-columns:28px auto}#policyType{text-transform:capitalize}#selectedSpan{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}#renewalBannerContainer{grid-column:1 / -1}";

const PolicyDetails$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      this._arrayData.forEach(obj => (obj.imageSrc = `/assets/claim-cover-${obj.policytype}.svg`));
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.policies);
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("div", { id: "policyCoverContainerIterables" }, this._arrayData.map((policy = {}, index) => h("policy-tile", { policydetails: policy, policyindex: index })))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  static get watchers() { return {
    "policies": ["arrayDataWatcher"]
  }; }
  static get style() { return policyDetailsCss; }
}, [0, "policy-details", {
    "policies": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["policy-details", "cover-details-container", "cover-details-tile", "details-container", "policy-management-tile", "policy-subsection-header", "policy-term-container", "policy-tile", "sub-section-title", "tile-container"];
  components.forEach(tagName => { switch (tagName) {
    case "policy-details":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PolicyDetails$1);
      }
      break;
    case "cover-details-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "cover-details-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "details-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "policy-management-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "policy-subsection-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "policy-term-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "policy-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "sub-section-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "tile-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const PolicyDetails = PolicyDetails$1;
const defineCustomElement = defineCustomElement$1;

export { PolicyDetails, defineCustomElement };
