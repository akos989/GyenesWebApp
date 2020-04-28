import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GyenesWebApp';

  isLoading = false;

  constructor(private _router: Router) {}


  ngOnInit() {
    this.routerEvents();
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
}
