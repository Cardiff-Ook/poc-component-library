import type { Components, JSX } from "../types/components";

interface DocumentDetailsContainer extends Components.DocumentDetailsContainer, HTMLElement {}
export const DocumentDetailsContainer: {
  prototype: DocumentDetailsContainer;
  new (): DocumentDetailsContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
