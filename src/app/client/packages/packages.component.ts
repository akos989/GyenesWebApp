import { Component, OnInit } from '@angular/core';

import { PackageService } from './package.service';
import { Package } from 'src/app/shared/models/package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages: Package[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packageService.loadFromBackend();
    this.packages = this.packageService.packages;
  }
}
