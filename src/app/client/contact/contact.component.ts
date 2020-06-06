import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('f') submitForm: NgForm;
  @ViewChild('scrollTo') thanksElement: ElementRef;
  submitted: boolean = false;
  pattern = "/^(([^<>()\[\]\\.,;:\s@\x22]+(\.[^<>()\[\]\\.,;:\s@\x22]+)*)|(\x22.+\x22))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"

  constructor(private http: HttpClient, private errorHandler: ErrorHandleService) { }

  onSubmit() {
    const body = {
      name: this.submitForm.form.controls.name.value,
      email: this.submitForm.form.controls.email.value,
      text: this.submitForm.form.controls.text.value
    };
    this.http.post('/api/messages/', body)
      .pipe(
        catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
          this.errorHandler.newError(errorRes.error.error);
          return throwError(errorRes);
      }))
      .subscribe(() => {
        this.submitted = true;
      });
      this.submitForm.reset();
      this.scrollTop();
  }

  newMessage() {
    this.submitted = false;
  }

  scrollTop() {
    const positon: number = this.thanksElement.nativeElement.offsetTop;

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > positon) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 4);
  }

}
