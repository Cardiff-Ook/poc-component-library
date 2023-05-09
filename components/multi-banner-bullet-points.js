import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const multiBannerBulletPointsCss = ":host{display:block}";

const MultiBannerBulletPoints$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return multiBannerBulletPointsCss; }
}, [0, "multi-banner-bullet-points", {
    "bulletPoints": [1, "bullet-points"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["multi-banner-bullet-points"];
  components.forEach(tagName => { switch (tagName) {
    case "multi-banner-bullet-points":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MultiBannerBulletPoints$1);
      }
      break;
  } });
}

const MultiBannerBulletPoints = MultiBannerBulletPoints$1;
const defineCustomElement = defineCustomElement$1;

export { MultiBannerBulletPoints, defineCustomElement };
