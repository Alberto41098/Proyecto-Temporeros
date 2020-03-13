import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../servicios/ofertas.service';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
import { SolicitudesService } from '../../servicios/solicitudes.service';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  init = false;
  ofertas: Array<any>;
  control: number;
  loading = false;
  nada = false;
  perfil = false;
  existeInscripcion = false;
  mostrar: Array<any>;
  classError = 'error';
  private finishPage = 15;
  private actualPage: number;
  constructor(private ofertaService: OfertasService,
              private trabajadoresService: TrabajadoresService,
              private solicitudService: SolicitudesService) {
    this.actualPage = 1;
    this.mostrar = [];
  }

  ngOnInit() {
    this.init = true;
    if (this.trabajadoresService.ifLogin()) {
      this.setidToken();
    }
    setTimeout(() => {
      this.perfil = this.ofertaService.ifPerfil();
      this.ofertas = this.ofertaService.getOfertas();
      this.add10lines();
      this.init = false;
      if (this.mostrar.length === 0) {
        this.nada = true;
      }
    }, 1000);
  }
   onScroll() {
    if ((this.actualPage < this.finishPage) && (this.ofertas.length !== this.mostrar.length)) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.add10lines();
        this.actualPage ++;
      }, 500);
    }
  }
  add10lines() {
      let numero: number;
      if (this.ofertas.length - this.mostrar.length >= 15) {
        numero = 15;
      } else {
        numero = (this.ofertas.length - this.mostrar.length);
      }
      this.control = this.mostrar.length;
      for (let i = 0; i < numero; i++) {
        this.mostrar.push(this.ofertas[this.control + i]);
      }
  }
  getClassError() {
    return this.classError;
  }
  setidToken() {
    this.trabajadoresService.getUsuarioIdFromToken({ token: this.trabajadoresService.getToken() }).subscribe(
      (res: any) => {
        this.trabajadoresService.setId(res[0].id_trabajador);
      }
    );
  }
  inscribirse(idoferta: number) {
    this.solicitudService.insertSolicitud({ trabajador_id: this.trabajadoresService.getId(), oferta_id: idoferta }).subscribe(
      (res) => {
        if (!res.succ) {
          this.existeInscripcion = true;
          setTimeout(() => {
            this.classError = 'error desa';
            setTimeout(() => {
              this.existeInscripcion = false;
              this.classError = 'error';
            }, 300);
          }, 3000);
        }
      }
    );
  }
}
