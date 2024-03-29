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
  host: HTMLElement;
  login(): void;
  handleEnter(): void;
  render(): any;
}
