import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../list-products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001';
  public listProducts: Product[] = [];
  public totalPrice: number = 0;
  public listSelectedProducts: Product[] = [];

  

  private _productHandler !: Product;
  getProduct(): Product{
    return this._productHandler;
  }
  setProduct(value: Product){
    this._productHandler = value;
  }

  private _priceHandler: number = 0;
  getPrice(): number {
    return this._priceHandler;
  }
  setPrice(value: number){
    this._priceHandler = value;
  }

  constructor(private httpClient: HttpClient) { }

  getListProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl+'/products')
  }

  selectProduct(){
    setTimeout(() => {
      this.totalPrice += this.getPrice();
      this.listSelectedProducts.push(this.getProduct())
    }, 1);    
  }

  unselectProduct(){
    this.totalPrice -= this.getPrice();
    if (this.totalPrice < 0){
      this.totalPrice = 0;
    }
    console.log(this.totalPrice);
  }

  let index = this.listSelectedProducts.indexOf(this.getProduct());
  if (index > -1 || index === this.listSelectedProducts.indexOf(this.getProduct())){
    this.listSelectedProducts.splice(index,1)
  }
}
