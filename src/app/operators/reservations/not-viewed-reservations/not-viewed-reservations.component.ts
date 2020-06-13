import { Component, OnInit } from '@angular/core';
import { User, AuthService } from 'src/app/shared/login/auth.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { OperatorResService } from '../operator-reservation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-not-viewed-reservations',
  templateUrl: './not-viewed-reservations.component.html',
  styleUrls: ['../reservation-list/reservation-list.component.css']
})
export class NotViewedReservationsComponent implements OnInit {

  currentUser: User;
  reservations: Reservation[] = [];
  currentUserChangeSub: Subscription;

  constructor(private authService: AuthService, private oResService: OperatorResService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.getNewReservations();
    this.currentUserChangeSub = this.authService.currentUserChanged.subscribe(newUserData => {
      this.currentUser = newUserData;
      this.getNewReservations();
    });
  }
  private getNewReservations() {
    this.reservations = [];
    this.currentUser.newReservations.forEach(resId => {
      this.reservations.push(this.oResService.findById(resId));
    });
  }
}
