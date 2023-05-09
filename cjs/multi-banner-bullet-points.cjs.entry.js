'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const multiBannerBulletPointsCss = ":host{display:block}";

const MultiBannerBulletPoints = class {
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
    this.arrayDataWatcher(this.bulletPoints);
  }
  render() {
    return (index.h("div", { id: "multiBannerCarBenefitList", class: "MultiBannerCarComponent_multibanner-list__list__nKEEq" }, this._arrayData.map((item = {}) => index.h("div", { class: "MultiBannerCarComponent_multibanner-list_item__9dH9u" }, index.h("i", { id: "statusIcon", class: "fa fa-check adm-icon" }), index.h("span", { id: "multiCoverNoCancelBenefit" }, index.h("span", null, index.h("strong", null, item.title, ":"), " ", item.text))))));
  }
};
MultiBannerBulletPoints.style = multiBannerBulletPointsCss;

exports.multi_banner_bullet_points = MultiBannerBulletPoints;
