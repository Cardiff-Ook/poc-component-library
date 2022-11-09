import type { Components, JSX } from "../types/components";

interface MultiBannerHeader extends Components.MultiBannerHeader, HTMLElement {}
export const MultiBannerHeader: {
  prototype: MultiBannerHeader;
  new (): MultiBannerHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
