import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { Field } from './field.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-field-details',
  templateUrl: './field-details.component.html',
  styleUrls: ['./field-details.component.css'],
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
export class FieldDetailsComponent implements OnInit, AfterViewInit {

  @Input() field: Field;
  @Output() close = new EventEmitter<void>();
  
  displayDown: boolean = false;
  scrolled: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const elem = document.getElementById('modal');
    if (!this.scrolled) {
      this.renderer.listen(elem, 'scroll', () => {
        this.scrolled = true;
        this.displayDown = false;
      });
    }
    setTimeout(() => {
      if (!this.scrolled)
        this.displayDown = true;
    }, 0);
  }
  scrollDown() {
    const elem = document.getElementById('modal');
    const vh = window.innerHeight * 0.8;
    elem.scrollTo({
      top: (vh),
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.field.imgPath = '../../../../assets/pictures/maps/' + this.field.imgPath;
  }

  onClose() {
    this.close.emit();
  }
}
