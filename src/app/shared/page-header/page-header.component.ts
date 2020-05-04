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
    console.log(this.src)
    this.src = '../../../assets/pictures/'+this.src;
  }

}
