import { Component, inject, Input } from '@angular/core';
import productsData from '../../products.json'
import { NgClass } from '@angular/common';
import { ProductRequestService } from '../services/product-request.service';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-product-detailes',
  imports: [NgClass],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent {
  @Input() id : string = ''; 
  productsinfo :Array<any> = [] ;
  ViewProduct :any; 
 cartCount: number = 0;
  CartCounterService = inject(CartCounterService);
  
  constructor(private ProductRequestService :ProductRequestService){}

  ngOnInit(){

    this.ProductRequestService.getSpecific_Product(this.id).subscribe((res) => {
      this.ViewProduct = res; 
    });

    this.CartCounterService.getCounter().subscribe((responce) => {
      this.cartCount = responce;
    });

  }
  
  decreaseCounter(){
    this.CartCounterService.setCounter(this.cartCount - 1)
  }

  increaseCountercart(){
    this.CartCounterService.getCounter().subscribe((res) =>this.cartCount = res);
    this.CartCounterService.setCounter(this.cartCount + 1)
    this.CartCounterService.productlist?.push(this.ViewProduct?.id?.toString() || '');
  }

 handleAddToCart(id:number){
  this.CartCounterService.getCounter().subscribe((res) =>this.cartCount = res);
  this.CartCounterService.setCounter(this.cartCount + 1); 
 }

}
