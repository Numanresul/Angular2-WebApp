
import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from "../service/cart.service";
import { CartItem } from "../cart-item";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit,DoCheck {

  constructor(private cartService:CartService) { }

  totalCartItem!:number; // Adım 3
  totalCartItemPrice!:number // Adım 4
  cartItem!:CartItem[]; // Adım 5
  ngOnInit(): void {
    this.cartItem = this.cartService.list();
  }

  ngDoCheck() {
    // Adım 7
    this.totalCartItem = this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    // Adım 8
    this.totalCartItemPrice= this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.price,0);
      }
}
