import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../types/product';
import { CartCounterService } from '../services/cart-counter.service';
import { CardServiceService } from '../services/card-service.service';

@Component({ 
  selector: 'app-product-item',
  imports: [NgClass],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  cartCount: number = 0;
  CartCounterService = inject(CartCounterService);
  cardServiceService = inject(CardServiceService);
   @Input() product?:Product;
   CardProducts: any = [];

  constructor(private router :Router){}

  ngOnInit(){
    this.CartCounterService.getCounter().subscribe((responce) => {
      this.cartCount = responce;
    });
  }

  decreaseCounter(){
    this.CartCounterService.setCounter(this.cartCount - 1)
  }

  increaseCounter(id:any){
    this.CartCounterService.getCounter().subscribe((res) =>this.cartCount = res);
    this.CartCounterService.setCounter(this.cartCount + 1);
    // this.CartCounterService.productlist?.push(this.product);
    this.CartCounterService.productlist?.push(this.product?.id?.toString() || '');


    if (!this.CardProducts.includes(this.product?.id)) {
      this.CardProducts.push(this.product?.id);
      this.cardServiceService.addCardId(id.toString());
    } 
  }


  
 
  handleAddToCart(id:number){
    this.CartCounterService.getCounter().subscribe((res) =>this.cartCount = res);
    this.CartCounterService.setCounter(this.cartCount + 1); 
   }


  handleView(id:any){
    this.router.navigate(['product-details',id]);
  }


  
}
