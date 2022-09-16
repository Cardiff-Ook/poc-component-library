import { r as registerInstance, h } from './index-c52c5fca.js';

const loginTitleWrapperCss = ":host{display:block}#loginTitleWrapper{margin-top:30px}#tagIcons{background-image:url(/assets/icon-strip.png);background-repeat:no-repeat;background-position:center;background-size:auto;height:40px;width:165px}";

const LoginTitleWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "loginTitleWrapper", class: "tagDiv" }, h("div", { id: "tagIcons" }), h("slot", null)));
  }
};
LoginTitleWrapper.style = loginTitleWrapperCss;

export { LoginTitleWrapper as login_title_wrapper };
