import { Component, OnInit, Renderer2 } from '@angular/core';
import { HeaderService } from './header.service';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationOpen = false;
  small: boolean;
  smallBeforeNav:boolean = null;

  constructor(private renderer: Renderer2, private headerService: HeaderService,
              private scrollTopS: ScrollTopService) { }
  
  ngOnInit(): void {
    this.small = false;
    this.headerService.small
      .subscribe( 
        (small: boolean) => {          
          setTimeout( () => {
            this.small = small;
            this.navigationOpen = false;
          }, 0);
        }
      );
  }

  linkClicked(component: string) {
    this.scrollTopS.onScrollTop(component);
    this.navigationOpen = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  gameModeLinkClicked() {
    this.navigationOpen = false;
    this.renderer.removeClass(document.body, 'modal-open');
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
}
