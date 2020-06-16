import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { NoDatesService, NoDate } from 'src/app/client/booking/date/no-dates.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-no-date-list',
  templateUrl: './no-date-list.component.html',
  styleUrls: ['../../reservations/reservation-list/reservation-list.component.css']
})
export class NoDateListComponent implements OnInit, OnDestroy, AfterViewInit {

  newDateSub: Subscription;
  allNoDates: NoDate[] = [];
  todayNoDate: NoDate = null;
  futureNoDate: NoDate[] = [];
  pastNoDate: NoDate[] = [];
  @ViewChild('f') noDateForm: NgForm;
  formChangeSub: Subscription;
  checkedNum: number = 0;
  allValue: boolean = false;

  constructor(private noDateService: NoDatesService) { }

  ngOnInit(): void {
    this.updateNoDates();
    this.newDateSub = this.noDateService.newNoDates
      .subscribe( ()=> {
        this.updateNoDates();
      });
  }
  updateNoDates() {
    this.allNoDates = this.noDateService.noDates;
    this.todayNoDate = this.noDateService.getCurrent();
    this.pastNoDate = this.noDateService.getPast();
    this.futureNoDate = this.noDateService.getFuture();
  }
  ngAfterViewInit() {
      this.formChangeSub = this.noDateForm.form.valueChanges
        .subscribe(()=> {
          this.onChanges();
        });
  }
  onChanges() {
    this.checkedNum = this.getCheckedDates().length;
    if (this.checkedNum === this.allNoDates.length)
      this.allValue = true;
    else
      this.allValue = false;
  }
  checkAll() {
    this.allValue = !this.allValue;
    const check: boolean = this.allValue;
    this.allNoDates.forEach((noDate) => {
      if (this.noDateForm.form.get(noDate._id))
        this.noDateForm.form.get(noDate._id).patchValue(check);
      });
  }
  onDelete() {
    this.noDateService.delete(this.getCheckedIds());
  }
  private getCheckedDates(): NoDate[] {
    return this.allNoDates
      .filter((noDate) => {
        if (this.noDateForm.form.get(noDate._id))
          return this.noDateForm.form.get(noDate._id).value;
        return false;
      });
  }
  private getCheckedIds(): string[] {
    return this.getCheckedDates()
      .map((noDate) => {
        return noDate._id;
      });
  }
  ngOnDestroy() {
    this.newDateSub.unsubscribe();
    this.formChangeSub.unsubscribe();
  }
}