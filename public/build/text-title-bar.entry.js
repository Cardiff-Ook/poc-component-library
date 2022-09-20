import { r as registerInstance, h } from './index-99449dbf.js';

const textTitleBarCss = ".tagTitle{font-size:22px;line-height:32px;font-weight:600;text-align:center;color:#0045A0;margin:0 auto;max-width:584px !important;margin-left:auto;margin-right:auto;padding:0 10px}.tagTitle>p{margin-top:15px}";

const TextTitleBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "tagTitle" }, h("p", null, h("slot", null))));
  }
};
TextTitleBar.style = textTitleBarCss;

export { TextTitleBar as text_title_bar };
