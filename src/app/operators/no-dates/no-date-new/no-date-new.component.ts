import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoDatesService, NoDate } from 'src/app/client/booking/date/no-dates.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-no-date-new',
  templateUrl: './no-date-new.component.html',
  styleUrls: ['./no-date-new.component.css']
})
export class NoDateNewComponent implements AfterViewInit, OnDestroy, OnInit {

  dateValid: boolean = false;
  intersectingDates: NoDate[] = [];
  intersectingRes: Reservation[] = [];
  fromBiggerError: boolean = false;
  id: string = null;
  changeSub: Subscription;
  loading: boolean = false;

  @ViewChild('f') noDateForm: NgForm;

  constructor(private noDateService: NoDatesService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }
  ngAfterViewInit(): void {
    if (this.id) {
      this.initform();
    }
    this.changeSub = this.noDateForm.form.valueChanges
    .subscribe(()=> {
      this.onChanges();
    });
  }

  initform() {
    let noDate = this.noDateService.findById(this.id);
    const fromDate = new Date(noDate.fromDate);
    const toDate = new Date(noDate.toDate);
    setTimeout(()=> {
      this.noDateForm.form.patchValue({
        reason: noDate.reason,
        fromDate: fromDate.toISOString().slice(0,10),
        toDate: toDate.toISOString().slice(0,10)
      });
    }, 0);
  }
  onChanges() {
    setTimeout(() => {
      if (this.datesInputValid()) {
        const fromDate = new Date(this.noDateForm.form.controls.fromDate.value+'T04:00Z').valueOf();
        const toDate = new Date(this.noDateForm.form.controls.toDate.value+'T22:00Z').valueOf();
        this.intersectingDates = this.noDateService.intersects(fromDate, toDate, this.id);
        this.intersectingRes = this.noDateService.intersectsWithReservation(fromDate, toDate);
        this.fromBiggerError = this.fromBigger(fromDate, toDate);
        this.dateValid = this.datesValid();
      } else {
        this.dateValid = false;
      }
    },0);
  }
  onSubmit() {
    if (this.dateValid && this.noDateForm.valid) {
      if (this.id) {
        this.noDateService.update(
          this.id, this.noDateForm.form.controls.reason.value,
          this.noDateForm.form.controls.fromDate.value+'T04:00',
          this.noDateForm.form.controls.toDate.value+'T22:00'
        ).subscribe(resData => {this.uploaded();});
      } else {
        this.noDateService.create(
          this.noDateForm.form.controls.reason.value,
          this.noDateForm.form.controls.fromDate.value+'T04:00',
          this.noDateForm.form.controls.toDate.value+'T22:00'
        ).subscribe(resData => {this.uploaded();});
      }
    }
  }
  private uploaded() {
    this.loading = false;
    this.router.navigate(['/operators/no-dates']);
  }
  private datesValid(): boolean {
    return (this.intersectingDates.length === 0 && !this.fromBiggerError);
  }
  private fromBigger(fromDate: number, toDate: number): boolean {
    return  fromDate >= toDate;
  }
  private datesInputValid(): boolean {
    return this.noDateForm.form.controls.fromDate && this.noDateForm.form.controls.fromDate.valid && this.noDateForm.form.controls.toDate.valid;
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }

}
