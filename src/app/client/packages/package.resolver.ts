import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PackageService} from './package.service';
import {PackageType} from 'src/app/shared/models/package-type.model';

@Injectable({providedIn: 'root'})
export class PackageResolver implements Resolve<PackageType[]> {

  constructor(private packageService: PackageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.packageService.packages.length > 0) {
      return this.packageService.packages;
    }
  }
}
