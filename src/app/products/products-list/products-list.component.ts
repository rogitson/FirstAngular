import { Router } from '@angular/router';
import { CartService } from './../../shared/cart.service';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/shared/get-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:any

  constructor(private service: GetDataService, private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.service.getData("https://fakestoreapi.com/products").subscribe(products => {
      this.products = products
    })
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }

  displayDetails(id:number) {
    this.route.navigateByUrl("products/products-list/"+id)
  }
}
