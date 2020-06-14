import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { OperatorResService } from '../operator-reservation.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() activeMode: boolean;
  reservations: Reservation[] = [];
  reservationsChangedSub: Subscription;
  @ViewChild('f') reservationForm: NgForm;
  formChangeSub: Subscription;
  checkedNum: number = 0;
  allValue: boolean = false;

  constructor(private oRService: OperatorResService) { }

  ngOnInit(): void {
    this.updateReservations();
    this.reservationsChangedSub = this.oRService.reservationsChanged
    .subscribe(() => {
      this.updateReservations();
    });

  }
  ngAfterViewInit() {
    this.formChangeSub = this.reservationForm.form.valueChanges
      .subscribe(()=> {
        this.onChanges();
      });    
  }
  onChanges() {
    this.checkedNum = this.getCheckedReservations().length;
    if (this.checkedNum === this.reservations.length)
      this.allValue = true;
    else
      this.allValue = false;
  }
  onDelete() {
    this.oRService.deleteReservations(this.getCheckedIds());
  }
  onChangeActivation() {
    this.oRService.archiveReservations(this.getCheckedIds(), this.activeMode);
  }

  checkAll() {
    this.allValue = !this.allValue;
    const check: boolean = this.allValue;
    this.reservations.forEach((reservation) => {
      if (this.reservationForm.form.get(reservation._id))
        this.reservationForm.form.get(reservation._id).patchValue(check);
      });
  }

  private getCheckedIds(): string[] {
    return this.getCheckedReservations()
      .map((reservation) => {
        return reservation._id;
      });
  }

  private getCheckedReservations(): Reservation[] {
    return this.reservations
      .filter((reservation) => {
        if (this.reservationForm.form.get(reservation._id))
          return this.reservationForm.form.get(reservation._id).value;
        return false;
      });
  }
  private updateReservations() {
    this.reservations = this.activeMode ? this.oRService.getAcitve() : this.oRService.getArchived();
  }
  ngOnDestroy() {
    this.reservationsChangedSub.unsubscribe();
    this.formChangeSub.unsubscribe();
  }
}