import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
  }
  openModal(event) {
    event.stopPropagation();
    event.preventDefault();
  }
}
