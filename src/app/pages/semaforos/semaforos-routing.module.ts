import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemaforosComponent } from './componentes/semaforos/semaforos.component';

const routes: Routes = [
  {
    path: '',
    component: SemaforosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemaforosRoutingModule { }
