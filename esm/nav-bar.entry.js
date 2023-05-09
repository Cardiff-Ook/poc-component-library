import { r as registerInstance, h } from './index-76cd28ee.js';

const navBarCss = ":host{display:block}.inlineOverride{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.jut__NavigationContent__navigationContent li:nth-last-child(3){right:7rem !important}";

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
    this.arrayDataWatcher(this.buttons);
  }
  isActive(val) {
    return (val) ?
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__navItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__activeNavItem' :
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__ApplicationHeader__navItem';
  }
  menuItemClick(e, item) {
    console.log(`Selected link: ${e.currentTarget.href}`);
    if (item.isActive) {
      e.preventDefault();
    }
  }
  render() {
    return (h("nav", { class: "jut__ApplicationHeader__subApplicationHeader" }, h("ul", { class: "jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation", role: "menubar", tabindex: "0" }, this._arrayData.map((item = {}) => h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }, h("a", { "aria-current": "page", class: this.isActive(item.isActive), tabindex: "0", role: "menuitem", onClick: (event) => this.menuItemClick(event, item), href: item.path }, h("div", { class: "jut__NavBarItem__titleWrapper inlineOverride" }, h("span", { class: "jut__NavBarItem__title" }, item.name))))), h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }))));
  }
};
NavBar.style = navBarCss;

export { NavBar as nav_bar };
