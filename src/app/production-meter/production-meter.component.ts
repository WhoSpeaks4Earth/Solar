import { Component, Input, OnInit } from '@angular/core';
//import { SolarService } from '../providers/solar.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-production-meter',
  templateUrl: './production-meter.component.html',
  styleUrls: ['./production-meter.component.scss']
})
export class ProductionMeterComponent implements OnInit {
  @Input() summary;
  private energyToday: number = 0;
  private chart: Chart;
  private readonly maxkWh: number = 22;
  private currentkWh: number = 12;
  private remainingkWh: number = 0;

  constructor() { }

  ngOnInit() {
    this.energyToday = Math.round(this.summary.energy_today / 100) / 10;
    this.calcRatio();

    let ctx = document.getElementById("myChart");
    this.chart = new Chart(ctx, {
    type: 'doughnut',
    options: {
      cutoutPercentage: 40
    },
    data: {
      //labels: ["Produced", "Potential"],
      datasets: [{
        label: 'Produced vs Potential',
          data: [
            this.currentkWh,
            this.remainingkWh
          ],
          backgroundColor: [
              'rgba(54, 162, 235, 0.8)',
              'rgba(220, 220, 220, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 0.8)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderWidth: 1
        }]
      }
    });
  }

  calcRatio() {
    this.remainingkWh = this.maxkWh - this.currentkWh;
  }

}
