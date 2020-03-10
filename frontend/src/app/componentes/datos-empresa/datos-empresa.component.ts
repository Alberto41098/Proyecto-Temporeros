import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../servicios/empresas.service';
@Component({
  selector: 'app-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.scss']
})
export class DatosEmpresaComponent implements OnInit {
  public empresa: any;
  loaded = false;
  loading = false;
  constructor(private empresasServicio: EmpresasService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loaded = true;
      this.loading = false;
      this.empresa = this.empresasServicio.getEmpresa();
      console.log(this.empresa);
    }, 1000);
  }

}
