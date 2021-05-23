import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, HostListener} from '@angular/core';
import {Modal} from 'src/app/shared/backend-modal/modal.model';
import {Subscription} from 'rxjs';
import {ModalService} from 'src/app/shared/backend-modal/modal.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.css']
})
export class ModalNewComponent implements AfterViewInit, OnDestroy, OnInit {

  dateValid = false;
  intersectingDates: Modal[] = [];
  fromBiggerError = false;
  id: string = null;
  changeSub: Subscription;
  file: any;
  modal: Modal;
  loading = false;

  @ViewChild('f') modalForm: NgForm;

  constructor(private modalService: ModalService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.modal = new Modal('Cím', 'Itt van valami kis leírás, hogy mikor érvényes meg mi is az...', '');
  }

  ngAfterViewInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
          if (this.id) {
            this.modal = this.modalService.findById(this.id);
          }
          const output = document.getElementById('output');
          if (this.modal.modalImgUrl !== '') {
            output.setAttribute('src', this.modal.modalImgUrl);
          } else {
            output.setAttribute('src', '../../../../assets/pictures/noimg.png');
          }
        }
      );
    if (this.id) {
      this.initform();
    }
    this.changeSub = this.modalForm.form.valueChanges
      .subscribe(() => {
        this.onChanges();
      });
  }

  initform() {
    const fromDate = new Date(this.modal.fromDate);
    const toDate = new Date(this.modal.toDate);
    setTimeout(() => {
      this.modalForm.form.patchValue({
        name: this.modal.name,
        description: this.modal.description,
        fromDate: fromDate.toISOString().slice(0, 10),
        toDate: toDate.toISOString().slice(0, 10)
      });
    }, 0);
  }

  onChanges() {
    setTimeout(() => {
      if (this.datesInputValid()) {
        const fromDate = new Date(this.modalForm.form.controls.fromDate.value + 'T04:00Z').valueOf();
        const toDate = new Date(this.modalForm.form.controls.toDate.value + 'T22:00Z').valueOf();
        this.intersectingDates = this.modalService.intersects(fromDate, toDate, this.id);
        this.fromBiggerError = this.fromBigger(fromDate, toDate);
        this.dateValid = this.datesValid();
      } else {
        this.dateValid = false;
      }
      if (this.modalForm && this.modalForm.form.controls.name.value !== '') {
        this.modal.name = this.modalForm.form.controls.name.value;
      }
      if (this.modalForm && this.modalForm.form.controls.description.value !== '') {
        this.modal.description = this.modalForm.form.controls.description.value;
      }
    }, 0);
  }

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    if (event && event.item(0)) {
      const file = event && event.item(0);
      this.file = file;
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        const output = document.getElementById('output');
        output.setAttribute('src', dataURL.toString());
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.dateValid && this.modalForm.valid) {
      const formData = new FormData();
      formData.append('name', this.modalForm.form.controls.name.value);
      formData.append('description', this.modalForm.form.controls.description.value);
      formData.append('fromDate', this.modalForm.form.controls.fromDate.value + 'T04:00');
      formData.append('toDate', this.modalForm.form.controls.toDate.value + 'T22:00');
      this.loading = true;
      if (this.file) {
        formData.append('modalImage', this.file);
      }
      if (!this.id) {
        this.modalService.create(formData).subscribe(resData => {
          this.uploaded();
        });
      } else {
        this.modalService.update(formData, this.id).subscribe(resData => {
          this.uploaded();
        });
      }
    }
  }

  private uploaded() {
    this.loading = false;
    this.router.navigate(['/operators/pop-ups/']);
  }

  private datesValid(): boolean {
    return (this.intersectingDates.length === 0 && !this.fromBiggerError);
  }

  private fromBigger(fromDate: number, toDate: number): boolean {
    return fromDate >= toDate;
  }

  private datesInputValid(): boolean {
    if (!this.modalForm) {
      return false;
    }
    return this.modalForm.form.controls.fromDate &&
      this.modalForm.form.controls.fromDate.valid &&
      this.modalForm.form.controls.toDate.valid;
  }

  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
}
