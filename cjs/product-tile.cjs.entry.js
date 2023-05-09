'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const productTileCss = ".productTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:308px;height:148px;text-align:center;color:#4A4643;font-weight:bold;background-repeat:no-repeat;background-position:center;background-size:contain}.productTile img{width:100%}";

const ProductTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const imageSrc = index.getAssetPath(`/assets/${this.productImage}`);
    return (index.h("div", null, index.h("div", { class: "productTile" }, index.h("a", { href: this.linkText }, index.h("img", { src: imageSrc })))));
  }
};
ProductTile.style = productTileCss;

exports.product_tile = ProductTile;
