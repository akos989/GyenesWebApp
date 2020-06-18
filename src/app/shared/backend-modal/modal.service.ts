import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Modal } from './modal.model';
import { AcceptCookieService } from '../cookie/cookie.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorHandleService } from '../error-handle.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ModalService {

    modal: Modal = null;
    modals: Modal[] = [];
    newModalsSub = new Subject<Modal[]>();

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
        return this.http.get<{modal: Modal}>(environment.serverUrl+'api/modals/today')
            .pipe(
                map((responseData)=> {
                    return responseData.modal;
                }),
                tap((modal)=> {
                    if (modal.name !== '')
                        this.modal = modal;
                        this.modal.modalImgUrl = this.makeImagePath(this.modal.modalImgUrl);
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    fetchModals() {
        return this.http.get<{modals: Modal[]}>(environment.serverUrl+'api/modals/')
            .pipe(
                map(resData => {
                    let modals: Modal[] = resData.modals;
                    modals = modals.map(modal => {
                        modal.modalImgUrl = this.makeImagePath(modal.modalImgUrl);
                        modal.fromDate = this.dateFromString(modal.fromDate.toString(), 0);
                        modal.toDate = this.dateFromString(modal.toDate.toString(), 0);
                        return modal;
                    });
                    return modals;
                }),
                tap(modals => {
                    this.modals = modals;
                    this.newModalsSub.next(this.modals);
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    delete(ids: string[]) {
        let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: {
                ids: ids
            },
        };
        this.http.delete(environment.serverUrl+'api/modals/', options)
            .subscribe(
                resData => {
                    this.modals = this.modals.filter(modal => {
                        return !ids.some(id => id === modal._id);
                    });
                    this.newModalsSub.next(this.modals);
                },
                (errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                }
            );
    }
    create( formData: FormData) {
        return this.http.post<Modal>(environment.serverUrl+'api/modals/', formData)
            .pipe(
                tap(resData => {
                    let modal = resData;
                    modal.modalImgUrl = this.makeImagePath(resData.modalImgUrl);
                    modal.fromDate = this.dateFromString(resData.fromDate.toString(), 0);
                    modal.toDate = this.dateFromString(resData.toDate.toString(), 0);
                    this.modals.push(modal);
                    this.newModalsSub.next(this.modals);
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    update( formData: FormData, modalId: string) {
        return this.http.patch<Modal>(environment.serverUrl+'api/modals/'+modalId, formData)
            .pipe(
                tap(resData => {
                    this.modals = this.modals.map(modal => {
                        if (modal._id === modalId) {
                            modal = resData;
                            modal.modalImgUrl = this.makeImagePath(resData.modalImgUrl);
                            modal.fromDate = this.dateFromString(modal.fromDate.toString(), 0);
                            modal.toDate = this.dateFromString(modal.toDate.toString(), 0);
                        }
                        return modal;
                    });
                    this.newModalsSub.next(this.modals);
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    findById(id: string): Modal {
        return this.modals.filter(modal => {return modal._id === id})[0];
    }
    intersects(startA: number, endA: number, _id = null): Modal[] {
        return this.modals.filter(modal => {
                const startB = modal.fromDate.valueOf();
                const endB = modal.toDate.valueOf();

                const min = (startA < startB ? [startA, endA] : [startB, endB]);
                const max = ( (min[0] === startA && min[1] === endA) ? [startB, endB] : [startA, endA] );
                return (!(min[1] < max[0]) && !(modal._id === _id) );
        });
    }
    private makeImagePath(imgName: string) {
        return environment.serverUrl + imgName;
    }
    private dateFromString(dateString: string, plus: number): Date {
        const dateParts:string[] = dateString.split('T');

        return new Date(
            +(dateParts[0].split('-')[0]),
            +(dateParts[0].split('-')[1]) - 1,
            +(dateParts[0].split('-')[2]),
            +(dateParts[1].split(':')[0]) + plus       
        );
    }
}