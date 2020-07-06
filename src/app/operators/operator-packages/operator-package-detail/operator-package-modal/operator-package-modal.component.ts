import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Package } from 'src/app/shared/models/package.model';

@Component({
  selector: 'app-operator-package-modal',
  templateUrl: './operator-package-modal.component.html',
  styleUrls: ['../../../reservations/reservation-details-modal/reservation-details-modal.component.css']
})
export class OperatorPackageModalComponent implements OnInit, OnDestroy {

  @Input() package: Package;
  @Output() close = new EventEmitter<void>();
  
  constructor(private renderer: Renderer2,
              private router: Router) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'modal-open');
  }
  onClose() {
    event.stopPropagation();
    event.preventDefault();
    this.close.emit();
  }
  onDelete() {
    event.stopPropagation();
    event.preventDefault();
    // this.noDateService.delete([this.noDate._id]);
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
