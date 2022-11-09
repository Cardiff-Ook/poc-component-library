import type { Components, JSX } from "../types/components";

interface LoginFooter extends Components.LoginFooter, HTMLElement {}
export const LoginFooter: {
  prototype: LoginFooter;
  new (): LoginFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
