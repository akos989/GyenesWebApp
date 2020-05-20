import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('buttonState', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class LandingComponent implements AfterViewInit {

  displayDown: boolean = false;
  scrolled: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    if (!this.scrolled) {
      this.renderer.listen(window, 'scroll', () => {
        this.scrolled = true;
        this.displayDown = false;
      });
    }
    setTimeout(() => {
      if (!this.scrolled)
        this.displayDown = true;
    }, 5000);
  }
  scrollDown() {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    window.scrollTo({
      top: (vh + 200),
      behavior: 'smooth'
    });
  }
}
