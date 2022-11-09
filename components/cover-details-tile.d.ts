import type { Components, JSX } from "../types/components";

interface CoverDetailsTile extends Components.CoverDetailsTile, HTMLElement {}
export const CoverDetailsTile: {
  prototype: CoverDetailsTile;
  new (): CoverDetailsTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
