import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaMainComponent } from './componentes/portada-main/portada-main.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';
import { VistaBusquedaComponent } from './componentes/vista-busqueda/vista-busqueda.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { RegistrarEmpresaComponent } from './componentes/registrar-empresa/registrar-empresa.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { PrivComponent } from './componentes/priv/priv.component';
import { GAuthTrabajadorGuard } from './auth/g-auth-trabajador.guard';
import { GAuthEmpresaGuard} from './auth/g-auth-empresa.guard';

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
    path: 'login/usuario',
    component: LoginUsuarioComponent
  },
  {
    path: 'login/empresa',
    component: LoginEmpresaComponent
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
  },
  {
    path: 'perfil',
    component: PrivComponent,
    canActivate: [GAuthTrabajadorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
