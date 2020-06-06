import { Component, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-reservation-all',
  templateUrl: './reservation-all.component.html',
  styleUrls: ['./reservation-all.component.css']
})
export class ReservationAllComponent implements AfterViewInit, OnDestroy {
  activeMode: boolean = true;
  constructor(private renderer: Renderer2) {}
  toggleActive(next: boolean, stepper: MatStepper) {
    this.activeMode = next;
    if (this.activeMode)
      stepper.previous();
    else
      stepper.next();
  }
  ngAfterViewInit() {
    this.renderer.addClass(document.getElementById('operatorBase'), 'nooverflow');
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById('operatorBase'), 'nooverflow');
  }
}
