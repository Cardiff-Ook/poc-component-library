import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class DocumentsTile {
  /**
   * Prop: policydetails: PolicyDataInterface
   * Policy Data
   */
  policydetails: PolicyDataInterface;
  /**
   * Prop: policyindex: number
   * Index number of the policy in the list
   */
  policyindex: number;
  private _policyIndex;
  collapsed: boolean;
  private element;
  componentWillLoad(): void;
  toggle(): void;
  render(): any;
}
