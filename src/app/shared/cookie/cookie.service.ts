import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({providedIn: 'root'})
export class AcceptCookieService {
    constructor(private cookieService: CookieService) {}

    accepted = false;
    answered = new Subject<boolean>();

    displayAcceptCookies(): boolean {
        const cookieExists: boolean = this.cookieService.check('acceptCookies');
        if (!cookieExists) {
            return true;
        }
        this.accepted = true;
        return false;
    }
    acceptCookies() {
        let date = new Date();
        date.setMinutes(date.getMinutes() + 60);
        this.cookieService.set('acceptCookies', 'Cookies accepted', date);
        this.accepted = true;
        this.answered.next(true);
    }
    declineCookies() {
        this.accepted = false;
        this.answered.next(false);
    }
}