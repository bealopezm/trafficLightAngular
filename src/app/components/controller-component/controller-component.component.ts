import { Component, OnInit } from '@angular/core';
import { TraficLight } from '../../interfaces/trafic-light';
import { TraficLightServiceService } from '../../services/trafic-light-service.service';

@Component({
  selector: 'app-controller-component',
  templateUrl: './controller-component.component.html',
  styleUrls: ['./controller-component.component.css']
})
export class ControllerComponentComponent implements OnInit {

  controllerTrafficLight: TraficLight;

  constructor(
    private traficLightService: TraficLightServiceService
  ) {
    this.controllerTrafficLight = { color: 'rojo', onTrafficLight: false }
  }

  ngOnInit(): void {
    this.traficLightService.getTraficLight().subscribe(trafficLight => {
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

  addController(trafficLight: TraficLight) {
    this.traficLightService.addTraficLight(trafficLight);
  }

}
