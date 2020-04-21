import { Component, OnInit } from '@angular/core';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: number = 0;

  constructor(private scrollTopS: ScrollTopService) { }

  ngOnInit(): void {
    this.scrollTopS.scrollTop
      .subscribe(
        (component: string) => {
          if (component === 'home')
            this.scrollTop();
        }
      );
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

}
