import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const quoteButtonCss = ":host{display:block}";

const QuoteButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  handleClick(event) {
    console.log(event.type);
  }
  render() {
    return (h("div", { id: "getaQuoteButtonContainer", class: "getaQuoteButtonContainer" }, h("button", { type: "button", onClick: (event) => this.handleClick(event), class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary getAQuoteButtonClass", id: "multiBannerCarGetAQuoteButton" }, h("span", null, h("slot", null)))));
  }
  static get style() { return quoteButtonCss; }
}, [4, "quote-button"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["quote-button"];
  components.forEach(tagName => { switch (tagName) {
    case "quote-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, QuoteButton);
      }
      break;
  } });
}

export { QuoteButton as Q, defineCustomElement as d };
