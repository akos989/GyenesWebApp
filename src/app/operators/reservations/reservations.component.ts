import { Component, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(document.getElementById('operatorBase'), 'nooverflow');
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById('operatorBase'), 'nooverflow');
  }
}