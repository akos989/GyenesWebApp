import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NoDatesService } from './no-dates.service';

@Injectable({providedIn: 'root'})
export class NoDateResolver implements Resolve<any[]> {

    constructor(private noDateService: NoDatesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if (this.noDateService.noDates.length > 0) {
            return this.noDateService.noDates;
        } else {
            return this.noDateService.loadNoDates();
        }
    }
}