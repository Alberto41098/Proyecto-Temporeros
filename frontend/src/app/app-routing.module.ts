import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaMainComponent } from './componentes/portada-main/portada-main.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { VistaBusquedaComponent } from './componentes/vista-busqueda/vista-busqueda.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { RegistrarEmpresaComponent } from './componentes/registrar-empresa/registrar-empresa.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    component: PortadaMainComponent
  },
  {
    path: 'login',
    component: LoginUsuarioComponent
  },
  {
    path: 'search',
    component: VistaBusquedaComponent
  },
  {
    path: 'registrar/usuario',
    component: RegistrarUsuarioComponent
  },
  {
    path: 'registrar/empresa',
    component: RegistrarEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
