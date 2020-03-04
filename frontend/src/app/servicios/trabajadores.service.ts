import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temporero } from '../modelos/temporero';
@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

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
