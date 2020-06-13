import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReservationService } from 'src/app/client/booking/reservations.service';
import { OperatorResService } from '../operator-reservation.service';

@Injectable({providedIn: 'root'})
export class NewReservationResolver implements Resolve<any> {

    constructor(private reservationService: ReservationService,
                private oResService: OperatorResService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(route.params.id) {
            this.reservationService.currentReservation = this.oResService.findById(route.params.id);
            this.reservationService.isOperatorEditing = true;
        }
        else
            this.reservationService.isOperatorEditing = false;
    }
}