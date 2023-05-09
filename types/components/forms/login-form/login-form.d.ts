import { EventEmitter } from '../../../stencil-public-runtime';
export declare class LoginForm {
  /**
   * Prop: forgotPasswordUrl: string
   * Page to redirect to if user se;ects forgot password
   */
  forgotPasswordUrl: string;
  /**
   * Event: loginShouldOccur: EventEmitter
   * Event to fire if data validates
   */
  loginShouldOccur: EventEmitter;
  /**
   * State: _errorMessage: string
   * Error message to display if login fails
   */
  _errorMessage: string;
  /**
   * State: showError: string
   * Controller for showing error message
   */
  showError: boolean;
  host: HTMLElement;
  login(): void;
  displayError(event: any): void;
  handleEnter(): void;
  render(): any;
}
