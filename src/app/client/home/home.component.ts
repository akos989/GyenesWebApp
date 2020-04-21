import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';
import { HeaderService } from '../header/header.service';

declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  smallHeader: boolean = false;

  ctrl = new ScrollMagic.Controller();

  constructor(private scrollTopS: ScrollTopService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.scrollTopS.scrollTop
      .subscribe(
        (component: string) => {
          if (component === 'home')
            this.scrollTop();
        }
      );
    this.animScroll();
  }

  scrollTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 4);
  }

  animScroll() {
    new ScrollMagic.Scene({
      triggerElement: '#trigger',
      triggerHook: 0,
      duration: 10000
    })
      .setClassToggle("hr.left", "open")
      .addTo(this.ctrl);

    new ScrollMagic.Scene({
      triggerElement: '#trigger2',
      triggerHook: 0,
      duration: 10000
    })
      .setClassToggle("hr.center", "open")
      .addTo(this.ctrl);
    
    new ScrollMagic.Scene({
      triggerElement: '#trigger',
    })
      .on('start', () => {
        if (document.getElementById('trigger')) {
          this.smallHeader = !this.smallHeader;
          console.log(this.smallHeader);
          this.headerService.newPage(this.smallHeader);
        }
    })
      .addTo(this.ctrl);
    }    
  
  
}
