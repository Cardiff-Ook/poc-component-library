'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const contentContainerCss = "#contentContainer{margin:auto}#contentWrapper{margin:25px auto 0;max-width:664px;-webkit-box-shadow:0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);box-shadow:0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);border-radius:16px}#content{border:1px solid #21201C33;padding:32px 70px 16px;background:-webkit-gradient(linear,left top, left bottom,from(#FFFFFF), color-stop(30%, #F7F7F5));background:linear-gradient(to bottom,#FFFFFF 0% 77%, #F7F7F5 30%);border-radius:16px}";

const ContentContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "containerBlock" }, index.h("div", { id: "contentContainer" }, index.h("div", { id: "contentWrapper" }, index.h("div", { id: "content" }, index.h("slot", null))))));
  }
};
ContentContainer.style = contentContainerCss;

exports.content_container = ContentContainer;
