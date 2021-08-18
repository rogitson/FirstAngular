import { ProductsCartComponent } from './products-cart/products-cart.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'products-list',
        pathMatch: 'full',
      },
      {
        path: 'products-list',
        component: ProductsListComponent,
      },
      {
        path: 'products-list/:id',
        component: ProductsDetailsComponent,
      },
      {
        path: 'cart',
        component: ProductsCartComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
