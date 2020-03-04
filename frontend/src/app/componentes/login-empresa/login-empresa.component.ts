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
        console.log(res);
        localStorage.setItem('token', res);
        this.router.navigate(['portada']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get email() { return this.formEmpresa.get('email'); }
  get pass() { return this.formEmpresa.get('pass'); }
}
