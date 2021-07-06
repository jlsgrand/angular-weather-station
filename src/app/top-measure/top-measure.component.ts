import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-measure',
  templateUrl: './top-measure.component.html',
  styleUrls: ['./top-measure.component.css']
})
export class TopMeasureComponent implements OnInit {

  measure = {
    "id": 3520,
    "type": "TEMPERATURE",
    "unit": "CELSIUS",
    "value": 20.90,
    "measureDate": "2021-04-17T11:40:18.513055"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
