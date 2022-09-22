import { Component, h, Prop, Watch } from '@stencil/core';

export interface PolicyDetailsInterface {
  id: string;
  policytype: string;
  imageSrc?: string;
  selected: boolean;
}

@Component({
  tag: 'policy-details',
  styleUrl: 'policy-details.css',
  shadow: false,
})

export class PolicyDetails {

  @Prop() policies: Array<PolicyDetailsInterface> | string;
  private _arrayData: Array<PolicyDetailsInterface>;

@Watch('policies')
  arrayDataWatcher(newValue: any[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
    console.log(this._arrayData);
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      this._arrayData.forEach(obj => (
        obj.imageSrc =  `/assets/claim-cover-${obj.policytype}.svg`
      ));
    }
    console.log(this._arrayData);
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.policies);
  }

  render() {
    console.log(this._arrayData);
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (
        
        <div id="policyCoverMainContainer" class="MyPoliciesPage_policyCoverMainContainer__3bkpG">
          <div id="policyCoverContainerIterables">

              {
                this._arrayData.map((policy:any={}) =>
                <policy-tile policydetails={policy}></policy-tile>
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
