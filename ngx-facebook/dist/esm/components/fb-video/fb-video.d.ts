import { ElementRef, Renderer2, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FBMLComponent } from '../fbml-component';
/**
 * @name Embedded Video
 * @shortdesc Component to embed Facebook videos
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-video-player
 * @description Component to embed Facebook videos and control them.
 * @usage
 * ```html
 * <!-- basic usage -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
 *
 * <!-- event emitters -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (paused)="onVideoPaused($event)"></fb-video>
 * ```
 *
 * To manually interact with the video player, fetch it using `ViewChild`.
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { FBVideoComponent } from 'ng2-facebook-sdk';
 *
 * @Component(...)
 * export class MyComponent {
 *
 *   @ViewChild(FBVideoComponent) video: FBVideoComponent;
 *
 *   ngAfterViewInit() {
 *     this.video.play();
 *     this.video.pause();
 *     this.video.getVolume();
 *   }
 *
 * }
 *
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class FBVideoComponent extends FBMLComponent implements OnInit, OnDestroy {
    private _instance;
    /**
     * The absolute URL of the video.
     */
    href: string;
    /**
     * Allow the video to be played in fullscreen mode. Can be false or true. Defaults to false;
     */
    allowfullscreen: boolean;
    /**
     * Automatically start playing the video when the page loads. The video will be played without sound (muted). People can turn on sound via the video player controls. This setting does not apply to mobile devices. Can be false or true. Defaults to false.
     */
    autoplay: boolean;
    /**
     * The width of the video container. Min. 220px.
     */
    width: string;
    /**
     * Set to true to include the text from the Facebook post associated with the video, if any.
     */
    showText: boolean;
    /**
     * Set to true to show captions (if available) by default. Captions are only available on desktop.
     */
    showCaptions: boolean;
    /**
     * Fired when video starts to play.
     */
    startedPlaying: EventEmitter<any>;
    /**
     * Fired when video pauses.
     */
    paused: EventEmitter<any>;
    /**
     *
     Fired when video finishes playing.
     */
    finishedPlaying: EventEmitter<any>;
    /**
     * Fired when video starts to buffer.
     */
    startedBuffering: EventEmitter<any>;
    /**
     * Fired when video recovers from buffering.
     */
    finishedBuffering: EventEmitter<any>;
    /**
     * Fired when an error occurs on the video.
     */
    error: EventEmitter<any>;
    private _id;
    private _listeners;
    constructor(el: ElementRef, rnd: Renderer2);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * Plays the video.
     */
    play(): void;
    /**
     * Pauses the video.
     */
    pause(): void;
    /**
     * Seeks to specified position.
     * @param seconds {number}
     */
    seek(seconds: number): void;
    /**
     * Mute the video.
     */
    mute(): void;
    /**
     * Unmute the video.
     */
    unmute(): void;
    /**
     * Returns true if video is muted, false if not.
     */
    isMuted(): boolean;
    /**
     * Set the volume
     * @param volume
     */
    setVolume(volume: number): void;
    /**
     * Get the volume
     */
    getVolume(): number;
    /**
     * Returns the current video time position in seconds
     */
    getCurrentPosition(): void;
    /**
     * Returns the video duration in seconds
     */
    getDuration(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FBVideoComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FBVideoComponent, "fb-video", never, {
    "href": "href";
    "allowfullscreen": "allowfullscreen";
    "autoplay": "autoplay";
    "width": "width";
    "showText": "showText";
    "showCaptions": "showCaptions";
}, {
    "startedPlaying": "startedPlaying";
    "paused": "paused";
    "finishedPlaying": "finishedPlaying";
    "startedBuffering": "startedBuffering";
    "finishedBuffering": "finishedBuffering";
    "error": "error";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmItdmlkZW8uZC50cyIsInNvdXJjZXMiOlsiZmItdmlkZW8uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdHQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGQk1MQ29tcG9uZW50IH0gZnJvbSAnLi4vZmJtbC1jb21wb25lbnQnO1xuLyoqXG4gKiBAbmFtZSBFbWJlZGRlZCBWaWRlb1xuICogQHNob3J0ZGVzYyBDb21wb25lbnQgdG8gZW1iZWQgRmFjZWJvb2sgdmlkZW9zXG4gKiBAZmJkb2MgaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvZW1iZWRkZWQtdmlkZW8tcGxheWVyXG4gKiBAZGVzY3JpcHRpb24gQ29tcG9uZW50IHRvIGVtYmVkIEZhY2Vib29rIHZpZGVvcyBhbmQgY29udHJvbCB0aGVtLlxuICogQHVzYWdlXG4gKiBgYGBodG1sXG4gKiA8IS0tIGJhc2ljIHVzYWdlIC0tPlxuICogPGZiLXZpZGVvIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZmFjZWJvb2svdmlkZW9zLzEwMTUzMjMxMzc5OTQ2NzI5L1wiPjwvZmItdmlkZW8+XG4gKlxuICogPCEtLSBldmVudCBlbWl0dGVycyAtLT5cbiAqIDxmYi12aWRlbyBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZhY2Vib29rL3ZpZGVvcy8xMDE1MzIzMTM3OTk0NjcyOS9cIiAocGF1c2VkKT1cIm9uVmlkZW9QYXVzZWQoJGV2ZW50KVwiPjwvZmItdmlkZW8+XG4gKiBgYGBcbiAqXG4gKiBUbyBtYW51YWxseSBpbnRlcmFjdCB3aXRoIHRoZSB2aWRlbyBwbGF5ZXIsIGZldGNoIGl0IHVzaW5nIGBWaWV3Q2hpbGRgLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHsgRkJWaWRlb0NvbXBvbmVudCB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xuICpcbiAqIEBDb21wb25lbnQoLi4uKVxuICogZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IHtcbiAqXG4gKiAgIEBWaWV3Q2hpbGQoRkJWaWRlb0NvbXBvbmVudCkgdmlkZW86IEZCVmlkZW9Db21wb25lbnQ7XG4gKlxuICogICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gKiAgICAgdGhpcy52aWRlby5wbGF5KCk7XG4gKiAgICAgdGhpcy52aWRlby5wYXVzZSgpO1xuICogICAgIHRoaXMudmlkZW8uZ2V0Vm9sdW1lKCk7XG4gKiAgIH1cbiAqXG4gKiB9XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZCVmlkZW9Db21wb25lbnQgZXh0ZW5kcyBGQk1MQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2luc3RhbmNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBhYnNvbHV0ZSBVUkwgb2YgdGhlIHZpZGVvLlxuICAgICAqL1xuICAgIGhyZWY6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBbGxvdyB0aGUgdmlkZW8gdG8gYmUgcGxheWVkIGluIGZ1bGxzY3JlZW4gbW9kZS4gQ2FuIGJlIGZhbHNlIG9yIHRydWUuIERlZmF1bHRzIHRvIGZhbHNlO1xuICAgICAqL1xuICAgIGFsbG93ZnVsbHNjcmVlbjogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHN0YXJ0IHBsYXlpbmcgdGhlIHZpZGVvIHdoZW4gdGhlIHBhZ2UgbG9hZHMuIFRoZSB2aWRlbyB3aWxsIGJlIHBsYXllZCB3aXRob3V0IHNvdW5kIChtdXRlZCkuIFBlb3BsZSBjYW4gdHVybiBvbiBzb3VuZCB2aWEgdGhlIHZpZGVvIHBsYXllciBjb250cm9scy4gVGhpcyBzZXR0aW5nIGRvZXMgbm90IGFwcGx5IHRvIG1vYmlsZSBkZXZpY2VzLiBDYW4gYmUgZmFsc2Ugb3IgdHJ1ZS4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICovXG4gICAgYXV0b3BsYXk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSB2aWRlbyBjb250YWluZXIuIE1pbi4gMjIwcHguXG4gICAgICovXG4gICAgd2lkdGg6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBpbmNsdWRlIHRoZSB0ZXh0IGZyb20gdGhlIEZhY2Vib29rIHBvc3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aWRlbywgaWYgYW55LlxuICAgICAqL1xuICAgIHNob3dUZXh0OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIHNob3cgY2FwdGlvbnMgKGlmIGF2YWlsYWJsZSkgYnkgZGVmYXVsdC4gQ2FwdGlvbnMgYXJlIG9ubHkgYXZhaWxhYmxlIG9uIGRlc2t0b3AuXG4gICAgICovXG4gICAgc2hvd0NhcHRpb25zOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdmlkZW8gc3RhcnRzIHRvIHBsYXkuXG4gICAgICovXG4gICAgc3RhcnRlZFBsYXlpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdmlkZW8gcGF1c2VzLlxuICAgICAqL1xuICAgIHBhdXNlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICpcbiAgICAgRmlyZWQgd2hlbiB2aWRlbyBmaW5pc2hlcyBwbGF5aW5nLlxuICAgICAqL1xuICAgIGZpbmlzaGVkUGxheWluZzogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB2aWRlbyBzdGFydHMgdG8gYnVmZmVyLlxuICAgICAqL1xuICAgIHN0YXJ0ZWRCdWZmZXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdmlkZW8gcmVjb3ZlcnMgZnJvbSBidWZmZXJpbmcuXG4gICAgICovXG4gICAgZmluaXNoZWRCdWZmZXJpbmc6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzIG9uIHRoZSB2aWRlby5cbiAgICAgKi9cbiAgICBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgcHJpdmF0ZSBfaWQ7XG4gICAgcHJpdmF0ZSBfbGlzdGVuZXJzO1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBybmQ6IFJlbmRlcmVyKTtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBQbGF5cyB0aGUgdmlkZW8uXG4gICAgICovXG4gICAgcGxheSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFBhdXNlcyB0aGUgdmlkZW8uXG4gICAgICovXG4gICAgcGF1c2UoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZWVrcyB0byBzcGVjaWZpZWQgcG9zaXRpb24uXG4gICAgICogQHBhcmFtIHNlY29uZHMge251bWJlcn1cbiAgICAgKi9cbiAgICBzZWVrKHNlY29uZHM6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTXV0ZSB0aGUgdmlkZW8uXG4gICAgICovXG4gICAgbXV0ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVubXV0ZSB0aGUgdmlkZW8uXG4gICAgICovXG4gICAgdW5tdXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHZpZGVvIGlzIG11dGVkLCBmYWxzZSBpZiBub3QuXG4gICAgICovXG4gICAgaXNNdXRlZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdm9sdW1lXG4gICAgICogQHBhcmFtIHZvbHVtZVxuICAgICAqL1xuICAgIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2b2x1bWVcbiAgICAgKi9cbiAgICBnZXRWb2x1bWUoKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlkZW8gdGltZSBwb3NpdGlvbiBpbiBzZWNvbmRzXG4gICAgICovXG4gICAgZ2V0Q3VycmVudFBvc2l0aW9uKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmlkZW8gZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgICAqL1xuICAgIGdldER1cmF0aW9uKCk6IHZvaWQ7XG59XG4iXX0=