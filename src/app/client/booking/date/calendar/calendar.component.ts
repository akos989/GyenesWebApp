import { Component, OnInit } from '@angular/core';
import { Day } from '../../../../shared/models/day.model';

class Week {
  public days: Day[] = [];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  weeks: Week[] = [];
  today: Date;
  refDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    this.refDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);;
    this.createWeeks(this.today);
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
          } else {
            tmpDay.disabled = false;
            /*if (closed(tmpDate)) {
              tmpDay.closed = true;
            }*/
          }
          tmpDate = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate() + 1);
          maxDays--;
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
}
