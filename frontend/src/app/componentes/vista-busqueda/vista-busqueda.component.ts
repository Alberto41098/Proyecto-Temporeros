import { Component, OnInit, Injectable } from '@angular/core';
import { OfertasService } from '../../servicios/ofertas.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-vista-busqueda',
  templateUrl: './vista-busqueda.component.html',
  styleUrls: ['./vista-busqueda.component.scss']
})
export class VistaBusquedaComponent implements OnInit {
  ofertas: Array<any>;
  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.ofertaService.getOfertas();
  }
}
