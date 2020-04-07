import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() open:boolean;
  @Output() linkClick = new EventEmitter<{}>();

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.open = false;
  }

  openClicked() {
    this.open = !this.open;
    console.log(this.open);
  }

  onLinkClicked() {
    this.linkClick.emit();
  }
}
