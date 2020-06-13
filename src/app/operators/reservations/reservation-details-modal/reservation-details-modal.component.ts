import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PackageService } from 'src/app/client/packages/package.service';
import { Package } from 'src/app/shared/models/package.model';
import { Subject } from 'rxjs';
import { OperatorResService } from '../operator-reservation.service';
import { AuthService } from 'src/app/shared/login/auth.service';

@Component({
  selector: 'app-reservation-details-modal',
  templateUrl: './reservation-details-modal.component.html',
  styleUrls: ['./reservation-details-modal.component.css']
})
export class ReservationDetailsModalComponent implements OnInit {

  @Input() reservation: Reservation;
  package: Package;
  close = new Subject<boolean>();
  
  constructor(private packageService: PackageService,
              private OResService: OperatorResService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.package = this.packageService.findById(this.reservation.packageId);
    this.authService.viewReservation(this.reservation._id);
  }
  onClose() {
    event.stopPropagation();
    event.preventDefault();
    this.notifyUserChange();
    this.close.next(false);
  }
  onEdit() {
    event.stopPropagation();
    event.preventDefault();
    this.notifyUserChange();
    this.close.next(true);
  }
  onDelete() {
    event.stopPropagation();
    event.preventDefault();
    this.OResService.deleteReservations([this.reservation._id]);
    this.close.next(false);
  }
  private notifyUserChange() {
    this.authService.newUserNotification();
  }

}
