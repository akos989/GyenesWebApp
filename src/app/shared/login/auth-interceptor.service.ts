import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const user: User = this.authService.currentUser;
        if (!user) {
            return next.handle(req);
        }
        const modifiedReq = req.clone({
            headers: new HttpHeaders({
                'Authorization': 'bearer ' + user.token,
            })
        });
        return next.handle(modifiedReq);
    }
}