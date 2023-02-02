import { r as registerInstance, h } from './index-cd495fd3.js';

const multiBannerTitleCss = ":host{display:block}";

const MultiBannerTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("span", { id: "multiBannerCarRightTitle", class: "MultiBannerCarComponent_multibanner-righttitle__36BKC" }, h("slot", null))));
  }
};
MultiBannerTitle.style = multiBannerTitleCss;

export { MultiBannerTitle as multi_banner_title };
