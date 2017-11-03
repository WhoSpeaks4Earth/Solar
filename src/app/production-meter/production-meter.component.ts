import { SolarService } from '../providers/solar.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-production-meter',
  templateUrl: './production-meter.component.html',
  styleUrls: ['./production-meter.component.scss']
})
export class ProductionMeterComponent implements OnInit {
  private energyToday: number = 0;
  private chart: Chart;
  private readonly maxkWh: number = 22;
  private remainingkWh: number = 0;
  private summary;

  constructor(private solarService: SolarService) { }

  ngOnInit() {
    this.solarService.getSolarSummary().subscribe(
      summary => {
        this.summary = summary;
        this.setValues();
        this.setChart();
      },
      error => console.log(error)
    );
  }

  setValues() {
    this.energyToday = Math.round(this.summary.energy_today / 100) / 10;
    this.remainingkWh = this.maxkWh - this.energyToday;
  }

  setChart() {
    const ctx = document.getElementById("myChart");
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
            this.energyToday,
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

}
