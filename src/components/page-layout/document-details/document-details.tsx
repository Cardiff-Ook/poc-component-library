import { Component, h, Prop, Watch } from '@stencil/core';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';

@Component({
  tag: 'document-details',
  styleUrl: 'document-details.css',
  shadow: false,
})
export class DocumentDetails {
  @Prop() policies: Array<PolicyDataInterface> | string;
  private _arrayData: Array<PolicyDataInterface>;

@Watch('policies')
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

  componentWillLoad() {
    console.log(this.policies);
    this.arrayDataWatcher(this.policies);
    console.log("B ", this._arrayData);
  }

  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (
        
        <div id="policyCoverMainContainer" class="MyPoliciesPage_policyCoverMainContainer__3bkpG">
          <div id="policyCoverContainerIterables">

              {
                this._arrayData.map((policy:any={}, index) =>
                <documents-tile policydetails={policy} policyindex={index}></documents-tile>
            )}
          </div>
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
