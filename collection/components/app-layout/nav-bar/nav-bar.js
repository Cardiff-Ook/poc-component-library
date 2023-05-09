import { h } from '@stencil/core';
export class NavBar {
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
  static get is() { return "nav-bar"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav-bar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav-bar.css"]
    };
  }
  static get properties() {
    return {
      "buttons": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Array<ButtonInterface> | string",
          "resolved": "ButtonInterface[] | string",
          "references": {
            "Array": {
              "location": "global"
            },
            "ButtonInterface": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: buttons: Array<ButtonInterface>\nArray containing all the buttons to display"
        },
        "attribute": "buttons",
        "reflect": false
      }
    };
  }
}
