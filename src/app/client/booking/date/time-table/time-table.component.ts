import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { NoDatesService } from '../no-dates.service';
import { DateService } from '../date.service';
import { BookingService } from '../../booking.service';

class Hour {
  constructor(public hour: number, public type: string, public remainingNumber: number) {}
}

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  months: string[] = ['január', 'február', 'március', 'április', 'május', 'június',
                      'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  
  selectedDate: Date;
  @Output() close = new EventEmitter<boolean>();

  hours: Hour[] = [];
  selectedHour: Hour = null;
  prevSelect: Hour = null;
  closedReason: string = null;

  constructor(private reservationService: ReservationService,
              private noDateService: NoDatesService, private dateService: DateService,
              private bookingService: BookingService)
              { }

  ngOnInit() {
    this.hours =
      this.reservationService.checkHoursOnSelectedDate(this.selectedDate);
    this.closedReason = this.noDateService.isClosed(this.selectedDate);   

    const currReservation = this.reservationService.currentReservation;
    if ( currReservation && currReservation.date ) {
      if (this.selectedDate.getFullYear() === currReservation.date.getFullYear() &&
          this.selectedDate.getMonth() === currReservation.date.getMonth() &&
          this.selectedDate.getDate() === currReservation.date.getDate()) {
        this.findHour(currReservation.date.getHours());
      }
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
    if ( hour.type !== 'f' && hour.type !== 't' ) {
      this.selectedHour = hour;
    }
    else {
      this.selectedHour = null;
      this.bookingService.onDateSelected(false);
    }
  }

  onContinue() {
    this.selectedDate.setHours(this.selectedHour.hour);
    const currReservation = this.reservationService.currentReservation;
    currReservation.date = this.selectedDate;
    this.reservationService.currentReservation = currReservation;

    this.close.emit(true);
    this.bookingService.onDateSelected(true);
  }

  onClose() {
    this.close.emit(false);
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
