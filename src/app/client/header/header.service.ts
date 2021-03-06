import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({providedIn: 'root'})
export class HeaderService {
    small = new Subject<boolean>();
    auth = new Subject<boolean>();
    newPage(small: boolean) {
        this.small.next(small);
    }

    authPage(auth: boolean) {
        this.auth.next(auth);
    }
}