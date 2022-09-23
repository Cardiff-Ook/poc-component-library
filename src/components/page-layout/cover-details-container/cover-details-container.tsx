import { Component, Prop, Watch, h, State, Element } from '@stencil/core';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';

@Component({
  tag: 'cover-details-container',
  styleUrl: 'cover-details-container.css',
  shadow: false,
})
export class CoverDetailsContainer {

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
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      this._arrayData.forEach(obj => (
        obj.imageSrc =  `/assets/claim-cover-${obj.policytype}.svg`
      ));
    }
  }

  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;

    if (!!btn[0])
      btn[0].textContent = (this.collapsed) ? "View Summary" : "Hide Summary";
  }

  componentWillLoad() {
    console.log(this.coverdetails);
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }

  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (
        <div id="coverContainerIterable" class="coverContainerGrid">
          {
            this._arrayData.map((cover:any={}, index) =>
                <cover-details-tile coverdetails={cover} coverindex={index}></cover-details-tile>
            )
          }
        </div>
      );
    } else {
      return (
        <div id="policyCoverMainContainer" class="MyPoliciesPage_policyCoverMainContainer__3bkpG">
          <sub-section-title pagetitle="You have no policies"></sub-section-title>     
        </div>
      )
    }
  }

}
