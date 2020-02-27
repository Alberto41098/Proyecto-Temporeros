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

  submit() {
    this.trabajadoresService.getLogin({
      email: this.email.value,
      pass: this.pass.value
    }).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // getter
  get email() { return this.formUsuario.get('email'); }
  get pass() { return this.formUsuario.get('pass'); }
}
