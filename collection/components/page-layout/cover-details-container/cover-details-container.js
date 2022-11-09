import { h } from '@stencil/core';
export class CoverDetailsContainer {
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      this._arrayData.forEach(obj => (obj.imageSrc = `/assets/claim-cover-${obj.policytype}.svg`));
    }
  }
  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;
    if (!!btn[0])
      btn[0].textContent = (this.collapsed) ? "View Summary" : "Hide Summary";
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "coverContainerIterable", class: "coverContainerGrid" }, this._arrayData.map((cover = {}, index) => h("cover-details-tile", { coverdetails: cover, coverindex: index }))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  static get is() { return "cover-details-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["cover-details-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cover-details-container.css"]
    };
  }
  static get properties() {
    return {
      "coverdetails": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Array<PolicyDataInterface> | string",
          "resolved": "PolicyDataInterface[] | string",
          "references": {
            "Array": {
              "location": "global"
            },
            "PolicyDataInterface": {
              "location": "import",
              "path": "../../../interfaces/policyDataInterface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: coverdetails: Array<PolicyDataInterface>\nThe Policy Data"
        },
        "attribute": "coverdetails",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "collapsed": {}
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "coverdetails",
        "methodName": "arrayDataWatcher"
      }];
  }
}
