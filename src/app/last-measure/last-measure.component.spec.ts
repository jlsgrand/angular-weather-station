import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMeasureComponent } from './last-measure.component';

describe('LastMeasureComponent', () => {
  let component: LastMeasureComponent;
  let fixture: ComponentFixture<LastMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
