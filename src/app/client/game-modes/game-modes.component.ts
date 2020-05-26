import { Component, AfterViewInit, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';

class GameMode {
  constructor(public name: string, public description: string, public imgUrl1, public imgUrl2 = '') {}
}

@Component({
  selector: 'app-game-modes',
  templateUrl: './game-modes.component.html',
  styleUrls: ['./game-modes.component.css']
})
export class GameModesComponent implements AfterViewInit {

  extended = true;
  scrolled = false;

  gameModeArray: GameMode[] = [
    new GameMode('Várfoglalás', 'lakjsdf', "../../../assets/pictures/game-modes/var/20190816_143608.jpg",
    "../../../assets/pictures/game-modes/var/img_20190807_195109.jpg"),
    new GameMode('Capture the flag', 'lakjsdf', "../../../assets/pictures/minibus.png"),
    new GameMode('Speedball', 'lakjsdf', "../../../assets/pictures/game-modes/speedball/speedball.jpg"),
    new GameMode('TDM', 'lakasdasdasdasdasdasd asd asd asd asdasdas djsdf',
    "../../../assets/pictures/game-modes/TDM/TDM1.jpg", "../../../assets/pictures/game-modes/TDM/TDM2.jpg"),
    new GameMode('Capture the point', 'lakjsdf', "../../../assets/pictures/game-modes/capture/capture-the-point.jpg")
  ];

  @ViewChildren('gameModes') gameModeElements: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const toggleOffset = window.innerHeight * 0.4;
    this.renderer.listen(window, 'scroll', () => {
      const windowOffset = window.scrollY;
      if (!this.scrolled) {
        if (windowOffset > toggleOffset + toggleOffset * 0.05) {
          this.extended = false;
          this.scrolled = true;
        }
      } else {
        if (windowOffset < 10) {
          this.extended = true;
          this.scrolled = false;
        }
      }
    });
  }

  scrollToElement(idx: number) {
    this.extended = false;
    let positon: number = this.gameModeElements.toArray()[idx].nativeElement.offsetTop;
    positon -= window.innerHeight * 0.6;
    const offset = positon - window.pageYOffset;
    const addition = (offset > 0 ? 10 : -10);
    if (addition < 0) {
      positon -= window.innerHeight * 0.2;
    }
    let scrollToTop = window.setInterval(() => {
      let pos = window.scrollY;
      if (!((pos < positon) && (pos > positon - 100))) {
          window.scrollTo(0, pos + addition);
          pos += addition;
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 4);
  }

  extend() {
    this.extended= !this.extended;
  }

}
