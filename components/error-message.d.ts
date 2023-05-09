import type { Components, JSX } from "../types/components";

interface ErrorMessage extends Components.ErrorMessage, HTMLElement {}
export const ErrorMessage: {
  prototype: ErrorMessage;
  new (): ErrorMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
