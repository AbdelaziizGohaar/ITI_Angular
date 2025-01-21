import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http : HttpClient) { }

  getProducts():Observable<any>{
    // return this.http.get('https://fakestoreapi.com/products');
    return this.http.get<any>('https://dummyjson.com/products');   
  }
 
  getSpecific_Product(id: any): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }
  
 
  
}
