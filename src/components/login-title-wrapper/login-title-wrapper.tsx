import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'login-title-wrapper',
  styleUrl: 'login-title-wrapper.css',
  shadow: false,
})
export class LoginTitleWrapper {
  render() {
    return (
      <div id="loginTitleWrapper" class="tagDiv">
          <div id="tagIcons"></div>
          <slot></slot>
      </div>
    );
  }

}
