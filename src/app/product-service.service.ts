import { Injectable } from '@angular/core';
import { InMemoryProductsService } from './in-memory-products.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Product } from './interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url = 'api/products';
  products: Product[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
