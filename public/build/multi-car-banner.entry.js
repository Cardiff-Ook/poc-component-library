import { r as registerInstance, h } from './index-cd495fd3.js';

const multiCarBannerCss = ":host{display:block}";

const MultiCarBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "multiBannerAdmiralCarContainer" }, h("div", { id: "multiBannerCar", class: "MultiBannerCarComponent_multibanner-wrapper-car__2iSip MultiBannerCarComponent_multibanner-wrapper-common__2KzMl", "data-testid": "multiBannerCarComponent" }, h("img", { id: "multiBannerCarLeftBox", class: "MultiBannerCarComponent_multibanner-leftbox__B3O_F" }), h("div", { id: "multiBannerCarRightBoxContainer", class: "MultiBannerCarComponent_multibanner-rightbox-container__2iYZc" }, h("div", { id: "multiBannerCarRightBox", class: "MultiBannerCarComponent_multibanner-rightbox__20ogs" }, h("slot", { name: "banner-title" }), h("slot", { name: "banner-header" }), h("slot", { name: "bullet-points" })), h("quote-button", null, "Get A Quote")))));
  }
};
MultiCarBanner.style = multiCarBannerCss;

export { MultiCarBanner as multi_car_banner };
