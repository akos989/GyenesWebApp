import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() open:boolean;

  constructor() { }

  ngOnInit(): void {
    this.open = false;
  }

  openClicked() {
    this.open = !this.open;
    console.log(this.open);
  }
}
