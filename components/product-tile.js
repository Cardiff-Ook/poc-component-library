import { proxyCustomElement, HTMLElement, getAssetPath, h } from '@stencil/core/internal/client';

const productTileCss = ".productTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:308px;height:148px;text-align:center;color:#4A4643;font-weight:bold;background-repeat:no-repeat;background-position:center;background-size:contain}.productTile img{width:100%}";

const ProductTile$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const imageSrc = getAssetPath(`/assets/${this.productImage}`);
    return (h("div", null, h("div", { class: "productTile" }, h("a", { href: this.linkText }, h("img", { src: imageSrc })))));
  }
  static get style() { return productTileCss; }
}, [0, "product-tile", {
    "linkText": [1, "link-text"],
    "productImage": [1, "product-image"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["product-tile"];
  components.forEach(tagName => { switch (tagName) {
    case "product-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ProductTile$1);
      }
      break;
  } });
}

const ProductTile = ProductTile$1;
const defineCustomElement = defineCustomElement$1;

export { ProductTile, defineCustomElement };
