import {Component, OnInit, ViewChild, OnDestroy, AfterViewInit} from '@angular/core';
import {Modal} from 'src/app/shared/backend-modal/modal.model';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ModalService} from 'src/app/shared/backend-modal/modal.service';

@Component({
  selector: 'app-modals-list',
  templateUrl: './modals-list.component.html',
  styleUrls: ['../../reservations/reservation-list/reservation-list.component.css']
})
export class ModalsListComponent implements OnInit, OnDestroy, AfterViewInit {

  allModals: Modal[] = [];
  todayModal: Modal = null;
  futureModals: Modal[] = [];
  pastModal: Modal[] = [];
  newModalSub: Subscription;
  @ViewChild('f') modalsForm: NgForm;
  formChangeSub: Subscription;
  checkedNum = 0;
  allValue = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.updateNoDates();
    this.newModalSub = this.modalService.newModalsSub
      .subscribe(() => {
        this.updateNoDates();
      });
  }

  ngAfterViewInit() {
    this.formChangeSub = this.modalsForm.form.valueChanges
      .subscribe(() => {
        this.onChanges();
      });
  }

  onChanges() {
    this.checkedNum = this.getCheckedDates().length;
    if (this.checkedNum === this.allModals.length) {
      this.allValue = true;
    } else {
      this.allValue = false;
    }
  }

  checkAll() {
    this.allValue = !this.allValue;
    const check: boolean = this.allValue;
    this.allModals.forEach((modal) => {
      if (this.modalsForm.form.get(modal._id.toString())) {
        this.modalsForm.form.get(modal._id.toString()).patchValue(check);
      }
    });
  }

  onDelete() {
    this.modalService.delete(this.getCheckedIds());
  }

  private getCheckedDates(): Modal[] {
    return this.allModals
      .filter((modal) => {
        if (this.modalsForm.form.get(modal._id.toString())) {
          return this.modalsForm.form.get(modal._id.toString()).value;
        }
        return false;
      });
  }

  private getCheckedIds(): string[] {
    return this.getCheckedDates()
      .map((modal) => {
        return modal._id;
      });
  }

  private updateNoDates() {
    this.allModals = this.modalService.modals;
    const now = new Date();
    const today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes());
    this.todayModal = this.allModals.filter(modal => {
      return (modal.fromDate.valueOf() <= today.valueOf() && today.valueOf() <= modal.toDate.valueOf());
    })[0];
    this.futureModals = this.allModals.filter(modal => {
      return (modal.fromDate.valueOf() > today.valueOf());
    });
    this.pastModal = this.allModals.filter(modal => {
      return (modal.toDate.valueOf() < today.valueOf());
    });
  }

  ngOnDestroy() {
    this.newModalSub.unsubscribe();
    this.formChangeSub.unsubscribe();
  }

}
