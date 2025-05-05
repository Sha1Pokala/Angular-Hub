import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicesInAngular';

  productData: {
    name: string;
    brand: string;
    cost: number;
  }[] | undefined

  constructor(private productService: ProductService) {
  }

  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(
      this.productData
    );

  }
}
