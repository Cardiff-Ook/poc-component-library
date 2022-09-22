import { r as registerInstance, h } from './index-99449dbf.js';

const mainPageContentsCss = ":host{display:block}";

const MainPageContents = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("main", { class: "jut__Main__main admMain" }, h("div", { class: "jut__Container__container jut__Main__container" }, h("div", { id: "pageContainer", class: "page MyPoliciesPage_claimHomePage__3e-L3" }, h("div", { id: "policyContainer" }, h("div", { id: "myAccountContainer", class: "MyPoliciesPage_myAccountContainer__1sTDe" }), h("div", null), h("slot", { name: "page-title" }))))));
  }
};
MainPageContents.style = mainPageContentsCss;

export { MainPageContents as main_page_contents };
