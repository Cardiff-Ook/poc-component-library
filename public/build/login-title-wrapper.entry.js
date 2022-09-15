import { r as registerInstance, h } from './index-150330db.js';

const loginTitleWrapperCss = ":host{display:block}#loginTitleWrapper{position:absolute;top:0;margin-top:115px}.tagTitle{font-size:22px;line-height:32px;font-weight:600;text-align:center;color:#0045A0;margin:0 auto;max-width:584px !important}#tagIcons{background-image:url(build/assets/icon-strip.png);background-repeat:no-repeat;background-position:center;background-size:auto;height:40px;width:165px}";

const LoginTitleWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "loginTitleWrapper", class: "tagDiv" }, h("div", { id: "tagIcons" }), h("div", { class: "tagTitle" }, h("p", null, "For Car, Home and Van customers, login below to manage your cover"))));
  }
};
LoginTitleWrapper.style = loginTitleWrapperCss;

export { LoginTitleWrapper as login_title_wrapper };
