import { h } from '@stencil/core';
export class QuoteButton {
  handleClick(event) {
    console.log(event.type);
  }
  render() {
    return (h("div", { id: "getaQuoteButtonContainer", class: "getaQuoteButtonContainer" }, h("button", { type: "button", onClick: (event) => this.handleClick(event), class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary getAQuoteButtonClass", id: "multiBannerCarGetAQuoteButton" }, h("span", null, h("slot", null)))));
  }
  static get is() { return "quote-button"; }
  static get originalStyleUrls() {
    return {
      "$": ["quote-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["quote-button.css"]
    };
  }
}
