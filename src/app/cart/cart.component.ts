import { Component, OnInit } from '@angular/core';
// Adım 1
import { CartItem } from './cart-item'
import { data } from '../product/product'
import { CartService } from "../cart/service/cart.service"
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private cartService: CartService) { } // Adım 2
  isProductRemoved: boolean = false; // Adım 3
  cartItems: CartItem[] = [];
ngOnInit() {
    this.cartItems = this.cartService.list(); // Adım 4
    console.log(this.cartItems);
  }
removeFromCart(product: data) { // Adım 5
    if (confirm("Emin misiniz ?")) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
}