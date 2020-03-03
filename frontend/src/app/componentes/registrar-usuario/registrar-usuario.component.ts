import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ProvinciasService } from 'src/app/servicios/provincias.service';
import { Provincia } from 'src/app/modelos/provincia';
import { Municipio } from '../../modelos/municipios';
import { MunicipiosService } from '../../servicios/municipios.service';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {
  private provincias: Provincia;
  private municipios: Municipio;
  public form: FormGroup;
  loading = false;
  error = false;
  errorMail = false;
  errorDNI = false;
  private REemail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  private REdni = '^[0-9]{8,8}[A-Za-z]$';
  private REtlf = '^[0-9]{9,9}';

  constructor(private formBuilder: FormBuilder, private provinciasService: ProvinciasService,
              private municipiosService: MunicipiosService,
              private trabajadorService: TrabajadoresService,
              private router: Router) {
    this.form = formBuilder.group({
      DNI: ['', [Validators.required, Validators.pattern(this.REdni)]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.REemail)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.pattern(this.REtlf)]],
      provincia_id: [null, [Validators.required]],
      municipio_id: [null, [Validators.required]],
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
  checkEmail() {
    this.trabajadorService.comprobarEmail(this.email.value).subscribe(
      (res) => {
        if (res.length !== 0) {
          setTimeout(() => {
            this.error = true;
            this.errorMail = true;
          }, 100);
        } else {
          setTimeout(() => {
            this.errorMail = false;
          }, 100);
          setTimeout(() => {
            if (this.errorDNI === false) {
            this.error = false;
          }
          }, 100);
        }
      }
    );
  }
  checkDNI() {
    this.trabajadorService.comprobarDNI(this.DNI.value.toUpperCase()).subscribe(
      (res) => {
        if (res.length === 0) {
          this.errorDNI = false;
          if (this.errorMail === false) {
            this.error = false;
          }
        } else {
            this.error = true;
            this.errorDNI = true;
        }
      }
    );
  }

  submit() {
    this.trabajadorService.insertTrabajador({
      DNI: this.DNI.value.toUpperCase(),
      nombre: this.nombre.value, apellidos: this.apellidos.value, email: this.email.value,
      pass: this.password.value, telefono: this.telefono.value, municipio_id: this.municipio_id.value}).subscribe();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['portada']);
    }, 2000);
  }

  // geters
  get nombre() {return this.form.get('nombre'); }
  get apellidos() {return this.form.get('apellidos'); }
  get DNI() {return this.form.get('DNI'); }
  get password() {return this.form.get('password'); }
  get email() {return this.form.get('email'); }
  get telefono() {return this.form.get('telefono'); }
  get provincia_id() {return this.form.get('provincia_id'); }
  get municipio_id() {return this.form.get('municipio_id'); }
}
