import { Component } from '@angular/core';

import { SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.css' ]
})
export class SliderComponent {

  public show: boolean = true;

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  public config: SwiperConfigInterface = {
    a11y: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    direction: 'horizontal',
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
    pagination: true,
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