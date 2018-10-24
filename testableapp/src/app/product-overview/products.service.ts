import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Observable<[]>  {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next([
          { name: 'Shampoo Bottle', price: this.getRandomPrice() },
          { name: 'Loaf of Bread', price: this.getRandomPrice() },
          { name: 'Orange Juice', price: this.getRandomPrice() },
          { name: 'Toilet Paper', price: this.getRandomPrice() },
        ]);
      }, 500);
    });
  }

  /**
   * Get a random price between 1 and 10.
   */
  private getRandomPrice(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
