import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { Component, OnInit } from '@angular/core';
import { createYield } from 'typescript';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {
  cartCount: number = 0;

  constructor(public cartService: CartService, private router: Router) { 
    this.cartService.counter.subscribe(counter =>{
      this.cartCount = counter;
    })
    if(this.cartCount == 0) 
      router.navigateByUrl("/")
  }

  ngOnInit(): void {
  }

  increment(item:any) {
    for(let product of this.cartService.cart) {
      if(product.id == item.id) {
        ++product.count
        break
      }
    }
    this.cartService.updateCount()
  }
  decrement(item:any) {
    for(let product of this.cartService.cart) {
      if(product.id == item.id) {
        --product.count
        break
      }
    }
    this.cartService.updateCount()
    if(this.cartCount == 0) 
      this.router.navigateByUrl("/")
  }
  clearCart() {
    for(let product of this.cartService.cart) {
      product.count = 0
    }
    this.cartService.updateCount()
    this.router.navigateByUrl("/")
  }
}
