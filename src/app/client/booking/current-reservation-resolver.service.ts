import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PackageService } from '../packages/package.service';
import { ReservationService } from './reservations.service';

@Injectable({providedIn: 'root'})
export class CurrentReservationResolver implements Resolve<void> {

    constructor(private packageService: PackageService,
                private reservationService: ReservationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const reservation = this.reservationService.currentReservation;
        if (reservation && reservation.packageId) {
            if (!(this.packageService.findType(reservation.packageId) &&
                  this.packageService.findById(reservation.packageId))
                ) 
            {
                reservation.packageId = null;
                this.reservationService.currentReservation = reservation;
            }
        }
    }
}