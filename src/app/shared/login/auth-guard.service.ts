import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor() {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        :Observable<boolean> | Promise<boolean> | boolean {
            return true;
        }
}