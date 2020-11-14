import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'ngx-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) { }
  myArray: any = [];
  objeto: any;
  multi: any;

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
  }


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
}
