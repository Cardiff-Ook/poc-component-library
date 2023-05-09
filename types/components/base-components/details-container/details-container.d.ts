import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class DetailsContainer {
  /**
   * Prop: detailstype: string
   * Either "car" or "home"
   */
  detailstype: string;
  /**
   * Prop: coverdetails: PolicyDataInterface
   * Policy Data
   */
  coverdetails: PolicyDataInterface | string;
  private _coverDetails;
  private _car;
  arrayDataWatcher(newValue: any | string): void;
  convertDate(inDate: string): string;
  componentWillLoad(): void;
  render(): any;
}
