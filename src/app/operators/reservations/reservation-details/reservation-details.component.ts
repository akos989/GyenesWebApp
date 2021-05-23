import { Component, Input, Renderer2, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { ReservationDetailsModalComponent } from '../reservation-details-modal/reservation-details-modal.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnDestroy {

  @Input() reservation: Reservation;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  closeSub: Subscription;

  constructor(private renderer: Renderer2, private cFResolver: ComponentFactoryResolver,
              private router: Router) {
  }

  openModal(event) {
    event.stopPropagation();
    event.preventDefault();
    this.renderer.addClass(document.body, 'modal-open');
    const componentFactory =
      this.cFResolver.resolveComponentFactory(ReservationDetailsModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.reservation = this.reservation;
    this.closeSub = componentRef.instance.close.subscribe((result) => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      this.renderer.removeClass(document.body, 'modal-open');
      if (result) {
        this.router.navigate(['/operators', this.reservation._id, 'edit']);
      }
    });
  }

  ngOnDestroy() {
    if (this.closeSub)
      this.closeSub.unsubscribe();
  }
}
