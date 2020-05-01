import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingService } from './booking.service';
import { Subscription } from 'rxjs';
import { ReservationService } from './reservations.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {

  private packageSub: Subscription;
  private infoChaneSub: Subscription;
  private dateSelectSub: Subscription;

  packageNext: boolean = false;
  dateNext: boolean = false;
  infoNext: boolean = false;

  constructor(private bookingService: BookingService,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    const currentReservation = this.reservationService.currentReservation;
    if ( currentReservation ) {
      if (currentReservation.packageId)
        this.packageNext = true;
      if (currentReservation.name)
        this.infoNext = true;
    }

    this.packageSub = this.bookingService.packageSelected
      .subscribe( result => {
        if (result && result != "")
          this.packageNext = true;
        else
          this.packageNext = false
      });

    this.infoChaneSub = this.bookingService.infoChange
      .subscribe( result => {
        if (result !== this.infoNext)
          setTimeout(() => {
            this.infoNext = result;
          }, 0);
      });

      this.dateSelectSub = this.bookingService.dateSelected
      .subscribe( result => {
        setTimeout(()=> {
          this.dateNext = result;
        }, 0);
      });
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  ngOnDestroy() {
    this.dateSelectSub.unsubscribe();
    this.infoChaneSub.unsubscribe();
    this.packageSub.unsubscribe();
  }

}
