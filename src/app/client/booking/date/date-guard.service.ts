import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReservationService } from '../reservations.service';

@Injectable({ providedIn: 'root' })
export class DateGuard implements CanActivate {
    
    constructor(private reservationService: ReservationService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        :Observable<boolean> | Promise<boolean> | boolean {
            const currRes = this.reservationService.currentReservation;
            if (currRes && currRes.name && currRes.name !== "") {
                return true;
            }
            this.router.navigate(['/booking']);
            return false;
        }
}