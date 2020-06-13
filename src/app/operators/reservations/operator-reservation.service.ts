import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';

@Injectable({providedIn: 'root'})
export class OperatorResService {
    reservations: Reservation[] = [];
    reservationsChanged = new Subject<void>();
    constructor(private http: HttpClient, private errorHandler: ErrorHandleService) {}
    fetchReservations() {
        //backend kérés
        return this.http
            .get<{reservations: Reservation[]}>('api/reservations')
            .pipe(
                map(resData => {
                    resData.reservations.map(reservation => {
                        const date: Date = this.dateFromString(reservation.date.toString(), 0);
                        reservation.date = date;
                    });
                    return resData.reservations;
                }),
                tap(reservations => {
                    this.reservations = reservations;
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );
    }
    getAcitve(): Reservation[] {
        return this.reservations
            .filter(reservation => reservation.archived === false).slice();
    }
    getArchived(): Reservation[] {
        return this.reservations
            .filter(reservation => reservation.archived === true).slice();
    }
    deleteReservations(reservationIds: string[]) {
        let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: {
                ids: reservationIds
            },
          };
        this.http.delete('api/reservations', options
        ).subscribe(
            resData => {
                this.reservations = this.reservations.filter((reservation) => {
                    return !reservationIds.some(id => id === reservation._id);
                });
                this.reservationsChanged.next();
            },
            (errorRes: {error: {error: {error: string, message: any}}}) => {
                this.errorHandler.newError(errorRes.error.error);
            }
        );
    }
    archiveReservations(reservationIds: string[], toBeArchived: boolean) {
        this.http.post(
            'api/reservations/toggleArchived',
            {
                ids: reservationIds,
                isArchived: toBeArchived
            }
        ).subscribe(
            resData => {
                this.reservations
                    .filter((res) => reservationIds.some(id => id === res._id))
                    .map((res) => res.archived = toBeArchived);
                this.reservationsChanged.next();
            },
            (errorRes: {error: {error: {error: string, message: any}}}) => {
                this.errorHandler.newError(errorRes.error.error);
            }
        );
    }
    findById(id: string): Reservation {
        return this.reservations.filter((reservation)=> {return (reservation._id === id)})[0];
    }
    updateReservation(res: Reservation) {        
        this.reservations = this.reservations.map(reservation => {
            if (res._id === reservation._id) {
                reservation = res;
                reservation.date = this.dateFromString(reservation.date.toString(), 0);
            }
            return reservation;
        });
        this.reservationsChanged.next();
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