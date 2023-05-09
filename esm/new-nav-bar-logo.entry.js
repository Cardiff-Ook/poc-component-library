import { r as registerInstance, h, H as Host } from './index-76cd28ee.js';

const newNavBarLogoCss = "new-nav-bar-logo{-ms-flex:1 1 auto;flex:1 1 auto}";

const NewNavBarLogo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ng-content", null, h("slot", null))));
  }
};
NewNavBarLogo.style = newNavBarLogoCss;

export { NewNavBarLogo as new_nav_bar_logo };
