import type { Components, JSX } from "../types/components";

interface MultiBannerBulletPoints extends Components.MultiBannerBulletPoints, HTMLElement {}
export const MultiBannerBulletPoints: {
  prototype: MultiBannerBulletPoints;
  new (): MultiBannerBulletPoints;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
