import { h } from '@stencil/core';
export class MultiBannerTitle {
  render() {
    return (h("div", null, h("span", { id: "multiBannerCarRightTitle", class: "MultiBannerCarComponent_multibanner-righttitle__36BKC" }, h("slot", null))));
  }
  static get is() { return "multi-banner-title"; }
  static get originalStyleUrls() {
    return {
      "$": ["multi-banner-title.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["multi-banner-title.css"]
    };
  }
}
