import { r as registerInstance, h, H as Host } from './index-76cd28ee.js';

const newNavBarImgCss = "new-nav-bar-img{display:block;height:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:6.25em}img{display:block;width:100%}";

const NewNavBarImg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("img", { src: this.src, alt: this.alt })));
  }
};
NewNavBarImg.style = newNavBarImgCss;

export { NewNavBarImg as new_nav_bar_img };
