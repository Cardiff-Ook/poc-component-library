import { r as registerInstance, h, H as Host } from './index-76cd28ee.js';

const errorMessageCss = ".markdownText{display:block;color:#d5574d;margin:10px 0;font-size:0.875rem}";

const ErrorMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
ErrorMessage.style = errorMessageCss;

export { ErrorMessage as error_message };
