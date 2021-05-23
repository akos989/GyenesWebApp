import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import {MessagesService} from '../messages.service';
import {Subscription} from 'rxjs';
import {Message} from 'src/app/shared/models/message.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['../../reservations/reservation-list/reservation-list.component.css']
})
export class MessagesListComponent implements OnInit, OnDestroy, AfterViewInit {

  newMessgeSub: Subscription;
  messages: Message[] = [];
  @ViewChild('f') messagesForm: NgForm;
  formChangeSub: Subscription;
  checkedNum = 0;
  allValue = false;

  constructor(protected messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.updateMessages();
    this.newMessgeSub = this.messageService.newMessages
      .subscribe(() => {
        this.updateMessages();
      });
  }

  ngAfterViewInit() {
    this.formChangeSub = this.messagesForm.form.valueChanges
      .subscribe(() => {
        this.onChanges();
      });
  }

  onChanges() {
    this.checkedNum = this.getCheckedMessages().length;
    if (this.checkedNum === this.messages.length) {
      this.allValue = true;
    } else {
      this.allValue = false;
    }
  }

  checkAll() {
    this.allValue = !this.allValue;
    const check: boolean = this.allValue;
    this.messages.forEach((message) => {
      if (this.messagesForm.form.get(message._id.toString())) {
        this.messagesForm.form.get(message._id.toString()).patchValue(check);
      }
    });
  }

  onDelete() {
    this.messageService.delete(this.getCheckedIds());
  }

  private updateMessages() {
    this.messages = this.messageService.messages;
  }

  private getCheckedMessages(): Message[] {
    return this.messages
      .filter((message) => {
        if (this.messagesForm.form.get(message._id.toString())) {
          return this.messagesForm.form.get(message._id.toString()).value;
        }
        return false;
      });
  }

  private getCheckedIds(): string[] {
    return this.getCheckedMessages()
      .map((message) => {
        return message._id;
      });
  }

  ngOnDestroy(): void {
    this.newMessgeSub.unsubscribe();
    this.formChangeSub.unsubscribe();
  }
}
