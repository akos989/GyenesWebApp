import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PackageService } from './package.service';
import { Package } from 'src/app/shared/models/package.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PackageResolver implements Resolve<Package[]> {

    constructor(private packageService: PackageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Package[]> | Promise<Package[]> | Package[] {
        if (this.packageService.packages.length > 0) {
            return this.packageService.packages;
        } else {
            return this.packageService.loadFromBackend();
        }
    }
}