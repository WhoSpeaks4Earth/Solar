import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() summary;
  private lastReportAt;

  ngOnInit() {
    this.lastReportAt = moment.unix(this.summary.last_report_at).fromNow();
  }

}
