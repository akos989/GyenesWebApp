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
    new GameMode('Várfoglalás',
    'A játékmód célja a vár elfoglalása, amely az árokrendszeren, dombokon és más akadályon keresztül kísérelhető meg.', "../../../assets/pictures/game-modes/var/capture-the-point.jpg",
    "../../../assets/pictures/game-modes/var/img_20190807_195109.jpg"),
    new GameMode('Capture the flag',
    'Cél, hogy a pályán elhelyezett zászlót valamelyik csapat megszerezze és a saját bázisára visszajuttassa.', "../../../assets/pictures/game-modes/flag/flag.jpg"),
    new GameMode('Speedball',
    'A játék az utolsó emberig tart, vagy addig, amíg valamelyik játékos átjut az ellenfél kezdőpontjára.', "../../../assets/pictures/game-modes/speedball/speedball.jpg", "../../../assets/pictures/game-modes/speedball/speedball2.jpg"),
    new GameMode('TDM', 'Ebben a játékmódban, ha eltalálnak nem kell kiállnod, hanem a kezedőpontról folytathatod. Az idő leteltével az a csapat veszít, amelyiknek összesen több találatot kapott.',
    "../../../assets/pictures/game-modes/TDM/TDM1.jpg", "../../../assets/pictures/game-modes/TDM/TDM2.jpg"),
    new GameMode('Capture the point',
    'A játék előre meghatározott ideig tart. A játékosok feladata az idő leteltéig a ponton a saját zászlójukat benttartsák.', "../../../assets/pictures/game-modes/capture/capture-the-point.jpg")
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
    let positon: number = this.gameModeElements.toArray()[idx].nativeElement.getBoundingClientRect().top;
    const addition = ((window.innerHeight * 0.2 > positon) ? 15 : -15);
    let scrollToTop = window.setInterval(() => {
      let pos = window.scrollY;
      positon = this.gameModeElements.toArray()[idx].nativeElement.getBoundingClientRect().top;
      if ( !((positon >= window.innerHeight * 0.2) && (positon <= window.innerHeight * 0.23)) ) {
          window.scrollTo(0, pos - addition);
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 4);
  }

  extend() {
    this.extended= !this.extended;
  }

}
