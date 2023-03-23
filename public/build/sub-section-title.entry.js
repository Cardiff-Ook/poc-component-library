import { r as registerInstance, h } from './index-cd495fd3.js';

const subSectionTitleCss = ":host{display:block}";

const SubSectionTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("h4", { id: "pageTitle", class: "adm-page-title" }, this.pagetitle));
  }
};
SubSectionTitle.style = subSectionTitleCss;

export { SubSectionTitle as sub_section_title };
