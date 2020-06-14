import { Component, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { Message } from 'src/app/shared/models/message.model';
import { MessageDetailModalComponent } from './message-detail-modal/message-detail-modal.component';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnDestroy {

  @Input() message: Message;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  closeSub: Subscription;

  constructor(private cFResolver: ComponentFactoryResolver) { }

  onOpen(event) {
    event.stopPropagation();
    event.preventDefault();
    const componentFactory =
      this.cFResolver.resolveComponentFactory(MessageDetailModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.message = this.message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
  ngOnDestroy() {
    if (this.closeSub)
      this.closeSub.unsubscribe();
  }
}
