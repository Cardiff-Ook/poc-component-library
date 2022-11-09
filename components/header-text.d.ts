import type { Components, JSX } from "../types/components";

interface HeaderText extends Components.HeaderText, HTMLElement {}
export const HeaderText: {
  prototype: HeaderText;
  new (): HeaderText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
