import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBPageComponent extends FBMLComponent {
    /**
     * The URL of the Facebook Page
     */
    href: string;
    /**
     * The pixel width of the plugin. Min. is `180` & Max. is `500`.
     * Defaults to `340`.
     */
    width: number;
    /**
     * The pixel height of the plugin. Min. is `70`.
     * Defaults to `500`.
     */
    height: number;
    /**
     * Tabs to render i.e. `timeline`, `events`, `messages`. Use a comma-separated list to add multiple tabs, i.e. `timeline`, `events`.
     * Defaults to `timeline`.
     */
    tabs: string;
    /**
     * Hide cover photo in the header.
     * Defaults to `false`.
     */
    hideCover: boolean;
    /**
     * Show profile photos when friends like this.
     * Defaults to `true`.
     */
    showFacepile: boolean;
    /**
     * Hide the custom call to action button (if available).
     * Default to `false`.
     */
    hideCTA: boolean;
    /**
     * Use the small header instead.
     * Defaults to `false`.
     */
    smallHeader: boolean;
    /**
     * Try to fit inside the container width.
     * Defaults to `true`.
     */
    adaptContainerWidth: boolean;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBPageComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBPageComponent, "fb-page", never, {
    "href": "href";
    "width": "width";
    "height": "height";
    "tabs": "tabs";
    "hideCover": "hideCover";
    "showFacepile": "showFacepile";
    "hideCTA": "hideCTA";
    "smallHeader": "smallHeader";
    "adaptContainerWidth": "adaptContainerWidth";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcGFnZS5kLnRzIiwic291cmNlcyI6WyJmYi1wYWdlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50Jztcbi8qKlxuICogQG5hbWUgUGFnZSBQbHVnaW5cbiAqIEBzaG9ydGRlc2MgUGFnZSBwbHVnaW4gY29tcG9uZW50XG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvcGFnZS1wbHVnaW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFBhZ2UgcGx1Z2luIGxldHMgeW91IGVhc2lseSBlbWJlZCBhbmQgcHJvbW90ZSBhbnkgRmFjZWJvb2sgUGFnZSBvbiB5b3VyIHdlYnNpdGUuIEp1c3QgbGlrZSBvbiBGYWNlYm9vaywgeW91ciB2aXNpdG9ycyBjYW4gbGlrZSBhbmQgc2hhcmUgdGhlIFBhZ2Ugd2l0aG91dCBsZWF2aW5nIHlvdXIgc2l0ZS5cbiAqIEB1c2FnZVxuICogYGBgaHRtbFxuICogPGZiLXBhZ2UgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suY29tL2ZhY2Vib29rXCI+PC9mYi1wYWdlPlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZCUGFnZUNvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgdGhlIEZhY2Vib29rIFBhZ2VcbiAgICAgKi9cbiAgICBocmVmOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVGhlIHBpeGVsIHdpZHRoIG9mIHRoZSBwbHVnaW4uIE1pbi4gaXMgYDE4MGAgJiBNYXguIGlzIGA1MDBgLlxuICAgICAqIERlZmF1bHRzIHRvIGAzNDBgLlxuICAgICAqL1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIHBpeGVsIGhlaWdodCBvZiB0aGUgcGx1Z2luLiBNaW4uIGlzIGA3MGAuXG4gICAgICogRGVmYXVsdHMgdG8gYDUwMGAuXG4gICAgICovXG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGFicyB0byByZW5kZXIgaS5lLiBgdGltZWxpbmVgLCBgZXZlbnRzYCwgYG1lc3NhZ2VzYC4gVXNlIGEgY29tbWEtc2VwYXJhdGVkIGxpc3QgdG8gYWRkIG11bHRpcGxlIHRhYnMsIGkuZS4gYHRpbWVsaW5lYCwgYGV2ZW50c2AuXG4gICAgICogRGVmYXVsdHMgdG8gYHRpbWVsaW5lYC5cbiAgICAgKi9cbiAgICB0YWJzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSGlkZSBjb3ZlciBwaG90byBpbiB0aGUgaGVhZGVyLlxuICAgICAqIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgaGlkZUNvdmVyOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNob3cgcHJvZmlsZSBwaG90b3Mgd2hlbiBmcmllbmRzIGxpa2UgdGhpcy5cbiAgICAgKiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAgICovXG4gICAgc2hvd0ZhY2VwaWxlOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIGN1c3RvbSBjYWxsIHRvIGFjdGlvbiBidXR0b24gKGlmIGF2YWlsYWJsZSkuXG4gICAgICogRGVmYXVsdCB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIGhpZGVDVEE6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVXNlIHRoZSBzbWFsbCBoZWFkZXIgaW5zdGVhZC5cbiAgICAgKiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHNtYWxsSGVhZGVyOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRyeSB0byBmaXQgaW5zaWRlIHRoZSBjb250YWluZXIgd2lkdGguXG4gICAgICogRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgICAqL1xuICAgIGFkYXB0Q29udGFpbmVyV2lkdGg6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJuZDogUmVuZGVyZXIpO1xufVxuIl19