import { h } from '@stencil/core';
export class PolicyTile {
  componentWillLoad() {
    this._policyIndex = `policyCovers${this.policyindex}`;
  }
  render() {
    return (h("div", { id: this._policyIndex, key: this.policydetails.id, class: "MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO" }, h("div", null, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9", id: "policyContainer", "data-testid": "policyListComponent" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, h("img", { src: this.policydetails.imageSrc, id: "policyTypeIcon", class: "PolicyListComponent_policyIcon__1QzmW" }), h("div", { id: "policyInfo", class: "gwAlertContent PolicyListComponent_policyInfo__VwAiN" }, h("span", { id: "policyType", class: "PolicyListComponent_policyType__15t3J" }, this.policydetails.policytype, " Insurance"), h("div", { class: "jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc", id: "policyNumberContainer" }, h("span", { id: "policyNumberLabel", class: "gwEmphasis" }, "Policy Number:"), h("span", { id: "policyNumber", class: "PolicyListComponent_policyNumber__2_S94", "data-cs-mask": "" }, this.policydetails.id)))), h("div", { id: "policyButtonContainer", class: "PolicyListComponent_policyButtonContainer__1Q9M1" }, this.policydetails.selected ?
      h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary jut__Button__materialIcon SelectButton_selectButton__2EnMv", id: "selectButton", "data-testid": "selectButton" }, h("span", { id: "selectedSpan" }, h("span", null, "Selected"), h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" }))) :
      h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "selectButton", "data-testid": "selectButton" }, h("span", { id: "selectedSpan" }, h("span", null, "Select"), h("i", { class: "mir mi-done jut__Button__icon jut__Button__rightIcon" })))), h("div", { class: "renewalBannerContainer", id: "renewalBannerContainer" })), h("policy-subsection-header", null, "Manage and View Your Policy"), h("tile-container", { type: "options" }, h("policy-management-tile", { "product-image": "file-invoice", "link-text": "#", "title-text": "Policy Summary" }, "See your cover details, Renewal Data etc."), h("policy-management-tile", { "product-image": "file", "link-text": "#", "title-text": "Documents" }, "View or Download your documents"), h("policy-management-tile", { "product-image": "edit", "link-text": "#", "title-text": "Make A Change" }, "To drivers, addresses, vehicles"), h("policy-management-tile", { "product-image": "plus", "link-text": "#", "title-text": "Add to Policy" }, "Add a Car, Home or Van to your policy"), h("policy-management-tile", { "product-image": "credit-card", "link-text": "#", "title-text": "Payments" }, "View or edit payment details"), h("policy-management-tile", { "product-image": "money-check", "link-text": "#", "title-text": "Claims" }, "Make a claim or see existing claims")), h("policy-term-container", null), h("cover-details-container", { coverdetails: [this.policydetails] })))));
  }
  static get is() { return "policy-tile"; }
  static get originalStyleUrls() {
    return {
      "$": ["policy-tile.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["policy-tile.css"]
    };
  }
  static get properties() {
    return {
      "policydetails": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "PolicyDataInterface",
          "resolved": "PolicyDataInterface",
          "references": {
            "PolicyDataInterface": {
              "location": "import",
              "path": "../../../interfaces/policyDataInterface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: policydetails: PolicyDataInterface\nPolicy Data"
        }
      },
      "policyindex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: policyindex: number\nIndex number of the policy in the list"
        },
        "attribute": "policyindex",
        "reflect": false
      }
    };
  }
}
