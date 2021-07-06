import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeasureService } from './measure.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather-station';

  typeForm = this.formBuilder.group({
    type: this.measureService.measureType
  });

  dateForm = this.formBuilder.group({
    startDate: this.measureService.startDate,
    endDate: this.measureService.endDate
  });

  constructor(private formBuilder: FormBuilder, private measureService: MeasureService) {
  }

  onTypeChoice() {
    this.measureService.measureType = this.typeForm.get('type')?.value
    // console.log(this.typeForm.value);
  }

  onDateChoice() {
    this.measureService.startDate = this.dateForm.get('startDate')?.value;
    this.measureService.endDate = this.dateForm.get('endDate')?.value;
    //console.log(this.dateForm.value);
  }
}
