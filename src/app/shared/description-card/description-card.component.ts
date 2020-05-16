import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../models/equipment.model';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.css']
})
export class DescriptionCardComponent implements OnInit {

  @Input() equipment: Equipment;

  constructor() { }

  ngOnInit(): void {
    this.equipment.imgUrl = '../../../assets/pictures/' + this.equipment.imgUrl;
  }

}
