import {Component, OnInit} from '@angular/core';
import { MeasureService } from '../measure.service';

@Component({
  selector: 'app-last-measure',
  templateUrl: './last-measure.component.html',
  styleUrls: ['./last-measure.component.css']
})
export class LastMeasureComponent implements OnInit {

  measure = this.measureService.getLastMeasure();

  constructor(private measureService: MeasureService) {
  }

  ngOnInit(): void {
  }

}
