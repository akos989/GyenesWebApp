import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

class NoDate {
    id?:string;
    constructor(public fromDate: Date, public toDate: Date, public reason: string) {}
}

@Injectable({providedIn: 'root'})
export class NoDatesService {
    noDates: NoDate[] = [];

    constructor(private http: HttpClient) {}

    loadNoDates() {
        //server http

        return this.http
            .get<{noDates: NoDate[]}>('api/no_dates/')
            .pipe(map((responseData) => {
                const noDatesArray: NoDate[] = [];

                for (const nod of responseData.noDates) {
                    let tmpNod = nod;
                    tmpNod.fromDate =
                        this.dateFromString(tmpNod.fromDate.toString(), 0);   
                    tmpNod.toDate =
                        this.dateFromString(tmpNod.toDate.toString(), 0);    
                    noDatesArray.push(tmpNod);
                }
                return noDatesArray;
            }), tap(noDates => {
                this.noDates = noDates;
                console.log(this.noDates);
            }));

        // this.noDates = [
        //     new NoDate(new Date(2020, 4, 1), new Date(2020, 4, 7), 'sdf'),
        //     new NoDate(new Date(2020, 4, 21), new Date(2020, 11, 23), 'COVID19')
        // ];
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

    private dateFromString(dateString: string, plus: number): Date {
        const dateParts:string[] = dateString.split('T');

        return new Date(
            +(dateParts[0].split('-')[0]),
            +(dateParts[0].split('-')[1]) - 1,
            +(dateParts[0].split('-')[2]),
            +(dateParts[1].split(':')[0]) + plus       
        );
    }
}