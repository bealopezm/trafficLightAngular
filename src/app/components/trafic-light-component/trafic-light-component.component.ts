import { Component, OnInit } from '@angular/core';
import { TraficLightServiceService } from '../../services/trafic-light-service.service';
import { TraficLight } from '../../interfaces/trafic-light';

@Component({
  selector: 'app-trafic-light-component',
  templateUrl: './trafic-light-component.component.html',
  styleUrls: ['./trafic-light-component.component.css']
})
export class TraficLightComponentComponent implements OnInit {

  trafficLight: TraficLight;
  constructor(
    private traficLightServic: TraficLightServiceService
  ) {
    this.trafficLight = { color: '', onTrafficLight: false };
  }

  ngOnInit(): void {
    this.traficLightServic.getTraficLight().subscribe(trafficLight => {
      this.trafficLight = trafficLight;
    });
  }

}
