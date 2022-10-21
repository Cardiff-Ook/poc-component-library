import { r as registerInstance, h, e as Host } from './index-e3478a0e.js';

const documentDetailsContainerCss = ":host{display:block}";

const DocumentDetailsContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
DocumentDetailsContainer.style = documentDetailsContainerCss;

export { DocumentDetailsContainer as document_details_container };
