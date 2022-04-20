import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch:'full', 
    component:HomeComponent, 
    children: []
  },
  {
    path: '**',
    component:NotFoundComponent, 
    pathMatch:'full', 

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
