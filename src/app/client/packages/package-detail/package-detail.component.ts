import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { Package } from 'src/app/shared/models/package.model';
import { ReservationService } from '../../booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {

  @Input() package: Package;
  selected: boolean = false;

  constructor(private reservationService: ReservationService,
              private router: Router) { }

  ngOnInit(): void {
    const currentReservation = this.reservationService.currentReservation;
    if ( currentReservation && currentReservation.packageId === this.package.id ) {
      this.selected = true;
    }
  }

  continue() {
    let currentReservation = this.reservationService.currentReservation;
    if (currentReservation) {
      currentReservation.packageId = this.package.id;
    } else {
      currentReservation = new Reservation(
        null, null, null, null, null, null, this.package.id, null
      );
    }
    this.reservationService.currentReservation = currentReservation;
    this.router.navigate(['/booking/info']);
  }
}
