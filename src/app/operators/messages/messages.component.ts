import { Component, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(document.getElementById('operatorBase'), 'nooverflow');
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.getElementById('operatorBase'), 'nooverflow');
  }
}
