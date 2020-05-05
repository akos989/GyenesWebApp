import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { PackageService } from '../../package.service';
import { PackageType } from 'src/app/shared/models/package-type.model';

@Component({
    selector: 'app-package-modal',
    templateUrl: './package-modal.component.html',
    styleUrls: ['./package-modal.component.css']
})
export class PackageModalComponent implements OnInit {
    @Input() package: Package;
    @Output() close = new EventEmitter<boolean>();
    type: PackageType;

    constructor(private packageService: PackageService) {}

    ngOnInit() {
        this.type = this.packageService.findType(this.package.id);
    }

    onSelect() {
        this.close.emit(true);
    }
    onClose() {
        this.close.emit(false);
    }
}