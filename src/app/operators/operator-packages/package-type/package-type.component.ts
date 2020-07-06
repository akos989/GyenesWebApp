import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/client/packages/package.service';
import { ActivatedRoute } from '@angular/router';
import { PackageType } from 'src/app/shared/models/package-type.model';

@Component({
  selector: 'app-package-type',
  templateUrl: './package-type.component.html',
  styleUrls: ['./package-type.component.css']
})
export class PackageTypeComponent implements OnInit {

  packageType: PackageType;
  constructor(private packageService: PackageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.packageType = this.packageService.returnType(param['typeId']);
    });
  }
  onDelete() {

  }
  activePackages(): number {
    return this.packageType.packages.filter(p => {return !p.disabled;}).length;
  }
}
