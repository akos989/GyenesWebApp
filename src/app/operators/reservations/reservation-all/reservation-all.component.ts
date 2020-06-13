import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { OperatorResService } from '../operator-reservation.service';
import { Reservation } from 'src/app/shared/models/reservation.model';

@Component({
  selector: 'app-reservation-all',
  templateUrl: './reservation-all.component.html',
  styleUrls: ['./reservation-all.component.css']
})
export class ReservationAllComponent implements OnInit {
  activeMode: boolean = true;
  constructor(private oResService: OperatorResService) {}
  dateDesc:boolean = true;
  createDesc:boolean = true;
  dateSort: boolean = true;

  ngOnInit() {
    this.sortDate();
  }

  toggleActive(next: boolean, stepper: MatStepper) {
    this.activeMode = next;
    if (this.activeMode)
      stepper.previous();
    else
      stepper.next();
  }
  sortDate() {
    this.dateSort = true;
    this.oResService.sortReservations(this.oResService.dateComparator, this.dateDesc);
  }
  sortCreation() {
    this.dateSort = false;
    this.oResService.sortReservations(this.oResService.creationComparator, this.createDesc);
  }
}
