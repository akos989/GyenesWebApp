import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationOpen = false;
  small = false;
  smallBeforeNav:boolean = null;

  constructor() { }
  
  ngOnInit(): void {
  }

  navigatonClicked() {
    if (!this.navigationOpen)
      this.smallBeforeNav = this.small;
    this.navigationOpen = !this.navigationOpen;
    if (this.navigationOpen) {
      this.small = false;
    } else {
      if (this.smallBeforeNav !== null)
        this.small = this.smallBeforeNav;
    }      
  }
 
  toggleSmallClicked() {
    this.small = !this.small;
  }
}
