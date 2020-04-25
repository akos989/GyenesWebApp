import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  currentReservation: Reservation;
  @ViewChild('f') submitForm: NgForm;
  isLoading: boolean = false;

  constructor(private reservationService: ReservationService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentReservation = this.reservationService.currentReservation;
  }

  onSubmit() {
    if (this.submitForm.form.controls.admission.valid &&
        this.submitForm.form.controls.admission.touched)
    {
      this.isLoading = true;
      //ez majd http observable-t ad vissza és subscribe fog kelleni
      this.reservationService.submitCurrentReservation();
      this.isLoading = false;
      
      this.router.navigate(['/booking/confirm']);
    }
  }

}
