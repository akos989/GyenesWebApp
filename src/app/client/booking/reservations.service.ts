import { Injectable } from '@angular/core';
import { Reservation } from '../../shared/models/reservation.model';
import { Subject } from 'rxjs/internal/Subject';
import { PackageService } from '../packages/package.service';

class Hour {
    constructor(public hour: number, public type: string, public remainingNumber: number) {}
}

class Range {
    constructor (public start:number, public end: number) {}
}

@Injectable({providedIn: 'root'})
export class ReservationService {

    constructor(private packageService: PackageService) {}

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
    submitReservation = new Subject<boolean>();
    
    reservations: Reservation[] = [];

    loadReservationsForMonth(date: Date) {
        //szerver kérés
        this.reservations = [
            new Reservation(
                '1', 'morvai', 'adf@asdf.com', '0123457898', 12, '', '2',
                new Date(2020, 4, 11, 12)
            ),
            new Reservation(
                '2', 'morvai', 'adf@asdf.com', '0123457898', 25, '', '3',
                new Date(2020, 4, 11, 12)
            ),
            new Reservation(
                '3', 'morvai', 'adf@asdf.com', '0123457898', 10, '', '2',
                new Date(2020, 4, 11, 10)
            ),
            new Reservation(
                '4', 'morvai', 'adf@asdf.com', '0123457898', 17, '', '2',
                new Date(2020, 4, 11, 16)
            )
            ];
    }

    checkHoursOnSelectedDate(selectedDate: Date): Hour[] {
        const hours: Hour[] = [];
        for ( let hour = 8; hour <= 17; hour++ ) {
            let tmpPlayerNumber: number = this._currentReservation.playerNumber;
            const reservations = this.getReservationsOnSelectedDate(selectedDate);
            for( let reservation of reservations ) {
                // if ( reservation.date.getHours() === hour ) {
                //     tmpPlayerNumber += reservation.playerNumber;
                // }                
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
        this.submitted = true;
        setTimeout(() => {
            console.log(this._currentReservation);
        }, 1500);
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
        const dateParts:string[] = dateString.split('T');

        this._currentReservation.date = new Date(
            +(dateParts[0].split('-')[0]),
            +(dateParts[0].split('-')[1]) - 1,
            +(dateParts[0].split('-')[2]),
            +(dateParts[1].split(':')[0]) + 2       
        );
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

}