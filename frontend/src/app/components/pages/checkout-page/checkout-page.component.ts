import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit{

  orderr:Order = new Order();
  checkoutFormGroup!: FormGroup;
  constructor(cartService: CartService, private formBuilder:FormBuilder, private userService:UserService, private toastrService: ToastrService, private orderService:OrderService){
    const cart = cartService.getCart();
    this.orderr.items = cart.items;
    this.orderr.totalPrice = cart.totalPrice
  }
  ngOnInit(): void {
    let {name, address} = this.userService.currentUser;
    this.checkoutFormGroup = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required],
    });
  }
  get fc(){
    return this.checkoutFormGroup.controls
  }
  createOrder(){
    if(this.checkoutFormGroup.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }
    this.orderr.name = this.fc.name.value;
    this.orderr.address = this.fc.address.value;
    this.orderService.create(this.orderr).subscribe({
      next:()=>{
        console.log(this.orderr);
        alert("Thank for ordering on our site")
      },
      error:(errorResponse) =>{
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })
  }

}

