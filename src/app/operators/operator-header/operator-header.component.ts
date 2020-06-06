import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-operator-header',
  templateUrl: './operator-header.component.html',
  styleUrls: ['./operator-header.component.css']
})
export class OperatorHeaderComponent implements OnInit {

  open:boolean = false

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  toggleOpen(event) {
    event.stopPropagation();
    event.preventDefault();
    this.open = !this.open;
    if (this.open)
      this.renderer.addClass(document.body, 'modal-open');
    else
      this.renderer.removeClass(document.body, 'modal-open');
  }
  closeNav(event) {
    event.stopPropagation();
    event.preventDefault();
    this.open = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }
}
