import { Component, h } from '@stencil/core';

@Component({
  tag: 'policy-subsection-header',
  styleUrl: 'policy-subsection-header.css',
  shadow: false,
})
export class PolicySubsectionHeader {

  render() {
    return (
      <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9 nobg" id="policyContainer" data-testid="policyListComponent">
        <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK" id="policyDetails">
          <h1 class="subsection" title="">
            <div class="markdownWrapper">
              <span class="markdownParagraph">
                <span class="subsectionText"><slot /></span>
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  }

}
