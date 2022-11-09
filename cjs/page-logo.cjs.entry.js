'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-304b1e43.js');

const pageLogoCss = ":host{display:block}";

const PageLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const imageSrc = `/assets/${this.brand}logo.svg`;
    return (index.h(index.Host, null, index.h("a", { class: "jut__ApplicationHeader__applicationLogoTitleLink active", href: "../index.html" }, index.h("span", { class: "jut__LogoTitle__logoTitle" }, index.h("img", { class: "jut__LogoTitle__logo jut__ApplicationHeader__applicationLogo", alt: "logo", src: imageSrc })))));
  }
};
PageLogo.style = pageLogoCss;

exports.page_logo = PageLogo;
