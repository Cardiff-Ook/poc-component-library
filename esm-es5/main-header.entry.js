import{r as registerInstance,h,H as Host}from"./index-76cd28ee.js";var mainHeaderCss=":host{display:block}";var MainHeader=function(){function e(e){registerInstance(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementsByTagName("body")[0];e.classList.add("".concat(this.brand));e.classList.add("themeRoot");e.classList.add("digitalRoot")};e.prototype.render=function(){return h(Host,null,h("div",{id:"headerContainer",class:"AdmPageHeaderComponent_headerContainer__3MnMe"},h("section",{class:"jut__ApplicationHeader__applicationHeaderWrapper appheader"},h("header",{class:"jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader"},h("div",{class:"jut__Header__headerContainer jut__Header__headerContent"},h("slot",{name:"page-logo"}))),h("slot",{name:"nav-bar"}),h("slot",{name:"header-bar"}))))};return e}();MainHeader.style=mainHeaderCss;export{MainHeader as main_header};