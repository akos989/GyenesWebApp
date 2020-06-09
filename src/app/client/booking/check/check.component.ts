import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { Package } from 'src/app/shared/models/package.model';
import { PackageService } from '../../packages/package.service';
import { PackageType } from 'src/app/shared/models/package-type.model';

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
  packageType: PackageType = null;
  ready: boolean = false;
  @Input() operator = false;

  constructor(private reservationService: ReservationService,
              private router: Router, private errorHandler: ErrorHandleService,
              private packageService: PackageService) { }

  ngOnInit(): void {
    if (this.reservationService.isCurrentReady()) {
      this.ready = true;
      this.currentReservation = this.reservationService.currentReservation;
      this.package = this.packageService.findById(this.currentReservation.packageId);
      this.packageType = this.packageService.findType(this.package._id);
    }

    this.reservationUpdateSub = this.reservationService.currReservationUpdated
      .subscribe((currReservation: Reservation) => {
        if (this.reservationService.isCurrentReady()) {
          setTimeout(() => {
            this.ready = true;
            this.currentReservation = currReservation;
            this.package = this.packageService.findById(this.currentReservation.packageId);
            this.packageType = this.packageService.findType(this.package._id);
          }, 0);
        }
      });
  }

  onSubmit() {
    if ((this.submitForm && this.submitForm.form.controls.admission.valid &&
        this.submitForm.form.controls.admission.touched) || this.operator)
    {
      this.isLoading = true;
      this.submitResultSub = this.reservationService.submitCurrentReservation()
        .subscribe(
          responseData => {
            this.isLoading = false;
            if (!this.operator) {
              this.router.navigate(['/confirm']);
              this.reservationService.submitted = true;
            }
            else {
              this.router.navigate(['/operators']);
              this.reservationService.currentReservation = new Reservation('1', null, null, null, null, null, null, null);
            }
          },
          (errorRes: {error: {error: {error: string, message: any}}}) => {
              this.isLoading = false;
              this.errorHandler.newError(errorRes.error.error);
          }
        );    
    }
  }

  touch() {
    this.submitForm.form.controls.admission.markAsTouched();
  }

  ngOnDestroy() {
    if (this.submitResultSub)
      this.submitResultSub.unsubscribe();
  }

}
