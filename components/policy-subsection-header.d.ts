import type { Components, JSX } from "../types/components";

interface PolicySubsectionHeader extends Components.PolicySubsectionHeader, HTMLElement {}
export const PolicySubsectionHeader: {
  prototype: PolicySubsectionHeader;
  new (): PolicySubsectionHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
