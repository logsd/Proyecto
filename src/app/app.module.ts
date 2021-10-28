import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { app_routing } from './app.routes';
//servicios
import { CargarScriptsService} from './cargar-scripts.service'

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { Home1Component } from './components/home1/home1.component';
import { DemosComponent } from './components/demos/demos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component'

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    Home1Component,
    DemosComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
