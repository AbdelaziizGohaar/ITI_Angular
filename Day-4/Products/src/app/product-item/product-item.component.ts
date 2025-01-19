import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [NgClass],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  constructor(private router :Router){

  }
  @Input() product:any ;

  handleView(id:string){
    this.router.navigate(['product-details',id]);

  }
  
}
