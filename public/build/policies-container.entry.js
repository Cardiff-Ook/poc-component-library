import { r as registerInstance, h } from './index-0240b1cc.js';

const policiesContainerCss = ":host{display:block}";

const PoliciesContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "policyContainer" }, h("div", { id: "myAccountContainer", class: "MyPoliciesPage_myAccountContainer__1sTDe" }), h("div", null), h("slot", { name: "page-title" }), h("slot", { name: "policy-details" })));
  }
};
PoliciesContainer.style = policiesContainerCss;

export { PoliciesContainer as policies_container };
