import { SolarService } from './providers/solar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public solarSummary: any;
  public solarStats: any;

  constructor(private solarService: SolarService) { }

  ngOnInit() {
      this.solarService.getSolarSummary().subscribe(
        data => this.solarSummary = data,
        error => console.log(error)
      );

      this.solarService.getSolarStats().subscribe(
        data => this.solarStats = data,
        error => console.log(error)
      );
    }
}
