import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { Package } from 'src/app/shared/models/package.model';
import { ReservationService } from '../../booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PackageModalComponent } from './modal/package-modal.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { BookingService } from '../../booking/booking.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit, OnDestroy {

  @Input() package: Package;
  selected: boolean = false;
  selectSub: Subscription;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private reservationService: ReservationService,
              private cFResolver: ComponentFactoryResolver,
              private renderer: Renderer2, private bookingService: BookingService) { }

  ngOnInit(): void {
    const currentReservation = this.reservationService.currentReservation;

    if ( currentReservation && currentReservation.packageId === this.package._id ) {
      this.selected = true;
      this.bookingService.onSelectPackage(this.package._id);
    }
    this.selectSub = this.bookingService.packageSelected
      .subscribe( id => {
        if (id === this.package._id) {
          this.selected = true;
        }
        else {
          this.selected = false;
        }
      })
  }

  continue() {
    let currentReservation = this.reservationService.currentReservation;
    if (currentReservation) {
      currentReservation.packageId = this.package._id;
    } else {
      currentReservation = new Reservation(
        '1', null, null, null, null, null, this.package._id, null
      );
    }
    this.reservationService.currentReservation = currentReservation;
    this.selected = true;
    this.bookingService.onSelectPackage(this.package._id);
  }

  openDialog(event): void {
    event.stopPropagation();
    this.renderer.addClass(document.body, 'modal-open');
    const componentFactory =
      this.cFResolver.resolveComponentFactory(PackageModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.package = this.package;
    this.closeSub = componentRef.instance.close.subscribe((result) => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      this.renderer.removeClass(document.body, 'modal-open');
      if (result) {
        this.continue();
      }
    });
  }

  ngOnDestroy() {
    if(this.closeSub)
      this.closeSub.unsubscribe();
    if(this.selectSub)
      this.selectSub.unsubscribe();
  }
}