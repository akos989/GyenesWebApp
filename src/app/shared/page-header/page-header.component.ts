import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() src: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    this.src = '../../../assets/pictures/page-headers/'+this.src;
  }

}
