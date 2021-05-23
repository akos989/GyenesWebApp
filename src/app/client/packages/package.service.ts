import {Injectable} from '@angular/core';
import {PackageType} from 'src/app/shared/models/package-type.model';
// @ts-ignore
import packageTypesJson from '../../data/packageTypes.json';

@Injectable({providedIn: 'root'})
export class PackageService {

  packages: PackageType[] = this.getPackages();

  getPackages(): PackageType[] {
    return packageTypesJson;
  }

  findType(id: string): PackageType {
    console.log(this.packages);
    for (const type of this.packages) {
      for (const p of type.packages) {
        if (p._id === id) {
          return type;
        }
      }
    }
    return null;
  }
}
