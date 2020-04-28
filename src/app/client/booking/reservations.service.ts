import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';

import { Reservation } from '../../shared/models/reservation.model';
import { PackageService } from '../packages/package.service';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { throwError } from 'rxjs/internal/observable/throwError';

class Hour {
    constructor(public hour: number, public type: string, public remainingNumber: number) {}
}

class Range {
    constructor (public start:number, public end: number) {}
}

@Injectable({providedIn: 'root'})
export class ReservationService {

    constructor(private packageService: PackageService, private http: HttpClient,
                private errorHandler: ErrorHandleService) {}

    private _currentReservation: Reservation = null;   

    public get currentReservation(): Reservation {
        if (this._currentReservation == null) {
            this.retrieveFromLocalStorage();
        }
        return this._currentReservation;
    }
    public set currentReservation(value: Reservation) {
        this._currentReservation = value;
        this.saveToLocalStorage();
    }
    
    //backendbe felvenni és onnan lekérni
    gunNumber: number = 35;
    submitted: boolean = false;
    
    reservations: Reservation[] = [];

    loadReservations() {
        //szerver kérés
        return this.http
            .get<{reservations: Reservation[]}>('api/reservations/allForClient')
            .pipe(
                map((responseData) => {
                    const reservationArray: Reservation[] = [];

                    for (const reservation of responseData.reservations) {                    
                        reservationArray.push(new Reservation(
                            null, null, null, null, reservation.playerNumber, null,
                            reservation.packageId,
                            this.dateFromString(reservation.date.toString(), 0)
                        ));
                    }
                    return reservationArray;
                }),
                tap(reservations => {
                    this.reservations = reservations;
                }),
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            );

        //  this.reservations = [
        //     new Reservation(
        //         '1', 'morvai', 'adf@asdf.com', '0123457898', 12, '', '5e7510c39f78823051c57755',
        //         new Date(2020, 4, 11, 12)
        //     ),
        //     new Reservation(
        //         '2', 'morvai', 'adf@asdf.com', '0123457898', 25, '', '3',
        //         new Date(2020, 4, 11, 12)
        //     ),
        //     new Reservation(
        //         '3', 'morvai', 'adf@asdf.com', '0123457898', 10, '', '5e7510c39f78823051c57755',
        //         new Date(2020, 4, 11, 10)
        //     ),
        //     new Reservation(
        //         '4', 'morvai', 'adf@asdf.com', '0123457898', 17, '', '5e7510c39f78823051c57755',
        //         new Date(2020, 4, 11, 16)
        //     )
        //     ];
    }

    checkHoursOnSelectedDate(selectedDate: Date): Hour[] {
        const hours: Hour[] = [];
        for ( let hour = 8; hour <= 17; hour++ ) {
            let tmpPlayerNumber: number = this._currentReservation.playerNumber;
            const reservations = this.getReservationsOnSelectedDate(selectedDate);
            for( let reservation of reservations ) {
                if ( this.intersect(hour, reservation) ) {
                    tmpPlayerNumber += reservation.playerNumber;
                }
            }

            if ( tmpPlayerNumber === this._currentReservation.playerNumber )
                hours.push(new Hour(hour, 'e', this.gunNumber));
            else if (tmpPlayerNumber <= this.gunNumber) {
                const remainingNumber =
                    this.gunNumber - (tmpPlayerNumber - this._currentReservation.playerNumber);
                hours.push(new Hour(hour, 'p', remainingNumber));
            } else {
                hours.push(new Hour(hour, 'f', 0));
            }
        }

        return hours;
    }
    
    submitCurrentReservation() {
        //http, backendbe küldés, ha nincs hiba submitRes(true), ha van false          
        const body = {
            name: this._currentReservation.name,
            email: this._currentReservation.email,
            phoneNumber: this._currentReservation.phoneNumber,
            playerNumber: this._currentReservation.playerNumber,
            notes: this._currentReservation.notes,
            packageId: this._currentReservation.packageId,
            date: this.stringFromDate(this._currentReservation.date)
        };

        return this.http.post('/api/reservations/', body);            
    }

    private getReservationsOnSelectedDate(selectedDate: Date): Reservation[] {
        const reservations: Reservation[] = [];
        for (let reservation of this.reservations) {
            if ( reservation.date.getFullYear() === selectedDate.getFullYear() &&
                 reservation.date.getMonth() === selectedDate.getMonth() &&
                 reservation.date.getDate() === selectedDate.getDate()
                )
                reservations.push(reservation);
        }
        return reservations;
    }
    
    private saveToLocalStorage() {
        localStorage.setItem(
            'currentReservation', JSON.stringify(this._currentReservation)
        );
    }
        
    private retrieveFromLocalStorage() {
        const lStorageReserv =
        JSON.parse(localStorage.getItem('currentReservation'));

        if (lStorageReserv !== null && lStorageReserv !== "") {
            this._currentReservation = lStorageReserv;
            if ( lStorageReserv.date !== null && lStorageReserv.date !== '' ) {
                this.setCurrentReservationDateFromString( lStorageReserv.date );
            }
        }    
    }

    private setCurrentReservationDateFromString(dateString: string) {
        this._currentReservation.date = this.dateFromString(dateString, 2);

        if ( this._currentReservation.date.valueOf() <= new Date().valueOf() ) {
            this._currentReservation.date = null;
            this.saveToLocalStorage();
        }
    }

    private intersect(hour: number, reservation: Reservation): boolean {
        const a = new Range(
            reservation.date.getHours(),
            reservation.date.getHours() +
            this.packageService.findById(reservation.packageId).duration
        );
        const b = new Range(
            hour, hour +
            this.packageService.findById(this.currentReservation.packageId).duration
        );

        const min = (a.start < b.start) ? a : b;
        const max = (a === min)? b : a;

        if ( min.end <= max.start )
            return false;
        
        return true;
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

    private stringFromDate(date: Date): string {
        const month: string = ((date.getMonth() + 1) >=10) ?
            (date.getMonth() + 1).toString() : "0"+(date.getMonth() + 1);
        const day: string = ((date.getDate()) >=10) ?
            (date.getDate()).toString() : "0"+(date.getDate());
        const hour: string = ((date.getHours()) >=10) ?
            (date.getHours()).toString() : "0"+(date.getHours());
                        
        return date.getFullYear() + "-" + month + "-" + day + "T" + hour + ":00Z";
    }

}