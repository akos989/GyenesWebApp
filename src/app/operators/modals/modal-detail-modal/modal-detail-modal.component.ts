import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Modal } from 'src/app/shared/backend-modal/modal.model';
import { ModalService } from 'src/app/shared/backend-modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-detail-modal',
  templateUrl: './modal-detail-modal.component.html',
  styleUrls: ['../../reservations/reservation-details-modal/reservation-details-modal.component.css']
})
export class ModalDetailModalComponent implements OnInit, OnDestroy {

  @Input() modal: Modal;
  @Output() close = new EventEmitter<void>();


  constructor( private renderer: Renderer2, private modalService: ModalService,
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
    this.modalService.delete([this.modal._id]);
  }
  onUpdate() {
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate(['/operators/pop-ups', this.modal._id, 'edit']);
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
