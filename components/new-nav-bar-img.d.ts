import type { Components, JSX } from "../types/components";

interface NewNavBarImg extends Components.NewNavBarImg, HTMLElement {}
export const NewNavBarImg: {
  prototype: NewNavBarImg;
  new (): NewNavBarImg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
