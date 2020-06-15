import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { NoDatesService, NoDate } from 'src/app/client/booking/date/no-dates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-date-detail-modal',
  templateUrl: './no-date-detail-modal.component.html',
  styleUrls: ['../../reservations/reservation-details-modal/reservation-details-modal.component.css']
})
export class NoDateDetailModalComponent implements OnInit, OnDestroy {

  @Input() noDate: NoDate;
  @Output() close = new EventEmitter<void>();

  constructor(private noDateService: NoDatesService, private renderer: Renderer2,
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
    this.noDateService.delete([this.noDate._id]);
  }
  onUpdate() {
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate(['/operators/no-dates', this.noDate._id, 'edit']);
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
