import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReservationService } from './reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';

@Injectable({providedIn: 'root'})
export class ReservationResolver implements Resolve<Reservation[]> {

    constructor(private reservationService: ReservationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       // if (this.reservationService.reservations.length > 0) {
           this.reservationService.loadReservations()
            return this.reservationService.reservations;
        // } else {
        //     return this.reservationService.loadReservations();
        // }
    }
}