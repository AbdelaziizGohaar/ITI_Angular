import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-useritem',
  imports: [NgClass],
  templateUrl: './useritem.component.html',
  styleUrl: './useritem.component.css'
})
export class UseritemComponent {
  @Input() userinfo :any;

}
