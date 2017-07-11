import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService implements OnInit {
  private weatherUrl: string = 'http://api.wunderground.com/api/819c0acea464a1dd/conditions/q/GA/Acworth/current_observation.json';
  public weather: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): Observable<any> {
    return this.http
            .get(this.weatherUrl)
            .map((res: Response) => this.weather = res.json());
  }

}
