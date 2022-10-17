import { r as registerInstance, h } from './index-e3478a0e.js';

const policiesContainerCss = ":host{display:block}";

const PoliciesContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "policyContainer" }, h("div", null), h("slot", { name: "page-title" }), h("slot", { name: "policy-details" })));
  }
};
PoliciesContainer.style = policiesContainerCss;

export { PoliciesContainer as policies_container };
