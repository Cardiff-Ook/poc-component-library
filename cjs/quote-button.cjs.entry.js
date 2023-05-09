'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const quoteButtonCss = ":host{display:block}";

const QuoteButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  handleClick(event) {
    console.log(event.type);
  }
  render() {
    return (index.h("div", { id: "getaQuoteButtonContainer", class: "getaQuoteButtonContainer" }, index.h("button", { type: "button", onClick: (event) => this.handleClick(event), class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary getAQuoteButtonClass", id: "multiBannerCarGetAQuoteButton" }, index.h("span", null, index.h("slot", null)))));
  }
};
QuoteButton.style = quoteButtonCss;

exports.quote_button = QuoteButton;
