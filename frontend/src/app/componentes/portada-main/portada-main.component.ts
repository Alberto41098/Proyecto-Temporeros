import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../servicios/ofertas.service';
@Component({
  selector: 'app-portada-main',
  templateUrl: './portada-main.component.html',
  styleUrls: ['./portada-main.component.scss']
})
export class PortadaMainComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getRecientes().subscribe(
      (res) => {
        this.ofertasService.setPerfil(true);
        this.ofertasService.setOfertas(res);
      }
    );
  }

}
