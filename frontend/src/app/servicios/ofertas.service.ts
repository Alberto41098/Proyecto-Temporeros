import { Injectable } from '@angular/core';
import { Oferta } from '../modelos/oferta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }
  ofertas = [];
  perfilUsuario = false;
  busquedaBarra(ofertas: any): Observable<any> {
    return this.http.post('http://localhost:3300/ofertas/busqueda', ofertas);
  }
  ofertasTrabajador(id: any) {
    return this.http.post('http://localhost:3300/ofertas/trabajador', id);
  }
  ofertasEmpresa(id: any) {
    return this.http.post('http://localhost:3300/ofertas/empresa', id);
  }
  setOfertas(datos) {
    this.ofertas = datos;
  }
  getOfertas() {
    return this.ofertas;
  }
  setPerfil(a: boolean) {
    this.perfilUsuario = a;
  }
  ifPerfil() {
    return this.perfilUsuario;
  }
}
