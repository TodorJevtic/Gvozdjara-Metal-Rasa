import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/CartItem';
import { Cart } from '../../../models/Cart';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cart!: Cart;
  constructor(private serviceCart:CartService){
    this.serviceCart.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }
  ngOnInit(): void {
  }
  removeFromCart(cartItem: CartItem){
    this.serviceCart.removeFromCart(cartItem.proizvod.id);
  }
  changeQuantity(cartItem: CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.serviceCart.changeQuantity(cartItem.proizvod.id, quantity);
  }
}
