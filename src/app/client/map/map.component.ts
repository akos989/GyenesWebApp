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
      'Elhegyott Város', 'Mindent megtalálni benne, ami egy elhagyott városba való. Blajalsdjflajsdflkjasd flkasjd flaksdjf lkasdj faklsdj flkasdfj laskdjf askldfj askldfj askldfj askldfj askldfj.',
      'city-map.jpg',
      [
        new Equipment('Autóroncs', 'Sok széttört autó', 'wreckage.png'),
        new Equipment('Minibusz', 'fsdf pályán...', 'minibus.jpg'),
        new Equipment('Minibusz 2', 'Autogumikbólsdf kirakott fedezék', 'minibus.png'),
        new Equipment('Konténer', 'Több gumi egymásraasdf', 'container.png'),
        new Equipment('Ifa', 'A híres IFA', 'ifa.jpg'),
        new Equipment('Kukakonténer', 'Asdfas híres kuka', 'rubbish.png'),
        new Equipment('Raklapháromszög', 'lkajsdflkj', 'pallet.png')
      ]
    ),
    new Field(
      'Versenypálya', 'Szabványos versenypálya... blajalsdjflajsdflkjasd flkasjd flaksdjf lkasdj faklsdj flkasdfj laskdjf askldfj askldfj askldfj askldfj askldfj.',
      'competition-map.jpg',
      [
        new Equipment('Cső', 'Cső amibe bele lehet bújni', 'pipe.png'),
        new Equipment('Hordók', 'Sok van elszórva a pályán...', 'petrol.png'),
        new Equipment('Gumi háromszög', 'Autogumikból kirakott fedezék', 'tire-triangle.png'),
        new Equipment('Autó gumi torony', 'Több gumi egymásra téve', 'tires.png'),
        new Equipment('Elválasztó fal', 'Elválasztja a két játékrészt', 'separator.png')
      ],
      'Nincs sok különböző akadály de ebből sok van :D'
    ),
    new Field(
      'Árkos pálya', 'Ezen a pályán blajalsdjflajsdflkjasd flkasjd flaksdjf lkasdj faklsdj flkasdfj laskdjf askldfj askldfj askldfj askldfj askldfj.',
      'trenches-map.jpg',
      [
        new Equipment('Vár', 'Ez egy vár, ahol el lehet bújni.', 'tower.png'),
        new Equipment('Árok', 'Ezz a pálya jellegzetessége...', 'trench.jpg'),
        new Equipment('Gumi háromszög', 'Autogumikból kirakott fedezék', 'tire-triangle.png'),
        new Equipment('Gerenda X', 'Kettő is van belőle a pályán...', 'lumber-x.png'),
        new Equipment('Homokkupac', 'Nagy homokkupac kiváló fedezéknek', 'mound.jpg')
      ],
      'Laskdjfaslfjs dasldkfj asldkfj  askldjf askldfj.'
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