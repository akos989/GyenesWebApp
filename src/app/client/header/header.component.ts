import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationOpen = false;
  small = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  navigatonClicked() {
    this.navigationOpen = !this.navigationOpen;
  }
 
  toggleSmallClicked() {
    this.small = !this.small;
  }
}
