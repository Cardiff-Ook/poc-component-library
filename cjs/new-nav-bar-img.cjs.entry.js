'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const newNavBarImgCss = "new-nav-bar-img{display:block;height:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:6.25em}img{display:block;width:100%}";

const NewNavBarImg = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("img", { src: this.src, alt: this.alt })));
  }
};
NewNavBarImg.style = newNavBarImgCss;

exports.new_nav_bar_img = NewNavBarImg;
