import { Component, OnInit, Input, Renderer2 } from '@angular/core';
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
              private authService: AuthService,
              private renderer: Renderer2) { }

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
    this.renderer.removeClass(document.body, 'modal-open');
  }
  onArchive() {
    event.stopPropagation();
    event.preventDefault();
    this.OResService.archiveReservations([this.reservation._id], !this.reservation.archived);
    this.renderer.removeClass(document.body, 'modal-open');
  }
  private notifyUserChange() {
    this.authService.newUserNotification();
  }

}
