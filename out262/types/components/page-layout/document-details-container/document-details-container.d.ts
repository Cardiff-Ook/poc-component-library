import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class DocumentDetailsContainer {
  /**
   * Prop: coverdetails: Array<PolicyDataInterface>
   * Array containing Policy Data
   */
  coverdetails: Array<PolicyDataInterface> | string;
  private _arrayData;
  collapsed: boolean;
  private element;
  arrayDataWatcher(newValue: any[] | string): void;
  toggle(): void;
  componentWillLoad(): void;
  render(): any;
}
