import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Modal } from './modal.model';
import { AcceptCookieService } from '../cookie/cookie.service';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorHandleService } from '../error-handle.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ModalService {

    modal: Modal = null;

    constructor(private cookieService: CookieService,
                private acceptCookieS: AcceptCookieService,
                private http: HttpClient, private errorHandler: ErrorHandleService)
    {
        this.acceptCookieS.answered
            .subscribe((accepted) => {
                if (accepted) {
                    let date = new Date();
                    date.setMinutes(date.getMinutes() + 60);
                    this.cookieService.set( 'modal', 'modal viewed', date);
                }
            });
    }
    checkModal() {
        if (!this.acceptCookieS.accepted) {
            return this.fetchModal();
        }
        const cookieExists: boolean = this.cookieService.check('modal');
        if (!cookieExists) {
            let date = new Date();
            date.setMinutes(date.getMinutes() + 60);
            this.cookieService.set( 'modal', 'modal viewed', date);
            return this.fetchModal();
        }
        return new Observable();
    }

    fetchModal() {
        //backend kérés
        return this.http.get<{modal: Modal}>('api/modals/today')
            .pipe(
                map((responseData)=> {
                    return responseData.modal;
                }),
                tap((modal)=> {
                    if (modal.name !== '')
                        this.modal = modal;
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
}