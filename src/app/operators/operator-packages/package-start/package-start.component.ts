import { Component, OnInit } from '@angular/core';
import { PackageType } from 'src/app/shared/models/package-type.model';
import { PackageService } from 'src/app/client/packages/package.service';

@Component({
  selector: 'app-package-start',
  templateUrl: './package-start.component.html',
  styleUrls: ['./package-start.component.css']
})
export class PackageStartComponent implements OnInit {

  packageTypes: PackageType[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packageTypes = this.packageService.allPackageTypes;
  }
}