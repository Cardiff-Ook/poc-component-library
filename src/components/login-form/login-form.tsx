import {Component, Element, EventEmitter, Event, Listen, Prop, h} from '@stencil/core';

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
  shadow: false,
})

export class LoginForm {
  /**
   * Prop: forgotPasswordUrl: string
   * Page to redirect to if user se;ects forgot password
   */
  @Prop() forgotPasswordUrl: string;

  /**
   * Event: loginShouldOccur: EventEmitter
   * Event to fire if data validates
   */
  @Event() loginShouldOccur: EventEmitter;
  @Element() host: HTMLElement;

  login() {
    let form = this.host.querySelector('form');
    if (form.reportValidity()) {
        let inputs = this.host.querySelectorAll('input');
        this.loginShouldOccur.emit({ username: inputs[0].value, password: inputs[1].value });
    }
  }

  @Listen('keydown.enter')
  handleEnter() {
      this.login();
  }

  render() {
    return (
      <div id="loginFormContainer">
        <form class="loginForm">
            <div class="loginFormFields">
                <div class="inputFieldContainer">
                    <label>Policyholder Email <span class="req">*</span></label>
                    <div class="inputField">
                      <input name="username" required />
                    </div>
                </div>
                <div class="inputFieldContainer">
                    <label>Password <span class="req">*</span></label>
                    <div class="inputField">
                      <input name="password" type="password" required />
                    </div>
                </div>
              {this.forgotPasswordUrl ? 
                  <p class="forgot">
                      <stencil-route-link url={this.forgotPasswordUrl}>Forgot Password?</stencil-route-link>
                  </p> : ''}
                <button class="submitButton" type="button" onClick={() => { this.login(); }}>
                  <span class="buttonLabel">Login</span>
                </button>
            </div>
        </form>
      </div>
    );
  }

}
