import { r as registerInstance, h, e as Host } from './index-e3478a0e.js';

const accountDetailsCss = ":host{display:block}";

const AccountDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
AccountDetails.style = accountDetailsCss;

export { AccountDetails as account_details };
