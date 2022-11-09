import type { Components, JSX } from "../types/components";

interface ContentContainer extends Components.ContentContainer, HTMLElement {}
export const ContentContainer: {
  prototype: ContentContainer;
  new (): ContentContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
