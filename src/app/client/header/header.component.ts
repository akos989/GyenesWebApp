import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  navigationOpen = false;
  small: boolean;
  smallBeforeNav:boolean = null;
  dropDownOpen: boolean = false;
  @ViewChild('dropToggle', {static: false}) toggler: ElementRef;

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

  ngAfterViewInit() {
    this.renderer.listen(window, 'click', (event) => {
      if (this.dropDownOpen)
        if( this.toggler && !this.toggler.nativeElement.contains(event.target) ){
          this.dropDownOpen = false;
        }
    });
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

  toggleDropDown() {
    this.dropDownOpen = !this.dropDownOpen;
  }
}
