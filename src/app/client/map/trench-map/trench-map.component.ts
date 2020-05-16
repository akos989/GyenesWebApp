import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Equipment } from 'src/app/shared/models/equipment.model';

@Component({
  selector: 'app-trench-map',
  templateUrl: './trench-map.component.html',
  styleUrls: ['./trench-map.component.css']
})
export class TrenchMapComponent implements OnInit {

  elements: Equipment[] = [
    
  ];

  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }

}
