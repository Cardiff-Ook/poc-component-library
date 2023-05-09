'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const errorMessageCss = ".markdownText{display:block;color:#d5574d;margin:10px 0;font-size:0.875rem}";

const ErrorMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("div", { "aria-live": "polite", id: "loginErrorMessage", class: "jss1098" }, index.h("div", { class: "markdownWrapper" }, index.h("span", { class: "markdownParagraph" }, index.h("span", { class: "markdownText" }, this._errorMessage))))));
  }
  static get watchers() { return {
    "errorMessage": ["dataWatcher"]
  }; }
};
ErrorMessage.style = errorMessageCss;

exports.error_message = ErrorMessage;
