import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ReservationService } from './reservations.service';

class Hour {
    constructor(public hour: number, public type: string, public remainingNumber: number) {}
  }

@Injectable({providedIn: 'root'})
export class BookingService {
    packageSelected = new Subject<string>();
    infoChange = new Subject<boolean>();
    dateSelected = new Subject<boolean>();

    constructor(private reservationService: ReservationService) {}

    onSelectPackage(id: string) {
        this.packageSelected.next(id);
    } 

    onInfoChange(result: boolean, playernumber: number) {
        const currRes = this.reservationService.currentReservation;
        if (currRes && currRes.date) {
            const hours: Hour[] =
                 this.reservationService.checkHoursOnSelectedDate(currRes.date);
            for (const hour of hours)
                if (hour.hour === currRes.date.getHours())
                    if (hour.type === 'f') {
                        this.dateSelected.next(false);
                    } else {
                        this.dateSelected.next(true);
                    }
        }
        this.infoChange.next(result);
    } 

    onDateSelected(result: boolean) {
        this.dateSelected.next(result);
    } 
    
}