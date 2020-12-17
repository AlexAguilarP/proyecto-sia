import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'infracciones',
      loadChildren: () => import('./infracciones/infracciones.module')
        .then(m => m.InfraccionesModule),
    },
    {
      path: 'calles',
      loadChildren: () => import('./calles/calles.module')
        .then(m => m.CallesModule),
    },
    {
      path: 'estadisticas',
      loadChildren: () => import('./estadisticas/estadisticas.module')
        .then(m => m.EstadisticasModule),
    },
    {
      path: 'perfil',
      loadChildren: () => import('./perfil/perfil.module')
        .then(m => m.PerfilModule),
    },
    {
      path: 'semaforos',
      loadChildren: () => import('./semaforos/semaforos.module')
        .then(m => m.SemaforosModule),
    },
    {
      path: '',
      redirectTo: 'estadisticas',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
