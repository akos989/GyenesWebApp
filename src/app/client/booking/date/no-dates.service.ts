import { Injectable } from '@angular/core';

class NoDate {
    constructor(public fromDate: Date, public toDate: Date, public reason: string) {}
}

@Injectable({providedIn: 'root'})
export class NoDatesService {
    noDates: NoDate[] = [];

    loadNoDatesForMonth(date: Date) {
        //server http
        this.noDates = [
            new NoDate(new Date(2020, 4, 1), new Date(2020, 4, 7), 'sdf'),
            new NoDate(new Date(2020, 4, 21), new Date(2020, 11, 23), 'COVID19')
        ];
    }

    isClosed(date: Date): string {
        for( const nd of this.noDates ) {
            if (nd.fromDate.valueOf() <= date.valueOf() &&
                date.valueOf() < nd.toDate.valueOf()
            )
                return nd.reason;
        }
        return '';
    }
}