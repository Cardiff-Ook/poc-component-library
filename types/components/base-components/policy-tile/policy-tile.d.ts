import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
export declare class PolicyTile {
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
  componentWillLoad(): void;
  render(): any;
}
