import { Component } from '@angular/core';
import productsData from '../../products.json'
import { ProductItemComponent } from '../product-item/product-item.component';
import{Product} from '../types/product';
import { ProductRequestService } from '../services/product-request.service';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

 productsinfo :Array<Product> = [] ;

  constructor(private ProductRequestService :ProductRequestService){}

  ngOnInit()
  {
    this.ProductRequestService
    .getProducts()
    .subscribe((res) => (this.productsinfo = res.products));
  }
  

} 