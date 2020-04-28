import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReservationService } from 'src/app/client/booking/reservations.service';
import { NoDatesService } from '../no-dates.service';
import { Subscription } from 'rxjs';
import { DateService } from '../date.service';

class Hour {
  constructor(public hour: number, public type: string, public remainingNumber: number) {}
}

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  selectedDate: Date;
  selectChangedSub: Subscription;

  hours: Hour[] = [];
  selectedHour: Hour = null;
  prevSelect: Hour = null;
  closedReason: string = null;

  constructor(private router: Router, private reservationService: ReservationService,
              private noDateService: NoDatesService, private dateService: DateService)
              { }

  ngOnInit() {
    this.selectChangedSub = this.dateService.selectionChanged
      .subscribe((date: Date) => {
        this.selectedDate = date;
        this.closedReason = this.noDateService.isClosed(this.selectedDate);
        this.hours = [];
        this.selectedHour = null;
        
        this.hours =
          this.reservationService.checkHoursOnSelectedDate(this.selectedDate);
      });
    const currReservDate: Date =
      this.reservationService.currentReservation.date;
    if (currReservDate && !this.prevSelect) {
      this.selectedDate = currReservDate;
      this.hours =
        this.reservationService.checkHoursOnSelectedDate(this.selectedDate);
      this.findHour(currReservDate.getHours());
    }
  }

  findHour(reservationHour: number) {
    for( const hour of this.hours ) {
      if ( reservationHour == hour.hour ) {
        this.prevSelect = hour;
        this.selectHour(hour);
      }
    }
  }

  selectHour(hour: Hour) {
    if ( hour.type !== 'f' )
      this.selectedHour = hour;
    else
      this.selectedHour = null;
  }

  onContinue() {
    this.selectedDate.setHours(this.selectedHour.hour);
    const currReservation = this.reservationService.currentReservation;
    currReservation.date = this.selectedDate;
    this.reservationService.currentReservation = currReservation;

    this.router.navigate(['/booking/check']);
  }

  getMorningHours(): Hour[] {
    return this.hours.slice(0, 4);
  }

  getAfternoonHours(): Hour[] {
    return this.hours.slice(4, 9);
  }

  getEveningHours(): Hour[] {
    return this.hours.slice(9);
  }
}
