import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../modelos/empresa';
@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }
    insertEmpresa(empresa: Empresa): Observable<any> {
    return this.http.post('http://localhost:3300/empresas', empresa);
    }
  checkNIF(nif: string) {
    return this.http.get('http://localhost:3300/empresas/NIF/' + nif);
  }
  comprobarEmail(email: string) {
    return this.http.get('http://localhost:3300/empresas/email/' + email);
  }
  getLogin(empresa: Empresa) {
    return this.http.post('http://localhost:3300/empresas/login', empresa);
  }
  ifLogin(): boolean {
    return !!localStorage.getItem('token');
    }
    logOut() {
      localStorage.removeItem('token');
    }
    getToken() {
      return localStorage.getItem('token');
    }
}
