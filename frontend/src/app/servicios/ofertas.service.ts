import { Injectable } from '@angular/core';
import { Oferta } from '../modelos/oferta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }
  busquedaBarra(oferta: Oferta): Observable<any>{
    return this.http.post('http://localhost:3300/ofertas/busqueda', oferta);
  }
}
