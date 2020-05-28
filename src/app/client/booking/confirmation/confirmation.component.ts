import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from './deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';
import { ReservationService } from '../reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit, CanComponentDeactivate {

  reservation: Reservation = null;

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.reservation = this.reservationService.currentReservation;
  }

  newReservation() {
    this.reservationService.submitted = false;
    this.reservationService.makeNewReservation();
    this.router.navigate(['/booking']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.reservationService.submitted = false;
    return true;
  }
}
