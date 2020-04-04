import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Share Button
 * @shortdesc Share button component
 * @fbdoc https://developers.facebook.com/docs/plugins/share-button
 * @description
 * The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.
 * @usage
 * ```html
 * <fb-share href="https://github.com/zyra/ng2-facebook-sdk/"></fb-share>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBShareComponent extends FBMLComponent {
    /**
     * The absolute URL of the page that will be shared. Defaults to the current URL.
     */
    href: string;
    /**
     * Selects one of the different layouts that are available for the plugin. Can be one of `box_count`, `button_count`, `button`. Defaults to `icon_link`.
     */
    layout: string;
    /**
     * If set to true, the share button will open the share dialog in an iframe (instead of a popup) on top of your website on mobile. This option is only available for mobile, not desktop. Defaults to `false`.
     */
    mobileIframe: boolean;
    /**
     * The button is offered in 2 sizes i.e. large and small. Defaults to `small`.
     */
    size: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBShareComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBShareComponent, "fb-share", never, {
    "href": "href";
    "layout": "layout";
    "mobileIframe": "mobileIframe";
    "size": "size";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2hhcmUuZC50cyIsInNvdXJjZXMiOlsiZmItc2hhcmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xuLyoqXG4gKiBAbmFtZSBTaGFyZSBCdXR0b25cbiAqIEBzaG9ydGRlc2MgU2hhcmUgYnV0dG9uIGNvbXBvbmVudFxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3NoYXJlLWJ1dHRvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgU2hhcmUgYnV0dG9uIGxldHMgcGVvcGxlIGFkZCBhIHBlcnNvbmFsaXplZCBtZXNzYWdlIHRvIGxpbmtzIGJlZm9yZSBzaGFyaW5nIG9uIHRoZWlyIHRpbWVsaW5lLCBpbiBncm91cHMsIG9yIHRvIHRoZWlyIGZyaWVuZHMgdmlhIGEgRmFjZWJvb2sgTWVzc2FnZS5cbiAqIEB1c2FnZVxuICogYGBgaHRtbFxuICogPGZiLXNoYXJlIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20venlyYS9uZzItZmFjZWJvb2stc2RrL1wiPjwvZmItc2hhcmU+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRkJTaGFyZUNvbXBvbmVudCBleHRlbmRzIEZCTUxDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBhYnNvbHV0ZSBVUkwgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsIGJlIHNoYXJlZC4gRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgVVJMLlxuICAgICAqL1xuICAgIGhyZWY6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIG9uZSBvZiB0aGUgZGlmZmVyZW50IGxheW91dHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciB0aGUgcGx1Z2luLiBDYW4gYmUgb25lIG9mIGBib3hfY291bnRgLCBgYnV0dG9uX2NvdW50YCwgYGJ1dHRvbmAuIERlZmF1bHRzIHRvIGBpY29uX2xpbmtgLlxuICAgICAqL1xuICAgIGxheW91dDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgc2hhcmUgYnV0dG9uIHdpbGwgb3BlbiB0aGUgc2hhcmUgZGlhbG9nIGluIGFuIGlmcmFtZSAoaW5zdGVhZCBvZiBhIHBvcHVwKSBvbiB0b3Agb2YgeW91ciB3ZWJzaXRlIG9uIG1vYmlsZS4gVGhpcyBvcHRpb24gaXMgb25seSBhdmFpbGFibGUgZm9yIG1vYmlsZSwgbm90IGRlc2t0b3AuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgbW9iaWxlSWZyYW1lOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBidXR0b24gaXMgb2ZmZXJlZCBpbiAyIHNpemVzIGkuZS4gbGFyZ2UgYW5kIHNtYWxsLiBEZWZhdWx0cyB0byBgc21hbGxgLlxuICAgICAqL1xuICAgIHNpemU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcm5kOiBSZW5kZXJlcik7XG59XG4iXX0=