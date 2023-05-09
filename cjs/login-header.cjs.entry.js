'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const loginHeaderCss = ":host{display:block}header #loginHeaderLogo{width:100%;height:100%}header{width:100%;height:86px;display:-ms-flexbox;display:flex;z-index:6;-ms-flex-pack:center;justify-content:center}header .logoContainer{width:140px;display:-ms-flexbox;display:flex;margin-top:40px;-ms-flex-pack:center;justify-content:center}.jss591{width:100px;cursor:pointer;height:35px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}img{width:154px}";

const PageHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
  }
  render() {
    const imageSrc = index.getAssetPath(`/assets/${this.brand}logo.svg`);
    const imageAltText = `${this.brand} logo placeholder`;
    return (index.h(index.Host, { class: "containerBlock" }, index.h("header", null, index.h("div", { class: "logoContainer" }, index.h("a", { href: "/myaccount/login/" }, index.h("div", { id: "loginHeaderLogo", class: "jss591" }, index.h("img", { id: "loginLogo", src: imageSrc, alt: imageAltText })))))));
  }
  static get assetsDirs() { return ["./assets"]; }
};
PageHeader.style = loginHeaderCss;

exports.login_header = PageHeader;
