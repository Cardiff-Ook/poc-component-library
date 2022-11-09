import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class DocumentsList {
  /**
   * Prop: coverdetails: PolicyDataInterface
   * Policy Data
   */
  coverdetails: PolicyDataInterface | string;
  private _coverDetails;
  private _docsList;
  arrayDataWatcher(newValue: any | string): void;
  convertDate(inDate: string): string;
  componentWillLoad(): void;
  render(): any;
}
