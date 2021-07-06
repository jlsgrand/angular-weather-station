import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Measure} from './measure';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  baseAPIUrl = 'https://spring-meteo-station-api.herokuapp.com:443/api/measures';

  measureType = 'CO2';
  startDate = new Date();
  endDate = new Date();

  constructor(private http: HttpClient) {
  }

  getMeasureList() {
    return this.http.get<Measure[]>(this.baseAPIUrl + '?measure-type=' + this.measureType + '&start-date=' + this.startDate.toISOString()
      + '&end-date=' + this.endDate.toISOString())
    // return this.http.get<Measure[]>('https://spring-meteo-station-api.herokuapp.com:443/api/measures?measure-type=TEMPERATURE&start-date=2021-04-12T08:20&end-date=2021-04-13T08:20');
  }

  getLastMeasure() {
    return this.http.get<Measure>(`${this.baseAPIUrl}/last?measure-type=${this.measureType}`);
    // return this.http.get<Measure>(this.baseAPIUrl + '/last?measure-type=' + this.measureType);
    // return this.http.get<Measure>('https://spring-meteo-station-api.herokuapp.com:443/api/measures/last?measure-type=TEMPERATURE');
  }

  getTopMeasure() {
    return this.http.get<Measure>(`${this.baseAPIUrl}/top?measure-type=${this.measureType}`);
    // return this.http.get<Measure>('https://spring-meteo-station-api.herokuapp.com:443/api/measures/top?measure-type=TEMPERATURE');
  }
}
