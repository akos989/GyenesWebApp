import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd } from '@angular/router';
import { ErrorHandleService } from './shared/error-handle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GyenesWebApp';
  errorSub: Subscription;

  isLoading = false;
  errorMessage: string = null;
  

  constructor(private _router: Router, private errorHandler: ErrorHandleService) {}


  ngOnInit() {
    this.routerEvents();
    this.errorSub = this.errorHandler.error
      .subscribe(errorMessage => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      });
  }

  routerEvents() {
    this._router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoading = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.isLoading = false;
          break;
        }
      }
    });
  }

  hideError() {
    this.errorMessage = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
