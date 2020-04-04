import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Quote Plugin
 * @shortdesc Quote plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/quote
 * @description
 * The quote plugin lets people select text on your page and add it to their share, so they can tell a more expressive story.
 * Note that you do not need to implement Facebook login or request any additional permissions through app review in order to use this plugin.
 * @usage
 * ```html
 * <fb-quote></fb-quote>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBQuoteComponent extends FBMLComponent {
    /**
     * The absolute URL of the page that will be quoted.
     * Defaults to the current URL
     */
    href: string;
    /**
     * Can be set to quote or button. Defaults to quote.
     */
    layout: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBQuoteComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBQuoteComponent, "fb-quote", never, {
    "href": "href";
    "layout": "layout";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcXVvdGUuZC50cyIsInNvdXJjZXMiOlsiZmItcXVvdGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xuLyoqXG4gKiBAbmFtZSBRdW90ZSBQbHVnaW5cbiAqIEBzaG9ydGRlc2MgUXVvdGUgcGx1Z2luIGNvbXBvbmVudFxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3F1b3RlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBxdW90ZSBwbHVnaW4gbGV0cyBwZW9wbGUgc2VsZWN0IHRleHQgb24geW91ciBwYWdlIGFuZCBhZGQgaXQgdG8gdGhlaXIgc2hhcmUsIHNvIHRoZXkgY2FuIHRlbGwgYSBtb3JlIGV4cHJlc3NpdmUgc3RvcnkuXG4gKiBOb3RlIHRoYXQgeW91IGRvIG5vdCBuZWVkIHRvIGltcGxlbWVudCBGYWNlYm9vayBsb2dpbiBvciByZXF1ZXN0IGFueSBhZGRpdGlvbmFsIHBlcm1pc3Npb25zIHRocm91Z2ggYXBwIHJldmlldyBpbiBvcmRlciB0byB1c2UgdGhpcyBwbHVnaW4uXG4gKiBAdXNhZ2VcbiAqIGBgYGh0bWxcbiAqIDxmYi1xdW90ZT48L2ZiLXF1b3RlPlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZCUXVvdGVDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwYWdlIHRoYXQgd2lsbCBiZSBxdW90ZWQuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgVVJMXG4gICAgICovXG4gICAgaHJlZjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENhbiBiZSBzZXQgdG8gcXVvdGUgb3IgYnV0dG9uLiBEZWZhdWx0cyB0byBxdW90ZS5cbiAgICAgKi9cbiAgICBsYXlvdXQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcm5kOiBSZW5kZXJlcik7XG59XG4iXX0=