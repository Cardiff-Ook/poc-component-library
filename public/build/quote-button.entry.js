import { r as registerInstance, h } from './index-99449dbf.js';

const quoteButtonCss = ":host{display:block}";

const QuoteButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleClick(event) {
    console.log(event.type);
  }
  render() {
    return (h("div", { id: "getaQuoteButtonContainer", class: "getaQuoteButtonContainer" }, h("button", { type: "button", onClick: (event) => this.handleClick(event), class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary getAQuoteButtonClass", id: "multiBannerCarGetAQuoteButton" }, h("span", null, "Get a Quote"))));
  }
};
QuoteButton.style = quoteButtonCss;

export { QuoteButton as quote_button };
