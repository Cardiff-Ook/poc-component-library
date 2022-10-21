import { Component, Prop, Watch, h, State, Element } from '@stencil/core';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';

@Component({
  tag: 'document-details-container',
  styleUrl: 'document-details-container.css',
  shadow: false,
})
export class DocumentDetailsContainer {

  @Prop() coverdetails: Array<PolicyDataInterface> | string;
  private _arrayData: Array<PolicyDataInterface>;
  @State() collapsed: boolean;

  @Element() private element: HTMLElement;

@Watch('coverdetails')
  arrayDataWatcher(newValue: any[] | string) {
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
       } else {
        btn[0].innerHTML = '<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';
        btn[0].classList.add("SelectButton_selectButton__2EnMv");
        btn[0].classList.add("jut__Button__materialIcon");
       }
  }
  
  componentWillLoad() {
    console.log("document-details-container loaded");
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
    console.log("C ", this._arrayData);
  }

  render() {
    /*if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (
        <div id="coverContainerIterable" class="coverContainerGrid">
          {
            this._arrayData.map((cover:any={}, index) =>
                <cover-details-tile coverdetails={cover} coverindex={index}></cover-details-tile>
            )
          }
        </div>
      );
    } else {*/
      return (
        <div id="policyCoverMainContainer" class="MyPoliciesPage_policyCoverMainContainer__3bkpG">
          <sub-section-title pagetitle="You have no policies"></sub-section-title>     
        </div>
      )
    //}
  }

}
