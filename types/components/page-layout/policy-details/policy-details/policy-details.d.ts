import { PolicyDataInterface } from '../../../../interfaces/policyDataInterface';
export declare class PolicyDetails {
  /**
   * Prop: policies: Array<PolicyDataInterface>
   * Array containing all the Policy Data
   */
  policies: Array<PolicyDataInterface> | string;
  private _arrayData;
  arrayDataWatcher(newValue: any[] | string): void;
  componentWillLoad(): void;
  render(): any;
}
