import { Component, OnInit, Input, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';
import { OperatorPackageModalComponent } from './operator-package-modal/operator-package-modal.component';

@Component({
  selector: 'app-operator-package-detail',
  templateUrl: './operator-package-detail.component.html',
  styleUrls: ['./operator-package-detail.component.css']
})
export class OperatorPackageDetailComponent implements OnDestroy {

  @Input() package: Package;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  closeSub: Subscription;

  constructor(private cFResolver: ComponentFactoryResolver) { }

  openModal(event) {
    event.stopPropagation();
    event.preventDefault();
    const componentFactory =
      this.cFResolver.resolveComponentFactory(OperatorPackageModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.package = this.package;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
  ngOnDestroy() {
    if (this.closeSub)
      this.closeSub.unsubscribe();
  }
}
