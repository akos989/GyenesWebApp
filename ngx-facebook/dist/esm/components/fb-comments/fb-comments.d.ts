import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Comments
 * @shortdesc Comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/comments
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-comments>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBCommentsComponent extends FBMLComponent {
    /**
     * The color scheme used by the comments plugin. Can be `light` or `dark`. Defaults to `light`.
     */
    colorscheme: string;
    /**
     * The absolute URL that comments posted in the plugin will be permanently associated with.
     * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
     * Defaults to current URL.
     */
    href: string;
    /**
     * A boolean value that specifies whether to show the mobile-optimized version or not. If no value is given, it will be automatically detected.
     */
    mobile: boolean;
    /**
     * The number of comments to show by default. The minimum value is `1`. Defaults to `10`.
     */
    numposts: number;
    /**
     * The order to use when displaying comments. Can be `social`, `reverse_time`, or `time`. The different order types are explained [in the FAQ](https://developers.facebook.com/docs/plugins/comments#faqorder). Defaults to `social`
     */
    orderBy: string;
    /**
     * The width of the comments plugin on the webpage.
     * This can be either a pixel value or a percentage (such as 100%) for fluid width.
     * The mobile version of the comments plugin ignores the width parameter and instead has a fluid width of 100%.
     * The minimum width supported by the comments plugin is 320px.
     * Defaults to `550px`.
     */
    width: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBCommentsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBCommentsComponent, "fb-comments", never, {
    "colorscheme": "colorscheme";
    "href": "href";
    "mobile": "mobile";
    "numposts": "numposts";
    "orderBy": "orderBy";
    "width": "width";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItY29tbWVudHMuZC50cyIsInNvdXJjZXMiOlsiZmItY29tbWVudHMuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XG4vKipcbiAqIEBuYW1lIENvbW1lbnRzXG4gKiBAc2hvcnRkZXNjIENvbW1lbnRzIGNvbXBvbmVudFxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2NvbW1lbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBjb21tZW50cyBwbHVnaW4gbGV0cyBwZW9wbGUgY29tbWVudCBvbiBjb250ZW50IG9uIHlvdXIgc2l0ZSB1c2luZyB0aGVpciBGYWNlYm9vayBhY2NvdW50LlxuICogUGVvcGxlIGNhbiBjaG9vc2UgdG8gc2hhcmUgdGhlaXIgY29tbWVudCBhY3Rpdml0eSB3aXRoIHRoZWlyIGZyaWVuZHMgKGFuZCBmcmllbmRzIG9mIHRoZWlyIGZyaWVuZHMpIG9uIEZhY2Vib29rIGFzIHdlbGwuXG4gKiBUaGUgY29tbWVudHMgcGx1Z2luIGFsc28gaW5jbHVkZXMgYnVpbHQtaW4gbW9kZXJhdGlvbiB0b29scyBhbmQgc29jaWFsIHJlbGV2YW5jZSByYW5raW5nLlxuICpcbiAqIEB1c2FnZVxuICogYGBgaHRtbFxuICogPGZiLWNvbW1lbnRzPjwvZmItY29tbWVudHM+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRkJDb21tZW50c0NvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBzY2hlbWUgdXNlZCBieSB0aGUgY29tbWVudHMgcGx1Z2luLiBDYW4gYmUgYGxpZ2h0YCBvciBgZGFya2AuIERlZmF1bHRzIHRvIGBsaWdodGAuXG4gICAgICovXG4gICAgY29sb3JzY2hlbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgYWJzb2x1dGUgVVJMIHRoYXQgY29tbWVudHMgcG9zdGVkIGluIHRoZSBwbHVnaW4gd2lsbCBiZSBwZXJtYW5lbnRseSBhc3NvY2lhdGVkIHdpdGguXG4gICAgICogQWxsIHN0b3JpZXMgc2hhcmVkIG9uIEZhY2Vib29rIGFib3V0IGNvbW1lbnRzIHBvc3RlZCB1c2luZyB0aGUgY29tbWVudHMgcGx1Z2luIHdpbGwgbGluayB0byB0aGlzIFVSTC5cbiAgICAgKiBEZWZhdWx0cyB0byBjdXJyZW50IFVSTC5cbiAgICAgKi9cbiAgICBocmVmOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBib29sZWFuIHZhbHVlIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdG8gc2hvdyB0aGUgbW9iaWxlLW9wdGltaXplZCB2ZXJzaW9uIG9yIG5vdC4gSWYgbm8gdmFsdWUgaXMgZ2l2ZW4sIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSBkZXRlY3RlZC5cbiAgICAgKi9cbiAgICBtb2JpbGU6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBjb21tZW50cyB0byBzaG93IGJ5IGRlZmF1bHQuIFRoZSBtaW5pbXVtIHZhbHVlIGlzIGAxYC4gRGVmYXVsdHMgdG8gYDEwYC5cbiAgICAgKi9cbiAgICBudW1wb3N0czogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciB0byB1c2Ugd2hlbiBkaXNwbGF5aW5nIGNvbW1lbnRzLiBDYW4gYmUgYHNvY2lhbGAsIGByZXZlcnNlX3RpbWVgLCBvciBgdGltZWAuIFRoZSBkaWZmZXJlbnQgb3JkZXIgdHlwZXMgYXJlIGV4cGxhaW5lZCBbaW4gdGhlIEZBUV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvY29tbWVudHMjZmFxb3JkZXIpLiBEZWZhdWx0cyB0byBgc29jaWFsYFxuICAgICAqL1xuICAgIG9yZGVyQnk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGNvbW1lbnRzIHBsdWdpbiBvbiB0aGUgd2VicGFnZS5cbiAgICAgKiBUaGlzIGNhbiBiZSBlaXRoZXIgYSBwaXhlbCB2YWx1ZSBvciBhIHBlcmNlbnRhZ2UgKHN1Y2ggYXMgMTAwJSkgZm9yIGZsdWlkIHdpZHRoLlxuICAgICAqIFRoZSBtb2JpbGUgdmVyc2lvbiBvZiB0aGUgY29tbWVudHMgcGx1Z2luIGlnbm9yZXMgdGhlIHdpZHRoIHBhcmFtZXRlciBhbmQgaW5zdGVhZCBoYXMgYSBmbHVpZCB3aWR0aCBvZiAxMDAlLlxuICAgICAqIFRoZSBtaW5pbXVtIHdpZHRoIHN1cHBvcnRlZCBieSB0aGUgY29tbWVudHMgcGx1Z2luIGlzIDMyMHB4LlxuICAgICAqIERlZmF1bHRzIHRvIGA1NTBweGAuXG4gICAgICovXG4gICAgd2lkdGg6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcm5kOiBSZW5kZXJlcik7XG59XG4iXX0=