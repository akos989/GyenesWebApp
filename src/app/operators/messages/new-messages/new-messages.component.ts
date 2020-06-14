import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from '../messages.service';
import { Message } from 'src/app/shared/models/message.model';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['../../reservations/reservation-list/reservation-list.component.css']
})
export class NewMessagesComponent{

  newMessageSub: Subscription;
  messages: Message[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.updateMessages();
    this.newMessageSub = this.messageService.newMessages
      .subscribe(() => {
        this.updateMessages();
      });
  }
  private updateMessages() {
    this.messages = this.messageService.getNotReplied();
  }
  ngOnDestroy() {
    this.newMessageSub.unsubscribe();
  }

}
