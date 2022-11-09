import type { Components, JSX } from "../types/components";

interface QuoteButton extends Components.QuoteButton, HTMLElement {}
export const QuoteButton: {
  prototype: QuoteButton;
  new (): QuoteButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
