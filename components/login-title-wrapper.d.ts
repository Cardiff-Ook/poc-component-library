import type { Components, JSX } from "../types/components";

interface LoginTitleWrapper extends Components.LoginTitleWrapper, HTMLElement {}
export const LoginTitleWrapper: {
  prototype: LoginTitleWrapper;
  new (): LoginTitleWrapper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
