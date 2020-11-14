import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'ngx-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  hide = true;
  respuesta: any;
  formRegistro: FormGroup;
  formLogin: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  comprobarPass = false;
  usuario = {
    nombre_usuario: '',
    correo_usuario: '',
    password: '',
    foto: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    public auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(): void {
    this.formRegistro = this.formBuilder.group({
      correo_usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      ver: ['', [Validators.requiredTrue]],
    });
    this.formLogin = this.formBuilder.group({
      correo_usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      console.log(res.user);
      localStorage.setItem('datosUsuario', JSON.stringify(res.user));
      this.router.navigateByUrl('/pages');
    });
  }

  logout() {
    this.auth.signOut();
  }
  /**
   * Descripcion: esta funcion se ejecuta a enviar los datos por el formulario
   * parametro: event
   */
  submitRegistrar(event: Event): void {
    event.preventDefault();
    const email: string = this.formRegistro.get('correo_usuario').value;
    const pass: string = this.formRegistro.get('password').value;
    const pass2: string = this.formRegistro.get('password2').value;
    this.registrarDatos(email, pass);
  }
  submitLogin(event: Event): void {
    event.preventDefault();
    const email: string = this.formLogin.get('correo_usuario').value;
    const pass: string = this.formLogin.get('password').value;
    this.auth.signInWithEmailAndPassword(email, pass).then(res => {
      console.log(res.user);
      localStorage.setItem('datosUsuario', JSON.stringify(res.user));
      this.router.navigateByUrl('/pages');
    }, e => console.log(e));
  }
  /**
   * Descripcion: Esta funcion abre un snarkBar con un mensaje y una accion
   * parametro: message
   * parametro: action
   */
  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  registrarDatos(email: string, pass: string) {
    this.auth.createUserWithEmailAndPassword(email, pass).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  /**
   * Descripcion: las siguientes funciones obtie  nen los metodos de los inputs del formulario reactivo
   */
  // tslint:disable-next-line: typedef
  get correoError() {
    return this.formRegistro.get('correo_usuario');
  }
  // tslint:disable-next-line: typedef
  get nombreError() {
    return this.formRegistro.get('nombre_usuario');
  }
  // tslint:disable-next-line: typedef
  get passwordError() {
    return this.formRegistro.get('password');
  }
  // tslint:disable-next-line: typedef
  get passwordError2() {
    return this.formRegistro.get('password2');
  }
  comprobar(): void {
    if (this.formRegistro.get('password').value === this.formRegistro.get('password2').value) {
      this.comprobarPass = true;
      this.formRegistro.get('ver').setValue(true);
    } else {
      this.formRegistro.get('ver').setValue(false);
      this.comprobarPass = false;
    }
    console.log(this.comprobarPass);
  }
}
