import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: Product[];
  currentProduct: Product;
  productId: string;

  constructor(private router: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    })
    
    this.router.paramMap.subscribe((params => {
      this.productId = params.get("id");
    }))

    this.currentProduct = this.getProductById(this.productId);
    
  }

  getProductById(id: string): any {
    this.productService.getProducts().subscribe((data) => {
      return data.find(product => product.id === id);
    })
  }

}
