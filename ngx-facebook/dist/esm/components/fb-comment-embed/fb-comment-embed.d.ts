import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Comments
 * @shortdesc Embedded comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
 * @description
 * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public comments from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBCommentEmbedComponent extends FBMLComponent {
    /**
     * The absolute URL of the comment.
     */
    href: string;
    /**
     * The width of the embedded comment container. Min. `220px`. Defaults to `560px`.
     */
    width: string;
    /**
     * Set to `true` to include parent comment (if URL is a reply). Defaults to `false`.
     */
    includeParent: boolean;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBCommentEmbedComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBCommentEmbedComponent, "fb-comment-embed", never, {
    "href": "href";
    "width": "width";
    "includeParent": "includeParent";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItY29tbWVudC1lbWJlZC5kLnRzIiwic291cmNlcyI6WyJmYi1jb21tZW50LWVtYmVkLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZCTUxDb21wb25lbnQgfSBmcm9tICcuLi9mYm1sLWNvbXBvbmVudCc7XG4vKipcbiAqIEBuYW1lIEVtYmVkZGVkIENvbW1lbnRzXG4gKiBAc2hvcnRkZXNjIEVtYmVkZGVkIGNvbW1lbnRzIGNvbXBvbmVudFxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL2VtYmVkZGVkLWNvbW1lbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVtYmVkZGVkIGNvbW1lbnRzIGFyZSBhIHNpbXBsZSB3YXkgdG8gcHV0IHB1YmxpYyBwb3N0IGNvbW1lbnRzIC0gYnkgYSBQYWdlIG9yIGEgcGVyc29uIG9uIEZhY2Vib29rIC0gaW50byB0aGUgY29udGVudCBvZiB5b3VyIHdlYiBzaXRlIG9yIHdlYiBwYWdlLlxuICogT25seSBwdWJsaWMgY29tbWVudHMgZnJvbSBGYWNlYm9vayBQYWdlcyBhbmQgcHJvZmlsZXMgY2FuIGJlIGVtYmVkZGVkLlxuICogQHVzYWdlXG4gKiBgYGBodG1sXG4gKiA8ZmItY29tbWVudC1lbWJlZCBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3p1Y2svcG9zdHMvMTAxMDI3MzU0NTI1MzI5OTE/Y29tbWVudF9pZD0xMDcwMjMzNzAzMDM2MTg1XCIgd2lkdGg9XCI1MDBcIj48L2ZiLWNvbW1lbnQtZW1iZWQ+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRkJDb21tZW50RW1iZWRDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBjb21tZW50LlxuICAgICAqL1xuICAgIGhyZWY6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGVtYmVkZGVkIGNvbW1lbnQgY29udGFpbmVyLiBNaW4uIGAyMjBweGAuIERlZmF1bHRzIHRvIGA1NjBweGAuXG4gICAgICovXG4gICAgd2lkdGg6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gYHRydWVgIHRvIGluY2x1ZGUgcGFyZW50IGNvbW1lbnQgKGlmIFVSTCBpcyBhIHJlcGx5KS4gRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBpbmNsdWRlUGFyZW50OiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBybmQ6IFJlbmRlcmVyKTtcbn1cbiJdfQ==