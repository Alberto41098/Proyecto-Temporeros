import { Component, OnInit, Injectable } from '@angular/core';
import { OfertasService } from '../../servicios/ofertas.service';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-vista-busqueda',
  templateUrl: './vista-busqueda.component.html',
  styleUrls: ['./vista-busqueda.component.scss'],
})
export class VistaBusquedaComponent implements OnInit {

  constructor() {}
  ngOnInit() {
  }
}
