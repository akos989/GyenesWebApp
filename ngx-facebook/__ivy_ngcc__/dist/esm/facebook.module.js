import { NgModule } from '@angular/core';
import { FacebookService } from './providers/facebook';
import { FBCommentEmbedComponent } from './components/fb-comment-embed/fb-comment-embed';
import { FBCommentsComponent } from './components/fb-comments/fb-comments';
import { FBFollowComponent } from './components/fb-follow/fb-follow';
import { FBLikeComponent } from './components/fb-like/fb-like';
import { FBPageComponent } from './components/fb-page/fb-page';
import { FBPostComponent } from './components/fb-post/fb-post';
import { FBQuoteComponent } from './components/fb-quote/fb-quote';
import { FBSaveComponent } from './components/fb-save/fb-save';
import { FBSendComponent } from './components/fb-send/fb-send';
import { FBShareComponent } from './components/fb-share/fb-share';
import { FBVideoComponent } from './components/fb-video/fb-video';
import * as ɵngcc0 from '@angular/core';
var components = [
    FBCommentEmbedComponent,
    FBCommentsComponent,
    FBFollowComponent,
    FBLikeComponent,
    FBPageComponent,
    FBPostComponent,
    FBQuoteComponent,
    FBSaveComponent,
    FBSendComponent,
    FBShareComponent,
    FBVideoComponent
];
export function getComponents() {
    return components;
}
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
var FacebookModule = (function () {
    function FacebookModule() {
    }
    FacebookModule.forRoot = function () {
        return {
            ngModule: FacebookModule,
            providers: [FacebookService]
        };
    };
FacebookModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FacebookModule });
FacebookModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FacebookModule_Factory(t) { return new (t || FacebookModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FacebookModule, { declarations: [FBCommentEmbedComponent,
        FBCommentsComponent,
        FBFollowComponent,
        FBLikeComponent,
        FBPageComponent,
        FBPostComponent,
        FBQuoteComponent,
        FBSaveComponent,
        FBSendComponent,
        FBShareComponent,
        FBVideoComponent], exports: [FBCommentEmbedComponent,
        FBCommentsComponent,
        FBFollowComponent,
        FBLikeComponent,
        FBPageComponent,
        FBPostComponent,
        FBQuoteComponent,
        FBSaveComponent,
        FBSendComponent,
        FBShareComponent,
        FBVideoComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FacebookModule, [{
        type: NgModule,
        args: [{
                declarations: getComponents(),
                exports: getComponents()
            }]
    }], function () { return []; }, null); })();
    return FacebookModule;
}());
export { FacebookModule };
/** @nocollapse */
FacebookModule.ctorParameters = function () { return []; };

//# sourceMappingURL=facebook.module.js.map