import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfraccionesComponent } from './componentes/infracciones/infracciones.component';

const routes: Routes = [
  {
    path: '',
    component: InfraccionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfraccionesRoutingModule { }
