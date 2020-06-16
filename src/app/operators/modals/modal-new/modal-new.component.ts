import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Modal } from 'src/app/shared/backend-modal/modal.model';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/backend-modal/modal.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.css']
})
export class ModalNewComponent implements AfterViewInit, OnDestroy, OnInit {

  dateValid: boolean = false;
  intersectingDates: Modal[] = [];
  fromBiggerError: boolean = false;
  id: string = null;
  changeSub: Subscription;
  file: any;

  @ViewChild('f') modalForm: NgForm;

  constructor(private modalService: ModalService, private route: ActivatedRoute, private router: Router) { }

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
    this.changeSub = this.modalForm.form.valueChanges
    .subscribe(()=> {
      this.onChanges();
    });
  }
  initform() {
    let modal = this.modalService.findById(this.id);
    const fromDate = new Date(modal.fromDate);
    const toDate = new Date(modal.toDate);
    setTimeout(()=> {
      this.modalForm.form.patchValue({
        name: modal.name,
        description: modal.description,
        fromDate: fromDate.toISOString().slice(0,10),
        toDate: toDate.toISOString().slice(0,10)
      });
    }, 0);
  }
  onChanges() {
    setTimeout(() => {
      if (this.datesInputValid()) {
        const fromDate = new Date(this.modalForm.form.controls.fromDate.value+'T04:00Z').valueOf();
        const toDate = new Date(this.modalForm.form.controls.toDate.value+'T22:00').valueOf();
        this.intersectingDates = this.modalService.intersects(fromDate, toDate, this.id);
        this.fromBiggerError = this.fromBigger(fromDate, toDate);
        this.dateValid = this.datesValid();
      } else {
        this.dateValid = false;
      }
    },0);
  }
  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    if (event && event.item(0)) {
      const file = event && event.item(0);
      this.file = file;
    }
  }

  onSubmit() {
    if (this.dateValid && this.modalForm.valid) {
      const formData = new FormData();
      formData.append('name', this.modalForm.form.controls.name.value);
      formData.append('description', this.modalForm.form.controls.description.value);
      formData.append('fromDate', this.modalForm.form.controls.fromDate.value+'T04:00Z');
      formData.append('toDate', this.modalForm.form.controls.toDate.value+'T22:00Z');
      if(this.file)
        formData.append('modalImage', this.file);
      if (!this.id)
        this.modalService.create(formData).subscribe(resData => { this.router.navigate(['/operators/pop-ups/']); });
      else
        this.modalService.update(formData, this.id).subscribe(resData => { this.router.navigate(['/operators/pop-ups/']); });
    }
  }

  private datesValid(): boolean {
    return (this.intersectingDates.length === 0 && !this.fromBiggerError);
  }
  private fromBigger(fromDate: number, toDate: number): boolean {
    return  fromDate >= toDate;
  }
  private datesInputValid(): boolean {
    return this.modalForm.form.controls.fromDate && this.modalForm.form.controls.fromDate.valid && this.modalForm.form.controls.toDate.valid;
  }
  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
}
