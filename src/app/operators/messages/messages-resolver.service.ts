import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MessagesService } from './messages.service';

@Injectable({providedIn: 'root'})
export class MessageResolver implements Resolve<any> {

    constructor(private messageService: MessagesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.messageService.messages.length > 0) {
            return this.messageService.messages;
        } else {
            return this.messageService.fetchMessages();
        }
    }
}