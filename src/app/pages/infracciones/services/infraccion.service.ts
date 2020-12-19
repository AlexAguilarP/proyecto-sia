import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Infraccion {
  id: string;
  date: string;
  foto: string;
  placa: string;
  dueño?: string;
}
export interface Conductor {
  apellidos_conductor: string;
  ci_conductor: string;
  nombres_conductor: string;
  correo_conductor: string;
  placa: string;
  telefono_conductor: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfraccionService {

  private infraccionesCollection: AngularFirestoreCollection<Infraccion>;
  infracciones: Observable<Infraccion[]>;
  constructor(private afs: AngularFirestore) {
    this.infraccionesCollection = afs.collection<Infraccion>('infracciones',ref => ref.orderBy('date','desc'));
    this.infracciones = this.infraccionesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Infraccion;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  listarInfracciones() {
    return this.afs.collection<Infraccion>('infracciones').valueChanges()
  }
}
