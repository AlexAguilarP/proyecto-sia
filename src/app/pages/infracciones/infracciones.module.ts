import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraccionesRoutingModule } from './infracciones-routing.module';
import { InfraccionesComponent } from './componentes/infracciones/infracciones.component';


@NgModule({
  declarations: [InfraccionesComponent],
  imports: [
    CommonModule,
    InfraccionesRoutingModule
  ]
})
export class InfraccionesModule { }
