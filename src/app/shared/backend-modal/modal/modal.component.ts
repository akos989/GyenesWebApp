import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Modal } from '../modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Input() modal: Modal;

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }
}
