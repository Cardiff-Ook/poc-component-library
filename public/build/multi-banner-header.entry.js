import { r as registerInstance, h } from './index-c0c4017c.js';

const multiBannerHeaderCss = ":host{display:block}";

const MultiBannerHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("span", { class: "MultiBannerCarComponent_caveat__3TayJ", id: "multiBannerCarRightHeader" }, h("slot", null))));
  }
};
MultiBannerHeader.style = multiBannerHeaderCss;

export { MultiBannerHeader as multi_banner_header };
