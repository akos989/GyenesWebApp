import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { Package } from 'src/app/shared/models/package.model';
import { PackageService } from '../../packages/package.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit, OnDestroy {

  months: string[] = ['január', 'február', 'március', 'április', 'május', 'június',
                      'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  
  currentReservation: Reservation;
  @ViewChild('f') submitForm: NgForm;
  isLoading: boolean = false;
  submitResultSub: Subscription;
  reservationUpdateSub: Subscription;
  package: Package = null;

  constructor(private reservationService: ReservationService,
              private router: Router, private errorHandler: ErrorHandleService,
              private packageService: PackageService) { }

  ngOnInit(): void {
    this.currentReservation = this.reservationService.currentReservation;
    this.package = this.packageService.findById(this.currentReservation.packageId);
    this.reservationUpdateSub = this.reservationService.currReservationUpdated
      .subscribe((currReservation: Reservation) => {
        setTimeout(() => {
          this.currentReservation = currReservation;
          this.package = this.packageService.findById(this.currentReservation.packageId)
        }, 0);
      });
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
