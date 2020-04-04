import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Posts
 * @shortdesc Embedded post component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
 * @description
 * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public posts from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBPostComponent extends FBMLComponent {
    /**
     * The absolute URL of the post.
     */
    href: string;
    /**
     * The width of the post. Min. `350` pixel; Max. `750` pixel. Set to auto to use fluid width. Defaults to `auto`.
     */
    width: string;
    /**
     * Applied to photo post. Set to `true` to include the text from the Facebook post, if any. Defaults to `false`.
     */
    showText: boolean;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBPostComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBPostComponent, "fb-post", never, {
    "href": "href";
    "width": "width";
    "showText": "showText";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItcG9zdC5kLnRzIiwic291cmNlcyI6WyJmYi1wb3N0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XG4vKipcbiAqIEBuYW1lIEVtYmVkZGVkIFBvc3RzXG4gKiBAc2hvcnRkZXNjIEVtYmVkZGVkIHBvc3QgY29tcG9uZW50XG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvZW1iZWRkZWQtcG9zdHNcbiAqIEBkZXNjcmlwdGlvblxuICogRW1iZWRkZWQgUG9zdHMgYXJlIGEgc2ltcGxlIHdheSB0byBwdXQgcHVibGljIHBvc3RzIC0gYnkgYSBQYWdlIG9yIGEgcGVyc29uIG9uIEZhY2Vib29rIC0gaW50byB0aGUgY29udGVudCBvZiB5b3VyIHdlYiBzaXRlIG9yIHdlYiBwYWdlLlxuICogT25seSBwdWJsaWMgcG9zdHMgZnJvbSBGYWNlYm9vayBQYWdlcyBhbmQgcHJvZmlsZXMgY2FuIGJlIGVtYmVkZGVkLlxuICogQHVzYWdlXG4gKiBgYGBodG1sXG4gKiA8ZmItcG9zdCBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzIwNTMxMzE2NzI4L3Bvc3RzLzEwMTU0MDA5OTkwNTA2NzI5L1wiPjwvZmItcG9zdD5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGQlBvc3RDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwb3N0LlxuICAgICAqL1xuICAgIGhyZWY6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIHBvc3QuIE1pbi4gYDM1MGAgcGl4ZWw7IE1heC4gYDc1MGAgcGl4ZWwuIFNldCB0byBhdXRvIHRvIHVzZSBmbHVpZCB3aWR0aC4gRGVmYXVsdHMgdG8gYGF1dG9gLlxuICAgICAqL1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQXBwbGllZCB0byBwaG90byBwb3N0LiBTZXQgdG8gYHRydWVgIHRvIGluY2x1ZGUgdGhlIHRleHQgZnJvbSB0aGUgRmFjZWJvb2sgcG9zdCwgaWYgYW55LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHNob3dUZXh0OiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBybmQ6IFJlbmRlcmVyKTtcbn1cbiJdfQ==