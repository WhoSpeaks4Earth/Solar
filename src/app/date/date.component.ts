import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  private currentDate: string;
  private currentWeekDay: string;

  constructor() { }

  ngOnInit() {
    this.getDate();
  }

  getDate() {
    let m = moment();
    this.currentDate = m.format("ll");
    this.currentWeekDay = m.format("dddd");
  }

}
