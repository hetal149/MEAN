import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

@NgModule({
  declarations: [
  
    SignupComponent,
    SigninComponent,
    DashComponent,

  ],
  imports: [
    CommonModule,
   
  ]
})
export class HeaderModule { }
