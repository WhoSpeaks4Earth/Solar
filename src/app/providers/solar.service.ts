import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SolarService {
  private readonly solarSummaryUrl = 'https://api.enphaseenergy.com/api/v2/systems/480536/summary?key=36b842fc322607d6b4c615ff13d08d07&user_id=4d7a67794e5455340a';
  private readonly solarStatsUrl = 'https://api.enphaseenergy.com/api/v2/systems/480536/stats?key=36b842fc322607d6b4c615ff13d08d07&user_id=4d7a67794e5455340a';

  constructor(private http: Http) {
  }

  getSolarSummary(): Observable<any> {
    return this.http
      .get(this.solarSummaryUrl)
      .map((res: Response) => res.json())
      .do(obj => {
        if(obj.status == 'comm' || obj.status == 'normal')
          obj.status = 'Online';
        else
          obj.status = 'Offline';
      });
  }


  getSolarStats(): Observable<any> {
    return this.http
      .get(this.solarStatsUrl)
      .map((res: Response) => res.json());
  }
}
