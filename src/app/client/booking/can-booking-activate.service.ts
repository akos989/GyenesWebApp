import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReservationService } from './reservations.service';

@Injectable({ providedIn: 'root' })
export class BookingGuard implements CanActivate {
    
    constructor(private reservationService: ReservationService,
                private router: Router,
                private activeRoute: ActivatedRoute) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        :Observable<boolean> | Promise<boolean> | boolean 
    {
            if (this.reservationService.submitted) {

                this.activeRoute.fragment.subscribe((value)=> {
                    if (value) {
                        if (value === 'booking')
                            this.router.navigate(['/confirm'], { fragment: '' });
                        else if(value === '')
                        return false;
                    }
                });
                this.router.navigate(['/confirm'], { fragment: 'booking' });
                return false;
            }
            return true;
    }
}