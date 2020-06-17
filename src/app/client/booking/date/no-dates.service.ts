import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { ReservationService } from '../reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { environment } from 'src/environments/environment';

export class NoDate {
    constructor(public _id: string, public fromDate: Date, public toDate: Date, public reason: string) {}
}

@Injectable({providedIn: 'root'})
export class NoDatesService {
    noDates: NoDate[] = [];
    newNoDates = new Subject<void>();

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService,
                private reservationService: ReservationService) {}

    loadNoDates() {
        return this.http
            .get<{noDates: NoDate[]}>(environment.serverUrl+'api/no_dates/')
            .pipe(
                map((responseData) => {
                    const noDatesArray: NoDate[] = [];
                    for (const nod of responseData.noDates) {
                        let tmpNod = nod;
                        tmpNod.fromDate =
                            this.dateFromString(tmpNod.fromDate.toString(), 0);   
                        tmpNod.toDate =
                            this.dateFromString(tmpNod.toDate.toString(), 0);    
                        noDatesArray.push(tmpNod);
                    }
                    return noDatesArray;
                }),
                tap(noDates => {
                    this.noDates = noDates;
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    isClosed(date: Date): string {
        for( const nd of this.noDates ) {
            if (nd.fromDate.valueOf() <= date.valueOf() &&
                date.valueOf() < nd.toDate.valueOf()
            )
                return nd.reason;
        }
        return '';
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
        this.http.delete(environment.serverUrl+'api/no_dates/', options)
            .subscribe(
                resData => {
                    this.noDates = this.noDates.filter(noDate => {
                        return !ids.some(id => id === noDate._id);
                    });
                    this.newNoDates.next();
                },
                (errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                }
            );
    }
    create( reason: string, fromDate: string, toDate: string) {
        let body = {
            reason: reason,
            fromDate: fromDate,
            toDate: toDate
        };
        return this.http.post<NoDate>(environment.serverUrl+'api/no_dates/', body)
            .pipe(
                tap(resData => {
                    let noDate = resData;
                    noDate.fromDate = this.dateFromString(resData.fromDate.toString(), 0);
                    noDate.toDate = this.dateFromString(resData.toDate.toString(), 0);
                    this.noDates.push(noDate);
                    this.newNoDates.next();
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    update(_id: string, reason: string, fromDate: string, toDate: string) {
        let body = {
            reason: reason,
            fromDate: fromDate,
            toDate: toDate
        };
        return this.http.patch<NoDate>(environment.serverUrl+'api/no_dates/'+_id, body)
            .pipe(
                tap(resData => {
                    let value = resData;
                    value.fromDate = this.dateFromString(resData.fromDate.toString(), 0);
                    value.toDate = this.dateFromString(resData.toDate.toString(), 0);
                    const idx = this.noDates.findIndex(noDate => noDate._id === value._id);
                    if (idx > -1) {
                        this.noDates[idx] = value;
                    }
                    this.newNoDates.next();
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    getCurrent(): NoDate {
        const date = new Date();
        return this.noDates.filter(noDate => {
            return (noDate.fromDate.valueOf() <= date.valueOf() &&
            date.valueOf() < noDate.toDate.valueOf());
        })[0];
    }
    getFuture(): NoDate[] {
        const date = new Date();
        return this.noDates.filter(noDate => {
            return (date.valueOf() < noDate.fromDate.valueOf());
        });
    }
    getPast(): NoDate[] {
        const date = new Date();
        return this.noDates.filter(noDate => {
            return (date.valueOf() > noDate.toDate.valueOf());
        });
    }    
    intersects(startA: number, endA: number, _id = null): NoDate[] {
        return this.noDates.filter(noDate => {
                const startB = noDate.fromDate.valueOf();
                const endB = noDate.toDate.valueOf();

                const min = (startA < startB ? [startA, endA] : [startB, endB]);
                const max = ( (min[0] === startA && min[1] === endA) ? [startB, endB] : [startA, endA] );
                return (!(min[1] < max[0]) && !(noDate._id === _id) );
        });
    }
    intersectsWithReservation(startA: number, endA: number): Reservation[] {
        const reservations = this.reservationService.reservations;
        return reservations.filter(res => {
            return startA <= res.date.valueOf() && res.date.valueOf() < endA;
        });
    }
    findById(id: string): NoDate {
        return this.noDates.filter(noDate => {return noDate._id === id})[0];
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