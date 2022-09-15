import { Component, Host, h } from '@stencil/core';

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
          <div class="tagTitle">
              <p>For Car, Home and Van customers, login below to manage your cover</p>
          </div>
      </div>
    );
  }

}
