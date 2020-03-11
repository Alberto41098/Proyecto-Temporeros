import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../servicios/empresas.service';
@Component({
  selector: 'app-top-empresas',
  templateUrl: './top-empresas.component.html',
  styleUrls: ['./top-empresas.component.scss']
})
export class TopEmpresasComponent implements OnInit {

  constructor(private empresasService: EmpresasService) { }

  ngOnInit() {
    this.empresasService.getTopEmpresas().subscribe(
      (res) => console.log(res)
    );
  }

}
