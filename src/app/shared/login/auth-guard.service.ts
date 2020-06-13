import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        :Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            const routePart: string = route.url[0].path.split('/')[0];
            if (this.authService.currentUser) {
                if (routePart === 'login')
                    return this.router.createUrlTree(['/operators']);
                return true;
            }
            if (routePart === 'login')
                return true;
            return this.router.createUrlTree(['/login']);
        }
}