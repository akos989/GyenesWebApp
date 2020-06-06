import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { OperatorResService } from './operator-reservation.service';

@Injectable({providedIn: 'root'})
export class OperatorsReservationResolver implements Resolve<Reservation[]> {

    constructor(private oRService: OperatorResService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if (this.oRService.reservations.length > 0) {
            return this.oRService.reservations;
        } else {
            return this.oRService.fetchReservations();
        }
    }
}