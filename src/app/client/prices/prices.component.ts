import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking/booking.service';
import { Subscription } from 'rxjs';
import { ReservationService } from '../booking/reservations.service';
import { Equipment } from 'src/app/shared/models/equipment.model';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  packageSelected = false;
  packageSelectionSub: Subscription;
  equipments: Equipment[] = [
    new Equipment(
      'Paintball fegyver',
      'A legjobb markereket használjuk, amit a piac biztosít. Típusa: Tippman 98 Rental.',
      'color-gun.png'
    ),
    new Equipment(
      'Palack',
      'Sűrített levegős palack. Típusa: Tippman HP Basic 48/3000 psi.',
      'air-color.png'
    ),
    new Equipment(
      'Tárak',
      'Tippman tár 200 golyós férőhellyel.',
      'bullets-color.png'
    ),
    new Equipment(
      'Maszkok',
      'Vforce Gen3 thermal lencsével.',
      'color-mask.png'
    ),
    new Equipment(
      'Overál',
      '',
      'overall-color.png'
    ),
    new Equipment(
      'Kesztyű',
      '',
      'color-gloves.png'
    ),
    new Equipment(
      'Védőmellény',
      '',
      'vest-color.png'
    )
  ];

  constructor(private bookingService: BookingService, private resService: ReservationService) { }

  ngOnInit(): void {
    this.packageSelectionSub = this.bookingService.packageSelected
      .subscribe(result => {
        this.packageSelected = true;
      });
    const currRes = this.resService.currentReservation;
    if (currRes && currRes.packageId) {
      this.packageSelected = true;
    }
  }

}
