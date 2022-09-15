import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'login-title-wrapper',
  styleUrl: 'login-title-wrapper.css',
  shadow: false,
})
export class LoginTitleWrapper {
  /**
   * The text to display as the page title
   */
  @Prop() titleText: string;

  render() {
    return (
      <div id="loginTitleWrapper" class="tagDiv">
          <div id="tagIcons"></div>
          <text-title-bar titleText={this.titleText}></text-title-bar>
      </div>
    );
  }

}
