import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any = []

  constructor() {}

  countSource = new BehaviorSubject(0);
  counter = this.countSource.asObservable();

  addToCart(product:any) {
    let flag = true
    for(var item of this.cart) {
      if(item.id == product.id) {
        item.count += 1
        flag = false
        break
      }
    }
    if(flag){
      product.count = 1
      this.cart.push(product)
    }
    this.updateCount()
  }
  updateCount() {
    let count = 0
    for(var item of this.cart) {
      count += item.count
    }
    this.countSource.next(count);
  }
  getTotalPrice() {
    let price = 0
    for(var item of this.cart) {
      price += item.count*item.price
    }
    return price
  }
}
