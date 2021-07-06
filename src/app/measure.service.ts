import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Measure } from './measure';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  constructor(private http: HttpClient) { }

  getMeasureList() {
    return this.http.get<Measure[]>('https://spring-meteo-station-api.herokuapp.com:443/api/measures?measure-type=TEMPERATURE&start-date=2021-04-12T08:20&end-date=2021-04-13T08:20');
  }

  getLastMeasure() {
    return this.http.get<Measure>('https://spring-meteo-station-api.herokuapp.com:443/api/measures/last?measure-type=TEMPERATURE');
  }

  getTopMeasure() {
    return this.http.get<Measure>('https://spring-meteo-station-api.herokuapp.com:443/api/measures/top?measure-type=TEMPERATURE');
  }
}
