import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MoviesComponent } from './movies/movies.component';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule
  ]
})
export class HomeModule { }
