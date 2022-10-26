import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TraficLightComponentComponent } from './components/trafic-light-component/trafic-light-component.component';
import { ControllerComponentComponent } from './components/controller-component/controller-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TraficLightComponentComponent,
    ControllerComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
