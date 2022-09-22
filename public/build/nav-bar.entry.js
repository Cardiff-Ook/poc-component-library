import { r as registerInstance, h } from './index-ca799859.js';

const navBarCss = ":host{display:block}.inlineOverride{display:inline-flex;align-items:center;justify-content:center}";

const NavBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    console.log(this.buttons);
    this.arrayDataWatcher(this.buttons);
  }
  isActive(val) {
    return (val) ?
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__navItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__activeNavItem' :
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__ApplicationHeader__navItem';
  }
  render() {
    return (h("nav", { class: "jut__ApplicationHeader__subApplicationHeader" }, h("ul", { class: "jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation", role: "menubar", tabindex: "0" }, this._arrayData.map((item = {}) => h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }, h("a", { "aria-current": "page", class: this.isActive(item.isActive), tabindex: "0", role: "menuitem", href: item.link }, h("div", { class: "jut__NavBarItem__titleWrapper inlineOverride" }, h("span", { class: "jut__NavBarItem__title" }, item.name))))), h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }))));
  }
};
NavBar.style = navBarCss;

export { NavBar as nav_bar };
