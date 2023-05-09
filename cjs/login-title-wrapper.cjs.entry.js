'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const loginTitleWrapperCss = ":host{display:block}#loginTitleWrapper{margin-top:30px}#tagIcons{background-image:url(/assets/icon-strip.png);background-repeat:no-repeat;background-position:center;background-size:auto;height:40px;width:185px}";

const LoginTitleWrapper = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "containerBlock" }, index.h("div", { id: "loginTitleWrapper", class: "tagDiv" }, index.h("div", { id: "tagIcons" }), index.h("slot", null))));
  }
};
LoginTitleWrapper.style = loginTitleWrapperCss;

exports.login_title_wrapper = LoginTitleWrapper;
