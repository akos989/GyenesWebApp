import { Injectable } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { PackageType } from 'src/app/shared/models/package-type.model';

@Injectable({ providedIn: 'root' })
export class PackageService {
    packages: PackageType[] = [];

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService) {}

    loadFromBackend() {
        //http kérés
        // return this.http
        // .get<{types: PackageType[]}>('api/packages_type/')
        // .pipe(
        //     map((responseData) => {
        //         const packageTypeArray: PackageType[] = [];

        //         for (const pack of responseData.types) {                    
        //             packageTypeArray.push(pack);
        //         }
        //         return packageTypeArray;
        //     }), 
        //     tap(packageTypes => {
        //         this.packages = [];
        //         for (const type of packageTypes) {
        //             const tmpPackages: Package[] = [];
        //             for (const p of type.packages) {
        //                 if (!p.disabled) {
        //                     tmpPackages.push(p);
        //                 }
        //             }
        //             if (tmpPackages.length > 0) {
        //                 this.packages.push(
        //                     new PackageType(type.id, type.name, tmpPackages, type.sale)
        //                 );
        //             }
        //         }
        //     }),
        //     catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
        //         if (errorRes.error) 
        //             this.errorHandler.newError(errorRes.error.error);
        //         else  {
        //             const error = {error: 'Unknown error', message: ''}        
        //                 this.errorHandler.newError(error);
        //         }
        //         return throwError(errorRes);
        //     })
        // /*, delay(1500)*/       
        // );       

        return this.packages = [
            new PackageType('1', 'Normál', [
                new Package('1', 'Kicsi', 3, 10, 15, 3000, 2, 0, false, ''),
                new Package('5eb272ac3ba174183da688a0', 'Közepes', 11, 20, 12, 3000, 2, 0, false, ''),
                new Package('3', 'Nagy', 21, 35, 10, 3000, 4, 0, true, '')
            ]),
            new PackageType('2', 'Akciós', [
                new Package('4', 'Akció1', 15, 20, 15, 5000, 2, 300, false, ''),
                new Package('5', 'Akció2', 25, 35, 13, 6000, 2, 500, false, '')
            ], true),
            new PackageType('3', 'Gyerek', [
                new Package('6', 'Gyerek1', 15, 20, 15, 5000, 2, 300, true, 'Low Impact fegyver'),
                new Package('7', 'Gyerek2', 25, 35, 13, 6000, 2, 500, false, 'Low Impact fegyver')
            ])
        ];
    }

    findType(id: string): PackageType {
        this.loadFromBackend();
        for(const type of this.packages)
            for (const p of type.packages) {
                if (p._id === id)
                    return type;
            }
        return null;
    }

    findById(id: string): Package {
        this.loadFromBackend();
        for(const type of this.packages)
            for (const p of type.packages) {
                if (p._id === id)
                    return p;
            }
        return null;
    }
}