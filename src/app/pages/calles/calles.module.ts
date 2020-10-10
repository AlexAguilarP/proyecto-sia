import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallesRoutingModule } from './calles-routing.module';
import { CallesComponent } from './componentes/calles/calles.component';


@NgModule({
  declarations: [CallesComponent],
  imports: [
    CommonModule,
    CallesRoutingModule
  ]
})
export class CallesModule { }
