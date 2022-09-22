import { Component, h } from '@stencil/core';

@Component({
  tag: 'policy-term-container',
  styleUrl: 'policy-term-container.css',
  shadow: false,
})
export class PolicyTermContainer {

  render() {
    return (
      <div id="termListContainer" class="RiskCover_termListStyle__3UoLq">
        <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left RiskCover_termDropDown__5mG_B">
          <div class="jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left">
            <label id="termDropDown_63202513" class="digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel RiskCover_termDropDownLabel__zAuFc">
              <span class="jut__FieldLabel__primaryLabel">Select Term:</span>
            </label>
          </div>
          <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls">
            <div role="presentation">
              <div class="jut__GenericSelectControl__genericSelect jut__DropdownSelectField__dropdownSelect jut__DropdownSelectField__sizeableDropdown RiskCover_termDropDown__5mG_B css-2b097c-container" id="termDropDown-wrapper">
                <div class="jut__GenericSelectControl__control">
                  <div class=" css-1hwfws3">
                    <div class="jut__GenericSelectControl__singleValue css-1uccc91-singleValue">Current Term</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
