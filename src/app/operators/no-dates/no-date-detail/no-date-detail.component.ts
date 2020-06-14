import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { NoDate } from 'src/app/client/booking/date/no-dates.service';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';
import { NoDateDetailModalComponent } from '../no-date-detail-modal/no-date-detail-modal.component';

@Component({
  selector: 'app-no-date-detail',
  templateUrl: './no-date-detail.component.html',
  styleUrls: ['./no-date-detail.component.css']
})
export class NoDateDetailComponent implements OnDestroy {

  @Input() noDate: NoDate;
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  closeSub: Subscription;
  
  constructor(private cFResolver: ComponentFactoryResolver) { }

  onOpen(event) {
    event.stopPropagation();
    event.preventDefault();
    const componentFactory =
      this.cFResolver.resolveComponentFactory(NoDateDetailModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef =
      hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.noDate = this.noDate;
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
