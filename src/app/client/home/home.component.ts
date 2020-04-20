import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

enum Color {
  TRANSPARENT = 0,
  WHITE = 1,
  DARK = 2
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTransparent() {
    this.color = this.color === 2 ? 0 : 2;
    console.log('changeTrans')
  }

  onChangeWhite() {
    console.log('changewhite')
  }

}
