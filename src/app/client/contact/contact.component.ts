import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.submitForm)
  }

}
