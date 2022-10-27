import { Component, OnInit } from '@angular/core';
import { TrafficLightServiceService } from '../../services/traffic-light-service.service';
import { TrafficLight } from '../../interfaces/traffic-light';

@Component({
  selector: 'app-traffic-light-component',
  templateUrl: './traffic-light-component.component.html',
  styleUrls: ['./traffic-light-component.component.css']
})
export class TrafficLightComponentComponent implements OnInit {

  trafficLight: TrafficLight;
  constructor(
    private trafficLightServic: TrafficLightServiceService
  ) {
    this.trafficLight = { color: '', onTrafficLight: false };
  }

  ngOnInit(): void {
    this.trafficLightServic.getTrafficLight().subscribe(trafficLight => {
      this.trafficLight = trafficLight;
    });
  }

}
