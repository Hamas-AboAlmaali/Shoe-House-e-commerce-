import { Component, OnInit } from '@angular/core';
import { ProductStaticService } from 'src/app/services/product-static.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products: any;
  constructor(public _productServices: ProductsService) { }

  ngOnInit(): void {
    this.products = this._productServices.getAllProducts().subscribe({
      next: (data) => {
        this.products = data
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  deleteProductHandler(id:any){
    this._productServices.deleteProduct(id).subscribe({
      next: (data) => {
        this.products = this.products.filter(
          (product: any) => product.id != id
        )
      }
    })
  }
}
