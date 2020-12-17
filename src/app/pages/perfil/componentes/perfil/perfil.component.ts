import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'firebase/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  datos: any;
  fomrUsuario: FormGroup;
  private filePath: string;
  usuario = {
    displayName: 'nuevo',
  };
  fotoUsuario: string;
  constructor(private auth: AngularFireAuth, private storage: AngularFireStorage, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem('datosUsuario'));
    this.buildForm();
  }
  buildForm(): void {
    this.fomrUsuario = this.formBuilder.group({
      nombre_usuario: [this.datos.displayName, [Validators.required, Validators.minLength(4)]],
    })
  }
  uploadImage(image): void {

    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.fotoUsuario = urlImage;
            console.log(urlImage);
          });
        })
      ).subscribe();
  }
  saveUserProfile(event) {
    event.preventDefault();
    var user = firebase.auth().currentUser;
    console.log(this.fomrUsuario.get('nombre_usuario').value);
    console.log(this.fotoUsuario);
    const nombre =this.fomrUsuario.get('nombre_usuario').value;
    if(this.fotoUsuario === ''){
      this.fotoUsuario = this.datos.photoURL;
    }
    user.updateProfile({
      displayName: nombre,
      photoURL: this.fotoUsuario,
    }).then(res => {
      firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        localStorage.setItem('datosUsuario', JSON.stringify(user));
        this.fotoUsuario = '';
        location.reload();
      });
    }).catch(error => console.log(error));
  }
}
