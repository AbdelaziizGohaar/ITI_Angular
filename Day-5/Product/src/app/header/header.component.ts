import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartCount: number = 0;

  CartCounterService = inject(CartCounterService);
  
  constructor(){}

  ngOnInit(){
    this.CartCounterService.getCounter().subscribe((responce) => {
      this.cartCount = responce;
    });
  }


}
