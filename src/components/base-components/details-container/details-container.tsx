import { Component, Prop, Watch, h } from '@stencil/core';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
import { VehicleDataInterface } from '../../../interfaces/vehicleDataInterface';

@Component({
  tag: 'details-container',
  styleUrl: 'details-container.css',
  shadow: false,
})

export class DetailsContainer {
  /**
   * Prop: detailstype: string
   * Either "car" or "home"
   */
  @Prop() detailstype: string;

  /**
   * Prop: coverdetails: PolicyDataInterface
   * Policy Data
   */
  @Prop() coverdetails: PolicyDataInterface | string;

  private _coverDetails: PolicyDataInterface;
  private _car: VehicleDataInterface;


@Watch('coverdetails')
  arrayDataWatcher(newValue: any | string) {
    if (typeof newValue === 'string') {
       this._coverDetails = JSON.parse(newValue);
       this._coverDetails = this._coverDetails[0] as PolicyDataInterface;
    } else {
      this._coverDetails = this.coverdetails as PolicyDataInterface;
    }

    switch (this.detailstype) {
      case "policy":
        if (this._coverDetails !== undefined)
          this._coverDetails.imageSrc =  `/assets/claim-cover-${this._coverDetails.policytype}.svg`;
        break;
      case "car":
        this._car = this._coverDetails.coverList[0].vehicleData;
        break;
    }

  }

  convertDate(inDate: string) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateVal = new Date(parseInt(inDate,10)*1000);

    return ` ${dateVal.getDay()} ${monthNames[dateVal.getMonth()]} ${dateVal.getFullYear()}`
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
  }

  render() {
    if (this.detailstype === "policy") {
      return (
        <div id="policyOverviewContainer" class="policyOverviewContainer RiskCoverDetails_sectionContainer___g21v">
          <div id="sectionTitleContainer" class="SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper">
            <h3 id="sectionTitleText" class="SectionTitle_sectionTitle__3ZORY">Policy Overview</h3>
          </div>
          <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
            <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
              <label id="startDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
                <span class="jut__FieldLabel__primaryLabel">Start Date</span>
              </label>
            </div>
            <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
              <div id="startDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this.convertDate(this._coverDetails.startDate)}</div>
              <div id="startDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
            </div>
          </div>
          <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
            <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
              <label id="endDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
                <span class="jut__FieldLabel__primaryLabel">Renewal Date</span>
              </label>
            </div>
            <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
              <div id="endDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this.convertDate(this._coverDetails.endDate)}</div>
              <div id="endDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      );
    } else if (this.detailstype === "car") {
      return (
      <div id="policyOverviewContainer" class="policyOverviewContainer RiskCoverDetails_sectionContainer___g21v">
        <div id="sectionTitleContainer" class="SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper">
          <h3 id="sectionTitleText" class="SectionTitle_sectionTitle__3ZORY">Vehicle</h3>
        </div>
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="startDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
              <span class="jut__FieldLabel__primaryLabel">Registration</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
            <div id="startDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._car.vehicleReg}</div>
            <div id="startDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
          </div>
        </div>
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="endDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
              <span class="jut__FieldLabel__primaryLabel">Make</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
            <div id="endDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._car.vehicleMake}</div>
            <div id="endDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
          </div>
        </div>
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="endDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
              <span class="jut__FieldLabel__primaryLabel">Model</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
            <div id="endDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._car.vehicleModel}</div>
            <div id="endDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
          </div>
        </div>
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="endDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
              <span class="jut__FieldLabel__primaryLabel">Cover Level</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
            <div id="endDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._car.coverLevel}</div>
            <div id="endDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
          </div>
        </div>
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="endDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
              <span class="jut__FieldLabel__primaryLabel">Modifications</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
            <div id="endDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._car.modifications}</div>
            <div id="endDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
          </div>
        </div>
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="endDateInputField_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly">
              <span class="jut__FieldLabel__primaryLabel">Other Vehicles</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
            <div id="endDateInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
              {this._car.otherVehicles}
              <button type="button" class="jut__IconButton__iconButton jut__IconButton__medium RiskCoverDetails_helpButton__3tEpc" aria-label="Button" tabindex="0" id="helpButton">
                <i class="mir mi-info jut__IconButton__icon jut__IconButton__dark" aria-hidden="true"></i>
              </button>
            </div>
            <div id="endDateInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
          </div>
        </div>
      </div>
      );
    }

  }

}
