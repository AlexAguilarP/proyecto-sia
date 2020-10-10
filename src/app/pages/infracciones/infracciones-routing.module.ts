import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteListComponent } from '../layout/infinite-list/infinite-list.component';

const routes: Routes = [
  {
    path: '',
    component: InfiniteListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfraccionesRoutingModule { }
