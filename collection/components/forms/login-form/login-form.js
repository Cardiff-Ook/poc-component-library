import { h } from '@stencil/core';
export class LoginForm {
  login() {
    let form = this.host.querySelector('form');
    if (form.reportValidity()) {
      let inputs = this.host.querySelectorAll('input');
      this.loginShouldOccur.emit({ username: inputs[0].value, password: inputs[1].value });
    }
  }
  handleEnter() {
    this.login();
  }
  render() {
    return (h("div", { id: "loginFormContainer" }, h("form", { class: "loginForm" }, h("div", { class: "loginFormFields" }, h("div", { class: "inputFieldContainer" }, h("label", null, "Policyholder Email ", h("span", { class: "req" }, "*")), h("div", { class: "inputField" }, h("input", { name: "username", required: true }))), h("div", { class: "inputFieldContainer" }, h("label", null, "Password ", h("span", { class: "req" }, "*")), h("div", { class: "inputField" }, h("input", { name: "password", type: "password", required: true }))), this.forgotPasswordUrl ?
      h("p", { class: "forgot" }, h("stencil-route-link", { url: this.forgotPasswordUrl }, "Forgot Password?")) : '', h("button", { class: "submitButton", type: "button", onClick: () => { this.login(); } }, h("span", { class: "buttonLabel" }, "Login"))))));
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
        "name": "keydown.enter",
        "method": "handleEnter",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
