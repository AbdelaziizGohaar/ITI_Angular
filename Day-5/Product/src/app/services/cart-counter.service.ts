import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
private counter = new BehaviorSubject<number>(0);

  productlist?:string[]=[];   

  constructor() { }
  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newCounterVal : number){
    this.counter.next(newCounterVal);
  }


}
