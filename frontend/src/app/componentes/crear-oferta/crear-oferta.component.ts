import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinciasService } from 'src/app/servicios/provincias.service';
import { MunicipiosService } from 'src/app/servicios/municipios.service';
import { Provincia } from 'src/app/modelos/provincia';
import { Municipio } from 'src/app/modelos/municipios';
import { OfertasService } from '../../servicios/ofertas.service';
@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.scss']
})
export class CrearOfertaComponent implements OnInit {
  private formOferta;
  private provincias: Provincia;
  private municipios: Municipio;
  private mostrar = false;
  private regNumber = '([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|1000)';
  constructor(private formBuilder: FormBuilder,
              private provinciasService: ProvinciasService,
              private municipiosService: MunicipiosService,
              private ofertasService: OfertasService ) {
    this.formOferta = formBuilder.group({
      titulo: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      provincia_id: [null, [Validators.required]],
      municipio_id: [null, [Validators.required]],
      vacantes: [1, [Validators.required, Validators.pattern(this.regNumber)]],
      fecha_inicio: [null, [Validators.required]]
    });
  }

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
  changeMunicipio() {
    this.municipiosService.getMunicipios(this.provincia_id.value).subscribe(
      (res) => {
        this.municipios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get titulo() { return this.formOferta.get('titulo'); }
  get desc() { return this.formOferta.get('desc'); }
  get vacantes() { return this.formOferta.get('vacantes'); }
  get fecha_inicio() {return this.formOferta.get('fecha_inicio'); }
  get provincia_id() {return this.formOferta.get('provincia_id'); }
  get municipio_id() {return this.formOferta.get('municipio_id'); }
}
