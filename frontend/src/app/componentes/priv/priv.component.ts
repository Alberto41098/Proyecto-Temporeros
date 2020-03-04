import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
@Component({
  selector: 'app-priv',
  templateUrl: './priv.component.html',
  styleUrls: ['./priv.component.scss']
})
export class PrivComponent implements OnInit {

  constructor(private trabajadoresServicio: TrabajadoresService) { }

  ngOnInit() {
    this.trabajadoresServicio.getUsuarioToken({token: this.trabajadoresServicio.getToken()}).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
