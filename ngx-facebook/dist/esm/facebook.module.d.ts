import { ModuleWithProviders } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/fb-comment-embed/fb-comment-embed';
import * as ɵngcc2 from './components/fb-comments/fb-comments';
import * as ɵngcc3 from './components/fb-follow/fb-follow';
import * as ɵngcc4 from './components/fb-like/fb-like';
import * as ɵngcc5 from './components/fb-page/fb-page';
import * as ɵngcc6 from './components/fb-post/fb-post';
import * as ɵngcc7 from './components/fb-quote/fb-quote';
import * as ɵngcc8 from './components/fb-save/fb-save';
import * as ɵngcc9 from './components/fb-send/fb-send';
import * as ɵngcc10 from './components/fb-share/fb-share';
import * as ɵngcc11 from './components/fb-video/fb-video';
export declare function getComponents(): any[];
/**
 * @shortdesc The module to import to add this library
 * @description
 * The main module to import into your application.
 * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../facebook-service) into your module instead.
 * This module will make all components and providers available in your application.
 *
 * @usage
 * In order to use this library, you need to import `FacebookModule` into your app's main `NgModule`.
 *
 * ```typescript
 * import { FacebookModule } from 'ng2-facebook-sdk';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     ...
 *     FacebookModule.forRoot()
 *   ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
export declare class FacebookModule {
    static forRoot(): ModuleWithProviders<FacebookModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<FacebookModule, [typeof ɵngcc1.FBCommentEmbedComponent, typeof ɵngcc2.FBCommentsComponent, typeof ɵngcc3.FBFollowComponent, typeof ɵngcc4.FBLikeComponent, typeof ɵngcc5.FBPageComponent, typeof ɵngcc6.FBPostComponent, typeof ɵngcc7.FBQuoteComponent, typeof ɵngcc8.FBSaveComponent, typeof ɵngcc9.FBSendComponent, typeof ɵngcc10.FBShareComponent, typeof ɵngcc11.FBVideoComponent], never, [typeof ɵngcc1.FBCommentEmbedComponent, typeof ɵngcc2.FBCommentsComponent, typeof ɵngcc3.FBFollowComponent, typeof ɵngcc4.FBLikeComponent, typeof ɵngcc5.FBPageComponent, typeof ɵngcc6.FBPostComponent, typeof ɵngcc7.FBQuoteComponent, typeof ɵngcc8.FBSaveComponent, typeof ɵngcc9.FBSendComponent, typeof ɵngcc10.FBShareComponent, typeof ɵngcc11.FBVideoComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<FacebookModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2subW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbImZhY2Vib29rLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQTBCc0IsbUNBQW1COzs7QUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBnZXRDb21wb25lbnRzKCk6IGFueVtdO1xuLyoqXG4gKiBAc2hvcnRkZXNjIFRoZSBtb2R1bGUgdG8gaW1wb3J0IHRvIGFkZCB0aGlzIGxpYnJhcnlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIG1haW4gbW9kdWxlIHRvIGltcG9ydCBpbnRvIHlvdXIgYXBwbGljYXRpb24uXG4gKiBZb3Ugb25seSBuZWVkIHRvIGltcG9ydCB0aGlzIG1vZHVsZSBpZiB5b3Ugd2lzaCB0byB1c2UgdGhlIGNvbXBvbmVudHMgaW4gdGhpcyBsaWJyYXJ5OyBvdGhlcndpc2UsIHlvdSBjb3VsZCBqdXN0IGltcG9ydCBbRmFjZWJvb2tTZXJ2aWNlXSguLi9mYWNlYm9vay1zZXJ2aWNlKSBpbnRvIHlvdXIgbW9kdWxlIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIG1ha2UgYWxsIGNvbXBvbmVudHMgYW5kIHByb3ZpZGVycyBhdmFpbGFibGUgaW4geW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAdXNhZ2VcbiAqIEluIG9yZGVyIHRvIHVzZSB0aGlzIGxpYnJhcnksIHlvdSBuZWVkIHRvIGltcG9ydCBgRmFjZWJvb2tNb2R1bGVgIGludG8geW91ciBhcHAncyBtYWluIGBOZ01vZHVsZWAuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmFjZWJvb2tNb2R1bGUgfSBmcm9tICduZzItZmFjZWJvb2stc2RrJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICAuLi5cbiAqICAgaW1wb3J0czogW1xuICogICAgIC4uLlxuICogICAgIEZhY2Vib29rTW9kdWxlLmZvclJvb3QoKVxuICogICBdLFxuICogICAuLi5cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZhY2Vib29rTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzO1xufVxuIl19