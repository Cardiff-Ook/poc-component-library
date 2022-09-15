import { r as registerInstance, h } from './index-150330db.js';

const textTitleBarCss = ".tagTitle{font-size:22px;line-height:32px;font-weight:600;text-align:center;color:#0045A0;margin:0 auto;max-width:584px !important}";

const TextTitleBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "tagTitle" }, h("p", null, this.titleText)));
  }
};
TextTitleBar.style = textTitleBarCss;

export { TextTitleBar as text_title_bar };
