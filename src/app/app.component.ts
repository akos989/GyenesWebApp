import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, Renderer2, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorHandleService } from './shared/error-handle.service';
import { ModalService } from './shared/backend-modal/modal.service';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { ModalComponent } from './shared/backend-modal/modal/modal.component';
import { Modal } from './shared/backend-modal/modal.model';
import { AcceptCookieService } from './shared/cookie/cookie.service';
import { HeaderService } from './client/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'GyenesWebApp';
  errorSub: Subscription;
  cookieSub: Subscription;
  modalCloseSub: Subscription;
  checkModalSub: Subscription;
  isLoading = false;
  errorMessage: string = '';
  @ViewChild(PlaceholderDirective, {static: false}) modalHost: PlaceholderDirective;
  modal: Modal = null;
  cookies: boolean;
  authHeaderSub: Subscription;
  authHeader: boolean = false;

  constructor(private _router: Router, private errorHandler: ErrorHandleService,
              private modalService: ModalService, private renderer: Renderer2,
              private cFResolver: ComponentFactoryResolver,
              private acceptCookieS: AcceptCookieService,
              private headerService: HeaderService) {}

  ngOnInit() {
    this.routerEvents();
    this.errorSub = this.errorHandler.error
      .subscribe(errorMessage => {
        this.errorMessage = errorMessage;
        this.isLoading = false;
      });
    this.cookies = this.acceptCookieS.displayAcceptCookies();
    this.cookieSub = this.acceptCookieS.answered
      .subscribe(()=> {
        this.cookies = false;
      });
    this.authHeaderSub = this.headerService.auth
      .subscribe((authHeader) => {
        this.authHeader = authHeader;
      });
  }

  ngAfterViewInit() {
    this.checkModalSub = this.modalService.checkModal()
      .subscribe(()=> {
        this.modal = this.modalService.modal;
        if (this.modal)
          this.displayModal();
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

  displayModal() {
    this.renderer.addClass(document.body, 'modal-Open');
    const componentFactory =
        this.cFResolver.resolveComponentFactory(ModalComponent);
    const hostViewContainerRef = this.modalHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef =
        hostViewContainerRef.createComponent(componentFactory);
    componentRef.instance.modal = this.modal;
    this.modalCloseSub = componentRef.instance.close.subscribe(() => {
        this.modalCloseSub.unsubscribe();
        hostViewContainerRef.clear();
        this.renderer.removeClass(document.body, 'modal-Open');
    });
  }

  hideError() {
    this.errorMessage = '';
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
    this.authHeaderSub.unsubscribe();
    if (this.modalCloseSub)
      this.modalCloseSub.unsubscribe();
  }
}
