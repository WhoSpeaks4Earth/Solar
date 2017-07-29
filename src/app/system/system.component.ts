import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  @Input() summary;
  private currentPower;
  private lastReportAt;

  constructor() { }

  ngOnInit() {
    this.currentPower = Math.round(this.summary.current_power / 10) / 100;
    this.lastReportAt = moment.unix(this.summary.last_report_at).fromNow();
  }

  ngDidChange(summary) {
    console.log('summary changed');
  }

}
