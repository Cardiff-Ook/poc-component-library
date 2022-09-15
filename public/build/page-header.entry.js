import { r as registerInstance, g as getAssetPath, h } from './index-5756e4c3.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const pageHeaderCss = ":host{display:block}.person{font-weight:bolder;font-size:x-large;color:chartreuse}";

const PageHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The Image to display
     */
    this.image = "admiral.png";
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    const imageSrc = getAssetPath(`./assets/${this.image}`);
    console.log(imageSrc);
    return (h("div", null, h("div", null, "Hello, World! I'm ", h("span", { class: "person" }, this.getText())), h("div", null, h("img", { src: imageSrc }))));
  }
  static get assetsDirs() { return ["./assets"]; }
};
PageHeader.style = pageHeaderCss;

export { PageHeader as page_header };
