import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.css']
})
export class DescriptionCardComponent implements OnInit {

  @Input() title: string;
  @Input() imgUrl: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
