import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  declarations: [LoginComponent]

})
export class LoginModule { }
