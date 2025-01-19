import { Component } from '@angular/core';
import UsersData from '../../users.json'
import { UseritemComponent } from '../useritem/useritem.component';


@Component({
  selector: 'app-users',
  imports: [UseritemComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {

  usersinfo :Array<any> = [] ;
  constructor(){
    this.usersinfo = UsersData;
    // console.log(this.usersinfo);
  }

  handlesearch(userinfo:string){

  }

}
