import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() open:boolean;
  @Output() linkClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.open = false;
  }

  openClicked() {
    this.open = !this.open;
    console.log(this.open);
  }

  onLinkClicked(small: boolean = true) {
    this.linkClick.emit(small);
  }
}
