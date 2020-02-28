import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../servicios/provincias.service';
import { Provincia } from '../../modelos/provincia';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfertasService } from 'src/app/servicios/ofertas.service';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent implements OnInit {
  public formBusqueda: FormGroup;
  constructor(private provinciasService: ProvinciasService, private form: FormBuilder,
              private ofertasService: OfertasService) {
    this.formBusqueda = form.group({
      texto: [''],
      prov: ['']
    });
    }
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
  submit() {
    this.ofertasService.busquedaBarra(this.prov.value, this.titulo.value).subscribe(
      (res) => console.log(res)
    );
  }
  get titulo() { return this.formBusqueda.get('texto'); }
  get prov() { return this.formBusqueda.get('prov'); }
}
