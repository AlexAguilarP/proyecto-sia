import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemaforosRoutingModule } from './semaforos-routing.module';
import { SemaforosComponent } from './componentes/semaforos/semaforos.component';


@NgModule({
  declarations: [SemaforosComponent],
  imports: [
    CommonModule,
    SemaforosRoutingModule
  ]
})
export class SemaforosModule { }
