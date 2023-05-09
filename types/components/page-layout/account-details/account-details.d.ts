import { EventEmitter } from '../../../stencil-public-runtime';
import { UserDataInterface } from '../../../interfaces/userDataInterface';
export declare class AccountDetails {
  /**
   * Prop: user: object
   * User Account details object
   */
  user: Array<UserDataInterface> | string;
  private _user;
  /**
   * Event: loginShouldOccur: EventEmitter
   * Event to fire if data validates
   */
  editUserDetails: EventEmitter;
  dataWatcher(newValue: any | string): void;
  editAccount(): void;
  componentWillLoad(): void;
  render(): any;
}
