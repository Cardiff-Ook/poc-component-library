import type { Components, JSX } from "../types/components";

interface DocumentDetails extends Components.DocumentDetails, HTMLElement {}
export const DocumentDetails: {
  prototype: DocumentDetails;
  new (): DocumentDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
