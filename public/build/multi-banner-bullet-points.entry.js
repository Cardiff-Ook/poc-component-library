import { r as registerInstance, h } from './index-ca799859.js';

const multiBannerBulletPointsCss = ":host{display:block}";

const MultiBannerBulletPoints = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { id: "multiBannerCarBenefitList", class: "MultiBannerCarComponent_multibanner-list__list__nKEEq" }, this._arrayData.map((item = {}) => h("div", { class: "MultiBannerCarComponent_multibanner-list_item__9dH9u" }, h("i", { id: "statusIcon", class: "fa fa-check adm-icon" }), h("span", { id: "multiCoverNoCancelBenefit" }, h("span", null, h("strong", null, item.title, ":"), " ", item.text))))));
  }
};
MultiBannerBulletPoints.style = multiBannerBulletPointsCss;

export { MultiBannerBulletPoints as multi_banner_bullet_points };
