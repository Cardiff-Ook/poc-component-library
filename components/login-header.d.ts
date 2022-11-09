import type { Components, JSX } from "../types/components";

interface LoginHeader extends Components.LoginHeader, HTMLElement {}
export const LoginHeader: {
  prototype: LoginHeader;
  new (): LoginHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
