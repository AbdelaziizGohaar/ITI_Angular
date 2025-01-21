import { Component, inject } from '@angular/core';
import { UserCartitemComponent } from '../user-cartitem/user-cartitem.component';
import { CartCounterService } from '../services/cart-counter.service';
import { ProductRequestService } from '../services/product-request.service';
import { CardServiceService } from '../services/card-service.service';

@Component({
  selector: 'app-user-charts',
  imports: [],
  templateUrl: './user-charts.component.html',
  styleUrl: './user-charts.component.css'
})
export class UserChartsComponent {
 
  CartCounterService = inject(CartCounterService);

  /// list of Api Products 
  productsinfo :Array<any> = [] ;

  cartCount: number = 0;
  cartCounterService = inject(CartCounterService);
  cardService = inject(CardServiceService);

  /// list of ids of products in the cart
   ids_list = inject(CartCounterService).productlist;

    /// empty list of filtered
    filterd_list :Array<any> = [] ;

  constructor(private ProductRequestService :ProductRequestService) {
    console.log("ids list is ",this.ids_list);

    // this.cardService.getCardId().subscribe((ids: string[]) => {
    //   this.ids_list = ids;
    //   this.filterProducts();
    // });
  }

  ngOnInit() {
    console.log("Before API Call");

    this.ProductRequestService.getProducts().subscribe(
      (res) => {
        console.log("Inside Subscribe - API Response:", res);
        this.productsinfo = res.products;
        console.log("Inside Subscribe - Products Info:", this.productsinfo);
  
        if (this.productsinfo?.length && this.ids_list?.length) {
          this.filterd_list = this.productsinfo.filter((product) =>
            this.ids_list?.includes(product.id.toString()) // Convert product.id to string
          );
        }
        console.log('Filtered Products:', this.filterd_list);
      },
      (error) => {
        console.error("Error fetching products:", error);
      }
    );
  
    console.log("After API Call the products lenght", this.productsinfo);    
  }


  increaseCounter(id:any){
    this.CartCounterService.getCounter().subscribe((res) =>this.cartCount = res);
    this.CartCounterService.setCounter(this.cartCount + 1);
    // this.CartCounterService.productlist?.push(this.product);
  }


  // filterProducts() {
  //   if (this.productsinfo?.length && this.ids_list?.length) {
  //     this.filterd_list = this.productsinfo.filter((product) =>
  //       this.ids_list?.includes(product.id.toString()) // Convert product.id to string
  //     );
  //   }
  //   console.log('Filtered Products:', this.filterd_list);

  //   }


    decreaseCounter(productId: number) {

    }
  


    deleteCard(productId: number) {

    }
  

  }

   

 /*
 
 products: Array<any> = [];
  cardProductIds: Array<string> = [];
  filteredProducts: Array<any> = [];
  productCounters: { [key: number]: number } = {};
  totalCounter: number = 0;

  counterService = inject(CounterService);
  productList = inject(HttpService);
  cardService = inject(CardServiceService);

  ngOnInit() {
    // get card product ids
    this.cardService.getCardId().subscribe((ids: string[]) => {
      this.cardProductIds = ids;
      this.filterProducts();
    });

    // get all products
    this.productList.getProductList().subscribe((res) => {
      this.products = res.products;
      this.filterProducts();
    });

    // total counter
    this.counterService.getCounter().subscribe((res) => (this.totalCounter = res));
  }

  filterProducts() {
    if (this.products.length && this.cardProductIds.length) {
      this.filteredProducts = this.products.filter((product) =>
        this.cardProductIds.includes(product.id.toString())
      );

      this.filteredProducts.forEach((product) => {
        if (!(product.id in this.productCounters)) {
          this.productCounters[product.id] = 1;
        }
      });

      console.log('Filtered Products:', this.filteredProducts);
      console.log('Product Counters:', this.productCounters);
    }
  }

  decreaseCounter(productId: number) {
    if (this.productCounters[productId] > 1) {
      this.productCounters[productId] -= 1;
      this.totalCounter -= 1;
      this.counterService.setCounter(this.totalCounter);
    }
  }

  increaseCounter(productId: number) {
    this.productCounters[productId] += 1;
    this.totalCounter += 1;
    this.counterService.setCounter(this.totalCounter);
  }

  deleteCard(productId: number) {
    if (this.productCounters[productId]) {
      // decrease the total counter by the quantity of the product being deleted
      this.totalCounter -= this.productCounters[productId];
      this.counterService.setCounter(this.totalCounter);
    }

    this.filteredProducts = this.filteredProducts.filter(
      (product) => product.id !== productId
    );

    delete this.productCounters[productId];

    this.cardProductIds = this.cardProductIds.filter(
      (id) => id !== productId.toString()
    );

    console.log(`Product with ID ${productId} deleted.`);
    console.log('Updated Total Counter:', this.totalCounter);
  }
 
 */



