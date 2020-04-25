import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReservationService } from 'src/app/client/booking/reservations.service';

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
  hours: Hour[] = [];
  selectedHour: Hour = null;
  prevSelect: Hour = null;

  constructor(private route: ActivatedRoute, private router: Router,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.selectedDate = new Date(+params['date']);
          this.hours = [];
          this.selectedHour = null;
          this.hours =
            this.reservationService.checkHoursOnSelectedDate(this.selectedDate);

          const currReservDate: Date =
            this.reservationService.currentReservation.date;
          if (currReservDate && !this.prevSelect) {
            this.findHour(currReservDate.getHours());
          }
        }
      );
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
