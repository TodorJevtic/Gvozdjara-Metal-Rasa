import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Proizvod } from '../models/Proizvod';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(proizvod:Proizvod):void{
    let cartItem = this.cart.items.find(item => item.proizvod.id === proizvod.id);
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(proizvod));
    this.setToLocalStorage();
  }
  removeFromCart(proizvodId: string):void{
    this.cart.items = this.cart.items.filter(item => item.proizvod.id != proizvodId);
    this.setToLocalStorage();
  }
  changeQuantity(proizvodId: string, quantity:number){
    let cartItem = this.cart.items.find(item => item.proizvod.id === proizvodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.proizvod.cena;
    this.setToLocalStorage();
  }
  clearCart(){
    this.cart = new Cart();
    this.setToLocalStorage();
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
  getCart(): Cart{
    return this.cartSubject.value;
  }
  private setToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  private getFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
