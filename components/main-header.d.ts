import type { Components, JSX } from "../types/components";

interface MainHeader extends Components.MainHeader, HTMLElement {}
export const MainHeader: {
  prototype: MainHeader;
  new (): MainHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
