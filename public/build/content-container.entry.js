import { r as registerInstance, h, e as Host } from './index-bbb3174a.js';

const contentContainerCss = "#contentContainer{margin:auto}#contentWrapper{margin:25px auto 0;max-width:664px;box-shadow:0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);border-radius:16px}#content{border:1px solid #21201C33;padding:32px 70px 16px;background:linear-gradient(to bottom,#FFFFFF 0% 73%, #F7F7F5 30%);border-radius:16px}";

const ContentContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "contentContainer" }, h("div", { id: "contentWrapper" }, h("div", { id: "content" }, h("slot", null))))));
  }
};
ContentContainer.style = contentContainerCss;

export { ContentContainer as content_container };
