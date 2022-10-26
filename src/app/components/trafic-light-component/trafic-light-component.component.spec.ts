import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficLightComponentComponent } from './trafic-light-component.component';

describe('TraficLightComponentComponent', () => {
  let component: TraficLightComponentComponent;
  let fixture: ComponentFixture<TraficLightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraficLightComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraficLightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
