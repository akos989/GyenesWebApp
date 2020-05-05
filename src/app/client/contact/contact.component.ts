import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;
  @ViewChild('scrollTo') thanksElement: ElementRef;
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.submitForm.value));
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
