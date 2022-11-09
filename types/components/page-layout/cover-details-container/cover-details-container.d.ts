import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class CoverDetailsContainer {
  /**
   * Prop: coverdetails: Array<PolicyDataInterface>
   * The Policy Data
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
