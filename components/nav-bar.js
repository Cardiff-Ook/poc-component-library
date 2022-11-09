import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const navBarCss = ":host{display:block}.inlineOverride{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}";

const NavBar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }
  isActive(val) {
    return (val) ?
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__navItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__activeNavItem' :
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__ApplicationHeader__navItem';
  }
  menuToggle(e) {
    console.log(e);
  }
  render() {
    return (h("nav", { class: "jut__ApplicationHeader__subApplicationHeader" }, h("ul", { class: "jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation", role: "menubar", tabindex: "0" }, this._arrayData.map((item = {}) => h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }, h("a", { "aria-current": "page", class: this.isActive(item.isActive), tabindex: "0", role: "menuitem", onClick: (e) => this.menuToggle(e) }, h("div", { class: "jut__NavBarItem__titleWrapper inlineOverride" }, h("span", { class: "jut__NavBarItem__title" }, item.name))))), h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }))));
  }
  static get style() { return navBarCss; }
}, [0, "nav-bar", {
    "buttons": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["nav-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "nav-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavBar$1);
      }
      break;
  } });
}

const NavBar = NavBar$1;
const defineCustomElement = defineCustomElement$1;

export { NavBar, defineCustomElement };
