import type { Components, JSX } from "../types/components";

interface ProductTile extends Components.ProductTile, HTMLElement {}
export const ProductTile: {
  prototype: ProductTile;
  new (): ProductTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
