import { r as registerInstance, i as getAssetPath, h } from './index-c0c4017c.js';

const productTileCss = ".productTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:308px;height:148px;text-align:center;color:#4A4643;font-weight:bold;background-repeat:no-repeat;background-position:center;background-size:contain}img{width:100%}";

const ProductTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const imageSrc = getAssetPath(`/assets/${this.productImage}`);
    return (h("div", null, h("div", { class: "productTile" }, h("a", { href: this.linkText }, h("img", { src: imageSrc })))));
  }
};
ProductTile.style = productTileCss;

export { ProductTile as product_tile };
