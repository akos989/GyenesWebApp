import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Send Button
 * @shortdesc Send button component
 * @fbdoc https://developers.facebook.com/docs/plugins/send-button
 * @description
 * The Send button lets people privately send content on your site to one or more friends in a Facebook message.
 * @usage
 * ```html
 * <fb-send href="https://github.com/zyra/ng2-facebook-sdk/"></fb-send>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBSendComponent extends FBMLComponent {
    /**
     * The color scheme used by the plugin. Can be "light" or "dark". Defaults to light.
     */
    colorScheme: string;
    /**
     * The absolute URL of the page that will be sent. Defaults to the current URL.
     */
    href: string;
    /**
     * If your web site or online service, or a portion of your service, is directed to children under 13 you must enable this.
     */
    kidDirectedSite: boolean;
    /**
     * A label for tracking referrals which must be less than 50 characters, and can contain alphanumeric characters and some punctuation (currently +/=-.:_).
     */
    ref: string;
    /**
     * Size of the button. Defaults to small.
     */
    size: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBSendComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBSendComponent, "fb-send", never, {
    "colorScheme": "colorScheme";
    "href": "href";
    "kidDirectedSite": "kidDirectedSite";
    "ref": "ref";
    "size": "size";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2VuZC5kLnRzIiwic291cmNlcyI6WyJmYi1zZW5kLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xuLyoqXG4gKiBAbmFtZSBTZW5kIEJ1dHRvblxuICogQHNob3J0ZGVzYyBTZW5kIGJ1dHRvbiBjb21wb25lbnRcbiAqIEBmYmRvYyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcGx1Z2lucy9zZW5kLWJ1dHRvblxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgU2VuZCBidXR0b24gbGV0cyBwZW9wbGUgcHJpdmF0ZWx5IHNlbmQgY29udGVudCBvbiB5b3VyIHNpdGUgdG8gb25lIG9yIG1vcmUgZnJpZW5kcyBpbiBhIEZhY2Vib29rIG1lc3NhZ2UuXG4gKiBAdXNhZ2VcbiAqIGBgYGh0bWxcbiAqIDxmYi1zZW5kIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20venlyYS9uZzItZmFjZWJvb2stc2RrL1wiPjwvZmItc2VuZD5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGQlNlbmRDb21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igc2NoZW1lIHVzZWQgYnkgdGhlIHBsdWdpbi4gQ2FuIGJlIFwibGlnaHRcIiBvciBcImRhcmtcIi4gRGVmYXVsdHMgdG8gbGlnaHQuXG4gICAgICovXG4gICAgY29sb3JTY2hlbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUaGUgYWJzb2x1dGUgVVJMIG9mIHRoZSBwYWdlIHRoYXQgd2lsbCBiZSBzZW50LiBEZWZhdWx0cyB0byB0aGUgY3VycmVudCBVUkwuXG4gICAgICovXG4gICAgaHJlZjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIHlvdXIgd2ViIHNpdGUgb3Igb25saW5lIHNlcnZpY2UsIG9yIGEgcG9ydGlvbiBvZiB5b3VyIHNlcnZpY2UsIGlzIGRpcmVjdGVkIHRvIGNoaWxkcmVuIHVuZGVyIDEzIHlvdSBtdXN0IGVuYWJsZSB0aGlzLlxuICAgICAqL1xuICAgIGtpZERpcmVjdGVkU2l0ZTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBIGxhYmVsIGZvciB0cmFja2luZyByZWZlcnJhbHMgd2hpY2ggbXVzdCBiZSBsZXNzIHRoYW4gNTAgY2hhcmFjdGVycywgYW5kIGNhbiBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFuZCBzb21lIHB1bmN0dWF0aW9uIChjdXJyZW50bHkgKy89LS46XykuXG4gICAgICovXG4gICAgcmVmOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgYnV0dG9uLiBEZWZhdWx0cyB0byBzbWFsbC5cbiAgICAgKi9cbiAgICBzaXplOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJuZDogUmVuZGVyZXIpO1xufVxuIl19