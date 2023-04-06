import { r as registerInstance, h, e as Host } from './index-cd495fd3.js';

const newNavBarLogoCss = "new-nav-bar-logo{flex:1 1 auto}";

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
