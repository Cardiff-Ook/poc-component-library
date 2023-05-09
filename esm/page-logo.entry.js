import { r as registerInstance, h, H as Host } from './index-76cd28ee.js';

const pageLogoCss = ":host{display:block}#title_image{height:58px !important}";

const PageLogo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const imageSrc = `/assets/${this.brand}logo.svg`;
    return (h(Host, null, h("a", { class: "jut__ApplicationHeader__applicationLogoTitleLink active", href: "../index.html" }, h("span", { class: "jut__LogoTitle__logoTitle" }, h("img", { id: "title_image", class: "jut__LogoTitle__logo jut__ApplicationHeader__applicationLogo", alt: "logo", src: imageSrc })))));
  }
};
PageLogo.style = pageLogoCss;

export { PageLogo as page_logo };
