import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const errorMessageCss = ".markdownText{display:block;color:#d5574d;margin:10px 0;font-size:0.875rem}";

const ErrorMessage = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Prop: errorMessage: string
     * The error message to display
     */
    this.errorMessage = '';
  }
  dataWatcher(newValue) {
    console.log("Watching: ", newValue);
    this._errorMessage = newValue;
  }
  componentWillLoad() {
    this.dataWatcher(this.errorMessage);
  }
  render() {
    return (h(Host, null, h("div", { "aria-live": "polite", id: "loginErrorMessage", class: "jss1098" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, this._errorMessage))))));
  }
  static get watchers() { return {
    "errorMessage": ["dataWatcher"]
  }; }
  static get style() { return errorMessageCss; }
}, [0, "error-message", {
    "errorMessage": [1, "error-message"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["error-message"];
  components.forEach(tagName => { switch (tagName) {
    case "error-message":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ErrorMessage);
      }
      break;
  } });
}

export { ErrorMessage as E, defineCustomElement as d };
