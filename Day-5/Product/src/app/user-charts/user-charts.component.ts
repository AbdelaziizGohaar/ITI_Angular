import { Component, inject } from '@angular/core';
import { CartCounterService } from '../services/cart-counter.service';
import { ProductRequestService } from '../services/product-request.service';
import { CardServiceService } from '../services/card-service.service';

@Component({
  selector: 'app-user-charts',
  templateUrl: './user-charts.component.html',
  styleUrl: './user-charts.component.css',
})
export class UserChartsComponent {
  CartCounterService = inject(CartCounterService);

  // List of API Products
  productsinfo: Array<any> = [];
  cartCount: number = 0;
  cartCounterService = inject(CartCounterService);
  cardService = inject(CardServiceService);

  // List of IDs of products in the cart
  ids_list = inject(CartCounterService).productlist;

  // Empty list of filtered
  filterd_list: Array<any> = [];
  productCounters: { [key: number]: number } = {}; // Object to hold counters for each product

  constructor(private ProductRequestService: ProductRequestService) {
    console.log('ids list is ', this.ids_list);
  }

  ngOnInit() {
    console.log('Before API Call');

    this.ProductRequestService.getProducts().subscribe(
      (res) => {
        console.log('Inside Subscribe - API Response:', res);
        this.productsinfo = res.products;
        console.log('Inside Subscribe - Products Info:', this.productsinfo);

        if (this.productsinfo?.length && this.ids_list?.length) {
          this.filterd_list = this.productsinfo.filter((product) =>
            this.ids_list?.includes(product.id.toString())
          );

          this.filterd_list.forEach((product) => {
            this.productCounters[product.id] = 1; // Default to 1
          });
        }
        console.log('Filtered Products:', this.filterd_list);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

    console.log('After API Call the products length', this.productsinfo);
  }

  increaseCounter(productId: number) {
    if (this.productCounters[productId] != null) {
      this.productCounters[productId] += 1; // Increase counter
      this.cartCount += 1; // Update total cart count if needed
    }
    console.log(`Increased counter for product ${productId}:`, this.productCounters[productId]);
  }

  decreaseCounter(productId: number) {
    if (this.productCounters[productId] != null && this.productCounters[productId] > 1) {
      this.productCounters[productId] -= 1; // Decrease counter
      this.cartCount -= 1; // Update total cart count if needed
    }
    console.log(`Decreased counter for product ${productId}:`, this.productCounters[productId]);
  }

  deleteCard(productId: number) {

    this.filterd_list = this.filterd_list.filter((product) => product.id !== productId);


    if (this.productCounters[productId] != null) {
      this.cartCount -= this.productCounters[productId];
    }


    delete this.productCounters[productId];


    this.ids_list = this.ids_list?.filter((id) => id !== productId.toString());

    console.log(`Deleted product ${productId}. Updated filtered list:`, this.filterd_list);
  }
}
