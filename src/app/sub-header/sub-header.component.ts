import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() lastReportAt;

  ngOnInit() {
    this.lastReportAt = moment.unix(this.lastReportAt).fromNow();
  }

}
