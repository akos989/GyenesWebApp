import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  smallHeader: boolean = false;
  slides: string[] = [
    
  ];

  ctrl = new ScrollMagic.Controller();
  scrollMagicScenes = [];

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.animScroll();
  }

  animScroll() {
    this.scrollMagicScenes.push(
      new ScrollMagic.Scene({
        triggerElement: '#trigger',
        triggerHook: 0,
        offset: -100,
        duration: 10000
      })
        .setClassToggle("hr.left", "open")
        .addTo(this.ctrl)  
    );
      
    this.scrollMagicScenes.push(
      new ScrollMagic.Scene({
          triggerElement: '#trigger',
          triggerHook: 0,
          offset: -100,
          duration: 10000
        })
        .setClassToggle("#best-track-map", "open")
        .addTo(this.ctrl)
    );
    this.scrollMagicScenes.push(
      new ScrollMagic.Scene({
        triggerElement: '#trigger2',
        triggerHook: 0,
        offset: -200,
        duration: 10000
      })
        .setClassToggle("hr.center", "open")
        .addTo(this.ctrl)
    );
    this.scrollMagicScenes.push(
      new ScrollMagic.Scene({
        triggerElement: '#trigger',
        triggerHook: 0,
        offset: -400
      })
        .on('start', () => {
            this.smallHeader = !this.smallHeader;
            this.headerService.newPage(this.smallHeader);
      })
        .addTo(this.ctrl)
    );
  }
    
  ngOnDestroy() {
    for (let i:number = 0; i < 4; i++) {
      this.scrollMagicScenes[i].destroy(false);
      this.scrollMagicScenes[i] = null;
    }
    this.ctrl.destroy(false);
    this.ctrl = null;
  }  
}
