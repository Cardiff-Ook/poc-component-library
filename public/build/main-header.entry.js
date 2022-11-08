import { r as registerInstance, h, e as Host } from './index-bbb3174a.js';

const mainHeaderCss = ":host{display:block}";

const MainHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
    body.classList.add('themeRoot');
    body.classList.add('digitalRoot');
  }
  render() {
    return (h(Host, null, h("div", { id: "headerContainer", class: "AdmPageHeaderComponent_headerContainer__3MnMe" }, h("section", { class: "jut__ApplicationHeader__applicationHeaderWrapper appheader" }, h("header", { class: "jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader" }, h("div", { class: "jut__Header__headerContainer jut__Header__headerContent" }, h("slot", { name: "page-logo" }))), h("slot", { name: "nav-bar" }), h("slot", { name: "header-bar" })))));
  }
};
MainHeader.style = mainHeaderCss;

export { MainHeader as main_header };
