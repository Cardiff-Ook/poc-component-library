import { h } from '@stencil/core';
export class MultiBannerHeader {
  render() {
    return (h("div", null, h("span", { class: "MultiBannerCarComponent_caveat__3TayJ", id: "multiBannerCarRightHeader" }, h("slot", null))));
  }
  static get is() { return "multi-banner-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["multi-banner-header.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["multi-banner-header.css"]
    };
  }
}
