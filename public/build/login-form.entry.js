import { r as registerInstance, f as createEvent, h, g as getElement } from './index-e3478a0e.js';

const loginFormCss = "#loginFormContainer{display:grid;grid-template-columns:auto}.loginForm{grid-row:1;margin-bottom:16px;display:block;margin-top:0em}.inputFieldContainer{width:100%;border:0;margin:0;display:inline-flex;padding:0;position:relative;min-width:0;margin-bottom:32px;flex-direction:column;vertical-align:top}.inputFieldContainer>label{transition:color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;transform:translate(0, 1.5px) scale(0.75);transform-origin:top left;top:0;left:0;position:relative;transform:translate(0, 24px) scale(1);color:#4A4643;display:block;font-size:14px;transform:none !important;font-style:normal;transition:none !important;font-family:jaf-facitweb, Helvetica, Arial;font-weight:normal;line-height:24px;padding:0}.inputFieldContainer>span{color:#4A4643;display:block;font-size:14px;transform:none !important;font-style:normal;transition:none !important;font-family:jaf-facitweb, Helvetica, Arial;font-weight:normal;line-height:24px;transform-origin:top left}label+.inputField{margin-top:16px;position:relative;width:100%;color:rgba(0, 0, 0, 0.87);cursor:text;display:inline-flex;font-size:0.875rem;box-sizing:border-box;align-items:center;font-family:jaf-facitweb, Helvetica, Arial;font-weight:400;line-height:1.1876em}label+.inputField:before{left:0;right:0;border:1px solid #D4D4E0;bottom:0;height:48px;content:\"\\00a0\";padding:0px 16px;position:absolute;transition:none;border-bottom:1px solid #D4D4E0;border-radius:8px;pointer-events:none}input{-webkit-box-shadow:0 0 0 100px #fff inset!important;-webkit-text-fill-color:#000;animation-name:mui-auto-fill;animation-duration:5000s;font:inherit;width:100%;border:0;height:20px;margin:0;display:block;padding:14px 16px;font-size:14px;min-width:0;background:none;box-sizing:content-box;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:400;line-height:20px;letter-spacing:inherit;-webkit-tap-highlight-color:transparent}input:focus{outline:0}label+.inputField:after{left:0;right:0;border:1px solid #0F5FFF;bottom:0;height:48px;content:\"\";padding:0px 16px;position:absolute;transform:scaleX(0);transition:none;border-bottom:1px solid #0F5FFF;border-radius:8px;pointer-events:none}";

const LoginForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loginShouldOccur = createEvent(this, "loginShouldOccur", 7);
  }
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
  get host() { return getElement(this); }
};
LoginForm.style = loginFormCss;

export { LoginForm as login_form };
