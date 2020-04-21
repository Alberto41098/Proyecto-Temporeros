import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../servicios/empresas.service';
import { OfertasService } from '../../servicios/ofertas.service';
@Component({
  selector: 'app-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.scss']
})
export class DatosEmpresaComponent implements OnInit {
  public empresa: any;
  loaded = false;
  loading = false;
  crear = true;
  constructor(private empresasServicio: EmpresasService,
              private ofertasServicio: OfertasService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loaded = true;
      this.loading = false;
      this.empresa = this.empresasServicio.getEmpresa();
    }, 1000);
  }
  mostarCrear() {
    this.crear = true;
  }
  cerrar() {
    this.crear = false;
  }
}
