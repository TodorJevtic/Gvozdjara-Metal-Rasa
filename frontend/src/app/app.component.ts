import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/User';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  cartQuantity= 0;
  korisnik!:User;
  constructor(serviceCart:CartService,private serviceUser:UserService){

    serviceCart.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    serviceUser.observableUser.subscribe((newUser)=>{
      this.korisnik = newUser;
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.serviceUser.logout();
  }
  get isAuth(){
    return this.korisnik.name;
  }

  title = 'Frontend';
}


