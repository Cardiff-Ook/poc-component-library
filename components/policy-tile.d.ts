import type { Components, JSX } from "../types/components";

interface PolicyTile extends Components.PolicyTile, HTMLElement {}
export const PolicyTile: {
  prototype: PolicyTile;
  new (): PolicyTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
