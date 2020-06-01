import { Component, OnInit, Renderer2 } from '@angular/core';
import { Field } from './field-details/field.model';
import { Equipment } from 'src/app/shared/models/equipment.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  open: boolean[] = [false, false, false];
  fields: Field[] = [
    new Field(
      'Elhagyott Város', 'A legnagyobb pályánk, ami 4000 négyzetméteren terül el, akár 35 fő is játszhat rajta. Itt próbálhatjátok ki a legtöbb játékmódot, mint a Capure the Point, TDM, Capture the Flag stb..',
      'city.jpg',
      [
        new Equipment('Autóroncs', '', 'elemek/wreckage.png'),
        new Equipment('Kisbusz', '', 'elemek/minibusz.png'),
        new Equipment('Konténer', '', 'elemek/container.png'),
        new Equipment('Ifa', '', 'elemek/ifa.png'),
        new Equipment('Szemeteskonténer', '', 'elemek/kuka-min.png'),
        new Equipment('Raklapháromszög', '', 'elemek/raklap-min.png')
      ],
      '','city', 7
    ),
    new Field(
      'Speedball pálya', '5 vs 5 szabvány speedball versenypálya, de kisebb és nagyobb csapatoknak is kiváló.',
      'competition.jpg',
      [
        new Equipment('Cső', '', 'elemek/cso-min.png'),
        new Equipment('Hordók', '', 'elemek/petrol.png'),
        new Equipment('Gumi háromszög', '', 'elemek/gumi3-min.png'),
        new Equipment('Autó gumi torony', '', 'elemek/tires.png')
      ],
      'A nagy csapatok, kisebb csoportokra osztva, körmérkőzést játszhatnak.', 'competition', 5
    ),
    new Field(
      'Árkos pálya', 'A pályán a vár elfoglalása a cél, amely az árokrendszeren, dombokon és más akadályon keresztül kísérelhető meg.',
      'trench.jpg',
      [
        new Equipment('Árokrendszer', '', 'elemek/trench-min.png'),
        new Equipment('Vár', '', 'elemek/var-min.png'),
        new Equipment('Gumi háromszög', '', 'elemek/gumi3-min.png'),
        new Equipment('Fa X', '', 'elemek/fa_x-min.png'),
        new Equipment('Domb', '', 'elemek/mound.png')
      ],
      '', 'trench', 6
    )
];

constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleOpen(idx: number = -1) {
    if (idx === -1) {
      this.open[0] = false;
      this.open[1] = false;
      this.open[2] = false;
    } else {
      this.open[idx] = !this.open[idx];
    }
    if (this.anyOpen())
      this.renderer.addClass(document.body, 'modal-open');
    else
      this.renderer.removeClass(document.body, 'modal-open');
  }

  anyOpen(): boolean {
    return this.open[0] || this.open[1] || this.open[2];
  }

}