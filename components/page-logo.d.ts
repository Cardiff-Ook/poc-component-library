import type { Components, JSX } from "../types/components";

interface PageLogo extends Components.PageLogo, HTMLElement {}
export const PageLogo: {
  prototype: PageLogo;
  new (): PageLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
