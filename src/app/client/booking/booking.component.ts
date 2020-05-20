import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { BookingService } from './booking.service';
import { Subscription } from 'rxjs';
import { ReservationService } from './reservations.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy, AfterViewInit {

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

  ngAfterViewInit() {
  }

  goForward(stepper: MatStepper) {
    stepper.next();
    this.scrollTop();
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
    this.scrollTop();
  }

  ngOnDestroy() {
    this.dateSelectSub.unsubscribe();
    this.infoChaneSub.unsubscribe();
    this.packageSub.unsubscribe();
  }
  scrollTop() {
    const positon: number = document.getElementById('stepper').offsetTop - 70;

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > positon) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 4);
  }
}
