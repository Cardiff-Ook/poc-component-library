import {Component, Element, EventEmitter, Event, State, Listen, Watch, Prop, h} from '@stencil/core';

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

  /**
   * private: _errorMessage: string
   * Error message to display of login fails
   */
  @State() _errorMessage: string = "";

  @State() showError: boolean = false;

  @Element() host: HTMLElement;

  login() {
    let form = this.host.querySelector('form');
    if (form.reportValidity()) {
        let inputs = this.host.querySelectorAll('input');
        this.loginShouldOccur.emit({ username: inputs[0].value, password: inputs[1].value });
    }
  }

  @Listen('loginError') 
    displayError(event) {
      console.log(event);
      this._errorMessage = event.detail.text;
      this.showError = !event.detail.show;
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

                <error-message hidden={this.showError}
                  errorMessage={this._errorMessage} 
                >
                </error-message>
                <p class="parent_recovery_links">
                  <a class="recovery_links" href="/myaccount/passwordreset/" target="_blank">
                    <div class="markdownWrapper">
                      <span class="markdownParagraph">
                        <span class="markdownText">Forgotten Password</span>
                      </span>
                    </div>
                  </a>
                </p>
                <p class="parent_recovery_links">
                  <a class="recovery_links" href="/myaccount/login/help-menu" target="_blank">
                    <div class="markdownWrapper">
                      <span class="markdownParagraph">
                        <span class="markdownText">Need help logging in?</span>
                      </span>
                    </div>
                  </a>
                </p>
                <button class="submitButton" type="button" onClick={() => { this.login(); }}>
                  <span class="buttonLabel">Login</span>
                </button>
            </div>
        </form>
      </div>
    );
  }

}
