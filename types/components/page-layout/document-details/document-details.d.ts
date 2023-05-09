import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class DocumentDetails {
  /**
 * Prop: policies: Array<PolicyDataInterface>
 * Array containing Policy Data for the current policies
 */
  policies: Array<PolicyDataInterface> | string;
  private _arrayData;
  arrayDataWatcher(newValue: any[] | string): void;
  componentWillLoad(): void;
  render(): any;
}
