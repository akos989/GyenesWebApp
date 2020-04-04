import { ElementRef, Renderer2 } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBSaveComponent extends FBMLComponent {
    /**
     * The absolute link of the page that will be saved.
     * Current Link/Address
     */
    uri: string;
    constructor(el: ElementRef, rnd: Renderer2);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBSaveComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBSaveComponent, "fb-save", never, {
    "uri": "uri";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItc2F2ZS5kLnRzIiwic291cmNlcyI6WyJmYi1zYXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRkJNTENvbXBvbmVudCB9IGZyb20gJy4uL2ZibWwtY29tcG9uZW50Jztcbi8qKlxuICogQG5hbWUgU2F2ZSBCdXR0b25cbiAqIEBzaG9ydGRlc2MgU2F2ZSBidXR0b24gY29tcG9uZW50LlxuICogQGZiZG9jIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL3NhdmVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIFNhdmUgYnV0dG9uIGxldHMgcGVvcGxlIHNhdmUgaXRlbXMgb3Igc2VydmljZXMgdG8gYSBwcml2YXRlIGxpc3Qgb24gRmFjZWJvb2ssIHNoYXJlIGl0IHdpdGggZnJpZW5kcywgYW5kIHJlY2VpdmUgcmVsZXZhbnQgbm90aWZpY2F0aW9ucy5cbiAqIEB1c2FnZVxuICogYGBgaHRtbFxuICogPGZiLXNhdmUgdXJpPVwiaHR0cHM6Ly9naXRodWIuY29tL3p5cmEvbmcyLWZhY2Vib29rLXNkay9cIj48L2ZiLXNhdmU+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRkJTYXZlQ29tcG9uZW50IGV4dGVuZHMgRkJNTENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogVGhlIGFic29sdXRlIGxpbmsgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsIGJlIHNhdmVkLlxuICAgICAqIEN1cnJlbnQgTGluay9BZGRyZXNzXG4gICAgICovXG4gICAgdXJpOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJuZDogUmVuZGVyZXIpO1xufVxuIl19