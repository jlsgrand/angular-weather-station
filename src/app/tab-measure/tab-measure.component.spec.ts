import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMeasureComponent } from './tab-measure.component';

describe('TabMeasureComponent', () => {
  let component: TabMeasureComponent;
  let fixture: ComponentFixture<TabMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
