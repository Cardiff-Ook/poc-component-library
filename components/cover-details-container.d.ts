import type { Components, JSX } from "../types/components";

interface CoverDetailsContainer extends Components.CoverDetailsContainer, HTMLElement {}
export const CoverDetailsContainer: {
  prototype: CoverDetailsContainer;
  new (): CoverDetailsContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
