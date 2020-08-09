import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Package } from 'src/app/shared/models/package.model';
import { PackageService } from 'src/app/client/packages/package.service';

@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit,AfterViewInit {

  @ViewChild('f') packageForm: NgForm;
  packageId: string;
  typeId: string;
  package: Package;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private packageService: PackageService, private router: Router) { }

  ngOnInit(): void {
    this.packageId = this.route.snapshot.params.packageId;
    this.typeId = this.route.snapshot.params.typeId;
    if (this.packageId)
      this.package = this.packageService.findById(this.packageId);
    // this.route.params.subscribe((params: Params) => {
    //   this.packageId = params['packageId'];
    //   this.typeId = params['typeId'];
    //   if (this.packageId)
    //     this.package = this.packageService.findById(this.packageId);
    //   this.
    // });
  }
  ngAfterViewInit() {
    this.initForm();
  }
  private initForm() {
    setTimeout(() => {
      if (this.package) {
        this.packageForm.form.patchValue({
          fromNumberLimit: this.package.fromNumberLimit,
          toNumberLimit: this.package.toNumberLimit,
          bulletPrice: this.package.bulletPrice,
          basePrice: this.package.basePrice,
          duration: this.package.duration,
          includedBullets: this.package.includedBullets,
          disabled: this.package.disabled,
          description: this.package.description
        });
      } else {
        this.packageForm.form.patchValue({
          disabled: 'true'
        });
      }
    }, 0);
  }
  onSubmit() {
    if (this.packageForm.valid) {
      const formData = {
        name: 'nev',
        fromNumberLimit: this.packageForm.form.controls.fromNumberLimit.value,
        toNumberLimit: this.packageForm.form.controls.toNumberLimit.value,
        bulletPrice: this.packageForm.form.controls.bulletPrice.value,
        basePrice: this.packageForm.form.controls.basePrice.value,
        duration: this.packageForm.form.controls.duration.value,
        includedBullets: this.packageForm.form.controls.includedBullets.value,
        disabled: this.packageForm.form.controls.disabled.value,
        description: this.packageForm.form.controls.description.value,
        packageTypeId: this.typeId
      };
      this.loading = true;
      if (this.packageId) {
        this.packageService.updatePackage(formData, this.packageId).subscribe(resData => {
          this.onSubscribe();
        });
      } else {
        console.log(formData)
        this.packageService.createPackage(formData, this.typeId).subscribe(resData => {
          this.onSubscribe();
        });
      }
    }
  }
  private onSubscribe() {
    this.loading = false;
    this.router.navigate(['/operators/packages', this.typeId, 'show']);
  }
}
