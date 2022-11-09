import { h } from '@stencil/core';
export class MainPageContents {
  render() {
    return (h("main", { class: "jut__Main__main admMain" }, h("div", { class: "jut__Container__container jut__Main__container" }, h("div", { id: "pageContainer", class: "page MyPoliciesPage_claimHomePage__3e-L3" }, h("slot", { name: "page-contents" })))));
  }
  static get is() { return "main-page-contents"; }
  static get originalStyleUrls() {
    return {
      "$": ["main-page-contents.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["main-page-contents.css"]
    };
  }
}
