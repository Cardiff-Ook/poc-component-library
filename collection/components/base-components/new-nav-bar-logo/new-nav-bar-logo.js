import { Host, h } from '@stencil/core';
export class NewNavBarLogo {
  render() {
    return (h(Host, null, h("ng-content", null, h("slot", null))));
  }
  static get is() { return "new-nav-bar-logo"; }
  static get originalStyleUrls() {
    return {
      "$": ["new-nav-bar-logo.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["new-nav-bar-logo.css"]
    };
  }
}
