import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from 'src/app/servicios/provincias.service';
import { MunicipiosService } from 'src/app/servicios/municipios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Municipio } from 'src/app/modelos/municipios';
import { Provincia } from 'src/app/modelos/provincia';
import { EmpresasService } from '../../servicios/empresas.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.scss']
})
export class RegistrarEmpresaComponent implements OnInit {
  private provincias: Provincia;
  private municipios: Municipio;
  public formEmp: FormGroup;
  error = false;
  errorCIFNIF = false;
  errorMail = false;
  loading = false;

  private REemail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  private REnifcif = '^[A-Za-z][0-9]{8,8}$';

  constructor(private provinciasService: ProvinciasService,
              private municipiosService: MunicipiosService,
              private formBuilder: FormBuilder,
              private router: Router,
              private empresaService: EmpresasService) {
    this.formEmp = formBuilder.group({
      CIF: ['', [Validators.required, Validators.pattern(this.REnifcif)]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.REemail)]],
      password: ['', [Validators.required, Validators.minLength(12)]],
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
    this.empresaService.comprobarEmail(this.email.value).subscribe(
      (res: any) => {
        if (res.length !== 0) {
          this.error = true;
          this.errorMail = true;
        } else {
          this.errorMail = false;
          if (this.errorCIFNIF === false) {
            this.error = false;
          }
        }
      }
    );
  }
  checkNIF() {
    this.empresaService.checkNIF(this.CIF.value).subscribe(
      (res: any) => {
        if (res.length !== 0) {
          this.error = true;
          this.errorCIFNIF = true;
        } else {
          this.errorCIFNIF = false;
          if (this.errorMail === false) {
            this.error = false;
          }
        }
      }
    );
  }
    submit() {
    this.empresaService.insertEmpresa({
      cifnif: this.CIF.value,
      nombre: this.nombre.value, email: this.email.value,
      pass: this.password.value, municipios_id: this.municipio_id.value}).subscribe();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['portada']);
    }, 2000);
  }
  get nombre() {return this.formEmp.get('nombre'); }
  get CIF() {return this.formEmp.get('CIF'); }
  get password() {return this.formEmp.get('password'); }
  get email() {return this.formEmp.get('email'); }
  get provincia_id() {return this.formEmp.get('provincia_id'); }
  get municipio_id() {return this.formEmp.get('municipio_id'); }

}
