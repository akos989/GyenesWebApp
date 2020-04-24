import { Injectable } from '@angular/core';

class NoDate {
    constructor(public fromDate: Date, public toDate: Date) {}
}

@Injectable({providedIn: 'root'})
export class NoDatesService {
    noDates: NoDate[] = [];

    getNoDatesForMonth(date: Date) {
        //server http
        this.noDates = [
            new NoDate(new Date(2020, 4, 1), new Date(2020, 4, 7)),
            new NoDate(new Date(2020, 4, 21), new Date(2020, 11, 23))
        ];
    }

    isClosed(date: Date): boolean {
        for( const nd of this.noDates ) {
            if (nd.fromDate.valueOf() <= date.valueOf() && date.valueOf() < nd.toDate.valueOf())
                return true;
        }
        return false;
    }
}