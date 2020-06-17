import { Injectable } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { PackageType } from 'src/app/shared/models/package-type.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PackageService {
    packages: PackageType[] = [];

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService) {}

    loadFromBackend() {
        return this.http
        .get<{types: PackageType[]}>(environment.serverUrl+'api/packages_type/')
        .pipe(
            map((responseData) => {
                const packageTypeArray: PackageType[] = [];

                for (const pack of responseData.types) {                    
                    packageTypeArray.push(pack);
                }
                return packageTypeArray;
            }), 
            tap(packageTypes => {
                this.packages = [];
                for (const type of packageTypes) {
                    const tmpPackages: Package[] = [];
                    for (const p of type.packages) {
                        if (!p.disabled) {
                            tmpPackages.push(p);
                        }
                    }
                    if (tmpPackages.length > 0) {
                        this.packages.push(
                            new PackageType(type.id, type.name, tmpPackages, type.sale)
                        );
                    }
                }
            }),
            catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                if (errorRes.error) 
                    this.errorHandler.newError(errorRes.error.error);
                else  {
                    const error = {error: 'Unknown error', message: ''}        
                        this.errorHandler.newError(error);
                }
                return throwError(errorRes);
            })
        );
    }

    findType(id: string): PackageType {
        for(const type of this.packages)
            for (const p of type.packages) {
                if (p._id === id)
                    return type;
            }
        return null;
    }

    findById(id: string): Package {
        for(const type of this.packages)
            for (const p of type.packages) {
                if (p._id === id)
                    return p;
            }
        return null;
    }
}
