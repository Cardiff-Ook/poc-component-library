import type { Components, JSX } from "../types/components";

interface MultiCarBanner extends Components.MultiCarBanner, HTMLElement {}
export const MultiCarBanner: {
  prototype: MultiCarBanner;
  new (): MultiCarBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
