import { r as registerInstance, i as getAssetPath, h, e as Host } from './index-cd495fd3.js';

const loginHeaderCss = ":host{display:block}header #loginHeaderLogo{width:100%;height:100%}header{width:100%;height:86px;display:flex;z-index:6;justify-content:center}header .logoContainer{width:140px;display:flex;margin-top:40px;justify-content:center}.jss591{width:100px;cursor:pointer;height:35px;display:flex;align-items:center;justify-content:center}img{width:154px}";

const PageHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
  }
  render() {
    const imageSrc = getAssetPath(`/assets/${this.brand}logo.svg`);
    const imageAltText = `${this.brand} logo placeholder`;
    return (h(Host, { class: "containerBlock" }, h("header", null, h("div", { class: "logoContainer" }, h("a", { href: "/myaccount/login/" }, h("div", { id: "loginHeaderLogo", class: "jss591" }, h("img", { id: "loginLogo", src: imageSrc, alt: imageAltText })))))));
  }
  static get assetsDirs() { return ["./assets"]; }
};
PageHeader.style = loginHeaderCss;

export { PageHeader as login_header };
