import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const pageHeaderBarCss = ":host{display:block}";

const PageHeaderBar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { id: "headerMessage", class: "HeaderMessageComponent_headerMessage__1KWJA" }, h("div", { id: "headerMessageSaluteContainer", class: "headerMessageSaluteContainer HeaderMessageComponent_hader-message-salute__2dK9B", "data-cs-mask": "" }, "Hi ", this.name), h("div", { id: "headerMessagePageContainer", class: "headerMessagePageContainer HeaderMessageComponent_hader-message-page__RxyvD" }, h("slot", { name: "message" }))));
  }
  static get style() { return pageHeaderBarCss; }
}, [4, "page-header-bar", {
    "name": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["page-header-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "page-header-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PageHeaderBar$1);
      }
      break;
  } });
}

const PageHeaderBar = PageHeaderBar$1;
const defineCustomElement = defineCustomElement$1;

export { PageHeaderBar, defineCustomElement };
