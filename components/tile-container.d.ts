import type { Components, JSX } from "../types/components";

interface TileContainer extends Components.TileContainer, HTMLElement {}
export const TileContainer: {
  prototype: TileContainer;
  new (): TileContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
