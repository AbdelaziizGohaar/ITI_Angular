import { Component, Input } from '@angular/core';
import productsData from '../../products.json'
import { NgClass } from '@angular/common';

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


  //  constructor(private activatedRoute: ActivatedRoute){}
  constructor(){
   this.productsinfo = productsData.products; 
  }

  ngOnInit(){
    // console.log(this.activatedRoute.snapshot.params['id'])
    console.log(this.id);
    // this.productsinfo = this.productsinfo.filter( product => product.id == this.id);
    this.ViewProduct = this.productsinfo.find(product => product.id == this.id);

  }

  // receivedFromChild(id: number){
  //   console.log('FROM PARENT' , id)
  //   this.productsinfo = this.productsinfo.filter( product => product.id == id)
  // }
  
}
