import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Field } from './field.model';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.css']
})
export class FieldDetailsComponent implements OnInit {

  @Input() field: Field;
  @Output() close = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
    this.field.imgPath = '../../../../assets/pictures/' + this.field.imgPath;
  }

  onClose() {
    this.close.emit();
  }
}
