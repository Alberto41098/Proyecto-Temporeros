import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabajadoresService } from '../../servicios/trabajadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {
  public formUsuario: FormGroup;
  loading = false;
  clase = 'div-form';
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private trabajadoresService: TrabajadoresService) {
    this.formUsuario = formBuilder.group({
      email: [''],
      pass: ['']
    });
  }

  ngOnInit() {
  }
// ya devuelve el token, queda controlar los fallos de login y guardarlo en local storage
  submit() {
    this.trabajadoresService.getLogin({
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
  // getter
  get email() { return this.formUsuario.get('email'); }
  get pass() { return this.formUsuario.get('pass'); }
}
