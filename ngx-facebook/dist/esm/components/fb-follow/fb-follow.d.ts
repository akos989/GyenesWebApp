import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBFollowComponent extends FBMLComponent {
    /**
     * The color scheme used by the plugin. Can be `light` or `dark`. Defaults to `light`.
     */
    colorScheme: string;
    /**
     * The Facebook.com profile URL of the user to follow.
     */
    href: string;
    /**
     * If your web site or online service, or a portion of your service, is directed to children under 13 you must enable this. Defaults to `false`.
     */
    kidDirectedSite: boolean;
    /**
     * Selects one of the different layouts that are available for the plugin. Can be one of `standard`, `button_count`, or `box_count`.
     * Defaults to `standard`.
     */
    layout: string;
    /**
     * Specifies whether to display profile photos below the button. Defaults to `false`.
     */
    showFaces: string;
    /**
     * The button is offered in 2 sizes i.e. `large` and `small`. Defaults to `small`.
     */
    size: string;
    /**
     * The width of the plugin. The layout you choose affects the minimum and default widths you can use.
     */
    width: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBFollowComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBFollowComponent, "fb-follow", never, {
    "colorScheme": "colorScheme";
    "href": "href";
    "kidDirectedSite": "kidDirectedSite";
    "layout": "layout";
    "showFaces": "showFaces";
    "size": "size";
    "width": "width";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItZm9sbG93LmQudHMiLCJzb3VyY2VzIjpbImZiLWZvbGxvdy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XG4vKipcbiAqIEBuYW1lIEZvbGxvdyBCdXR0b25cbiAqIEBzaG9ydGRlc2MgRm9sbG93IGJ1dHRvbiBjb21wb25lbnRcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9mb2xsb3ctYnV0dG9uXG4gKiBAZGVzY3JpcHRpb24gVGhlIEZvbGxvdyBidXR0b24gbGV0cyBwZW9wbGUgc3Vic2NyaWJlIHRvIHRoZSBwdWJsaWMgdXBkYXRlcyBvZiBvdGhlcnMgb24gRmFjZWJvb2suXG4gKiBAdXNhZ2VcbiAqIGBgYGh0bWxcbiAqIDxmYi1mb2xsb3cgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS96dWNrXCI+PC9mYi1mb2xsb3c+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRkJGb2xsb3dDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igc2NoZW1lIHVzZWQgYnkgdGhlIHBsdWdpbi4gQ2FuIGJlIGBsaWdodGAgb3IgYGRhcmtgLiBEZWZhdWx0cyB0byBgbGlnaHRgLlxuICAgICAqL1xuICAgIGNvbG9yU2NoZW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIEZhY2Vib29rLmNvbSBwcm9maWxlIFVSTCBvZiB0aGUgdXNlciB0byBmb2xsb3cuXG4gICAgICovXG4gICAgaHJlZjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIHlvdXIgd2ViIHNpdGUgb3Igb25saW5lIHNlcnZpY2UsIG9yIGEgcG9ydGlvbiBvZiB5b3VyIHNlcnZpY2UsIGlzIGRpcmVjdGVkIHRvIGNoaWxkcmVuIHVuZGVyIDEzIHlvdSBtdXN0IGVuYWJsZSB0aGlzLiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGtpZERpcmVjdGVkU2l0ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIG9uZSBvZiB0aGUgZGlmZmVyZW50IGxheW91dHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciB0aGUgcGx1Z2luLiBDYW4gYmUgb25lIG9mIGBzdGFuZGFyZGAsIGBidXR0b25fY291bnRgLCBvciBgYm94X2NvdW50YC5cbiAgICAgKiBEZWZhdWx0cyB0byBgc3RhbmRhcmRgLlxuICAgICAqL1xuICAgIGxheW91dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3BsYXkgcHJvZmlsZSBwaG90b3MgYmVsb3cgdGhlIGJ1dHRvbi4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBzaG93RmFjZXM6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgYnV0dG9uIGlzIG9mZmVyZWQgaW4gMiBzaXplcyBpLmUuIGBsYXJnZWAgYW5kIGBzbWFsbGAuIERlZmF1bHRzIHRvIGBzbWFsbGAuXG4gICAgICovXG4gICAgc2l6ZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgcGx1Z2luLiBUaGUgbGF5b3V0IHlvdSBjaG9vc2UgYWZmZWN0cyB0aGUgbWluaW11bSBhbmQgZGVmYXVsdCB3aWR0aHMgeW91IGNhbiB1c2UuXG4gICAgICovXG4gICAgd2lkdGg6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcm5kOiBSZW5kZXJlcik7XG59XG4iXX0=