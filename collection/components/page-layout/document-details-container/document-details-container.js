import { h } from '@stencil/core';
export class DocumentDetailsContainer {
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }
  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;
    if (!!btn[0])
      if (this.collapsed) {
        btn[0].innerHTML = '<span id="selectedSpan"><span>View Documents</span></span>';
        btn[0].classList.remove("SelectButton_selectButton__2EnMv");
        btn[0].classList.remove("jut__Button__materialIcon");
      }
      else {
        btn[0].innerHTML = '<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';
        btn[0].classList.add("SelectButton_selectButton__2EnMv");
        btn[0].classList.add("jut__Button__materialIcon");
      }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "coverContainerIterable", class: "coverContainerGrid" }, this._arrayData.map((cover = {}, index) => h("document-details-tile", { coverdetails: cover, coverindex: index }))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no documents" })));
    }
  }
  static get is() { return "document-details-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["document-details-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["document-details-container.css"]
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
          "text": "Prop: coverdetails: Array<PolicyDataInterface>\nArray containing Policy Data"
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
