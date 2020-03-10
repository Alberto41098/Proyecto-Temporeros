import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
import { EmpresasService } from '../../servicios/empresas.service';
import { OfertasService } from '../../servicios/ofertas.service';
@Component({
  selector: 'app-priv',
  templateUrl: './priv.component.html',
  styleUrls: ['./priv.component.scss']
})
export class PrivComponent implements OnInit {
  quien: boolean;
  control = false;
  constructor(private trabajadoresServicio: TrabajadoresService,
              private empresasServicio: EmpresasService,
              private ofertasServicio: OfertasService) { }

  ngOnInit() {
    let id: number;
    this.trabajadoresServicio.getUsuarioToken({token: this.trabajadoresServicio.getToken()}).subscribe(
      (res: any) => {
        if (!res.msg) {
          this.control = false;
        } else {
          this.control = true;
          this.trabajadoresServicio.setUsuario(res.msg[0]);
          this.quien = true;
          id = res.msg[0].id_trabajador;
          this.cargarOfertas(id, false);
        }
      }
    );
    if (!this.control) {
      this.empresasServicio.getEmpresaToken({token: this.empresasServicio.getToken()}).subscribe(
        (res: any) => {
          if (res.msg) {
            this.empresasServicio.setEmpresa(res.msg[0]);
            id = res.msg[0].id_empresa;
            this.quien = false;
            this.cargarOfertas(id, true);
          }
        }
      );
    }
  }
  cargarOfertas(id, loged: boolean) {
    if (loged) {
      this.ofertasServicio.ofertasEmpresa({ id }).subscribe(
        (res) => {
          this.ofertasServicio.setOfertas(res);
        }
      );
    } else {
      this.ofertasServicio.ofertasTrabajador({ id }).subscribe(
        (res) => {
          this.ofertasServicio.setPerfil(true);
          this.ofertasServicio.setOfertas(res);
        }
      );
    }
  }
}
