import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from './deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';
import { ReservationService } from '../reservations.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit, CanComponentDeactivate {

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {

  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.reservationService.submitted = false;
    return true;
  }
}
