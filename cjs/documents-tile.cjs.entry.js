'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const documentsTileCss = ":host{display:block}";

const DocumentsTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this._policyIndex = `policyCovers${this.policyindex}`;
  }
  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;
    if (!!btn[0])
      if (this.collapsed) {
        btn[0].innerHTML = '<span id="selectedSpan"><span>View Documents</span></span>';
        btn[0].classList.remove("SelectButton_selectButton__2EnMv");
        btn[0].classList.remove("jut__Button__materialIcon");
      }
      else {
        btn[0].innerHTML = '<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';
        btn[0].classList.add("SelectButton_selectButton__2EnMv");
        btn[0].classList.add("jut__Button__materialIcon");
      }
  }
  render() {
    return (index.h("div", { id: this._policyIndex, key: this.policydetails.id, class: "MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO" }, index.h("div", null, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9", id: "policyContainer", "data-testid": "policyListComponent" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, index.h("img", { src: this.policydetails.imageSrc, id: "policyTypeIcon", class: "PolicyListComponent_policyIcon__1QzmW" }), index.h("div", { id: "policyInfo", class: "gwAlertContent PolicyListComponent_policyInfo__VwAiN" }, index.h("span", { id: "policyType", class: "PolicyListComponent_policyType__15t3J" }, this.policydetails.policytype, " Insurance"), index.h("div", { class: "jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc", id: "policyNumberContainer" }, index.h("span", { id: "policyNumberLabel", class: "gwEmphasis" }, "Policy Number:"), index.h("span", { id: "policyNumber", class: "PolicyListComponent_policyNumber__2_S94", "data-cs-mask": "" }, this.policydetails.id)))), index.h("div", { id: "policyButtonContainer", class: "PolicyListComponent_policyButtonContainer__1Q9M1" }, index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "viewButton", "data-testid": "viewButton", onClick: this.toggle.bind(this) }, index.h("span", { id: "selectedSpan" }, index.h("span", null, "Selected"), index.h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" })))), index.h("div", { class: "renewalBannerContainer", id: "renewalBannerContainer" })), index.h("policy-term-container", null), index.h("document-details-container", { coverdetails: [this.policydetails] })))));
  }
  get element() { return index.getElement(this); }
};
DocumentsTile.style = documentsTileCss;

exports.documents_tile = DocumentsTile;
