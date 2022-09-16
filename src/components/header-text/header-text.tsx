import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-text',
  styleUrl: 'header-text.css',
  shadow: true,
})
export class HeaderText {

  render() {
    return (
      <h1 class="title" title="">
        <div class="markdownWrapper">
          <span class="markdownParagraph">
            <span class="markdownText"><slot /></span>
          </span>
        </div>
      </h1>
    );
  }

}
