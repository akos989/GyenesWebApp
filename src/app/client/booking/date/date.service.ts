import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DateService {
    selectionChanged = new Subject<Date>();

    onSelectionChanged(date: Date) {
        this.selectionChanged.next(date);
    }
}