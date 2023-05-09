import type { Components, JSX } from "../types/components";

interface AccountDetails extends Components.AccountDetails, HTMLElement {}
export const AccountDetails: {
  prototype: AccountDetails;
  new (): AccountDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
