import { NgModule, LOCALE_ID  } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';

import { InfraccionesRoutingModule } from './infracciones-routing.module';
import { InfraccionesComponent } from './componentes/infracciones/infracciones.component';
import { MatCardModule } from '@angular/material/card';
import localeEs from '@angular/common/locales/es-BO';
registerLocaleData(localeEs, 'es-Bo');

@NgModule({
  declarations: [InfraccionesComponent],
  imports: [
    CommonModule,
    InfraccionesRoutingModule,
    MatCardModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Bo' },
  ]
})
export class InfraccionesModule { }
