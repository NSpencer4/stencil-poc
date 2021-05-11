/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SmgCta {
        "text": string;
        "variant": string;
    }
}
declare global {
    interface HTMLSmgCtaElement extends Components.SmgCta, HTMLStencilElement {
    }
    var HTMLSmgCtaElement: {
        prototype: HTMLSmgCtaElement;
        new (): HTMLSmgCtaElement;
    };
    interface HTMLElementTagNameMap {
        "poc-cta": HTMLSmgCtaElement;
    }
}
declare namespace LocalJSX {
    interface SmgCta {
        "text"?: string;
        "variant"?: string;
    }
    interface IntrinsicElements {
        "poc-cta": SmgCta;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "poc-cta": LocalJSX.SmgCta & JSXBase.HTMLAttributes<HTMLSmgCtaElement>;
        }
    }
}
