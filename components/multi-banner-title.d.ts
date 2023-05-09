import type { Components, JSX } from "../types/components";

interface MultiBannerTitle extends Components.MultiBannerTitle, HTMLElement {}
export const MultiBannerTitle: {
  prototype: MultiBannerTitle;
  new (): MultiBannerTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
