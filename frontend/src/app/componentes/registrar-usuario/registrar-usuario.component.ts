import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Temporero } from '../../modelos/temporero';
import { ProvinciasService } from 'src/app/servicios/provincias.service';
import { Provincia } from 'src/app/modelos/provincia';
import { Municipio } from '../../modelos/municipios';
import { MunicipiosService } from '../../servicios/municipios.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
  private provincias: Provincia;
  private municipios: Municipio;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private provinciasService: ProvinciasService,
              private municipiosService: MunicipiosService) {
    this.form = formBuilder.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      pass: [''],
      passrep: [''],
      tel: [''],
      dni: [''],
      prov: [''],
      muni: ['']
    });
}
  // private muni: number = this.form.get('prov');
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
    this.municipiosService.getMunicipios(this.form.get('prov').value).subscribe(
      (res) => {
        this.municipios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
