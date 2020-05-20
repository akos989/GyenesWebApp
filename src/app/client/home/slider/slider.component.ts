import { Component, Input, OnInit } from '@angular/core';

import { SwiperConfigInterface, SwiperConfig } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.css' ]
})
export class SliderComponent implements OnInit {
  @Input() number: number = 0;
  @Input() root: string;
  @Input() mode: number = 0;
  fakeArray: number[] = [];
  ngOnInit() {
    for(let i: number = 1; i <= this.number; i++)
      this.fakeArray.push(i);
  }

  public config: SwiperConfigInterface = {
    a11y: true,
    effect: (this.mode === 0) ? 'coverflow' : 'slide',
    grabCursor: true,
    centeredSlides: true,
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    },
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    }
  };

  constructor() {}

}