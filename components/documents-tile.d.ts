import type { Components, JSX } from "../types/components";

interface DocumentsTile extends Components.DocumentsTile, HTMLElement {}
export const DocumentsTile: {
  prototype: DocumentsTile;
  new (): DocumentsTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
