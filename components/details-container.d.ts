import type { Components, JSX } from "../types/components";

interface DetailsContainer extends Components.DetailsContainer, HTMLElement {}
export const DetailsContainer: {
  prototype: DetailsContainer;
  new (): DetailsContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
