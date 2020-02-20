import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(private http: HttpClient) { }
  getMunicipios(id: number): Observable<any> {
    return this.http.get('http://localhost:3300/provincias/municipios/' + id);
  }
}
