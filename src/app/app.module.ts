import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrafficLightComponentComponent } from './components/traffic-light-component/traffic-light-component.component';
import { ControllerComponentComponent } from './components/controller-component/controller-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponentComponent,
    ControllerComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
