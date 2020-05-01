import { Component, OnInit } from '@angular/core';

import { PackageService } from './package.service';
import { Package } from 'src/app/shared/models/package.model';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages: Package[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packages = this.packageService.packages;
  }

  getSale(): Package[] {
    const packages: Package[] = [];
    for(const pack of this.packages)
      if (pack.sale)
        packages.push(pack);
    return packages;
  }

  getAll(): Package[] {
    return this.packages;
  }

  getNotSale(): Package[] {
    const packages: Package[] = [];
    for(const pack of this.packages)
      if (!pack.sale)
        packages.push(pack);
    return packages;
  }

  next(stepper: MatStepper) {
    stepper.next();
  }

  back(stepper: MatStepper) {
    stepper.previous();
  }
}
