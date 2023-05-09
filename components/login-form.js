import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './error-message2.js';

const loginFormCss = "#loginFormContainer{display:grid;grid-template-columns:auto}.loginForm{grid-row:1;margin-bottom:16px;display:block;margin-top:0em}.inputFieldContainer{width:100%;border:0;margin:0;display:-ms-inline-flexbox;display:inline-flex;padding:0;position:relative;min-width:0;margin-bottom:32px;-ms-flex-direction:column;flex-direction:column;vertical-align:top}.inputFieldContainer>label{-webkit-transition:color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,-webkit-transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;transition:color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,-webkit-transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;transition:color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;transition:color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,-webkit-transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;-webkit-transform:translate(0, 1.5px) scale(0.75);transform:translate(0, 1.5px) scale(0.75);-webkit-transform-origin:top left;transform-origin:top left;top:0;left:0;position:relative;-webkit-transform:translate(0, 24px) scale(1);transform:translate(0, 24px) scale(1);color:#4A4643;display:block;font-size:14px;-webkit-transform:none !important;transform:none !important;font-style:normal;-webkit-transition:none !important;transition:none !important;font-family:jaf-facitweb, Helvetica, Arial;font-weight:normal;line-height:24px;padding:0}.inputFieldContainer>span{color:#4A4643;display:block;font-size:14px;-webkit-transform:none !important;transform:none !important;font-style:normal;-webkit-transition:none !important;transition:none !important;font-family:jaf-facitweb, Helvetica, Arial;font-weight:normal;line-height:24px;-webkit-transform-origin:top left;transform-origin:top left}label+.inputField{margin-top:16px;position:relative;width:100%;color:rgba(0, 0, 0, 0.87);cursor:text;display:-ms-inline-flexbox;display:inline-flex;font-size:0.875rem;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;font-family:jaf-facitweb, Helvetica, Arial;font-weight:400;line-height:1.1876em}label+.inputField:before{left:0;right:0;border:1px solid #D4D4E0;bottom:0;height:48px;content:\"\\00a0\";padding:0px 16px;position:absolute;-webkit-transition:none;transition:none;border-bottom:1px solid #D4D4E0;border-radius:8px;pointer-events:none}input{-webkit-box-shadow:0 0 0 100px #fff inset!important;-webkit-text-fill-color:#000;-webkit-animation-name:mui-auto-fill;animation-name:mui-auto-fill;-webkit-animation-duration:5000s;animation-duration:5000s;font:inherit;width:100%;border:0;height:20px;margin:0;display:block;padding:14px 16px;font-size:14px;min-width:0;background:none;-webkit-box-sizing:content-box;box-sizing:content-box;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:400;line-height:20px;letter-spacing:inherit;-webkit-tap-highlight-color:transparent}input:focus{outline:0}label+.inputField:after{left:0;right:0;border:1px solid #0F5FFF;bottom:0;height:48px;content:\"\";padding:0px 16px;position:absolute;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:none;transition:none;border-bottom:1px solid #0F5FFF;border-radius:8px;pointer-events:none}.parent_recovery_links{font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:normal;line-height:20px;margin-bottom:20px;text-align:center;display:block}.parent_recovery_links .recovery_links .markdownText{color:#0078FF}a:link,a:visited,a:hover,a:active{text-decoration:none}";

const LoginForm$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.loginShouldOccur = createEvent(this, "loginShouldOccur", 7);
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
  get host() { return this; }
  static get style() { return loginFormCss; }
}, [0, "login-form", {
    "forgotPasswordUrl": [1, "forgot-password-url"],
    "_errorMessage": [32],
    "showError": [32]
  }, [[0, "loginError", "displayError"], [0, "keydown.enter", "handleEnter"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["login-form", "error-message"];
  components.forEach(tagName => { switch (tagName) {
    case "login-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LoginForm$1);
      }
      break;
    case "error-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const LoginForm = LoginForm$1;
const defineCustomElement = defineCustomElement$1;

export { LoginForm, defineCustomElement };
