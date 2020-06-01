import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { OperatorResService } from './operator-reservation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit, AfterViewChecked {

  active: boolean = true;  
  reservationsChangedSub: Subscription;

  activeReservations: Reservation[] = [];
  archivedReservations: Reservation[] = [];

  constructor(private OResService: OperatorResService) { }

  ngOnInit(): void {
    this.activeReservations = this.OResService.getAcitve();
    this.archivedReservations = this.OResService.getArchived();
    // this.reservationsChangedSub = this.OResService.reservationsChanged
    //   .subscribe(() => {

    //   });
  }

  ngAfterViewChecked() {
  }

  deleteReservations() {
  }

  archiveReservations() {

  }

}
