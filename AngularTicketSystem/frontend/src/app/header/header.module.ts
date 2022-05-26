import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// import { SignUpComponent } from './sign-up/sign-up.component';
// import { SignInComponent } from './sign-in/sign-in.component';
import { TicketComponent } from './dash/dash.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


@NgModule({
  declarations: [
  
    SignupComponent,
    SigninComponent,
    TicketComponent,
    
   
  ],
  imports: [
    CommonModule,
   
  ]
})
export class HeaderModule { }
