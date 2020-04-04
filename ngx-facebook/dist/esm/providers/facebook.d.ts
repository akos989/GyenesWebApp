import { AuthResponse } from '../models/auth-response';
import { InitParams } from '../models/init-params';
import { LoginOptions } from '../models/login-options';
import { LoginResponse } from '../models/login-response';
import { LoginStatus } from '../models/login-status';
import { UIParams } from '../models/ui-params';
import { UIResponse } from '../models/ui-response';
/**
 * @hidden
 */
import * as ɵngcc0 from '@angular/core';
export declare type ApiMethod = 'get' | 'post' | 'delete';
/**
 * @shortdesc
 * Angular 2 service to inject to use Facebook's SDK
 * @description
 * You only need to inject this service in your application if you aren't using [`FacebookModule`](../facebook-module).
 * @usage
 * ```typescript
 * import { FacebookService, InitParams } from 'ng2-facebook-sdk';
 *
 * constructor(private fb: FacebookService) {
 *
 *   const params: InitParams = {
 *
 *   };
 *
 *   fb.init(params);
 *
 * }
 * ```
 */
export declare class FacebookService {
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    init(params: InitParams): Promise<any>;
    /**
     * This method lets you make calls to the Graph API
     * @usage
     * ```typescript
     * this.fb.api('somepath')
     *   .then(res => console.log(res))
     *   .catch(e => console.log(e));
     * ```
     * @param path {string} The Graph API endpoint path that you want to call.
     * @param [method=get] {string} The HTTP method that you want to use for the API request.
     * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
     */
    api(path: string, method?: ApiMethod, params?: any): Promise<any>;
    /**
     * This method is used to trigger different forms of Facebook created UI dialogs.
     * These dialogs include:
     * - Share dialog
     * - Login dialog
     * - Add page tab dialog
     * - Requests dialog
     * - Send dialog
     * - Payments dialog
     * - Go Live dialog
     * @param params {UIParams} A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<UIResponse>}
     */
    ui(params: UIParams): Promise<UIResponse>;
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @returns {Promise<LoginStatus>}
     */
    getLoginStatus(): Promise<LoginStatus>;
    /**
     * Login the user
     * @usage
     * ```typescript
     * // login without options
     * this.fb.login()
     *   .then((response: LoginResponse) => console.log('Logged in', response))
     *   .catch(e => console.error('Error logging in'));
     *
     * // login with options
     * const options: LoginOptions = {
     *   scope: 'public_profile,user_friends,email,pages_show_list',
     *   return_scopes: true,
     *   enable_profile_selector: true
     * };
     * this.fb.login(options)
     *   .then(...)
     *   .catch(...);
     * ```
     * @param [options] {LoginOptions} Login options
     * @returns {Promise<LoginResponse>} returns a promise that resolves with [LoginResponse](../login-response) object, or rejects with an error
     */
    login(options?: LoginOptions): Promise<LoginResponse>;
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    logout(): Promise<any>;
    /**
     * This synchronous function returns back the current authResponse.
     * @usage
     * ```typescript
     * import { AuthResponse, FacebookService } from 'ng2-facebook-sdk';
     *
     * ...
     *
     * const authResponse: AuthResponse = this.fb.getAuthResponse();
     * ```
     * @returns {AuthResponse} returns an [AuthResponse](../auth-response) object
     */
    getAuthResponse(): AuthResponse;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacebookService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FacebookService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suZC50cyIsInNvdXJjZXMiOlsiZmFjZWJvb2suZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtcmVzcG9uc2UnO1xuaW1wb3J0IHsgSW5pdFBhcmFtcyB9IGZyb20gJy4uL21vZGVscy9pbml0LXBhcmFtcyc7XG5pbXBvcnQgeyBMb2dpbk9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvbG9naW4tb3B0aW9ucyc7XG5pbXBvcnQgeyBMb2dpblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXJlc3BvbnNlJztcbmltcG9ydCB7IExvZ2luU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXN0YXR1cyc7XG5pbXBvcnQgeyBVSVBhcmFtcyB9IGZyb20gJy4uL21vZGVscy91aS1wYXJhbXMnO1xuaW1wb3J0IHsgVUlSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy91aS1yZXNwb25zZSc7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBBcGlNZXRob2QgPSAnZ2V0JyB8ICdwb3N0JyB8ICdkZWxldGUnO1xuLyoqXG4gKiBAc2hvcnRkZXNjXG4gKiBBbmd1bGFyIDIgc2VydmljZSB0byBpbmplY3QgdG8gdXNlIEZhY2Vib29rJ3MgU0RLXG4gKiBAZGVzY3JpcHRpb25cbiAqIFlvdSBvbmx5IG5lZWQgdG8gaW5qZWN0IHRoaXMgc2VydmljZSBpbiB5b3VyIGFwcGxpY2F0aW9uIGlmIHlvdSBhcmVuJ3QgdXNpbmcgW2BGYWNlYm9va01vZHVsZWBdKC4uL2ZhY2Vib29rLW1vZHVsZSkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZhY2Vib29rU2VydmljZSwgSW5pdFBhcmFtcyB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZhY2Vib29rU2VydmljZSkge1xuICpcbiAqICAgY29uc3QgcGFyYW1zOiBJbml0UGFyYW1zID0ge1xuICpcbiAqICAgfTtcbiAqXG4gKiAgIGZiLmluaXQocGFyYW1zKTtcbiAqXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmFjZWJvb2tTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGluaXRpYWxpemUgYW5kIHNldHVwIHRoZSBTREsuXG4gICAgICogQHBhcmFtIHBhcmFtcyB7SW5pdFBhcmFtc30gSW5pdGlhbGl6YXRpb24gcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgaW5pdChwYXJhbXM6IEluaXRQYXJhbXMpOiBQcm9taXNlPGFueT47XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgbGV0cyB5b3UgbWFrZSBjYWxscyB0byB0aGUgR3JhcGggQVBJXG4gICAgICogQHVzYWdlXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuZmIuYXBpKCdzb21lcGF0aCcpXG4gICAgICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gcGF0aCB7c3RyaW5nfSBUaGUgR3JhcGggQVBJIGVuZHBvaW50IHBhdGggdGhhdCB5b3Ugd2FudCB0byBjYWxsLlxuICAgICAqIEBwYXJhbSBbbWV0aG9kPWdldF0ge3N0cmluZ30gVGhlIEhUVFAgbWV0aG9kIHRoYXQgeW91IHdhbnQgdG8gdXNlIGZvciB0aGUgQVBJIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIFtwYXJhbXNdIHtPYmplY3R9IEFuIG9iamVjdCBjb25zaXN0aW5nIG9mIGFueSBwYXJhbWV0ZXJzIHRoYXQgeW91IHdhbnQgdG8gcGFzcyBpbnRvIHlvdXIgR3JhcGggQVBJIGNhbGwuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBhcGkocGF0aDogc3RyaW5nLCBtZXRob2Q/OiBBcGlNZXRob2QsIHBhcmFtcz86IGFueSk6IFByb21pc2U8YW55PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHRyaWdnZXIgZGlmZmVyZW50IGZvcm1zIG9mIEZhY2Vib29rIGNyZWF0ZWQgVUkgZGlhbG9ncy5cbiAgICAgKiBUaGVzZSBkaWFsb2dzIGluY2x1ZGU6XG4gICAgICogLSBTaGFyZSBkaWFsb2dcbiAgICAgKiAtIExvZ2luIGRpYWxvZ1xuICAgICAqIC0gQWRkIHBhZ2UgdGFiIGRpYWxvZ1xuICAgICAqIC0gUmVxdWVzdHMgZGlhbG9nXG4gICAgICogLSBTZW5kIGRpYWxvZ1xuICAgICAqIC0gUGF5bWVudHMgZGlhbG9nXG4gICAgICogLSBHbyBMaXZlIGRpYWxvZ1xuICAgICAqIEBwYXJhbSBwYXJhbXMge1VJUGFyYW1zfSBBIGNvbGxlY3Rpb24gb2YgcGFyYW1ldGVycyB0aGF0IGNvbnRyb2wgd2hpY2ggZGlhbG9nIGlzIGxvYWRlZCwgYW5kIHJlbGV2YW50IHNldHRpbmdzLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFVJUmVzcG9uc2U+fVxuICAgICAqL1xuICAgIHVpKHBhcmFtczogVUlQYXJhbXMpOiBQcm9taXNlPFVJUmVzcG9uc2U+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGFsbG93cyB5b3UgdG8gZGV0ZXJtaW5lIGlmIGEgdXNlciBpcyBsb2dnZWQgaW4gdG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPExvZ2luU3RhdHVzPn1cbiAgICAgKi9cbiAgICBnZXRMb2dpblN0YXR1cygpOiBQcm9taXNlPExvZ2luU3RhdHVzPjtcbiAgICAvKipcbiAgICAgKiBMb2dpbiB0aGUgdXNlclxuICAgICAqIEB1c2FnZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBsb2dpbiB3aXRob3V0IG9wdGlvbnNcbiAgICAgKiB0aGlzLmZiLmxvZ2luKClcbiAgICAgKiAgIC50aGVuKChyZXNwb25zZTogTG9naW5SZXNwb25zZSkgPT4gY29uc29sZS5sb2coJ0xvZ2dlZCBpbicsIHJlc3BvbnNlKSlcbiAgICAgKiAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW4nKSk7XG4gICAgICpcbiAgICAgKiAvLyBsb2dpbiB3aXRoIG9wdGlvbnNcbiAgICAgKiBjb25zdCBvcHRpb25zOiBMb2dpbk9wdGlvbnMgPSB7XG4gICAgICogICBzY29wZTogJ3B1YmxpY19wcm9maWxlLHVzZXJfZnJpZW5kcyxlbWFpbCxwYWdlc19zaG93X2xpc3QnLFxuICAgICAqICAgcmV0dXJuX3Njb3BlczogdHJ1ZSxcbiAgICAgKiAgIGVuYWJsZV9wcm9maWxlX3NlbGVjdG9yOiB0cnVlXG4gICAgICogfTtcbiAgICAgKiB0aGlzLmZiLmxvZ2luKG9wdGlvbnMpXG4gICAgICogICAudGhlbiguLi4pXG4gICAgICogICAuY2F0Y2goLi4uKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIHtMb2dpbk9wdGlvbnN9IExvZ2luIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMb2dpblJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIFtMb2dpblJlc3BvbnNlXSguLi9sb2dpbi1yZXNwb25zZSkgb2JqZWN0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICAgKi9cbiAgICBsb2dpbihvcHRpb25zPzogTG9naW5PcHRpb25zKTogUHJvbWlzZTxMb2dpblJlc3BvbnNlPjtcbiAgICAvKipcbiAgICAgKiBMb2dvdXQgdGhlIHVzZXJcbiAgICAgKiBAdXNhZ2VcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogdGhpcy5mYi5sb2dvdXQoKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0IScpKTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHVzZXIgaXMgbG9nZ2VkIG91dFxuICAgICAqL1xuICAgIGxvZ291dCgpOiBQcm9taXNlPGFueT47XG4gICAgLyoqXG4gICAgICogVGhpcyBzeW5jaHJvbm91cyBmdW5jdGlvbiByZXR1cm5zIGJhY2sgdGhlIGN1cnJlbnQgYXV0aFJlc3BvbnNlLlxuICAgICAqIEB1c2FnZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpbXBvcnQgeyBBdXRoUmVzcG9uc2UsIEZhY2Vib29rU2VydmljZSB9IGZyb20gJ25nMi1mYWNlYm9vay1zZGsnO1xuICAgICAqXG4gICAgICogLi4uXG4gICAgICpcbiAgICAgKiBjb25zdCBhdXRoUmVzcG9uc2U6IEF1dGhSZXNwb25zZSA9IHRoaXMuZmIuZ2V0QXV0aFJlc3BvbnNlKCk7XG4gICAgICogYGBgXG4gICAgICogQHJldHVybnMge0F1dGhSZXNwb25zZX0gcmV0dXJucyBhbiBbQXV0aFJlc3BvbnNlXSguLi9hdXRoLXJlc3BvbnNlKSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRBdXRoUmVzcG9uc2UoKTogQXV0aFJlc3BvbnNlO1xufVxuIl19