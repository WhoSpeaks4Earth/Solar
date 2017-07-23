import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private weatherUrl: string = 'http://api.wunderground.com/api/819c0acea464a1dd/conditions/q/GA/Acworth/current_observation.json';

  constructor(private http: Http) {}

  getWeather(): Observable<any> {
    return this.http
            .get(this.weatherUrl)
            .map((res: Response) => res.json());
  }

}
