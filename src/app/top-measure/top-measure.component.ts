import { Component, OnInit } from '@angular/core';
import { MeasureService } from '../measure.service';

@Component({
  selector: 'app-top-measure',
  templateUrl: './top-measure.component.html',
  styleUrls: ['./top-measure.component.css']
})
export class TopMeasureComponent implements OnInit {

  measure = this.measureService.getTopMeasure();

  constructor(private measureService: MeasureService) { }

  ngOnInit(): void {
  }

}
