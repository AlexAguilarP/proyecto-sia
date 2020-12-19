import { environment } from './../../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NbCardModule } from '@nebular/theme';


import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  declarations: [EstadisticasComponent],
  imports: [

    ThemeModule,
    CommonModule,
    EstadisticasRoutingModule,
    NgxChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NbCardModule,
  ]
})
export class EstadisticasModule { }
