import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExamModule } from './exam/exam.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';

// import {HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ServicesComponent,
  
      ],
  imports: [
    BrowserModule,
    ExamModule,
    ProductModule,
    ProductRoutingModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
