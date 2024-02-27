import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proizvod } from '../../../models/Proizvod';
import { ProizvodService } from '../../../services/proizvod.service';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-proizvod-page',
  templateUrl: './proizvod-page.component.html',
  styleUrl: './proizvod-page.component.css'
})
export class ProizvodPageComponent implements OnInit{
  proizvod!: Proizvod;
  constructor(activatedRoute:ActivatedRoute, proizvodService:ProizvodService,private serviceCart: CartService, private router:Router){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
      proizvodService.getProizvodById(params.id).subscribe(serverProizvod =>{
          this.proizvod = serverProizvod;
       });
    })
  }
  ngOnInit(): void {
  }
  addToCart(){
    this.serviceCart.addToCart(this.proizvod)
    this.router.navigateByUrl('/cart-page')
  }

}
