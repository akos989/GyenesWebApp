import { Component, OnInit, Renderer2, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { NoDatesService } from '../no-dates.service';
import { Reservation } from 'src/app/shared/models/reservation.model';

import { TimeTableComponent } from '../time-table/time-table.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';
import { BookingService } from '../../booking.service';

class Day {
  public date: Date;
  public today: boolean = false;
  public disabled: boolean = false;
  public closed: boolean = false;
  public off: boolean = false;
  public selected: boolean = false;
}

class Week {
  public days: Day[] = [];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {

  months: string[] = ['január', 'február', 'március', 'április', 'május', 'június',
                      'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
  
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  closeSub: Subscription;

  weeks: Week[] = [];
  today: Date;
  refDate: Date;
  selectedDay: Date = null;

  constructor(private reservationService: ReservationService,
              private noDatesService: NoDatesService, private renderer: Renderer2,
              private cFResolver: ComponentFactoryResolver,
              private bookinService: BookingService) { }

  ngOnInit(): void {
    this.today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.refDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const reservation: Reservation = this.reservationService.currentReservation;

    if (reservation && reservation.date) {
      this.refDate = new Date(reservation.date.valueOf());
    }
    this.createWeeks(this.refDate);
  }

  createWeeks(refDate: Date) {
    this.weeks = [];
    let maxDays: number = this.getDaysOfMonth(refDate);
    const fistDay: number = this.getFirstDayOfMonth(refDate);
    let tmpDate: Date = new Date(refDate.getFullYear(), refDate.getMonth(), 1);
    
    for (let i = 0; i < 5; i++) {
      let tmpWeek = new Week();
      for (let j = 1; j <= 7; j++) {
        let tmpDay = new Day();
        if ((i === 0 && j < fistDay) || (maxDays <= 0) )
          tmpDay.off = true;
        else {
          tmpDay.date = tmpDate;
          if (tmpDate < this.today) {
            tmpDay.disabled = true;
          } else if (tmpDate.getTime() === this.today.getTime()) {
            tmpDay.disabled = false;
            tmpDay.today = true;
            if ( this.noDatesService.isClosed(tmpDate) !== '' ) {
              tmpDay.closed = true;
            }
          } else {
            tmpDay.disabled = false;
            if ( this.noDatesService.isClosed(tmpDate) ) {
              tmpDay.closed = true;
            }
          }
          tmpDate = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate() + 1);
          maxDays--;
          if(this.checkSelection(tmpDate)) {
            tmpDay.selected = true;
            this.bookinService.onDateSelected(true);
          }
        }
        tmpWeek.days.push(tmpDay);
      }
      this.weeks.push(tmpWeek);
    }
  }

  prevMonth() {
    const prevDate = new Date(this.refDate.setMonth(this.refDate.getMonth() - 1));
    if (
      (prevDate.valueOf() > this.today.valueOf()) ||
      (prevDate.getMonth() === this.today.getMonth())
    ) {
      this.refDate = prevDate;
      this.createWeeks(this.refDate);
    } else {
      this.refDate.setMonth(this.refDate.getMonth() + 1);
    }
  }

  nextMonth() {
    this.refDate.setMonth(this.refDate.getMonth() + 1);
    this.createWeeks(this.refDate);
  }

  jumpToToday() {
    this.refDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    this.createWeeks(this.refDate);
  }

  notThisMonth() {
    const isToday = (
      this.refDate.getFullYear() === this.today.getFullYear() &&
      this.refDate.getMonth() === this.today.getMonth()
    );
    return !isToday;
  }
  
  hasPrevMonth() {
    const prevDate = new Date(this.refDate.setMonth(this.refDate.getMonth() - 1));
    if (
      (prevDate.valueOf() > this.today.valueOf()) ||
      (prevDate.getMonth() === this.today.getMonth())
    ) {
      this.refDate.setMonth(this.refDate.getMonth() + 1);
      return true;
    }

    this.refDate.setMonth(this.refDate.getMonth() + 1);
    return false;
  }

  private getDaysOfMonth(date: Date): number {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;

    return new Date(year, month, 0).getDate();
  }

  private getFirstDayOfMonth(date: Date): number {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();

    return new Date(year, month, 1).getDay();
  }

  selectDay(day: Day) {
    if (day.off) return;
    this.renderer.addClass(document.body, 'modal-open');
    const componentFactory =
      this.cFResolver.resolveComponentFactory(TimeTableComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.selectedDate = day.date;
    this.closeSub = componentRef.instance.close.subscribe((result) => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      this.renderer.removeClass(document.body, 'modal-open');
      if (result) {
        this.removeSelection();
        day.selected = true;
      }
    });
  }

  private checkSelection(date: Date): boolean {
    const currReservation = this.reservationService.currentReservation;
    if (currReservation && currReservation.date) {
      if ((date.getFullYear() === currReservation.date.getFullYear()) &&
          (date.getMonth() === currReservation.date.getMonth()) &&
          ((date.getDate() - 1) === currReservation.date.getDate()))
      {
        return true;
      }
    }
    return false;
  }

  removeSelection() {
    for(const week of this.weeks)
      for(const day of week.days)
        day.selected = false;
  }

  ngOnDestroy() {
    if (this.closeSub)
      this.closeSub.unsubscribe();
  }
}
