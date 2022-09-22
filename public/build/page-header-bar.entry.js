import { r as registerInstance, h } from './index-c0c4017c.js';

const pageHeaderBarCss = ":host{display:block}";

const PageHeaderBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { id: "headerMessage", class: "HeaderMessageComponent_headerMessage__1KWJA" }, h("div", { id: "headerMessageSaluteContainer", class: "headerMessageSaluteContainer HeaderMessageComponent_hader-message-salute__2dK9B", "data-cs-mask": "" }, "Hi ", this.name), h("div", { id: "headerMessagePageContainer", class: "headerMessagePageContainer HeaderMessageComponent_hader-message-page__RxyvD" }, h("slot", { name: "message" }))));
  }
};
PageHeaderBar.style = pageHeaderBarCss;

export { PageHeaderBar as page_header_bar };
