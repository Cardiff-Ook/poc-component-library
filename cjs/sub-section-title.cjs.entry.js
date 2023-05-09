'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const subSectionTitleCss = ":host{display:block}";

const SubSectionTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("h4", { id: "pageTitle", class: "adm-page-title" }, this.pagetitle));
  }
};
SubSectionTitle.style = subSectionTitleCss;

exports.sub_section_title = SubSectionTitle;
