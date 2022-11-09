import type { Components, JSX } from "../types/components";

interface PageHeaderBar extends Components.PageHeaderBar, HTMLElement {}
export const PageHeaderBar: {
  prototype: PageHeaderBar;
  new (): PageHeaderBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
