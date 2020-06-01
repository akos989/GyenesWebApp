import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { BookingService } from '../booking/booking.service';
import { Subscription } from 'rxjs';
import { ReservationService } from '../booking/reservations.service';
import { Equipment } from 'src/app/shared/models/equipment.model';
import ScrollReveal from 'scrollreveal'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit, AfterViewInit, OnDestroy {

  packageSelected = false;
  packageSelectionSub: Subscription;
  fragmentSub: Subscription;
  @ViewChild('equipmentsElement', {static: false}) equipmentsRef: ElementRef;
  equipments: Equipment[] = [
    new Equipment(
      'Paintball fegyver',
      'A legjobb markereket használjuk, amit a piac biztosít. Típusa: Tippman 98 Rental.',
      'felszereles/color-gun.png'
    ),
    new Equipment(
      'Palack',
      'Sűrített levegős palack. Típusa: Tippman HP Basic 48/3000 psi.',
      'felszereles/air-color.png'
    ),
    new Equipment(
      'Tárak',
      'Tippman tár 200 golyós férőhellyel.',
      'felszereles/bullets-color.png'
    ),
    new Equipment(
      'Maszkok',
      'Vforce Gen3 thermal lencsével.',
      'felszereles/color-mask.png'
    ),
    new Equipment(
      'Overál',
      '',
      'felszereles/overall-color.png'
    ),
    new Equipment(
      'Kesztyű',
      '',
      'felszereles/color-gloves.png'
    ),
    new Equipment(
      'Védőmellény',
      '',
      'felszereles/vest-color.png'
    ) 
  ];

  constructor(private bookingService: BookingService, private resService: ReservationService,
              private route: ActivatedRoute) { }

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

  ngAfterViewInit() {
    setTimeout(()=> {
      ScrollReveal({ reset: true });
      ScrollReveal().reveal('.reveal', { delay: 200 });
    }, 0);
    this.fragmentSub = this.route.fragment
    .subscribe((fragment) => {
        if (fragment === 'equipments') {
          window.scrollTo(0, this.equipmentsRef.nativeElement.offsetTop);
        }
      });
  }

  ngOnDestroy() {
    if (this.fragmentSub)
      this.fragmentSub.unsubscribe();
  }
}
