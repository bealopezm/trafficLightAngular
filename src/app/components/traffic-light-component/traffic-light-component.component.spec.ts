import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightComponentComponent } from './traffic-light-component.component';

describe('TrafficLightComponentComponent', () => {
  let component: TrafficLightComponentComponent;
  let fixture: ComponentFixture<TrafficLightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficLightComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrafficLightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
