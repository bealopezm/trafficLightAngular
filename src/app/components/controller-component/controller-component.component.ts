import { Component, OnInit } from '@angular/core';
import { TrafficLight } from '../../interfaces/traffic-light';
import { TrafficLightServiceService } from '../../services/traffic-light-service.service';

@Component({
  selector: 'app-controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: ['./controller-component.component.css']
})
export class ControllerComponentComponent implements OnInit {

  controllerTrafficLight: TrafficLight;

  constructor(
    private trafficLightService: TrafficLightServiceService
  ) {
    this.controllerTrafficLight = { color: 'rojo', onTrafficLight: false }
  }

  ngOnInit(): void {
    this.trafficLightService.getTrafficLight().subscribe(trafficLight => {
      this.controllerTrafficLight = trafficLight;
    });
  }

  onSelect($event: any) {
    this.controllerTrafficLight.color = $event.target.value
  }

  checkOnOff() {
    this.controllerTrafficLight.onTrafficLight = !this.controllerTrafficLight.onTrafficLight
    if (this.controllerTrafficLight.onTrafficLight === true) {
      this.addController(this.controllerTrafficLight);
    }
  }

  addController(trafficLight: TrafficLight) {
    this.trafficLightService.addTrafficLight(trafficLight);
  }

}
