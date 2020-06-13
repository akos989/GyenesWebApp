import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService, User } from './auth.service';

@Injectable({providedIn: 'root'})
export class CurrentUserResolver implements Resolve<User> {

    constructor(private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<User> | Promise<User> | User {
        this.authService.fetchCurrentUser();
        return this.authService.currentUser;
    }
} 