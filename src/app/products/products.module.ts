import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsCartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
