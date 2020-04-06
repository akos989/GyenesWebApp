import { Component, OnInit, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationOpen = false;
  small: boolean;
  smallBeforeNav:boolean = null;

  constructor(private location: Location, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    console.log(this.location.path())
    if ( this.location.path() === '' || this.location.path() === '/home' ) {
      this.small = false;
    } else {
      this.small = true;
    }
    
  }

  navigatonClicked() {
    if (!this.navigationOpen)
      this.smallBeforeNav = this.small;
    this.navigationOpen = !this.navigationOpen;

    if (this.navigationOpen) {
      this.renderer.addClass(document.body, 'modal-open');
      this.small = false;
    } else {
      this.renderer.removeClass(document.body, 'modal-open');
      if (this.smallBeforeNav !== null)
        this.small = this.smallBeforeNav;
    }      
  }
 
  toggleSmallClicked() {
    this.small = !this.small;
  }
}
