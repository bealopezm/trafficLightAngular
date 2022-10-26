import { Injectable } from '@angular/core';
import { TraficLight } from '../interfaces/trafic-light';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraficLightServiceService {

  private traficLight: TraficLight | any;
  private traficLight$: Subject<TraficLight>;
  constructor() {
    this.traficLight$ = new Subject();
  }

  addTraficLight(pTraficLight: TraficLight) {
    this.traficLight = pTraficLight;
    this.traficLight$.next(this.traficLight);
  }

  getTraficLight(): Observable<TraficLight> {
    return this.traficLight$.asObservable();
  }
}
