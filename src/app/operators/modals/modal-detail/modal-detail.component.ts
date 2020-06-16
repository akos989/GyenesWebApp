import { Component, Input, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Modal } from 'src/app/shared/backend-modal/modal.model';
import { ModalDetailModalComponent } from '../modal-detail-modal/modal-detail-modal.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: []
})
export class ModalDetailComponent implements OnDestroy {

  @Input() modal: Modal;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  closeSub: Subscription;

  constructor(private cFResolver: ComponentFactoryResolver) { }

  onOpen(event) {
    event.stopPropagation();
    event.preventDefault();
    const componentFactory =
      this.cFResolver.resolveComponentFactory(ModalDetailModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.modal = this.modal;
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
