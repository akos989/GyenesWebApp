import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { NavigationComponent } from '../navigation/navigation.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationOpen = false;
  small = false;
  smallBeforeNav:boolean = null;
  @ViewChild(PlaceholderDirective, {static: false}) navigationHost: PlaceholderDirective; 

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  ngOnInit(): void {
  }

  navigatonClicked() {
    if (!this.navigationOpen)
      this.smallBeforeNav = this.small;
    this.navigationOpen = !this.navigationOpen;
    if (this.navigationOpen) {
      //this.showNavigationArea();
      this.small = false;
    } else {
      //this.closeNavigationArea();
      if (this.smallBeforeNav !== null)
        this.small = this.smallBeforeNav;
    }
      
  }
 
  toggleSmallClicked() {
    this.small = !this.small;
  }

  private showNavigationArea() {
    const navigationCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(NavigationComponent);
    const hostViewContainerRef = this.navigationHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(navigationCmpFactory);
    
    componentRef.instance.openClicked();
  }

  private closeNavigationArea() {
    const hostViewContainerRef = this.navigationHost.viewContainerRef;
    hostViewContainerRef.clear();
  }
}
