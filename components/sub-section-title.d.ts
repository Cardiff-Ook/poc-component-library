import type { Components, JSX } from "../types/components";

interface SubSectionTitle extends Components.SubSectionTitle, HTMLElement {}
export const SubSectionTitle: {
  prototype: SubSectionTitle;
  new (): SubSectionTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
