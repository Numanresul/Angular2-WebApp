import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { data } from './product';
import { ProductService } from "./service/product.service";
import { CartService } from "../cart/service/cart.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

products!: Product;  // Adım 3
addedProduct!: data;
filterText !:string;
constructor(private activatedRoute:ActivatedRoute,private productService:ProductService, private cartService:CartService) {} // Adım 4

  ngOnInit(): void {
    //this.getProduct();  
    this.activatedRoute // Adım 4
    this.activatedRoute.params.subscribe(params=>{
      this.getProduct(params["seoUrl"]);
    })
  }

  getProduct(seoCategory:string){ // Adım 5
    this.productService.getProduct().subscribe(response =>{
      console.log(response),
      this.products = response
      if(seoCategory){
        console.log(seoCategory),
        this.products.data = this.products.data.filter(el=> {let categories1 = el.categories.some(({ name }) =>name === seoCategory);return categories1})
       
      }
    })
  }
  addToCard(product:data){  // Adım 2
    //console.log(product);
    this.addedProduct = product;
    this.cartService.addToCart(product);
  }

}
