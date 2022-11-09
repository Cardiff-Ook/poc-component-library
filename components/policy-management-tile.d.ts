import type { Components, JSX } from "../types/components";

interface PolicyManagementTile extends Components.PolicyManagementTile, HTMLElement {}
export const PolicyManagementTile: {
  prototype: PolicyManagementTile;
  new (): PolicyManagementTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
