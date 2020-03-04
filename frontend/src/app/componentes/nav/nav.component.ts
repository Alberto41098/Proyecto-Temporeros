import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private trabajadoresService: TrabajadoresService) { }

  ngOnInit() {
  }

}
