import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/shared/models/package.model';
import { OperatorResService } from 'src/app/operators/reservations/operator-reservation.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PackageService } from 'src/app/client/packages/package.service';

@Component({
  selector: 'app-operator-package-modal',
  templateUrl: './operator-package-modal.component.html',
  styleUrls: ['../../../reservations/reservation-details-modal/reservation-details-modal.component.css']
})
export class OperatorPackageModalComponent implements OnInit, OnDestroy {

  @Input() package: Package;
  @Output() close = new EventEmitter<void>();
  reservations: Reservation[] = [];
  typeId: string;

  constructor(private renderer: Renderer2, private route: ActivatedRoute,
              private router: Router, private oResService: OperatorResService, private packageService: PackageService) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'modal-open');
    this.reservations = this.oResService.getNumberForPackage(this.package._id);
    this.route.params.subscribe(params => {
      this.typeId = params['typeId'];
    });
  }
  onClose() {
    event.stopPropagation();
    event.preventDefault();
    this.close.emit();
  }
  onDelete() {
    event.stopPropagation();
    event.preventDefault();
    if (this.reservations.length === 0) {
      this.packageService.deletePackage([this.package._id], this.typeId);
    }
  }
  onUpdate() {
    event.stopPropagation();
    event.preventDefault();
    // this.router.navigate(['/operators/no-dates', this.noDate._id, 'edit']);
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
