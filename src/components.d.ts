/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LoginTitleWrapper {
        /**
          * The text to display as the page title
         */
        "titleText": string;
    }
    interface PageHeader {
        /**
          * The brand
         */
        "brand": string;
    }
    interface TextTitleBar {
        /**
          * The text to display
         */
        "titleText": string;
    }
}
declare global {
    interface HTMLLoginTitleWrapperElement extends Components.LoginTitleWrapper, HTMLStencilElement {
    }
    var HTMLLoginTitleWrapperElement: {
        prototype: HTMLLoginTitleWrapperElement;
        new (): HTMLLoginTitleWrapperElement;
    };
    interface HTMLPageHeaderElement extends Components.PageHeader, HTMLStencilElement {
    }
    var HTMLPageHeaderElement: {
        prototype: HTMLPageHeaderElement;
        new (): HTMLPageHeaderElement;
    };
    interface HTMLTextTitleBarElement extends Components.TextTitleBar, HTMLStencilElement {
    }
    var HTMLTextTitleBarElement: {
        prototype: HTMLTextTitleBarElement;
        new (): HTMLTextTitleBarElement;
    };
    interface HTMLElementTagNameMap {
        "login-title-wrapper": HTMLLoginTitleWrapperElement;
        "page-header": HTMLPageHeaderElement;
        "text-title-bar": HTMLTextTitleBarElement;
    }
}
declare namespace LocalJSX {
    interface LoginTitleWrapper {
        /**
          * The text to display as the page title
         */
        "titleText"?: string;
    }
    interface PageHeader {
        /**
          * The brand
         */
        "brand"?: string;
    }
    interface TextTitleBar {
        /**
          * The text to display
         */
        "titleText"?: string;
    }
    interface IntrinsicElements {
        "login-title-wrapper": LoginTitleWrapper;
        "page-header": PageHeader;
        "text-title-bar": TextTitleBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "login-title-wrapper": LocalJSX.LoginTitleWrapper & JSXBase.HTMLAttributes<HTMLLoginTitleWrapperElement>;
            "page-header": LocalJSX.PageHeader & JSXBase.HTMLAttributes<HTMLPageHeaderElement>;
            "text-title-bar": LocalJSX.TextTitleBar & JSXBase.HTMLAttributes<HTMLTextTitleBarElement>;
        }
    }
}
