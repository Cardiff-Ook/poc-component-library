import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './cover-details-container2.js';
import { d as defineCustomElement$7 } from './cover-details-tile2.js';
import { d as defineCustomElement$6 } from './details-container2.js';
import { d as defineCustomElement$5 } from './policy-management-tile2.js';
import { d as defineCustomElement$4 } from './policy-subsection-header2.js';
import { d as defineCustomElement$3 } from './policy-term-container2.js';
import { d as defineCustomElement$2 } from './sub-section-title2.js';
import { d as defineCustomElement$1 } from './tile-container2.js';

const policyTileCss = ":host{display:block}";

const PolicyTile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentWillLoad() {
    this._policyIndex = `policyCovers${this.policyindex}`;
  }
  render() {
    return (h("div", { id: this._policyIndex, key: this.policydetails.id, class: "MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO" }, h("div", null, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9", id: "policyContainer", "data-testid": "policyListComponent" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, h("img", { src: this.policydetails.imageSrc, id: "policyTypeIcon", class: "PolicyListComponent_policyIcon__1QzmW" }), h("div", { id: "policyInfo", class: "gwAlertContent PolicyListComponent_policyInfo__VwAiN" }, h("span", { id: "policyType", class: "PolicyListComponent_policyType__15t3J" }, this.policydetails.policytype, " Insurance"), h("div", { class: "jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc", id: "policyNumberContainer" }, h("span", { id: "policyNumberLabel", class: "gwEmphasis" }, "Policy Number:"), h("span", { id: "policyNumber", class: "PolicyListComponent_policyNumber__2_S94", "data-cs-mask": "" }, this.policydetails.id)))), h("div", { id: "policyButtonContainer", class: "PolicyListComponent_policyButtonContainer__1Q9M1" }, this.policydetails.selected ?
      h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary jut__Button__materialIcon SelectButton_selectButton__2EnMv", id: "selectButton", "data-testid": "selectButton" }, h("span", { id: "selectedSpan" }, h("span", null, "Selected"), h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" }))) :
      h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "selectButton", "data-testid": "selectButton" }, h("span", { id: "selectedSpan" }, h("span", null, "Select"), h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" })))), h("div", { class: "renewalBannerContainer", id: "renewalBannerContainer" })), h("policy-subsection-header", null, "Manage and View Your Policy"), h("tile-container", { type: "options" }, h("policy-management-tile", { "product-image": "file-invoice", "link-text": "#", "title-text": "Policy Summary" }, "See your cover details, Renewal Data etc."), h("policy-management-tile", { "product-image": "file", "link-text": "#", "title-text": "Documents" }, "View or Download your documents"), h("policy-management-tile", { "product-image": "edit", "link-text": "#", "title-text": "Make A Change" }, "To drivers, addresses, vehicles"), h("policy-management-tile", { "product-image": "plus", "link-text": "#", "title-text": "Add to Policy" }, "Add a Car, Home or Van to your policy"), h("policy-management-tile", { "product-image": "credit-card", "link-text": "#", "title-text": "Payments" }, "View or edit payment details"), h("policy-management-tile", { "product-image": "money-check", "link-text": "#", "title-text": "Claims" }, "Make a claim or see existing claims")), h("policy-term-container", null), h("cover-details-container", { coverdetails: [this.policydetails] })))));
  }
  static get style() { return policyTileCss; }
}, [0, "policy-tile", {
    "policydetails": [16],
    "policyindex": [2]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["policy-tile", "cover-details-container", "cover-details-tile", "details-container", "policy-management-tile", "policy-subsection-header", "policy-term-container", "sub-section-title", "tile-container"];
  components.forEach(tagName => { switch (tagName) {
    case "policy-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PolicyTile);
      }
      break;
    case "cover-details-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "cover-details-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "details-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "policy-management-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "policy-subsection-header":
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
    case "tile-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { PolicyTile as P, defineCustomElement as d };
