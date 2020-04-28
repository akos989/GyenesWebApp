import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit, OnDestroy {

  currentReservation: Reservation;
  @ViewChild('f') submitForm: NgForm;
  isLoading: boolean = false;
  submitResultSub: Subscription;

  constructor(private reservationService: ReservationService,
              private router: Router, private errorHandler: ErrorHandleService) { }

  ngOnInit(): void {
    this.currentReservation = this.reservationService.currentReservation;
  }

  onSubmit() {
    if (this.submitForm.form.controls.admission.valid &&
        this.submitForm.form.controls.admission.touched)
    {
      this.isLoading = true;
      //ez majd http observable-t ad vissza és subscribe fog kelleni
      this.submitResultSub = this.reservationService.submitCurrentReservation()
        .subscribe(
          responseData => {
            this.isLoading = false;
            this.reservationService.submitted = true;
            this.router.navigate(['/booking/confirm']);
          },
          (errorRes: {error: {error: {error: string, message: any}}}) => {
              this.isLoading = false;
              this.errorHandler.newError(errorRes.error.error);
          }
        );    
    }
  }

  ngOnDestroy() {
    if (this.submitResultSub)
      this.submitResultSub.unsubscribe();
  }

}
