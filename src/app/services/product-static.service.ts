import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productList } from './productList';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  products: Iproduct[] = [];
  constructor() {
    this.products = productList;
  }

  getAllProduct(): Iproduct[] {
    return this.products;
  }

  getProductId(id: any) {
    return this.products.find((product) => product.id == id);
  }

  deleteProduct(id: any): Iproduct[] {
    this.products = this.products.filter((product) => product.id !== id);
    return this.products;
  }
  // add -- edit

  addProduct(newProduct: Iproduct): void {
    // Generate a unique ID for the new product (You can use a UUID library)
    newProduct.id = this.generateUniqueId();
    this.products.push(newProduct);
  }

  editProduct(editedProduct: Iproduct): void {
    const index = this.products.findIndex(product => product.id === editedProduct.id);
    if (index !== -1) {
      this.products[index] = editedProduct;
    } else {
      console.error('Product not found for editing');
    }
  }


  private generateUniqueId(): number {
    // Logic to generate a unique ID (e.g., incrementing a counter)
    // Alternatively, use a UUID library for generating unique IDs
    return this.products.length + 1;
  }

}
