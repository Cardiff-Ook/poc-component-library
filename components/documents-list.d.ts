import type { Components, JSX } from "../types/components";

interface DocumentsList extends Components.DocumentsList, HTMLElement {}
export const DocumentsList: {
  prototype: DocumentsList;
  new (): DocumentsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
