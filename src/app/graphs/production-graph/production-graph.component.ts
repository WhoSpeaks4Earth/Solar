import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-production-graph',
  templateUrl: './production-graph.component.html',
  styleUrls: ['./production-graph.component.scss']
})
export class ProductionGraphComponent implements OnInit {
  @Input() stats;
  private chart: Chart;
  
  constructor() { }

  ngOnInit() {
    let ctx = document.getElementById("productionTodayGraph");
    this.chart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Produced Today',
          data: this.stats.invtervals,
          borderWidth: 1
        }]
      }
    });
  }

}
