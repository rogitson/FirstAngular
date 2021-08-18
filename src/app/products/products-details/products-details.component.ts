import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { GetDataService } from 'src/app/shared/get-data.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:number = 0
  product:any

  constructor(private route: ActivatedRoute, private service: GetDataService, private cartService: CartService) {
    this.route.params.subscribe((id) => {
      this.id = id.id
    });
  }

  ngOnInit(): void {
    this.service.getData("https://fakestoreapi.com/products/"+this.id).subscribe(product => {
      this.product = product
    })
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }
}
