import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';

@Component({
    selector: 'app-package-modal',
    templateUrl: './package-modal.component.html',
    styleUrls: ['./package-modal.component.css']
})
export class PackageModalComponent {
    @Input() package: Package;
    @Output() close = new EventEmitter<boolean>();

    onSelect() {
        this.close.emit(true);
    }
    onClose() {
        this.close.emit(false);
    }
}