// Adım 1
import { Injectable } from '@angular/core';
import { data, Product } from '../../product/product'
import { CartItem } from '../cart-item'
import { CART_ITEM_LIST } from '../cart-item-list'
@Injectable()
export class CartService {
// Adım 2
cartItems!: CartItem[];
  constructor() { }
// Adım 3
addToCart(product: data): void {
    var addedItem = CART_ITEM_LIST.find(t => t.product.id == product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CART_ITEM_LIST.push(cartItem);
    }
  }
// Adım 4
list(): CartItem[] {
    return CART_ITEM_LIST;
  }
// Adım 5
removeFromCart(product: data) {
    var addedItem = CART_ITEM_LIST.find(t => t.product.id == product.id);
    var indexNo = CART_ITEM_LIST.findIndex(x=>x.product.id===product.id);
    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }
}