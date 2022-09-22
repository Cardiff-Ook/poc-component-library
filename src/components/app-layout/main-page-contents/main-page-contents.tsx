import { Component, h } from '@stencil/core';

@Component({
  tag: 'main-page-contents',
  styleUrl: 'main-page-contents.css',
  shadow: false,
})
export class MainPageContents {

  render() {
    return (
        <main class="jut__Main__main admMain">
          <div class="jut__Container__container jut__Main__container">
            <div id="pageContainer" class="page MyPoliciesPage_claimHomePage__3e-L3">
              <slot name="page-contents" />
            </div>
          </div>
        </main>
    );
  }

}
