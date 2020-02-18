import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PortadaMainComponent } from './componentes/portada-main/portada-main.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortadaMainComponent,
    BarraBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
