import { Component } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-reservation-all',
  templateUrl: './reservation-all.component.html',
  styleUrls: ['./reservation-all.component.css']
})
export class ReservationAllComponent {
  activeMode: boolean = true;
  toggleActive(next: boolean, stepper: MatStepper) {
    this.activeMode = next;
    if (this.activeMode)
      stepper.previous();
    else
      stepper.next();
  }
}
