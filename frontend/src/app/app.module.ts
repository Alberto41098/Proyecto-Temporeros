import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PortadaMainComponent } from './componentes/portada-main/portada-main.component';
import { BarraBusquedaComponent } from './componentes/barra-busqueda/barra-busqueda.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { VistaBusquedaComponent } from './componentes/vista-busqueda/vista-busqueda.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { RegistrarEmpresaComponent } from './componentes/registrar-empresa/registrar-empresa.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { PrivComponent } from './componentes/priv/priv.component';
import { OfertasComponent } from './componentes/ofertas/ofertas.component';
import { DatosUsuarioComponent } from './componentes/datos-usuario/datos-usuario.component';
import { ImgUsuarioComponent } from './componentes/img-usuario/img-usuario.component';
import { DatosEmpresaComponent } from './componentes/datos-empresa/datos-empresa.component';
import { ImgEmpresaComponent } from './componentes/img-empresa/img-empresa.component';
import { CarruselPortadaComponent } from './componentes/carrusel-portada/carrusel-portada.component';
import { NoHayNadaComponent } from './componentes/no-hay-nada/no-hay-nada.component';
import { LogoXlTemporerosComponent } from './componentes/logo-xl-temporeros/logo-xl-temporeros.component';
import { TopEmpresasComponent } from './componentes/top-empresas/top-empresas.component';
import { CrearOfertaComponent } from './componentes/crear-oferta/crear-oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortadaMainComponent,
    BarraBusquedaComponent,
    LoginUsuarioComponent,
    VistaBusquedaComponent,
    RegistrarUsuarioComponent,
    RegistrarEmpresaComponent,
    LoadingComponent,
    LoginEmpresaComponent,
    PrivComponent,
    OfertasComponent,
    DatosUsuarioComponent,
    ImgUsuarioComponent,
    DatosEmpresaComponent,
    ImgEmpresaComponent,
    CarruselPortadaComponent,
    NoHayNadaComponent,
    LogoXlTemporerosComponent,
    TopEmpresasComponent,
    CrearOfertaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
