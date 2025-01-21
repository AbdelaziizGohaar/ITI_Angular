import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-cartitem',
  imports: [],
  templateUrl: './user-cartitem.component.html',
  styleUrl: './user-cartitem.component.css'
})
export class UserCartitemComponent {
  @Input() item?:any;
  
} 
