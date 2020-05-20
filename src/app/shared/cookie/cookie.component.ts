import { Component, OnInit } from '@angular/core';
import { AcceptCookieService } from './cookie.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(private acceptCookkieS: AcceptCookieService) { }

  ngOnInit(): void {
  }

  accept() {
    this.acceptCookkieS.acceptCookies();
  }

  decline() {
    this.acceptCookkieS.declineCookies();
  }
}
