import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../providers/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {
  private weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      data => { 
        this.weather = data.current_observation;
      },
      error => console.log(error)
    );
  }

}
