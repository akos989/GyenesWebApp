import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { Message } from 'src/app/shared/models/message.model';
import { MessagesService } from '../../messages.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/login/auth.service';

@Component({
  selector: 'app-message-detail-modal',
  templateUrl: './message-detail-modal.component.html',
  styleUrls: ['../../../reservations/reservation-details-modal/reservation-details-modal.component.css']
})
export class MessageDetailModalComponent implements OnInit, OnDestroy {

  @Input() message: Message;
  @Output() close = new EventEmitter<void>();
  @ViewChild('f') messageForm: NgForm;

  constructor(private messageService: MessagesService, private authService: AuthService,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'modal-open');
  }
  onClose() {
    this.close.emit();
  }
  onReply() {
    if (this.messageForm.form.controls.replyBody.value !== '') {
      this.messageService.reply(
        this.messageForm.form.controls.replyBody.value, 
        this.authService.currentUser.email, this.message._id
      );
    }
  }
  onDelete() {
    this.messageService.delete([this.message._id]);
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
