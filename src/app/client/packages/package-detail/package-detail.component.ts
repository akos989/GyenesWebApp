import {Component, ComponentFactoryResolver, Input, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';

import {Package} from 'src/app/shared/models/package.model';
import {PackageModalComponent} from './modal/package-modal.component';
import {PlaceholderDirective} from 'src/app/shared/placeholder.directive';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnDestroy {

  @Input() package: Package;
  selected = false;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  private closeSub: Subscription;
  routeUrl = '';

  constructor(private cFResolver: ComponentFactoryResolver,
              private renderer: Renderer2) {
  }

  openDialog(event): void {
    event.stopPropagation();
    this.renderer.addClass(document.body, 'modal-open');
    const componentFactory =
      this.cFResolver.resolveComponentFactory(PackageModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.package = this.package;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
      this.renderer.removeClass(document.body, 'modal-open');
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
