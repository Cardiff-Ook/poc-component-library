import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const textTitleBarCss = ".tagTitle{font-size:22px;line-height:32px;font-weight:600;text-align:center;color:#0045A0;margin:0 auto;max-width:584px !important;margin-left:auto;margin-right:auto;padding:0 10px}.tagTitle>p{margin-top:15px}";

const TextTitleBar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { class: "tagTitle" }, h("p", null, h("slot", null))));
  }
  static get style() { return textTitleBarCss; }
}, [4, "text-title-bar"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["text-title-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "text-title-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextTitleBar$1);
      }
      break;
  } });
}

const TextTitleBar = TextTitleBar$1;
const defineCustomElement = defineCustomElement$1;

export { TextTitleBar, defineCustomElement };
