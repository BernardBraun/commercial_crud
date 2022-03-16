import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';
import { Product } from 'src/app/views/list-products/product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListProducts().subscribe((product) =>{
      this.listProducts = product;
      
    })
  }

  selectProduct(product: Product): void{
    this.checkoutService.setPrice(product.price);
  }
  
}
