import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-overview',
  template: `
    <h3>Products</h3>
    <button (click)="getLatestPrices()">Refresh Prices</button>
    <ul>
      <li *ngFor="let product of products | async">{{product.name}} - {{product.price}}</li>
    </ul>
  `
})
export class ProductOverviewComponent implements OnInit {

  products: Observable<[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getLatestPrices();
  }

  getLatestPrices() {
    this.products = this.productsService.getProducts();
  }
}
