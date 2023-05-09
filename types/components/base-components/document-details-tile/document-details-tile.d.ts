import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class DocumentDetailsTile {
  /**
   * Prop: coverdetails: PolicyDataInterface
   * Policy Data
   */
  coverdetails: PolicyDataInterface | string;
  /**
  * Prop: coverindex: number
  * Index number of the policy in the list
  */
  coverindex: number;
  collapsed: boolean;
  private _coverDetails;
  private _tileId;
  private element;
  arrayDataWatcher(newValue: any | string): void;
  toggle(): void;
  componentWillLoad(): void;
  render(): any;
}
