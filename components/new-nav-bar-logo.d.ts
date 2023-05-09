import type { Components, JSX } from "../types/components";

interface NewNavBarLogo extends Components.NewNavBarLogo, HTMLElement {}
export const NewNavBarLogo: {
  prototype: NewNavBarLogo;
  new (): NewNavBarLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
