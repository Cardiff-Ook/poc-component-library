'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const multiCarBannerCss = ":host{display:block}";

const MultiCarBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { id: "multiBannerAdmiralCarContainer" }, index.h("div", { id: "multiBannerCar", class: "MultiBannerCarComponent_multibanner-wrapper-car__2iSip MultiBannerCarComponent_multibanner-wrapper-common__2KzMl", "data-testid": "multiBannerCarComponent" }, index.h("img", { id: "multiBannerCarLeftBox", class: "MultiBannerCarComponent_multibanner-leftbox__B3O_F" }), index.h("div", { id: "multiBannerCarRightBoxContainer", class: "MultiBannerCarComponent_multibanner-rightbox-container__2iYZc" }, index.h("div", { id: "multiBannerCarRightBox", class: "MultiBannerCarComponent_multibanner-rightbox__20ogs" }, index.h("slot", { name: "banner-title" }), index.h("slot", { name: "banner-header" }), index.h("slot", { name: "bullet-points" })), index.h("quote-button", null, "Get A Quote")))));
  }
};
MultiCarBanner.style = multiCarBannerCss;

exports.multi_car_banner = MultiCarBanner;
