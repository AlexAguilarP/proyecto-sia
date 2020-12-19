import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'ngx-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }
  myArray: any = [];
  arrayInf: any = [];
  arrayFechas: any = [];
  objeto: any;
  multi: any;
  datos: any;
  contador: any = 0;
  datosAgrupados: any;

  ngOnInit(): void {
    this.db.list('conteo_autos').valueChanges().subscribe(data=>{
      this.objeto = data;
      this.myArray = [];
      console.log(this.objeto.length);

      for (let index = this.objeto.length - 12; index < this.objeto.length - 1; index++) {
        const fecha = new Date(this.objeto[index]['fecha']);

        const element = {
          name: fecha.toLocaleDateString('Es-es', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + ' ' + fecha.toLocaleTimeString(),
          value: this.objeto[index]['valor']
        }
        this.myArray.push(element);
      }

      console.log(this.myArray);
      this.multi = [
        {
          name: "Cantidad de autos",
          series: this.myArray
        }
      ];
    });
    this.firestore.collection('infracciones', ref => ref.orderBy('date', 'asc')).valueChanges().subscribe(data => {
      let con = 1
      console.log(data);
      this.datosAgrupados = data;
      console.log(con)

      let fecha = new Date(this.datosAgrupados[0].date);
      console.log(fecha.getDate());
      console.log(this.datosAgrupados.length);

      this.arrayFechas = [];

      for (let index = 0; index < this.datosAgrupados.length; index++) {
        let fechaDos = new Date(this.datosAgrupados[index].date);
        console.log(fechaDos.getDate());

        if (fecha.getDate() == fechaDos.getDate()) {
          con = con + 1
        }else{
          const element = {
            name: fecha.toLocaleDateString('Es-es', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}),
            value: con
          }
          this.arrayFechas.push(element)
          con = 1
          fecha = fechaDos
        }
        if (index + 1 == this.datosAgrupados.length) {
          const element = {
            name: fechaDos.toLocaleDateString('Es-es', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}),
            value: con
          }
          this.arrayFechas.push(element)
        }
      }
      //this.arrayFechas.push(con)

      console.log(this.arrayFechas);

      for (let index = 0; index < data.length ; index++) {
        const fecha = new Date(data[index]['date']);

        const element = {
          name: fecha.toLocaleDateString('Es-es', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + ' ' + fecha.toLocaleTimeString(),
          value: data.length
        }
        this.arrayInf.push(element);
      }

      console.log(this.arrayInf);
      this.datos = [
        {
          name: "Cantidad de infracciones",
          series: this.arrayFechas
        }
      ];

    });

  }


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
}
