import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SmallHeaderResolver implements Resolve<boolean> {

    constructor(private headerService: HeaderService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean> | Promise<boolean> | boolean {
        const routePart: string = route.url[0].path.split('/')[0];
        if (route.url[0].path === '' || route.url[0].path === 'home') {
            this.headerService.newPage(false);
            return false;
        }
        this.headerService.newPage(true);
        return true;
    }
}
