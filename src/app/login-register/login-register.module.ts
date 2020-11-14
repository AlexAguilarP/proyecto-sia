import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginRegisterComponent } from './login-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    NbLayoutModule,
    FormsModule,
    NbThemeModule.forRoot({name: 'material-light'}),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDividerModule,
  ],
})
export class LoginRegisterModule { }
