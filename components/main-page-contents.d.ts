import type { Components, JSX } from "../types/components";

interface MainPageContents extends Components.MainPageContents, HTMLElement {}
export const MainPageContents: {
  prototype: MainPageContents;
  new (): MainPageContents;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
