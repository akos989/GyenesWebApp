import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Subject } from 'rxjs/internal/Subject';

class Hour {
    constructor(public hour: number, public type: string, public remainingNumber: number) {}
}

@Injectable({providedIn: 'root'})
export class ReservationService {

    private _currentReservation: Reservation = null
    //backendbe felvenni és onnan lekérni
    gunNumber: number = 35;
    submitReservation = new Subject<boolean>();
    
    reservations: Reservation[] = [];

    getReservationsForMonth(date: Date) {
        //szerver kérés
        this.reservations = [
            new Reservation(
                '1', 'morvai', 'adf@asdf.com', '0123457898', 12, '', 'as2',
                new Date(2020, 4, 11, 12)
            ),
            new Reservation(
                '2', 'morvai', 'adf@asdf.com', '0123457898', 25, '', 'as2',
                new Date(2020, 4, 11, 12)
            ),
            new Reservation(
                '3', 'morvai', 'adf@asdf.com', '0123457898', 10, '', 'as2',
                new Date(2020, 4, 11, 10)
            ),
            new Reservation(
                '4', 'morvai', 'adf@asdf.com', '0123457898', 17, '', 'as2',
                new Date(2020, 4, 11, 16)
            )
            ];
    }

    checkOnSelectedDate(selectedDate: Date): Hour[] {
        const hours: Hour[] = [];
        for ( let hour = 8; hour <= 17; hour++ ) {
            let tmpPlayerNumber: number = this._currentReservation.playerNumber;
            const reservations = this.getReservationsOnSelected(selectedDate);
            for( let reservation of reservations ) {
                if ( reservation.date.getHours() === hour ) {
                    tmpPlayerNumber += reservation.playerNumber;
                }
            }
            if ( tmpPlayerNumber === this._currentReservation.playerNumber )
                hours.push(new Hour(hour, 'e', this.gunNumber - this._currentReservation.playerNumber));
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

    getReservationsOnSelected(selectedDate: Date): Reservation[] {
        const reservations: Reservation[] = [];
        for (let reservation of this.reservations) {
            if ( reservation.date.getFullYear() === selectedDate.getFullYear() && reservation.date.getMonth() === selectedDate.getMonth() && reservation.date.getDate() === selectedDate.getDate() )
                reservations.push(reservation);
        }
        return reservations;
    }

    get currentReservation(): Reservation {
        if (this._currentReservation == null) {
            this.retrieveFromLocalStorage();
        }
        return this._currentReservation;
    }
    set currentReservation(value: Reservation) {
        this._currentReservation = value;
        this.saveToLocalStorage();
    }

    submitCurrentReservation() {
        //http, backendbe küldés, ha nincs hiba submitRes(true), ha van false
        setTimeout(() => {
            console.log(this.currentReservation);
        }, 1500);
    }

    saveToLocalStorage() {
        localStorage.setItem(
            'currentReservation', JSON.stringify(this.currentReservation)
        );
    }

    retrieveFromLocalStorage() {
        const currentReservation =
            JSON.parse(localStorage.getItem('currentReservation'));
        this._currentReservation = currentReservation;
        const dateParts:string[] = currentReservation.date.split('T');
        this._currentReservation.date = new Date(
            +(dateParts[0].split('-')[0]),
            +(dateParts[0].split('-')[1]) - 1,
            +(dateParts[0].split('-')[2]),
            +(dateParts[1].split(':')[0]) + 2       
        );
    }
}