import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './document-details-container2.js';
import { d as defineCustomElement$7 } from './document-details-tile2.js';
import { d as defineCustomElement$6 } from './documents-list2.js';
import { d as defineCustomElement$5 } from './documents-list-item2.js';
import { d as defineCustomElement$4 } from './documents-tile2.js';
import { d as defineCustomElement$3 } from './policy-term-container2.js';
import { d as defineCustomElement$2 } from './sub-section-title2.js';

const documentDetailsCss = ":host{display:block}#policyContainer{grid-template-columns:3fr 2fr}#policyListComponent{grid-template-columns:3fr 2fr}#policyDetails{grid-template-columns:28px auto}#policyType{text-transform:capitalize}#selectedSpan{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}#renewalBannerContainer{grid-column:1 / -1}";

const DocumentDetails$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("div", { id: "policyCoverContainerIterables" }, this._arrayData.map((policy = {}, index) => h("documents-tile", { policydetails: policy, policyindex: index })))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  static get watchers() { return {
    "policies": ["arrayDataWatcher"]
  }; }
  static get style() { return documentDetailsCss; }
}, [0, "document-details", {
    "policies": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["document-details", "document-details-container", "document-details-tile", "documents-list", "documents-list-item", "documents-tile", "policy-term-container", "sub-section-title"];
  components.forEach(tagName => { switch (tagName) {
    case "document-details":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocumentDetails$1);
      }
      break;
    case "document-details-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "document-details-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "documents-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "documents-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "documents-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "policy-term-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "sub-section-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const DocumentDetails = DocumentDetails$1;
const defineCustomElement = defineCustomElement$1;

export { DocumentDetails, defineCustomElement };
