import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'error-message',
  styleUrl: 'error-message.css',
  shadow: false,
})
export class ErrorMessage {

  /**
   * Prop: errorMessage: string
   * The error message to display
   */  
  @Prop() errorMessage: string = '';

  private _errorMessage: string;

  @Watch('errorMessage')
  dataWatcher(newValue: string) {
    console.log("Watching: ", newValue);
    this._errorMessage = newValue;
  }


  componentWillLoad() {
    this.dataWatcher(this.errorMessage);
  }

  render() {
    return (
      <Host>
        <div aria-live="polite" id="loginErrorMessage" class="jss1098">
          <div class="markdownWrapper">
            <span class="markdownParagraph">
              <span class="markdownText">{this._errorMessage}</span>
            </span>
          </div>
        </div>
      </Host>
    );
  }
}