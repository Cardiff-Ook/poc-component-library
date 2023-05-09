import type { Components, JSX } from "../types/components";

interface DocumentsListItem extends Components.DocumentsListItem, HTMLElement {}
export const DocumentsListItem: {
  prototype: DocumentsListItem;
  new (): DocumentsListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
