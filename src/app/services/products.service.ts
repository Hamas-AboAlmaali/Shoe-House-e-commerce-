import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { IProduct } from '../models/iproduct';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseURL: string = 'https://shoseserver3.onrender.com/products';

  constructor(public http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.baseURL);
  }

  getProductById(id: any) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  addProduct(product: any) {
    return this.http.post(this.baseURL, product);
  }
  editProduct(id: any, product: any) {
    return this.http.put(`${this.baseURL}/${id}`, product);
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
