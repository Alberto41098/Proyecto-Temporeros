import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.scss']
})
export class LoginEmpresaComponent implements OnInit {
  public formEmpresa: FormGroup;
  loading = false;
  clase = 'div-form';
  constructor(private formBuilder: FormBuilder,
              private servicioEmpresas: EmpresasService,
              private router: Router) {
    this.formEmpresa = formBuilder.group({
      email: [''],
      pass: ['']
    });
  }

  ngOnInit() {
  }
  submit() {
    this.servicioEmpresas.getLogin({
      email: this.email.value,
      pass: this.pass.value
    }).subscribe(
      (res: any) => {
        this.clase = 'div-form des';
        setTimeout(() => {
          this.loading = true;
        }, 450);
        setTimeout(() => {
          this.loading = false;
          localStorage.setItem('token', res);
          this.router.navigate(['portada']);
        }, 1500);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getClass(): string {
    return this.clase;
  }
  get email() { return this.formEmpresa.get('email'); }
  get pass() { return this.formEmpresa.get('pass'); }
}
