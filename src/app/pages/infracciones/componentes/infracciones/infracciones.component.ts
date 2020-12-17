import { Component, OnInit } from '@angular/core';
import { InfraccionService } from '../../services/infraccion.service';

@Component({
  selector: 'ngx-infracciones',
  templateUrl: './infracciones.component.html',
  styleUrls: ['./infracciones.component.scss']
})
export class InfraccionesComponent implements OnInit {

  datos: any = [];
  constructor(private serInfrac: InfraccionService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos() {
    this.serInfrac.listarInfracciones().subscribe(
      data => {
        console.log(data);
        const res = data;
        this.datos = [];
        res.forEach(element => {
          let r;
          console.log(element.dueño);
          if (element.dueño != undefined) {
            let pro = element.dueño;
            let d = pro.replace(/'/g, '"');
            r = {
              'id': element.id,
              'date': new Date(element.date),
              'placa': element.placa,
              'foto': element.foto,
              'propietario': JSON.parse(d)
            };
          } else {
            r = {
              'id': element.id,
              'date': new Date(element.date),
              'placa': element.placa,
              'foto': element.foto,
            };
          }
          this.datos.push(r);
        });
        console.log(this.datos);
      }
    )
  }

}
