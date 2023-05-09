import { h } from '@stencil/core';
export class MultiBannerBulletPoints {
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
  static get is() { return "multi-banner-bullet-points"; }
  static get originalStyleUrls() {
    return {
      "$": ["multi-banner-bullet-points.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["multi-banner-bullet-points.css"]
    };
  }
  static get properties() {
    return {
      "bulletPoints": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Array<BulletPointInterface> | string",
          "resolved": "BulletPointInterface[] | string",
          "references": {
            "Array": {
              "location": "global"
            },
            "BulletPointInterface": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: bulletPoints: Array<BulletPointInterface>\nArray containing all the bullet points to display"
        },
        "attribute": "bullet-points",
        "reflect": false
      }
    };
  }
}
