import { r as registerInstance, h } from './index-0240b1cc.js';

const policyManagementTileCss = ".managementTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:206px;height:148px;text-align:center;color:#4A4643;font-weight:normal;background-repeat:no-repeat;background-position:center;background-size:contain}.icon{margin:10px;font-size:x-large;color:#4A4643}h2.option{width:100%;display:block;color:var(--adm-generic-select-control-single-value-color) !important;font-size:var(--ADM-FONT-SIZE-20) !important;font-weight:var(--GW-FONT-WEIGHT-SEMI-BOLD) !important;letter-spacing:var(--global-letter-spacing-minus-point-one) !important;line-height:var(--global-line-height-24) !important}";

const PolicyManagementTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const imageSrc = `fa fa-${this.productImage} icon`;
    return (h("div", null, h("div", { class: "managementTile" }, h("a", { href: this.linkText }, h("i", { id: "statusIcon", class: imageSrc }), h("h2", { class: "option" }, this.titleText)), h("slot", null))));
  }
};
PolicyManagementTile.style = policyManagementTileCss;

export { PolicyManagementTile as policy_management_tile };
