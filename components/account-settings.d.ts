import type { Components, JSX } from "../types/components";

interface AccountSettings extends Components.AccountSettings, HTMLElement {}
export const AccountSettings: {
  prototype: AccountSettings;
  new (): AccountSettings;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
