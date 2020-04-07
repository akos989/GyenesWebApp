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

  constructor(private renderer: Renderer2, private location: Location) { }
  
  ngOnInit(): void {
    if (this.location.path() === '' || this.location.path() === '/home' )
      this.small = false;
    else 
      this.small = true;
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

  navLinkClicked(small: boolean = true) {
    this.navigationOpen = false;
    this.small = small;
    this.renderer.removeClass(document.body, 'modal-open');
  }
 
  toggleSmallClicked() {
    this.small = !this.small;
  }
}
