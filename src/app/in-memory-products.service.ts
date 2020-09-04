import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryProductsService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const products: Product[] = [
      {
        id: "1",
        name: "Product1",
        price: "100",
        description: "Random description 1",
        tags: "tag1",
        category: "category1",
        quantity: 0,
        returnable: true
      },

      {
        id: "2",
        name: "Product2",
        price: "200",
        description: "Random description 2",
        tags: "tag2",
        category: "category2",
        quantity: 0,
        returnable: true
      },

      {
        id: "3",
        name: "Product3",
        price: "300",
        description: "Random description 3",
        tags: "tag3",
        category: "category3",
        quantity: 0,
        returnable: true
      },
    ]

  
    return {products};
  }
  
}
