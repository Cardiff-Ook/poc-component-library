import { h } from '@stencil/core';
export class PolicySubsectionHeader {
  render() {
    return (h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9 nobg", id: "policyContainer", "data-testid": "policyListComponent" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, h("h1", { class: "subsection", title: "" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "subsectionText" }, h("slot", null))))))));
  }
  static get is() { return "policy-subsection-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["policy-subsection-header.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["policy-subsection-header.css"]
    };
  }
}
