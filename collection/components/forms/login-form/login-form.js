import { h } from '@stencil/core';
export class LoginForm {
  constructor() {
    /**
     * State: _errorMessage: string
     * Error message to display if login fails
     */
    this._errorMessage = "";
    /**
     * State: showError: string
     * Controller for showing error message
     */
    this.showError = false;
  }
  login() {
    let form = this.host.querySelector('form');
    if (form.reportValidity()) {
      let inputs = this.host.querySelectorAll('input');
      this.loginShouldOccur.emit({ username: inputs[0].value, password: inputs[1].value });
    }
  }
  displayError(event) {
    console.log(event);
    this._errorMessage = event.detail.text;
    this.showError = !event.detail.show;
  }
  handleEnter() {
    this.login();
  }
  render() {
    return (h("div", { id: "loginFormContainer" }, h("form", { class: "loginForm" }, h("div", { class: "loginFormFields" }, h("div", { class: "inputFieldContainer" }, h("label", null, "Policyholder Email ", h("span", { class: "req" }, "*")), h("div", { class: "inputField" }, h("input", { name: "username", required: true }))), h("div", { class: "inputFieldContainer" }, h("label", null, "Password ", h("span", { class: "req" }, "*")), h("div", { class: "inputField" }, h("input", { name: "password", type: "password", required: true }))), h("error-message", { hidden: this.showError, errorMessage: this._errorMessage }), h("p", { class: "parent_recovery_links" }, h("a", { class: "recovery_links", href: "/myaccount/passwordreset/", target: "_blank" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, "Forgotten Password"))))), h("p", { class: "parent_recovery_links" }, h("a", { class: "recovery_links", href: "/myaccount/login/help-menu", target: "_blank" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, "Need help logging in?"))))), h("button", { class: "submitButton", type: "button", onClick: () => { this.login(); } }, h("span", { class: "buttonLabel" }, "Login"))))));
  }
  static get is() { return "login-form"; }
  static get originalStyleUrls() {
    return {
      "$": ["login-form.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["login-form.css"]
    };
  }
  static get properties() {
    return {
      "forgotPasswordUrl": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: forgotPasswordUrl: string\nPage to redirect to if user se;ects forgot password"
        },
        "attribute": "forgot-password-url",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "_errorMessage": {},
      "showError": {}
    };
  }
  static get events() {
    return [{
        "method": "loginShouldOccur",
        "name": "loginShouldOccur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event: loginShouldOccur: EventEmitter\nEvent to fire if data validates"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "loginError",
        "method": "displayError",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown.enter",
        "method": "handleEnter",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
