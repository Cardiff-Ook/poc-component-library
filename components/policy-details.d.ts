import type { Components, JSX } from "../types/components";

interface PolicyDetails extends Components.PolicyDetails, HTMLElement {}
export const PolicyDetails: {
  prototype: PolicyDetails;
  new (): PolicyDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
