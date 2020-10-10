import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallesComponent } from './componentes/calles/calles.component';

const routes: Routes = [
  {
    path: '',
    component: CallesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallesRoutingModule { }
