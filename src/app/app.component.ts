import { SolarService } from './providers/solar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public solarSummary: any;

  constructor(private solarService: SolarService) { }

  ngOnInit() {
      this.solarService.getSolarSummary().subscribe(
        data => this.solarSummary = data,
        error => console.log(error)
      );
    }
}
