import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const policyManagementTileCss = ".managementTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:206px;height:148px;text-align:center;color:#4A4643;font-weight:normal;background-repeat:no-repeat;background-position:center;background-size:contain}.icon{margin:10px;font-size:x-large;color:#4A4643}h2.option{width:100%;display:block;color:var(--adm-generic-select-control-single-value-color) !important;font-size:var(--ADM-FONT-SIZE-20) !important;font-weight:var(--GW-FONT-WEIGHT-SEMI-BOLD) !important;letter-spacing:var(--global-letter-spacing-minus-point-one) !important;line-height:var(--global-line-height-24) !important}";

const PolicyManagementTile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const imageSrc = `fa fa-${this.productImage} icon`;
    return (h("div", null, h("div", { class: "managementTile" }, h("a", { href: this.linkText }, h("i", { id: "statusIcon", class: imageSrc }), h("h2", { class: "option" }, this.titleText)), h("slot", null))));
  }
  static get style() { return policyManagementTileCss; }
}, [4, "policy-management-tile", {
    "linkText": [1, "link-text"],
    "productImage": [1, "product-image"],
    "titleText": [1, "title-text"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["policy-management-tile"];
  components.forEach(tagName => { switch (tagName) {
    case "policy-management-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PolicyManagementTile);
      }
      break;
  } });
}

export { PolicyManagementTile as P, defineCustomElement as d };
