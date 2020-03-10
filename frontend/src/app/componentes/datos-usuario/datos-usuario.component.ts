import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.scss']
})
export class DatosUsuarioComponent implements OnInit {
  public usuario: any;
  loaded = false;
  loading = false;
  constructor(private trabajadoresServicio: TrabajadoresService) { }
  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loaded = true;
      this.loading = false;
      this.usuario = this.trabajadoresServicio.getUsuario();
    }, 1000);
  }
}
