import { Component, h } from '@stencil/core';

@Component({
  tag: 'quote-button',
  styleUrl: 'quote-button.css',
  shadow: false,
})
export class QuoteButton {

  handleClick(event: UIEvent) {
    console.log(event.type);
  }

  render() {
    return (
      <div id="getaQuoteButtonContainer" class="getaQuoteButtonContainer">
        <button type="button" onClick={ (event: UIEvent) => this.handleClick(event)} class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary getAQuoteButtonClass" id="multiBannerCarGetAQuoteButton">
            <span>Get a Quote</span>
        </button>
      </div>
    );
  }

}
