import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../servicios/provincias.service';
import { Provincia } from '../../modelos/provincia';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent implements OnInit {

  constructor(private provinciasService: ProvinciasService) { }
  private provincias: Provincia;
  ngOnInit() {
    this.provinciasService.getProvincias().subscribe(
      (res) => {
        this.provincias = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
