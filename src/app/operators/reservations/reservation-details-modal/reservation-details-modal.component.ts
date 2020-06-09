import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PackageService } from 'src/app/client/packages/package.service';
import { Package } from 'src/app/shared/models/package.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reservation-details-modal',
  templateUrl: './reservation-details-modal.component.html',
  styleUrls: ['./reservation-details-modal.component.css']
})
export class ReservationDetailsModalComponent implements OnInit {

  @Input() reservation: Reservation;
  package: Package;
  close = new Subject<boolean>();
  
  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.package = this.packageService.findById(this.reservation.packageId);
  }
  onClose() {
    event.stopPropagation();
    event.preventDefault();
    this.close.next(false);
  }
  onEdit() {
    event.stopPropagation();
    event.preventDefault();
    this.close.next(true);
  }

}
