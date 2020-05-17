import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2,
              private headerService: HeaderService) { }
  
  ngOnInit(): void {
    this.small = false;
    this.headerService.small
      .subscribe( 
        (small: boolean) => {          
          setTimeout( () => {
            this.small = small;
            this.navigationOpen = false;
            this.renderer.removeClass(document.body, 'modal-open');
          }, 0);
        }
      );
  }

  linkClicked() {
    this.navigatonClicked();
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
}
