import type { Components, JSX } from "../types/components";

interface PolicyTermContainer extends Components.PolicyTermContainer, HTMLElement {}
export const PolicyTermContainer: {
  prototype: PolicyTermContainer;
  new (): PolicyTermContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
