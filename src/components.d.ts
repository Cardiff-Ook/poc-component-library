/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { UserDataInterface } from "./interfaces/userDataInterface";
import { PolicyDataInterface } from "./interfaces/policyDataInterface";
import { DocumentDataInterface } from "./interfaces/documentDataInterface";
import { BulletPointInterface } from "./components/base-components/multi-banner/multi-banner-bullet-points/multi-banner-bullet-points";
import { CompOption } from "./components/my-component/my-component";
import { ButtonInterface } from "./components/app-layout/nav-bar/nav-bar";
export namespace Components {
    interface AccountDetails {
        /**
          * Prop: user: object User Account details object
         */
        "user": Array<UserDataInterface> | string;
    }
    interface AccountSettings {
        /**
          * Prop: user: object User Account details object
         */
        "user": Array<UserDataInterface> | string;
    }
    interface ContentContainer {
    }
    interface CoverDetailsContainer {
        /**
          * Prop: coverdetails: Array<PolicyDataInterface> The Policy Data
         */
        "coverdetails": Array<PolicyDataInterface> | string;
    }
    interface CoverDetailsTile {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails": PolicyDataInterface | string;
        /**
          * Prop: coverindex: number Index number of the policy in the list
         */
        "coverindex": number;
    }
    interface DetailsContainer {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails": PolicyDataInterface | string;
        /**
          * Prop: detailstype: string Either "car" or "home"
         */
        "detailstype": string;
    }
    interface DocumentDetails {
        /**
          * Prop: policies: Array<PolicyDataInterface> Array containing Policy Data for the current policies
         */
        "policies": Array<PolicyDataInterface> | string;
    }
    interface DocumentDetailsContainer {
        /**
          * Prop: coverdetails: Array<PolicyDataInterface> Array containing Policy Data
         */
        "coverdetails": Array<PolicyDataInterface> | string;
    }
    interface DocumentDetailsTile {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails": PolicyDataInterface | string;
        /**
          * Prop: coverindex: number Index number of the policy in the list
         */
        "coverindex": number;
    }
    interface DocumentsList {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails": PolicyDataInterface | string;
    }
    interface DocumentsListItem {
        /**
          * Prop: document: object Document Details
         */
        "document": DocumentDataInterface | string;
        /**
          * Prop: documentIndex: number The document index in the document list
         */
        "documentIndex": number;
    }
    interface DocumentsTile {
        /**
          * Prop: policydetails: PolicyDataInterface Policy Data
         */
        "policydetails": PolicyDataInterface;
        /**
          * Prop: policyindex: number Index number of the policy in the list
         */
        "policyindex": number;
    }
    interface HeaderText {
    }
    interface LoginFooter {
    }
    interface LoginForm {
        /**
          * Prop: forgotPasswordUrl: string Page to redirect to if user se;ects forgot password
         */
        "forgotPasswordUrl": string;
    }
    interface LoginHeader {
        /**
          * The brand
         */
        "brand": string;
    }
    interface LoginTitleWrapper {
    }
    interface MainHeader {
        /**
          * Prop: brand: string The brand currently being browsed
         */
        "brand": string;
    }
    interface MainPageContents {
    }
    interface MultiBannerBulletPoints {
        /**
          * Prop: bulletPoints: Array<BulletPointInterface> Array containing all the bullet points to display
         */
        "bulletPoints": Array<BulletPointInterface> | string;
    }
    interface MultiBannerHeader {
    }
    interface MultiBannerTitle {
    }
    interface MultiCarBanner {
    }
    interface MyComponent {
        /**
          * If true, the button is displayed as disabled
         */
        "disabled": boolean;
        /**
          * The text which is shown as label
         */
        "label": string;
        /**
          * Is needed to reference the form data after the form is submitted
         */
        "name": string;
        /**
          * Define the available options in the drop-down list
         */
        "options": CompOption[];
    }
    interface NavBar {
        /**
          * Prop: buttons: Array<ButtonInterface> Array containing all the buttons to display
         */
        "buttons": Array<ButtonInterface> | string;
    }
    interface PageHeaderBar {
        /**
          * Prop: name: string The user name being displayed
         */
        "name": string;
    }
    interface PageLogo {
        /**
          * Prop: brand: string Whichever brand currently being browsed
         */
        "brand": string;
    }
    interface PoliciesContainer {
    }
    interface PolicyDetails {
        /**
          * Prop: policies: Array<PolicyDataInterface> Array containing all the Policy Data
         */
        "policies": Array<PolicyDataInterface> | string;
    }
    interface PolicyManagementTile {
        /**
          * The link for the product
         */
        "linkText": string;
        /**
          * The image to display
         */
        "productImage": string;
        /**
          * The title for the tile
         */
        "titleText": string;
    }
    interface PolicySubsectionHeader {
    }
    interface PolicyTermContainer {
    }
    interface PolicyTile {
        /**
          * Prop: policydetails: PolicyDataInterface Policy Data
         */
        "policydetails": PolicyDataInterface;
        /**
          * Prop: policyindex: number Index number of the policy in the list
         */
        "policyindex": number;
    }
    interface ProductTile {
        /**
          * The link for the product
         */
        "linkText": string;
        /**
          * The image to display
         */
        "productImage": string;
    }
    interface QuoteButton {
    }
    interface SubSectionTitle {
        /**
          * The Page Title to display
         */
        "pagetitle": string;
    }
    interface TextTitleBar {
    }
    interface TileContainer {
        /**
          * Prop: type: tring Sets the tyle according to the received type (options / products)
         */
        "type": string;
    }
}
export interface AccountDetailsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAccountDetailsElement;
}
export interface DocumentsListItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDocumentsListItemElement;
}
export interface LoginFormCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLoginFormElement;
}
declare global {
    interface HTMLAccountDetailsElement extends Components.AccountDetails, HTMLStencilElement {
    }
    var HTMLAccountDetailsElement: {
        prototype: HTMLAccountDetailsElement;
        new (): HTMLAccountDetailsElement;
    };
    interface HTMLAccountSettingsElement extends Components.AccountSettings, HTMLStencilElement {
    }
    var HTMLAccountSettingsElement: {
        prototype: HTMLAccountSettingsElement;
        new (): HTMLAccountSettingsElement;
    };
    interface HTMLContentContainerElement extends Components.ContentContainer, HTMLStencilElement {
    }
    var HTMLContentContainerElement: {
        prototype: HTMLContentContainerElement;
        new (): HTMLContentContainerElement;
    };
    interface HTMLCoverDetailsContainerElement extends Components.CoverDetailsContainer, HTMLStencilElement {
    }
    var HTMLCoverDetailsContainerElement: {
        prototype: HTMLCoverDetailsContainerElement;
        new (): HTMLCoverDetailsContainerElement;
    };
    interface HTMLCoverDetailsTileElement extends Components.CoverDetailsTile, HTMLStencilElement {
    }
    var HTMLCoverDetailsTileElement: {
        prototype: HTMLCoverDetailsTileElement;
        new (): HTMLCoverDetailsTileElement;
    };
    interface HTMLDetailsContainerElement extends Components.DetailsContainer, HTMLStencilElement {
    }
    var HTMLDetailsContainerElement: {
        prototype: HTMLDetailsContainerElement;
        new (): HTMLDetailsContainerElement;
    };
    interface HTMLDocumentDetailsElement extends Components.DocumentDetails, HTMLStencilElement {
    }
    var HTMLDocumentDetailsElement: {
        prototype: HTMLDocumentDetailsElement;
        new (): HTMLDocumentDetailsElement;
    };
    interface HTMLDocumentDetailsContainerElement extends Components.DocumentDetailsContainer, HTMLStencilElement {
    }
    var HTMLDocumentDetailsContainerElement: {
        prototype: HTMLDocumentDetailsContainerElement;
        new (): HTMLDocumentDetailsContainerElement;
    };
    interface HTMLDocumentDetailsTileElement extends Components.DocumentDetailsTile, HTMLStencilElement {
    }
    var HTMLDocumentDetailsTileElement: {
        prototype: HTMLDocumentDetailsTileElement;
        new (): HTMLDocumentDetailsTileElement;
    };
    interface HTMLDocumentsListElement extends Components.DocumentsList, HTMLStencilElement {
    }
    var HTMLDocumentsListElement: {
        prototype: HTMLDocumentsListElement;
        new (): HTMLDocumentsListElement;
    };
    interface HTMLDocumentsListItemElement extends Components.DocumentsListItem, HTMLStencilElement {
    }
    var HTMLDocumentsListItemElement: {
        prototype: HTMLDocumentsListItemElement;
        new (): HTMLDocumentsListItemElement;
    };
    interface HTMLDocumentsTileElement extends Components.DocumentsTile, HTMLStencilElement {
    }
    var HTMLDocumentsTileElement: {
        prototype: HTMLDocumentsTileElement;
        new (): HTMLDocumentsTileElement;
    };
    interface HTMLHeaderTextElement extends Components.HeaderText, HTMLStencilElement {
    }
    var HTMLHeaderTextElement: {
        prototype: HTMLHeaderTextElement;
        new (): HTMLHeaderTextElement;
    };
    interface HTMLLoginFooterElement extends Components.LoginFooter, HTMLStencilElement {
    }
    var HTMLLoginFooterElement: {
        prototype: HTMLLoginFooterElement;
        new (): HTMLLoginFooterElement;
    };
    interface HTMLLoginFormElement extends Components.LoginForm, HTMLStencilElement {
    }
    var HTMLLoginFormElement: {
        prototype: HTMLLoginFormElement;
        new (): HTMLLoginFormElement;
    };
    interface HTMLLoginHeaderElement extends Components.LoginHeader, HTMLStencilElement {
    }
    var HTMLLoginHeaderElement: {
        prototype: HTMLLoginHeaderElement;
        new (): HTMLLoginHeaderElement;
    };
    interface HTMLLoginTitleWrapperElement extends Components.LoginTitleWrapper, HTMLStencilElement {
    }
    var HTMLLoginTitleWrapperElement: {
        prototype: HTMLLoginTitleWrapperElement;
        new (): HTMLLoginTitleWrapperElement;
    };
    interface HTMLMainHeaderElement extends Components.MainHeader, HTMLStencilElement {
    }
    var HTMLMainHeaderElement: {
        prototype: HTMLMainHeaderElement;
        new (): HTMLMainHeaderElement;
    };
    interface HTMLMainPageContentsElement extends Components.MainPageContents, HTMLStencilElement {
    }
    var HTMLMainPageContentsElement: {
        prototype: HTMLMainPageContentsElement;
        new (): HTMLMainPageContentsElement;
    };
    interface HTMLMultiBannerBulletPointsElement extends Components.MultiBannerBulletPoints, HTMLStencilElement {
    }
    var HTMLMultiBannerBulletPointsElement: {
        prototype: HTMLMultiBannerBulletPointsElement;
        new (): HTMLMultiBannerBulletPointsElement;
    };
    interface HTMLMultiBannerHeaderElement extends Components.MultiBannerHeader, HTMLStencilElement {
    }
    var HTMLMultiBannerHeaderElement: {
        prototype: HTMLMultiBannerHeaderElement;
        new (): HTMLMultiBannerHeaderElement;
    };
    interface HTMLMultiBannerTitleElement extends Components.MultiBannerTitle, HTMLStencilElement {
    }
    var HTMLMultiBannerTitleElement: {
        prototype: HTMLMultiBannerTitleElement;
        new (): HTMLMultiBannerTitleElement;
    };
    interface HTMLMultiCarBannerElement extends Components.MultiCarBanner, HTMLStencilElement {
    }
    var HTMLMultiCarBannerElement: {
        prototype: HTMLMultiCarBannerElement;
        new (): HTMLMultiCarBannerElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNavBarElement extends Components.NavBar, HTMLStencilElement {
    }
    var HTMLNavBarElement: {
        prototype: HTMLNavBarElement;
        new (): HTMLNavBarElement;
    };
    interface HTMLPageHeaderBarElement extends Components.PageHeaderBar, HTMLStencilElement {
    }
    var HTMLPageHeaderBarElement: {
        prototype: HTMLPageHeaderBarElement;
        new (): HTMLPageHeaderBarElement;
    };
    interface HTMLPageLogoElement extends Components.PageLogo, HTMLStencilElement {
    }
    var HTMLPageLogoElement: {
        prototype: HTMLPageLogoElement;
        new (): HTMLPageLogoElement;
    };
    interface HTMLPoliciesContainerElement extends Components.PoliciesContainer, HTMLStencilElement {
    }
    var HTMLPoliciesContainerElement: {
        prototype: HTMLPoliciesContainerElement;
        new (): HTMLPoliciesContainerElement;
    };
    interface HTMLPolicyDetailsElement extends Components.PolicyDetails, HTMLStencilElement {
    }
    var HTMLPolicyDetailsElement: {
        prototype: HTMLPolicyDetailsElement;
        new (): HTMLPolicyDetailsElement;
    };
    interface HTMLPolicyManagementTileElement extends Components.PolicyManagementTile, HTMLStencilElement {
    }
    var HTMLPolicyManagementTileElement: {
        prototype: HTMLPolicyManagementTileElement;
        new (): HTMLPolicyManagementTileElement;
    };
    interface HTMLPolicySubsectionHeaderElement extends Components.PolicySubsectionHeader, HTMLStencilElement {
    }
    var HTMLPolicySubsectionHeaderElement: {
        prototype: HTMLPolicySubsectionHeaderElement;
        new (): HTMLPolicySubsectionHeaderElement;
    };
    interface HTMLPolicyTermContainerElement extends Components.PolicyTermContainer, HTMLStencilElement {
    }
    var HTMLPolicyTermContainerElement: {
        prototype: HTMLPolicyTermContainerElement;
        new (): HTMLPolicyTermContainerElement;
    };
    interface HTMLPolicyTileElement extends Components.PolicyTile, HTMLStencilElement {
    }
    var HTMLPolicyTileElement: {
        prototype: HTMLPolicyTileElement;
        new (): HTMLPolicyTileElement;
    };
    interface HTMLProductTileElement extends Components.ProductTile, HTMLStencilElement {
    }
    var HTMLProductTileElement: {
        prototype: HTMLProductTileElement;
        new (): HTMLProductTileElement;
    };
    interface HTMLQuoteButtonElement extends Components.QuoteButton, HTMLStencilElement {
    }
    var HTMLQuoteButtonElement: {
        prototype: HTMLQuoteButtonElement;
        new (): HTMLQuoteButtonElement;
    };
    interface HTMLSubSectionTitleElement extends Components.SubSectionTitle, HTMLStencilElement {
    }
    var HTMLSubSectionTitleElement: {
        prototype: HTMLSubSectionTitleElement;
        new (): HTMLSubSectionTitleElement;
    };
    interface HTMLTextTitleBarElement extends Components.TextTitleBar, HTMLStencilElement {
    }
    var HTMLTextTitleBarElement: {
        prototype: HTMLTextTitleBarElement;
        new (): HTMLTextTitleBarElement;
    };
    interface HTMLTileContainerElement extends Components.TileContainer, HTMLStencilElement {
    }
    var HTMLTileContainerElement: {
        prototype: HTMLTileContainerElement;
        new (): HTMLTileContainerElement;
    };
    interface HTMLElementTagNameMap {
        "account-details": HTMLAccountDetailsElement;
        "account-settings": HTMLAccountSettingsElement;
        "content-container": HTMLContentContainerElement;
        "cover-details-container": HTMLCoverDetailsContainerElement;
        "cover-details-tile": HTMLCoverDetailsTileElement;
        "details-container": HTMLDetailsContainerElement;
        "document-details": HTMLDocumentDetailsElement;
        "document-details-container": HTMLDocumentDetailsContainerElement;
        "document-details-tile": HTMLDocumentDetailsTileElement;
        "documents-list": HTMLDocumentsListElement;
        "documents-list-item": HTMLDocumentsListItemElement;
        "documents-tile": HTMLDocumentsTileElement;
        "header-text": HTMLHeaderTextElement;
        "login-footer": HTMLLoginFooterElement;
        "login-form": HTMLLoginFormElement;
        "login-header": HTMLLoginHeaderElement;
        "login-title-wrapper": HTMLLoginTitleWrapperElement;
        "main-header": HTMLMainHeaderElement;
        "main-page-contents": HTMLMainPageContentsElement;
        "multi-banner-bullet-points": HTMLMultiBannerBulletPointsElement;
        "multi-banner-header": HTMLMultiBannerHeaderElement;
        "multi-banner-title": HTMLMultiBannerTitleElement;
        "multi-car-banner": HTMLMultiCarBannerElement;
        "my-component": HTMLMyComponentElement;
        "nav-bar": HTMLNavBarElement;
        "page-header-bar": HTMLPageHeaderBarElement;
        "page-logo": HTMLPageLogoElement;
        "policies-container": HTMLPoliciesContainerElement;
        "policy-details": HTMLPolicyDetailsElement;
        "policy-management-tile": HTMLPolicyManagementTileElement;
        "policy-subsection-header": HTMLPolicySubsectionHeaderElement;
        "policy-term-container": HTMLPolicyTermContainerElement;
        "policy-tile": HTMLPolicyTileElement;
        "product-tile": HTMLProductTileElement;
        "quote-button": HTMLQuoteButtonElement;
        "sub-section-title": HTMLSubSectionTitleElement;
        "text-title-bar": HTMLTextTitleBarElement;
        "tile-container": HTMLTileContainerElement;
    }
}
declare namespace LocalJSX {
    interface AccountDetails {
        /**
          * Event: loginShouldOccur: EventEmitter Event to fire if data validates
         */
        "onEditUserDetails"?: (event: AccountDetailsCustomEvent<any>) => void;
        /**
          * Prop: user: object User Account details object
         */
        "user"?: Array<UserDataInterface> | string;
    }
    interface AccountSettings {
        /**
          * Prop: user: object User Account details object
         */
        "user"?: Array<UserDataInterface> | string;
    }
    interface ContentContainer {
    }
    interface CoverDetailsContainer {
        /**
          * Prop: coverdetails: Array<PolicyDataInterface> The Policy Data
         */
        "coverdetails"?: Array<PolicyDataInterface> | string;
    }
    interface CoverDetailsTile {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails"?: PolicyDataInterface | string;
        /**
          * Prop: coverindex: number Index number of the policy in the list
         */
        "coverindex"?: number;
    }
    interface DetailsContainer {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails"?: PolicyDataInterface | string;
        /**
          * Prop: detailstype: string Either "car" or "home"
         */
        "detailstype"?: string;
    }
    interface DocumentDetails {
        /**
          * Prop: policies: Array<PolicyDataInterface> Array containing Policy Data for the current policies
         */
        "policies"?: Array<PolicyDataInterface> | string;
    }
    interface DocumentDetailsContainer {
        /**
          * Prop: coverdetails: Array<PolicyDataInterface> Array containing Policy Data
         */
        "coverdetails"?: Array<PolicyDataInterface> | string;
    }
    interface DocumentDetailsTile {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails"?: PolicyDataInterface | string;
        /**
          * Prop: coverindex: number Index number of the policy in the list
         */
        "coverindex"?: number;
    }
    interface DocumentsList {
        /**
          * Prop: coverdetails: PolicyDataInterface Policy Data
         */
        "coverdetails"?: PolicyDataInterface | string;
    }
    interface DocumentsListItem {
        /**
          * Prop: document: object Document Details
         */
        "document"?: DocumentDataInterface | string;
        /**
          * Prop: documentIndex: number The document index in the document list
         */
        "documentIndex"?: number;
        /**
          * Event: downloadDocument: EventEmitter Event to fire if data validates
         */
        "onDownloadDocument"?: (event: DocumentsListItemCustomEvent<any>) => void;
    }
    interface DocumentsTile {
        /**
          * Prop: policydetails: PolicyDataInterface Policy Data
         */
        "policydetails"?: PolicyDataInterface;
        /**
          * Prop: policyindex: number Index number of the policy in the list
         */
        "policyindex"?: number;
    }
    interface HeaderText {
    }
    interface LoginFooter {
    }
    interface LoginForm {
        /**
          * Prop: forgotPasswordUrl: string Page to redirect to if user se;ects forgot password
         */
        "forgotPasswordUrl"?: string;
        /**
          * Event: loginShouldOccur: EventEmitter Event to fire if data validates
         */
        "onLoginShouldOccur"?: (event: LoginFormCustomEvent<any>) => void;
    }
    interface LoginHeader {
        /**
          * The brand
         */
        "brand"?: string;
    }
    interface LoginTitleWrapper {
    }
    interface MainHeader {
        /**
          * Prop: brand: string The brand currently being browsed
         */
        "brand"?: string;
    }
    interface MainPageContents {
    }
    interface MultiBannerBulletPoints {
        /**
          * Prop: bulletPoints: Array<BulletPointInterface> Array containing all the bullet points to display
         */
        "bulletPoints"?: Array<BulletPointInterface> | string;
    }
    interface MultiBannerHeader {
    }
    interface MultiBannerTitle {
    }
    interface MultiCarBanner {
    }
    interface MyComponent {
        /**
          * If true, the button is displayed as disabled
         */
        "disabled"?: boolean;
        /**
          * The text which is shown as label
         */
        "label"?: string;
        /**
          * Is needed to reference the form data after the form is submitted
         */
        "name"?: string;
        /**
          * Define the available options in the drop-down list
         */
        "options"?: CompOption[];
    }
    interface NavBar {
        /**
          * Prop: buttons: Array<ButtonInterface> Array containing all the buttons to display
         */
        "buttons"?: Array<ButtonInterface> | string;
    }
    interface PageHeaderBar {
        /**
          * Prop: name: string The user name being displayed
         */
        "name"?: string;
    }
    interface PageLogo {
        /**
          * Prop: brand: string Whichever brand currently being browsed
         */
        "brand"?: string;
    }
    interface PoliciesContainer {
    }
    interface PolicyDetails {
        /**
          * Prop: policies: Array<PolicyDataInterface> Array containing all the Policy Data
         */
        "policies"?: Array<PolicyDataInterface> | string;
    }
    interface PolicyManagementTile {
        /**
          * The link for the product
         */
        "linkText"?: string;
        /**
          * The image to display
         */
        "productImage"?: string;
        /**
          * The title for the tile
         */
        "titleText"?: string;
    }
    interface PolicySubsectionHeader {
    }
    interface PolicyTermContainer {
    }
    interface PolicyTile {
        /**
          * Prop: policydetails: PolicyDataInterface Policy Data
         */
        "policydetails"?: PolicyDataInterface;
        /**
          * Prop: policyindex: number Index number of the policy in the list
         */
        "policyindex"?: number;
    }
    interface ProductTile {
        /**
          * The link for the product
         */
        "linkText"?: string;
        /**
          * The image to display
         */
        "productImage"?: string;
    }
    interface QuoteButton {
    }
    interface SubSectionTitle {
        /**
          * The Page Title to display
         */
        "pagetitle"?: string;
    }
    interface TextTitleBar {
    }
    interface TileContainer {
        /**
          * Prop: type: tring Sets the tyle according to the received type (options / products)
         */
        "type"?: string;
    }
    interface IntrinsicElements {
        "account-details": AccountDetails;
        "account-settings": AccountSettings;
        "content-container": ContentContainer;
        "cover-details-container": CoverDetailsContainer;
        "cover-details-tile": CoverDetailsTile;
        "details-container": DetailsContainer;
        "document-details": DocumentDetails;
        "document-details-container": DocumentDetailsContainer;
        "document-details-tile": DocumentDetailsTile;
        "documents-list": DocumentsList;
        "documents-list-item": DocumentsListItem;
        "documents-tile": DocumentsTile;
        "header-text": HeaderText;
        "login-footer": LoginFooter;
        "login-form": LoginForm;
        "login-header": LoginHeader;
        "login-title-wrapper": LoginTitleWrapper;
        "main-header": MainHeader;
        "main-page-contents": MainPageContents;
        "multi-banner-bullet-points": MultiBannerBulletPoints;
        "multi-banner-header": MultiBannerHeader;
        "multi-banner-title": MultiBannerTitle;
        "multi-car-banner": MultiCarBanner;
        "my-component": MyComponent;
        "nav-bar": NavBar;
        "page-header-bar": PageHeaderBar;
        "page-logo": PageLogo;
        "policies-container": PoliciesContainer;
        "policy-details": PolicyDetails;
        "policy-management-tile": PolicyManagementTile;
        "policy-subsection-header": PolicySubsectionHeader;
        "policy-term-container": PolicyTermContainer;
        "policy-tile": PolicyTile;
        "product-tile": ProductTile;
        "quote-button": QuoteButton;
        "sub-section-title": SubSectionTitle;
        "text-title-bar": TextTitleBar;
        "tile-container": TileContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "account-details": LocalJSX.AccountDetails & JSXBase.HTMLAttributes<HTMLAccountDetailsElement>;
            "account-settings": LocalJSX.AccountSettings & JSXBase.HTMLAttributes<HTMLAccountSettingsElement>;
            "content-container": LocalJSX.ContentContainer & JSXBase.HTMLAttributes<HTMLContentContainerElement>;
            "cover-details-container": LocalJSX.CoverDetailsContainer & JSXBase.HTMLAttributes<HTMLCoverDetailsContainerElement>;
            "cover-details-tile": LocalJSX.CoverDetailsTile & JSXBase.HTMLAttributes<HTMLCoverDetailsTileElement>;
            "details-container": LocalJSX.DetailsContainer & JSXBase.HTMLAttributes<HTMLDetailsContainerElement>;
            "document-details": LocalJSX.DocumentDetails & JSXBase.HTMLAttributes<HTMLDocumentDetailsElement>;
            "document-details-container": LocalJSX.DocumentDetailsContainer & JSXBase.HTMLAttributes<HTMLDocumentDetailsContainerElement>;
            "document-details-tile": LocalJSX.DocumentDetailsTile & JSXBase.HTMLAttributes<HTMLDocumentDetailsTileElement>;
            "documents-list": LocalJSX.DocumentsList & JSXBase.HTMLAttributes<HTMLDocumentsListElement>;
            "documents-list-item": LocalJSX.DocumentsListItem & JSXBase.HTMLAttributes<HTMLDocumentsListItemElement>;
            "documents-tile": LocalJSX.DocumentsTile & JSXBase.HTMLAttributes<HTMLDocumentsTileElement>;
            "header-text": LocalJSX.HeaderText & JSXBase.HTMLAttributes<HTMLHeaderTextElement>;
            "login-footer": LocalJSX.LoginFooter & JSXBase.HTMLAttributes<HTMLLoginFooterElement>;
            "login-form": LocalJSX.LoginForm & JSXBase.HTMLAttributes<HTMLLoginFormElement>;
            "login-header": LocalJSX.LoginHeader & JSXBase.HTMLAttributes<HTMLLoginHeaderElement>;
            "login-title-wrapper": LocalJSX.LoginTitleWrapper & JSXBase.HTMLAttributes<HTMLLoginTitleWrapperElement>;
            "main-header": LocalJSX.MainHeader & JSXBase.HTMLAttributes<HTMLMainHeaderElement>;
            "main-page-contents": LocalJSX.MainPageContents & JSXBase.HTMLAttributes<HTMLMainPageContentsElement>;
            "multi-banner-bullet-points": LocalJSX.MultiBannerBulletPoints & JSXBase.HTMLAttributes<HTMLMultiBannerBulletPointsElement>;
            "multi-banner-header": LocalJSX.MultiBannerHeader & JSXBase.HTMLAttributes<HTMLMultiBannerHeaderElement>;
            "multi-banner-title": LocalJSX.MultiBannerTitle & JSXBase.HTMLAttributes<HTMLMultiBannerTitleElement>;
            "multi-car-banner": LocalJSX.MultiCarBanner & JSXBase.HTMLAttributes<HTMLMultiCarBannerElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nav-bar": LocalJSX.NavBar & JSXBase.HTMLAttributes<HTMLNavBarElement>;
            "page-header-bar": LocalJSX.PageHeaderBar & JSXBase.HTMLAttributes<HTMLPageHeaderBarElement>;
            "page-logo": LocalJSX.PageLogo & JSXBase.HTMLAttributes<HTMLPageLogoElement>;
            "policies-container": LocalJSX.PoliciesContainer & JSXBase.HTMLAttributes<HTMLPoliciesContainerElement>;
            "policy-details": LocalJSX.PolicyDetails & JSXBase.HTMLAttributes<HTMLPolicyDetailsElement>;
            "policy-management-tile": LocalJSX.PolicyManagementTile & JSXBase.HTMLAttributes<HTMLPolicyManagementTileElement>;
            "policy-subsection-header": LocalJSX.PolicySubsectionHeader & JSXBase.HTMLAttributes<HTMLPolicySubsectionHeaderElement>;
            "policy-term-container": LocalJSX.PolicyTermContainer & JSXBase.HTMLAttributes<HTMLPolicyTermContainerElement>;
            "policy-tile": LocalJSX.PolicyTile & JSXBase.HTMLAttributes<HTMLPolicyTileElement>;
            "product-tile": LocalJSX.ProductTile & JSXBase.HTMLAttributes<HTMLProductTileElement>;
            "quote-button": LocalJSX.QuoteButton & JSXBase.HTMLAttributes<HTMLQuoteButtonElement>;
            "sub-section-title": LocalJSX.SubSectionTitle & JSXBase.HTMLAttributes<HTMLSubSectionTitleElement>;
            "text-title-bar": LocalJSX.TextTitleBar & JSXBase.HTMLAttributes<HTMLTextTitleBarElement>;
            "tile-container": LocalJSX.TileContainer & JSXBase.HTMLAttributes<HTMLTileContainerElement>;
        }
    }
}
