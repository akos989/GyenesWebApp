import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { Package } from 'src/app/shared/models/package.model';
import { ReservationService } from '../../booking/reservations.service';
import { PackageModalComponent } from './modal/package-modal.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { BookingService } from '../../booking/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  routeUrl: string = '';

  constructor(private reservationService: ReservationService,
              private cFResolver: ComponentFactoryResolver,
              private renderer: Renderer2, private bookingService: BookingService,
              private route: ActivatedRoute,
              private router: Router) { }

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
      });
    this.routeUrl = this.route.snapshot.url[0].path;
  }

  continue() {
    let currentReservation = this.reservationService.currentReservation;
    currentReservation.packageId = this.package._id;
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

  reserv() {
    this.continue();
    if (this.routeUrl === 'prices')
      this.router.navigate(['/booking']);
  }

  ngOnDestroy() {
    if(this.closeSub)
      this.closeSub.unsubscribe();
    if(this.selectSub)
      this.selectSub.unsubscribe();
  }
}