import { r as registerInstance, h } from './index-99449dbf.js';

const multiCarBannerCss = ":host{display:block}";

const MultiCarBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "multiBannerAdmiralCarContainer" }, h("div", { id: "multiBannerCar", class: "MultiBannerCarComponent_multibanner-wrapper-car__2iSip MultiBannerCarComponent_multibanner-wrapper-common__2KzMl", "data-testid": "multiBannerCarComponent" }, h("img", { src: "/undefined", id: "multiBannerCarLeftBox", class: "MultiBannerCarComponent_multibanner-leftbox__B3O_F" }), h("div", { id: "multiBannerCarRightBoxContainer", class: "MultiBannerCarComponent_multibanner-rightbox-container__2iYZc" }, h("div", { id: "multiBannerCarRightBox", class: "MultiBannerCarComponent_multibanner-rightbox__20ogs" }, h("multi-banner-title", null, "Save when you add another car"), h("multi-banner-header", null, "Get a no obligation quote today to see how much you could save."), h("div", { id: "multiBannerCarBenefitList", class: "MultiBannerCarComponent_multibanner-list__list__nKEEq" }, h("div", { id: "multiBannerCarBenefitListOne", class: "MultiBannerCarComponent_multibanner-list_item__9dH9u" }, h("i", { id: "statusIcon", class: "fa fa-check adm-icon" }), h("span", { id: "multiCoverNoCancelBenefit" }, h("span", null, h("strong", null, "No need to cancel your existing cover:"), " You can schedule your car to join at a later date"))), h("div", { id: "multiBannerCarBenefitListTwo", class: "MultiBannerCarComponent_multibanner-list_item__9dH9u" }, h("i", { id: "statusIcon", class: "fa fa-check adm-icon" }), h("span", { id: "multiCoverDiscountBenefit" }, h("span", null, h("strong", null, "Get your discounts immediately:"), " You only pay for the additional car when its cover starts"))), h("div", { id: "multiBannerCarBenefitListThree", class: "MultiBannerCarComponent_multibanner-list_item__9dH9u" }, h("i", { id: "statusIcon", class: "fa fa-check adm-icon" }), h("span", { id: "multiCoverFamilyBenefit" }, h("span", null, h("strong", null, "Insure family cars:"), " Even at different addresses"))))), h("quote-button", null)))));
  }
};
MultiCarBanner.style = multiCarBannerCss;

export { MultiCarBanner as multi_car_banner };
