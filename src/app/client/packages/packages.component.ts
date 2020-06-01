import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PackageService } from './package.service';
import { PackageType } from 'src/app/shared/models/package-type.model';
import { ReservationService } from '../booking/reservations.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  @ViewChild('packages', {static: false}) packageContainer: ElementRef;
  packages: PackageType[] = [];
  selectedTypeId: string = null;

  constructor(private packageService: PackageService,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.packages = this.packageService.packages;
    if (this.reservationService.currentReservation &&
        this.reservationService.currentReservation.packageId !== null) {
          const type: PackageType = this.packageService.findType(
            this.reservationService.currentReservation.packageId);
          if (type)
            this.selectedTypeId = type.id;
          else {
            const reservation = this.reservationService.currentReservation;
            reservation.packageId = null;
            this.reservationService.currentReservation = reservation;
          }            
        }
  }

  isExtended(packageType: PackageType): boolean {
    if (this.selectedTypeId && this.selectedTypeId === packageType.id)
      return true;
    if (!this.selectedTypeId && packageType.name === 'Normál')
      return true;
    return false;
  }

  getPackgeTypes(): PackageType[] {
    return this.packages;
  }

  scrollListTop() {
    const positon: number = this.packageContainer.nativeElement.offsetTop;

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > positon) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 4);
  }
}
