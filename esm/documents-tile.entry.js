import { r as registerInstance, h, g as getElement } from './index-76cd28ee.js';

const documentsTileCss = ":host{display:block}";

const DocumentsTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { id: this._policyIndex, key: this.policydetails.id, class: "MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO" }, h("div", null, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9", id: "policyContainer", "data-testid": "policyListComponent" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, h("img", { src: this.policydetails.imageSrc, id: "policyTypeIcon", class: "PolicyListComponent_policyIcon__1QzmW" }), h("div", { id: "policyInfo", class: "gwAlertContent PolicyListComponent_policyInfo__VwAiN" }, h("span", { id: "policyType", class: "PolicyListComponent_policyType__15t3J" }, this.policydetails.policytype, " Insurance"), h("div", { class: "jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc", id: "policyNumberContainer" }, h("span", { id: "policyNumberLabel", class: "gwEmphasis" }, "Policy Number:"), h("span", { id: "policyNumber", class: "PolicyListComponent_policyNumber__2_S94", "data-cs-mask": "" }, this.policydetails.id)))), h("div", { id: "policyButtonContainer", class: "PolicyListComponent_policyButtonContainer__1Q9M1" }, h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "viewButton", "data-testid": "viewButton", onClick: this.toggle.bind(this) }, h("span", { id: "selectedSpan" }, h("span", null, "Selected"), h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" })))), h("div", { class: "renewalBannerContainer", id: "renewalBannerContainer" })), h("policy-term-container", null), h("document-details-container", { coverdetails: [this.policydetails] })))));
  }
  get element() { return getElement(this); }
};
DocumentsTile.style = documentsTileCss;

export { DocumentsTile as documents_tile };
