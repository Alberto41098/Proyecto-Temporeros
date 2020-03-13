import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temporero } from '../modelos/temporero';
@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  usuario: any;
  id: number;
  constructor(private http: HttpClient) { }
    insertTrabajador(trabajador: Temporero): Observable<any> {
    return this.http.post('http://localhost:3300/trabajadores', trabajador);
    }
    comprobarEmail(email: string): Observable<any> {
    return this.http.get('http://localhost:3300/trabajadores/email/' + email);
    }
    comprobarDNI(dni: string): Observable<any> {
      return this.http.get('http://localhost:3300/trabajadores/dni/' + dni);
    }
    getLogin(usuario: Temporero) {
      return this.http.post('http://localhost:3300/trabajadores/login', usuario);
    }
    getUsuarioToken(token: any) {
      return this.http.post('http://localhost:3300/trabajadores/trabajador', token);
    }
    getUsuarioIdFromToken(token: any) {
      return this.http.post('http://localhost:3300/trabajadores/id', token);
    }
    ifLogin(): boolean {
    return !!localStorage.getItem('tkn-tra');
    }
    logOut() {
      localStorage.removeItem('tkn-tra');
    }
    getToken() {
      return localStorage.getItem('tkn-tra');
    }
  setId(a) {
    this.id = a;
  }
  getId() {
    return this.id;
  }
  getUsuario() {
    return this.usuario;
  }
  setUsuario(usr: any) {
    this.usuario = usr;
  }
}
