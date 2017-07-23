import { Component, OnInit } from '@angular/core';
//import { SolarService } from '../providers/solar.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-production-meter',
  templateUrl: './production-meter.component.html',
  styleUrls: ['./production-meter.component.scss']
})
export class ProductionMeterComponent implements OnInit {
  private chart: Chart;
  private readonly maxkWh: number = 22;
  private currentkWh: number = 12;
  private remainingkWh: number = 0;

  constructor() { }

  ngOnInit() {

    this.calcRatio();

    let ctx = document.getElementById("myChart");
    this.chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      //labels: ["Produced", "Potential"],
      datasets: [{
        label: 'Produced vs Potential',
          data: [
            this.currentkWh,
            this.remainingkWh
          ],
          backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',  
            'rgba(255, 159, 64, 1)'
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
