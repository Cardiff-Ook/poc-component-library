import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const contentContainerCss = "#contentContainer{margin:auto}#contentWrapper{margin:25px auto 0;max-width:664px;-webkit-box-shadow:0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);box-shadow:0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);border-radius:16px}#content{border:1px solid #21201C33;padding:32px 70px 16px;background:-webkit-gradient(linear,left top, left bottom,from(#FFFFFF), color-stop(30%, #F7F7F5));background:linear-gradient(to bottom,#FFFFFF 0% 77%, #F7F7F5 30%);border-radius:16px}";

const ContentContainer$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "contentContainer" }, h("div", { id: "contentWrapper" }, h("div", { id: "content" }, h("slot", null))))));
  }
  static get style() { return contentContainerCss; }
}, [4, "content-container"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["content-container"];
  components.forEach(tagName => { switch (tagName) {
    case "content-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentContainer$1);
      }
      break;
  } });
}

const ContentContainer = ContentContainer$1;
const defineCustomElement = defineCustomElement$1;

export { ContentContainer, defineCustomElement };
