import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashComponent} from './header/dash/dash.component';
import {HomeComponent} from './home/home.component'
import { SigninComponent } from './header/signin/signin.component';
import { SignupComponent } from './header/signup/signup.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'register', component:SignupComponent},
  {path:'login', component: SigninComponent},
  {path:'ticket', component: DashComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
