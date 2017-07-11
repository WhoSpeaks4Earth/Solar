import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private currentDate: string;

  constructor() { }

  ngOnInit() {
    this.getDate();
  }

  getDate() {
    let m = moment();
    this.currentDate = m.format("dddd, MMMM Do YYYY");
  }

}
