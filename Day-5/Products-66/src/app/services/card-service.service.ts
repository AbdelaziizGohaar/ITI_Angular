import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  private card = new BehaviorSubject<string[]>([]);

  constructor() {}

  getCardId() {
    return this.card.asObservable();
  }

  addCardId(newId: string) {
    const currentCard = this.card.getValue();
    if (!currentCard.includes(newId)) {
      this.card.next([...currentCard, newId]);
    }
  }
}
