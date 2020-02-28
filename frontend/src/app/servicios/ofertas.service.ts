import { Injectable } from '@angular/core';
import { Oferta } from '../modelos/oferta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }
  busquedaBarra(provincia: number, titulo: string): Observable<any> {
    return this.http.get('http://localhost:3300/ofertas/busqueda/' + provincia + '/' + titulo);
  }
}
