import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Modal } from 'src/app/shared/backend-modal/modal.model';
import { ModalService } from 'src/app/shared/backend-modal/modal.service';

@Injectable({providedIn: 'root'})
export class ModalResolver implements Resolve<Modal[]> {

    constructor(private modalService: ModalService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.modalService.modals.length > 0) {            
            return this.modalService.modals;
        } else {
            return this.modalService.fetchModals();
        }
    }
}