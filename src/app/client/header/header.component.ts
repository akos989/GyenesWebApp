import { Component, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationOpen = false;
  small: boolean;
  smallBeforeNav:boolean = null;

  constructor(private headerService: HeaderService, private renderer: Renderer2,
              private cd: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.small = false;
    this.headerService.small
      .subscribe( 
        (small: boolean) => {          
          setTimeout( () => this.small = small, 0);
        }
      );
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
