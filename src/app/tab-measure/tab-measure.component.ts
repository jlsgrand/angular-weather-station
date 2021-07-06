import {Component, OnInit} from '@angular/core';
import { MeasureService } from '../measure.service';

@Component({
  selector: 'app-tab-measure',
  templateUrl: './tab-measure.component.html',
  styleUrls: ['./tab-measure.component.css']
})
export class TabMeasureComponent implements OnInit {

  measureList = this.measureService.getMeasureList();

  // Injection de dépendance // parallèle avec Java
  // private MeasureService measureService;
  // public TabMeasureComponent(MeasureService measureService) {
  //   this.measureService = measureService;
  // }
  
  constructor(private measureService: MeasureService) {
  }

  ngOnInit(): void {
  }

  deleteMeasure(measure: any) {
    console.log("suppression de la mesure : " + measure.id);
  }
}
