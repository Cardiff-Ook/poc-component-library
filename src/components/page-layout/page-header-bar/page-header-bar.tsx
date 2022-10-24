import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'page-header-bar',
  styleUrl: 'page-header-bar.css',
  shadow: false,
})
export class PageHeaderBar {
  
  /**
   * Prop: name: string
   * The user name being displayed
   */
  @Prop() name: string;

  render() {
    return (
      <div id="headerMessage" class="HeaderMessageComponent_headerMessage__1KWJA">
        <div id="headerMessageSaluteContainer" class="headerMessageSaluteContainer HeaderMessageComponent_hader-message-salute__2dK9B" data-cs-mask="">Hi {this.name}</div>
        <div id="headerMessagePageContainer" class="headerMessagePageContainer HeaderMessageComponent_hader-message-page__RxyvD"><slot name="message" /></div>
      </div>
    );
  }

}
