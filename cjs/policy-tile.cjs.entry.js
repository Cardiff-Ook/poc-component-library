'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const policyTileCss = ":host{display:block}";

const PolicyTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this._policyIndex = `policyCovers${this.policyindex}`;
  }
  render() {
    return (index.h("div", { id: this._policyIndex, key: this.policydetails.id, class: "MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO" }, index.h("div", null, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9", id: "policyContainer", "data-testid": "policyListComponent" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, index.h("img", { src: this.policydetails.imageSrc, id: "policyTypeIcon", class: "PolicyListComponent_policyIcon__1QzmW" }), index.h("div", { id: "policyInfo", class: "gwAlertContent PolicyListComponent_policyInfo__VwAiN" }, index.h("span", { id: "policyType", class: "PolicyListComponent_policyType__15t3J" }, this.policydetails.policytype, " Insurance"), index.h("div", { class: "jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc", id: "policyNumberContainer" }, index.h("span", { id: "policyNumberLabel", class: "gwEmphasis" }, "Policy Number:"), index.h("span", { id: "policyNumber", class: "PolicyListComponent_policyNumber__2_S94", "data-cs-mask": "" }, this.policydetails.id)))), index.h("div", { id: "policyButtonContainer", class: "PolicyListComponent_policyButtonContainer__1Q9M1" }, this.policydetails.selected ?
      index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary jut__Button__materialIcon SelectButton_selectButton__2EnMv", id: "selectButton", "data-testid": "selectButton" }, index.h("span", { id: "selectedSpan" }, index.h("span", null, "Selected"), index.h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" }))) :
      index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "selectButton", "data-testid": "selectButton" }, index.h("span", { id: "selectedSpan" }, index.h("span", null, "Select"), index.h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" })))), index.h("div", { class: "renewalBannerContainer", id: "renewalBannerContainer" })), index.h("policy-subsection-header", null, "Manage and View Your Policy"), index.h("tile-container", { type: "options" }, index.h("policy-management-tile", { "product-image": "file-invoice", "link-text": "#", "title-text": "Policy Summary" }, "See your cover details, Renewal Data etc."), index.h("policy-management-tile", { "product-image": "file", "link-text": "#", "title-text": "Documents" }, "View or Download your documents"), index.h("policy-management-tile", { "product-image": "edit", "link-text": "#", "title-text": "Make A Change" }, "To drivers, addresses, vehicles"), index.h("policy-management-tile", { "product-image": "plus", "link-text": "#", "title-text": "Add to Policy" }, "Add a Car, Home or Van to your policy"), index.h("policy-management-tile", { "product-image": "credit-card", "link-text": "#", "title-text": "Payments" }, "View or edit payment details"), index.h("policy-management-tile", { "product-image": "money-check", "link-text": "#", "title-text": "Claims" }, "Make a claim or see existing claims")), index.h("policy-term-container", null), index.h("cover-details-container", { coverdetails: [this.policydetails] })))));
  }
};
PolicyTile.style = policyTileCss;

exports.policy_tile = PolicyTile;
