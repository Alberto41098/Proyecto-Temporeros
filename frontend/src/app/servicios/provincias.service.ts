import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private http: HttpClient) { }
  getProvincias(): Observable<any> {
    return this.http.get('http://localhost:3300/provincias');
  }
}
