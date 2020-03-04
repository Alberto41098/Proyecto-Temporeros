import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TrabajadoresService } from '../servicios/trabajadores.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GAuthTrabajadorGuard implements CanActivate {
  constructor(private trabajadoresService: TrabajadoresService,
              private router: Router) { }
  canActivate(): boolean {
    if (this.trabajadoresService.ifLogin()) {
      return true;
    } else {
      this.trabajadoresService.logOut();
      this.router.navigate(['portada']);
      return false;
    }
  }
}