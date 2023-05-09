import type { Components, JSX } from "../types/components";

interface PoliciesContainer extends Components.PoliciesContainer, HTMLElement {}
export const PoliciesContainer: {
  prototype: PoliciesContainer;
  new (): PoliciesContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
