import { SolarService } from '../../providers/solar.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  private currentPower;
  private lastReportAt;

  private summary;

  constructor(private solarService: SolarService) { }

  ngOnInit() {
    this.solarService.getSolarSummary().subscribe(
      summary => {
        this.summary = summary;
        this.setValues();
      },
      error => console.log(error)
    )
  }

  setValues() {
    this.currentPower = Math.round(this.summary.current_power / 10) / 100;
    this.lastReportAt = moment.unix(this.summary.last_report_at).fromNow();
  }

}
