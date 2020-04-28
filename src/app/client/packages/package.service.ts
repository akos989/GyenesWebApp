import { Injectable } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';

@Injectable({ providedIn: 'root' })
export class PackageService {
    packages: Package[] = [];

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService) {}

    loadFromBackend() {
        //http kérés
        // return this.http
        // .get<{packages: Package[]}>('api/packages/')
        // .pipe(
        //     map((responseData) => {
        //         const packageArray: Package[] = [];

        //         for (const pack of responseData.packages) {                    
        //             packageArray.push(pack);
        //         }
        //         return packageArray;
        //     }), 
        //     tap(packages => {
        //         this.packages = packages;
        //     }),
        //     catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
        //         this.errorHandler.newError(errorRes.error.error);
        //         return throwError(errorRes);
        //     })
        // /*, delay(1500)*/       
        // );       

        this.packages = [
            new Package('1', 'Kicsi', 3, 10, 15, 3000, 2, false, 0),
            new Package('5e7510c39f78823051c57755', 'Közepes', 11, 20, 12, 3000, 2, false, 0),
            new Package('3', 'Nagy', 21, 35, 10, 3000, 4, false, 0),
            new Package('4', 'Akció1', 15, 20, 15, 5000, 2, true, 300),
            new Package('5', 'Akció2', 25, 35, 13, 6000, 2, true, 500),
        ];
    }

    findById(id: string): Package {
        this.loadFromBackend();
        for (const p of this.packages) {
            if (p.id === id)
                return p;
        }
        return null;
    }
}