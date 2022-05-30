import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {SigninComponent} from './header/signin/signin.component';
import {SignupComponent} from './header/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FlashMessagesModule } from "angular2-flash-messages";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {DashComponent} from './header/dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwPaginationModule } from 'jw-angular-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import{MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DemoComponent } from './header/demo/demo.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    DashComponent,
    DemoComponent
   
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    JwPaginationModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
