import {Component, ComponentFactoryResolver, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {Subscription} from 'rxjs';
import {ErrorHandleService} from './shared/error-handle.service';
import {PlaceholderDirective} from './shared/placeholder.directive';
import {AcceptCookieService} from './shared/cookie/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GyenesWebApp';
  errorSub: Subscription;
  cookieSub: Subscription;
  isLoading = false;
  errorMessage = '';
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  cookies: boolean;
  authHeader = false;

  constructor(private router: Router, private errorHandler: ErrorHandleService,
              private renderer: Renderer2,
              private cFResolver: ComponentFactoryResolver,
              private acceptCookieS: AcceptCookieService) {
  }

  ngOnInit() {
    this.routerEvents();
    this.errorSub = this.errorHandler.error
      .subscribe(errorMessage => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      });
    this.cookies = this.acceptCookieS.displayAcceptCookies();
    this.cookieSub = this.acceptCookieS.answered
      .subscribe(() => {
        this.cookies = false;
      });
  }

  routerEvents() {
    this.router.events.subscribe((event: RouterEvent) => {
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
    this.errorMessage = '';
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
