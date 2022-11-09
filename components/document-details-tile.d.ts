import type { Components, JSX } from "../types/components";

interface DocumentDetailsTile extends Components.DocumentDetailsTile, HTMLElement {}
export const DocumentDetailsTile: {
  prototype: DocumentDetailsTile;
  new (): DocumentDetailsTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
