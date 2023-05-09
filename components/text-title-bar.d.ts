import type { Components, JSX } from "../types/components";

interface TextTitleBar extends Components.TextTitleBar, HTMLElement {}
export const TextTitleBar: {
  prototype: TextTitleBar;
  new (): TextTitleBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
