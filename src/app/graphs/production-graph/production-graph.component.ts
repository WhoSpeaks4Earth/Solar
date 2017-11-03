import { SolarService } from '../../providers/solar.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-production-graph',
  templateUrl: './production-graph.component.html',
  styleUrls: ['./production-graph.component.scss']
})
export class ProductionGraphComponent implements OnInit {
  private stats;
  private chart: Chart;
  
  constructor(private solarService: SolarService) { }

  ngOnInit() {
    this.solarService.getSolarStats().subscribe(
      stats => {
        this.stats = stats;
        this.setProductionGraph();
      },
      error => console.log(error)
    );
  }

  setProductionGraph() {
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
