import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EmpresasService } from '../servicios/empresas.service';

@Injectable({
  providedIn: 'root'
})
export class GAuthEmpresaGuard implements CanActivate {
  constructor(private empresasService: EmpresasService,
              private router: Router) { }
  canActivate(): boolean {
    if (this.empresasService.ifLogin()) {
      return true;
    } else {
      this.empresasService.logOut();
      this.router.navigate(['portada']);
      return false;
    }
  }
}
