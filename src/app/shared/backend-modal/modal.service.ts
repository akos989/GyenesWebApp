import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Modal } from './modal.model';
import { AcceptCookieService } from '../cookie/cookie.service';

@Injectable({providedIn: 'root'})
export class ModalService {

    modal: Modal = null;

    constructor(private cookieService: CookieService,
                private acceptCookieS: AcceptCookieService)
    {
        this.acceptCookieS.answered
            .subscribe((accepted) => {
                if (accepted) {
                    let date = new Date();
                    date.setMinutes(date.getMinutes() + 60);
                    this.cookieService.set( 'modal', 'modal viewed', date);
                }
            });
    }
    checkModal(): Modal {
        if (!this.acceptCookieS.accepted) {
            this.fetchModal();
            return this.modal;
        }
        const cookieExists: boolean = this.cookieService.check('modal');
        if (!cookieExists) {
            this.fetchModal();
            let date = new Date();
            date.setMinutes(date.getMinutes() + 60);
            this.cookieService.set( 'modal', 'modal viewed', date);
        }
        return this.modal;
    }

    fetchModal() {
        //backend kérés

        this.modal = new Modal('Nyitási akció', 'Június 15-ig mindenki 20% százalék kedvezményt kap!',
        '../../../../assets/pictures/paintball.jpg');
    }
}