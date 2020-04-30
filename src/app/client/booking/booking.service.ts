import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BookingService {
    packageSelected = new Subject<string>();
    infoChange = new Subject<boolean>();
    dateSelected = new Subject<boolean>();

    onSelectPackage(id: string) {
        this.packageSelected.next(id);
    } 

    onInfoChange(result: boolean) {
        this.infoChange.next(result);
    } 

    onDateSelected(result: boolean) {
        this.dateSelected.next(result);
    } 
    
}