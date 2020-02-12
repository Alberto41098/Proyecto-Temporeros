import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaMainComponent } from './componentes/portada-main/portada-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada-main',
    pathMatch: 'full'
  },
  {
    path: 'portada-main',
    component: PortadaMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
