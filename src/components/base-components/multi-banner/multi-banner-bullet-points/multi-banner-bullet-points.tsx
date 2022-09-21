import { Component, h, Prop } from '@stencil/core';


export interface BulletPointInterface {
  id: string;
  title: string;
  text: string;
}

@Component({
  tag: 'multi-banner-bullet-points',
  styleUrl: 'multi-banner-bullet-points.css',
  shadow: false,
})

export class MultiBannerBulletPoints {


  @Prop() bulletPoints: Array<BulletPointInterface> | string;
  private _arrayData: Array<BulletPointInterface>;

  arrayDataWatcher(newValue: any[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.bulletPoints);
  }


  render() {
    return (
      <div id="multiBannerCarBenefitList" class="MultiBannerCarComponent_multibanner-list__list__nKEEq">
        {
          this._arrayData.map((item: any={})=>
            <div class="MultiBannerCarComponent_multibanner-list_item__9dH9u">
            <i id="statusIcon" class="fa fa-check adm-icon"></i>
            <span id="multiCoverNoCancelBenefit">
              <span>
                <strong>{item.title}:</strong> {item.text}
              </span>
            </span>
          </div>
          )
        }
      </div>
    );
  }

}
