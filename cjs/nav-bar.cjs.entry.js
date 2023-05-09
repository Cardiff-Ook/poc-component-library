'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const navBarCss = ":host{display:block}.inlineOverride{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.jut__NavigationContent__navigationContent li:nth-last-child(3){right:7rem !important}";

const NavBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("nav", { class: "jut__ApplicationHeader__subApplicationHeader" }, index.h("ul", { class: "jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation", role: "menubar", tabindex: "0" }, this._arrayData.map((item = {}) => index.h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }, index.h("a", { "aria-current": "page", class: this.isActive(item.isActive), tabindex: "0", role: "menuitem", onClick: (event) => this.menuItemClick(event, item), href: item.path }, index.h("div", { class: "jut__NavBarItem__titleWrapper inlineOverride" }, index.h("span", { class: "jut__NavBarItem__title" }, item.name))))), index.h("li", { class: "jut__NavigationContent__topNavigationItem", role: "none" }))));
  }
};
NavBar.style = navBarCss;

exports.nav_bar = NavBar;
