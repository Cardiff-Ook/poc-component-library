/* PocAdmComponents custom elements */
export { AccountDetails as AccountDetails } from '../types/components/page-layout/account-details/account-details';
export { AccountSettings as AccountSettings } from '../types/components/page-layout/account-settings/account-settings';
export { ContentContainer as ContentContainer } from '../types/components/page-layout/content-container/content-container';
export { CoverDetailsContainer as CoverDetailsContainer } from '../types/components/page-layout/cover-details-container/cover-details-container';
export { CoverDetailsTile as CoverDetailsTile } from '../types/components/base-components/cover-details-tile/cover-details-tile';
export { DetailsContainer as DetailsContainer } from '../types/components/base-components/details-container/details-container';
export { DocumentDetails as DocumentDetails } from '../types/components/page-layout/document-details/document-details';
export { DocumentDetailsContainer as DocumentDetailsContainer } from '../types/components/page-layout/document-details-container/document-details-container';
export { DocumentDetailsTile as DocumentDetailsTile } from '../types/components/base-components/document-details-tile/document-details-tile';
export { DocumentsList as DocumentsList } from '../types/components/base-components/documents-list/documents-list';
export { DocumentsListItem as DocumentsListItem } from '../types/components/base-components/documents-list-item/documents-list-item';
export { DocumentsTile as DocumentsTile } from '../types/components/base-components/documents-tile/documents-tile';
export { ErrorMessage as ErrorMessage } from '../types/components/base-components/error-message/error-message';
export { HeaderText as HeaderText } from '../types/components/base-components/header-text/header-text';
export { LoginFooter as LoginFooter } from '../types/components/app-layout/login-footer/login-footer';
export { LoginForm as LoginForm } from '../types/components/forms/login-form/login-form';
export { PageHeader as LoginHeader } from '../types/components/app-layout/login-header/login-header';
export { LoginTitleWrapper as LoginTitleWrapper } from '../types/components/app-layout/login-title-wrapper/login-title-wrapper';
export { MainHeader as MainHeader } from '../types/components/app-layout/main-header/main-header';
export { MainPageContents as MainPageContents } from '../types/components/app-layout/main-page-contents/main-page-contents';
export { MultiBannerBulletPoints as MultiBannerBulletPoints } from '../types/components/base-components/multi-banner/multi-banner-bullet-points/multi-banner-bullet-points';
export { MultiBannerHeader as MultiBannerHeader } from '../types/components/base-components/multi-banner/multi-banner-header/multi-banner-header';
export { MultiBannerTitle as MultiBannerTitle } from '../types/components/base-components/multi-banner/muti-banner-title/multi-banner-title';
export { MultiCarBanner as MultiCarBanner } from '../types/components/app-layout/multi-car-banner/multi-car-banner';
export { NavBar as NavBar } from '../types/components/app-layout/nav-bar/nav-bar';
export { NewNavBarImg as NewNavBarImg } from '../types/components/base-components/new-nav-bar-img/new-nav-bar-img';
export { NewNavBarLogo as NewNavBarLogo } from '../types/components/base-components/new-nav-bar-logo/new-nav-bar-logo';
export { PageHeaderBar as PageHeaderBar } from '../types/components/page-layout/page-header-bar/page-header-bar';
export { PageLogo as PageLogo } from '../types/components/base-components/page-logo/page-logo';
export { PoliciesContainer as PoliciesContainer } from '../types/components/page-layout/policies-container/policies-container';
export { PolicyDetails as PolicyDetails } from '../types/components/page-layout/policy-details/policy-details/policy-details';
export { PolicyManagementTile as PolicyManagementTile } from '../types/components/base-components/policy-management-tile/policy-management-tile';
export { PolicySubsectionHeader as PolicySubsectionHeader } from '../types/components/page-layout/policy-details/policy-subsection-header/policy-subsection-header';
export { PolicyTermContainer as PolicyTermContainer } from '../types/components/page-layout/policy-term-container/policy-term-container';
export { PolicyTile as PolicyTile } from '../types/components/base-components/policy-tile/policy-tile';
export { ProductTile as ProductTile } from '../types/components/base-components/product-tile/product-tile';
export { QuoteButton as QuoteButton } from '../types/components/base-components/quote-button/quote-button';
export { SubSectionTitle as SubSectionTitle } from '../types/components/base-components/sub-section-title/sub-section-title';
export { TextTitleBar as TextTitleBar } from '../types/components/page-layout/text-title-bar/text-title-bar';
export { TileContainer as TileContainer } from '../types/components/page-layout/tile-container/tile-container';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
