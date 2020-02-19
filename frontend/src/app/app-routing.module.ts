import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaMainComponent } from './componentes/portada-main/portada-main.component';
import { LoginUsuarioComponent } from './componentes/login-usuario/login-usuario.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
