import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Like Button
 * @shortdesc Like button component
 * @fbdoc https://developers.facebook.com/docs/plugins/like-button
 * @description
 * A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.
 * You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.
 * @usage
 * ```html
 * <fb-like href="https://www.facebook.com/zuck"></fb-like>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBLikeComponent extends FBMLComponent {
    /**
     * The verb to display on the button. Can be either `like` or `recommend`.
     * Defaults to `like`.
     */
    action: string;
    /**
     * The color scheme used by the plugin for any text outside of the button itself. Can be `light` or `dark`.
     * Defaults to `light`.
     */
    colorScheme: string;
    /**
     * The absolute URL of the page that will be liked.
     * Defaults to the current URL.
     */
    href: string;
    /**
     * If your web site or online service, or a portion of your service, is directed to children under 13 [you must enable this](https://developers.facebook.com/docs/plugins/restrictions/).
     * Defaults to `false`.
     */
    kidDirectedSite: boolean;
    /**
     * Selects one of the different layouts that are available for the plugin.
     * Can be one of `standard`, `button_count`, `button` or `box_count`.
     * See the [FAQ](https://developers.facebook.com/docs/plugins/like-button#faqlayout) for more details.
     * Defaults to `standard`.
     */
    layout: string;
    /**
     * A label for tracking referrals which must be less than 50 characters and can contain alphanumeric characters and some punctuation (currently +/=-.:_).
     * See the [FAQ](https://developers.facebook.com/docs/plugins/faqs#ref) for more details.
     */
    ref: string;
    /**
     * Specifies whether to include a share button beside the Like button.
     * This only works with the XFBML version.
     * Defaults to `false`.
     */
    share: boolean;
    /**
     * Specifies whether to display profile photos below the button (standard layout only).
     * You must not enable this on child-directed sites.
     * Defaults to `false`.
     */
    showFaces: boolean;
    /**
     * The button is offered in 2 sizes i.e. `large` and `small`.
     * Defaults to `small`.
     */
    size: string;
    /**
     * The width of the plugin (standard layout only), which is subject to the minimum and default width.
     * See [Layout Settings](https://developers.facebook.com/docs/plugins/like-button#faqlayout) in the official docs for more details.
     */
    width: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBLikeComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBLikeComponent, "fb-like", never, {
    "action": "action";
    "colorScheme": "colorScheme";
    "href": "href";
    "kidDirectedSite": "kidDirectedSite";
    "layout": "layout";
    "ref": "ref";
    "share": "share";
    "showFaces": "showFaces";
    "size": "size";
    "width": "width";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItbGlrZS5kLnRzIiwic291cmNlcyI6WyJmYi1saWtlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50Jztcbi8qKlxuICogQG5hbWUgTGlrZSBCdXR0b25cbiAqIEBzaG9ydGRlc2MgTGlrZSBidXR0b24gY29tcG9uZW50XG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvbGlrZS1idXR0b25cbiAqIEBkZXNjcmlwdGlvblxuICogQSBzaW5nbGUgY2xpY2sgb24gdGhlIExpa2UgYnV0dG9uIHdpbGwgJ2xpa2UnIHBpZWNlcyBvZiBjb250ZW50IG9uIHRoZSB3ZWIgYW5kIHNoYXJlIHRoZW0gb24gRmFjZWJvb2suXG4gKiBZb3UgY2FuIGFsc28gZGlzcGxheSBhIFNoYXJlIGJ1dHRvbiBuZXh0IHRvIHRoZSBMaWtlIGJ1dHRvbiB0byBsZXQgcGVvcGxlIGFkZCBhIHBlcnNvbmFsIG1lc3NhZ2UgYW5kIGN1c3RvbWl6ZSB3aG8gdGhleSBzaGFyZSB3aXRoLlxuICogQHVzYWdlXG4gKiBgYGBodG1sXG4gKiA8ZmItbGlrZSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3p1Y2tcIj48L2ZiLWxpa2U+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRkJMaWtlQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIHZlcmIgdG8gZGlzcGxheSBvbiB0aGUgYnV0dG9uLiBDYW4gYmUgZWl0aGVyIGBsaWtlYCBvciBgcmVjb21tZW5kYC5cbiAgICAgKiBEZWZhdWx0cyB0byBgbGlrZWAuXG4gICAgICovXG4gICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIHNjaGVtZSB1c2VkIGJ5IHRoZSBwbHVnaW4gZm9yIGFueSB0ZXh0IG91dHNpZGUgb2YgdGhlIGJ1dHRvbiBpdHNlbGYuIENhbiBiZSBgbGlnaHRgIG9yIGBkYXJrYC5cbiAgICAgKiBEZWZhdWx0cyB0byBgbGlnaHRgLlxuICAgICAqL1xuICAgIGNvbG9yU2NoZW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIGFic29sdXRlIFVSTCBvZiB0aGUgcGFnZSB0aGF0IHdpbGwgYmUgbGlrZWQuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgVVJMLlxuICAgICAqL1xuICAgIGhyZWY6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBJZiB5b3VyIHdlYiBzaXRlIG9yIG9ubGluZSBzZXJ2aWNlLCBvciBhIHBvcnRpb24gb2YgeW91ciBzZXJ2aWNlLCBpcyBkaXJlY3RlZCB0byBjaGlsZHJlbiB1bmRlciAxMyBbeW91IG11c3QgZW5hYmxlIHRoaXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3Jlc3RyaWN0aW9ucy8pLlxuICAgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAga2lkRGlyZWN0ZWRTaXRlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgb25lIG9mIHRoZSBkaWZmZXJlbnQgbGF5b3V0cyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIHRoZSBwbHVnaW4uXG4gICAgICogQ2FuIGJlIG9uZSBvZiBgc3RhbmRhcmRgLCBgYnV0dG9uX2NvdW50YCwgYGJ1dHRvbmAgb3IgYGJveF9jb3VudGAuXG4gICAgICogU2VlIHRoZSBbRkFRXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9saWtlLWJ1dHRvbiNmYXFsYXlvdXQpIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICogRGVmYXVsdHMgdG8gYHN0YW5kYXJkYC5cbiAgICAgKi9cbiAgICBsYXlvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIGxhYmVsIGZvciB0cmFja2luZyByZWZlcnJhbHMgd2hpY2ggbXVzdCBiZSBsZXNzIHRoYW4gNTAgY2hhcmFjdGVycyBhbmQgY2FuIGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYW5kIHNvbWUgcHVuY3R1YXRpb24gKGN1cnJlbnRseSArLz0tLjpfKS5cbiAgICAgKiBTZWUgdGhlIFtGQVFdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2ZhcXMjcmVmKSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIHJlZjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGluY2x1ZGUgYSBzaGFyZSBidXR0b24gYmVzaWRlIHRoZSBMaWtlIGJ1dHRvbi5cbiAgICAgKiBUaGlzIG9ubHkgd29ya3Mgd2l0aCB0aGUgWEZCTUwgdmVyc2lvbi5cbiAgICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHNoYXJlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRvIGRpc3BsYXkgcHJvZmlsZSBwaG90b3MgYmVsb3cgdGhlIGJ1dHRvbiAoc3RhbmRhcmQgbGF5b3V0IG9ubHkpLlxuICAgICAqIFlvdSBtdXN0IG5vdCBlbmFibGUgdGhpcyBvbiBjaGlsZC1kaXJlY3RlZCBzaXRlcy5cbiAgICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHNob3dGYWNlczogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgYnV0dG9uIGlzIG9mZmVyZWQgaW4gMiBzaXplcyBpLmUuIGBsYXJnZWAgYW5kIGBzbWFsbGAuXG4gICAgICogRGVmYXVsdHMgdG8gYHNtYWxsYC5cbiAgICAgKi9cbiAgICBzaXplOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBwbHVnaW4gKHN0YW5kYXJkIGxheW91dCBvbmx5KSwgd2hpY2ggaXMgc3ViamVjdCB0byB0aGUgbWluaW11bSBhbmQgZGVmYXVsdCB3aWR0aC5cbiAgICAgKiBTZWUgW0xheW91dCBTZXR0aW5nc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvbGlrZS1idXR0b24jZmFxbGF5b3V0KSBpbiB0aGUgb2ZmaWNpYWwgZG9jcyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJuZDogUmVuZGVyZXIpO1xufVxuIl19