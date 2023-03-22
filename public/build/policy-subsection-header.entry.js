import { r as registerInstance, h } from './index-cd495fd3.js';

const policySubsectionHeaderCss = ":host{display:block}.nobg{background-color:var(--gw-grey-light-63-color) !important}h1{width:512px}.subsectionText{margin-top:0;text-align:left;margin-bottom:24px;color:#4A4643!important;font-size:20px;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:800;line-height:24px;word-wrap:break-word}";

const PolicySubsectionHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9 nobg", id: "policyContainer", "data-testid": "policyListComponent" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, h("h1", { class: "subsection", title: "" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "subsectionText" }, h("slot", null))))))));
  }
};
PolicySubsectionHeader.style = policySubsectionHeaderCss;

export { PolicySubsectionHeader as policy_subsection_header };
