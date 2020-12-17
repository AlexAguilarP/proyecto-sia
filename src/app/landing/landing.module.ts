import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ThemeModule } from 'app/@theme/theme.module';
import { NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NbLayoutModule,
  ]
})
export class LandingModule { }
