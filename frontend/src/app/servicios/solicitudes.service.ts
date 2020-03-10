import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../modelos/solicitud';
@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitud: any;
  constructor(private http: HttpClient) { }
    insertSolicitud(solicitud: Solicitud): Observable<any> {
    return this.http.get('http://localhost:3300/solicitudes/' + solicitud.trabajador_id + '/' + solicitud.oferta_id);
    }
}
