import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log("product service");
  }
  getProductData() {
    return [
      { name: 'mobile', brand: 'samsung', cost: 30000 },
      { name: 'Laptop', brand: 'dell', cost: 35000 },
      { name: 'washing machine', brand: 'samsung', cost: 20000 }
    ]
  }
}
